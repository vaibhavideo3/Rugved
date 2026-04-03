interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: Props) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
