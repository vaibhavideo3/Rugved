"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Shield, Award, TrendingUp } from "lucide-react";

const stats = [
  { label: "Pharma Clients Served",   value: "120+" },
  { label: "Years of Domain Expertise", value: "15+" },
  { label: "Supply Chain Projects",   value: "300+" },
  { label: "States Across India",     value: "18+" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 geo-bg">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Radial glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gold-600/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div ref={heroRef} className="fade-section">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
                Pharma Consulting &amp; Sourcing Solutions
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-slate-900 mb-6">
              End-to-End{" "}
              <span className="gold-shimmer">Pharma Consulting</span>
              {" & "}
              Sourcing Solutions in India
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
              We don&apos;t just advise — we execute. From GMP consulting and cold chain logistics
              to thermoformed packaging and medical device sourcing, Seraphic Tradelinks is
              your integrated pharma partner across India.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: Shield,    text: "GMP Compliant" },
                { icon: Award,     text: "ISO Certified Partners" },
                { icon: TrendingUp, text: "Pan-India Network" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-slate-600 bg-white/80 px-4 py-2 rounded-full border border-gold-200 shadow-sm"
                >
                  <Icon size={14} className="text-gold-600" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-md hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5 text-sm"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 border-2 border-slate-800 text-slate-800 font-semibold rounded-md hover:border-gold-600 hover:text-gold-700 transition-all duration-300 text-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — Logo + decorative rings */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full border border-gold-300/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 -m-16 rounded-full border border-gold-200/20 animate-[spin_45s_linear_infinite_reverse]" />

              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl shadow-gold-400/10 border border-gold-200/40 p-12">
                <Image
                  src="/logo.png"
                  alt="Seraphic Tradelinks — Pharma Consulting &amp; Sourcing India"
                  width={420}
                  height={170}
                  className="w-full max-w-sm h-auto"
                  priority
                />
                <div className="mt-6 text-center">
                  <p className="font-display text-lg text-slate-600 italic">
                    &ldquo;Integrated Pharma Consulting,
                    <br />
                    Cold Chain &amp; Packaging Solutions&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm border border-gold-200/40 rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-gold-300 transition-all duration-300"
            >
              <div className="font-display text-3xl font-semibold text-gold-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
