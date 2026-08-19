// src/lib/experience.ts
export interface ExperienceItem {
  organization: string;
  type: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    organization: 'Alabian Solutions',
    type: 'Full-Stack Web Development Training',
    period: '2022 – 2023',
    description:
      'Learned full-stack web development at Alabian Solutions, building the foundation in frontend, backend, and database fundamentals that led into freelance and independent project work.',
  },
  {
    organization: 'Independent / Freelance',
    type: 'Full-Stack & Mobile Developer',
    period: '2023 – Present',
    description:
      'Building and shipping web applications, mobile apps, APIs, and business platforms independently and for clients — including payment systems, e-commerce, and SMM/verification platforms.',
  },
];