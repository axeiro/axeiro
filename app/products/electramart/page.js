
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Cable,
  Zap,
  Boxes,
  PackageSearch,
  Building2,
  Workflow,
  ShieldCheck,
  Search,
  Truck,
  Layers3,
  Store,
} from "lucide-react";

import SectionLabel from "../../components/SectionLabel";

const categories = [
  {
    number: "01",
    icon: Zap,
    title: "Electrical Supplies",
    description:
      "Electrical components and supplies for everyday requirements and specialised applications.",
    image: "/images/electramart/electrical-supplies.jpg",
  },
  {
    number: "02",
    icon: Cable,
    title: "Industrial Components",
    description:
      "Components and equipment for industrial operations, maintenance, and infrastructure projects.",
    image: "/images/electramart/industrial-components.jpg",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Tools & Equipment",
    description:
      "A product discovery experience designed to help customers explore tools and equipment.",
    image: "/images/electramart/tools-equipment.jpg",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Product Discovery",
    description:
      "Make it easier to explore product categories and find relevant electrical and industrial supplies.",
  },
  {
    icon: Layers3,
    title: "Organised Catalogues",
    description:
      "Structure products and categories to create a clearer browsing experience.",
  },
  {
    icon: Workflow,
    title: "Commerce Workflows",
    description:
      "Build streamlined purchasing journeys for customers and businesses.",
  },
  {
    icon: Building2,
    title: "Industry-Focused",
    description:
      "Design the experience around the needs of electrical and industrial buyers.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Explore relevant product categories and available items.",
    icon: Search,
  },
  {
    number: "02",
    title: "Compare",
    description: "Review product information to evaluate suitable options.",
    icon: PackageSearch,
  },
  {
    number: "03",
    title: "Purchase",
    description: "Move through a straightforward commerce journey.",
    icon: ShoppingCart,
  },
];

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

function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-colors duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/[0.05]"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-56">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[10px] font-medium tracking-wider text-white backdrop-blur-md">
          CATEGORY / {category.number}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <Icon size={22} strokeWidth={1.7} />
        </span>

        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {category.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {category.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs text-slate-500">
            Electrical & industrial commerce
          </span>
          <ArrowUpRight
            size={17}
            className="text-violet-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function ElectraMartPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/70">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(124,58,237,0.10),transparent_43%),linear-gradient(115deg,#fff_0%,#fcfbff_58%,#f8f6ff_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-10 hidden h-[460px] w-[460px] rounded-full border border-violet-200/40 lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute -right-10 top-24 hidden h-[340px] w-[340px] rounded-full border border-violet-200/30 lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-8 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:px-12 lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10 max-w-[610px]"
          >
            <SectionLabel>Axeiro ElectraMart</SectionLabel>

            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
              Powering
              <br />
              Smarter <span className={purpleGradient}>Commerce.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A commerce platform initiative focused on electrical and
              industrial products. ElectraMart aims to bring product
              discovery, organised catalogues, and purchasing workflows into
              a more accessible digital experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#categories"
                className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[#111116] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Explore Categories
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact?interest=electramart"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:text-violet-700"
              >
                Partner With Us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-5 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <Zap size={15} className="text-violet-600" />
                Electrical Products
              </span>
              <span className="flex items-center gap-2">
                <Building2 size={15} className="text-violet-600" />
                Industrial Supply
              </span>
            </div>
          </motion.div>

          {/* Commerce visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[700px] lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-violet-300/25 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-3 shadow-2xl shadow-violet-950/[0.08] backdrop-blur-sm sm:p-5">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[6/4]">
                <Image
                  src="/images/electramart/electramart-hero.jpg"
                  alt="Electrical and industrial products organised for commerce"
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/5" />

                <div className="absolute left-4 top-4 rounded-xl border border-white/30 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                      <Store size={17} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        ElectraMart
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Electrical & industrial
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="max-w-[260px] text-white">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                      Commerce, made clearer
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                      Products for the
                      <br />
                      real world.
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-1 pt-4 sm:gap-3 sm:pt-5">
                {[
                  { icon: Zap, label: "Electrical" },
                  { icon: Cable, label: "Components" },
                  { icon: Boxes, label: "Equipment" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 bg-white p-3 text-center sm:flex-row sm:justify-start sm:px-4"
                  >
                    <Icon size={18} className="text-violet-600" />
                    <span className="text-[10px] font-medium text-slate-600 sm:text-xs">
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
            <SectionLabel>Why ElectraMart</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Industrial Commerce,
              <br />
              <span className={purpleGradient}>With a Clearer Approach.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Finding the right electrical and industrial products can involve
              navigating extensive catalogues and specialised requirements.
              ElectraMart is being developed to make product discovery and
              commerce workflows more organised and accessible.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/[0.05] sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={21} strokeWidth={1.7} />
                </span>

                <h3 className="mt-4 text-base font-semibold">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section
        id="categories"
        className="scroll-mt-24 border-y border-slate-200/70 bg-white/60 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <SectionLabel>Explore the catalogue</SectionLabel>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                Built Around
                <br />
                <span className={purpleGradient}>Industry Needs.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A product experience designed around electrical supplies,
              industrial components, and equipment. These categories are a
              starting point for the ElectraMart experience.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.number}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>How it works</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              From Product Discovery
              <br />
              to <span className={purpleGradient}>Purchase.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The goal is to make the journey from finding a product to
              completing a purchase simpler, clearer, and easier to navigate.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <motion.article
                key={number}
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
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={15}
                    className="absolute -right-2.5 top-1/2 z-10 hidden text-violet-500 sm:block"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="relative isolate overflow-hidden bg-[#090910] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(124,58,237,0.23),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(124,58,237,0.08)_46%,transparent_47%,transparent_55%,rgba(124,58,237,0.07)_56%,transparent_57%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-9 px-5 sm:px-8 md:grid-cols-[1fr_0.8fr] md:items-center lg:gap-16 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel dark>Built for business</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              A Digital Foundation
              <br />
              for <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Industrial Commerce.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              ElectraMart is focused on bringing product catalogues and
              commerce workflows together in a digital experience designed
              around electrical and industrial purchasing needs.
            </p>

            <Link
              href="/contact?interest=electramart"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100"
            >
              Discuss a Partnership
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                icon: Store,
                title: "Commerce Experience",
                description: "A clearer path through product discovery.",
              },
              {
                icon: Boxes,
                title: "Structured Products",
                description: "Organised product and category information.",
              },
              {
                icon: ShieldCheck,
                title: "Buyer Confidence",
                description: "Product details presented for informed decisions.",
              },
              {
                icon: Truck,
                title: "Supply Workflows",
                description: "A foundation for connected purchasing journeys.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
              >
                <Icon size={22} className="text-violet-300" />

                <h3 className="mt-4 text-sm font-semibold">{title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-slate-200/70 bg-[#fcfbfa] py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(124,58,237,0.12),transparent_42%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Reveal className="max-w-2xl">
            <SectionLabel>Let's build together</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Have a commerce idea?
              <br />
              <span className={purpleGradient}>
                Let's talk ElectraMart.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Interested in the platform or exploring a potential
              collaboration? We'd like to hear from you.
            </p>
          </Reveal>

          <Link
            href="/contact?interest=electramart"
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
