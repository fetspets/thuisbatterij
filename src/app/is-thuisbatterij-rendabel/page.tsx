import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import CalculatorWidget from '@/components/CalculatorWidget';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Is Een Thuisbatterij Rendabel in België? Eerlijke Analyse (2026)',
  description: 'Is een thuisbatterij rendabel in België? Bereken uw terugverdientijd met onze calculator. Analyse van scenario\'s met en zonder zonnepanelen, premies inbegrepen.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/is-thuisbatterij-rendabel' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Hoeveel jaar duurt het om een thuisbatterij terug te verdienen?',
    antwoord: 'In België ligt de terugverdientijd doorgaans tussen 7 en 14 jaar, afhankelijk van uw situatie. Met zonnepanelen, een hoog verbruik (>4.000 kWh/jaar) en gewestpremies kan de terugverdientijd naar 7–9 jaar zakken. Zonder zonnepanelen is dat eerder 12–16 jaar.',
    schema: true,
  },
  {
    vraag: 'Spelen premies een grote rol in de rendabiliteit?',
    antwoord: 'Ja, premies verkorten de terugverdientijd met 1 tot 3 jaar. In Wallonië, waar premies tot €2.500 kunnen oplopen, is het effect het grootst. Het federale BTW-voordeel van 6% scheelt nog eens €700–€1.500 op een gemiddelde installatie.',
    schema: true,
  },
  {
    vraag: 'Is een thuisbatterij rendabeler bij hogere stroomprijzen?',
    antwoord: 'Absoluut. Elke cent die stroom duurder wordt, verhoogt uw besparing. Bij een stroomprijs van €0,35/kWh bespaart u aanzienlijk meer dan bij €0,25/kWh. De Belgische energieprijs is relatief hoog in Europa, wat de rendabiliteit positief beïnvloedt.',
    schema: true,
  },
  {
    vraag: 'Moet ik wachten tot thuisbatterijen goedkoper worden?',
    antwoord: 'Batterijprijzen dalen gemiddeld 5–10% per jaar. Maar wachten heeft ook een keerzijde: u mist ondertussen besparingen en premies die nu beschikbaar zijn maar later kunnen afnemen of verdwijnen. Bovendien stijgen installatiekosten (lonen). Er is geen "perfect moment".',
    schema: true,
  },
];

export default function RendabelPage() {
  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Is een thuisbatterij rendabel in België? Eerlijke analyse (2026)
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
          De kernvraag van elke Belgische huizenbezitter die overweegt een thuisbatterij te plaatsen: verdien ik dit ooit terug? Het eerlijke antwoord is genuanceerd. In deze gids berekenen we het voor u — met een interactieve calculator en drie realistische scenario&apos;s.
        </p>

        <CtaBlock
          tekst="Ontvang een gepersonaliseerde rendabiliteitsberekening van een installateur →"
          subtekst="Gratis · Vrijblijvend · Op basis van uw reëel verbruik"
          href="/offerte-thuisbatterij"
        />

        {/* H2: Hoe bereken je de terugverdientijd */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Hoe bereken je de terugverdientijd?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          De basisformule is eenvoudig: <strong>terugverdientijd = netto-investering / jaarlijkse besparing</strong>. Maar de variabelen achter die formule zijn dat niet:
        </p>
        <ul style={{ fontSize: 15, color: 'var(--muted)', paddingLeft: 20, marginBottom: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
          <li><strong>Netto-investering:</strong> aankoopprijs minus premies minus BTW-voordeel</li>
          <li><strong>Jaarlijkse besparing:</strong> hangt af van hoeveel stroom u opslaat en het verschil tussen inkoop- en terugleverprijs</li>
          <li><strong>Efficiëntie:</strong> elke laad-/ontlaadcyclus verliest 5–12% energie (rond-om rendement)</li>
          <li><strong>Levensduur:</strong> na 10–15 jaar verliest de batterij capaciteit (gemiddeld 20–30%)</li>
          <li><strong>Energieprijsevolutie:</strong> stijgende stroomprijzen versnellen de terugverdientijd</li>
        </ul>

        {/* Calculator */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Bereken uw persoonlijke terugverdientijd
        </h2>
        <CalculatorWidget />

        {/* H2: Wanneer WEL rendabel */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Wanneer is een thuisbatterij WEL rendabel?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Een thuisbatterij is het meest rendabel als u aan meerdere van deze voorwaarden voldoet:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
          {[
            { check: true, titel: 'U hebt al zonnepanelen', uitleg: 'De batterij slaat overtollige zonne-energie op die u anders aan een lage terugleverprijs kwijtraakt.' },
            { check: true, titel: 'Hoog elektriciteitsverbruik', uitleg: 'Boven 4.000 kWh/jaar profiteert u meer van opslag omdat u meer stroom verbruikt op momenten dat zonnepanelen niet produceren.' },
            { check: true, titel: 'U woont in Wallonië of Brussel', uitleg: 'De hogere premies in deze gewesten verlagen de netto-investering fors.' },
            { check: true, titel: 'Uw woning is > 10 jaar', uitleg: 'U geniet dan van 6% BTW i.p.v. 21%, een besparing van €700–€1.500.' },
            { check: true, titel: 'Uw stroomtarief > €0,30/kWh', uitleg: 'Hoe duurder uw stroom, hoe meer u bespaart door eigen opgewekte energie te gebruiken.' },
            { check: true, titel: 'U wilt blackout-bescherming', uitleg: 'De comfort- en veiligheidswaarde is moeilijk in euro uit te drukken, maar is reëel.' },
          ].map(item => (
            <div key={item.titel} className="small-card" style={{ borderColor: 'var(--green)', borderLeftWidth: 4, borderLeftStyle: 'solid' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--green)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>✓ {item.titel}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{item.uitleg}</div>
            </div>
          ))}
        </div>

        {/* H2: Wanneer NIET rendabel */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Wanneer is een thuisbatterij NIET rendabel?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          We zeggen het eerlijk: een thuisbatterij is niet voor iedereen financieel interessant. In deze situaties is de kans kleiner dat u de investering terugverdient:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
          {[
            { check: false, titel: 'Laag verbruik (< 2.500 kWh/jaar)', uitleg: 'U bespaart te weinig stroom per dag om de investering binnen de levensduur terug te verdienen.' },
            { check: false, titel: 'Geen zonnepanelen en geen dynamisch tarief', uitleg: 'Zonder opwekking of tariefverschillen is er weinig te besparen met opslag.' },
            { check: false, titel: 'Woning jonger dan 10 jaar', uitleg: 'U betaalt 21% BTW i.p.v. 6%, waardoor de netto-investering fors hoger is.' },
            { check: false, titel: 'Verhuisplannen binnen 5 jaar', uitleg: 'De terugverdientijd is minimaal 7 jaar — u geniet niet lang genoeg van de besparing.' },
          ].map(item => (
            <div key={item.titel} className="small-card" style={{ borderColor: 'var(--red)', borderLeftWidth: 4, borderLeftStyle: 'solid' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--red)', marginBottom: 4, fontFamily: 'DM Sans, sans-serif' }}>✗ {item.titel}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>{item.uitleg}</div>
            </div>
          ))}
        </div>

        {/* H2: Scenario's */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Drie scenario&apos;s: van ideaal tot ongunstig
        </h2>
        <div className="table-wrap" style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            <thead>
              <tr style={{ background: 'var(--blue)', color: 'white' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Scenario</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Verbruik</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Zonnepanelen</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Premie</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Netto-investering</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Terugverdientijd</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#F0FDF4', borderBottom: '1px solid var(--rule)' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--green)' }}>Ideaal</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>5.000 kWh/jaar</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>8 kWp</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>€1.500 (Wallonië)</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>~€4.500</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 700, color: 'var(--green)' }}>~7 jaar</td>
              </tr>
              <tr style={{ background: 'var(--amber-light)', borderBottom: '1px solid var(--rule)' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: '#B45309' }}>Gemiddeld</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>3.500 kWh/jaar</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>5 kWp</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>€750 (Vlaanderen)</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>~€6.000</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 700, color: '#B45309' }}>~10 jaar</td>
              </tr>
              <tr style={{ background: 'var(--red-light)', borderBottom: '1px solid var(--rule)' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--red)' }}>Ongunstig</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>2.000 kWh/jaar</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>Geen</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>€0</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>~€8.000</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 700, color: 'var(--red)' }}>&gt;15 jaar</td>
              </tr>
            </tbody>
          </table>
          <p className="disclosure" style={{ padding: '10px 14px' }}>Scenario&apos;s zijn indicatief en gebaseerd op gemiddelde Belgische energieprijzen van €0,30/kWh. Werkelijke cijfers variëren.</p>
        </div>

        {/* H2: Prosumententaks */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Impact van het prosumententarief op rendabiliteit
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          In Vlaanderen is het capaciteitstarief van kracht bij Fluvius. Dit betekent dat u nettarieven betaalt op basis van het vermogen van uw aansluiting, ongeacht uw verbruik. Met een thuisbatterij kunt u uw piekverbruik uit het net verlagen, waardoor uw capaciteitstarief <em>indirect</em> kan dalen — hoewel het effect per situatie sterk verschilt.
        </p>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          In Wallonië en Brussel werkt het systeem anders. Daar is het prosumententarief minder impactvol en draaien de besparingen meer om het verschil tussen aankoopprijs en terugleverprijs van stroom.
        </p>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Verder lezen:</strong><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Wat kost een thuisbatterij in België? Alle prijzen vergeleken</Link><br />
            → <Link href="/thuisbatterij-premie" style={{ color: 'var(--blue-mid)' }}>Premies per gewest: verlaag uw netto-investering</Link><br />
            → <Link href="/hoeveel-kwh-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Hoeveel kWh heeft u nodig? Capaciteitsgids</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="rendabel-faq" />

        <CtaBlock
          tekst="Laat een installateur uw persoonlijke rendabiliteit berekenen →"
          subtekst="Gratis · Op basis van uw werkelijk verbruik · Binnen 48u"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
