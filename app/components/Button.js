
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-[#171717] text-white hover:bg-[#6336f5]",
  secondary:
    "bg-[#f1efff] text-[#6336f5] hover:bg-[#e5dfff]",
  white:
    "bg-white text-[#171717] hover:bg-[#f1efff]",
  purple:
    "bg-[#6336f5] text-white hover:bg-[#5128d8]",
  outline:
    "border border-[#d9d9df] bg-transparent text-[#171717] hover:border-[#6336f5] hover:text-[#6336f5]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
    "text-sm font-medium tracking-wide",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6336f5]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant] || variants.primary,
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${classes} ${disabled ? "pointer-events-none opacity-50" : ""}`}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${classes}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
