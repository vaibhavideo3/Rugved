# Seraphic Tradelinks — Website

Premium B2B pharma consulting & sourcing website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Icons**: Lucide React

## Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#D4A373` |
| Deep Gold | `#B45309` |
| Dark Base | `#0F172A` |
| Secondary Dark | `#1E293B` |
| Background | `#F8FAFC` |
| Text | `#020617` |

## Pages / Sections
1. **Hero** — Headline, trust signals, stats bar
2. **About** — Company positioning, pillars
3. **Services** — 6 service cards (cold chain, medical devices, drug delivery, trays, packaging, sourcing)
4. **Industries** — 5 industry verticals
5. **Why Us** — 5 differentiators + CTA card
6. **Case Studies** — 3 detailed case studies with metrics
7. **Insights** — 3 blog article previews
8. **Contact** — Full form + contact info + WhatsApp

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Contact Details to Update
Before deploying, update these in the codebase:
- **Phone**: Search for `+91 98765 43210` and replace with your number
- **Email**: Replace `info@seraphictradelinks.com`
- **WhatsApp**: Update the `wa.me` links with your WhatsApp number
- **Location**: Update city/address in Footer and Contact section

## Folder Structure
```
seraphic-tradelinks/
├── app/
│   ├── globals.css       # Design system, fonts, animations
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Main page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── InsightsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── FloatingCTA.tsx
│       └── SectionHeader.tsx
├── public/
│   └── logo.png
├── tailwind.config.ts
├── next.config.js
└── package.json
```
