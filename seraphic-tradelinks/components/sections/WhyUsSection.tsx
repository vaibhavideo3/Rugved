import { BadgeCheck, TrendingUp, Network, BookOpen, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Consulting + Execution — Both",
    desc: "Most firms consult OR supply. We do both. Strategy is worthless without implementation, and our clients get both from one accountable partner.",
  },
  {
    icon: BookOpen,
    title: "Deep Pharma Domain Expertise",
    desc: "Our team brings 15+ years of combined experience in pharma operations, regulatory affairs, cold chain, and packaging — not generic business consulting.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimisation Strategies",
    desc: "We audit your existing supply chain and identify 10–30% cost reduction opportunities without compromising compliance or quality standards.",
  },
  {
    icon: BadgeCheck,
    title: "Regulatory & GMP Understanding",
    desc: "Every recommendation we make is grounded in GMP consulting best practices and Indian regulatory requirements — CDSCO, WHO, and Schedule M.",
  },
  {
    icon: Network,
    title: "Reliable, Verified Sourcing Network",
    desc: "Years of relationship-building across India's pharma supply chain means you get access to pre-vetted, GMP-compliant suppliers — fast.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4 block">
            Our Differentiators
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Why Pharma Companies{" "}
            <span className="text-gold-600">Choose Seraphic</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            In a crowded market of consultants and vendors, here&apos;s what makes our clients
            stay and refer us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative bg-slate-50 border border-slate-200 hover:border-gold-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg group overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* Standalone CTA card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-7 flex flex-col justify-between border border-gold-500/20">
            <div>
              <p className="font-display text-xl text-white font-semibold mb-3">
                Ready to see the Seraphic difference?
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Book a free 30-minute consultation and we&apos;ll identify at least 3 immediate
                improvement areas in your pharma supply chain.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-md text-sm hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
