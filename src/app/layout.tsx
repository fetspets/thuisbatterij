import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Thuisbatterij België 2026 — Onafhankelijke Vergelijking & Gids',
    template: '%s | ThuisbatterijBelgie.be',
  },
  description: 'Onafhankelijke vergelijking van thuisbatterijen in België. Prijzen, premies, rendabiliteit en installatie. Vergelijk Tesla, LG, Sonnen en meer.',
  keywords: ['thuisbatterij belgië', 'thuisbatterij prijs', 'thuisbatterij premie', 'beste thuisbatterij', 'thuisbatterij rendabel'],
  openGraph: {
    title: 'Thuisbatterij België 2026 — Vergelijk & Bespaar',
    description: 'Onafhankelijke vergelijking van thuisbatterijen in België. Premies, prijzen en installatiegids.',
    url: 'https://thuisbatterijbelgie.be',
    siteName: 'ThuisbatterijBelgie.be',
    locale: 'nl_BE',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://thuisbatterijbelgie.be' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/favicon-180x180.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ThuisbatterijBelgie",
            "url": "https://thuisbatterijbelgie.be",
            "logo": "https://thuisbatterijbelgie.be/favicon-180x180.png",
            "description": "Onafhankelijke vergelijking van thuisbatterijen in België",
            "areaServed": "BE"
          })}}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics — vervang G-XXXXXXXXXX door uw eigen GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
