import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ComparisonTable from '@/components/ComparisonTable';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import { getTopBatteries, getBatteriesBy } from '@/lib/batteries';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Beste Thuisbatterij België 2026 — Onze Ranglijst & Vergelijking',
  description: 'Welke thuisbatterij is de beste keuze voor uw woning? Onze ranglijst voor 2026: Tesla, LG, Sonnen, Huawei vergeleken op kwaliteit, prijs en garantie.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/beste-thuisbatterij' },
  openGraph: {
    title: 'Beste Thuisbatterij België 2026 — Ranglijst',
  },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Welke thuisbatterij is de beste in België in 2026?',
    antwoord: 'Op basis van onze vergelijking scoort de Tesla Powerwall 3 het hoogst voor all-in gemak en hoge capaciteit. De LG RESU 10H Prime biedt de beste prijs-kwaliteit voor gemiddelde huishoudens. De Huawei LUNA 2000 wint op vlak van betaalbaarheid en flexibiliteit.',
    schema: true,
  },
  {
    vraag: 'Wat is het verschil tussen LFP en NMC thuisbatterijen?',
    antwoord: 'LFP (lithium-ijzerfosfaat) is veiliger, heeft een langere levensduur (6.000–10.000 cycli) maar iets lagere energiedichtheid. NMC (nikkel-mangaan-kobalt) heeft hogere energiedichtheid maar kortere levensduur (3.000–5.000 cycli) en iets hoger brandrisico. Voor thuisgebruik wordt LFP steeds meer de standaard.',
    schema: true,
  },
  {
    vraag: 'Welke thuisbatterij is het beste voor blackout-bescherming?',
    antwoord: 'Voor volledige blackout-bescherming (off-grid bij stroomuitval) zijn de Tesla Powerwall 3, Huawei LUNA 2000 en sonnen eco 8 de beste keuzes. De LG RESU in standaard configuratie biedt geen volledige blackout-bescherming zonder extra omvormermodule.',
    schema: true,
  },
  {
    vraag: 'Welke thuisbatterij heeft de langste garantie?',
    antwoord: 'sonnen en SOLARWATT bieden beide een 10-jaar garantie die ook het aantal laadcycli dekt (respectievelijk 10.000 en 8.000 cycli). Tesla, LG en Huawei bieden standaard 10 jaar productwaarborg. Vergelijk ook de vermogensretentie-garantie: hoeveel capaciteit behoudt de batterij na X jaar?',
    schema: true,
  },
];

export default function BesteThuisbatterijPage() {
  const topBatteries = getTopBatteries(5);
  const blackoutBatteries = getBatteriesBy('blackout');
  const lfpBatteries = getBatteriesBy('lfp');

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beste thuisbatterijen België 2026 — Ranglijst",
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
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          De beste thuisbatterij in België: onze ranglijst voor 2026
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          Niet alle thuisbatterijen zijn gelijk. Wij vergeleken {topBatteries.length} merken op capaciteit, chemie, garantie, installatiegemak en prijs-kwaliteit — specifiek voor de Belgische markt. Hier is onze eerlijke, onafhankelijke ranglijst.
        </p>

        <CtaBlock
          tekst="Ontvang offertes voor de batterijen in deze ranglijst →"
          subtekst="3 installateurs · Gratis · Vrijblijvend"
          href="/offerte-thuisbatterij"
        />

        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 16 }}>
          Onze top 5 beste thuisbatterijen
        </h2>

        {topBatteries.map((battery, i) => (
          <div key={battery.slug} id={battery.slug} className={`ranking-card${i === 0 ? ' top' : ''}`}>
            <div style={{ padding: '20px 22px' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 40, height: 40, background: i === 0 ? 'var(--amber)' : 'var(--blue-light)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: i === 0 ? 'var(--ink)' : 'var(--blue)', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                    <div>
                      {i === 0 && <span style={{ background: 'var(--amber)', color: 'var(--ink)', fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 20, marginRight: 8, fontFamily: 'DM Sans, sans-serif' }}>BESTE KEUZE</span>}
                      <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)', display: 'inline' }}>{battery.naam}</h3>
                    </div>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 26, fontWeight: 900, color: 'var(--blue)' }}>{battery.score.totaal}<span style={{ fontSize: 13, color: 'var(--muted)' }}>/10</span></span>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>{battery.beschrijving}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>Voordelen</div>
                      {battery.pros.map((p, pi) => <div key={pi} style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>✓ {p}</div>)}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>Aandachtspunten</div>
                      {battery.cons.map((c, ci) => <div key={ci} style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>— {c}</div>)}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                    <span style={{ fontSize: 12, background: 'var(--blue-light)', color: 'var(--blue-mid)', padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif' }}>
                      {battery.capaciteit.label}
                    </span>
                    <span style={{ fontSize: 12, background: battery.chemie === 'LFP' ? 'var(--green-light)' : 'var(--blue-light)', color: battery.chemie === 'LFP' ? 'var(--green)' : 'var(--blue-mid)', padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif' }}>
                      {battery.chemie}
                    </span>
                    <span style={{ fontSize: 12, background: 'var(--cream)', color: 'var(--muted)', padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif' }}>
                      {battery.garantie} jaar garantie
                    </span>
                    {battery.blackout && <span style={{ fontSize: 12, background: 'var(--amber-light)', color: '#B45309', padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif' }}>⚡ Blackout-bescherming</span>}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)' }}>
                      {battery.prijsBereik.label} <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 400, fontFamily: 'DM Sans, sans-serif' }}>incl. installatie</span>
                    </span>
                    <Link href={`/ga/${battery.slug}`} style={{ background: 'var(--blue)', color: 'white', padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                      Bekijk actuele prijzen →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Volledige vergelijkingstabel */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Vergelijkingstabel: alle specs naast elkaar
        </h2>
        <ComparisonTable brands={topBatteries} />

        {/* Sub-aanbevelingen */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 16 }}>
          Welke batterij past bij uw situatie?
        </h2>

        {[
          {
            titel: 'Voor kleine woningen of appartementen (< 4.000 kWh/jaar)',
            aanbeveling: 'LG RESU 10H Prime',
            uitleg: 'Compacte afmetingen, wallmount design, LFP-chemie voor maximale levensduur. Ideaal als u een beperkte installatieruimte heeft en gemiddeld verbruik.',
            slug: 'lg-resu-10h-prime',
          },
          {
            titel: 'Voor grote woningen of gezinnen (> 5.000 kWh/jaar)',
            aanbeveling: 'Tesla Powerwall 3 of Huawei LUNA 2000',
            uitleg: 'De Tesla Powerwall 3 biedt 13,5 kWh en een geïntegreerde omvormer. De Huawei LUNA 2000 is modulair tot 30 kWh — ideaal als u veel vermogen nodig heeft.',
            slug: 'tesla-powerwall-3',
          },
          {
            titel: 'Voor wie blackout-bescherming prioriteit geeft',
            aanbeveling: 'Tesla Powerwall 3, sonnen eco 8 of Huawei LUNA 2000',
            uitleg: 'Deze drie systemen bieden volledige off-grid werking bij stroomuitval. Essentieel voor wie afhankelijk is van medische apparatuur of in een regio met frequente storingen woont.',
            slug: 'sonnen-eco-8',
          },
          {
            titel: 'Beste prijs-kwaliteit',
            aanbeveling: 'Huawei LUNA 2000',
            uitleg: 'Met een instapprijs van €4.000–€10.000 (modulair), 95% efficiëntie en driefasige ondersteuning biedt Huawei de meeste kWh voor uw euro. Beste keuze als u een Huawei omvormer heeft.',
            slug: 'huawei-luna-2000',
          },
        ].map(rec => (
          <div key={rec.slug} className="small-card" style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{rec.titel}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'white', background: 'var(--blue)', padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif' }}>Aanbeveling</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)', fontFamily: 'DM Sans, sans-serif' }}>{rec.aanbeveling}</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif', margin: 0 }}>{rec.uitleg}</p>
          </div>
        ))}

        {/* Tesla vs LG */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 1.8 }}>
            <strong>Uitgebreide vergelijking:</strong> <Link href="/tesla-vs-lg-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Tesla Powerwall vs. LG RESU — welke is beter voor België?</Link><br />
            <strong>Capaciteitsadvies:</strong> <Link href="/hoeveel-kwh-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Hoeveel kWh heeft uw thuisbatterij nodig?</Link><br />
            <strong>Prijzen:</strong> <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Actuele prijzen en kostopbouw</Link>
          </p>
        </div>

        {/* Methodologie */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Hoe hebben we beoordeeld?
        </h2>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', marginBottom: 8 }}>
          Onze rangschikking is gebaseerd op <strong>6 criteria</strong>, elk gewogen op basis van relevantie voor Belgische huishoudens:
        </p>
        <ul style={{ fontSize: 14, color: 'var(--muted)', paddingLeft: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
          <li><strong>Kwaliteit (25%):</strong> batterijchemie, bouwkwaliteit, brand track record</li>
          <li><strong>Prijs (20%):</strong> prijs per kWh, prijs-kwaliteitsverhouding</li>
          <li><strong>Garantie (20%):</strong> duur, cyclusgarantie, capaciteitsretentie</li>
          <li><strong>Technologie (20%):</strong> efficiëntie, software, ecosysteem</li>
          <li><strong>Installatie (15%):</strong> netwerk in België, installatiegemak</li>
        </ul>
        <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 8 }}>
          Geen enkel merk betaalt voor een hogere positie. Bijgewerkt april 2026.
        </p>

        <FaqAccordion items={faqItems} schemaId="beste-faq" />

        <CtaBlock
          tekst="Klaar? Vraag gratis offertes aan voor uw favoriete batterij →"
          subtekst="3 offertes · Gecertificeerde installateurs · Binnen 48u"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
