"use client";

import React, { useActionState, useState } from "react";
import { submitFormAction, FormStateResponse } from "@/app/actions/submit-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  Globe,
  Mail,
  User,
  Phone,
  FileText,
} from "lucide-react";

const initialState: FormStateResponse = {
  success: false,
  message: "",
  errors: {},
};

export default function CompanyFormationForm() {
  const [state, formAction, isPending] = useActionState(submitFormAction, initialState);

  // Controlled values for Select elements to work seamlessly with FormData
  const [country, setCountry] = useState<string>("United States (Delaware)");
  const [service, setService] = useState<string>("US LLC Formation & Registered Agent");

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-slate-800 bg-slate-900/90 text-slate-100 backdrop-blur-md">
      <CardHeader className="space-y-2 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg border border-orange-500/20">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold tracking-tight text-white">
              Start Your Company Formation
            </CardTitle>
            <CardDescription className="text-slate-400 text-sm mt-1">
              Complete the details below to launch your corporate entity with Elite Filing.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Success Banner */}
        {state?.success && (
          <Alert className="mb-6 bg-emerald-950/60 border-emerald-500/40 text-emerald-200">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <AlertTitle className="text-emerald-300 font-semibold">
              Submission Received!
            </AlertTitle>
            <AlertDescription className="text-emerald-200/90 text-sm mt-1">
              {state.message || "Thank you! Your company formation request has been registered. Our legal specialists will contact you within 24 hours."}
            </AlertDescription>
          </Alert>
        )}

        {/* Global Error Banner */}
        {!state?.success && state?.message && (
          <Alert className="mb-6 bg-rose-950/60 border-rose-500/40 text-rose-200">
            <AlertCircle className="h-5 w-5 text-rose-400" />
            <AlertTitle className="text-rose-300 font-semibold">Form Error</AlertTitle>
            <AlertDescription className="text-rose-200/90 text-sm mt-1">
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="space-y-6">
          <input type="hidden" name="formType" value="company_formation" />
          <input type="hidden" name="country" value={country} />
          <input type="hidden" name="service" value={service} />

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-slate-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-400" /> First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                disabled={isPending}
                required
                className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500"
              />
              {state?.errors?.firstName && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.firstName[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-slate-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-orange-400" /> Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                disabled={isPending}
                required
                className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500"
              />
              {state?.errors?.lastName && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.lastName[0]}</p>
              )}
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-400" /> Business Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                disabled={isPending}
                required
                className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500"
              />
              {state?.errors?.email && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.email[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-200 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-400" /> Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                disabled={isPending}
                required
                className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500"
              />
              {state?.errors?.phone && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          {/* Service & Country Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-200 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-400" /> Target Jurisdiction *
              </Label>
              <Select value={country} onValueChange={setCountry} disabled={isPending}>
                <SelectTrigger className="bg-slate-950/60 border-slate-800 text-white focus:ring-orange-500/20">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-800 text-white">
                  <SelectItem value="United States (Delaware)">United States (Delaware)</SelectItem>
                  <SelectItem value="United States (Wyoming)">United States (Wyoming)</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="United Arab Emirates (Freezone)">United Arab Emirates (Freezone)</SelectItem>
                  <SelectItem value="Singapore">Singapore</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Cayman Islands">Cayman Islands</SelectItem>
                  <SelectItem value="Other International">Other International</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.country && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.country[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-slate-200 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-orange-400" /> Filing Service *
              </Label>
              <Select value={service} onValueChange={setService} disabled={isPending}>
                <SelectTrigger className="bg-slate-950/60 border-slate-800 text-white focus:ring-orange-500/20">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-800 text-white">
                  <SelectItem value="US LLC Formation & Registered Agent">US LLC Formation & Registered Agent</SelectItem>
                  <SelectItem value="US C-Corp Incorporation">US C-Corp Incorporation</SelectItem>
                  <SelectItem value="UK LTD Formation & Virtual Office">UK LTD Formation & Virtual Office</SelectItem>
                  <SelectItem value="UAE Freezone Company Setup">UAE Freezone Company Setup</SelectItem>
                  <SelectItem value="Banking & Compliance Package">Banking & Compliance Package</SelectItem>
                  <SelectItem value="Global Tax & Corporate Compliance">Global Tax & Corporate Compliance</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.service && (
                <p className="text-xs text-rose-400 mt-1">{state.errors.service[0]}</p>
              )}
            </div>
          </div>

          {/* Preferred Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-slate-200 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-400" /> Proposed Company Name (Optional)
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="e.g. Apex Global Ventures LLC"
              disabled={isPending}
              className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500"
            />
            {state?.errors?.companyName && (
              <p className="text-xs text-rose-400 mt-1">{state.errors.companyName[0]}</p>
            )}
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-slate-200 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-orange-400" /> Additional Requirements or Questions (Optional)
            </Label>
            <Textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Tell us about your business structure, ownership preferences, or banking needs..."
              disabled={isPending}
              className="bg-slate-950/60 border-slate-800 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-slate-500 resize-none"
            />
            {state?.errors?.notes && (
              <p className="text-xs text-rose-400 mt-1">{state.errors.notes[0]}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <span>Submit Formation Request</span>
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to Elite Filing&apos;s privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
