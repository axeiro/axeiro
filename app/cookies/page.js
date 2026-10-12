"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cookie,
  ShieldCheck,
  Settings2,
  ChartNoAxesColumnIncreasing,
  SlidersHorizontal,
  Target,
  LockKeyhole,
  Check,
  ChevronRight,
  Globe,
  Mail,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "cookie-types", title: "Types of Cookies We Use" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "managing-cookies", title: "Managing Cookies" },
  { id: "browser-settings", title: "Browser Settings" },
  { id: "your-choices", title: "Your Choices" },
  { id: "policy-updates", title: "Updates to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

const cookieTypes = [
  {
    id: "necessary",
    icon: LockKeyhole,
    title: "Essential Cookies",
    purpose: "Required for the website to function properly.",
    examples: "Authentication, security, load balancing",
    duration: "Session / Persistent",
    required: true,
  },
  {
    id: "analytics",
    icon: ChartNoAxesColumnIncreasing,
    title: "Analytics Cookies",
    purpose: "Help us understand how visitors use our website.",
    examples: "Website analytics, page views, usage patterns",
    duration: "Depends on provider",
    required: false,
  },
  {
    id: "functional",
    icon: SlidersHorizontal,
    title: "Functional Cookies",
    purpose: "Remember preferences and settings.",
    examples: "Language selection, saved preferences",
    duration: "Depends on provider",
    required: false,
  },
  {
    id: "marketing",
    icon: Target,
    title: "Marketing Cookies",
    purpose: "Measure campaigns and, where enabled, deliver relevant content.",
    examples: "Campaign attribution, advertising measurement",
    duration: "Depends on provider",
    required: false,
  },
];

const initialPreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const preferenceDetails = {
  necessary: {
    title: "Essential Cookies",
    description:
      "Required for core functionality, security, and remembering your consent choices.",
  },
  analytics: {
    title: "Analytics Cookies",
    description:
      "Help us understand website usage and improve the browsing experience.",
  },
  functional: {
    title: "Functional Cookies",
    description: "Remember your preferences and settings where supported.",
  },
  marketing: {
    title: "Marketing Cookies",
    description:
      "Used for campaign measurement and relevant content where enabled.",
  },
};

const gradientText =
  "bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent";

function CookieSwitch({ checked, onChange, disabled = false, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet-600 disabled:cursor-not-allowed ${
        checked ? "bg-violet-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function PolicySection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200/80 py-4 first:pt-0 last:border-b-0"
    >
      <div className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 sm:grid-cols-[30px_minmax(0,1fr)] sm:gap-4">
        <span className="pt-0.5 text-sm font-semibold text-violet-600">
          {String(number).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <h2 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            {title}
          </h2>

          <div className="mt-1.5 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CookiesPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [preferences, setPreferences] = useState(initialPreferences);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  const updatePreference = (id, value) => {
    setPreferences((current) => ({
      ...current,
      [id]: value,
      necessary: true,
    }));

    setSaved(false);
    setSaveError("");
  };

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });

    setSaved(false);
    setSaveError("");
  };

  const rejectOptional = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });

    setSaved(false);
    setSaveError("");
  };

  const savePreferences = () => {
    try {
      if (typeof window === "undefined") return;

      localStorage.setItem(
        "axeiro-cookie-preferences",
        JSON.stringify({
          ...preferences,
          updatedAt: new Date().toISOString(),
        }),
      );

      setSaved(true);
      setSaveError("");
    } catch {
      setSaved(false);
      setSaveError(
        "Your browser could not save these preferences. Check its storage settings and try again.",
      );
    }
  };

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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(124,58,237,0.10),transparent_48%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-12 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10"
          >
            <SectionLabel>Legal</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
              Cookie <span className={gradientText}>Policy.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              This Cookie Policy explains how Axeiro uses cookies and similar
              technologies to recognize you, understand how you use our website,
              and improve your experience.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Last updated: October 12, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[5/3] w-full max-w-[760px] overflow-hidden rounded-2xl lg:max-w-none"
          >
            <Image
              src="/images/cookies/cookie-hero.png"
              alt="A cookie with a glowing security shield surrounded by cookie preference and analytics interface elements"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbfa]/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-360 gap-7 px-5 sm:px-8 lg:grid-cols-[228px_minmax(0,1fr)] lg:gap-10 lg:px-12">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
              <div className="border-b border-slate-200/70 px-4 py-3 lg:hidden">
                <p className="text-xs font-semibold">On this page</p>
              </div>

              <nav
                aria-label="Cookie policy sections"
                className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:block"
              >
                {sections.map((section, index) => (
                  <button
                    type="button"
                    key={section.id}
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

          {/* MAIN POLICY */}
          <div className="min-w-0">
            <PolicySection id="introduction" number={1} title="Introduction">
              This Cookie Policy explains how Axeiro ("we", "us", or "our") may
              use cookies and similar technologies on our website. It describes
              what these technologies are, why they may be used, and how you can
              manage your preferences.
            </PolicySection>

            <PolicySection
              id="what-are-cookies"
              number={2}
              title="What Are Cookies?"
            >
              Cookies are small text files that a website may store on your
              device, such as a computer, tablet, or mobile phone. They can help
              a website remember preferences, maintain sessions, and understand
              how visitors interact with its pages.
            </PolicySection>

            <PolicySection
              id="how-we-use-cookies"
              number={3}
              title="How We Use Cookies"
            >
              Depending on the features enabled on our website, cookies and
              similar technologies may be used to support essential functions,
              remember settings, measure website performance, and understand the
              effectiveness of our content. Optional technologies should only
              operate according to the applicable consent requirements.
            </PolicySection>

            <PolicySection
              id="cookie-types"
              number={4}
              title="Types of Cookies We Use"
            >
              The following categories describe common cookie purposes. The
              actual cookies used, their providers, and their retention periods
              depend on the technologies enabled on our website.
            </PolicySection>

            {/* COOKIE TYPES TABLE */}
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200/80 bg-white">
              <table className="w-full min-w-[650px] border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-violet-50/70 text-slate-800">
                    <th className="border-b border-r border-slate-200/80 px-3 py-3 font-semibold">
                      Type of Cookie
                    </th>
                    <th className="border-b border-r border-slate-200/80 px-3 py-3 font-semibold">
                      Purpose
                    </th>
                    <th className="border-b border-r border-slate-200/80 px-3 py-3 font-semibold">
                      Examples
                    </th>
                    <th className="border-b border-slate-200/80 px-3 py-3 font-semibold">
                      Duration
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cookieTypes.map((cookie) => {
                    const Icon = cookie.icon;

                    return (
                      <tr
                        key={cookie.id}
                        className="align-middle transition-colors hover:bg-violet-50/30"
                      >
                        <td className="border-b border-r border-slate-200/70 px-3 py-3">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                              <Icon size={16} />
                            </span>

                            <span className="font-medium text-slate-800">
                              {cookie.title}
                            </span>
                          </div>
                        </td>

                        <td className="border-b border-r border-slate-200/70 px-3 py-3 leading-5 text-slate-600">
                          {cookie.purpose}
                        </td>

                        <td className="border-b border-r border-slate-200/70 px-3 py-3 leading-5 text-slate-600">
                          {cookie.examples}
                        </td>

                        <td className="border-b border-slate-200/70 px-3 py-3 leading-5 text-slate-600">
                          {cookie.duration}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <PolicySection
                id="third-party-cookies"
                number={5}
                title="Third-Party Cookies"
              >
                Third-party technologies may be used when external services are
                integrated into our website. Those providers may process
                information under their own privacy policies. We will identify
                applicable providers where required and configure optional
                technologies in accordance with applicable consent rules.
              </PolicySection>

              <PolicySection
                id="managing-cookies"
                number={6}
                title="Managing Cookies"
              >
                You can manage optional cookie categories through the
                preferences panel below, where available. You can also manage
                cookies through your browser. Blocking essential cookies may
                affect features that depend on them.
              </PolicySection>
            </div>
          </div>
        </div>
      </section>

      {/* COOKIE PREFERENCES */}
      <section id="your-choices" className="scroll-mt-24 pb-10 sm:pb-12">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-white p-4 sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Settings2 size={21} />
                </span>

                <div>
                  <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                    Your Cookie Preferences
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    Choose which optional cookie categories you want to allow.
                    You can change your choices at any time.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:shrink-0">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-500"
                >
                  Accept All
                  <Check size={14} />
                </button>

                <button
                  type="button"
                  onClick={rejectOptional}
                  className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {Object.entries(preferenceDetails).map(([id, detail]) => {
                const required = id === "necessary";

                return (
                  <article
                    key={id}
                    className="rounded-xl border border-slate-200/80 bg-white p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs font-semibold leading-5">
                        {detail.title}
                      </h3>

                      <CookieSwitch
                        checked={preferences[id]}
                        disabled={required}
                        onChange={(value) => updatePreference(id, value)}
                        label={`Allow ${detail.title}`}
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {detail.description}
                    </p>

                    <p
                      className={`mt-3 text-[10px] font-medium ${
                        required
                          ? "text-slate-500"
                          : preferences[id]
                            ? "text-violet-700"
                            : "text-slate-400"
                      }`}
                    >
                      {required
                        ? "Always active"
                        : preferences[id]
                          ? "Enabled"
                          : "Disabled"}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-violet-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                Essential cookies remain enabled so core site functions can
                work.
              </p>

              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#111116] px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-700"
              >
                Save Preferences
                <ArrowRight size={14} />
              </button>
            </div>

            {saved && (
              <p
                role="status"
                className="mt-3 flex items-center gap-2 text-xs font-medium text-green-700"
              >
                <Check size={15} />
                Preferences saved in this browser.
              </p>
            )}

            {saveError && (
              <p role="alert" className="mt-3 text-xs text-red-600">
                {saveError}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FINAL POLICY DETAILS */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-5 px-5 sm:grid-cols-3 sm:gap-6 sm:px-8 lg:px-12">
          <article
            id="browser-settings"
            className="scroll-mt-28 border-b border-slate-200 pb-5 sm:border-b-0 sm:border-r sm:pr-5"
          >
            <span className="text-sm font-semibold text-violet-600">07</span>

            <h2 className="mt-2 text-sm font-semibold">Browser Settings</h2>

            <p className="mt-2 text-xs leading-5 text-slate-600">
              Most browsers let you review, block, or delete cookies through
              their privacy or settings menus. Available controls vary by
              browser and device.
            </p>
          </article>

          <article
            id="policy-updates"
            className="scroll-mt-28 border-b border-slate-200 pb-5 sm:border-b-0 sm:border-r sm:pr-5"
          >
            <span className="text-sm font-semibold text-violet-600">08</span>

            <h2 className="mt-2 text-sm font-semibold">
              Updates to This Policy
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-600">
              We may update this policy as our website, technologies, or legal
              requirements change. The latest revision date appears at the top
              of this page.
            </p>
          </article>

          <article id="contact-us" className="scroll-mt-28">
            <span className="text-sm font-semibold text-violet-600">09</span>

            <h2 className="mt-2 text-sm font-semibold">Contact Us</h2>

            <p className="mt-2 text-xs leading-5 text-slate-600">
              For questions about this Cookie Policy or your preferences,
              contact the Axeiro team.
            </p>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-violet-700 hover:text-violet-900"
            >
              Contact Axeiro
              <ArrowUpRight size={13} />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
