"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";


const navItems = [
  { label: "Products", href: "/products" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down: hide navbar
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show navbar
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
   <header
  className={`sticky left-0 top-0 z-50 w-full transition-transform duration-500 ease-in-out ${
    hidden ? "-translate-y-full" : "translate-y-0"
  }`}
>
      <div className="mx-auto flex h-19 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Axeiro home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-20 items-center justify-center rounded-xl text-xl font-semibold text-white"
          >
            <Image
              src="/logo.png"
              alt="Axeiro"
              width={100}
              height={150}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="relative h-auto w-full drop-shadow-[0_25px_55px_rgba(65,45,100,0.12)]"
            />
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="relative py-2 text-[13px] font-medium text-[#656565] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#6336f5] after:transition-all after:duration-300 hover:text-[#171717] hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-[#555] transition-colors hover:bg-black/[0.04] hover:text-[#6336f5] sm:flex"
          >
            <Search size={17} strokeWidth={1.7} />
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#6336f5] sm:inline-flex"
          >
            Get in Touch
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#171717] transition-colors hover:border-[#6336f5] hover:text-[#6336f5] lg:hidden"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.7} />
            ) : (
              <Menu size={20} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-black/6 bg-[#faf9f6] transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="min-h-0 overflow-hidden px-5 sm:px-8"
        >
          <div className="mx-auto max-w-360 py-3">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-black/6 py-4 text-[15px] font-medium text-[#333] transition-colors hover:text-[#6336f5]"
              >
                <span>{item.label}</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#888]"
                />
              </Link>
            ))}

            <Link
              href="/contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6336f5]"
            >
              Get in Touch
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}