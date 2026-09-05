import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Receipt, 
  Search, 
  HelpCircle,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

export const metadata: Metadata = {
  title: "Canada LLC & Corporation Formation — Elite Filing",
  description: "Form your Canadian federal or provincial corporation & LLC. Includes NUANS corporate name search, Articles of Incorporation, GST/HST registration, and corporate tax setup.",
  alternates: { canonical: "https://elite-filing.com/services/canada/llc-formation" },
};

const benefits = [
  {
    title: "Federal & Provincial Filing",
    desc: "Complete registration under the Canada Business Corporations Act (CBCA) or provincial corporate registries.",
    icon: Building2,
  },
  {
    title: "NUANS Name Search",
    desc: "Comprehensive pre-clearance NUANS report to protect and secure your corporate name across Canada.",
    icon: Search,
  },
  {
    title: "CRA Tax & GST/HST Registration",
    desc: "Direct procurement of your Business Number (BN) and GST/HST tax account from the Canada Revenue Agency.",
    icon: Receipt,
  },
  {
    title: "100% Foreign Ownership",
    desc: "Form your Canadian entity remotely with complete foreign shareholder and director support.",
    icon: ShieldCheck,
  },
];

const steps = [
  {
    step: "01",
    title: "Jurisdiction & Name Selection",
    desc: "Select Federal or Provincial incorporation (e.g., Ontario, British Columbia) and submit your proposed name.",
  },
  {
    step: "02",
    title: "NUANS Name Reservation",
    desc: "We perform an official NUANS search and obtain government reservation confirmation for your company name.",
  },
  {
    step: "03",
    title: "Articles of Incorporation",
    desc: "We draft and file the Articles of Incorporation, Initial Notice, and corporate share structure.",
  },
  {
    step: "04",
    title: "CRA Tax & Business Number",
    desc: "Receive your Certificate of Incorporation and CRA Business Number ready for corporate banking.",
  },
];

const faqs = [
  {
    q: "Should I incorporate federally or provincially in Canada?",
    a: "Federal incorporation offers nationwide name protection and allows operating in any province, but requires extra-provincial registration in the province where you operate. Provincial incorporation is ideal if your operations are centered in one province.",
  },
  {
    q: "Can non-residents own 100% of a Canadian entity?",
    a: "Yes. Non-residents can own 100% of shares in a Canadian corporation. Several provinces (such as Ontario and British Columbia) have removed Canadian residency requirements for directors as well.",
  },
  {
    q: "What is a NUANS search?",
    a: "A NUANS (Newly Upgraded Automated Name Search) report compares your proposed name against existing corporations and trademarks in Canada to ensure uniqueness before approval.",
  },
  {
    q: "When must I register for GST/HST in Canada?",
    a: "GST/HST registration is mandatory once your worldwide taxable supplies exceed $30,000 CAD over a single calendar quarter or four consecutive quarters.",
  },
];

export default function CanadaLLCFormationPage() {
  return (
    <div className="pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Breadcrumb Strip */}
      <div className="w-full bg-[#f8fafe] dark:bg-slate-900/60 border-b border-[#0e3b96]/10 dark:border-slate-800 py-3.5">
        <div className="container-page flex items-center gap-2.5 text-[13px] font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-[#0e3b96] dark:hover:text-blue-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
          <Link href="/services" className="hover:text-[#0e3b96] dark:hover:text-blue-300 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
          <Link href="/services/canada" className="hover:text-[#0e3b96] dark:hover:text-blue-300 transition-colors flex items-center gap-1.5">
            <span className="fi fi-ca rounded-sm shadow-xs shrink-0" style={{ width: "20px", height: "15px", backgroundSize: "cover" }} />
            <span>Canada</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#F07228]" />
          <span className="text-[#0e3b96] dark:text-white font-bold">LLC Formation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center"
        style={{ minHeight: "clamp(480px, 55vh, 650px)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1533417457911-4ec911485388?q=80&w=1548&auto=format&fit=crop"
            alt="Canada LLC Formation"
            fill
            priority
            className="object-cover opacity-85"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10" />
        </div>

        <div className="container-page relative z-20 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Jurisdiction Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-lg">
              <span className="fi fi-ca rounded-sm shadow-xs shrink-0" style={{ width: "24px", height: "18px", backgroundSize: "cover" }} />
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F88D4F]" />
                <span className="text-[12px] font-bold text-white uppercase tracking-wider">Canada Incorporation</span>
              </div>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.2] drop-shadow-lg">
              Form Your Canadian LLC & Corporation
            </h1>

            <p className="mt-4 text-base md:text-[17px] text-slate-200 leading-relaxed font-light max-w-xl drop-shadow-md">
              Seamless federal and provincial incorporation with NUANS name search, CRA business numbers, GST/HST registration, and corporate tax support.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services/canada"
                className="btn-primary-cta inline-flex items-center gap-2"
              >
                <span>Configure Canada Package</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F88D4F]" />
                <span>Talk to Specialist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container-page py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow mx-auto mb-3">Enterprise Setup</div>
          <h2 className="text-3xl font-bold font-display text-navy-deep dark:text-white">
            Comprehensive Canadian Business Formation
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Build your brand in one of the world&apos;s most stable and respected economies with end-to-end filing support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div 
                key={b.title}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#0e3b96]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0e3b96]/10 text-[#0e3b96] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Steps */}
      <section className="container-page py-12">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#F07228] uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Streamlined Steps
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              How Canada Formation Works
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                <span className="text-2xl font-black text-[#0e3b96]/20 dark:text-blue-400/20 font-display block mb-2">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* FAQs */}
      <section className="container-page py-16 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="eyebrow mx-auto mb-2">Help & Clarity</div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-deep dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex gap-4 items-start">
              <HelpCircle className="w-5 h-5 text-[#F07228] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-page py-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#030b20] via-[#082255] to-[#0e3b96] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">
              Ready to Register Your Canadian Entity?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Launch your Canadian business with full legal protection, transparent pricing, and ongoing compliance.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link href="/services/canada" className="btn-primary-cta">
                Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
