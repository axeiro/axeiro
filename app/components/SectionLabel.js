
export default function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] bg-slate-100/50 pr-2.5 rounded-xl overflow-hidden${
        dark ? "text-white/70" : "text-[#777]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-[24.48px] w-4 shrink-0 rounded-l-xl ${
          dark ? "bg-[#a78bfa]" : "bg-purple-200"
        }`}
      />
      {children}
    </span>
  );
}
