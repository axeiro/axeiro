"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const columns = [
  {
    title: "Products",
    links: [
      ["Axeiro Cloud", "/products/cloud"],
      ["Axeiro Safety (ASI)", "/products/safety"],
      ["Axeiro ElectraMart", "/products/electramart"],
      ["Axeiro Algo", "/products/algo"],
      ["Axeiro Forge", "/products/forge"],
    ],
  },
  {
    title: "Engineering",
    links: [
      ["Product Engineering", "/engineering"],
      ["Cloud & Platform", "/engineering"],
      ["AI & Automation", "/engineering"],
      ["Backend & APIs", "/engineering"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Blog", "/blog"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    Icon: FaGithub,
  },
  {
    label: "X",
    href: "https://x.com/",
    Icon: FaXTwitter,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    Icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10 lg:py-20">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link
              href="/"
              aria-label="Axeiro home"
              className="group inline-flex items-center gap-2.5"
            >
              <Image
                src="/logo.png"
                alt="Axeiro"
                width={100}
                height={150}
                priority
                className="relative h-auto w-full invert"
              />
            </Link>

            <p className="mt-5 max-w-70 text-sm leading-7 text-white/55">
              Technology infrastructure for a smarter world.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition-all duration-300 hover:border-[#a78bfa] hover:bg-[#6336f5] hover:text-white"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col items-start">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                {column.title}
              </h3>

              <div className="flex flex-col items-start gap-3.5">
                {column.links.map(([label, href]) => (
                  <Link
                    href={href}
                    key={label}
                    className="text-[13px] leading-5 text-white/50 transition-colors duration-200 hover:text-[#c4b5fd]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
              Stay Updated
            </h3>

            <p className="mb-5 text-[13px] leading-6 text-white/50">
              Occasional product and engineering updates.
            </p>

            <form
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1.5 transition-colors focus-within:border-[#a78bfa]/70"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>

              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-white outline-none placeholder:text-white/35"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#171717] transition-colors hover:bg-[#a78bfa]"
              >
                <FaArrowRight size={14} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Axeiro. All rights reserved.
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
