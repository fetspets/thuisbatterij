import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ComparisonTable from '@/components/ComparisonTable';
import FaqAccordion from '@/components/FaqAccordion';
import PremieCard from '@/components/PremieCard';
import CtaBlock from '@/components/CtaBlock';
import { getTopBatteries } from '@/lib/batteries';
import { getAllPremies } from '@/lib/premies';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Thuisbatterij België 2026 — Vergelijk Merken, Prijzen & Premies',
  description: 'Vergelijk alle thuisbatterijen in België. Onafhankelijke ranglijst van Tesla, LG, Sonnen, Huawei. Bekijk premies, rendabiliteit en vraag gratis offertes aan.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be' },
  openGraph: {
    title: 'Beste Thuisbatterij België 2026 — Vergelijk & Bespaar',
    description: 'Onafhankelijke vergelijking van thuisbatterijen in België. Tesla, LG, Sonnen, Huawei en meer.',
  },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Wat kost een thuisbatterij in België?',
    antwoord: 'Een thuisbatterij kost in België inclusief installatie doorgaans tussen €4.000 en €13.000, afhankelijk van het merk, de capaciteit en de installateur. Een instapmodel van 10 kWh situeert zich rond €5.000–€8.000. Grotere of premium systemen zoals de Tesla Powerwall 3 komen uit op €9.000–€13.000.',
    schema: true,
  },
  {
    vraag: 'Is een thuisbatterij rendabel in België?',
    antwoord: 'Dat hangt sterk af van uw situatie. Met zonnepanelen en een hoog elektriciteitsverbruik kan de terugverdientijd tussen 7 en 12 jaar liggen. Zonder zonnepanelen is rendabiliteit momenteel beperkt in België, tenzij u profiteert van dynamische energietarieven. Gebruik onze calculator voor een persoonlijke inschatting.',
    schema: true,
  },
  {
    vraag: 'Welke premies zijn er voor thuisbatterijen in België?',
    antwoord: 'Premies variëren per gewest: in Vlaanderen zijn er premies via Fluvius, in Wallonië via het Renolution-programma, in Brussel via Leefmilieu Brussel. Federaal geniet u van het verlaagd BTW-tarief van 6% op woningen ouder dan 10 jaar. Premies kunnen worden gecombineerd. Controleer steeds de actuele bedragen bij uw netbeheerder.',
    schema: true,
  },
  {
    vraag: 'Heb ik zonnepanelen nodig voor een thuisbatterij?',
    antwoord: 'Niet per se, maar het maakt een groot verschil voor de rendabiliteit. Zonder zonnepanelen kunt u de batterij opladen op daluren (goedkope stroom) en ontladen op piekmomenten. Dat is financieel interessant bij dynamische tarieven, maar de terugverdientijd is langer dan bij combinatie met zonnepanelen.',
    schema: true,
  },
  {
    vraag: 'Wat is de beste thuisbatterij voor België in 2026?',
    antwoord: 'Op basis van onze vergelijking scoort de Tesla Powerwall 3 het hoogst voor wie een all-in-one oplossing wil met maximale capaciteit. De LG RESU 10H Prime biedt de beste prijs-kwaliteit voor doorsnee huishoudens. De Huawei LUNA 2000 is de meest betaalbare optie met uitstekende technische specs.',
    schema: true,
  },
];

export default function HomePage() {
  const topBatteries = getTopBatteries(5);
  const premies = getAllPremies();

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beste thuisbatterijen België 2026",
    "itemListElement": topBatteries.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.naam,
      "url": `https://thuisbatterijbelgie.be/ga/${b.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <TrustBar />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, var(--blue) 0%, #2563EB 100%)', color: 'white', padding: '48px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            De beste thuisbatterij in België (2026)
          </h1>
          <p style={{ fontSize: 18, color: '#BFDBFE', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
            Onafhankelijke vergelijking van {topBatteries.length} merken. Ontdek welke thuisbatterij past bij uw situatie, uw budget en uw gewest.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/offerte-thuisbatterij" style={{ background: 'var(--amber)', color: 'var(--ink)', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
              Vergelijk offertes — gratis →
            </Link>
            <Link href="/is-thuisbatterij-rendabel" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', border: '1.5px solid rgba(255,255,255,0.3)' }}>
              Bereken rendabiliteit
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>

        {/* Ranglijst */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: 'var(--ink)', marginBottom: 8 }}>
          Onze top 5 thuisbatterijen
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 24, fontFamily: 'DM Sans, sans-serif' }}>
          Beoordeeld op kwaliteit, prijs, garantie, technologie en installatiegemak. Bijgewerkt april 2026.
        </p>

        {topBatteries.map((battery, i) => (
          <div key={battery.slug} id={battery.slug} className={`ranking-card${i === 0 ? ' top' : ''}`}>
            <div style={{ padding: '20px 22px', display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, background: i === 0 ? 'var(--amber)' : 'var(--blue-light)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: i === 0 ? 'var(--ink)' : 'var(--blue)' }}>
                {i + 1}
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    {i === 0 && <span style={{ background: 'var(--amber)', color: 'var(--ink)', fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 20, marginRight: 8, fontFamily: 'DM Sans, sans-serif' }}>BESTE KEUZE</span>}
                    <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)', display: 'inline', marginLeft: i === 0 ? 0 : undefined }}>{battery.naam}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 26, fontWeight: 900, color: 'var(--blue)' }}>{battery.score.totaal}</span>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>/10</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 12, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>{battery.beschrijving}</p>

                {/* Score bars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '6px 16px', marginBottom: 14 }}>
                  {[
                    { label: 'Kwaliteit', val: battery.score.kwaliteit },
                    { label: 'Prijs', val: battery.score.prijs },
                    { label: 'Garantie', val: battery.score.garantie },
                    { label: 'Technologie', val: battery.score.technologie },
                  ].map(s => (
                    <div key={s.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', marginBottom: 2 }}>
                        <span>{s.label}</span><span style={{ fontWeight: 700 }}>{s.val}</span>
                      </div>
                      <div className="score-bar"><div className="score-bar-fill" style={{ width: `${s.val * 10}%` }} /></div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                  {battery.kenmerken.slice(0, 3).map((k, ki) => (
                    <span key={ki} style={{ fontSize: 12, background: 'var(--blue-light)', color: 'var(--blue-mid)', padding: '4px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{k}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)' }}>{battery.prijsBereik.label}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 6, fontFamily: 'DM Sans, sans-serif' }}>incl. installatie</span>
                  </div>
                  <Link href={`/ga/${battery.slug}`} style={{ background: 'var(--blue)', color: 'white', padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                    Bekijk actuele prijzen →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Volledige tabel */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 12, marginTop: 40, color: 'var(--ink)' }}>
          Vergelijkingstabel: alle merken naast elkaar
        </h2>
        <ComparisonTable brands={topBatteries} />

        {/* CTA midden */}
        <CtaBlock
          tekst="Klaar om te vergelijken? Ontvang 3 gratis offertes van gecertificeerde installateurs in uw regio."
          subtekst="100% gratis · Geen verplichtingen · Binnen 48 uur reactie"
          href="/offerte-thuisbatterij"
          variant="banner"
        />

        {/* Premies section */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 8, marginTop: 40, color: 'var(--ink)' }}>
          Premies per gewest in België (2026)
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 20, fontFamily: 'DM Sans, sans-serif' }}>
          Afhankelijk van uw gewest kunt u aanspraak maken op subsidies die de netto-investering gevoelig verlagen.
          Alle premies zijn cumuleerbaar met het federale BTW-voordeel van 6%.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {premies.map(p => <PremieCard key={p.id} premie={p} />)}
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8, fontFamily: 'DM Sans, sans-serif' }}>
          → <Link href="/thuisbatterij-premie" style={{ color: 'var(--blue-mid)' }}>Volledig premie-overzicht met stap-voor-stap aanvraagprocedure</Link>
        </p>

        {/* Interne links sectie */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16, marginTop: 40, color: 'var(--ink)' }}>
          Verdiep uw kennis
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {[
            { href: '/thuisbatterij-prijs', title: 'Thuisbatterij prijs', desc: 'Wat kost een thuisbatterij in België? Alle kosten uitgelegd.', icon: '💰' },
            { href: '/is-thuisbatterij-rendabel', title: 'Is het rendabel?', desc: 'Bereken uw persoonlijke terugverdientijd met onze calculator.', icon: '📊' },
            { href: '/thuisbatterij-premie', title: 'Premies & subsidies', desc: 'Overzicht van alle premies per gewest in België.', icon: '🎁' },
            { href: '/beste-thuisbatterij', title: 'Beste thuisbatterij', desc: 'Uitgebreide ranglijst voor verschillende situaties.', icon: '⭐' },
            { href: '/thuisbatterij-installatie', title: 'Installatie gids', desc: 'Stap voor stap: van offerte tot ingebruikname.', icon: '🔧' },
            { href: '/thuisbatterij-zonder-zonnepanelen', title: 'Zonder zonnepanelen', desc: 'Is een batterij zinvol als u geen zonnepanelen heeft?', icon: '☁️' },
            { href: '/hoeveel-kwh-thuisbatterij', title: 'Hoeveel kWh nodig?', desc: 'Bereken de juiste capaciteit voor uw situatie.', icon: '🔋' },
            { href: '/tesla-vs-lg-thuisbatterij', title: 'Tesla vs LG', desc: 'Twee populaire merken vergeleken voor de Belgische markt.', icon: '⚡' },
          ].map(card => (
            <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
              <div className="small-card">
                <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{card.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16, marginTop: 40, color: 'var(--ink)' }}>
          Veelgestelde vragen over thuisbatterijen
        </h2>
        <FaqAccordion items={faqItems} schemaId="homepage-faq" />

        {/* Eindcta */}
        <div style={{ marginTop: 40 }}>
          <CtaBlock
            tekst="Ontvang vrijblijvend voorstel van een installateur in uw buurt →"
            subtekst="Gratis · Binnen 48u · GDPR-conform"
            href="/offerte-thuisbatterij"
          />
        </div>

        <p className="disclosure" style={{ marginTop: 16 }}>
          ThuisbatterijBelgie.be is een onafhankelijke vergelijkingssite. Rangschikking is gebaseerd op redactionele criteria, niet op betaling.
          Prijzen zijn indicatief en inclusief installatie. Controleer steeds de actuele prijs bij uw installateur.
        </p>
      </div>
    </>
  );
}
