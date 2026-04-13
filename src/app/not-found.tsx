import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden — ThuisbatterijBelgie.be',
};

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔋</div>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 900, color: 'var(--blue)', marginBottom: 12 }}>
        Pagina niet gevonden
      </h1>
      <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
        Deze pagina bestaat niet of is verplaatst. Gebruik de navigatie om verder te gaan.
      </p>
      <Link href="/" className="btn-primary" style={{ maxWidth: 280, margin: '0 auto' }}>
        Terug naar de vergelijkingspagina →
      </Link>
    </div>
  );
}
