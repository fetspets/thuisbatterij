import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ComparisonTable from '@/components/ComparisonTable';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import { getBatteriesBy } from '@/lib/batteries';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Thuisbatterij Zonder Zonnepanelen — Zinvol of Niet? (België 2026)',
  description: 'Is een thuisbatterij zonder zonnepanelen zinvol in België? Analyse van dynamische tarieven, blackout-bescherming en rendabiliteit. Welke merken zijn geschikt?',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/thuisbatterij-zonder-zonnepanelen' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Kan ik een thuisbatterij gebruiken zonder zonnepanelen?',
    antwoord: 'Ja, technisch is dat mogelijk. De batterij laadt dan op via het elektriciteitsnet — bijvoorbeeld op goedkope daluren (nacht) en ontlaadt op dure piekmomenten (dag). Niet alle merken ondersteunen dit: de LG RESU en sonnen eco zijn hier expliciet voor ontworpen.',
    schema: true,
  },
  {
    vraag: 'Is het rendabel zonder zonnepanelen?',
    antwoord: 'Momenteel is de rendabiliteit beperkt. U verdient alleen aan het tariefverschil tussen dal- en piekuren. Met een vast stroomtarief is er geen besparing. Bij dynamische tarieven (bijv. via Tibber, Frank Energie) kan het interessanter worden, maar de terugverdientijd is doorgaans langer dan 12 jaar.',
    schema: true,
  },
  {
    vraag: 'Wat zijn dynamische energietarieven?',
    antwoord: 'Bij dynamische tarieven betaalt u een uurlijks variërend tarief dat meebeweegt met de beursprijs van elektriciteit. Op momenten van hoge productie (bijv. zon, wind) kan de prijs zeer laag of zelfs negatief zijn. Met een thuisbatterij kunt u dan goedkoop laden en duur ontladen.',
    schema: true,
  },
  {
    vraag: 'Welke thuisbatterij is het beste zonder zonnepanelen?',
    antwoord: 'De sonnen eco 8 en LG RESU 10H Prime zijn expliciet geschikt voor gebruik zonder zonnepanelen. De sonnen heeft de slimste software voor dynamisch tarief-optimalisatie. De LG biedt de beste prijs-kwaliteitsverhouding.',
    schema: true,
  },
];

export default function ZonderZonnepanelenPage() {
  const geschikteBatterijen = getBatteriesBy('zonder-zonnepanelen');

  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Thuisbatterij zonder zonnepanelen: zinvol of niet?
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          Niet iedereen heeft zonnepanelen — of wil ze. Misschien woont u in een appartement, heeft u een ongunstig dak, of overweegt u eerst een batterij. In deze gids onderzoeken we eerlijk of een thuisbatterij zonder zonnepanelen in België financieel en praktisch zinvol is.
        </p>

        <CtaBlock
          tekst="Laat een installateur uw situatie beoordelen — ook zonder zonnepanelen →"
          subtekst="Gratis advies · Vrijblijvend · Op basis van uw verbruik"
          href="/offerte-thuisbatterij"
        />

        {/* H2: Hoe werkt het */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Hoe werkt een thuisbatterij zonder zonnepanelen?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Zonder zonnepanelen haalt uw thuisbatterij energie uit het elektriciteitsnet in plaats van uit uw eigen zonnepanelen. Het werkprincipe is <strong>tariefoptimalisatie</strong>:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 24 }}>
          {[
            { stap: '1. Laden', beschrijving: 'De batterij laadt op wanneer stroom goedkoop is — op daluren (nacht) of bij negatieve prijzen op de dynamische markt.', icon: '🔌' },
            { stap: '2. Opslaan', beschrijving: 'De energie wordt opgeslagen in de batterij met een efficiëntie van 88–95%, afhankelijk van het merk.', icon: '🔋' },
            { stap: '3. Ontladen', beschrijving: 'De batterij levert stroom wanneer u die nodig heeft of wanneer de netprijs hoog is — typisch overdag en in de avondpiek.', icon: '⚡' },
          ].map(s => (
            <div key={s.stap} className="small-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{s.stap}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{s.beschrijving}</div>
            </div>
          ))}
        </div>

        {/* H2: Wanneer interessant */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Wanneer is het interessant? (En wanneer niet)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div className="small-card" style={{ borderColor: 'var(--green)', borderLeftWidth: 4, borderLeftStyle: 'solid' }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--green)', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>Mogelijk interessant als...</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
              <li>U een <strong>dynamisch energiecontract</strong> heeft (Tibber, Frank Energie)</li>
              <li>U een <strong>dag/nacht meter</strong> heeft met groot tariefverschil</li>
              <li>U <strong>blackout-bescherming</strong> wilt als noodstroomvoorziening</li>
              <li>U later <strong>zonnepanelen plant</strong> en nu al wilt voorbereiden</li>
              <li>U een <strong>elektrische auto</strong> heeft en slim wilt laden</li>
            </ul>
          </div>
          <div className="small-card" style={{ borderColor: 'var(--red)', borderLeftWidth: 4, borderLeftStyle: 'solid' }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--red)', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>Waarschijnlijk niet zinvol als...</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
              <li>U een <strong>vast tarief</strong> betaalt (geen dal/piektarieven)</li>
              <li>Uw <strong>verbruik laag</strong> is ({'<'}2.500 kWh/jaar)</li>
              <li>U geen plannen heeft voor zonnepanelen of dynamisch tarief</li>
              <li>U de investering op <strong>korte termijn</strong> wilt terugverdienen</li>
            </ul>
          </div>
        </div>

        {/* H2: Geschikte batterijen */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Welke thuisbatterijen zijn geschikt zonder zonnepanelen?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Niet alle thuisbatterijen zijn ontworpen voor gebruik zonder zonnepanelen. Hieronder vindt u de merken die dit expliciet ondersteunen:
        </p>
        <ComparisonTable brands={geschikteBatterijen} compact />

        {/* H2: Dynamische tarieven */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Dynamische energietarieven in België: de sleutel
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          De opkomst van dynamische energietarieven kan het landschap fundamenteel veranderen. Bij dynamische tarieven schommelt de prijs per uur, gebaseerd op de beursprijs. Op momenten van hoge hernieuwbare productie (zonnig en winderig) kan de prijs dalen tot €0,05/kWh of zelfs negatief worden. Op piekmomenten kan de prijs oplopen tot €0,50/kWh.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          <strong>In België bieden</strong> onder andere Tibber en Frank Energie dynamische contracten aan. Belangrijk: u heeft een <strong>digitale meter</strong> nodig (Fluvius biedt deze gratis aan bij vervanging van de oude meter).
        </p>

        <div className="warning-box" style={{ marginBottom: 24 }}>
          <p style={{ margin: 0, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
            <strong>Eerlijk advies:</strong> Op dit moment is een thuisbatterij zonder zonnepanelen in België <em>financieel beperkt rendabel</em>. De tariefverschillen zijn vaak onvoldoende om de investering binnen 10 jaar terug te verdienen. Maar dit verandert snel naarmate dynamische tarieven mainstream worden. Voor wie blackout-bescherming of toekomstige zonnepanelen als motivatie heeft, kan het nu al zinvol zijn.
          </p>
        </div>

        {/* Rekenvoorbeeld */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Rekenvoorbeeld: laden op daluren
        </h2>
        <div className="info-box">
          <p style={{ margin: 0, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
            <strong>Stel:</strong> u laadt 10 kWh per nacht op €0,15/kWh en ontlaadt overdag op €0,35/kWh<br />
            <strong>Efficiëntie:</strong> 90% (rond-om rendement)<br />
            <strong>Dagelijkse besparing:</strong> 10 × 0,90 × (€0,35 - €0,15) = <strong>€1,80/dag</strong><br />
            <strong>Jaarlijkse besparing:</strong> ~<strong>€657/jaar</strong><br />
            <strong>Batterijprijs:</strong> ~€7.000<br />
            <strong>Terugverdientijd:</strong> ~<strong>10,6 jaar</strong> (exclusief premies)<br />
            <em style={{ color: 'var(--muted)' }}>Met premies (€750–€2.000) kan dit zakken naar 7–9 jaar.</em>
          </p>
        </div>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Gerelateerde gidsen:</strong><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Wat kost een thuisbatterij? Alle prijzen vergeleken</Link><br />
            → <Link href="/is-thuisbatterij-rendabel" style={{ color: 'var(--blue-mid)' }}>Rendabiliteitsanalyse met en zonder zonnepanelen</Link><br />
            → <Link href="/hoeveel-kwh-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Hoeveel kWh capaciteit heeft u nodig?</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="zonder-zp-faq" />

        <CtaBlock
          tekst="Vraag advies aan een installateur — ook zonder zonnepanelen →"
          subtekst="Gratis · Vrijblijvend · Persoonlijk advies op basis van uw situatie"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
