'use client';
import { useState } from 'react';
import type { FaqItem } from '@/lib/types';

interface FaqAccordionProps {
  items: FaqItem[];
  schemaId?: string;
}

export default function FaqAccordion({ items, schemaId }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schemaItems = items.filter(i => i.schema !== false);

  return (
    <>
      {schemaId && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaItems.map(item => ({
              "@type": "Question",
              "name": item.vraag,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.antwoord,
              }
            }))
          })}}
        />
      )}

      <div style={{ borderRadius: 12, overflow: 'hidden', border: '1.5px solid var(--rule)', background: 'white' }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: i < items.length - 1 ? '1px solid var(--rule)' : 'none' }}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%', textAlign: 'left', padding: '16px 20px',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4 }}>
                {item.vraag}
              </span>
              <span style={{
                flexShrink: 0, fontSize: 18, color: 'var(--blue)',
                transform: openIndex === i ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
                display: 'inline-block',
              }}>▾</span>
            </button>
            {openIndex === i && (
              <div style={{ padding: '0 20px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                {item.antwoord}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
