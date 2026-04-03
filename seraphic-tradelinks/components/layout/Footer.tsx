import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

const services = [
  "Cold Chain Solutions",
  "Medical Devices",
  "Drug Delivery Devices",
  "Thermoformed Trays",
  "Secondary & Tertiary Packaging",
  "Pharma Sourcing",
];

const quickLinks = [
  { label: "About Us",     href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Industries",   href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights",     href: "#insights" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-500 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
              Ready to Transform Your Pharma Operations?
            </h2>
            <p className="text-white/80 mt-2 text-sm">
              Get a free consultation with our pharma consulting experts today.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 px-7 py-3 bg-white text-gold-700 font-semibold rounded-md hover:bg-slate-50 transition-colors text-sm shadow-lg"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Seraphic Tradelinks"
              width={200}
              height={81}
              className="h-10 w-auto object-contain brightness-200 mb-5"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Integrated pharma consulting, cold chain logistics, and packaging solutions
              for pharmaceutical companies across India.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">+91 98765 43210</p>
                  <p className="text-slate-500 text-xs mt-0.5">Mon–Sat, 9am–6pm IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@seraphictradelinks.com"
                  className="text-slate-300 text-sm hover:text-gold-400 transition-colors"
                >
                  info@seraphictradelinks.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <p className="text-slate-400 text-sm">
                  Mumbai, Maharashtra, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-6 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Seraphic Tradelinks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
