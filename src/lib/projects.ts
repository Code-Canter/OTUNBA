// src/lib/projects.ts
export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
  industry: string;
  platform: 'Web' | 'Mobile' | 'Web + Mobile';
  liveUrl: string;
  githubUrl: string;
  image: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'sales-inventory-accounting-system',
    industry: 'Business & Accounting Tools',
    platform: 'Web' as const,
    title: 'Sales & Inventory Accounting System',
    shortDescription:
      'Business management platform for tracking sales, inventory levels, and accounting operations with real-time analytics.',
    overview:
      'A business management platform built to give small and mid-sized businesses a single system for tracking sales, stock levels, and basic accounting, replacing spreadsheet-based tracking with real-time records.',
    role: 'Fullstack developer — built the API and the frontend dashboard end to end.',
    problem:
      'Businesses tracking sales and stock in spreadsheets have no real-time view of inventory levels, and reconciling sales against stock is manual and error-prone.',
    solution:
      'A Node.js/Express API backed by MongoDB handles sales transactions, stock adjustments, and reporting, with a React dashboard giving owners a live view of inventory and revenue.',
    highlights: [
      'Real-time inventory adjustments tied directly to sales transactions',
      'Reporting dashboard for sales and stock analytics',
      'Built with Node.js, Express, MongoDB, and React',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    liveUrl: 'https://account-system-nine.vercel.app/',
    githubUrl: '',
    image: '/account-system.png',
  },
  {
    id: 2,
    slug: 'payo-vtu-bill-payment-platform',
    industry: 'Fintech & Payments',
    platform: 'Web' as const,
    title: 'VTU & Bill Payment Platform',
    shortDescription:
      'Payment platform supporting airtime, data, electricity, and utility bills with multiple gateway integrations.',
    overview:
      'Payo is a VTU (Virtual Top-Up) and bill payment platform supporting airtime, mobile data, electricity, and other utility bill purchases through multiple provider integrations.',
    role: 'Fullstack developer — built the API, provider integrations, and transaction handling.',
    problem:
      'Utility and airtime payments in Nigeria route through several different provider APIs, each with different formats and failure modes, and a customer-facing platform needs to abstract that away reliably.',
    solution:
      'Built a Node.js/Express backend that normalizes multiple provider integrations behind a single API, with JWT authentication and transaction logging so failed or pending payments can be tracked and reconciled.',
    highlights: [
      'Multi-provider integration for airtime, data, and electricity payments',
      'JWT-based authentication and transaction tracking',
      'Built with Node.js, Express, MongoDB',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Payment Gateway'],
    liveUrl: 'https://payo-one.vercel.app',
    githubUrl: '',
    image: '/payo.jpeg',
  },
  {
    id: 3,
    slug: 'billboard-booking-system',
    industry: 'Advertising & Booking',
    platform: 'Web' as const,
    title: 'Billboard Booking System',
    shortDescription:
      'Platform for managing advertisement space bookings with availability calendar and admin dashboard.',
    overview:
      'A booking platform for managing billboard and outdoor advertising space, giving advertisers a way to check availability and book slots, and giving admins a dashboard to manage bookings.',
    role: 'Fullstack developer — built the booking logic, calendar system, and admin dashboard.',
    problem:
      'Managing billboard availability manually across multiple advertising slots and clients makes double-booking and scheduling conflicts easy to miss.',
    solution:
      'A React frontend with a calendar-based availability view backed by a Node.js/Express API that enforces booking rules and prevents overlapping reservations, plus an admin dashboard for managing listings.',
    highlights: [
      'Calendar-based availability and booking flow',
      'Admin dashboard for managing billboard listings and bookings',
      'Built with React, Node.js, Express, MongoDB',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Calendar Integration'],
    liveUrl: 'https://bboards.vercel.app',
    githubUrl: '',
    image: '/Bboards-Page.png',
  },
  {
    id: 4,
    slug: 'signival',
    industry: 'Fintech & Payments',
    platform: 'Web' as const,
    title: 'Signival — SMM Panel & OTP Verification Service',
    shortDescription:
      'Social media marketing panel (SMM) for automated social media engagements, combined with an OTP delivery system for temporary phone number verification services.',
    overview:
      'Signival is a Next.js platform combining two services: an SMM (social media marketing) panel for automated social engagement services, and a virtual number verification / OTP delivery system for temporary phone number verification.',
    role: 'Fullstack developer — built the platform and led SEO, content, and video promotion work.',
    problem:
      'SMM panel and virtual-number services typically live on separate, dated platforms with weak SEO and no unified account or API experience for customers.',
    solution:
      'Built on Next.js with the App Router, Signival unifies both services under one platform with API integrations for SMS gateways and social engagement providers. Alongside development, ran a full SEO pass — page-by-page metadata and JSON-LD schema, a dynamic sitemap and robots configuration, submission to Google Search Console, and off-page work including Product Hunt and directory outreach.',
    highlights: [
      'Unified SMM panel and OTP/virtual-number verification in one platform',
      'Built with Next.js (App Router), JavaScript',
      'Full SEO implementation: schema markup, dynamic sitemap, Search Console submission',
      'Short-form video content produced for social promotion',
    ],
    tags: ['Next.js', 'JavaScript', 'JWT', 'SMS Gateway', 'API Integration'],
    liveUrl: 'https://signival.com',
    githubUrl: '',
    image: '/signival.png',
  },
  {
    id: 5,
    slug: 'power-solution-mall',
    industry: 'E-commerce',
    platform: 'Web' as const,
    title: 'Power Solution Mall',
    shortDescription:
      'E-commerce and business website for Power Solution Mall, specializing in power-related products including inverters, solar panels, batteries, and electrical equipment.',
    overview:
      'Power Solution Mall is an e-commerce and business website for a company specializing in power-related products — inverters, solar panels, batteries, and electrical equipment — with a full storefront, blog, and company information sections.',
    role: 'Fullstack developer and server administrator — handle the storefront build, catalog structure, and VPS/cPanel server administration.',
    problem:
      'Running a solar and power-equipment storefront on WooCommerce with a large product catalog needs a clean category taxonomy and reliable server infrastructure to stay fast and manageable as the catalog grows.',
    solution:
      'Manage the site on an AlmaLinux + cPanel/WHM VPS, including restructuring the WooCommerce product catalog from CSV exports into structured data with a refined category taxonomy, plus ongoing app-level work on the Next.js components powering parts of the site.',
    highlights: [
      'WooCommerce storefront for solar and power equipment',
      'Product catalog restructuring with a refined category taxonomy',
      'Full server administration: AlmaLinux, cPanel/WHM, VPS management',
    ],
    tags: ['React', 'Next.js', 'WooCommerce', 'Server Administration'],
    liveUrl: 'https://powersolutionmall.com',
    githubUrl: '',
    image: '/psm.png',
  },
  {
    id: 6,
    slug: 'steel-building-construction-calculator',
    industry: 'Engineering Tools',
    platform: 'Web' as const,
    title: 'Construction Calculator',
    shortDescription:
      'Engineering tool for steel building measurements, load estimation, and material cost calculations.',
    overview:
      'An engineering calculator tool for steel building projects, helping estimate measurements, structural load, and material costs.',
    role: 'Frontend developer — built the calculator logic and interface.',
    problem:
      "Estimating steel building measurements, load, and material costs by hand is slow and error-prone for small projects that don't warrant full engineering software.",
    solution:
      'A client-side React calculator that takes building dimensions and specifications as input and outputs load estimates and material cost breakdowns instantly.',
    highlights: [
      'Instant load estimation and material cost calculations',
      'Built with React, JavaScript',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'React'],
    liveUrl: 'https://steel-building-calculator.vercel.app',
    githubUrl: '',
    image: '/construction.png',
  },
  {
    id: 7,
    slug: 'signival-mobile',
    industry: 'Fintech & Payments',
    platform: 'Mobile' as const,
    title: 'Signival Mobile App',
    shortDescription:
      'Cross-platform mobile companion app for Signival, bringing SMM panel ordering and OTP/virtual-number verification to iOS and Android.',
    overview:
      'A React Native / Expo mobile app extending the Signival platform to mobile, giving users access to the SMM panel and virtual-number verification service from a native app instead of the browser.',
    role: 'Mobile developer — built the app with React Native and Expo, integrating it against the existing Signival backend/API.',
    problem:
      'Signival was web-only, so users placing SMM orders or verifying numbers on the go had no native app experience, and had to rely on mobile browser access to the web platform.',
    solution:
      'Built a React Native / Expo app consuming the same backend API as the web platform, giving users native account access, ordering, and verification flows on iOS and Android.',
    highlights: [
      'Built with React Native and Expo Router',
      'Consumes the same backend API as the Signival web platform',
      'Native mobile access to SMM ordering and OTP/verification flows',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'API Integration'],
    liveUrl: '',
    githubUrl: '',
    image: null,
  },
  {
    id: 8,
    slug: 'payo-mobile',
    industry: 'Fintech & Payments',
    platform: 'Mobile' as const,
    title: 'Payo Mobile App',
    shortDescription:
      'Cross-platform mobile app for the Payo VTU and bill payment platform, bringing airtime, data, and utility bill payments to iOS and Android.',
    overview:
      "A React Native / Expo mobile app extending Payo's VTU and bill payment platform to mobile, letting users buy airtime, data, and pay utility bills from a native app.",
    role: 'Mobile developer — built the app with React Native and Expo, wired to the existing Payo backend and provider integrations.',
    problem:
      'VTU and bill payments are a mobile-first use case, and a web-only platform means friction for users who want to top up or pay bills quickly from their phone.',
    solution:
      'Built a React Native / Expo app that talks to the same Node.js/Express API and provider integrations as the web platform, with a native flow for authentication, purchases, and transaction history.',
    highlights: [
      'Built with React Native and Expo',
      'Shares backend and provider integrations with the Payo web platform',
      'Native flows for airtime, data, and bill payments',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'API Integration'],
    liveUrl: '',
    githubUrl: '',
    image: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}