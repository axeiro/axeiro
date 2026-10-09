
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Activity,
  Database,
  Workflow,
  Cpu,
  ShieldCheck,
  Gauge,
  Layers3,
  GitBranch,
  BarChart3,
  TrendingUp,
  Terminal,
  Network,
  Clock3,
} from "lucide-react";

import SectionLabel from "../../components/SectionLabel";

const capabilities = [
  {
    icon: Database,
    title: "Market Data Infrastructure",
    description:
      "Explore the data ingestion, processing, and storage foundations needed for data-driven trading systems.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Strategy Research",
    description:
      "Build a foundation for evaluating quantitative ideas, analysing historical data, and studying strategy behaviour.",
  },
  {
    icon: Workflow,
    title: "Execution Workflows",
    description:
      "Design modular workflows for coordinating strategy signals, order-related processes, and downstream services.",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description:
      "Focus on system responsiveness, efficient processing, and observable backend components.",
  },
];

const infrastructure = [
  {
    number: "01",
    icon: Network,
    title: "Data Ingestion",
    description:
      "Receive and organise market data from supported sources.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Strategy Processing",
    description:
      "Evaluate data through configurable research and strategy logic.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Signal Management",
    description:
      "Structure strategy outputs and route signals through defined workflows.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Monitoring & Analysis",
    description:
      "Observe system activity and analyse performance and operational behaviour.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Risk-Aware Design",
    description:
      "Treat risk controls, validation, and operational safeguards as important parts of system design.",
  },
  {
    icon: Clock3,
    title: "Performance Conscious",
    description:
      "Consider latency, throughput, and resource usage when designing processing pipelines.",
  },
  {
    icon: Layers3,
    title: "Modular Architecture",
    description:
      "Separate data processing, strategy logic, and infrastructure into maintainable components.",
  },
];

const gradientText =
  "bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={reveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CapabilityCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/[0.05] sm:p-6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
        <Icon size={22} strokeWidth={1.7} />
      </span>

      <h3 className="mt-5 text-base font-semibold tracking-tight">
        {item.title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
        {item.description}
      </p>
    </motion.article>
  );
}

export default function AlgoPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-[#050610]" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(94,64,255,0.25),transparent_42%),radial-gradient(ellipse_at_95%_90%,rgba(25,83,190,0.14),transparent_40%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(139,130,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(139,130,255,0.16)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_right,transparent,black)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-8 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-[610px]"
          >
            <SectionLabel dark>Axeiro Algo</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-white">
              Engineering
              <br />
              the Future of
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Trading Systems.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              An algorithmic trading infrastructure initiative focused on
              market data, strategy processing, and the backend systems that
              support data-driven trading workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#infrastructure"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Explore the Infrastructure
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact?interest=axeiro-algo"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-white/[0.08]"
              >
                Discuss a Collaboration
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Database size={15} className="text-violet-300" />
                Market Data
              </span>
              <span className="flex items-center gap-2">
                <Activity size={15} className="text-violet-300" />
                Strategy Systems
              </span>
              <span className="flex items-center gap-2">
                <Terminal size={15} className="text-violet-300" />
                Backend Infrastructure
              </span>
            </div>
          </motion.div>

          {/* Trading infrastructure visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[680px] lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-violet-600/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d1a]/90 p-3 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-violet-300">
                    AXEIRO / ALGO
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Trading Infrastructure
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-[10px] text-violet-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Research & Development
                </span>
              </div>

              <div className="relative mt-3 aspect-[5/4] overflow-hidden rounded-xl bg-[#090b17] sm:aspect-[6/4]">
                <Image
                  src="/images/algo/algo-hero.jpg"
                  alt="Financial market data and algorithmic trading workstation"
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 48vw"
                  className="object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070914]/90 via-[#070914]/15 to-[#070914]/10" />

                <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2 sm:inset-x-5 sm:top-5">
                  {[
                    "MARKET DATA",
                    "PROCESSING",
                    "ANALYTICS",
                  ].map((label) => (
                    <span
                      key={label}
                      className="rounded-md border border-white/15 bg-black/40 px-2.5 py-1.5 text-[9px] tracking-wider text-white/80 backdrop-blur-md"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="text-[10px] tracking-[0.16em] text-violet-300">
                    DATA → LOGIC → INSIGHT
                  </p>

                  <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Infrastructure for
                    <br />
                    data-driven strategies.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: Database, label: "Data Pipelines" },
                  { icon: Workflow, label: "Strategy Logic" },
                  { icon: Activity, label: "Observability" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center sm:flex-row sm:justify-center sm:gap-2 sm:px-2"
                  >
                    <Icon size={16} className="shrink-0 text-violet-300" />
                    <span className="text-[9px] text-slate-300 sm:text-[10px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Our approach</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Beyond the Strategy.
              <br />
              <span className={gradientText}>
                Build the System Behind It.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Trading systems depend on more than a strategy alone. Data
              quality, processing pipelines, execution workflows, monitoring,
              and risk controls all influence how a system operates.
              Axeiro Algo explores these engineering foundations as part of a
              broader trading infrastructure vision.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <CapabilityCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE FLOW */}
      <section
        id="infrastructure"
        className="scroll-mt-24 border-y border-slate-200/70 bg-white/60 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel>System architecture</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              From Raw Data
              <br />
              to <span className={gradientText}>System Intelligence.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A modular way to think about the components behind a trading
              infrastructure platform. Actual integrations and execution
              capabilities depend on implementation.
            </p>
          </Reveal>

          <div className="relative mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map(
              ({ number, icon: Icon, title, description }, index) => (
                <motion.article
                  key={number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="relative rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>

                    <span className="text-[10px] font-semibold tracking-widest text-slate-400">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold">{title}</h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                    {description}
                  </p>

                  {index < infrastructure.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="absolute -right-2.5 top-1/2 z-10 hidden text-violet-500 lg:block"
                    />
                  )}
                </motion.article>
              ),
            )}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/70 p-4 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600">
              <Network size={21} />
            </span>

            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
              <span className="font-semibold text-slate-900">
                Designed as connected components.
              </span>{" "}
              The goal is to keep the architecture modular, observable, and
              adaptable as requirements evolve.
            </p>
          </div>
        </div>
      </section>

      {/* DARK ENGINEERING SECTION */}
      <section className="relative isolate overflow-hidden bg-[#070811] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(109,40,217,0.24),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(139,130,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(139,130,255,0.16)_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 md:grid-cols-[1fr_0.85fr] md:items-center lg:gap-16 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel dark>Engineering principles</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Reliability Is
              <br />
              Part of the <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Strategy.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              Infrastructure must be designed with operational behaviour in
              mind. We focus on the engineering foundations that make complex
              data workflows easier to understand, maintain, and evolve.
            </p>
          </Reveal>

          <div className="space-y-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-violet-400/30 sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Icon size={21} strokeWidth={1.6} />
                </span>

                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP / DEVELOPMENT STATUS */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Development direction</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Building the
              <br />
              <span className={gradientText}>Foundations First.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The focus is on establishing a clear technical foundation before
              expanding the platform. Data pipelines, modular processing,
              monitoring, and responsible system design are useful building
              blocks for a more complete trading infrastructure.
            </p>
          </Reveal>

          <div className="space-y-0">
            {[
              {
                number: "01",
                title: "Infrastructure foundations",
                description:
                  "Define core architecture, data models, and processing boundaries.",
              },
              {
                number: "02",
                title: "Research and validation",
                description:
                  "Evaluate technical approaches and validate system behaviour with suitable test data.",
              },
              {
                number: "03",
                title: "Integration and evolution",
                description:
                  "Explore additional components and integrations as requirements and validation mature.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5"
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      index === 0
                        ? "bg-violet-600 text-white"
                        : "border border-violet-200 bg-violet-50 text-violet-700"
                    }`}
                  >
                    {item.number}
                  </span>

                  {index < 2 && (
                    <span className="mt-2 w-px flex-1 bg-violet-200" />
                  )}
                </div>

                <div className="pb-1">
                  <h3 className="text-base font-semibold">{item.title}</h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#090713] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(109,40,217,0.34),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(124,58,237,0.10)_49%,transparent_50%,transparent_58%,rgba(124,58,237,0.08)_59%,transparent_60%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Reveal className="max-w-2xl">
            <SectionLabel dark>Explore Axeiro Algo</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Interested in
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Trading Infrastructure?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Connect with us to discuss the vision, technical direction, or
              potential collaboration opportunities.
            </p>
          </Reveal>

          <Link
            href="/contact?interest=axeiro-algo"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Talk to Our Team
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
