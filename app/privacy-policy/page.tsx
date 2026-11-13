import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Elite Filing",
  description:
    "Learn how Elite Filing collects, uses, stores, and protects personal information when you use our website and business services.",
  alternates: { canonical: "https://elite-filing.com/privacy-policy" },
};

const sections = [
  {
    title: "1. Who we are",
    body: (
      <>
        <p>
          Elite Filing (“Elite Filing”, “we”, “us” or “our”) provides business
          formation, corporate administration, tax and compliance support, and
          related professional services. This Privacy Policy explains how we
          handle personal information when you visit <strong>elite-filing.com</strong>,
          contact us, request a quote, become a client, or otherwise interact
          with our services.
        </p>
        <p>
          For privacy questions or requests, contact us at{" "}
          <a href="mailto:info@elite-filing.com">info@elite-filing.com</a>.
        </p>
      </>
    ),
  },
  {
    title: "2. Information we may collect",
    body: (
      <>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li><strong>Identity and contact details:</strong> name, email address, telephone number, postal address, and job title.</li>
          <li><strong>Business and service information:</strong> company name, business activity, jurisdiction, ownership or director details, and information needed to assess or deliver a requested service.</li>
          <li><strong>Verification and compliance information:</strong> identity, address, corporate, tax, and due-diligence documents where required for a service or legal obligation. Please use the secure submission method we provide for these documents.</li>
          <li><strong>Communications:</strong> enquiries, support requests, messages, call notes, and information you choose to provide.</li>
          <li><strong>Transaction information:</strong> service, invoice, payment status, and billing records. Payment card or bank details may be collected and processed directly by the relevant payment provider.</li>
          <li><strong>Technical and usage information:</strong> IP address, browser and device information, pages visited, referral information, and cookie or similar technology data, subject to your browser and consent settings.</li>
        </ul>
        <p>
          We do not ask you to provide information that is unrelated to your
          enquiry or service. If you provide information about another person,
          you should be authorised to do so and should make them aware of this
          Policy where appropriate.
        </p>
      </>
    ),
  },
  {
    title: "3. How we use information",
    body: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to enquiries, prepare proposals, and provide requested services.</li>
          <li>Carry out company formation, tax, compliance, verification, and related administrative work.</li>
          <li>Communicate about applications, orders, appointments, invoices, and support.</li>
          <li>Maintain business, accounting, audit, and service records.</li>
          <li>Operate, secure, troubleshoot, and improve our website and services.</li>
          <li>Send service updates and, where permitted, relevant marketing communications. You can opt out of marketing at any time.</li>
          <li>Meet legal, regulatory, fraud-prevention, and professional obligations and protect our rights.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legal grounds for processing",
    body: (
      <p>
        Where applicable law requires a legal basis, we process information
        because it is necessary to take steps at your request or perform a
        contract, comply with a legal obligation, pursue legitimate business
        interests that are not overridden by your rights, or because you have
        given consent. Where we rely on consent, you may withdraw it, although
        this will not affect processing already carried out lawfully.
      </p>
    ),
  },
  {
    title: "5. When we share information",
    body: (
      <>
        <p>
          We do not sell personal information. We may share it only where
          reasonably necessary with:
        </p>
        <ul>
          <li>Our employees and authorised service professionals who need it to perform their duties.</li>
          <li>Service providers supporting website hosting, communications, secure file handling, analytics, customer support, and payment processing.</li>
          <li>Government departments, company registries, tax authorities, banks, regulated professionals, and other relevant organisations when required to deliver your requested service or comply with law.</li>
          <li>Professional advisers, auditors, insurers, or authorities where necessary to protect rights, address disputes, or meet legal obligations.</li>
          <li>A successor or transaction partner in connection with a merger, restructuring, or transfer of business, subject to appropriate safeguards.</li>
        </ul>
        <p>
          Third-party recipients may process information under their own
          privacy terms. We encourage you to review those terms where relevant.
        </p>
      </>
    ),
  },
  {
    title: "6. International transfers",
    body: (
      <p>
        Our services may involve company registries, authorities, and service
        providers in different countries. As a result, personal information
        may be transferred to or accessed from countries other than the
        country where you live. Where required, we use appropriate safeguards
        for international transfers and take reasonable steps to protect the
        information in accordance with applicable data protection law.
      </p>
    ),
  },
  {
    title: "7. LinkedIn and other connected services",
    body: (
      <p>
        If we make an optional LinkedIn connection or another third-party
        integration available, and you expressly authorise it, the integration
        may process the account or organisation information, access tokens,
        content, and engagement data needed to provide the feature and only
        within the permissions you approve. We use such information to operate
        the requested integration, maintain its security, and provide related
        support. We do not use connected-account data for unrelated purposes
        or sell it. You can revoke an integration's access through the relevant
        platform's settings. The platform's own privacy policy also applies to
        its processing. This section applies when and if such an integration is
        enabled; it does not mean that a LinkedIn integration is currently
        active on this website.
      </p>
    ),
  },
  {
    title: "8. Cookies and similar technologies",
    body: (
      <p>
        Our website may use essential cookies and similar technologies to
        support site functionality, security, preferences, and performance.
        Where non-essential cookies or analytics technologies are used, we
        will seek consent where required by law. You can also manage cookies
        through your browser settings; disabling certain cookies may affect
        website functionality. This Policy should be read together with any
        cookie notice or consent controls presented on the website.
      </p>
    ),
  },
  {
    title: "9. Data retention and security",
    body: (
      <p>
        We keep personal information only for as long as reasonably necessary
        for the purposes described in this Policy, including providing
        services, maintaining records, resolving disputes, and meeting legal
        or regulatory requirements. Retention periods depend on the type of
        information and the circumstances. We use reasonable technical and
        organisational safeguards designed to protect information against
        unauthorised access, loss, misuse, alteration, or disclosure. No method
        of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    title: "10. Your privacy rights",
    body: (
      <>
        <p>
          Depending on your location and applicable law, you may have the
          right to request access to, correction of, deletion of, or a copy of
          your personal information; to object to or restrict certain
          processing; to withdraw consent; or to complain to a data protection
          authority.
        </p>
        <p>
          To make a request, email{" "}
          <a href="mailto:info@elite-filing.com">info@elite-filing.com</a> with
          the subject “Privacy Request”. We may need to verify your identity
          before responding. Some information may need to be retained where
          the law requires it or where another lawful exception applies.
        </p>
      </>
    ),
  },
  {
    title: "11. Children",
    body: (
      <p>
        Our website and professional services are intended for businesses and
        adults. We do not knowingly collect personal information directly
        from children in circumstances where parental consent is required. If
        you believe a child has provided us with personal information, please
        contact us so we can review the request.
      </p>
    ),
  },
  {
    title: "12. Third-party websites",
    body: (
      <p>
        Our website may contain links to third-party websites or services.
        Those websites are operated independently and have their own privacy
        practices. We are not responsible for their content or privacy
        practices, and you should review their policies before providing
        information to them.
      </p>
    ),
  },
  {
    title: "13. Changes to this Policy",
    body: (
      <p>
        We may update this Policy from time to time to reflect changes to our
        services, technology, or legal requirements. The updated version will
        be published on this page with a revised “Last updated” date. Please
        review it periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pb-24">
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800">
        <div className="container-page max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div className="eyebrow !text-orange-400 mb-4">Legal &amp; Privacy</div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-orange-400 shrink-0" />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
            How we collect, use, disclose, and protect information when you
            interact with Elite Filing.
          </p>
          <p className="mt-5 text-sm text-slate-400">Last updated: 14 November 2026</p>
        </div>
      </section>

      <section className="container-page max-w-4xl py-12 md:py-16">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-900 p-5 mb-10">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
            <strong>Your privacy matters.</strong> This Policy describes our
            general information-handling practices. The exact information
            processed depends on the services and features you choose to use.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-blue-600 [&_a]:dark:text-blue-400 [&_a]:underline [&_a]:underline-offset-4">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-bold">Contact us about privacy</h2>
          </div>
          <p className="text-sm text-slate-300 leading-6 mb-4">
            For questions, concerns, or requests relating to this Privacy
            Policy or your personal information, contact our team.
          </p>
          <a
            href="mailto:info@elite-filing.com?subject=Privacy%20Request"
            className="inline-flex items-center rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            info@elite-filing.com
          </a>
        </div>
      </section>
    </main>
  );
}
