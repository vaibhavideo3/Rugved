import { FlaskConical, Dna, HeartPulse, Truck, Syringe } from "lucide-react";

const industries = [
  {
    icon: FlaskConical,
    name: "Pharmaceuticals",
    desc: "Generic and branded pharma companies across formulation, API, and OTC segments.",
  },
  {
    icon: Dna,
    name: "Biotechnology",
    desc: "Biotech firms working on biologics, biosimilars, and novel drug molecules.",
  },
  {
    icon: HeartPulse,
    name: "Medical Devices",
    desc: "Medical device manufacturers and importers seeking sourcing and regulatory support.",
  },
  {
    icon: Truck,
    name: "Healthcare Logistics",
    desc: "3PLs and logistics providers specialising in pharma and healthcare distribution.",
  },
  {
    icon: Syringe,
    name: "Vaccine & Cold Chain",
    desc: "Vaccine manufacturers and distributors requiring GDP-compliant cold chain solutions.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4 block">
            Industries We Serve
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white">
            Serving the Breadth of{" "}
            <span className="text-gold-400">India&apos;s Healthcare Sector</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Our expertise spans every corner of the pharmaceutical and healthcare ecosystem.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="bg-slate-800/60 border border-slate-700 hover:border-gold-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-gold-900/20 group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-400/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:from-gold-600/40 group-hover:to-gold-400/20 transition-all duration-300">
                <Icon size={26} className="text-gold-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/0 via-slate-800 to-slate-800/0 rounded-2xl p-8 text-center border border-slate-700">
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a large-scale API manufacturer or a hospital-stage startup,
            Seraphic Tradelinks brings the same level of domain expertise and execution rigour
            to every engagement.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-md text-sm hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </div>
    </section>
  );
}
