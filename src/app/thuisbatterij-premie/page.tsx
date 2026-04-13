import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import PremieCard from '@/components/PremieCard';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBlock from '@/components/CtaBlock';
import { getAllPremies } from '@/lib/premies';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Thuisbatterij Premie België 2026 — Overzicht Per Gewest',
  description: 'Alle premies voor thuisbatterijen in België: Vlaanderen, Wallonië, Brussel en federaal. Bedragen, voorwaarden en aanvraagprocedure. Bijgewerkt april 2026.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/thuisbatterij-premie' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Welke premie kan ik krijgen voor een thuisbatterij in Vlaanderen?',
    antwoord: 'In Vlaanderen kunt u via Fluvius of het Vlaams Energieagentschap een premie van €300 tot €1.500 aanvragen, afhankelijk van de capaciteit van uw batterij en uw specifieke situatie. Combineerbaar met het federale BTW-voordeel van 6%. Controleer steeds de actuele bedragen op fluvius.be.',
    schema: true,
  },
  {
    vraag: 'Kan ik premies combineren met het verlaagd BTW-tarief?',
    antwoord: 'Ja, alle gewestpremies zijn combineerbaar met het federale BTW-voordeel van 6% (voor woningen ouder dan 10 jaar). Het BTW-voordeel wordt automatisch toegepast door uw installateur op de factuur.',
    schema: true,
  },
  {
    vraag: 'Moet ik zonnepanelen hebben om een premie te krijgen?',
    antwoord: 'Dat verschilt per gewest en per premieregeling. In Vlaanderen zijn zonnepanelen meestal vereist. In Wallonië en Brussel is dit niet altijd het geval — de premie kan ook gelden voor batterijen zonder zonnepanelen. Controleer de specifieke voorwaarden.',
    schema: true,
  },
  {
    vraag: 'Hoe vraag ik de premie aan?',
    antwoord: 'De aanvraagprocedure verschilt per gewest. In Vlaanderen verloopt het via Fluvius of het e-loket van VEKA. In Wallonië via energie.wallonie.be. In Brussel via Leefmilieu Brussel. Uw installateur helpt u doorgaans met de aanvraag. Bewaar altijd uw facturen.',
    schema: true,
  },
  {
    vraag: 'Hoe lang zijn de premies nog geldig?',
    antwoord: 'Premies zijn afhankelijk van overheidsbudgetten en kunnen wijzigen of stopgezet worden. Het federale BTW-voordeel van 6% kent geen einddatum. Gewestpremies worden jaarlijks geëvalueerd. Wij raden aan om niet te lang te wachten als u overweegt een thuisbatterij te plaatsen.',
    schema: true,
  },
];

export default function PremiePage() {
  const premies = getAllPremies();

  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>

        <Link href="/" style={{ fontSize: 13, color: 'var(--blue-mid)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Terug naar vergelijking</Link>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2, marginTop: 12 }}>
          Thuisbatterij premie in België: overzicht per gewest (2026)
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          België kent een complex systeem van premies en subsidies op drie niveaus: gewestelijk (Vlaanderen, Wallonië, Brussel) en federaal. In dit overzicht vindt u alle beschikbare premies voor thuisbatterijen, inclusief voorwaarden en aanvraagprocedures.
        </p>

        <div className="warning-box" style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
            <strong>⚠️ Opgelet:</strong> Premiebedragen en voorwaarden wijzigen regelmatig. De informatie op deze pagina is bijgewerkt in <strong>april 2026</strong>. Controleer steeds de officiële websites van uw gewest en netbeheerder voor de meest actuele bedragen.
          </p>
        </div>

        <CtaBlock
          tekst="Een installateur helpt u met uw premieaanvraag — vraag gratis offerte aan →"
          subtekst="Installateurs kennen de actuele premies en helpen bij de aanvraag"
          href="/offerte-thuisbatterij"
        />

        {/* Premies per gewest */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 16 }}>
          Premies in Vlaanderen
        </h2>
        {premies.filter(p => p.gewest === 'Vlaanderen').map(p => <PremieCard key={p.id} premie={p} />)}

        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 16 }}>
          Premies in Wallonië (Primes Énergie)
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Wallonië biedt via het Renolution-programma ruime premies voor energiebesparende investeringen. De premies zijn inkomensafhankelijk: gezinnen met een lager inkomen ontvangen een hogere bijdrage. Dit maakt Wallonië momenteel het gunstigste gewest voor batterij-investeerders met een lager inkomen.
        </p>
        {premies.filter(p => p.gewest === 'Wallonië').map(p => <PremieCard key={p.id} premie={p} />)}

        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 16 }}>
          Premies in Brussels Hoofdstedelijk Gewest
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          In Brussel verloopt de subsidiëring via Leefmilieu Brussel, onderdeel van het bredere Renolution-kader. De premie varieert naar gelang uw inkomen en gezinssamenstelling. Appartementen komen ook in aanmerking, mits akkoord van de VME (Vereniging van Mede-Eigenaars).
        </p>
        {premies.filter(p => p.gewest === 'Brussel').map(p => <PremieCard key={p.id} premie={p} />)}

        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 16 }}>
          Federaal BTW-voordeel
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Het federale BTW-voordeel is het meest toegankelijke voordeel: als uw woning ouder is dan 10 jaar, betaalt u automatisch 6% BTW op de aankoop en installatie in plaats van het standaardtarief van 21%. Dit is een significante besparing die door uw installateur automatisch op de factuur wordt verwerkt.
        </p>
        {premies.filter(p => p.gewest === 'Federaal').map(p => <PremieCard key={p.id} premie={p} />)}

        {/* Combineerbaarheid */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Welke premies zijn combineerbaar?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
          Goed nieuws: de meeste premies zijn onderling combineerbaar. De belangrijkste combinaties:
        </p>
        <div className="success-box">
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
            <li><strong>Gewestpremie + Federaal BTW 6%:</strong> altijd combineerbaar</li>
            <li><strong>Meerdere gemeentelijke premies:</strong> sommige gemeenten bieden extra premies bovenop de gewestpremie — informeer bij uw gemeente</li>
            <li><strong>Premie + groenestroomcertificaten:</strong> groenestroomcertificaten (GCS) zijn apart en worden niet verrekend met de premie</li>
          </ul>
        </div>

        {/* Stap-voor-stap */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--ink)', marginTop: 36, marginBottom: 12 }}>
          Premie aanvragen: stap voor stap
        </h2>
        <div style={{ marginBottom: 24 }}>
          {[
            { stap: 1, titel: 'Vraag offertes aan', beschrijving: 'Verzamel minstens 3 offertes van gecertificeerde installateurs. Zij weten welke premies op uw situatie van toepassing zijn.' },
            { stap: 2, titel: 'Kies installateur en plan installatie', beschrijving: 'Selecteer de offerte die het beste past. Sommige premies vereisen een aanvraag vóór de installatie — check dit!' },
            { stap: 3, titel: 'Installatie en keuring', beschrijving: 'Na installatie volgt een AREI-keuring. Bewaar alle facturen en certificaten.' },
            { stap: 4, titel: 'Dien premieaanvraag in', beschrijving: 'Dien uw aanvraag in via het e-loket van uw gewest (Fluvius, Renolution, Leefmilieu Brussel). Uw installateur helpt hierbij.' },
            { stap: 5, titel: 'Ontvang uitbetaling', beschrijving: 'Na goedkeuring ontvangt u de premie op uw rekening. Doorlooptijd: 4 tot 16 weken afhankelijk van het gewest.' },
          ].map(s => (
            <div key={s.stap} style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: 16, flexShrink: 0 }}>
                {s.stap}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 2, fontFamily: 'DM Sans, sans-serif' }}>{s.titel}</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>{s.beschrijving}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Interne links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Gerelateerde gidsen:</strong><br />
            → <Link href="/is-thuisbatterij-rendabel" style={{ color: 'var(--blue-mid)' }}>Is een thuisbatterij rendabel? Bereken uw terugverdientijd</Link><br />
            → <Link href="/thuisbatterij-installatie" style={{ color: 'var(--blue-mid)' }}>Installatieproces: van offerte tot ingebruikname</Link><br />
            → <Link href="/offerte-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Ontvang 3 gratis offertes van installateurs</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="premie-faq" />

        <CtaBlock
          tekst="Laat een installateur uw premies uitzoeken — vraag gratis offerte aan →"
          subtekst="Installateurs kennen de actuele premies en helpen bij de aanvraag"
          href="/offerte-thuisbatterij"
          variant="banner"
        />
      </div>
    </>
  );
}
