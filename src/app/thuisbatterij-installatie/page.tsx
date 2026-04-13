import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Thuisbatterij Installatie België — Stap voor Stap Gids (2026)',
  description: 'Hoe verloopt de installatie van een thuisbatterij in België? Stap-voor-stap uitleg: van offerte tot netaanmelding bij Fluvius, ORES of Sibelga. AREI-vereisten.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/thuisbatterij-installatie' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Hoe lang duurt de installatie van een thuisbatterij?',
    antwoord: 'De fysieke installatie duurt doorgaans een halve tot een hele werkdag. Het volledige traject (inclusief offerte, plaatsbezoek, bestelling en netaanmelding) neemt 4 tot 12 weken in beslag, afhankelijk van de beschikbaarheid van materiaal en de drukte bij installateurs.',
    schema: true,
  },
  {
    vraag: 'Heb ik een vergunning nodig voor een thuisbatterij?',
    antwoord: 'In de meeste gevallen niet. Een thuisbatterij voor particulier gebruik valt niet onder de stedenbouwkundige vergunningsplicht. Wel is een AREI-keuring na installatie verplicht, en moet de installatie gemeld worden bij uw netbeheerder.',
    schema: true,
  },
  {
    vraag: 'Wie mag een thuisbatterij installeren?',
    antwoord: 'Alleen een erkend elektricien (AREI-gecertificeerd) mag een thuisbatterij installeren. De installateur moet beschikken over de juiste certificaten voor het specifieke merk. Vraag altijd bewijs van certificatie.',
    schema: true,
  },
  {
    vraag: 'Hoeveel kost de installatie alleen (zonder batterij)?',
    antwoord: 'De installatiekosten liggen doorgaans tussen €800 en €2.000, afhankelijk van de complexiteit. Factoren: afstand tussen meterkast en batterijplaatsing, type bedrading, eventuele upgrade van de meterkast, en of u een nieuwe omvormer nodig heeft.',
    schema: true,
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Thuisbatterij installeren in België",
  "step": [
    { "@type": "HowToStep", "name": "Offerte aanvragen", "text": "Vraag minstens 3 offertes aan bij gecertificeerde installateurs." },
    { "@type": "HowToStep", "name": "Plaatsbezoek", "text": "De installateur bezoekt uw woning om de technische haalbaarheid te beoordelen." },
    { "@type": "HowToStep", "name": "Materiaalbestelling", "text": "Na goedkeuring bestelt de installateur de batterij. Levertijd: 2–8 weken." },
    { "@type": "HowToStep", "name": "Installatie", "text": "De elektricien installeert de batterij, omvormer en bekabeling. Duur: 4–8 uur." },
    { "@type": "HowToStep", "name": "AREI-keuring", "text": "Een onafhankelijk keuringsorganisme controleert de installatie." },
    { "@type": "HowToStep", "name": "Netaanmelding", "text": "De installatie wordt gemeld bij uw netbeheerder (Fluvius, ORES of Sibelga)." },
  ],
};

export default function InstallatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Thuisbatterij installeren in België: wat u moet weten
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          Het installatieproces van een thuisbatterij is minder complex dan veel mensen denken — maar er komt meer bij kijken dan enkel de batterij ophangen. Van AREI-vereisten tot netaanmelding bij uw regionale netbeheerder: deze gids begeleidt u stap voor stap.
        </p>

        <CtaBlock
          tekst="Zoek een gecertificeerde installateur in uw regio →"
          subtekst="3 gratis offertes · AREI-erkend · Binnen 48u reactie"
          href="/offerte-thuisbatterij"
        />

        {/* Stap-voor-stap */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 16 }}>
          Het installatieproces in 6 stappen
        </h2>
        {[
          {
            stap: 1, titel: 'Offerte aanvragen',
            beschrijving: 'Begin met het aanvragen van minstens 3 vergelijkende offertes. Een goede offerte bevat: prijs batterij + omvormer + installatie + netaanmelding + BTW. Vraag ook naar de levertijd en garantievoorwaarden.',
            tip: 'Vergelijk niet alleen op prijs, maar ook op advies, ervaring met uw merk en reputatie.',
          },
          {
            stap: 2, titel: 'Plaatsbezoek door installateur',
            beschrijving: 'Een serieuze installateur plant een plaatsbezoek. Tijdens dit bezoek controleert de elektricien: de staat van uw meterkast, de beschikbare ruimte voor de batterij, de bestaande bedrading, en de compatibiliteit met uw zonnepanelen/omvormer.',
            tip: 'Als een installateur géén plaatsbezoek doet, is dat een rode vlag.',
          },
          {
            stap: 3, titel: 'Materiaalbestelling',
            beschrijving: 'Na goedkeuring van de offerte bestelt de installateur de batterij en eventuele bijkomende materialen. De levertijd varieert van 2 tot 8 weken, afhankelijk van het merk en de beschikbaarheid.',
            tip: 'Populaire merken als Tesla kunnen langere levertijden hebben. Vraag ernaar voor u tekent.',
          },
          {
            stap: 4, titel: 'Installatie',
            beschrijving: 'De fysieke installatie duurt doorgaans een halve tot een hele werkdag. De elektricien monteert de batterij (doorgaans aan de wand in garage of technische ruimte), verbindt deze met de meterkast en omvormer, en configureert de software.',
            tip: 'Zorg dat de ruimte vrij en bereikbaar is. De batterij weegt 50–120 kg.',
          },
          {
            stap: 5, titel: 'AREI-keuring',
            beschrijving: 'Na installatie is een AREI-keuring verplicht in België. Een onafhankelijk keuringsorganisme (bijv. Vinçotte, BTV, AIB) controleert of de installatie voldoet aan alle veiligheidsnormen. De kosten bedragen €150–€300.',
            tip: 'Uw installateur plant doorgaans de keuring voor u. Vraag hier expliciet naar.',
          },
          {
            stap: 6, titel: 'Netaanmelding en ingebruikname',
            beschrijving: 'De installatie moet gemeld worden bij uw netbeheerder. In Vlaanderen is dat Fluvius, in Wallonië ORES of RESA, in Brussel Sibelga. Na registratie is uw systeem officieel operationeel.',
            tip: 'Uw installateur verzorgt de netaanmelding meestal. Controleer dit in de offerte.',
          },
        ].map(s => (
          <div key={s.stap} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: 18, flexShrink: 0 }}>
              {s.stap}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{s.titel}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', marginBottom: 6 }}>{s.beschrijving}</p>
              <div style={{ fontSize: 13, color: 'var(--blue-mid)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>💡 {s.tip}</div>
            </div>
          </div>
        ))}

        {/* AREI */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          AREI-vereisten en wettelijke verplichtingen
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Het Algemeen Reglement op de Elektrische Installaties (AREI) is de wettelijke basis voor alle elektrische installaties in België. Specifiek voor thuisbatterijen gelden:
        </p>
        <ul style={{ fontSize: 14, color: 'var(--muted)', paddingLeft: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2, marginBottom: 16 }}>
          <li>Installatie door een <strong>erkend elektricien (BA4/BA5)</strong></li>
          <li>Verplichte AREI-keuring na installatie door een onafhankelijk organisme</li>
          <li>Correcte aarding en bescherming tegen overbelasting</li>
          <li>Plaatsing in een droge, geventileerde ruimte (min. 0°C, max. 45°C)</li>
          <li>Eenlijntekenschema en situatieplan bijgewerkt na installatie</li>
        </ul>

        {/* Installatiekosten */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Installatiekosten: wat rekenen installateurs aan?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          De installatiekosten (exclusief de batterij zelf) bedragen in België doorgaans <strong>€800 tot €2.000</strong>. Dit omvat:
        </p>
        <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            <thead>
              <tr style={{ background: 'var(--blue)', color: 'white' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Kostenpost</th>
                <th style={{ padding: '10px 14px', textAlign: 'center' }}>Bereik</th>
              </tr>
            </thead>
            <tbody>
              {[
                { post: 'Installatie loon (4–8u)', bereik: '€400 – €800' },
                { post: 'Bekabeling en aansluitmateriaal', bereik: '€100 – €300' },
                { post: 'Upgrade meterkast (indien nodig)', bereik: '€200 – €600' },
                { post: 'AREI-keuring', bereik: '€150 – €300' },
                { post: 'Netaanmelding (Fluvius/ORES/Sibelga)', bereik: '€50 – €100' },
              ].map((k, i) => (
                <tr key={k.post} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#F9FAFB' }}>
                  <td style={{ padding: '12px 14px' }}>{k.post}</td>
                  <td style={{ padding: '12px 14px', textAlign: 'center', fontWeight: 700 }}>{k.bereik}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Netbeheerders */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Netbeheerders per regio
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { regio: 'Vlaanderen', beheerder: 'Fluvius', taken: 'Aansluiting, digitale meter, prosumententarief' },
            { regio: 'Wallonië', beheerder: 'ORES / RESA', taken: 'Aansluiting, meterregistratie, terugleverrekening' },
            { regio: 'Brussel', beheerder: 'Sibelga', taken: 'Aansluiting, meterwijziging, teruglevering' },
          ].map(n => (
            <div key={n.regio} className="small-card">
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--blue)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>{n.regio}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{n.beheerder}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{n.taken}</div>
            </div>
          ))}
        </div>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Gerelateerde gidsen:</strong><br />
            → <Link href="/thuisbatterij-premie" style={{ color: 'var(--blue-mid)' }}>Na installatie: premie aanvragen per gewest</Link><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Wat kost een thuisbatterij inclusief installatie?</Link><br />
            → <Link href="/beste-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Welke batterij kiezen voor uw situatie?</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="installatie-faq" />

        <CtaBlock
          tekst="Vind een gecertificeerde installateur in uw buurt →"
          subtekst="3 gratis offertes · AREI-erkend · Inclusief hulp bij premieaanvraag"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
