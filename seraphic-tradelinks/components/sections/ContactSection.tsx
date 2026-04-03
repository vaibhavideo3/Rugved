"use client";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Cold Chain Solutions",
  "Medical Devices Consulting",
  "Drug Delivery Devices",
  "Thermoformed Trays",
  "Secondary & Tertiary Packaging",
  "Pharma Products Sourcing",
  "General Enquiry",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white">
            Book a Free Consultation
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Tell us about your pharma consulting or sourcing needs and our experts will
            respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info cards */}
          <div className="space-y-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                val: "+91 98765 43210",
                sub: "Mon–Sat, 9am–6pm IST",
                href: "tel:+919876543210",
              },
              {
                icon: Mail,
                title: "Email Us",
                val: "info@seraphictradelinks.com",
                sub: "We reply within 24 hours",
                href: "mailto:info@seraphictradelinks.com",
              },
              {
                icon: MapPin,
                title: "Our Location",
                val: "Mumbai, Maharashtra, India",
                sub: "Serving pharma companies pan-India",
                href: "#",
              },
            ].map(({ icon: Icon, title, val, sub, href }) => (
              <a
                key={title}
                href={href}
                className="flex gap-4 bg-slate-800/60 border border-slate-700 hover:border-gold-500/40 rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold tracking-wide uppercase mb-1">
                    {title}
                  </p>
                  <p className="text-white text-sm font-medium">{val}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp quick link */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-semibold text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-slate-800/60 border border-green-500/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                  <Send size={28} className="text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-slate-400 max-w-sm">
                  Your enquiry has been submitted. Our pharma consulting team will reach out
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { id: "name",    label: "Full Name",       type: "text",  placeholder: "Dr. Rajesh Sharma" },
                    { id: "company", label: "Company Name",    type: "text",  placeholder: "Pharma Pvt. Ltd." },
                    { id: "email",   label: "Email Address",   type: "email", placeholder: "you@company.com" },
                    { id: "phone",   label: "Phone Number",    type: "tel",   placeholder: "+91 98765 43210" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required
                        value={(formData as Record<string, string>)[id]}
                        onChange={handleChange}
                        className="w-full bg-slate-900/60 border border-slate-600 focus:border-gold-400 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-900/60 border border-slate-600 focus:border-gold-400 rounded-lg px-4 py-3 text-sm outline-none transition-colors text-white"
                  >
                    <option value="" className="bg-slate-900">
                      Select a service…
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-slate-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirement, project size, and timeline…"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/60 border border-slate-600 focus:border-gold-400 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 text-sm"
                >
                  <Send size={16} />
                  Book a Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
