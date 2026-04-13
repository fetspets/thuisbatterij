import Link from 'next/link';

interface CtaBlockProps {
  tekst: string;
  subtekst?: string;
  href: string;
  variant?: 'primary' | 'outline' | 'banner';
  external?: boolean;
}

export default function CtaBlock({
  tekst,
  subtekst,
  href,
  variant = 'primary',
  external = false,
}: CtaBlockProps) {
  if (variant === 'banner') {
    return (
      <div style={{
        background: 'var(--amber-light)',
        border: '2px solid var(--amber)',
        borderRadius: 14,
        padding: '20px 24px',
        margin: '28px 0',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 12, fontFamily: 'DM Sans, sans-serif' }}>
          {tekst}
        </p>
        <Link
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="btn-primary"
          style={{ maxWidth: 320, margin: '0 auto', display: 'block' }}
        >
          Vraag vrijblijvend offerte aan →
        </Link>
        {subtekst && (
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8, fontFamily: 'DM Sans, sans-serif' }}>{subtekst}</p>
        )}
      </div>
    );
  }

  if (variant === 'outline') {
    return (
      <div style={{ margin: '20px 0' }}>
        <Link
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="btn-outline"
        >
          {tekst}
        </Link>
        {subtekst && (
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>{subtekst}</p>
        )}
      </div>
    );
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="btn-primary"
      >
        {tekst}
      </Link>
      {subtekst && (
        <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>{subtekst}</p>
      )}
    </div>
  );
}
