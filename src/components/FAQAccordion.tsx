// src/components/FAQAccordion.tsx
'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import type { FaqItem } from '@/lib/faq';

export default function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <FiChevronDown
                className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="text-gray-600 pb-5 pr-8">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}