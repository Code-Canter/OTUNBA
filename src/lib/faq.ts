// src/lib/faq.ts
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What kind of software do you build?',
    answer:
      'Web applications, mobile applications, APIs, business platforms, e-commerce systems, payment and transaction systems, dashboards, and other custom software solutions.',
  },
  {
    question: 'Do you build both web and mobile applications?',
    answer:
      'Yes. I build cross-platform mobile applications using React Native and Expo, alongside modern web applications with React and Next.js — including the backend and APIs that power them.',
  },
  {
    question: 'Can you build the backend/API for an existing application?',
    answer:
      "Yes. I work across the full stack, so I can build or extend backend services, APIs, authentication, and database layers for an app that already exists, not just greenfield builds.",
  },
  {
    question: 'Can you integrate payment gateways and third-party APIs?',
    answer:
      "Yes — payment gateway integrations, SMS/OTP providers, and other third-party services are part of the systems I've built, including transaction logging and reconciliation.",
  },
  {
    question: 'Can you take a project from development to deployment?',
    answer:
      'Yes. I handle the full path from building the application through to deployment and server administration where needed, including VPS/cPanel setups.',
  },
  {
    question: 'Are you available for freelance or contract work?',
    answer:
      'Yes — I take on freelance and contract projects. The fastest way to reach me is through the contact page.',
  },
  {
    question: 'Do you work with clients outside Nigeria?',
    answer:
      "Yes. I'm based in Lagos, Nigeria, and work with clients and teams remotely regardless of location.",
  },
];