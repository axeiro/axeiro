
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  Cookie,
  UserRound,
  Globe2,
  Mail,
  ChevronDown,
  FileText,
  Settings2,
  CircleCheck,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "This Privacy Policy explains how Axeiro (\"Axeiro\", \"we\", \"us\", or \"our\") collects, uses, stores, and protects information when you visit our website, communicate with us, or use our products and services.",
      "Axeiro is a technology business developing products and infrastructure across cloud platforms, safety systems, commerce, trading infrastructure, and developer tools. The information we process depends on how you interact with us and which services you use.",
      "By using our website or services, you acknowledge this Privacy Policy. Where consent is required by applicable law, we will seek it separately.",
    ],
  },
  {
    id: "information",
    title: "Information We Collect",
    content: [
      "We may collect information that you voluntarily provide when contacting us, requesting information, discussing a project, applying for an opportunity, or subscribing to updates.",
    ],
    bullets: [
      "Contact details such as your name, email address, telephone number, and organization.",
      "Messages, project descriptions, support requests, and other information you choose to share.",
      "Professional information included in a resume, portfolio, or career inquiry.",
      "Information submitted when interacting with product features, where applicable.",
    ],
  },
  {
    id: "technical-data",
    title: "Technical and Usage Information",
    content: [
      "When you access our website or services, certain technical information may be collected automatically by our infrastructure or service providers, depending on the technologies in use.",
    ],
    bullets: [
      "IP address, browser type, operating system, and device information.",
      "Pages visited, referring pages, approximate access times, and interaction events.",
      "Security, diagnostic, and server logs used to maintain availability and investigate errors.",
      "Cookie identifiers and similar technologies where enabled and permitted.",
    ],
    note: "The exact technical information collected depends on the website configuration, service, and tools enabled at the time of your visit.",
  },
  {
    id: "use",
    title: "How We Use Information",
    content: [
      "We use information for legitimate business purposes and, where required, on the basis of your consent or another applicable legal ground.",
    ],
    bullets: [
      "Responding to inquiries and communicating with you.",
      "Providing, operating, maintaining, and improving products and services.",
      "Developing new features, investigating errors, and improving performance.",
      "Protecting our systems, preventing abuse, and investigating security incidents.",
      "Evaluating career inquiries and coordinating recruitment where applicable.",
      "Meeting legal obligations and enforcing applicable agreements.",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Grounds for Processing",
    content: [
      "Where applicable law requires a legal basis for processing personal data, we may rely on your consent, steps taken at your request before entering into a contract, performance of a contract, compliance with legal obligations, or legitimate interests that do not override your applicable rights.",
      "The appropriate legal basis depends on the specific information, purpose, service, and jurisdiction. Where processing relies on consent, you may withdraw it subject to applicable law.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing and Disclosure",
    content: [
      "We do not treat the information you provide as public information. We may share information only where appropriate for the purposes described in this policy, subject to applicable law and relevant safeguards.",
    ],
    bullets: [
      "Service providers supporting hosting, infrastructure, communications, security, and operations.",
      "Professional advisers or authorities where disclosure is legally required or appropriate to protect rights and safety.",
      "Relevant parties in a business transfer, restructuring, or similar transaction, subject to applicable safeguards.",
      "Other recipients when you specifically request or authorize the disclosure.",
    ],
    note: "The service providers and integrations used may change as Axeiro's products and infrastructure evolve.",
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: [
      "Our website may use cookies or similar technologies to support core functionality, remember preferences, understand website usage, or provide other features.",
      "Where required, non-essential cookies or similar technologies will be used only after the appropriate consent has been obtained. You can also manage cookies through your browser settings, although blocking certain cookies may affect website functionality.",
    ],
    link: {
      label: "Read our Cookie Policy",
      href: "/cookies",
    },
  },
  {
    id: "security",
    title: "Data Security",
    content: [
      "We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.",
      "Depending on the system and data involved, safeguards may include access controls, authentication, encryption, monitoring, and secure development practices.",
      "No website, network, or storage system can be guaranteed to be completely secure. Please avoid sending sensitive credentials or unnecessary confidential information through general contact forms.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    content: [
      "We retain personal information for as long as reasonably necessary for the purpose for which it was collected, including providing services, responding to inquiries, maintaining security, resolving disputes, and satisfying legal obligations.",
      "Retention periods vary according to the type of information, the relevant service, legal requirements, and operational needs. Information may be deleted, anonymized, or securely disposed of when it is no longer required, subject to applicable law.",
    ],
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights concerning your personal information. These may include:",
    ],
    bullets: [
      "Requesting access to personal information we hold about you.",
      "Requesting correction of inaccurate or incomplete information.",
      "Requesting deletion of information where applicable.",
      "Withdrawing consent where processing is based on consent.",
      "Objecting to or requesting restriction of certain processing.",
      "Requesting a copy of information where a portability right applies.",
      "Submitting a complaint to the relevant data protection authority.",
    ],
    note: "These rights are subject to applicable law, identity verification, and any lawful exceptions. To submit a request, contact us using the details below.",
  },
  {
    id: "international",
    title: "International Data Transfers",
    content: [
      "Our website, infrastructure, or service providers may process information in countries other than the country in which you are located. Where applicable law requires safeguards for international transfers, we will take appropriate steps consistent with those requirements.",
      "The countries involved depend on the hosting infrastructure, service providers, and products you use.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: [
      "Our general website and business contact channels are not intended to collect personal information directly from children without appropriate authorization or safeguards.",
      "If you believe a child has provided personal information to us inappropriately, contact us so that we can review the matter and take appropriate action in accordance with applicable law.",
      "Some Axeiro product concepts involve safety technology intended to help protect children. Any such product's data practices should be described in its specific documentation and implemented with appropriate privacy safeguards.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Websites and Services",
    content: [
      "Our website may link to third-party websites, platforms, or services. Those parties operate under their own privacy policies and practices.",
      "We are not responsible for the privacy practices of third-party services that we do not control. We encourage you to review their policies before providing personal information.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy as our products, infrastructure, business practices, or legal obligations change.",
      "When updates are made, we will revise the date shown on this page. Where required by law, we will provide additional notice or seek consent for material changes.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or would like to make a privacy-related request, please contact Axeiro through the channel below.",
    ],
    email: "amarjha.dev@gmail.com",
  },
];

const principles = [
  {
    icon: LockKeyhole,
    title: "Security by Design",
    description: "We aim to build systems with appropriate security safeguards.",
  },
  {
    icon: Eye,
    title: "Purposeful Collection",
    description: "Information should serve a clear, legitimate purpose.",
  },
  {
    icon: Settings2,
    title: "Responsible Operations",
    description: "Access and processing should be controlled and appropriate.",
  },
  {
    icon: UserRound,
    title: "Respect for Rights",
    description: "We aim to handle privacy requests in accordance with applicable law.",
  },
];

function LegalSection({ section, index }) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-28 border-b border-white/10 py-6 last:border-b-0 sm:py-8"
    >
      <div className="flex items-start gap-3 sm:gap-5">
        <span className="pt-1 text-sm font-semibold tabular-nums text-violet-400 sm:text-base">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {section.title}
          </h2>

          {section.content.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7"
            >
              {paragraph}
            </p>
          ))}

          {section.bullets && (
            <ul className="mt-3 space-y-2.5">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-xs leading-6 text-slate-400 sm:text-sm"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.note && (
            <div className="mt-4 rounded-lg border border-violet-400/15 bg-violet-500/[0.06] p-3.5">
              <p className="text-xs leading-6 text-slate-300">
                {section.note}
              </p>
            </div>
          )}

          {section.link && (
            <Link
              href={section.link.href}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-violet-300 hover:text-white"
            >
              {section.link.label}
              <ArrowUpRight size={14} />
            </Link>
          )}

          {section.email && (
            <a
              href={`mailto:${section.email}?subject=${encodeURIComponent("Privacy Request")}`}
              className="mt-4 inline-flex items-center gap-2 break-all text-sm font-medium text-violet-300 hover:text-violet-200"
            >
              <Mail size={16} />
              {section.email}
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  function navigateToSection(id) {
    setActiveSection(id);
    setMobileTocOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="overflow-hidden bg-[#060810] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(109,40,217,0.22),transparent_45%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-7 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <SectionLabel dark>Legal & Privacy</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Policy.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Your trust matters. Learn how Axeiro handles personal
              information, protects data, and approaches privacy across our
              website and services.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                <ShieldCheck size={15} className="text-violet-400" />
                Privacy & Data Protection
              </span>

              <span>Last updated: October 12, 2026</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative mx-auto flex aspect-[5/3] w-full max-w-[700px] items-center justify-center overflow-hidden rounded-2xl border border-violet-400/15 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.22),rgba(10,12,27,0.85)_52%,rgba(4,6,12,1)_100%)] lg:aspect-[16/10] lg:max-w-none"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-size-[34px_34px]" />

            <div className="absolute h-48 w-48 rounded-full border border-violet-400/15 sm:h-64 sm:w-64" />
            <div className="absolute h-36 w-36 rounded-full border border-violet-400/20 sm:h-48 sm:w-48" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-violet-300/30 bg-gradient-to-br from-violet-500/30 to-[#111226] shadow-[0_0_70px_rgba(124,58,237,0.25)] sm:h-36 sm:w-36">
              <ShieldCheck
                size={65}
                strokeWidth={1.25}
                className="text-violet-300 sm:h-20 sm:w-20"
              />
              <span className="absolute inset-3 rounded-[1.5rem] border border-white/10" />
            </div>

            {[
              {
                icon: LockKeyhole,
                title: "Security",
                className: "left-[5%] top-[16%]",
              },
              {
                icon: Database,
                title: "Data",
                className: "right-[5%] top-[16%]",
              },
              {
                icon: Cookie,
                title: "Preferences",
                className: "bottom-[13%] left-[5%]",
              },
              {
                icon: UserRound,
                title: "Your Rights",
                className: "bottom-[13%] right-[5%]",
              },
            ].map(({ icon: Icon, title, className }) => (
              <div
                key={title}
                className={`absolute flex items-center gap-2 rounded-lg border border-white/15 bg-[#0b0c19]/90 px-2.5 py-2.5 shadow-lg backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3 ${className}`}
              >
                <Icon size={17} className="shrink-0 text-violet-300 sm:h-5 sm:w-5" />
                <span className="text-[10px] font-medium text-white sm:text-xs">
                  {title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRIVACY PRINCIPLES */}
      <section className="border-b border-white/10 py-8 sm:py-10">
        <div className="mx-auto grid w-full max-w-360 grid-cols-2 gap-3 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {principles.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
            >
              <Icon size={22} className="text-violet-400" />
              <h2 className="mt-3 text-xs font-semibold sm:text-sm">{title}</h2>
              <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-360 gap-6 px-5 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8 lg:px-12">
          {/* TABLE OF CONTENTS */}
          <aside className="self-start lg:sticky lg:top-24">
            <button
              type="button"
              aria-expanded={mobileTocOpen}
              onClick={() => setMobileTocOpen((open) => !open)}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium lg:hidden"
            >
              <span className="flex items-center gap-2">
                <FileText size={16} className="text-violet-400" />
                On this page
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileTocOpen ? "rotate-180" : ""}`}
              />
            </button>

            <nav
              aria-label="Privacy policy sections"
              className={`mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] lg:mt-0 ${
                mobileTocOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="border-b border-white/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Contents
                </p>
              </div>

              <div className="max-h-[65vh] overflow-y-auto p-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => navigateToSection(section.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-violet-500/15 text-violet-300"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span className="w-5 shrink-0 text-[10px] tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs">{section.title}</span>
                  </button>
                ))}
              </div>
            </nav>

            <div className="mt-4 hidden rounded-xl border border-violet-400/15 bg-violet-500/[0.06] p-4 lg:block">
              <ShieldCheck size={20} className="text-violet-300" />
              <p className="mt-3 text-xs font-semibold">Privacy question?</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Contact us for privacy-related questions or requests.
              </p>
              <a
                href="mailto:amarjha.dev@gmail.com?subject=Privacy%20Request"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-violet-300 hover:text-white"
              >
                Contact Axeiro
                <ArrowUpRight size={13} />
              </a>
            </div>
          </aside>

          {/* POLICY SECTIONS */}
          <article className="min-w-0 rounded-xl border border-white/10 bg-white/[0.015] px-4 sm:px-6 lg:px-8">
            <div className="border-b border-white/10 py-5 sm:py-6">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Your Privacy, Explained.
              </h2>
              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                This policy describes our intended privacy practices. The
                specific data collected and processing activities depend on
                which Axeiro website features and services are actually
                enabled.
              </p>
            </div>

            {sections.map((section, index) => (
              <LegalSection
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(109,40,217,0.24),transparent_45%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-5 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel dark>Your Privacy Matters</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
              Questions About Your{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Information?
              </span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Reach out to our team for privacy questions or requests relating
              to your personal information.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
          >
            Contact Us
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
