"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Target,
  BarChart3,
  Users,
  ShieldCheck,
  Code2,
  Leaf,
  Building2,
  Globe2,
  Cloud,
  ShoppingCart,
  Box,
  ChartNoAxesColumn,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Axeiro Cloud",
    subtitle: "Deployment & Infrastructure",
    description: "Deployment and infrastructure orchestration for modern applications.",
    status: "In Development",
    tone: "violet",
    icon: Cloud,
    image: "/images/products/cloud.jpg",
    href: "/products/cloud",
  },
  {
    name: "Axeiro Safety (ASI)",
    subtitle: "Edge-AI Safety Infrastructure",
    description: "AI-enabled safety infrastructure for people, industry and smart cities.",
    status: "Prototype",
    tone: "coral",
    icon: ShieldCheck,
    image: "/images/products/safety.jpg",
    href: "/products/safety",
  },
  {
    name: "Axeiro ElectraMart",
    subtitle: "Smart Commerce Platform",
    description: "A commerce platform for electrical and industrial products.",
    status: "Building",
    tone: "amber",
    icon: ShoppingCart,
    image: "/images/products/electramart.jpg",
    href: "/products/electramart",
  },
  {
    name: "Axeiro Algo",
    subtitle: "Trading Infrastructure",
    description: "Infrastructure for data-driven trading strategies.",
    status: "R&D",
    tone: "coral",
    icon: ChartNoAxesColumn,
    image: "/images/products/algo.jpg",
    href: "/products/algo",
  },
  {
    name: "Axeiro Forge",
    subtitle: "Developer Tools",
    description: "Tools and infrastructure for the next generation of developers.",
    status: "Concept",
    tone: "violet",
    icon: Box,
    image: "/images/products/forge.jpg",
    href: "/products/forge",
  },
];

const missionItems = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Build",
    description: "We build technology ourselves, not just concepts.",
  },
  {
    number: "02",
    icon: Target,
    title: "Solve",
    description:
      "We focus on real-world problems where software and infrastructure can create measurable value.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Scale",
    description:
      "We design systems with production and scale in mind from the beginning.",
  },
];

const visionItems = [
  { icon: ShieldCheck, title: "Safer Communities" },
  { icon: Building2, title: "Smarter Businesses" },
  { icon: Globe2, title: "Connected Cities" },
  { icon: Leaf, title: "Sustainable Growth" },
];

const journey = [
  {
    year: "2025",
    title: "Foundation",
    items: [
      "Registered Axeiro",
      "Defined vision and roadmap",
      "Started product development",
    ],
    active: true,
  },
  {
    year: "2026",
    title: "Building",
    items: [
      "Develop prototypes and MVPs",
      "Validate technology and use cases",
      "Explore early partnerships",
    ],
    active: true,
  },
  {
    year: "2027+",
    title: "Scale",
    items: [
      "Launch products",
      "Expand into more industries",
      "Create real-world impact",
    ],
    active: false,
  },
];

const principles = [
  {
    icon: Users,
    title: "People First",
    description: "Technology should improve lives.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "Privacy and security are fundamental.",
  },
  {
    icon: Code2,
    title: "Open & Collaborative",
    description: "We believe in open standards and community.",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    description: "Long-term value over short-term gains.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const purpleGradient =
  "bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent";

/* Shared horizontal padding + max width so every section lines up. */
const container = "mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12";

function Reveal({ children, className = "", ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    // MotionConfig makes every animation respect "reduce motion" system settings.
    <MotionConfig reducedMotion="user">
      <main className="-mt-19 overflow-x-clip">
        {/* HERO */}
        {/* On mobile the section is pushed below the fixed navbar (pt-19) so the
            headline never collides with it. On md+ it slides under the nav as before. */}
        <section className="relative isolate overflow-hidden bg-white pt-19 md:pt-30">
          {/* Desktop: dark panel behind the globe */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-[68%] bg-linear-to-br from-[#7d95bf] via-[#0c1f43] to-[#000713] md:block"
          />

          {/* Desktop: transparent Earth image */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[78%] md:block">
            <Image
              src="/images/about-earth.png"
              alt=""
              fill
              priority
              sizes="78vw"
              className="object-contain object-right"
            />
          </div>

          {/* Desktop: white-to-transparent transition */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff_0%,#ffffff_29%,rgba(255,255,255,0.96)_37%,rgba(255,255,255,0.72)_44%,rgba(255,255,255,0.12)_57%,transparent_68%)] md:block"
          />

          {/* Hero content */}
          <div
            className={`${container} relative z-10 grid items-center gap-8 pb-10 pt-8 sm:pb-12 md:min-h-140.5 md:grid-cols-[1fr_0.5fr] md:py-16 lg:min-h-152.5 lg:grid-cols-[1fr_0.42fr]`}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[590px]"
            >
              <SectionLabel>About Axeiro</SectionLabel>

              <h1 className="mt-5 text-[clamp(2.25rem,10vw,3rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[#111116] md:mt-6 md:text-[clamp(2.8rem,5vw,5rem)] md:leading-[0.99] md:tracking-[-0.065em]">
                We Build
                <br />
                Technology for a
                <br />
                <span className={purpleGradient}>Smarter World.</span>
              </h1>

              <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-slate-600 md:mt-6 md:text-base">
                Axeiro is an early-stage technology company focused on building
                products and infrastructure across cloud, safety, commerce and
                developer tools — while partnering with businesses to turn
                complex ideas into real-world systems.
              </p>

              <div className="mt-7 flex gap-3">
                <Link
                  href="/products"
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 sm:flex-none"
                >
                  Our Products
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700 sm:flex-none"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>

            {/* Impact message: right side on desktop */}
            <div className="hidden max-w-50 self-end justify-self-end text-white md:block">
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.04em]">
                From
                <br />
                Ideas
                <br />
                To Real-World
                <br />
                <span className="text-violet-500">Impact.</span>
              </h2>

              <div className="my-5 h-1 w-8 rounded-full bg-white" />

              <p className="text-xs leading-5 text-white/75">
                Combining software, hardware and infrastructure to create safer,
                smarter and more connected communities.
              </p>
            </div>
          </div>

          {/* Mobile: globe panel sits below the copy so the message is
              readable first, with the impact line overlaid on the globe. */}
          <div className="relative h-[340px] overflow-hidden bg-linear-to-br from-[#2a3f69] via-[#0c1f43] to-[#000713] min-[480px]:h-[420px] md:hidden">
            <Image
              src="/images/about-earth.png"
              alt="Earth at night illuminated by connected cities"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_center]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#000713] via-[#000713]/80 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 text-white sm:px-8">
              <h2 className="text-xl font-medium leading-tight tracking-[-0.03em]">
                From ideas to real-world{" "}
                <span className="text-violet-400">impact.</span>
              </h2>
              <p className="mt-2 max-w-[34ch] text-[13px] leading-5 text-white/75">
                Combining software, hardware and infrastructure to create safer,
                smarter and more connected communities.
              </p>
            </div>
          </div>

          {/* Desktop-only shadow under the globe */}
          <div className="absolute -bottom-4 -right-8 hidden h-110 w-100 bg-black blur-2xl md:block" />
        </section>

        {/* MISSION */}
        <section id="mission" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
          <div
            className={`${container} grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12`}
          >
            <Reveal className="max-w-xl">
              <SectionLabel>Our mission</SectionLabel>

              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-[42px]">
                Solve <span className={purpleGradient}>Real Problems</span>
                <br />
                with Technology.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                We believe technology should create real value for people,
                businesses and communities. Our mission is to build practical,
                scalable and secure technology products and infrastructure that
                solve meaningful problems.
              </p>
            </Reveal>

            {/* Mobile: ruled list. sm+: three cards. */}
            <div className="border-t border-slate-200 sm:grid sm:grid-cols-3 sm:gap-3 sm:border-t-0">
              {missionItems.map(({ number, icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-4 border-b border-slate-200 py-5 sm:block sm:rounded-xl sm:border sm:border-slate-200/80 sm:bg-white/70 sm:p-4 sm:transition sm:duration-300 sm:hover:-translate-y-1 sm:hover:border-violet-200 sm:hover:shadow-lg sm:hover:shadow-violet-950/5 lg:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 sm:h-10 sm:w-10">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-violet-600 sm:mt-4">
                      {number}
                    </p>

                    <h3 className="mt-0.5 text-lg font-semibold tracking-tight sm:mt-1">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-5 text-slate-600 sm:mt-2 sm:text-[12px]">
                      {description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="relative isolate overflow-hidden bg-[#080711] py-16 text-white lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-[62%_center] md:bg-center"
            style={{ backgroundImage: "url('/images/about-work-with-us-bg.png')" }}
          />

          {/* Mobile: even overlay for legibility. md+: left-weighted like desktop. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#05050c]/90 via-[#080711]/70 to-[#05050c]/92 md:bg-gradient-to-r md:from-[#05050c]/95 md:via-[#080711]/65 md:to-[#05050c]/80"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_50%,rgba(124,58,237,0.22),transparent_55%)]"
          />

          <div
            className={`${container} relative grid gap-9 md:grid-cols-[1fr_0.6fr] md:items-center lg:grid-cols-[1fr_0.42fr] lg:gap-16`}
          >
            <Reveal className="max-w-xl">
              <SectionLabel dark>Our vision</SectionLabel>

              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                A Smarter World
                <br />
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Through Technology.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-200/90 sm:text-base">
                We envision a future where modern infrastructure, AI and
                connected systems make people, businesses and cities safer,
                more efficient and more empowered.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
              {visionItems.map(({ icon: Icon, title }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm md:flex-row md:items-center"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-violet-200">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>

                  <span className="text-[13px] font-medium leading-tight text-white sm:text-sm">
                    {title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div
            className={`${container} grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14`}
          >
            <Reveal className="max-w-lg">
              <SectionLabel>Our journey</SectionLabel>

              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                Early Stage.
                <br />
                A Bigger <span className={purpleGradient}>Journey Ahead.</span>
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-sm sm:leading-6">
                Axeiro is in active development. We are building our products,
                exploring real-world use cases and working toward bringing our
                technology to production.
              </p>
            </Reveal>

            {/* Mobile: vertical timeline. sm+: horizontal. */}
            <ol className="relative grid list-none gap-8 pl-7 sm:grid-cols-3 sm:gap-4 sm:pl-0">
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-[6px] top-2 w-px bg-slate-200 sm:bottom-auto sm:left-[8%] sm:right-[8%] sm:top-[7px] sm:h-px sm:w-auto"
              />

              {journey.map((phase, index) => (
                <motion.li
                  key={phase.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-7 top-1 h-3.5 w-3.5 rounded-full border-2 border-white sm:relative sm:left-auto sm:top-auto sm:mb-5 sm:block sm:h-4 sm:w-4 ${
                      phase.active
                        ? "bg-violet-600 ring-2 ring-violet-100"
                        : "bg-white ring-1 ring-slate-300"
                    }`}
                  />

                  <p className="text-xs font-semibold tracking-wide text-violet-700">
                    {phase.year}
                  </p>

                  <h3 className="mt-1.5 text-lg font-semibold sm:mt-2 sm:text-base">
                    {phase.title}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[13px] leading-5 text-slate-600 sm:text-xs"
                      >
                        <span aria-hidden="true" className="mt-px text-violet-600">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="border-y border-slate-200/70 bg-white/60 py-14 sm:py-16 lg:py-20">
          <div className={container}>
            <Reveal className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <SectionLabel>What we&apos;re building</SectionLabel>

                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.055em] sm:text-4xl">
                  A Portfolio of{" "}
                  <span className={purpleGradient}>Technology Products.</span>
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-6">
                  We are building a set of products across different domains.
                  Each product is at a different stage of development.
                </p>
              </div>

              <Link
                href="/products"
                className="group hidden w-fit shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold transition hover:border-violet-300 hover:text-violet-700 sm:inline-flex"
              >
                View All Products
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            {/* Mobile: swipeable row with the next card peeking in.
                sm+: regular grid. */}
            <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="w-[78%] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none"
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700 sm:hidden"
            >
              View All Products
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div
            className={`${container} grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-12`}
          >
            <Reveal>
              <SectionLabel>Why Axeiro</SectionLabel>

              <h2 className="mt-5 text-[2rem] font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
                Built on{" "}
                <span className={purpleGradient}>Strong Principles.</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {principles.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200/80 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/5"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-violet-600"
                  />

                  <h3 className="mt-4 text-sm font-semibold leading-snug">
                    {title}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-5 text-slate-600 sm:text-xs">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-[#090713] py-14 text-white lg:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_110%,rgba(109,40,217,0.4),transparent_42%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(145deg,transparent_40%,rgba(124,58,237,0.12)_41%,transparent_42%,transparent_50%,rgba(124,58,237,0.08)_51%,transparent_52%)]"
          />

          <div
            className={`${container} relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between`}
          >
            <Reveal className="max-w-2xl">
              <SectionLabel dark>Let&apos;s build together</SectionLabel>

              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.055em] sm:text-4xl">
                Have a product idea or
                <br className="hidden sm:block" />{" "}
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  a technical challenge?
                </span>
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-slate-300 sm:text-sm sm:leading-6">
                We&apos;d love to hear about it. Let&apos;s explore how we can
                work together.
              </p>
            </Reveal>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 sm:w-auto"
              >
                Talk to Our Team
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/engineering"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-white/5 sm:w-auto"
              >
                View Our Approach
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}