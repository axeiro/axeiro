"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FileText,
  ShieldCheck,
  Scale,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "eligibility", title: "Eligibility" },
  { id: "use-of-services", title: "Use of Our Services" },
  { id: "accounts-security", title: "Accounts and Security" },
  { id: "user-content", title: "User Content" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "privacy", title: "Privacy" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact-us", title: "Contact Us" },
];

const gradientText =
  "bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent";

function TermsSection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200/80 py-5 last:border-b-0 sm:py-6"
    >
      <div className="grid grid-cols-[30px_minmax(0,1fr)] gap-3 sm:grid-cols-[32px_minmax(0,1fr)] sm:gap-4">
        <span className="pt-1 text-sm font-semibold text-violet-600 sm:text-base">
          {String(number).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <h2 className="text-xl font-semibold leading-tight tracking-[-0.035em] sm:text-2xl">
            {title}
          </h2>

          <div className="mt-3 space-y-2 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function TermsList({ items }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const navigateToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(124,58,237,0.10),transparent_48%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-7 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-12 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10"
          >
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-violet-700"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>

            <SectionLabel>Legal</SectionLabel>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Terms and
              <br />
              <span className={gradientText}>Conditions.</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              These Terms and Conditions govern your use of Axeiro’s website,
              products, services and related platforms.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Last updated: October 12, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[5/3] w-full max-w-[780px] overflow-hidden rounded-2xl lg:max-w-none"
          >
            <Image
              src="/images/legal/terms-hero.png"
              alt="Three-dimensional legal document and security shield representing terms and conditions"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 60vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* LEGAL DOCUMENT */}
      <section className="py-6 sm:py-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-360 gap-6 px-5 sm:px-8 lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-6 lg:px-12">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
              <div className="border-b border-slate-100 px-4 py-3 lg:hidden">
                <p className="text-xs font-semibold">On this page</p>
              </div>

              <nav
                aria-label="Terms and conditions sections"
                className="grid grid-cols-2 sm:grid-cols-3 lg:block"
              >
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => navigateToSection(section.id)}
                    className={`flex min-h-11 min-w-0 items-center gap-2 border-b border-slate-100 px-3 py-3 text-left text-[11px] transition-colors sm:text-xs lg:w-full lg:px-4 ${
                      activeSection === section.id
                        ? "bg-violet-50 text-violet-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-violet-700"
                    }`}
                  >
                    <span
                      className={`w-5 shrink-0 text-[10px] ${
                        activeSection === section.id
                          ? "font-semibold text-violet-600"
                          : "text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1 leading-4">
                      {section.title}
                    </span>

                    <ChevronRight
                      size={12}
                      className="hidden shrink-0 lg:block"
                    />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* TERMS CONTENT */}
          <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-white/50 px-4 sm:px-7 lg:px-6">
            <TermsSection id="introduction" number={1} title="Introduction">
              <p>
                Welcome to Axeiro. These Terms and Conditions (“Terms”) govern
                your access to and use of our website, products, services,
                software, APIs and related platforms (collectively, the
                “Services”) provided by Axeiro (“Axeiro”, “we”, “us”, or “our”).
              </p>

              <p>
                By accessing or using our Services, you agree to be bound by
                these Terms. If you do not agree, please do not use our
                Services.
              </p>
            </TermsSection>

            <TermsSection id="eligibility" number={2} title="Eligibility">
              You must be legally capable of entering into a binding agreement
              under the laws applicable to you to use our Services. If you use
              the Services on behalf of a company or other organisation, you
              represent that you have authority to bind that organisation to
              these Terms.
            </TermsSection>

            <TermsSection
              id="use-of-services"
              number={3}
              title="Use of Our Services"
            >
              <p>
                You agree to use our Services only for lawful purposes and in
                accordance with these Terms. You must not:
              </p>

              <TermsList
                items={[
                  "Use our Services in any way that violates applicable laws or regulations.",
                  "Attempt to gain unauthorised access to our systems, accounts, or data.",
                  "Transmit malicious code, spam, or harmful content through our Services.",
                  "Interfere with the security, integrity, or performance of our Services.",
                  "Misuse APIs or exceed applicable usage limits without authorisation.",
                ]}
              />
            </TermsSection>

            <TermsSection
              id="accounts-security"
              number={4}
              title="Accounts and Security"
            >
              <p>
                Some features may require you to create an account. You are
                responsible for:
              </p>

              <TermsList
                items={[
                  "Providing accurate and complete information.",
                  "Keeping your account credentials confidential and secure.",
                  "All activities conducted through your account, subject to applicable law.",
                ]}
              />

              <p>
                Please notify us promptly if you suspect unauthorised access to
                your account.
              </p>
            </TermsSection>

            <TermsSection id="user-content" number={5} title="User Content">
              <p>
                You retain ownership of content you submit, upload, or share
                through our Services (“User Content”). You grant Axeiro a
                limited, non-exclusive licence to host, process, display, and
                use that content as reasonably necessary to provide and maintain
                the Services.
              </p>

              <p>
                You are responsible for ensuring that you have the necessary
                rights to the content you provide and that it does not violate
                applicable laws or third-party rights.
              </p>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              number={6}
              title="Intellectual Property"
            >
              <p>
                Unless otherwise stated, Axeiro and its licensors retain rights
                in the website, branding, software, designs, documentation, and
                other materials we provide. These Terms do not transfer
                ownership of our intellectual property to you.
              </p>

              <p>
                You may not copy, modify, distribute, or commercially exploit
                protected materials except as permitted by law or with
                appropriate permission.
              </p>
            </TermsSection>

            <TermsSection id="acceptable-use" number={7} title="Acceptable Use">
              You must not use the Services to violate others’ rights, evade
              security controls, disrupt infrastructure, distribute unlawful
              material, or conduct unauthorised testing. We may investigate
              suspected misuse and take proportionate action where permitted by
              applicable law.
            </TermsSection>

            <TermsSection
              id="third-party-services"
              number={8}
              title="Third-Party Services"
            >
              Our Services may integrate with or link to third-party platforms,
              tools, APIs, and websites. Those services may have separate terms,
              privacy policies, fees, and availability conditions. Axeiro is not
              responsible for independent third-party services to the extent
              permitted by applicable law.
            </TermsSection>

            <TermsSection id="privacy" number={9} title="Privacy">
              Your use of our Services may involve the processing of personal
              information. Please review our{" "}
              <Link
                href="/privacy"
                className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/cookies"
                className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Cookie Policy
              </Link>{" "}
              to understand our applicable practices.
            </TermsSection>

            <TermsSection id="disclaimers" number={10} title="Disclaimers">
              To the extent permitted by applicable law, the Services are
              provided on an “as available” basis. We do not guarantee
              uninterrupted access, error-free operation, or that every feature
              will meet every requirement. Any non-excludable statutory rights
              remain unaffected.
            </TermsSection>

            <TermsSection
              id="limitation-liability"
              number={11}
              title="Limitation of Liability"
            >
              To the extent permitted by applicable law, Axeiro will not be
              liable for indirect, incidental, special, or consequential losses
              arising from use of the Services. Nothing in these Terms excludes
              liability that cannot lawfully be excluded or limited. Any other
              limitations must be interpreted subject to applicable law.
            </TermsSection>

            <TermsSection
              id="indemnification"
              number={12}
              title="Indemnification"
            >
              Where permitted by applicable law, you agree to be responsible for
              losses and reasonable costs arising from your unlawful use of the
              Services, your violation of these Terms, or your infringement of
              another party’s rights. This provision applies only to the extent
              legally enforceable.
            </TermsSection>

            <TermsSection id="termination" number={13} title="Termination">
              We may suspend or discontinue access to all or part of the
              Services where reasonably necessary, including for security
              concerns, material violations of these Terms, or legal
              requirements. Where appropriate and legally required, we will
              provide notice. Provisions intended to survive termination will
              continue to apply.
            </TermsSection>

            <TermsSection
              id="changes-to-terms"
              number={14}
              title="Changes to Terms"
            >
              We may update these Terms as our Services, business, or legal
              obligations evolve. We will publish the revised version on this
              page and update the revision date. Where required by law, we will
              provide additional notice or obtain consent.
            </TermsSection>

            <TermsSection id="governing-law" number={15} title="Governing Law">
              These Terms are subject to the laws applicable to the agreement
              and the parties involved. Any dispute will be handled by the
              courts or dispute-resolution forum with jurisdiction under
              applicable law. The precise governing-law and jurisdiction
              provisions should be confirmed before publication.
            </TermsSection>

            <TermsSection id="contact-us" number={16} title="Contact Us">
              <p>
                If you have questions about these Terms, contact the Axeiro team
                through our contact page.
              </p>

              <Link
                href="/contact"
                className="group mt-1 inline-flex items-center gap-2 font-medium text-violet-700 transition-colors hover:text-violet-900"
              >
                Contact Axeiro
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </TermsSection>
          </div>
        </div>
      </section>
    </main>
  );
}
