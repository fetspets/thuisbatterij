'use client';
import Link from 'next/link';
import type { BatteryBrand } from '@/lib/types';

interface ComparisonTableProps {
  brands: BatteryBrand[];
  compact?: boolean;
}

export default function ComparisonTable({ brands, compact = false }: ComparisonTableProps) {
  return (
    <div className="table-wrap" style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--blue)', color: 'white' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>Merk</th>
            <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Score</th>
            <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Capaciteit</th>
            {!compact && <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Chemie</th>}
            <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Garantie</th>
            <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Prijs (incl.)</th>
            {!compact && <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Blackout</th>}
            <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap' }}>Actie</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand, i) => (
            <tr key={brand.slug} style={{ background: i === 0 ? 'var(--amber-light)' : i % 2 === 0 ? '#F9FAFB' : 'white', borderBottom: '1px solid var(--rule)' }}>
              <td style={{ padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {i === 0 && <span style={{ background: 'var(--amber)', color: 'var(--ink)', fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 20, whiteSpace: 'nowrap' }}>TOP</span>}
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)' }}>{brand.naam}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{brand.tagline}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '14px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 900, color: 'var(--blue)' }}>{brand.score.totaal}</span>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>/10</span>
              </td>
              <td style={{ padding: '14px 10px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                {brand.capaciteit.label}
              </td>
              {!compact && (
                <td style={{ padding: '14px 10px', textAlign: 'center' }}>
                  <span style={{
                    background: brand.chemie === 'LFP' ? 'var(--green-light)' : 'var(--blue-light)',
                    color: brand.chemie === 'LFP' ? 'var(--green)' : 'var(--blue-mid)',
                    padding: '3px 8px', borderRadius: 20, fontSize: 11, fontWeight: 700,
                  }}>
                    {brand.chemie}
                  </span>
                </td>
              )}
              <td style={{ padding: '14px 10px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                {brand.garantie} jaar
              </td>
              <td style={{ padding: '14px 10px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 700, color: 'var(--ink)' }}>
                {brand.prijsBereik.label}
              </td>
              {!compact && (
                <td style={{ padding: '14px 10px', textAlign: 'center' }}>
                  {brand.blackout ? <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓ Ja</span> : <span style={{ color: 'var(--muted)' }}>—</span>}
                </td>
              )}
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <Link
                  href={`/ga/${brand.slug}`}
                  style={{
                    background: 'var(--blue)', color: 'white', padding: '7px 14px',
                    borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none',
                    display: 'inline-block', whiteSpace: 'nowrap',
                  }}
                >
                  Bekijk prijzen →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="disclosure" style={{ padding: '10px 16px' }}>
        Prijzen zijn indicatieve bereiken inclusief installatie. Exacte prijs hangt af van uw situatie. Bijgewerkt april 2026.
      </div>
    </div>
  );
}
