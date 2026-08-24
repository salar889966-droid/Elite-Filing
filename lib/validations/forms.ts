import { z } from "zod";

/**
 * Supported form type enum values matching Supabase DB form_type_enum
 */
export const formTypeEnum = z.enum([
  "contact",
  "booking",
  "company_formation",
  "banking_compliance",
  "newsletter",
]);

export type FormType = z.infer<typeof formTypeEnum>;

/**
 * Company Formation Schema
 */
export const companyFormationSchema = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  name: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().trim().optional(),
  country: z.string().trim().optional(),
  selectedCountry: z.string().trim().optional(),
  service: z.string().trim().optional(),
  selectedService: z.string().trim().optional(),
  companyName: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  details: z.record(z.any()).optional(),
  formType: z.literal("company_formation").default("company_formation"),
});

/**
 * Booking / Consultation Schema
 */
export const bookingSchema = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  name: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().trim().optional(),
  country: z.string().trim().optional(),
  selectedCountry: z.string().trim().optional(),
  service: z.string().trim().optional(),
  selectedService: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  details: z.record(z.any()).optional(),
  formType: z.literal("booking").default("booking"),
});

/**
 * Banking & Compliance Schema
 */
export const bankingComplianceSchema = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  name: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().trim().optional(),
  country: z.string().trim().optional(),
  selectedCountry: z.string().trim().optional(),
  service: z.string().trim().optional(),
  selectedService: z.string().trim().optional(),
  companyName: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  details: z.record(z.any()).optional(),
  formType: z.literal("banking_compliance").default("banking_compliance"),
});

/**
 * General Contact Schema
 */
export const generalContactSchema = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  name: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  country: z.string().trim().optional(),
  selectedCountry: z.string().trim().optional(),
  service: z.string().trim().optional(),
  selectedService: z.string().trim().optional(),
  message: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  details: z.record(z.any()).optional(),
  formType: z.literal("contact").default("contact"),
});

/**
 * Newsletter Schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  source: z.string().trim().optional(),
  formType: z.literal("newsletter").default("newsletter"),
});

/**
 * Inferred TypeScript types derived from Zod schemas
 */
export type CompanyFormationInput = z.infer<typeof companyFormationSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type BankingComplianceInput = z.infer<typeof bankingComplianceSchema>;
export type GeneralContactInput = z.infer<typeof generalContactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
