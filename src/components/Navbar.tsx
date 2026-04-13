'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top promo bar */}
      <div style={{ background: 'var(--blue)', color: 'white', textAlign: 'center', padding: '9px 16px', fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>
        <strong>Vergelijk thuisbatterijprijzen in België</strong> — Ontvang 3 vrijblijvende offertes{' '}
        <Link href="/offerte-thuisbatterij" style={{ color: 'var(--amber)', fontWeight: 700 }}>Aanvragen →</Link>
      </div>

      {/* Main nav */}
      <nav style={{ background: 'white', borderBottom: '3px solid var(--ink)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: 19, fontWeight: 900, color: 'var(--blue)' }}>
              ThuisbatterijBelgie
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
            {[
              { href: '/', label: 'Vergelijken' },
              { href: '/thuisbatterij-prijs', label: 'Prijzen' },
              { href: '/thuisbatterij-premie', label: 'Premies' },
              { href: '/is-thuisbatterij-rendabel', label: 'Rendabiliteit' },
              { href: '/beste-thuisbatterij', label: 'Beste batterij' },
              { href: '/offerte-thuisbatterij', label: '📋 Offerte aanvragen' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ padding: '6px 10px', fontSize: 13, fontWeight: 600, color: 'var(--ink)', textDecoration: 'none', borderRadius: 6, fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}
            className="hamburger"
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid var(--rule)', background: 'white' }}>
            {[
              { href: '/', label: '🏆 Vergelijken' },
              { href: '/thuisbatterij-prijs', label: '💰 Prijzen' },
              { href: '/thuisbatterij-premie', label: '🎁 Premies & subsidies' },
              { href: '/is-thuisbatterij-rendabel', label: '📊 Rendabiliteit' },
              { href: '/beste-thuisbatterij', label: '⭐ Beste thuisbatterij' },
              { href: '/hoeveel-kwh-thuisbatterij', label: '🔋 Hoeveel kWh?' },
              { href: '/thuisbatterij-installatie', label: '🔧 Installatie' },
              { href: '/thuisbatterij-zonder-zonnepanelen', label: '☁️ Zonder zonnepanelen' },
              { href: '/offerte-thuisbatterij', label: '📋 Gratis offerte aanvragen' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 20px', fontSize: 15, fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--rule)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
