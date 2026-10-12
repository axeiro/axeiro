
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cloud,
  Cpu,
  MapPin,
  Clock3,
  Users,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Target,
  Send,
  Laptop,
  GitBranch,
  Search,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const openings = [
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / India",
    level: "Experience preferred",
    icon: Code2,
    description:
      "Build reliable APIs, backend services, and scalable foundations for Axeiro products.",
    skills: ["Node.js", "REST APIs", "Databases"],
  },
  {
    id: "cloud-platform",
    title: "Cloud & Platform Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Remote / India",
    level: "Experience preferred",
    icon: Cloud,
    description:
      "Help design deployment infrastructure, cloud automation, observability, and platform tooling.",
    skills: ["AWS", "Docker", "DevOps"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation Engineer",
    department: "AI & Systems",
    type: "Full-time",
    location: "Remote / India",
    level: "Role-dependent",
    icon: Cpu,
    description:
      "Explore practical AI systems, intelligent automation, and real-world product applications.",
    skills: ["Python", "AI/ML", "Automation"],
  },
  {
    id: "product-design",
    title: "Product Designer",
    department: "Product",
    type: "Full-time",
    location: "Remote / India",
    level: "Portfolio required",
    icon: Sparkles,
    description:
      "Design clear, thoughtful product experiences across Axeiro's technology ecosystem.",
    skills: ["UI/UX", "Prototyping", "Design systems"],
  },
];

const values = [
  {
    icon: Target,
    title: "Real-World Problems",
    description:
      "Work on practical challenges with the potential to create measurable impact.",
  },
  {
    icon: Lightbulb,
    title: "Ownership & Learning",
    description:
      "Take responsibility, experiment thoughtfully, and learn by building.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Share ideas, communicate openly, and solve difficult problems together.",
  },
  {
    icon: ShieldCheck,
    title: "Build with Purpose",
    description:
      "Contribute to products designed around real needs, reliability, and trust.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Tell us about yourself, your skills, and the work you want to do.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "We review your application and discuss your interests and experience.",
  },
  {
    number: "03",
    title: "Demonstrate",
    description:
      "Depending on the role, we may discuss your work or conduct a technical assessment.",
  },
  {
    number: "04",
    title: "Build Together",
    description:
      "If there's a strong mutual fit, we discuss the opportunity and next steps.",
  },
];

const faqs = [
  {
    question: "Is Axeiro hiring for all the roles listed?",
    answer:
      "The roles shown are examples of the areas relevant to our work. Please confirm current vacancies before applying; a role should only be treated as open when it has been explicitly announced.",
  },
  {
    question: "Can I apply if I am early in my career?",
    answer:
      "Yes. You can introduce yourself and share relevant projects, practical skills, and what you would like to contribute. Requirements vary by role and opportunity.",
  },
  {
    question: "Does Axeiro offer remote opportunities?",
    answer:
      "Some opportunities may support remote work in India. The location and working arrangement will depend on the specific role and team requirements.",
  },
  {
    question: "Can I apply without a current opening?",
    answer:
      "You can contact us with your profile, portfolio, or GitHub and explain the kind of work you are interested in. We cannot guarantee a response or future vacancy.",
  },
  {
    question: "What should I include in my application?",
    answer:
      "Include your resume or profile, relevant project links, your primary skills, preferred role, and a short explanation of why you are interested in Axeiro.",
  },
];

function CareerButton({ href, children, secondary = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
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

function CareerCard({ job, index }) {
  const Icon = job.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.045] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
          <Icon size={22} strokeWidth={1.6} />
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-300">
          {job.type}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
        {job.title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-400">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <BriefcaseBusiness size={13} />
          {job.department}
        </span>

        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} />
          {job.location}
        </span>
      </div>

      <Link
        href={`/contact?subject=${encodeURIComponent(`Careers: ${job.title}`)}`}
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-300 transition-colors hover:text-white"
      >
        Express Interest
        <ArrowUpRight size={15} />
      </Link>
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
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-xs font-medium text-white transition-colors hover:text-violet-300 sm:text-sm"
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
        <p className="max-w-2xl pb-4 pr-5 text-xs leading-6 text-slate-400 sm:text-sm">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-[#070810] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(109,40,217,0.24),transparent_48%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-8 px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:px-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10"
          >
            <SectionLabel dark>Careers at Axeiro</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Build What
              <br />
              Comes <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Next.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              We are building technology across cloud infrastructure, safety,
              commerce, intelligent systems, and developer tools. Join us in
              turning ambitious ideas into useful products.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CareerButton href="#opportunities">
                Explore Opportunities
              </CareerButton>

              <CareerButton href="/contact" secondary>
                Introduce Yourself
              </CareerButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
              {[
                { icon: Lightbulb, title: "Think Boldly" },
                { icon: Code2, title: "Build Practically" },
                { icon: HeartHandshake, title: "Work Together" },
              ].map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-2">
                  <Icon size={19} className="shrink-0 text-violet-400" />
                  <span className="text-[10px] font-medium text-slate-200 sm:text-xs">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-[780px] overflow-hidden rounded-2xl border border-white/10 bg-[#111020] sm:aspect-[16/10] lg:max-w-none"
          >
            <Image
              src="/images/careers/careers-hero.jpg"
              alt="A connected technology city representing collaboration and innovation"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 60vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#070810]/75 via-transparent to-[#070810]/10" />

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:grid-cols-3">
              {[
                { icon: Cloud, label: "Cloud & Platforms" },
                { icon: ShieldCheck, label: "Smart Safety" },
                { icon: Cpu, label: "Intelligent Systems" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-3 backdrop-blur-md"
                >
                  <Icon size={17} className="shrink-0 text-violet-300" />
                  <span className="text-[10px] font-medium text-white sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="border-b border-white/10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <SectionLabel dark>Life at Axeiro</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                More Than a Job.
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  A Chance to Build.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                We value curiosity, practical thinking, technical depth, and
                people who care about what they build. Our goal is to create an
                environment where ideas are tested, lessons are shared, and
                good work matters.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-violet-500/30 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel dark>Opportunities</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Find Your Place
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  in What We're Building.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Explore the areas where your skills and interests could
                contribute to Axeiro.
              </p>
            </div>

            <Link
              href="/contact?subject=Career%20Enquiry"
              className="group inline-flex min-h-10 w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold transition hover:border-violet-400 hover:text-violet-300"
            >
              General Career Enquiry
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {openings.map((job, index) => (
              <CareerCard key={job.id} job={job} index={index} />
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            These cards represent example career areas, not verified active
            vacancies. Confirm availability with Axeiro before applying.
          </p>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="border-y border-white/10 bg-[#0b0b15] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel dark>Our process</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              A Clear Path
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                From Application to Impact.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              We aim to keep conversations focused on your skills, your work,
              and whether the opportunity is right for both sides.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="relative border-l border-violet-500/40 pl-5 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-violet-400">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {step.description}
                </p>

                {index < hiringSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-0 top-6 hidden text-violet-500 lg:block"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-12">
          <div>
            <SectionLabel dark>Frequently asked questions</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Quick <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Answers.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Have questions about opportunities at Axeiro? Here are a few
              things to know before reaching out.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-300 transition-colors hover:text-white"
            >
              Ask us a question
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 sm:px-6">
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(109,40,217,0.28),transparent_45%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-6 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel dark>Build with us</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Have Something
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {" "}to Contribute?
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              Share your work, your ideas, and the kind of challenges you want
              to take on.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <CareerButton href="/contact?subject=Career%20Enquiry">
              Introduce Yourself
            </CareerButton>

            <CareerButton href="/about" secondary>
              About Axeiro
            </CareerButton>
          </div>
        </div>
      </section>
    </main>
  );
}
