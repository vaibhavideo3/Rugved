import { TrendingUp, Package, DollarSign } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    tag: "Cold Chain Optimisation",
    title: "Vaccine Distributor Reduces Cold Chain Losses by 32%",
    problem:
      "A mid-sized vaccine distributor in Western India was experiencing significant product losses due to temperature excursions during last-mile delivery across Tier 2 and Tier 3 cities.",
    solution:
      "We redesigned their cold chain logistics framework — introducing validated reefer vehicles, real-time temperature data loggers, and GDP-compliant SOPs across 6 distribution hubs.",
    metrics: [
      { value: "32%",  label: "Reduction in product loss" },
      { value: "₹28L", label: "Annual cost savings" },
      { value: "100%", label: "GDP compliance achieved" },
    ],
  },
  {
    icon: Package,
    tag: "Packaging Compliance",
    title: "Pharma Manufacturer Achieves Zero Export Rejections After Packaging Redesign",
    problem:
      "A Pune-based pharma manufacturer was facing export rejections due to non-compliant secondary packaging materials and incorrect serialisation printing on cartons.",
    solution:
      "Seraphic conducted a full packaging audit, redesigned secondary carton specifications, sourced GMP-grade thermoformed trays, and coordinated with a serialisation solution provider.",
    metrics: [
      { value: "0",    label: "Export rejections post-redesign" },
      { value: "3 mo", label: "Full project turnaround" },
      { value: "18%",  label: "Packaging cost reduction" },
    ],
  },
  {
    icon: DollarSign,
    tag: "Medical Device Sourcing",
    title: "Hospital Group Cuts Medical Device Procurement Costs by 24%",
    problem:
      "A hospital group was procuring Class B medical devices through fragmented channels at inflated costs with inconsistent quality and unpredictable lead times.",
    solution:
      "We consolidated their procurement via our verified supplier network, implemented centralised vendor management, and negotiated long-term supply agreements on their behalf.",
    metrics: [
      { value: "24%", label: "Procurement cost reduction" },
      { value: "40%", label: "Faster delivery timelines" },
      { value: "5",   label: "Consolidated vendor base" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4 block">
            Proven Impact
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Client Outcomes &amp; Case Studies
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-xl mx-auto">
            Real results from pharma companies that partnered with Seraphic Tradelinks.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map(({ icon: Icon, tag, title, problem, solution, metrics }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-gold-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Dark header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 group-hover:to-gold-900/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                    {tag}
                  </span>
                </div>
                <h3 className="text-white font-display text-lg font-semibold leading-snug">
                  {title}
                </h3>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Challenge
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem}</p>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Our Solution
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  {metrics.map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="font-display text-2xl font-semibold text-gold-600">
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 leading-tight mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
