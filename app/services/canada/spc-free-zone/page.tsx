import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight, 
  Globe2, 
  Receipt, 
  Zap, 
  HelpCircle,
  Sparkles,
  PhoneCall,
  Lock,
  Landmark
} from "lucide-react";
import { TrustSignals } from "@/components/site/TrustSignals";

export const metadata: Metadata = {
  title: "SPC FREE Zone Setup & Licensing — Elite Filing",
  description: "Set up your SPC Free Zone entity. Complete corporate licensing, tax exemption structuring, remote onboarding, and global business banking support.",
  alternates: { canonical: "https://elite-filing.com/services/canada/spc-free-zone" },
};

const benefits = [
  {
    title: "100% Foreign Ownership",
    desc: "Complete foreign ownership and control with zero requirement for local sponsors or resident partners.",
    icon: ShieldCheck,
  },
  {
    title: "Tax Exemption Benefits",
    desc: "Maximize international profits with tax optimization advantages, zero customs duty, and capital repatriation.",
    icon: Receipt,
  },
  {
    title: "Rapid Remote Setup",
    desc: "Expedited processing with digital documentation and fast-track trade license issuance within business days.",
    icon: Zap,
  },
  {
    title: "Multi-Currency Banking",
    desc: "Direct support in opening international merchant and corporate banking accounts with global payment gateways.",
    icon: Landmark,
  },
];

const steps = [
  {
    step: "01",
    title: "Activity & License Selection",
    desc: "Select your commercial or service activities and customize your SPC Free Zone license package.",
  },
  {
    step: "02",
    title: "Document Submission & KYC",
    desc: "Submit digital shareholder passports and corporate structure details for rapid pre-approval.",
  },
  {
    step: "03",
    title: "Licensing & Certificate Issuance",
    desc: "Official issuance of your SPC Free Zone Certificate of Formation, Lease Agreement, and Trade License.",
  },
  {
    step: "04",
    title: "Banking & Visa Assistance",
    desc: "Facilitation of corporate bank account onboarding, investor visa processing, and ongoing renewals.",
  },
];

const faqs = [
  {
    q: "What is an SPC Free Zone setup?",
    a: "An SPC Free Zone entity is a specialized corporate vehicle designed for international entrepreneurs, ecommerce operators, and consultancy firms seeking 100% foreign ownership, rapid licensing, and flexible tax incentives.",
  },
  {
    q: "Do I need to travel in person to set up an SPC Free Zone company?",
    a: "No. The entire formation process from initial KYC verification to official trade license issuance is completed 100% remotely.",
  },
  {
    q: "Can an SPC Free Zone company open international bank accounts?",
    a: "Yes. With your official trade license, Certificate of Incorporation, and company registry documents, you can open accounts with international digital banks (e.g., Wise Business, Payoneer) and regional commercial banks.",
  },
  {
    q: "What ongoing annual compliance is required?",
    a: "SPC Free Zone entities require an annual trade license renewal and standard annual corporate reporting, which Elite Filing manages seamlessly on your behalf.",
  },
];

export default function CanadaSPCFreeZonePage() {
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
          <span className="text-[#0e3b96] dark:text-white font-bold">SPC FREE zone</span>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center"
        style={{ minHeight: "clamp(480px, 55vh, 650px)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
            alt="SPC Free Zone Setup"
            fill
            priority
            className="object-cover opacity-85"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10" />
        </div>

        <div className="container-page relative z-20 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Jurisdiction Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#F88D4F]" />
              <div className="w-px h-4 bg-white/30" />
              <span className="text-[12px] font-bold text-white uppercase tracking-wider">Specialized Free Zone Solutions</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.2] drop-shadow-lg">
              SPC FREE Zone Setup & Licensing
            </h1>

            <p className="mt-4 text-base md:text-[17px] text-slate-200 leading-relaxed font-light max-w-xl drop-shadow-md">
              Fast, cost-effective corporate licensing with 100% foreign ownership, international tax optimization, fast-track registration, and dedicated corporate banking assistance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services/canada"
                className="btn-primary-cta inline-flex items-center gap-2"
              >
                <span>Explore Free Zone Setup</span>
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
          <div className="eyebrow mx-auto mb-3">Why SPC Free Zone</div>
          <h2 className="text-3xl font-bold font-display text-navy-deep dark:text-white">
            Designed for Fast-Growing Global Businesses
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Enjoy streamlined corporate governance, swift licensing, and comprehensive international tax and compliance privileges.
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
              Rapid Execution
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              How SPC Free Zone Setup Works
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
          <div className="eyebrow mx-auto mb-2">Key Clarifications</div>
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
              Ready for SPC FREE Zone Setup?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Consult with our structuring specialists today and get your international entity licensed rapidly.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link href="/services/canada" className="btn-primary-cta">
                Start Setup <ArrowRight className="w-4 h-4 ml-2" />
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
