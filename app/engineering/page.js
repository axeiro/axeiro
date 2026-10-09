
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cloud,
  BrainCircuit,
  Server,
  Activity,
  Users,
  Cuboid,
  Settings,
  MessageSquareMore,
  FileText,
  Code2,
  Rocket,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Zap,
  Target,
  Handshake,
  Layers3,
  Network,
  Database,
  Workflow,
  Check,
  Lightbulb
} from "lucide-react";
import { FaNode , FaPython , FaJava , FaReact} from "react-icons/fa";
import SectionLabel from "../components/SectionLabel";
import { RiNextjsLine , RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
const services = [
  {
    icon: Boxes,
    title: "Product Engineering",
    description:
      "Turn your idea into a production-ready product with a strong technical foundation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform Engineering",
    description:
      "Scalable infrastructure, deployment automation, and DevOps.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "AI systems, automation, and intelligent workflows tailored to your business.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Robust, secure, and scalable backend systems and real-time APIs.",
  },
  {
    icon: Activity,
    title: "Real-Time Systems",
    description:
      "Event-driven architecture, streaming, and real-time applications.",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Teams",
    description:
      "Long-term teams to work on your product roadmap.",
  },
  {
    icon: Cuboid,
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, and system design.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Ongoing support, feature development, and infrastructure management.",
  },
];

const process = [
  {
    icon: MessageSquareMore,
    number: "01",
    title: "Understand",
    description: "Learn about your goals, challenges, and requirements.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Plan",
    description: "Define scope, architecture, and roadmap.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description: "Develop, test, and iterate with regular updates.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description: "Launch with confidence and proper infrastructure.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    number: "05",
    title: "Scale",
    description: "Monitor, improve, and support long-term growth.",
  },
];

const technologyGroups = [
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: "node" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "MongoDB", icon: "mongo" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    title: "Messaging & Streaming",
    technologies: [
      { name: "Kafka", icon: "kafka" },
      { name: "RabbitMQ", icon: "rabbit" },
      { name: "Socket.IO", icon: "socket" },
    ],
  },
];

const technologyColors = {
  node: "text-green-600",
  python: "text-sky-600",
  java: "text-red-500",
  react: "text-cyan-500",
  next: "text-black",
  tailwind: "text-cyan-500",
  mongo: "text-green-600",
  mysql: "text-sky-700",
  redis: "text-red-500",
  aws: "text-amber-600",
  gcp: "text-blue-500",
  docker: "text-sky-500",
  kafka: "text-slate-800",
  rabbit: "text-orange-500",
  socket: "text-red-500",
};

const technologyIcons = {
  node: FaNode,
  python: FaPython,
  java: FaJava,
  react: FaReact,
  next: RiNextjsLine,
  tailwind: RiTailwindCssFill,
  mongo: SiMongodb,
  mysql: Database,
  redis: Layers3,
  aws: Cloud,
  gcp: Cloud,
  docker: Boxes,
  kafka: Network,
  rabbit: Workflow,
  socket: Activity,
};

const principles = [
  {
    icon: Cuboid,
    title: "Product-Focused",
    description:
      "We think beyond code and focus on real-world outcomes.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "Clean architecture, best practices, and modern tools.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "Transparent communication and close collaboration.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Long-Term",
    description:
      "We aim to be a long-term technology partner, not just a vendor.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className="group relative flex min-h-[190px] flex-col rounded-xl border border-slate-200/80 bg-white p-4 transition-colors duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/[0.04] sm:min-h-[205px] sm:p-5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
        <Icon size={23} strokeWidth={1.7} />
      </span>

      <h3 className="mt-3 pr-3 text-sm font-semibold leading-snug tracking-tight sm:text-base">
        {service.title}
      </h3>

      <p className="mt-2 pb-5 text-xs leading-[1.55] text-slate-600 sm:text-[13px]">
        {service.description}
      </p>

      <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white">
        <ArrowUpRight size={14} />
      </span>
    </motion.article>
  );
}

function TechnologyCard({ group }) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-4">
      <h3 className="text-xs font-semibold text-slate-800">
        {group.title}
      </h3>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {group.technologies.map((technology) => {
          const Icon = technologyIcons[technology.icon];

          return (
            <div
              key={technology.name}
              className="flex min-w-0 flex-col items-center gap-2 text-center"
              title={technology.name}
            >
              <Icon
                size={23}
                strokeWidth={1.8}
                className={technologyColors[technology.icon]}
              />

              <span className="text-[9px] leading-tight text-slate-600 sm:text-[10px]">
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function EngineeringPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbfa] text-[#111116]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#070811] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(100,65,220,0.18),transparent_45%)]"
        />

        <div className="relative mx-auto w-full max-w-360 px-5 pb-7 pt-10 sm:px-8 sm:pb-9 sm:pt-14 lg:px-12 lg:pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
            <Reveal className="relative z-10 max-w-xl">
              <SectionLabel dark>Engineering</SectionLabel>

              <h1 className="mt-5 text-[clamp(2.45rem,5vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
                From Ideas to
                <br />
                Real-<span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">World Systems.</span>
              </h1>

              <p className="mt-5 max-w-[490px] text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                We partner with startups, businesses and organisations to
                design, build and scale software products, cloud
                infrastructure and AI-powered systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500 sm:text-sm"
                >
                  Start a Project
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:border-violet-400 hover:bg-white/5 sm:text-sm"
                >
                  Talk to Our Team
                </Link>
              </div>
            </Reveal>

            {/* Hero workflow visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="relative mx-auto w-full max-w-[760px] lg:max-w-none"
            >
              <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-white/10 bg-[#11101c] sm:aspect-[16/9]">
                <Image
                  src="/images/engineering/engineering-hero.jpg"
                  alt="Software engineer working across development screens"
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 58vw"
                  className="object-cover object-center opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#090811]/65 via-[#090811]/15 to-[#090811]/45" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090811]/75 via-transparent to-transparent" />

                {/* Workflow cards */}
                <div className="absolute inset-x-3 top-4 grid grid-cols-4 gap-1.5 sm:inset-x-5 sm:top-5 sm:gap-2">
                  {[
                    { icon: Lightbulb, title: "Idea" },
                    { icon: Layers3, title: "Design" },
                    { icon: Code2, title: "Build" },
                    { icon: Cloud, title: "Deploy" },
                  ].map(({ icon: Icon, title }, index) => (
                    <div
                      key={title}
                      className={`relative flex min-h-[65px] flex-col items-center justify-center gap-1.5 rounded-lg border p-2 backdrop-blur-md sm:min-h-[80px] sm:gap-2 ${
                        index === 0
                          ? "border-violet-400/50 bg-violet-500/20"
                          : "border-white/15 bg-[#12111f]/80"
                      }`}
                    >
                      <Icon
                        size={19}
                        className="text-violet-300 sm:h-5 sm:w-5"
                      />

                      <span className="text-[9px] font-medium text-white sm:text-[11px]">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 max-w-[270px] sm:bottom-5 sm:left-5">
                  <p className="text-[9px] font-medium tracking-[0.18em] text-violet-300 sm:text-[10px]">
                    IDEATE · ENGINEER · DELIVER
                  </p>

                  <p className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-2xl">
                    Engineering built around your goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value strip */}
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-5 sm:grid-cols-4 sm:gap-5 lg:mt-8">
            {[
              {
                icon: Cuboid,
                title: "Product Mindset",
                description: "Not just coding",
              },
              {
                icon: Workflow,
                title: "Scalable Architecture",
                description: "Built for growth",
              },
              {
                icon: Cloud,
                title: "Modern Technology",
                description: "Cloud, AI and more",
              },
              {
                icon: ShieldCheck,
                title: "End-to-End Support",
                description: "From idea to deployment",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-2.5">
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className="shrink-0 text-violet-400"
                />

                <div>
                  <p className="text-[10px] font-semibold text-white sm:text-xs">
                    {title}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>What we do</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                Engineering Services
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                We provide end-to-end engineering services to help you go
                from idea to production — with a focus on quality, scalability
                and real-world impact.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-fit shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold transition hover:border-violet-300 hover:text-violet-700"
            >
              Discuss Your Requirements
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative isolate overflow-hidden bg-[#080910] py-12 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(109,40,217,0.17),transparent_48%)]"
        />

        <div className="relative mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <SectionLabel dark>Our engineering process</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                A Clear and Collaborative
                <br className="hidden sm:block" /> Way of Working
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                We follow a structured yet flexible process to ensure
                transparency, quality and fast delivery.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-fit shrink-0 items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-xs font-semibold transition hover:border-violet-400 hover:bg-white/5"
            >
              Let's Discuss a Project
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative flex gap-3 sm:flex-col sm:gap-3"
                >
                  <div className="flex shrink-0 flex-col items-center sm:items-start">
                    <Icon
                      size={26}
                      strokeWidth={1.6}
                      className="text-violet-500"
                    />

                    <span className="mt-2 text-[10px] font-semibold tracking-widest text-violet-400">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 max-w-[220px] text-xs leading-5 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {index < process.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="absolute right-1 top-2 hidden text-slate-500 lg:block"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Technology stack</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
                Modern Tools
                <br />
                for Modern Systems
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                We select technologies based on project requirements,
                maintainability, scalability, and long-term operational needs.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
              Selected technologies
              <ArrowUpRight size={14} />
            </span>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {technologyGroups.map((group) => (
              <TechnologyCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY AXEIRO */}
      <section className="border-t border-slate-200/60 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 lg:px-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Why work with Axeiro</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              A Partner for
              <br />
              Your Long-<span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Term Vision.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              We combine a product mindset, technical depth, and a commitment
              to building technology that creates real value for users and
              businesses.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={21} strokeWidth={1.7} />
                </span>

                <div>
                  <h3 className="text-xs font-semibold sm:text-sm">
                    {title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#080711] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_65%,rgba(109,40,217,0.30),transparent_45%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-7 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_0.8fr] md:items-center lg:px-12">
          <Reveal className="relative z-10 max-w-xl">
            <SectionLabel dark>Let's build together</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl">
              Have a product idea or
              <br />
              a <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">technical challenge?</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
              We'd love to hear about it. Let's explore how we can work
              together.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500 sm:text-sm"
              >
                Start a Project
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:border-violet-400 hover:bg-white/5 sm:text-sm"
              >
                About Axeiro
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-[#11101d] md:min-h-[250px]">
            <Image
              src="/images/engineering/work-with-us-bg.jpg"
              alt="Mountain landscape representing the journey from ideas to real-world impact"
              fill
              sizes="(max-width: 767px) 90vw, 40vw"
              className="object-cover object-center opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#080711]/70 via-[#080711]/20 to-[#080711]/40" />

            <div className="absolute bottom-5 left-5">
              <p className="text-xs tracking-[0.18em] text-violet-300">
                AXEIRO ENGINEERING
              </p>

              <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                From Ideas
                <br />
                to Real-World
                <br />
                <span className="text-violet-400">Impact.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
