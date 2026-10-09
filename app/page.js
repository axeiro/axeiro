"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaChartColumn,
  FaBox,
  FaCloud,
  FaCode,
  FaLayerGroup,
  FaLeaf,
  FaLightbulb,
  FaShieldHalved,
  FaCartShopping,
  FaBullseye,
  FaDiagramProject,
} from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

import SectionLabel from "./components/SectionLabel";
import ProductCard from "./components/ProductCard";
import { CgMouse } from "react-icons/cg";

const products = [
  {
    name: "Axeiro Cloud",
    subtitle: "Deployment & Infrastructure Platform",
    description:
      "Simplify deployment, scaling and infrastructure management.",
    status: "In Development",
    tone: "violet",
    icon: FaCloud,
    image: "/images/products/cloud.jpg",
    href: "/products/cloud",
  },
  {
    name: "Axeiro Safety (ASI)",
    subtitle: "Edge-AI Safety Infrastructure",
    description:
      "AI-powered safety systems for people, industry and smart cities.",
    status: "Prototype",
    tone: "coral",
    icon: FaShieldHalved,
    image: "/images/products/safety.jpg",
    href: "/products/safety",
  },
  {
    name: "Axeiro ElectraMart",
    subtitle: "Smart Commerce Platform",
    description:
      "Modern commerce platform for electrical and industrial products.",
    status: "Building",
    tone: "amber",
    icon: FaCartShopping,
    image: "/images/products/electramart.jpg",
    href: "/products/electramart",
  },
  {
    name: "Axeiro Algo",
    subtitle: "Trading Infrastructure",
    description:
      "High-performance infrastructure for data-driven strategies.",
    status: "R&D",
    tone: "coral",
    icon: FaChartColumn,
    image: "/images/products/algo.jpg",
    href: "/products/algo",
  },
  {
    name: "Axeiro Forge",
    subtitle: "Developer Tools",
    description:
      "Tools, APIs and infrastructure for the next generation of developers.",
    status: "Concept",
    tone: "violet",
    icon: FaBox,
    image: "/images/products/forge.jpg",
    href: "/products/forge",
  },
];

const principles = [
  {
    icon: FaBullseye,
    title: "Problem-Focused",
    description: "We work on problems that matter.",
  },
  {
    icon: FaLayerGroup,
    title: "Technical Depth",
    description: "Modern tools and proven architecture.",
  },
  {
    icon: FaLightbulb,
    title: "Product Mindset",
    description: "We build for real usage, not just prototypes.",
  },
  {
    icon: FaLeaf,
    title: "Long-Term Vision",
    description: "Technology for a better tomorrow.",
  },
];

const services = [
  {
    icon: FaBox,
    title: "Product Engineering",
    description: "From idea to production-ready products.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Platform",
    description: "Scalable infrastructure and DevOps.",
  },
  {
    icon: FaDiagramProject,
    title: "AI & Automation",
    description: "AI systems and intelligent workflows.",
  },
  {
    icon: FaCode,
    title: "Backend & APIs",
    description: "Robust, secure and scalable systems.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


function Reveal({ children, className = "", ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Radar rings behind the ecosystem */}
        

        <div className="relative mx-auto grid min-h-155 w-full max-w-360 items-center gap-4 px-5 py-6 sm:px-8 sm:py-16 lg:grid-cols-[0.83fr_1.17fr] lg:gap-0 lg:px-12 lg:py-12">
          {/* Hero copy */}
          <motion.div
            className="relative z-10 max-w-147.5"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <SectionLabel>Technology infrastructure</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-[#111116]">
              We Build
              <br />
              Technology for a
              <br />
              <span className="text-blue-700">Smarter World.</span>
            </h1>

            <p className="mt-6 max-w-117.5 text-sm leading-[1.75] text-slate-600 sm:text-base">
              Axeiro is an early-stage technology company building products
              and infrastructure across cloud, safety, commerce and developer
              tools — while partnering with businesses to turn complex ideas
              into real-world systems.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[#111116] px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 sm:text-sm"
              >
                Explore What We&apos;re Building
                <FaArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200  px-5 py-3 text-xs font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700 sm:text-sm"
              >
                Work With Us
              </Link>
            </div>

            <a
              href="#products"
              className="mt-9 inline-flex items-center gap-3 text-xs font-medium text-slate-500 transition hover:text-violet-700"
            >                
            <CgMouse size={22} />
              
              Scroll to explore
            </a>
          </motion.div>

          {/* Ecosystem illustration */}
          <Image
              src="/images/AXEIRO Futuristic Tech Ecosystem.png"
              alt="Axeiro ecosystem connecting cloud, safety, commerce, trading and developer infrastructure"
              width={1100}
              height={1000}
              priority
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="relative h-auto w-full "
            />
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="scroll-mt-20 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-7 flex flex-col gap-5 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>
                Our products
                </SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-[#111116] sm:text-4xl">
                A Portfolio in Progress
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                We are building a set of technology products designed to solve
                real-world problems. Each product is at a different stage of
                development.
              </p>
            </div>

            <Link
              href="/roadmap"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700"
            >
              View Full Roadmap
              <FaArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

      {/* ENGINEERING */}
      <section
        id="engineering"
        className="relative isolate overflow-hidden bg-[#080910] py-14 text-white sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/engineering-bg.avif')",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-[#05060b]/95 via-[#05060b]/70 to-[#05060b]/35"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[#05060b]/90 via-transparent to-[#05060b]/20"
        />

        <div className="relative mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <SectionLabel dark>Engineering services</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Build Your
                <br />
                Next Idea <span className="to-blue-800">With Us.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
                We partner with startups, businesses and organisations to
                design, build and scale software products, cloud infrastructure
                and AI-powered systems.
              </p>

              <Link
                href="/engineering"
                className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100 sm:text-sm"
              >
                Start a Project
                <FaArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div
              aria-label="Our engineering process"
              className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:pl-4"
            >
              {["Ideate", "Design", "Build", "Deploy", "Scale"].map(
                (step, index) => (
                  <div
                    key={step}
                    className={`flex min-h-23 flex-col items-start justify-between rounded-xl border p-3 backdrop-blur-md transition sm:min-h-27 sm:p-4 ${
                      index === 2
                        ? "border-violet-300/60 bg-violet-400/20 shadow-lg shadow-violet-950/30"
                        : "border-white/15 bg-slate-950/35 hover:border-white/30 hover:bg-white/8"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
                        index === 2
                          ? "bg-violet-300 text-slate-950"
                          : "border border-white/25 text-slate-200"
                      }`}
                    >
                      {index + 1}
                    </span>

                    <span className="text-xs font-medium text-slate-100 sm:text-sm">
                      {step}
                    </span>
                  </div>
                ),
              )}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.07 }}
                className="group border-white/10 sm:px-4 lg:border-r lg:last:border-r-0"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center text-violet-400 transition group-hover:text-violet-200">
                  <Icon size={27} aria-hidden="true" />
                </span>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {title}
                </h3>

                <p className="mt-2 max-w-57.5 text-xs leading-5 text-slate-300 sm:text-sm">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AXEIRO */}
      <section id="about" className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Why Axeiro</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#111116] sm:text-4xl lg:text-5xl">
              A Practical Approach
              <br />
              to <span className={"to-blue-700"}>Real-World Problems.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              We combine deep technical expertise with a product mindset to
              build technology that creates real value for people, businesses
              and communities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.06 }}
                className="group rounded-xl border border-slate-200/80 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/5 sm:p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center text-violet-600 transition group-hover:text-violet-800">
                  <Icon size={25} aria-hidden="true" />
                </span>

                <h3 className="mt-4 text-sm font-semibold text-slate-950 sm:text-base">
                  {title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-t border-slate-200/70 bg-[#0a0917] py-16 text-white sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/work-with-us-bg.avif')",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-[#080713]/95 via-[#080713]/75 to-[#080713]/15"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[#080713]/45 via-transparent to-[#080713]/20"
        />

        <div className="relative mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <SectionLabel dark>Work with us</SectionLabel>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Have a product idea
              <br />
              or a{" "}
              <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
                technical challenge?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              We&apos;d love to hear about it. Let&apos;s discuss how we can
              work together.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:bg-violet-500 sm:text-sm"
              >
                Talk to Our Team
                <FaArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/engineering"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-black/20 px-5 py-3 text-xs font-semibold text-white transition hover:border-white/50 hover:bg-white/10 sm:text-sm"
              >
                View Our Approach
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}