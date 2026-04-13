import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Hoeveel kWh Thuisbatterij Nodig? Berekeningsgids België (2026)',
  description: 'Hoeveel kWh capaciteit heeft uw thuisbatterij nodig? Bereken de juiste maat voor uw huishouden. Vuistregels, tabel per gezinstype en deskundig advies.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/hoeveel-kwh-thuisbatterij' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Hoeveel kWh thuisbatterij heb ik nodig voor een gezin?',
    antwoord: 'Voor een gemiddeld Belgisch gezin (3.500–5.000 kWh/jaar) is 5 tot 10 kWh doorgaans voldoende. Bij hoger verbruik (warmtepomp, elektrische auto) of bij zonnepanelen boven 8 kWp kan 10–15 kWh interessanter zijn.',
    schema: true,
  },
  {
    vraag: 'Is meer kWh altijd beter?',
    antwoord: 'Nee. Na een bepaald punt treedt de wet van afnemende meeropbrengst in werking: u slaat meer op dan u verbruikt, waardoor de extra capaciteit onbenut blijft. De optimale capaciteit is afgestemd op uw avond-/nachtverbruik en uw zonnepaneelproductie.',
    schema: true,
  },
  {
    vraag: 'Welke thuisbatterij heeft de meeste kWh?',
    antwoord: 'De Huawei LUNA 2000 is modulair uitbreidbaar tot 30 kWh. De sonnen eco 8 gaat tot 15 kWh. De Tesla Powerwall 3 biedt 13,5 kWh per unit en is stapelbaar tot 4 eenheden (54 kWh). Voor de meeste huishoudens is 10–15 kWh meer dan voldoende.',
    schema: true,
  },
  {
    vraag: 'Hoe bereken ik mijn avond- en nachtverbruik?',
    antwoord: 'Controleer uw digitale meter (Fluvius) of uw energieleverancier voor verbruiksgegevens per dagdeel. Gemiddeld verbruikt een Belgisch huishouden 40–60% van zijn dagverbruik in de avond en nacht. Vermenigvuldig uw dagverbruik met dat percentage voor een ruwe inschatting.',
    schema: true,
  },
];

export default function HoeveelKwhPage() {
  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Hoeveel kWh heeft uw thuisbatterij nodig? Berekeningsgids
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          Te weinig capaciteit en u benut het potentieel niet volledig. Te veel en u betaalt voor opslag die leeg blijft. De juiste kWh-keuze maakt het verschil tussen een slimme investering en een dure vergissing. In deze gids helpen we u de perfecte capaciteit te bepalen.
        </p>

        <CtaBlock
          tekst="Laat een installateur de ideale capaciteit voor uw woning berekenen →"
          subtekst="Op basis van uw werkelijk verbruik · Gratis offerte"
          href="/offerte-thuisbatterij"
        />

        {/* H2: Vuistregel */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Vuistregel: hoeveel kWh heeft u nodig?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Een praktische vuistregel: <strong>uw batterijcapaciteit in kWh = uw avond-/nachtverbruik per gemiddelde dag</strong>. Concreet:
        </p>
        <div className="info-box" style={{ marginBottom: 24 }}>
          <p style={{ margin: 0, fontSize: 15, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
            <strong>Formule:</strong> Jaarverbruik (kWh) ÷ 365 × 0,5 = aanbevolen capaciteit (kWh)<br />
            <strong>Voorbeeld:</strong> 4.000 kWh/jaar ÷ 365 × 0,5 = <strong>~5,5 kWh</strong><br />
            <em style={{ fontSize: 13, color: 'var(--muted)' }}>De factor 0,5 schat dat 50% van uw verbruik buiten de zonne-uren valt.</em>
          </p>
        </div>

        {/* H2: Tabel per gezinstype */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Aanbevolen capaciteit per type huishouden
        </h2>
        <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            <thead>
              <tr style={{ background: 'var(--blue)', color: 'white' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Situatie</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Verbruik/jaar</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Zonnepanelen</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Aanbevolen kWh</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Geschikt merk</th>
              </tr>
            </thead>
            <tbody>
              {[
                { situatie: 'Alleenstaande, klein appartement', verbruik: '1.500–2.500 kWh', zp: '3 kWp', kwh: '3–5 kWh', merk: 'SOLARWATT (4,4 kWh)' },
                { situatie: 'Koppel, rijwoning', verbruik: '2.500–3.500 kWh', zp: '4–6 kWp', kwh: '5–8 kWh', merk: 'Huawei LUNA (5 kWh)' },
                { situatie: 'Gezin met kinderen', verbruik: '3.500–5.000 kWh', zp: '6–8 kWp', kwh: '8–10 kWh', merk: 'LG RESU (9,6 kWh)' },
                { situatie: 'Groot gezin + warmtepomp', verbruik: '5.000–8.000 kWh', zp: '8–12 kWp', kwh: '10–15 kWh', merk: 'Tesla Powerwall (13,5 kWh)' },
                { situatie: 'Groot gezin + EV + warmtepomp', verbruik: '8.000+ kWh', zp: '12+ kWp', kwh: '15–30 kWh', merk: 'Huawei LUNA modulair' },
              ].map((r, i) => (
                <tr key={r.situatie} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#F9FAFB' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>{r.situatie}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{r.verbruik}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{r.zp}</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontWeight: 700, color: 'var(--blue)' }}>{r.kwh}</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontSize: 13 }}>{r.merk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2: Scenario's */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          5 kWh, 10 kWh of 15 kWh: wanneer welke keuze?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 24 }}>
          {[
            {
              kWh: '5 kWh', wanneer: 'Koppel of alleenstaande met 3–5 kWp zonnepanelen',
              voordeel: 'Laagste investering, snelste terugverdientijd',
              nadeel: 'Onvoldoende voor hoog avondverbruik',
            },
            {
              kWh: '10 kWh', wanneer: 'Gezin met 6–8 kWp zonnepanelen, standaard verbruik',
              voordeel: 'Beste balans tussen capaciteit en investering',
              nadeel: 'Bij zwaar verbruik (EV) soms net onvoldoende',
            },
            {
              kWh: '15+ kWh', wanneer: 'Groot gezin met warmtepomp, EV, en 10+ kWp zonnepanelen',
              voordeel: 'Maximale zelfconsumptie, blackout-bescherming',
              nadeel: 'Hogere investering, langere terugverdientijd',
            },
          ].map(scenario => (
            <div key={scenario.kWh} className="small-card">
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--blue)', marginBottom: 6 }}>{scenario.kWh}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>{scenario.wanneer}</div>
              <div style={{ fontSize: 12, color: 'var(--green)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>✓ {scenario.voordeel}</div>
              <div style={{ fontSize: 12, color: 'var(--red)', fontFamily: 'DM Sans, sans-serif' }}>— {scenario.nadeel}</div>
            </div>
          ))}
        </div>

        {/* H2: Afnemende meeropbrengst */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Meer kWh = altijd beter? De wet van de afnemende meeropbrengst
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Intuïtief lijkt een grotere batterij altijd beter: meer opslag = meer besparing. In de praktijk is dat niet zo. Na een bepaald punt vult uw batterij op een gemiddelde dag niet meer volledig op — de extra capaciteit blijft onbenut.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          <strong>Concreet voorbeeld:</strong> een huishouden met 5 kWp zonnepanelen produceert op een gemiddelde dag in België ~15 kWh. Na eigen dagverbruik (~7 kWh) blijft ~8 kWh over om op te slaan. Een 10 kWh batterij volstaat ruim — een 15 kWh batterij zou op de meeste dagen niet volledig opladen.
        </p>
        <div className="warning-box">
          <p style={{ margin: 0, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
            <strong>Vuistregel:</strong> kies een capaciteit die past bij uw <em>dagelijkse overtollige productie</em>, niet bij uw piekproductie. Een installateur kan dit nauwkeurig berekenen op basis van uw Fluvius-data.
          </p>
        </div>

        {/* H2: Impact zonnepanelen */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Impact van zonnepanelen op benodigde capaciteit
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Uw zonnepanelen bepalen hoeveel energie u kunt opslaan. Een grove richtlijn:
        </p>
        <ul style={{ fontSize: 14, color: 'var(--muted)', paddingLeft: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2, marginBottom: 20 }}>
          <li><strong>3–5 kWp:</strong> 3–6 kWh batterij volstaat</li>
          <li><strong>5–8 kWp:</strong> 5–10 kWh is optimaal</li>
          <li><strong>8–12 kWp:</strong> 10–15 kWh</li>
          <li><strong>12+ kWp:</strong> 15+ kWh, of overweeg modulair systeem</li>
        </ul>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>
          Zonder zonnepanelen is de batterij afhankelijk van laden op daluren (goedkope stroom &apos;s nachts). In dat geval bepaalt uw dagverbruik de gewenste capaciteit — zie onze pagina <Link href="/thuisbatterij-zonder-zonnepanelen" style={{ color: 'var(--blue-mid)' }}>thuisbatterij zonder zonnepanelen</Link>.
        </p>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Gerelateerde gidsen:</strong><br />
            → <Link href="/beste-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Aanbevolen merken per capaciteitsklasse</Link><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Prijzen per merk en per kWh</Link><br />
            → <Link href="/is-thuisbatterij-rendabel" style={{ color: 'var(--blue-mid)' }}>Bereken de terugverdientijd voor uw situatie</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="kwh-faq" />

        <CtaBlock
          tekst="Een installateur berekent de ideale capaciteit voor uw woning — gratis →"
          subtekst="Op basis van uw Fluvius-data en verbruiksprofiel"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
