import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ComparisonTable from '@/components/ComparisonTable';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import { getBattery } from '@/lib/batteries';
import type { FaqItem, BatteryBrand } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Tesla Powerwall vs LG RESU — Welke Is Beter voor België? (2026)',
  description: 'Tesla Powerwall 3 vs LG RESU 10H Prime: directe vergelijking voor België. Capaciteit, prijs, chemie, garantie en beschikbaarheid van installateurs.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/tesla-vs-lg-thuisbatterij' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Is Tesla Powerwall beter dan LG RESU?',
    antwoord: 'Dat hangt af van uw situatie. Tesla wint op vlak van capaciteit (13,5 vs 9,6 kWh), all-in ontwerp (ingebouwde omvormer) en blackout-bescherming. LG wint op prijs, levensduur (LFP vs NMC) en installateurnetwerk in België. Voor gemiddelde huishoudens die prijs-kwaliteit prioriteren, is LG vaak de betere keuze.',
    schema: true,
  },
  {
    vraag: 'Wat is het verschil tussen NCA/NMC en LFP chemie?',
    antwoord: 'Tesla gebruikt NMC-chemie: hogere energiedichtheid maar kortere levensduur (~4.000 cycli) en iets hoger veiligheidsrisico. LG gebruikt LFP: veiliger, langere levensduur (~6.000 cycli) maar lagere energiedichtheid. Voor thuisgebruik wordt LFP steeds meer als de betere keuze gezien.',
    schema: true,
  },
  {
    vraag: 'Welke batterij is goedkoper in België?',
    antwoord: 'De LG RESU 10H Prime (€5.500–€8.500) is aanzienlijk goedkoper dan de Tesla Powerwall 3 (€9.000–€13.000). Tesla bevat echter een geïntegreerde omvormer — als u bij LG nog een omvormer moet bijkopen, kan het verschil kleiner worden.',
    schema: true,
  },
];

export default function TeslaVsLgPage() {
  const tesla = getBattery('tesla-powerwall-3') as BatteryBrand;
  const lg = getBattery('lg-resu-10h-prime') as BatteryBrand;

  const productSchemas = [tesla, lg].map(b => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": b.naam,
    "brand": { "@type": "Brand", "name": b.fabrikant },
    "description": b.beschrijving,
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": b.prijsBereik.min,
      "highPrice": b.prijsBereik.max,
      "priceCurrency": "EUR",
    },
  }));

  return (
    <>
      {productSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Tesla Powerwall vs. LG RESU: welke is beter voor België?
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          Tesla en LG zijn de twee meest gevraagde thuisbatterijmerken in België. Beide zijn betrouwbaar, maar ze richten zich op verschillende gebruikers. In deze vergelijking zetten we ze naast elkaar op elk criterium dat er voor Belgische huishoudens toe doet.
        </p>

        <CtaBlock
          tekst="Ontvang offertes voor beide merken — vergelijk zelf →"
          subtekst="3 installateurs · Gratis · Vrijblijvend"
          href="/offerte-thuisbatterij"
        />

        {/* Side-by-side specs */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 16 }}>
          Directe vergelijking: specificaties naast elkaar
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {[tesla, lg].map((b, i) => (
            <div key={b.slug} className="ranking-card" style={{ borderColor: i === 0 ? 'var(--amber)' : 'var(--blue-mid)' }}>
              <div style={{ padding: '4px 14px', background: i === 0 ? 'var(--amber-light)' : 'var(--blue-light)', textAlign: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? '#B45309' : 'var(--blue-mid)', fontFamily: 'DM Sans, sans-serif' }}>
                  {i === 0 ? 'BESTE CAPACITEIT' : 'BESTE PRIJS-KWALITEIT'}
                </span>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)', marginBottom: 4 }}>{b.naam}</h3>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--blue)', marginBottom: 10 }}>
                  {b.score.totaal}<span style={{ fontSize: 13, color: 'var(--muted)' }}>/10</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
                  <div><strong>Capaciteit:</strong> {b.capaciteit.label}</div>
                  <div><strong>Chemie:</strong> {b.chemie}</div>
                  <div><strong>Vermogen:</strong> {b.vermogen.continu} kW (continu) / {b.vermogen.piek} kW (piek)</div>
                  <div><strong>Garantie:</strong> {b.garantie} jaar</div>
                  <div><strong>Levensduur:</strong> {b.cycluslevensduur.toLocaleString('nl-BE')} cycli</div>
                  <div><strong>Efficiëntie:</strong> {b.efficiency}%</div>
                  <div><strong>Blackout:</strong> {b.blackout ? '✓ Ja' : '✗ Nee'}</div>
                  <div><strong>Driefasig:</strong> {b.driefasig ? '✓ Ja' : '✗ Nee'}</div>
                  <div style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 4 }}>{b.prijsBereik.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vergelijkingstabel */}
        <ComparisonTable brands={[tesla, lg]} compact />

        {/* Tesla voordelen */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Tesla Powerwall 3: sterke punten en beperkingen
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>Voordelen</div>
            {tesla.pros.map((p, i) => <div key={i} style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>✓ {p}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>Aandachtspunten</div>
            {tesla.cons.map((c, i) => <div key={i} style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>— {c}</div>)}
          </div>
        </div>

        {/* LG voordelen */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          LG RESU 10H Prime: sterke punten en beperkingen
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>Voordelen</div>
            {lg.pros.map((p, i) => <div key={i} style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>✓ {p}</div>)}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>Aandachtspunten</div>
            {lg.cons.map((c, i) => <div key={i} style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>— {c}</div>)}
          </div>
        </div>

        {/* Chemie */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Chemie: NMC (Tesla) vs. LFP (LG) — wat betekent dat?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Het grootste technische verschil zit in de batterijchemie. Tesla gebruikt <strong>NMC (Nikkel-Mangaan-Kobalt)</strong>, LG gebruikt <strong>LFP (Lithium-IJzerFosfaat)</strong>. Dit heeft concrete gevolgen:
        </p>
        <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            <thead>
              <tr style={{ background: 'var(--blue)', color: 'white' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Eigenschap</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>NMC (Tesla)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>LFP (LG)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { eigenschap: 'Energiedichtheid', nmc: 'Hoger (compacter)', lfp: 'Lager (groter formaat)' },
                { eigenschap: 'Levensduur (cycli)', nmc: '~4.000', lfp: '~6.000' },
                { eigenschap: 'Veiligheid', nmc: 'Goed, maar iets hoger risico bij oververhitting', lfp: 'Uitstekend, thermisch zeer stabiel' },
                { eigenschap: 'Kosten per kWh', nmc: 'Iets hoger', lfp: 'Iets lager' },
                { eigenschap: 'Temperatuurgevoeligheid', nmc: 'Gevoeliger', lfp: 'Minder gevoelig' },
                { eigenschap: 'Milieubelasting', nmc: 'Kobalt winning is belastend', lfp: 'Geen kobalt nodig' },
              ].map((r, i) => (
                <tr key={r.eigenschap} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#F9FAFB' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>{r.eigenschap}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center' }}>{r.nmc}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center' }}>{r.lfp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Onze aanbeveling */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Onze aanbeveling voor Belgische gezinnen
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div className="small-card" style={{ borderColor: 'var(--amber)', borderWidth: 2 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#B45309', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>KIES TESLA ALS...</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
              <li>U een all-in-one oplossing wilt (geen aparte omvormer)</li>
              <li>U blackout-bescherming nodig heeft</li>
              <li>U een groot verbruik heeft ({'>'}5.000 kWh/jaar)</li>
              <li>U al Tesla zonnepanelen heeft of overweegt</li>
              <li>De hogere prijs geen bezwaar is</li>
            </ul>
          </div>
          <div className="small-card" style={{ borderColor: 'var(--blue-mid)', borderWidth: 2 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--blue-mid)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>KIES LG ALS...</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
              <li>U prijs-kwaliteit prioriteert</li>
              <li>U LFP-chemie prefereert (langer leven, veiliger)</li>
              <li>U al een compatibele omvormer heeft</li>
              <li>U een breed installateurnetwerk in België verkiest</li>
              <li>Compact formaat belangrijk is</li>
            </ul>
          </div>
        </div>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Verder lezen:</strong><br />
            → <Link href="/beste-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Andere merken vergelijken: onze volledige ranglijst</Link><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Actuele prijzen van Tesla, LG en andere merken</Link><br />
            → <Link href="/thuisbatterij-installatie" style={{ color: 'var(--blue-mid)' }}>Installatie-informatie: van plaatsbezoek tot keuring</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="tesla-lg-faq" />

        <CtaBlock
          tekst="Vergelijk prijzen: ontvang offertes voor Tesla én LG →"
          subtekst="3 installateurs · Gratis · Beide merken vergelijken"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
