
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  CircuitBoard,
  GitBranch,
  Workflow,
  Blocks,
  Bot,
  Layers3,
  Terminal,
  GitPullRequest,
  PanelsTopLeft,
  FileCode2,
  Microscope,
  Zap,
  ShieldCheck,
  Wrench,
  Lightbulb,
} from "lucide-react";

import SectionLabel from "../../components/SectionLabel";

const capabilities = [
  {
    icon: PanelsTopLeft,
    title: "Visual Design",
    description:
      "Explore visual workflows for planning interfaces, product experiences, and engineering concepts.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Keep engineering work organised with collaboration, version history, and structured changes.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Development",
    description:
      "Explore how AI can help developers understand code, accelerate repetitive work, and navigate complex projects.",
  },
  {
    icon: CircuitBoard,
    title: "Hardware Engineering",
    description:
      "Bring software development workflows closer to electronics, schematics, PCB design, and hardware projects.",
  },
];

const workflow = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Design",
    description:
      "Define the product, map requirements, and explore design concepts.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Develop",
    description:
      "Build software and engineering artefacts with a structured workflow.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Collaborate",
    description:
      "Track changes, organise project files, and coordinate engineering work.",
  },
  {
    number: "04",
    icon: Microscope,
    title: "Validate",
    description:
      "Review, test, and validate designs using suitable tools and workflows.",
  },
];

const principles = [
  {
    icon: Blocks,
    title: "Connected Workflows",
    description:
      "Reduce fragmentation between the tools involved in designing and building products.",
  },
  {
    icon: Cpu,
    title: "Software Meets Hardware",
    description:
      "Explore workflows that span code, electronics, and physical product development.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Discipline",
    description:
      "Keep collaboration, change history, and validation central to the development process.",
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

function WorkflowCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
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
          {item.number}
        </span>
      </div>

      <h3 className="mt-5 text-base font-semibold">{item.title}</h3>

      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
        {item.description}
      </p>

      {index < 3 && (
        <ArrowRight
          size={15}
          className="absolute -right-2.5 top-1/2 z-10 hidden text-violet-500 xl:block"
        />
      )}
    </motion.article>
  );
}

export default function ForgePage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 bg-[#080811]" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(109,40,217,0.28),transparent_45%),radial-gradient(ellipse_at_15%_90%,rgba(37,55,120,0.16),transparent_42%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(139,130,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(139,130,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-9 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-[610px]"
          >
            <SectionLabel dark>Axeiro Forge</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-white">
              Build Ideas.
              <br />
              Engineer the
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Future.
              </span>
            </h1>

            <p className="mt-6 max-w-[510px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              A developer-tools initiative exploring a more connected way to
              design, build, and validate products. Forge envisions bringing
              software workflows and hardware engineering closer together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#forge-workflow"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Explore the Vision
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact?interest=axeiro-forge"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-white/[0.08]"
              >
                Discuss Forge
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Code2 size={15} className="text-violet-300" />
                Software
              </span>
              <span className="flex items-center gap-2">
                <CircuitBoard size={15} className="text-violet-300" />
                Hardware
              </span>
              <span className="flex items-center gap-2">
                <Bot size={15} className="text-violet-300" />
                AI-Assisted Workflows
              </span>
            </div>
          </motion.div>

          {/* Developer and hardware visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[700px] lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-violet-600/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c17]/90 p-3 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-violet-300">
                    AXEIRO / FORGE
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Engineering Workspace
                  </p>
                </div>

                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-[10px] text-violet-200">
                  Developer Tools
                </span>
              </div>

              <div className="relative mt-3 aspect-[5/4] overflow-hidden rounded-xl bg-[#11111d] sm:aspect-[6/4]">
                <Image
                  src="/images/forge/forge-hero.jpg"
                  alt="Software development and electronics engineering workspace"
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 48vw"
                  className="object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080811]/95 via-[#080811]/20 to-[#080811]/10" />

                <div className="absolute left-3 right-3 top-3 flex flex-wrap gap-2 sm:left-5 sm:right-5 sm:top-5">
                  {["DESIGN", "CODE", "CIRCUITS", "VALIDATION"].map(
                    (label) => (
                      <span
                        key={label}
                        className="rounded-md border border-white/15 bg-black/45 px-2.5 py-1.5 text-[9px] tracking-wider text-white/80 backdrop-blur-md"
                      >
                        {label}
                      </span>
                    ),
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="text-[10px] tracking-[0.16em] text-violet-300">
                    CONCEPT → ENGINEERING → VALIDATION
                  </p>

                  <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    One vision for
                    <br />
                    connected engineering.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: PanelsTopLeft, label: "Design" },
                  { icon: Terminal, label: "Develop" },
                  { icon: CircuitBoard, label: "Engineer" },
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
            <SectionLabel>The Forge vision</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Engineering Tools
              <br />
              Should Work <span className={gradientText}>Together.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Product development often spans visual design tools, code
              editors, version control, electronics design software, and
              testing environments. Forge explores how these workflows could
              become more connected, helping teams move from an initial idea
              toward a validated product.
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

      {/* WORKFLOW */}
      <section
        id="forge-workflow"
        className="scroll-mt-24 border-y border-slate-200/70 bg-white/60 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel>Engineering workflow</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              From First Idea
              <br />
              to <span className={gradientText}>Working Product.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Forge's proposed direction is to make the stages of product
              development easier to navigate, with tools and workflows that
              support each stage of engineering.
            </p>
          </Reveal>

          <div className="relative mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => (
              <WorkflowCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE + HARDWARE */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>One engineering ecosystem</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Software Is Only
              <br />
              <span className={gradientText}>Part of the Picture.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Modern products can combine firmware, electronics, APIs,
              interfaces, and cloud infrastructure. Forge explores a
              development experience that recognises these connections rather
              than treating every discipline as an isolated workflow.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Software and code workflows",
                "Electronics and PCB design workflows",
                "Versioning and project collaboration",
                "Testing and validation workflows",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <ArrowRight size={12} />
                  </span>

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#101019] p-3 shadow-xl shadow-violet-950/[0.08] sm:p-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <span className="ml-2 text-[10px] text-slate-400">
                product-workflow
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                  <FileCode2 size={19} />
                </span>

                <p className="mt-4 text-sm font-semibold text-white">
                  Software
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Source code, application logic, firmware, and APIs.
                </p>

                <div className="mt-4 space-y-2">
                  {["src/", "components/", "firmware/"].map((file) => (
                    <div
                      key={file}
                      className="rounded-md border border-white/5 bg-black/20 px-3 py-2 font-mono text-[10px] text-violet-200"
                    >
                      {file}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-300">
                  <CircuitBoard size={19} />
                </span>

                <p className="mt-4 text-sm font-semibold text-white">
                  Hardware
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Schematics, PCB layouts, electronics, and validation.
                </p>

                <div className="relative mt-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-[#0b0b13]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(139,130,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(139,130,255,0.12)_1px,transparent_1px)] [background-size:16px_16px]"
                  />

                  <CircuitBoard
                    size={76}
                    strokeWidth={0.8}
                    className="relative text-violet-300"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-xl border border-violet-400/20 bg-violet-500/[0.07] p-3 sm:p-4">
              <div className="flex items-center gap-2.5">
                <Workflow size={18} className="shrink-0 text-violet-300" />

                <span className="text-xs font-medium text-slate-200">
                  Connected engineering workflow
                </span>
              </div>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-violet-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING PRINCIPLES */}
      <section className="relative isolate overflow-hidden bg-[#080811] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(109,40,217,0.23),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(139,130,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(139,130,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel dark>Our principles</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Better Tools.
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Better Engineering.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              Forge's direction is grounded in connecting workflows,
              supporting multiple engineering disciplines, and making
              development more structured and accessible.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-violet-400/30 sm:p-6"
              >
                <Icon size={23} className="text-violet-300" />

                <h3 className="mt-5 text-sm font-semibold sm:text-base">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Development direction</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              A Bigger
              <br />
              <span className={gradientText}>Engineering Vision.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Forge is a concept-stage initiative. Its direction can evolve
              through research, technical validation, and feedback from
              developers and hardware engineers.
            </p>
          </Reveal>

          <div className="space-y-0">
            {[
              {
                number: "01",
                title: "Explore the workflow",
                description:
                  "Identify friction between design, code, collaboration, and hardware development tools.",
              },
              {
                number: "02",
                title: "Validate technical possibilities",
                description:
                  "Investigate integrations, automation opportunities, and practical engineering requirements.",
              },
              {
                number: "03",
                title: "Build toward a connected experience",
                description:
                  "Define and develop focused capabilities as feasibility and priorities become clearer.",
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
            <SectionLabel dark>Build with Forge</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Interested in
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Connected Engineering?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Share your perspective on developer tools, hardware workflows,
              or the future of product engineering.
            </p>
          </Reveal>

          <Link
            href="/contact?interest=axeiro-forge"
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
