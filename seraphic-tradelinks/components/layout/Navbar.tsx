"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-400/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Seraphic Tradelinks Logo"
            width={220}
            height={89}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  scrolled
                    ? "text-slate-700 hover:text-gold-600"
                    : "text-slate-800 hover:text-gold-600"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-md hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-gold-400/30 hover:-translate-y-0.5"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gold-400/20 shadow-xl">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-gold-600 border-b border-slate-100 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white rounded-md"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
