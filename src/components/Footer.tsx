import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C', color: 'white', padding: '40px 20px 24px', marginTop: 48 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 32,
          marginBottom: 32,
        }}>
          {/* Logo & beschrijving */}
          <div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10, color: 'var(--amber)' }}>ThuisbatterijBelgie</div>
            <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 12 }}>
              Onafhankelijke vergelijking van thuisbatterijen in België. Geen betaalde posities in rankings.
            </p>
            <div style={{ fontSize: 12, color: '#6B7280' }}>© 2026 ThuisbatterijBelgie.be</div>
          </div>

          {/* Merken */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Merken</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { naam: 'Tesla Powerwall', slug: 'tesla-powerwall-3' },
                { naam: 'LG RESU', slug: 'lg-resu-10h-prime' },
                { naam: 'sonnen eco', slug: 'sonnen-eco-8' },
                { naam: 'Huawei LUNA 2000', slug: 'huawei-luna-2000' },
                { naam: 'SOLARWATT MyReserve', slug: 'solarwatt-myreserve' },
              ].map(m => (
                <Link key={m.slug} href={`/beste-thuisbatterij#${m.slug}`} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{m.naam}</Link>
              ))}
            </div>
          </div>

          {/* Gidsen */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Gidsen</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Thuisbatterij prijs', href: '/thuisbatterij-prijs' },
                { label: 'Is het rendabel?', href: '/is-thuisbatterij-rendabel' },
                { label: 'Premies & subsidies', href: '/thuisbatterij-premie' },
                { label: 'Zonder zonnepanelen', href: '/thuisbatterij-zonder-zonnepanelen' },
                { label: 'Installatie', href: '/thuisbatterij-installatie' },
                { label: 'Hoeveel kWh nodig?', href: '/hoeveel-kwh-thuisbatterij' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', marginBottom: 14 }}>Info</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Offerte aanvragen', href: '/offerte-thuisbatterij' },
                { label: 'Tesla vs LG vergelijking', href: '/tesla-vs-lg-thuisbatterij' },
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Privacybeleid', href: '/privacy' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 13, color: '#D1D5DB', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 20, borderTop: '1px solid #374151', fontSize: 12, color: '#6B7280', lineHeight: 1.6 }}>
          Affiliate disclosure: ThuisbatterijBelgie.be ontvangt mogelijk een vergoeding wanneer u via onze links een offerte aanvraagt of een product aanschaft. Dit heeft geen invloed op onze onafhankelijke beoordelingen en rankings. Prijzen en premies zijn indicatief — controleer steeds de meest actuele informatie bij uw installateur of netbeheerder.
        </div>
      </div>
    </footer>
  );
}
