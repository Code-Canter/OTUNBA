import { generateMetadata as buildMetadata } from '@/components/SEO';
import ResumeClient from './ResumeClient';

export const metadata = buildMetadata({
  title: 'Resume',
  description:
    'Resume of Otunba Odubanjo — Software Engineer specializing in APIs, backend systems, payment platforms, and fullstack web development with Node.js, React, and Next.js.',
});

export default function ResumePage() {
  return <ResumeClient />;
}
