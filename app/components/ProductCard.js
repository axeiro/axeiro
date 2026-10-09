
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const toneStyles = {
  violet: {
    icon: "bg-[#eee9ff] text-[#6336f5]",
    badge: "border-[#dcd0ff] bg-[#f4f0ff] text-[#6336f5]",
  },
  coral: {
    icon: "bg-[#fff0eb] text-[#e46c4f]",
    badge: "border-[#f6d5ca] bg-[#fff5f1] text-[#c65c42]",
  },
  amber: {
    icon: "bg-[#fff5df] text-[#b77a13]",
    badge: "border-[#f0dfb9] bg-[#fff8e9] text-[#9a6710]",
  },
};

export default function ProductCard({ product, index = 0 }) {
  const Icon = product.icon;
  const tone = toneStyles[product.tone] || toneStyles.violet;

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-5 transition-colors duration-300 hover:border-[#6336f5]/30 sm:p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      {/* Product heading */}
      <div className="mb-5 flex items-start gap-3.5">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
        >
          <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
        </span>

        <div className="min-w-0 pt-0.5">
          <h3 className="text-[17px] font-semibold tracking-[-0.035em] text-[#171717]">
            {product.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#858585]">
            {product.subtitle}
          </p>
        </div>
      </div>

      {/* Product image */}
      <Link
        href={product.href}
        aria-label={`Explore ${product.name}`}
        className="relative mb-5 block aspect-[1.65/1] overflow-hidden rounded-xl bg-[#f5f4f1] outline-none focus-visible:ring-2 focus-visible:ring-[#6336f5] focus-visible:ring-offset-2"
      >
        <Image
          src={product.image}
          alt={`${product.name} visual`}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 42vw, (max-width: 1440px) 25vw, 320px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      {/* Description */}
      <p className="mb-6 flex-1 text-[13px] leading-[1.85] text-[#6e6e6e]">
        {product.description}
      </p>

      {/* Card footer */}
      <div className="flex items-center justify-between border-t border-black/[0.07] pt-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.04em] ${tone.badge}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {product.status}
        </span>

        <Link
          href={product.href}
          aria-label={`View ${product.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#555] transition-all duration-300 hover:border-[#6336f5] hover:bg-[#6336f5] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6336f5]"
        >
          <ArrowUpRight size={16} strokeWidth={1.7} />
        </Link>
      </div>
    </motion.article>
  );
}
