// src/app/page.tsx (full file — replace entirely)
import Link from "next/link";
import { generateMetadata } from "@/components/SEO";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { SITE } from '@/lib/constants';
import { getProjectBySlug } from '@/lib/projects';
import { faqs } from '@/lib/faq';
import { experience } from '@/lib/experience';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import Image from "next/image";

export const metadata = generateMetadata({
  title: "Home",
  description: SITE.description,
});

const featuredSlugs = ['signival', 'power-solution-mall', 'sales-inventory-accounting-system'];
const featuredProjects = featuredSlugs
  .map((slug) => getProjectBySlug(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const whatIBuild = [
  {
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with React, Next.js, and TypeScript.',
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile applications using React Native and Expo for iOS and Android.',
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs, authentication, databases, integrations, and backend systems built with Node.js and Express.',
  },
  {
    title: 'Business & Payment Systems',
    description: 'Transaction-driven platforms, payment integrations, dashboards, and business automation systems.',
  },
];

const whatIBring = [
  {
    title: 'Full-Stack Thinking',
    description: 'I understand how the frontend, backend, database, and infrastructure fit together.',
  },
  {
    title: 'Product-Focused Development',
    description: 'I build around the actual problem, not just the technical requirements.',
  },
  {
    title: 'Responsive Interfaces',
    description: 'Web applications that work properly across devices.',
  },
  {
    title: 'Scalable Backend Systems',
    description: 'APIs and databases designed with real-world usage in mind.',
  },
  {
    title: 'Third-Party Integrations',
    description: 'Payments, authentication, external APIs, and other services.',
  },
  {
    title: 'Deployment & Infrastructure',
    description: 'Taking applications beyond development and into production.',
  },
];

const techStackGroups = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Mobile', items: ['React Native', 'Expo'] },
  { label: 'Backend', items: ['Node.js', 'Express'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
  { label: 'Tools & Infrastructure', items: ['Git', 'GitHub', 'cPanel/WHM', 'Vercel'] },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
    <Navbar />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
    />
    <div className="pt-8">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
            Full-Stack Software Developer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            I build software that works
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              from the interface to the backend
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            I design and develop modern web applications, mobile apps, APIs, and business systems —
            turning ideas into functional, scalable products.
          </p>
          <p className="text-sm text-gray-500 font-medium mb-10">
            Web Development · Mobile Development · Backend &amp; APIs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="group px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 text-gray-500 font-medium hover:text-gray-700 transition-colors underline underline-offset-4"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Proof line */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-500 font-medium text-sm sm:text-base">
          <span>Web</span>
          <span className="text-gray-300">·</span>
          <span>Mobile</span>
          <span className="text-gray-300">·</span>
          <span>Backend</span>
          <span className="text-gray-300">·</span>
          <span>APIs</span>
          <span className="text-gray-300">·</span>
          <span>From idea → development → deployment</span>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            What I Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIBuild.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
            >
              View All
              <FiArrowRight />
            </Link>
          </div>
          <p className="text-gray-600 mb-12">Real software I&apos;ve designed and built.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                  <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-gray-900/90 text-white text-xs font-medium rounded-full shadow-sm">
                    {project.platform}
                  </span>
                  <div className="absolute bottom-4 right-4 z-10 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors shadow-md"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors shadow-md"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors inline-block"
                  >
                    {project.title}
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            More Than Just Code
          </h2>
          <p className="text-gray-600 text-center mb-12">What working with me actually looks like.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIBring.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {techStackGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {group.label}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-800 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 mb-8">
              I&apos;m a full-stack software developer who enjoys building products across the web, mobile,
              and backend. I work across the entire development process — from designing interfaces and
              application architecture to building APIs, integrating databases, and deploying production systems.
            </p>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group transition-colors"
            >
              Learn more about me
              <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-500"></span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.organization} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-gray-200 pb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.type}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{item.organization}</p>
                  <p className="text-gray-600 text-sm max-w-2xl">{item.description}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-6 whitespace-nowrap">{item.period}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resume"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group transition-colors"
            >
              View Full Experience
              <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Have an idea for a software product?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether it&apos;s a web application, mobile app, API, or complete business platform,
            let&apos;s turn the idea into something real.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Start a Project
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}