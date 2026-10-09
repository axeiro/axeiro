
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  ShieldCheck,
  ShoppingCart,
  ChartNoAxesColumn,
  Box,
  Layers3,
  Network,
  Cpu,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const products = [
  {
    number: "01",
    name: "Axeiro Cloud",
    category: "CLOUD & PLATFORM",
    tagline: "Infrastructure for the next generation of applications.",
    description:
      "A cloud orchestration platform designed to simplify application deployment, container workflows, and infrastructure management.",
    status: "In Development",
    tone: "violet",
    icon: Cloud,
    image: "/images/products/cloud.jpg",
    href: "/products/cloud",
    capabilities: [
      "Application deployment",
      "Container workflows",
      "Cloud infrastructure",
    ],
  },
  {
    number: "02",
    name: "Axeiro Safety",
    category: "SMART SAFETY INFRASTRUCTURE",
    tagline: "Intelligence that helps protect people and places.",
    description:
      "Axeiro Smart Safety Infrastructure combines edge AI, connected devices, and cloud intelligence to support safety use cases across people, industry, and cities.",
    status: "Prototype",
    tone: "emerald",
    icon: ShieldCheck,
    image: "/images/products/safety.jpg",
    href: "/products/safety",
    capabilities: [
      "Edge AI and sensing",
      "Connected safety devices",
      "Event-driven alerts",
    ],
  },
  {
    number: "03",
    name: "Axeiro ElectraMart",
    category: "COMMERCE & INDUSTRY",
    tagline: "A smarter way to connect products and businesses.",
    description:
      "A commerce platform focused on electrical and industrial products, bringing product discovery and purchasing workflows into one experience.",
    status: "Building",
    tone: "amber",
    icon: ShoppingCart,
    image: "/images/products/electramart.jpg",
    href: "/products/electramart",
    capabilities: [
      "Product discovery",
      "Commerce workflows",
      "Industrial catalogues",
    ],
  },
  {
    number: "04",
    name: "Axeiro Algo",
    category: "TRADING INFRASTRUCTURE",
    tagline: "Engineering the systems behind data-driven strategies.",
    description:
      "A trading infrastructure initiative exploring the backend systems, data workflows, and engineering foundations needed for algorithmic trading.",
    status: "R&D",
    tone: "rose",
    icon: ChartNoAxesColumn,
    image: "/images/products/algo.jpg",
    href: "/products/algo",
    capabilities: [
      "Trading system foundations",
      "Data processing workflows",
      "Backend infrastructure",
    ],
  },
  {
    number: "05",
    name: "Axeiro Forge",
    category: "DEVELOPER TOOLS",
    tagline: "Tools that turn complex engineering into a clearer workflow.",
    description:
      "A developer tools initiative exploring ways to make building, testing, and shipping software and hardware systems more accessible.",
    status: "Concept",
    tone: "violet",
    icon: Box,
    image: "/images/products/forge.jpg",
    href: "/products/forge",
    capabilities: [
      "Developer workflows",
      "Engineering tools",
      "Build and test foundations",
    ],
  },
];

const ecosystem = [
  {
    icon: Layers3,
    title: "Product Engineering",
    description: "Purpose-built products designed around real-world needs.",
  },
  {
    icon: Network,
    title: "Connected Infrastructure",
    description: "Systems that connect devices, applications, and services.",
  },
  {
    icon: Cpu,
    title: "Intelligent Systems",
    description: "Practical applications of automation, data, and AI.",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "Tools and platforms that simplify complex workflows.",
  },
];

const statusStyles = {
  violet: {
    badge: "border-violet-200 bg-violet-50 text-violet-700",
    icon: "bg-violet-50 text-violet-600",
    glow: "from-violet-500/10",
  },
  emerald: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: "bg-emerald-50 text-emerald-600",
    glow: "from-emerald-500/10",
  },
  amber: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    icon: "bg-amber-50 text-amber-600",
    glow: "from-amber-500/10",
  },
  rose: {
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    icon: "bg-rose-50 text-rose-600",
    glow: "from-rose-500/10",
  },
};

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

const gradientText =
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

function ProductCard({ product, index }) {
  const Icon = product.icon;
  const style = statusStyles[product.tone] ?? statusStyles.violet;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-colors duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/[0.06]"
    >
      <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-[#f5f3fa] p-5 sm:min-h-[200px]">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${style.glow} via-transparent to-transparent opacity-80`}
        />

        <span className="absolute left-4 top-4 text-[10px] font-semibold tracking-[0.16em] text-slate-400">
          AXEIRO / {product.number}
        </span>

        <Image
          src={product.image}
          alt={`${product.name} product visual`}
          width={560}
          height={350}
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, (max-width: 1279px) 29vw, 22vw"
          className="relative z-10 h-32 w-full rounded-xl object-cover shadow-sm transition-transform duration-700 group-hover:scale-[1.04] sm:h-36"
        />

        <span
          className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 shadow-sm ${style.icon}`}
        >
          <Icon size={20} strokeWidth={1.7} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[9px] font-semibold tracking-[0.15em] text-violet-600 sm:text-[10px]">
          {product.category}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[#17171c] sm:text-2xl">
          {product.name}
        </h3>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
          {product.tagline}
        </p>

        <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
          {product.description}
        </p>

        <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
          {product.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-2 text-xs leading-5 text-slate-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {capability}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-medium ${style.badge}`}
          >
            {product.status}
          </span>

          <Link
            href={product.href}
            aria-label={`Explore ${product.name}`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(124,58,237,0.12),transparent_42%),linear-gradient(120deg,#fff_0%,#fcfbff_58%,#f8f6ff_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 top-8 h-80 w-80 rounded-full border border-violet-200/40 sm:h-[440px] sm:w-[440px]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-violet-200/30 sm:h-[340px] sm:w-[340px]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-8 px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-12 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-3xl"
          >
            <SectionLabel>Explore the Axeiro ecosystem</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
              Five Products.
              <br />
              One <span className={gradientText}>Bigger Vision.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              We are building technology across cloud infrastructure, smart
              safety, commerce, trading systems, and developer tools. Each
              product addresses a different challenge, connected by one
              ambition: practical technology that creates real-world value.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#our-products"
                className="group inline-flex min-h-11 items-center gap-3 rounded-lg bg-[#111116] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Explore Our Products
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700"
              >
                Partner With Us
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-5 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Cloud & Platform
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Smart Safety
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Commerce & Industry
              </span>
            </div>
          </motion.div>

          {/* Ecosystem visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-violet-400/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-2xl shadow-violet-950/[0.07] backdrop-blur-sm sm:p-5">
              <Image
                src="/images/axeiro-ecosystem.png"
                alt="Axeiro's connected product ecosystem"
                width={900}
                height={850}
                priority
                sizes="(max-width: 1023px) 90vw, 42vw"
                className="relative h-auto w-full"
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/80 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.13em] text-violet-600">
                    THE AXEIRO ECOSYSTEM
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-800 sm:text-sm">
                    Different products. Shared ambition.
                  </p>
                </div>

                <Sparkles
                  size={20}
                  className="shrink-0 text-violet-600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section
        id="our-products"
        className="scroll-mt-24 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel>Our products</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Built for Different Challenges.
              <br className="hidden sm:block" />
              <span className={gradientText}>Connected by Vision.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore the product lines we are developing. Each has its own
              focus, roadmap, and dedicated product experience.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SHARED ECOSYSTEM */}
      <section className="border-y border-slate-200/10 bg-[#090910] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel dark>The bigger picture</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              One Ecosystem.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
                Multiple Possibilities.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Our product portfolio spans software, infrastructure, connected
              systems, and developer experience. We approach each domain with
              a focus on useful products, thoughtful engineering, and
              long-term potential.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.06] sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Icon size={22} strokeWidth={1.6} />
                </span>

                <h3 className="mt-5 text-base font-semibold">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STAGES */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel>Where we are</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              Progress Over Promises.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Our products are at different stages of development. We focus on
              building, validating, and improving them as they move toward
              practical use.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "IN DEVELOPMENT",
                title: "Building foundations",
                description:
                  "Developing core workflows, architecture, and product foundations.",
                tone: "violet",
              },
              {
                label: "PROTOTYPE & BUILDING",
                title: "Testing ideas in practice",
                description:
                  "Exploring prototypes and validating product concepts and technical approaches.",
                tone: "emerald",
              },
              {
                label: "R&D & CONCEPT",
                title: "Exploring what's possible",
                description:
                  "Researching opportunities and defining potential product directions.",
                tone: "amber",
              },
            ].map((stage, index) => (
              <motion.article
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1.5 text-[9px] font-semibold tracking-[0.08em] ${
                    stage.tone === "violet"
                      ? "bg-violet-50 text-violet-700"
                      : stage.tone === "emerald"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {stage.label}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {stage.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#090713] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(109,40,217,0.34),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(124,58,237,0.10)_49%,transparent_50%,transparent_58%,rgba(124,58,237,0.08)_59%,transparent_60%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Reveal className="max-w-2xl">
            <SectionLabel dark>Build with Axeiro</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Have a product idea?
              <br />
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Let's build something meaningful.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Whether you're exploring a product, a technical collaboration,
              or an engineering challenge, we'd like to hear from you.
            </p>
          </Reveal>

          <Link
            href="/contact"
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
