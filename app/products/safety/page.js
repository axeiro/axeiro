"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Shield,
  ShieldCheck,
  Video,
  Radio,
  ChartNoAxesCombined,
  Network,
  BellRing,
  Building2,
  Users,
  Factory,
  CarFront,
  Camera,
  Eye,
  LockKeyhole,
  Activity,
  CheckCircle2,
} from "lucide-react";

import SectionLabel from "../../components/SectionLabel";

const principles = [
  {
    icon: BrainCircuit,
    title: "AI at the Edge",
    description:
      "Process relevant signals close to where they originate, enabling responsive, context-aware safety systems.",
  },
  {
    icon: Cloud,
    title: "Connected Ecosystem",
    description:
      "Connect devices, software, and cloud services for coordinated visibility and control.",
  },
  {
    icon: Shield,
    title: "Designed for Impact",
    description:
      "Build practical safety solutions for workplaces, public spaces, and industrial environments.",
  },
];

const capabilities = [
  {
    icon: Video,
    title: "Video Intelligence",
    description:
      "Camera-based monitoring and event detection for supported safety use cases.",
  },
  {
    icon: Radio,
    title: "Edge Devices",
    description:
      "Connected sensors and embedded devices for local sensing and processing.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Cloud Platform",
    description:
      "Centralized events, system visibility, and safety data management.",
  },
  {
    icon: Network,
    title: "Integrations",
    description:
      "Connect safety workflows with existing infrastructure and supported systems.",
  },
];

const useCases = [
  {
    icon: Users,
    title: "Women & Child Safety",
    category: "PERSONAL SAFETY",
    description:
      "Developing privacy-aware, AI-enabled safety solutions designed to support women and child safety through intelligent sensing and timely alerts.",
    image: "/images/safety/women-child-safety.jpg",
  },
  {
    icon: Factory,
    title: "Industrial Safety",
    category: "INDUSTRIAL & WORKSITE",
    description:
      "Intelligent safety infrastructure for industrial environments, helping support hazard awareness, personnel safety, and connected monitoring.",
    image: "/images/safety/industrial-safety.jpg",
  },
  {
    icon: Building2,
    title: "Public Infrastructure Safety",
    category: "PUBLIC SPACES & CITIES",
    description:
      "Connected infrastructure for public-space monitoring, traffic awareness, and safer, more responsive urban environments.",
    image: "/images/safety/public-infrastructure.jpg",
  },
];

const workflow = [
  {
    number: "01",
    icon: Camera,
    title: "Capture",
    description: "Devices collect relevant sensor and video data.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Analyse",
    description: "Local intelligence evaluates supported signals and events.",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Alert",
    description:
      "Relevant events can trigger notifications and escalation workflows.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Respond",
    description: "People and connected systems can act on available insights.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const purpleGradient =
  "bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent";

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

function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/[0.05] sm:p-6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
        <Icon size={22} strokeWidth={1.7} />
      </span>

      <h3 className="mt-4 text-base font-semibold tracking-tight text-[#17171c]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
        {description}
      </p>
    </motion.article>
  );
}

function UseCaseCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/[0.05]"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-44 lg:h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 23vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-70" />

        <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-[9px] font-medium tracking-[0.1em] text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Icon size={18} strokeWidth={1.7} />
          </span>

          <h3 className="text-base font-semibold tracking-tight">
            {item.title}
          </h3>
        </div>

        <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function SafetyPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        {/* Dark visual area */}
        <div className="absolute inset-y-0 right-0 hidden w-[65%] bg-[#030713] md:block" />

        <div className="absolute inset-y-0 right-0 hidden w-[76%] md:block">
          <Image
            src="/images/safety/safety-hero.jpg"
            alt=""
            fill
            priority
            sizes="76vw"
            className="object-cover object-center"
          />
        </div>

        {/* Keep text readable against the photograph */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(to_right,#fff_0%,#fff_30%,rgba(255,255,255,0.96)_38%,rgba(255,255,255,0.72)_46%,rgba(255,255,255,0.08)_63%,transparent_75%)] md:block"
        />

        {/* Mobile hero image */}
        <div className="relative h-[230px] overflow-hidden bg-[#030713] sm:h-[300px] md:hidden">
          <Image
            src="/images/safety/safety-hero.jpg"
            alt="Connected camera and smart city safety infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbfa] via-black/10 to-black/15" />
        </div>

        <div className="relative mx-auto grid w-full max-w-360 gap-8 px-5 pb-12 pt-8 sm:px-8 sm:pb-16 md:min-h-[590px] md:grid-cols-[1fr_0.38fr] md:items-center md:py-24 lg:min-h-[630px] lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-[620px]"
          >
            <SectionLabel>Axeiro Safety (ASI)</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
              Smarter Safety
              <br />
              for People,
              <br />
              <span className={purpleGradient}>Places and Cities.</span>
            </h1>

            <p className="mt-5 max-w-[510px] text-sm leading-7 text-slate-600 sm:text-base">
              Axeiro Smart Safety Infrastructure combines edge devices,
              intelligent software, and connected systems to help create safer
              communities, workplaces, and cities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact?interest=axeiro-safety"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[#111116] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Get Early Access
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700"
              >
                Talk to Our Team
              </Link>
            </div>
          </motion.div>

          {/* Hero side message */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 hidden max-w-[210px] justify-self-end text-white md:block"
          >
            <p className="text-3xl font-medium leading-tight tracking-[-0.045em]">
              Awareness.
              <br />
              Intelligence.
              <br />
              <span className="text-violet-400">Safer Futures.</span>
            </p>

            <div className="my-5 h-1 w-8 rounded-full bg-white" />

            <p className="text-xs leading-6 text-white/75">
              Bringing edge intelligence and connected infrastructure together
              for real-world safety applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY ASI */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Why Axeiro Safety</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Real-World Safety,
              <br />
              Powered by <span className={purpleGradient}>Technology.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We believe safety should be proactive, intelligent, and connected.
              ASI brings together hardware, edge AI, and cloud systems to
              support timely awareness, faster response workflows, and safer
              environments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {principles.map((item, index) => (
              <FeatureCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative isolate overflow-hidden bg-[#050711] py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/safety/safety-vision.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#03050c]/95 via-[#03050c]/75 to-[#03050c]/65" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(124,58,237,0.22),transparent_55%)]" />

        <div className="relative mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 md:grid-cols-[1fr_0.6fr] md:items-center lg:grid-cols-[1fr_0.42fr] lg:gap-16 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel dark>Our vision</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Safer Communities
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Through Intelligence.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-200/85 sm:text-base">
              We envision a future where people, workplaces, and cities are
              supported by intelligent infrastructure, real-time insights, and
              connected systems.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
            {[
              { icon: ShieldCheck, label: "Safer Public Spaces" },
              { icon: Users, label: "More Secure Workplaces" },
              { icon: Building2, label: "Resilient Industries" },
              { icon: Eye, label: "Greater Situational Awareness" },
            ].map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-violet-300">
                  <Icon size={20} strokeWidth={1.6} />
                </span>

                <span className="text-xs font-medium text-white sm:text-sm">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
            <Reveal>
              <SectionLabel>Key capabilities</SectionLabel>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                From Detection
                <br />
                to <span className={purpleGradient}>Real-World Impact.</span>
              </h2>
            </Reveal>

            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              ASI combines hardware, software, and cloud infrastructure into an
              architecture designed to support connected safety solutions.
              Specific capabilities depend on the device, model, and deployment.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <FeatureCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-slate-200/70 bg-white/60 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <SectionLabel>Use cases</SectionLabel>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                Real Solutions
                <br />
                Across <span className={purpleGradient}>Multiple Domains.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600">
              ASI is being developed for a range of safety environments, with
              potential applications across public spaces, industry, workplaces,
              and connected infrastructure.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <UseCaseCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">
            <Reveal>
              <SectionLabel>How it works</SectionLabel>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                A Connected
                <br />
                Safety <span className={purpleGradient}>Infrastructure.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                ASI connects edge devices, intelligent software, and cloud
                systems to deliver event awareness and actionable insights.
              </p>

              <Link
                href="/contact?interest=axeiro-safety"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
              >
                Discuss a use case
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {workflow.map(
                ({ number, icon: Icon, title, description }, index) => (
                  <motion.article
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="relative rounded-2xl border border-slate-200/80 bg-white p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>

                      <span className="text-[10px] font-semibold tracking-widest text-slate-400">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold">{title}</h3>

                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      {description}
                    </p>

                    {index < workflow.length - 1 && (
                      <ArrowRight
                        aria-hidden="true"
                        size={15}
                        className="absolute -right-2.5 top-1/2 z-10 hidden text-violet-500 xl:block"
                      />
                    )}
                  </motion.article>
                ),
              )}
            </div>
          </div>

          {/* Privacy callout */}
          <Reveal className="mt-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-violet-100 bg-violet-50/70 p-5 sm:flex-row sm:items-start sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <LockKeyhole size={22} />
              </span>

              <div>
                <h3 className="text-base font-semibold">
                  Privacy-aware by design
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
                  Where supported by the specific device and deployment,
                  sensitive signals can be analysed locally and converted into
                  event information rather than sending raw input to the cloud.
                  Data handling depends on the configured use case and system
                  architecture.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#090713] py-12 text-white sm:py-14 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(109,40,217,0.36),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(124,58,237,0.10)_49%,transparent_50%,transparent_58%,rgba(124,58,237,0.08)_59%,transparent_60%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Reveal className="max-w-2xl">
            <SectionLabel dark>Let's build safer places</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
              Interested in
              <br className="sm:hidden" />{" "}
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Axeiro Safety (ASI)?
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              We're developing ASI and exploring real-world use cases with
              potential partners.
            </p>
          </Reveal>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact?interest=axeiro-safety"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Get Early Access
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-white/5"
            >
              Talk to Our Team
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
