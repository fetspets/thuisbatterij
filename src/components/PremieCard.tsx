import type { PremieInfo } from '@/lib/types';

const gewestColors: Record<string, { bg: string; border: string; badge: string }> = {
  'Vlaanderen': { bg: '#FFFBEB', border: '#FCD34D', badge: '#F59E0B' },
  'Wallonië':   { bg: '#FFF1F2', border: '#FECDD3', badge: '#E11D48' },
  'Brussel':    { bg: '#EFF6FF', border: '#BFDBFE', badge: '#2563EB' },
  'Federaal':   { bg: '#F5F3FF', border: '#C4B5FD', badge: '#7C3AED' },
};

interface PremieCardProps {
  premie: PremieInfo;
}

export default function PremieCard({ premie }: PremieCardProps) {
  const colors = gewestColors[premie.gewest] || { bg: '#F9FAFB', border: '#E5E7EB', badge: '#6B7280' };

  return (
    <div style={{
      background: colors.bg,
      border: `1.5px solid ${colors.border}`,
      borderRadius: 14,
      padding: '20px 22px',
      marginBottom: 16,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
        <div>
          <span style={{
            background: colors.badge, color: 'white', fontSize: 11, fontWeight: 700,
            padding: '3px 10px', borderRadius: 20, fontFamily: 'DM Sans, sans-serif',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            {premie.gewest}
          </span>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginTop: 8, marginBottom: 4 }}>
            {premie.naam}
          </h3>
        </div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: colors.badge, whiteSpace: 'nowrap' }}>
          {premie.bedrag}
        </div>
      </div>

      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 12, fontFamily: 'DM Sans, sans-serif' }}>
        {premie.beschrijving}
      </p>

      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>Voorwaarden</div>
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          {premie.voorwaarden.map((v, i) => (
            <li key={i} style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>{v}</li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
        {premie.combineerbaar && (
          <span style={{ fontSize: 11, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
            ✓ Combineerbaar
          </span>
        )}
        {premie.vereistZonnepanelen && (
          <span style={{ fontSize: 11, background: '#FEF3C7', color: '#B45309', border: '1px solid #FCD34D', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
            ☀️ Vereist zonnepanelen
          </span>
        )}
        {!premie.vereistZonnepanelen && (
          <span style={{ fontSize: 11, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
            ✓ Ook zonder zonnepanelen
          </span>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>
          Geldig: {premie.geldigheidsdatum}
        </span>
        <a href={premie.aanvraagUrl} target="_blank" rel="noopener noreferrer" style={{
          fontSize: 13, fontWeight: 700, color: colors.badge, textDecoration: 'none',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          Meer info → officiële website
        </a>
      </div>
    </div>
  );
}
