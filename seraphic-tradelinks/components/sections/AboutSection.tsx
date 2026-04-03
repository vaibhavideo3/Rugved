"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2, Users, Globe, Zap } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Strategic Partner, Not Just a Vendor",
    desc: "We embed ourselves in your business challenges and work alongside you as an extension of your team.",
  },
  {
    icon: Globe,
    title: "Pan-India Sourcing Network",
    desc: "Verified supplier relationships across Maharashtra, Gujarat, Telangana, Karnataka, and beyond.",
  },
  {
    icon: Zap,
    title: "Consulting + Execution — Both",
    desc: "We bridge the gap between strategy and ground-level execution — a rare combination in pharma consulting.",
  },
];

const checkpoints = [
  "End-to-end pharma consulting & sourcing under one roof",
  "Deep expertise in GMP, cold chain, and packaging compliance",
  "Transparent, cost-optimised supply chain solutions",
  "Trusted by pharma companies from Tier 1 to Tier 3 cities",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div ref={ref} className="fade-section">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              India&apos;s Integrated{" "}
              <span className="text-gold-600">Pharma Consulting</span>
              {" "}& Sourcing Partner
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Seraphic Tradelinks was founded with a singular mission: to give India&apos;s
              pharmaceutical companies access to expert consulting and reliable sourcing under
              one roof. Too often, pharma businesses must juggle between consultants who advise
              and vendors who supply — we collapsed that gap.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              From GMP consulting and regulatory alignment to cold chain logistics,
              thermoformed tray packaging, and medical device sourcing, our team brings
              deep domain expertise combined with real execution capability across the
              pharma supply chain.
            </p>
            <ul className="space-y-3">
              {checkpoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Right pillars */}
          <div className="space-y-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 bg-slate-50 border border-slate-100 hover:border-gold-300 rounded-xl p-6 transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Accent quote */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-gold-500/20">
              <p className="font-display text-lg text-white italic leading-relaxed">
                &ldquo;We don&apos;t just hand you a report and walk away.
                We stay until the job is done.&rdquo;
              </p>
              <p className="text-gold-400 text-sm font-semibold mt-3">— Seraphic Tradelinks Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
