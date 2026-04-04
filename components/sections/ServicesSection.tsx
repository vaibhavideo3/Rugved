"use client";
import { useEffect, useRef } from "react";
import {
  Thermometer,
  Stethoscope,
  Pill,
  Package,
  PackageOpen,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Cold Chain Solutions",
    desc: "Temperature-controlled storage and pharma cold chain logistics for vaccines, biologics, and temperature-sensitive drugs. End-to-end monitoring and GDP compliance.",
    tags: ["GDP Compliant", "Real-time Tracking", "Validated Transport"],
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    desc: "Sourcing, consulting, and regulatory alignment for medical devices. From Class A to Class C devices — we manage supplier qualification and import compliance.",
    tags: ["Regulatory Affairs", "Import Consulting", "Supplier Qualification"],
  },
  {
    icon: Pill,
    title: "Drug Delivery Devices",
    desc: "Advanced drug delivery systems consulting for pharma innovators. Inhalers, auto-injectors, transdermal patches — we support product design and sourcing.",
    tags: ["Inhalers & Nebulisers", "Auto-injectors", "Transdermal"],
  },
  {
    icon: Package,
    title: "Thermoformed Trays",
    desc: "PVC, PET, and HIPS thermoformed trays for blister packaging and pharmaceutical primary packaging. Custom tooling, GMP-grade materials, fast lead times.",
    tags: ["PVC / PET / HIPS", "Custom Tooling", "GMP Grade"],
  },
  {
    icon: PackageOpen,
    title: "Secondary & Tertiary Packaging",
    desc: "Complete pharmaceutical packaging materials supply — cartons, shipper boxes, inserts, labels, and cold chain packaging tailored to your product and market.",
    tags: ["Cartons & Shippers", "Cold Pack Solutions", "Regulatory Printing"],
  },
  {
    icon: ShoppingBag,
    title: "Pharma Products & Sourcing",
    desc: "General pharmaceutical products sourcing and supply solutions. API procurement, excipients, and auxiliary materials from verified, GMP-compliant manufacturers.",
    tags: ["API Sourcing", "Excipients", "Verified Suppliers"],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 bg-slate-50 overflow-hidden geo-bg">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="fade-section text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Comprehensive Pharma Consulting
            <br />
            <span className="text-gold-600">&amp; Sourcing Services</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Six specialised service verticals designed to cover every stage of your pharma
            supply chain — from consulting to last-mile execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-gold-300 p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 border border-gold-300/30 flex items-center justify-center mb-5 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                <Icon
                  size={22}
                  className="text-gold-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="font-display font-semibold text-slate-900 text-xl mb-3">
                {title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group/link"
              >
                Enquire Now
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
