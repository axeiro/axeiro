
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Clock3,
  CalendarDays,
  BookOpen,
  ChevronRight,
  Mail,
  Sparkles,
  Code2,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers3,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

const categories = [
  "All Articles",
  "Engineering",
  "Cloud & DevOps",
  "AI & Automation",
  "Safety Technology",
  "Product",
];

const articles = [
  {
    slug: "building-reliable-backend-systems",
    title: "Building Reliable Backend Systems from the Ground Up",
    excerpt:
      "Explore the architectural decisions, API design principles, and operational practices behind dependable backend applications.",
    category: "Engineering",
    date: "October 8, 2026",
    readTime: "8 min read",
    image: "/images/blog/backend-systems.jpg",
    featured: true,
    icon: Code2,
  },
  {
    slug: "cloud-infrastructure-for-growing-products",
    title: "Cloud Infrastructure for Products That Need to Scale",
    excerpt:
      "A practical look at deployment architecture, observability, reliability, and the infrastructure decisions that matter as a product grows.",
    category: "Cloud & DevOps",
    date: "October 2, 2026",
    readTime: "7 min read",
    image: "/images/blog/cloud-infrastructure.jpg",
    icon: Cloud,
  },
  {
    slug: "edge-ai-and-real-world-safety",
    title: "Edge AI: Bringing Intelligence Closer to the Real World",
    excerpt:
      "Understand how on-device processing can help build responsive safety systems while reducing dependence on cloud connectivity.",
    category: "Safety Technology",
    date: "September 25, 2026",
    readTime: "6 min read",
    image: "/images/blog/edge-ai.jpg",
    icon: ShieldCheck,
  },
  {
    slug: "designing-event-driven-systems",
    title: "Designing Event-Driven Systems for Real-Time Applications",
    excerpt:
      "Learn where asynchronous processing, event streaming, and background workers fit into modern distributed architectures.",
    category: "Engineering",
    date: "September 18, 2026",
    readTime: "9 min read",
    image: "/images/blog/event-driven.jpg",
    icon: Layers3,
  },
  {
    slug: "practical-ai-automation",
    title: "Practical AI Automation Beyond the Hype",
    excerpt:
      "A systems-oriented approach to finding useful automation opportunities, measuring outcomes, and building reliable AI workflows.",
    category: "AI & Automation",
    date: "September 10, 2026",
    readTime: "6 min read",
    image: "/images/blog/ai-automation.jpg",
    icon: Cpu,
  },
  {
    slug: "from-prototype-to-production",
    title: "From Prototype to Production: Building with Purpose",
    excerpt:
      "What changes when an idea becomes a real product: validation, maintainability, security, deployment, and user feedback.",
    category: "Product",
    date: "September 3, 2026",
    readTime: "5 min read",
    image: "/images/blog/product-engineering.jpg",
    icon: Sparkles,
  },
];

function ArticleCard({ article, index }) {
  const Icon = article.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.04]"
    >
      <Link
        href={`/blog/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#111322]"
        aria-label={`Read ${article.title}`}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070810]/60 via-transparent to-transparent" />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
          <Icon size={12} className="text-violet-300" />
          {article.category}
        </span>

        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all group-hover:border-violet-400 group-hover:bg-violet-600">
          <ArrowUpRight size={16} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-slate-500 sm:text-[11px]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={12} />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={12} />
            {article.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-violet-300 sm:text-lg">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="mt-2 flex-1 text-xs leading-6 text-slate-400 sm:text-sm">
          {article.excerpt}
        </p>

        <Link
          href={`/blog/${article.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold text-violet-300 transition-colors hover:text-white"
        >
          Read Article
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      if (article.featured) return false;

      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function handleNewsletterSubmit(event) {
    event.preventDefault();

    // Connect this handler to your newsletter provider or backend.
    setNewsletterMessage(
      "The form is ready, but newsletter delivery has not been connected yet."
    );
  }

  return (
    <main className="overflow-hidden bg-[#060810] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(109,40,217,0.23),transparent_45%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel dark>Ideas & Insights</SectionLabel>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Thinking About
              <br />
              Technology.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                Building What's Next.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Perspectives on software engineering, cloud infrastructure,
              intelligent systems, safety technology, and the process of
              turning ideas into useful products.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#latest-articles"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
              >
                Explore Articles
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:border-violet-400 hover:bg-white/5"
              >
                Talk to Our Team
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-5">
              {[
                { icon: Code2, label: "Engineering" },
                { icon: Cloud, label: "Infrastructure" },
                { icon: Cpu, label: "Intelligent Systems" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-[10px] text-slate-300 sm:text-xs"
                >
                  <Icon size={16} className="text-violet-400" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {featuredArticle && (
            <motion.article
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101020]"
            >
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="relative block aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]"
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/20 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-200 backdrop-blur-md">
                  <Sparkles size={13} />
                  Featured Article
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-300 sm:text-xs">
                    <span>{featuredArticle.category}</span>
                    <span className="h-1 w-1 rounded-full bg-violet-400" />
                    <span>{featuredArticle.date}</span>
                    <span className="h-1 w-1 rounded-full bg-violet-400" />
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-3 max-w-lg text-xs leading-6 text-slate-300 sm:text-sm">
                    {featuredArticle.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-300">
                    Read Featured Article
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.article>
          )}
        </div>
      </section>

      {/* ARTICLES */}
      <section
        id="latest-articles"
        className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel dark>Explore the Blog</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Latest{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Articles.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Technical perspectives, practical lessons, and ideas from the
                world of modern technology.
              </p>
            </div>

            <label className="flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/15 bg-white/[0.025] px-4 transition focus-within:border-violet-500 lg:max-w-xs">
              <Search size={17} className="shrink-0 text-slate-500" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="min-w-0 flex-1 bg-transparent py-3 text-xs text-white outline-none placeholder:text-slate-500"
              />
            </label>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-medium transition ${
                  activeCategory === category
                    ? "border-violet-500 bg-violet-600 text-white"
                    : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-violet-500/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ARTICLE GRID */}
          {filteredArticles.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-14 text-center">
              <Search size={26} className="mx-auto text-violet-400" />
              <h3 className="mt-4 text-base font-semibold">
                No matching articles
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Try another search term or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Articles");
                }}
                className="mt-4 text-xs font-semibold text-violet-300 hover:text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#0b0b16]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(109,40,217,0.25),transparent_45%)]"
        />

        <div className="relative mx-auto grid w-full max-w-360 gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14 lg:px-12">
          <div>
            <SectionLabel dark>Stay in the Loop</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Ideas Worth{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Exploring.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Get occasional updates on engineering, product development, and
              technology from Axeiro.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5">
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-white/15 bg-white/[0.025] px-3">
                <Mail size={16} className="shrink-0 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address for newsletter"
                  required
                  className="min-w-0 flex-1 bg-transparent py-3.5 text-xs text-white outline-none placeholder:text-slate-500"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </form>

            {newsletterMessage && (
              <p role="status" className="mt-3 text-xs leading-5 text-violet-300">
                {newsletterMessage}
              </p>
            )}

            <p className="mt-3 text-[10px] leading-5 text-slate-500">
              Occasional updates only. Newsletter delivery must be connected
              before this form can collect subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_50%,rgba(109,40,217,0.2),transparent_45%)]"
        />

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-5 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Building Something Interesting?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Have a technical question, an idea, or a challenge worth
              solving? Let’s start a conversation.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-500/50 bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
          >
            Talk to Axeiro
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
