import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ComparisonTable from '@/components/ComparisonTable';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import CalculatorWidget from '@/components/CalculatorWidget';
import { getTopBatteries } from '@/lib/batteries';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Thuisbatterij Prijs België 2026 — Wat Mag Je Verwachten?',
  description: 'Wat kost een thuisbatterij in België? Prijzen per merk, inclusief installatie. Tesla, LG, Sonnen, Huawei vergeleken. Bereken uw netto-investering na premies.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/thuisbatterij-prijs' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Wat kost een thuisbatterij van 10 kWh in België?',
    antwoord: 'Een thuisbatterij van 10 kWh kost in België inclusief installatie doorgaans tussen €5.500 en €9.500, afhankelijk van het merk en de installateur. De Huawei LUNA 2000 (10 kWh) is een van de meest betaalbare opties. De Tesla Powerwall 3 (13,5 kWh, all-in-one) zit hoger: €9.000–€13.000.',
    schema: true,
  },
  {
    vraag: 'Zijn installatiekosten inbegrepen in de prijs?',
    antwoord: 'Dat hangt af van hoe de offerte is opgesteld. Vraag altijd een offerte "all-in": batterij + omvormer (indien nodig) + installatie + netaanmelding bij Fluvius/ORES/Sibelga. Installatiekosten alleen liggen doorgaans tussen €800 en €2.000.',
    schema: true,
  },
  {
    vraag: 'Hoe vergelijk je de prijs van thuisbatterijen eerlijk?',
    antwoord: 'Vergelijk altijd de prijs per bruikbare kWh: deel de totale prijs door het aantal kWh capaciteit. Een "goedkopere" batterij met minder capaciteit is niet altijd de beste deal. Houd ook rekening met garantieduur, efficiëntie en installatiekosten.',
    schema: true,
  },
  {
    vraag: 'Wat is de prijs na aftrek van premies?',
    antwoord: 'Na aftrek van gewestpremies (€300–€2.500 afhankelijk van gewest) en het federale BTW-voordeel van 6% kan de netto-investering aanzienlijk lager uitvallen. In Wallonië kunnen premies oplopen tot €2.500 voor lagere inkomens. Vraag altijd bij uw installateur na welke premies op uw situatie van toepassing zijn.',
    schema: true,
  },
  {
    vraag: 'Is een goedkopere thuisbatterij een risico?',
    antwoord: 'Niet per se, maar let op: onbekende merken bieden soms minder garantie, hebben beperktere software en een kleiner installateurnetwerk. Kies bij voorkeur voor een merk met minstens 10 jaar garantie en een bewezen aanwezigheid op de Belgische markt.',
    schema: true,
  },
];

export default function PrijsPage() {
  const batteries = getTopBatteries(5);

  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <div style={{ marginBottom: 8 }}>
          <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>
        </div>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2 }}>
          Thuisbatterij prijs in België: wat mag je verwachten in 2026?
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          De prijs van een thuisbatterij is een van de eerste vragen die Belgische huizenbezitters stellen. Het antwoord is genuanceerd: de kostprijs hangt af van capaciteit, merk, omvormertype en installateur. In deze gids leggen we alles uit — zonder verborgen kosten te verzwijgen.
        </p>

        <CtaBlock
          tekst="Ontvang een gepersonaliseerde prijsofferte in uw regio →"
          subtekst="Gratis · Vrijblijvend · Gecertificeerde installateurs"
          href="/offerte-thuisbatterij"
        />

        {/* H2: Prijs per merk */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Prijs per merk: vergelijkingstabel
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
          Onderstaande prijzen zijn <strong>indicatieve bereiken inclusief installatie</strong>. De werkelijke prijs hangt af van uw situatie (type omvormer, meterkast, drukte bij installateurs).
        </p>
        <ComparisonTable brands={batteries} />

        {/* H2: Kostopbouw */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Wat bepaalt de prijs van een thuisbatterij?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          De eindprijs is opgebouwd uit meerdere componenten. Als u offertes vergelijkt, is het belangrijk te weten wat <em>inbegrepen</em> is:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Batterijmodule', pct: '~55–65%', beschrijving: 'Het opslagmedium zelf (LFP, NMC, enz.) — het duurste onderdeel.' },
            { label: 'Installatie & bedrading', pct: '~20–30%', beschrijving: 'Loon van de elektricien, kabelwerk, inregeling.' },
            { label: 'Omvormer / hybride omvormer', pct: '~10–20%', beschrijving: 'Soms al inbegrepen (Tesla) — soms apart aan te kopen.' },
            { label: 'Netaanmelding (Fluvius/ORES)', pct: 'Vast bedrag', beschrijving: 'Administratieve aanmelding bij uw netbeheerder, wettelijk verplicht.' },
          ].map(item => (
            <div key={item.label} className="small-card">
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: 'var(--blue)', marginBottom: 4 }}>{item.pct}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>{item.label}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{item.beschrijving}</div>
            </div>
          ))}
        </div>

        {/* H2: Prijs incl vs excl installatie */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Prijs exclusief vs. inclusief installatie: het verschil
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          Sommige webshops adverteren met lage "materiaalkosten" maar vermelden de installatie apart. In de praktijk rekent een erkende Belgische elektricien <strong>€800 tot €2.000</strong> voor de installatie van een thuisbatterij, afhankelijk van:
        </p>
        <ul style={{ fontSize: 15, color: 'var(--muted)', paddingLeft: 20, marginBottom: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
          <li>De afstand tussen meterkast en batterijplaatsing</li>
          <li>Of de meterkast een upgrade nodig heeft</li>
          <li>Of er een nieuwe hybride omvormer nodig is</li>
          <li>Het type woning (appartement vs. vrijstaande woning)</li>
          <li>De drukte bij de installateur (levertijden kunnen 4–12 weken zijn)</li>
        </ul>

        <div className="warning-box">
          <strong style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14 }}>⚠️ Tip:</strong>
          <p style={{ margin: '8px 0 0', fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
            Vraag altijd een <strong>all-in offerte</strong>: batterij + omvormer + installatie + netaanmelding + BTW. Zo vergelijkt u appels met appels.
            Gebruik onze tool om minstens 3 offertes te verzamelen.
          </p>
        </div>

        {/* H2: Prijs per kWh */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Prijs per kWh: zo vergelijkt u eerlijk
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          De meest objectieve manier om batterijen te vergelijken is de <strong>prijs per bruikbare kWh</strong>.
          Deel de totale all-in prijs door de bruikbare capaciteit. Gemiddeld ligt dat in België tussen <strong>€600 en €900 per kWh</strong>. Goedkopere opties (Huawei, LG) zitten dichter bij €600; premiummodellen (Tesla, sonnen) dichter bij €800–900.
        </p>

        <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            <thead>
              <tr style={{ background: 'var(--blue)', color: 'white' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Merk</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Capaciteit</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Prijs (bereik)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Prijs/kWh</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((b, i) => (
                <tr key={b.slug} style={{ background: i % 2 === 0 ? 'white' : '#F9FAFB', borderBottom: '1px solid var(--rule)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>{b.naam}</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center' }}>{b.capaciteit.label}</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center' }}>{b.prijsBereik.label}</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center', fontWeight: 700, color: 'var(--blue)' }}>
                    €{Math.round(b.prijsBereik.min / b.capaciteit.max)}–€{Math.round(b.prijsBereik.max / b.capaciteit.max)}/kWh
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2: Netto-investering na premies */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Netto-investering na premies en BTW-voordeel
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          De werkelijke netto-kost van een thuisbatterij is lager dan de brutoprijzen doen vermoeden. Dankzij het federale BTW-tarief van 6% (i.p.v. 21% voor woningen ouder dan 10 jaar) en gewestelijke premies kunt u fors besparen:
        </p>
        <ul style={{ fontSize: 15, color: 'var(--muted)', paddingLeft: 20, marginBottom: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
          <li><strong>BTW-voordeel 6%:</strong> bespaart u €700–€1.500 op een gemiddelde installatie van €8.000</li>
          <li><strong>Premies Vlaanderen:</strong> €300–€1.500 extra aftrek</li>
          <li><strong>Premies Wallonië:</strong> tot €2.500 bij lagere inkomens</li>
          <li><strong>Premies Brussel:</strong> tot €2.000 via Leefmilieu Brussel</li>
        </ul>
        <p style={{ fontSize: 15, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          → Meer details: <Link href="/thuisbatterij-premie" style={{ color: 'var(--blue-mid)' }}>volledig premie-overzicht per gewest</Link>
        </p>

        {/* Calculator */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Bereken uw terugverdientijd
        </h2>
        <CalculatorWidget />

        {/* H2: Wanneer niet de goedkoopste */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Goedkoopste is niet altijd de beste keuze
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
          Bij de aankoop van een thuisbatterij gaat het om een investering voor 10–20 jaar. Goedkopere merken zonder bewezen staat van dienst kunnen hogere risico&apos;s met zich meebrengen:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { risico: 'Kortere garantie', uitleg: 'Sommige goedkopere merken bieden slechts 5 jaar garantie in plaats van de standaard 10 jaar.' },
            { risico: 'Minder installateurs', uitleg: 'Onbekendere merken hebben minder gecertificeerde installateurs — moeilijker voor onderhoud.' },
            { risico: 'Slechte software', uitleg: 'De beheers-app is cruciaal voor optimalisatie. Goedkope systemen presteren soms 15–20% slechter door slechte sturing.' },
          ].map(r => (
            <div key={r.risico} className="small-card">
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>⚠️ {r.risico}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{r.uitleg}</div>
            </div>
          ))}
        </div>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Gerelateerde gidsen:</strong><br />
            → <Link href="/is-thuisbatterij-rendabel" style={{ color: 'var(--blue-mid)' }}>Is een thuisbatterij rendabel in België?</Link><br />
            → <Link href="/beste-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Onze ranglijst van de beste thuisbatterijen</Link><br />
            → <Link href="/thuisbatterij-premie" style={{ color: 'var(--blue-mid)' }}>Alle premies per gewest</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="prijs-faq" />

        <CtaBlock
          tekst="Vraag gratis offertes aan — vergelijk prijzen van 3 installateurs →"
          subtekst="Gratis · Vrijblijvend · Gecertificeerde installateurs in uw regio"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
