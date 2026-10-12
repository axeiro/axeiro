
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Mail,
  Building2,
  Headset,
  BriefcaseBusiness,
  MessageCircle,
  Users,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Send,
  Clock3,
  CheckCircle2,
  Globe2,
  Sparkles,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const contactChannels = [
  {
    icon: Mail,
    title: "General Inquiries",
    email: "amarjha.dev@gmail.com",
    description: "For general inquiries, partnerships and business discussions.",
    subject: "General Inquiry",
  },
  {
    icon: Building2,
    title: "Business & Partnerships",
    email: "partnerships@axeiro.com",
    description: "For enterprise, government and institutional collaborations.",
    subject: "Business & Partnerships",
  },
  {
    icon: Headset,
    title: "Product & Technical Support",
    email: "support@axeiro.com",
    description: "For product-related questions and technical support.",
    subject: "Product & Technical Support",
  },
  {
    icon: BriefcaseBusiness,
    title: "Careers",
    email: "careers@axeiro.com",
    description: "For career opportunities and collaboration.",
    subject: "Careers",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Product Inquiry",
  "Business & Partnerships",
  "Enterprise Solutions",
  "Technical Support",
  "Careers",
  "Government & Institutional Collaboration",
  "Other",
];

const faqs = [
  {
    question: "What type of inquiries can I send?",
    answer:
      "You can contact us about our products, engineering services, cloud infrastructure, smart safety systems, business partnerships, technical questions, or career opportunities.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "We aim to respond to inquiries within 1–2 business days. Response times may vary depending on the nature and complexity of your request.",
  },
  {
    question: "Do you work with startups or early-stage projects?",
    answer:
      "Yes, we welcome conversations about early-stage ideas, prototypes, product development, and engineering challenges. Each opportunity is evaluated based on scope and fit.",
  },
  {
    question: "Are you open to government or institutional collaborations?",
    answer:
      "We welcome relevant discussions around institutional projects, infrastructure, safety technology, and other potential collaborations.",
  },
  {
    question: "Where is Axeiro registered?",
    answer:
      "Axeiro operates from Patna, Bihar, India. Please contact us if you need formal business or registration details.",
  },
  {
    question: "How can I join your team?",
    answer:
      "Visit our Careers page to learn about our areas of work, or send us a message introducing your skills, experience, and interests.",
  },
];

const inputClass =
  "mt-2 w-full rounded-lg border border-white/15 bg-[#0a0c16] px-3 py-3 text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15";

function ContactButton({ href, children, secondary = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold transition-all duration-300 ${
        secondary
          ? "border border-white/20 text-white hover:border-violet-400 hover:bg-white/5"
          : "bg-violet-600 text-white hover:bg-violet-500"
      }`}
    >
      {children}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}

function ContactChannel({ channel, index }) {
  const Icon = channel.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group flex gap-3 rounded-xl border border-white/15 bg-white/[0.025] p-3.5 transition-colors hover:border-violet-500/40 hover:bg-white/[0.045] sm:gap-4 sm:p-4"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/15 text-violet-300 sm:h-12 sm:w-12">
        <Icon size={22} strokeWidth={1.7} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-xs font-semibold text-white sm:text-sm">
          {channel.title}
        </h3>

        <a
          href={`mailto:${channel.email}?subject=${encodeURIComponent(channel.subject)}`}
          className="mt-1 inline-block break-all text-xs text-violet-400 transition-colors hover:text-violet-300"
        >
          {channel.email}
        </a>

        <p className="mt-1.5 text-[11px] leading-5 text-slate-400 sm:text-xs sm:leading-5">
          {channel.description}
        </p>
      </div>

      <ArrowUpRight
        size={15}
        className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-violet-300"
      />
    </motion.article>
  );
}

function FAQItem({ question, answer, open, onClick }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-xs font-medium text-white transition-colors hover:text-violet-300 sm:text-sm"
      >
        <span>{question}</span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-violet-400" : ""
          }`}
        />
      </button>

      {open && (
        <p className="max-w-2xl pb-4 pr-5 text-xs leading-6 text-slate-400">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Connect this handler to your backend/email provider to deliver messages.
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#060810] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(109,40,217,0.18),transparent_48%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-8 px-5 pb-9 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 lg:px-12 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10"
          >
            <SectionLabel dark>Contact Us</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-5xl xl:text-6xl">
              Let’s Build
              <br />
              a Smarter World
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                Together.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Have a question, partnership idea, product inquiry or just want
              to say hello? We’d love to hear from you.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                {
                  icon: MessageCircle,
                  title: "Quick response",
                  text: "We aim to reply within 1–2 business days.",
                },
                {
                  icon: Users,
                  title: "Right people",
                  text: "Your message reaches the relevant team.",
                },
                {
                  icon: ShieldCheck,
                  title: "Meaningful conversations",
                  text: "Open to ideas and real-world impact.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="min-w-0">
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-violet-400 sm:h-6 sm:w-6"
                  />
                  <h2 className="mt-2 text-[10px] font-semibold leading-4 text-white sm:text-xs">
                    {title}
                  </h2>
                  <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[5/3] w-full max-w-[820px] overflow-hidden rounded-xl border border-white/10 bg-[#0a0b18] sm:aspect-[16/9] lg:max-w-none"
          >
            <Image
              src="/images/contact/contact-hero.png"
              alt="A connected technology city representing communication and collaboration"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 62vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/20 via-transparent to-[#060810]/10" />

            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-black/45 p-3 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-64 sm:p-4">
              <div className="flex items-center gap-2 text-violet-300">
                <Sparkles size={16} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Let’s connect
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-white sm:text-sm">
                From ideas to real-world solutions, let’s start a conversation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CHANNELS + MESSAGE FORM */}
      <section className="border-b border-white/10 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:px-12">
          {/* CONTACT DETAILS */}
          <div className="min-w-0 lg:border-r lg:border-white/10 lg:pr-6">
            <SectionLabel dark>Get in Touch</SectionLabel>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Information
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
              Reach out to us through any of the following channels. We’re
              always open to meaningful conversations.
            </p>

            <div className="mt-5 grid gap-2.5">
              {contactChannels.map((channel, index) => (
                <ContactChannel
                  key={channel.title}
                  channel={channel}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="min-w-0 rounded-xl border border-white/15 bg-white/[0.025] p-4 sm:p-5 lg:p-6">
            <SectionLabel dark>Send Us a Message</SectionLabel>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
              Tell Us About{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Your Needs.
              </span>
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
              Fill out the form and our team will get back to you.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-violet-400/25 bg-violet-500/10 p-5"
              >
                <CheckCircle2 size={30} className="text-violet-300" />
                <h3 className="mt-3 text-lg font-semibold">
                  Thanks for reaching out.
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  Your form passed client-side validation. No message has been
                  delivered yet because the form is not connected to a
                  submission service.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-violet-300 hover:text-white"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-medium text-slate-200"
                    >
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter your name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-[11px] font-medium text-slate-200"
                    >
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="Enter your email"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="text-[11px] font-medium text-slate-200"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={updateField}
                      placeholder="Your company name (optional)"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-[11px] font-medium text-slate-200"
                    >
                      Phone Number
                    </label>

                    <div className="mt-2 flex gap-2">
                      <select
                        name="countryCode"
                        aria-label="Country calling code"
                        value={form.countryCode}
                        onChange={updateField}
                        className="w-[94px] shrink-0 rounded-lg border border-white/15 bg-[#0a0c16] px-2 text-xs text-white outline-none focus:border-violet-500"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel-national"
                        value={form.phone}
                        onChange={updateField}
                        placeholder="Your number"
                        className="min-w-0 flex-1 rounded-lg border border-white/15 bg-[#0a0c16] px-3 py-3 text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-[11px] font-medium text-slate-200"
                  >
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjectOptions.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-medium text-slate-200"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your project, idea or question..."
                    rows={4}
                    minLength={10}
                    className={`${inputClass} min-h-28 resize-y`}
                    required
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-start gap-2 text-[10px] leading-5 text-slate-300">
                    <input
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={updateField}
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-violet-600"
                    />
                    <span>
                      I agree to be contacted by Axeiro regarding my inquiry.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
                  >
                    Send Message
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LOCATION + FAQ */}
      <section className="border-b border-white/10 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7 lg:px-12">
          {/* LOCATION */}
          <div className="min-w-0 lg:border-r lg:border-white/10 lg:pr-7">
            <SectionLabel dark>Our Location</SectionLabel>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Find Us in{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Patna.
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
              We are based in Patna, Bihar, India, building technology
              products and infrastructure for a smarter, more connected world.
            </p>

            <div className="relative mt-4 h-64 overflow-hidden rounded-xl border border-white/15 bg-[#0b1220] sm:h-72">
              <iframe
                title="Map showing Patna, Bihar, India"
                src="https://maps.google.com/maps?q=Patna%2C%20Bihar%2C%20India&z=12&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale invert-[0.88] hue-rotate-180"
              />

              <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-3 rounded-lg border border-white/15 bg-[#080b16]/95 px-4 py-3 shadow-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Axeiro</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Patna, Bihar, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-violet-300" />
              <div>
                <p className="text-xs font-medium text-white">
                  Business inquiries
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Send us a message to arrange a conversation with the relevant
                  team.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="min-w-0">
            <SectionLabel dark>Frequently Asked Questions</SectionLabel>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Quick{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Answers.
              </span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Here are some common questions. If you still have a question,
              feel free to reach out to us.
            </p>

            <div className="mt-5 rounded-xl border border-white/15 bg-white/[0.025] px-4 sm:px-5">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onClick={() =>
                    setOpenFaq((current) => (current === index ? -1 : index))
                  }
                />
              ))}
            </div>

            <Link
              href="/careers"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-violet-300 transition hover:text-white"
            >
              Explore Careers
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_50%,rgba(109,40,217,0.30),transparent_42%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Have a Bigger Idea?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              We’re open to new partnerships, unique projects, and meaningful
              collaborations that create real-world impact.
            </p>
          </div>

          <ContactButton href="mailto:amarjha.dev@gmail.com?subject=Let's%20Start%20a%20Conversation">
            Start a Conversation
          </ContactButton>
        </div>
      </section>
    </main>
  );
}
