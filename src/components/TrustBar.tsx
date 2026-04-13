interface TrustBarProps {
  updateDate?: string;
  brandCount?: number;
  reviewCount?: number;
}

export default function TrustBar({
  updateDate = 'april 2026',
  brandCount = 5,
  reviewCount = 120,
}: TrustBarProps) {
  return (
    <div style={{
      background: 'white',
      borderBottom: '1px solid var(--rule)',
      padding: '10px 20px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 24px',
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--muted)',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        <span>⭐⭐⭐⭐⭐ Onafhankelijk advies</span>
        <span>🔋 {brandCount} merken vergeleken</span>
        <span>👥 {reviewCount}+ lezers geholpen</span>
        <span>📅 Bijgewerkt: {updateDate}</span>
        <span style={{ color: 'var(--green)', fontWeight: 600 }}>✓ Geen betaalde posities in rankings</span>
      </div>
    </div>
  );
}
