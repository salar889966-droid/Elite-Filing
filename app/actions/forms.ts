"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import {
  companyFormationSchema,
  generalContactSchema,
  bookingSchema,
  bankingComplianceSchema,
  newsletterSchema,
  FormType,
} from "@/lib/validations/forms";

export interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  data?: any;
}

/**
 * Helper to parse raw input from FormData or plain JavaScript object
 */
function parsePayload(input: any): Record<string, any> {
  const payload: Record<string, any> = {};
  if (input instanceof FormData) {
    input.forEach((value, key) => {
      payload[key] = value.toString();
    });
  } else if (typeof input === "object" && input !== null) {
    return { ...input };
  } else if (typeof input === "string") {
    payload.email = input;
  }
  return payload;
}

/**
 * Helper to split full name into first_name and last_name if needed
 */
function extractNameComponents(payload: Record<string, any>) {
  let firstName = payload.firstName || "";
  let lastName = payload.lastName || "";

  if ((!firstName || !lastName) && payload.name) {
    const parts = payload.name.trim().split(" ");
    firstName = parts[0] || "";
    lastName = parts.slice(1).join(" ") || "";
  } else if ((!firstName || !lastName) && payload.customerName) {
    const parts = payload.customerName.trim().split(" ");
    firstName = parts[0] || "";
    lastName = parts.slice(1).join(" ") || "";
  }

  return { firstName, lastName };
}

/**
 * Initialize Supabase Client with Service Role Key
 */
function getSupabaseClient() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vrldzgjqtcgokjljztds.supabase.co";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  if (!serviceRoleKey) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY is not defined.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Main Server Action for all form submissions (Company Formation, Contact, Booking, Banking & Compliance)
 */
export async function submitFormAction(
  arg1: any,
  arg2?: FormData
): Promise<ActionResult> {
  try {
    let rawPayload = parsePayload(arg2 || arg1);

    // If first argument is state object (useActionState), arg2 will be FormData
    if (arg1 && typeof arg1 === "object" && "success" in arg1 && arg2 instanceof FormData) {
      rawPayload = parsePayload(arg2);
    }

    const formType: FormType = (rawPayload.formType || rawPayload.form_type || "company_formation") as FormType;

    let validatedData: any;

    // Validate payload against target schema based on formType
    if (formType === "newsletter") {
      return subscribeNewsletterAction(rawPayload);
    } else if (formType === "contact") {
      const parsed = generalContactSchema.safeParse(rawPayload);
      if (!parsed.success) {
        const fieldErrs = parsed.error.flatten().fieldErrors;
        const firstErr = Object.values(fieldErrs)[0]?.[0] || "Validation failed";
        return { success: false, error: firstErr, errors: fieldErrs };
      }
      validatedData = parsed.data;
    } else if (formType === "booking") {
      const parsed = bookingSchema.safeParse(rawPayload);
      if (!parsed.success) {
        const fieldErrs = parsed.error.flatten().fieldErrors;
        const firstErr = Object.values(fieldErrs)[0]?.[0] || "Validation failed";
        return { success: false, error: firstErr, errors: fieldErrs };
      }
      validatedData = parsed.data;
    } else if (formType === "banking_compliance") {
      const parsed = bankingComplianceSchema.safeParse(rawPayload);
      if (!parsed.success) {
        const fieldErrs = parsed.error.flatten().fieldErrors;
        const firstErr = Object.values(fieldErrs)[0]?.[0] || "Validation failed";
        return { success: false, error: firstErr, errors: fieldErrs };
      }
      validatedData = parsed.data;
    } else {
      const parsed = companyFormationSchema.safeParse(rawPayload);
      if (!parsed.success) {
        const fieldErrs = parsed.error.flatten().fieldErrors;
        const firstErr = Object.values(fieldErrs)[0]?.[0] || "Validation failed";
        return { success: false, error: firstErr, errors: fieldErrs };
      }
      validatedData = parsed.data;
    }

    const { firstName, lastName } = extractNameComponents(rawPayload);
    const email = (validatedData.email || rawPayload.email || "").toLowerCase();
    const phone = validatedData.phone || rawPayload.phone || null;
    const selectedCountry = validatedData.selectedCountry || validatedData.country || rawPayload.country || null;
    const selectedService = validatedData.selectedService || validatedData.service || rawPayload.service || null;

    if (!email) {
      return { success: false, error: "A valid email address is required." };
    }

    const supabase = getSupabaseClient();

    // Step 1: Upsert Contact into `contacts` table (onConflict: email)
    const { data: contact, error: contactErr } = await supabase
      .from("contacts")
      .upsert(
        {
          first_name: firstName || null,
          last_name: lastName || null,
          email,
          phone,
        },
        { onConflict: "email" }
      )
      .select("id")
      .single();

    if (contactErr || !contact) {
      console.error("Supabase Contact Upsert Error:", contactErr);
      return {
        success: false,
        error: contactErr?.message || "Failed to save contact information.",
      };
    }

    // Prepare details JSONB
    const details = rawPayload.details || { ...rawPayload };
    delete details.firstName;
    delete details.lastName;
    delete details.email;
    delete details.phone;

    // Step 2: Insert Lead into `leads` table
    const { data: lead, error: leadErr } = await supabase
      .from("leads")
      .insert({
        contact_id: contact.id,
        form_type: formType,
        status: "new",
        selected_country: selectedCountry,
        selected_service: selectedService,
        details,
      })
      .select("id")
      .single();

    if (leadErr) {
      console.error("Supabase Lead Insert Error:", leadErr);
      return {
        success: false,
        error: leadErr.message || "Failed to record lead inquiry.",
      };
    }

    // Step 3: Resend Email Dispatches
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const teamEmail = process.env.NOTIFICATION_EMAIL_TEAM || "info@elite-filing.com";
      const fromEmail = "Elite Filing <onboarding@resend.dev>";
      const customerFullName = [firstName, lastName].filter(Boolean).join(" ") || email;

      // Internal Alert Email
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [teamEmail],
          subject: `🔔 New ${formType.toUpperCase()} Lead: ${customerFullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #ea580c; margin-top: 0;">New ${formType} Lead Submission</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #cbd5e1; font-weight: bold;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">${customerFullName}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #cbd5e1; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #cbd5e1;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #cbd5e1; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">${phone || "N/A"}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #cbd5e1; font-weight: bold;">Country:</td><td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">${selectedCountry || "N/A"}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #cbd5e1; font-weight: bold;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #cbd5e1;">${selectedService || "N/A"}</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 12px; background: #f8fafc; border-left: 4px solid #ea580c; font-size: 13px;">
                <strong>Details:</strong>
                <pre style="white-space: pre-wrap; font-family: monospace; font-size: 12px;">${JSON.stringify(details, null, 2)}</pre>
              </div>
            </div>
          `,
        });
      } catch (e) {
        console.error("Resend Team Alert Email Error:", e);
      }

      // Client Confirmation Email
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: `We Received Your Request — Elite Filing`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #ea580c; margin-top: 0;">Thank you, ${customerFullName}!</h2>
              <p style="font-size: 15px; line-height: 1.6;">
                We have received your inquiry regarding <strong>${selectedService || "our corporate services"}</strong>.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #475569;">
                Our corporate compliance team is reviewing your information and will reach out to you within 4 business hours.
              </p>
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                Elite Filing Co. — Global Corporate Formation & Compliance
              </div>
            </div>
          `,
        });
      } catch (e) {
        console.error("Resend Client Confirmation Email Error:", e);
      }
    }

    return {
      success: true,
      message: "Submission received successfully!",
      data: { leadId: lead?.id, contactId: contact?.id },
    };
  } catch (err: any) {
    console.error("Server Action Exception:", err);
    return {
      success: false,
      error: err.message || "An unexpected error occurred during form submission.",
    };
  }
}

/**
 * Server Action for Newsletter Subscriptions
 */
export async function subscribeNewsletterAction(
  payload: FormData | Record<string, any> | string
): Promise<ActionResult> {
  try {
    const raw = parsePayload(payload);
    const parsed = newsletterSchema.safeParse(raw);

    if (!parsed.success) {
      return { success: false, error: "Please provide a valid email address." };
    }

    const email = parsed.data.email.toLowerCase();
    const supabase = getSupabaseClient();

    // Upsert into `subscribers` table (onConflict: email)
    const { error: subErr } = await supabase
      .from("subscribers")
      .upsert({ email }, { onConflict: "email" });

    if (subErr) {
      console.error("Supabase Subscriber Error:", subErr);
      return { success: false, error: "Failed to save newsletter subscription." };
    }

    // Send confirmation email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      try {
        await resend.emails.send({
          from: "Elite Filing <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to Elite Filing Insights!",
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #ea580c; margin-top: 0;">Subscribed to Corporate Insights</h2>
              <p style="font-size: 15px; line-height: 1.6;">
                Thank you for subscribing! You will receive our latest international company formation guides, tax compliance updates, and global expansion strategy reports.
              </p>
            </div>
          `,
        });
      } catch (e) {
        console.error("Resend Newsletter Email Error:", e);
      }
    }

    return {
      success: true,
      message: "Subscribed to global tax & compliance alerts!",
    };
  } catch (err: any) {
    console.error("Subscriber Action Exception:", err);
    return {
      success: false,
      error: err.message || "An unexpected error occurred.",
    };
  }
}
