// src/components/SEO/StructuredData.tsx
import { SITE } from '@/lib/constants';

const StructuredData = () => {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE.name,
    "url": SITE.url,
    "image": SITE.defaultImage,
    "sameAs": [
      SITE.github,
      SITE.linkedin,
      `https://twitter.com/${SITE.twitter.replace('@', '')}`
    ],
    "jobTitle": "Full-Stack Software Developer",
    "description": SITE.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE.location.city,
      "addressRegion": SITE.location.region,
      "addressCountry": SITE.location.country
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Alabian Solutions"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE.name,
    "url": SITE.url,
    "description": SITE.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
};

export default StructuredData;