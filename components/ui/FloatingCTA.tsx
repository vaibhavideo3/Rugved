"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20pharma%20consulting%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-400/40 transition-all duration-300 hover:-translate-y-1 text-sm font-semibold"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        <span>Chat with us</span>
      </a>
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 text-white rounded-full shadow-lg hover:shadow-gold-400/40 transition-all duration-300 hover:-translate-y-1"
        aria-label="Call us"
      >
        <Phone size={18} />
      </a>
    </div>
  );
}
