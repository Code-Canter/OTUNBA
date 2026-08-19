import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { generateMetadata as buildMetadata } from '@/components/SEO';
import { projects, getProjectBySlug } from '@/lib/projects';
import { SITE } from '@/lib/constants';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.shortDescription,
    url: `${SITE.url}/projects/${project.slug}`,
    image: project.image ?? undefined,
    type: 'article',
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    url: `${SITE.url}/projects/${project.slug}`,
    creator: {
      '@type': 'Person',
      name: SITE.name,
      url: SITE.url,
    },
    keywords: project.tags.join(', '),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs bg-gray-900 text-white rounded-full">
              {project.platform}
            </span>
            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              {project.industry}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FiExternalLink className="h-4 w-4" />
                Visit Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FiGithub className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>
        </header>

        {project.image && (
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-10 border border-gray-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">My Role</h2>
            <p className="text-gray-700 leading-relaxed">{project.role}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">The Problem</h2>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">The Solution</h2>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            ← View all projects
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
