'use client';

import { motion } from "framer-motion";
import { SITE } from '@/lib/constants';
import Navbar from "@/components/ui/Navbar";

export default function ResumeClient() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 px-2 py-10 pt-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Resume Card with Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Inner Content with Padding */}
          <div className="p-8 px-4 md:p-10">
            
            {/* HEADER */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900">{SITE.name}</h1>
              <p className="text-gray-600 mt-2">
                Software Engineer | Backend & Fullstack Developer
              </p>

              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>
                  Email: <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:underline">{SITE.email}</a>
                </p>
                <p>
                  GitHub: <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{SITE.github.replace('https://', '')}</a>
                </p>
                <p>
                  LinkedIn: <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{SITE.linkedin.replace('https://', '')}</a>
                </p>
                <p>Location: Lagos, Nigeria</p>
              </div>
            </div>

            {/* ABOUT */}
            <Section title="About Me">
              <p className="text-gray-700">
                Software Engineer building APIs, web applications, and business systems. 
                Experienced in developing payment platforms, utility billing systems, ecommerce solutions, 
                and automation tools with a focus on reliability, maintainability, and user experience.
              </p>
            </Section>

            {/* SKILLS */}
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "HTML5",
                  "CSS3",
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "JWT Authentication",
                  "Webhooks",
                  "Payment Gateways",
                  "System Design",
                  "Git & GitHub",
                  "Postman"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            {/* EXPERIENCE */}
            <Section title="Experience">
              <div className="space-y-4">
                <div className="border border-gray-200 p-5 rounded-xl hover:shadow-md transition bg-gray-50/30">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Software Engineer (Freelance & Personal Projects)</h3>
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                    <li>Built APIs and web applications for payment processing, utility billing, ecommerce, and business automation.</li>
                    <li>Designed multi-provider billing systems for airtime, data, electricity, and utility services.</li>
                    <li>Integrated third-party services including payment gateways, SMS providers, and email platforms.</li>
                    <li>Implemented authentication, authorization, request validation, and secure transaction workflows.</li>
                    <li>Developed inventory management, ecommerce, booking, and service delivery platforms.</li>
                    <li>Maintained backend systems built with Node.js, Express.js, MongoDB, and REST APIs.</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* FEATURED PROJECTS */}
            <Section title="Featured Projects">
              <div className="space-y-4">
                <Project
                  name="Sales & Inventory Accounting System"
                  desc="Business management platform for tracking sales, inventory levels, and accounting operations with real-time analytics and reporting."
                  url="#"
                />
                <Project
                  name="VTU & Bill Payment Platform"
                  desc="Payment platform supporting airtime, data, electricity, and utility bill purchases with multiple provider integrations and transaction management."
                  url="https://payo-one.vercel.app"
                />
                <Project
                  name="Billboard Booking System"
                  desc="Platform for managing billboard advertisement bookings, availability schedules, and administrative operations through a centralized dashboard."
                  url="https://bboards.vercel.app"
                />
                <Project
                  name="Signival – SMM Panel & OTP Platform"
                  desc="Platform combining an SMM panel for social media service management and an OTP verification system for temporary phone number activation and SMS code delivery."
                  url="https://signival.com"
                />
                <Project
                  name="Power Solution Mall"
                  desc="E-commerce and business website for Power Solution Mall, specializing in power-related products including inverters, solar panels, batteries, and electrical equipment with secure checkout, plus blog and company information sections."
                  url="https://powersolutionmall.com"
                />
                <Project
                  name="Construction Calculator"
                  desc="Engineering tool for steel building measurements, load estimation, and material quantity calculations."
                  url="https://steel-building-calculator.vercel.app"
                />
              </div>
            </Section>

            {/* EDUCATION */}
            <Section title="Education">
              <div className="border border-gray-200 p-5 rounded-xl bg-gray-50/30">
                <p className="font-semibold text-gray-900">
                  B.Sc. Computer Science — Ladoke Akintola University of Technology (LAUTECH)
                </p>
                <p className="text-sm text-gray-500 mt-1">2022 - 2026 (Expected)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Relevant coursework: Data Structures, Algorithms, Web Development, Database Management Systems, Software Engineering
                </p>
              </div>
            </Section>

            {/* ENGINEERING PRACTICES */}
            <Section title="Engineering Practices">
              <div className="flex flex-wrap gap-2">
                {[
                  "Error Handling",
                  "API Rate Limiting",
                  "Request Validation",
                  "Authentication & Authorization",
                  "Secure Transaction Workflows",
                  "Third-party Integrations",
                  "REST API Design",
                  "Version Control (Git)"
                ].map((practice) => (
                  <span
                    key={practice}
                    className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700"
                  >
                    {practice}
                  </span>
                ))}
              </div>
            </Section>

            {/* FOOTER */}
            <div className="mt-8 pt-6 text-center text-xs text-gray-500 border-t border-gray-200">
              <p>Available for internships, freelance projects, and remote opportunities.</p>
              <p className="mt-2">Built with Next.js + Tailwind CSS</p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3 border-b border-gray-200 pb-2 text-gray-800">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

function Project({ name, desc, url }: { name: string; desc: string; url: string }) {
  return (
    <div className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition bg-gray-50/30">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      {url && url !== '#' && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 mt-2 inline-block hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}