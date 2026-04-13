import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import type { FaqItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Gratis Offerte Thuisbatterij België — 3 Offertes in 48u',
  description: 'Ontvang 3 gratis, vrijblijvende offertes voor een thuisbatterij van gecertificeerde installateurs in uw regio. Binnen 48 uur reactie. GDPR-conform.',
  alternates: { canonical: 'https://thuisbatterijbelgie.be/offerte-thuisbatterij' },
};

const faqItems: FaqItem[] = [
  {
    vraag: 'Is het aanvragen van offertes echt gratis?',
    antwoord: 'Ja, het aanvragen van offertes via onze site is 100% gratis en vrijblijvend. U betaalt pas als u daadwerkelijk besluit om met een installateur in zee te gaan. Er zijn geen verborgen kosten of verplichtingen.',
    schema: true,
  },
  {
    vraag: 'Hoe snel ontvang ik de offertes?',
    antwoord: 'Na het invullen van het formulier ontvangt u doorgaans binnen 48 uur een eerste reactie van installateurs in uw regio. Het opstellen van een definitieve offerte kan langer duren als een plaatsbezoek nodig is.',
    schema: true,
  },
  {
    vraag: 'Wat gebeurt er met mijn gegevens?',
    antwoord: 'Uw gegevens worden uitsluitend gebruikt om uw offerteaanvraag te verwerken en door te sturen naar gecertificeerde installateurs in uw regio. Wij delen uw gegevens niet met derden voor marketingdoeleinden. Onze verwerking is GDPR-conform.',
    schema: true,
  },
  {
    vraag: 'Moet ik al weten welke thuisbatterij ik wil?',
    antwoord: 'Nee, dat hoeft niet. De installateur adviseert u over de meest geschikte batterij op basis van uw verbruik, uw zonnepanelen en uw wensen. U kunt eventueel een voorkeur opgeven in het formulier.',
    schema: true,
  },
];

export default function OffertePage() {
  return (
    <>
      <TrustBar />
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 20px' }}>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2 }}>
            Ontvang 3 gratis offertes voor uw thuisbatterij
          </h1>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 20px', fontFamily: 'DM Sans, sans-serif' }}>
            Vul het formulier in en ontvang binnen 48 uur vrijblijvende offertes van gecertificeerde installateurs in uw regio. Vergelijk prijs, kwaliteit en service — en kies de offerte die bij u past.
          </p>

          {/* Hoe werkt het */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { stap: '1', titel: 'Vul formulier in', beschrijving: '2 minuten' },
              { stap: '2', titel: 'Installateurs reageren', beschrijving: 'Binnen 48u' },
              { stap: '3', titel: 'Vergelijk & kies', beschrijving: 'Vrijblijvend' },
            ].map(s => (
              <div key={s.stap} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 100 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: 18 }}>
                  {s.stap}
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif' }}>{s.titel}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>{s.beschrijving}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead form */}
        <LeadForm />

        {/* Trust elements */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 28 }}>
          {[
            { icon: '🛡️', titel: 'GDPR-conform', beschrijving: 'Uw gegevens zijn veilig' },
            { icon: '💰', titel: '100% gratis', beschrijving: 'Geen verborgen kosten' },
            { icon: '⚡', titel: 'Snel', beschrijving: 'Reactie binnen 48 uur' },
            { icon: '✅', titel: 'Gecertificeerd', beschrijving: 'AREI-erkende installateurs' },
          ].map(t => (
            <div key={t.titel} style={{ textAlign: 'center', padding: '16px 12px' }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{t.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif', marginBottom: 2 }}>{t.titel}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>{t.beschrijving}</div>
            </div>
          ))}
        </div>

        {/* Waarom vergelijken */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: 'var(--ink)', marginTop: 40, marginBottom: 12 }}>
          Waarom vergelijkende offertes aanvragen?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', marginBottom: 16 }}>
          De prijs van een thuisbatterij kan fors verschillen tussen installateurs — ook voor exact hetzelfde product. Door meerdere offertes te vergelijken bespaart u gemiddeld 15–25% op de totaalprijs. Daarnaast kunt u kwaliteit van advies, service en garantievoorwaarden vergelijken.
        </p>
        <ul style={{ fontSize: 14, color: 'var(--muted)', paddingLeft: 20, fontFamily: 'DM Sans, sans-serif', lineHeight: 2, marginBottom: 20 }}>
          <li>Vergelijk <strong>all-in prijzen</strong> (batterij + omvormer + installatie + BTW)</li>
          <li>Controleer of de installateur <strong>AREI-gecertificeerd</strong> is</li>
          <li>Vraag naar <strong>garantievoorwaarden</strong> en <strong>onderhoudscontracten</strong></li>
          <li>Informeer naar hulp bij <strong>premieaanvragen</strong> in uw gewest</li>
          <li>Controleer <strong>levertijden</strong> — die variëren van 2 tot 12 weken</li>
        </ul>

        {/* Links */}
        <div className="info-box" style={{ marginTop: 32 }}>
          <p style={{ fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0, lineHeight: 2 }}>
            <strong>Meer lezen:</strong><br />
            → <Link href="/beste-thuisbatterij" style={{ color: 'var(--blue-mid)' }}>Onze ranglijst: welke batterij is het beste?</Link><br />
            → <Link href="/thuisbatterij-prijs" style={{ color: 'var(--blue-mid)' }}>Actuele prijzen per merk in België</Link><br />
            → <Link href="/is-thuisbatterij-rendabel" style={{ color: 'var(--blue-mid)' }}>Is een thuisbatterij rendabel? Bereken het</Link>
          </p>
        </div>

        <FaqAccordion items={faqItems} schemaId="offerte-faq" />
      </div>
    </>
  );
}
