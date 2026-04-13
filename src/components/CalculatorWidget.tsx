'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CalculatorWidget() {
  const [jaarverbruik, setJaarverbruik] = useState(3500);
  const [zonnepanelen, setZonnepanelen] = useState(5);
  const [stroomprijs, setStroomprijs] = useState(0.30);
  const [terugleverprijs, setTerugleverprijs] = useState(0.05);
  const [batterijPrijs, setBatterijPrijs] = useState(7000);
  const [capaciteit, setCapaciteit] = useState(10);

  const efficiëntie = 0.92;
  const dagelijkseOpbrengst = capaciteit * efficiëntie;
  const maximaalVerbruikPerDag = jaarverbruik / 365;
  const effectieveDagelijkseOpbrengst = Math.min(dagelijkseOpbrengst, maximaalVerbruikPerDag);
  const jaarlijkseBesparing = effectieveDagelijkseOpbrengst * 365 * (stroomprijs - terugleverprijs);
  const terugverdientijd = jaarlijkseBesparing > 0 ? batterijPrijs / jaarlijkseBesparing : 99;
  const totaalBesparing25jaar = jaarlijkseBesparing * 25 - batterijPrijs;

  const formatEuro = (val: number) => `€${Math.round(val).toLocaleString('nl-BE')}`;
  const formatJaar = (val: number) => val > 30 ? '> 30 jaar' : `${val.toFixed(1)} jaar`;

  const tvtKleur = terugverdientijd < 8 ? 'var(--green)' : terugverdientijd < 12 ? 'var(--amber)' : 'var(--red)';

  return (
    <div style={{ background: 'white', borderRadius: 16, border: '1.5px solid var(--rule)', overflow: 'hidden' }}>
      <div style={{ background: 'var(--blue)', padding: '16px 20px' }}>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 900, color: 'white', marginBottom: 4 }}>
          🔋 Bereken uw terugverdientijd
        </h3>
        <p style={{ fontSize: 13, color: '#93C5FD', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>
          Indicatieve berekening — werkelijke besparing varieert per situatie
        </p>
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
          {[
            { label: 'Jaarverbruik (kWh)', value: jaarverbruik, min: 1000, max: 10000, step: 100, setter: setJaarverbruik, format: (v: number) => `${v.toLocaleString('nl-BE')} kWh` },
            { label: 'Zonnepanelen (kWp)', value: zonnepanelen, min: 0, max: 20, step: 0.5, setter: setZonnepanelen, format: (v: number) => `${v} kWp` },
            { label: 'Batterijcapaciteit (kWh)', value: capaciteit, min: 3, max: 20, step: 0.5, setter: setCapaciteit, format: (v: number) => `${v} kWh` },
            { label: 'Batterijprijs (incl. installatie)', value: batterijPrijs, min: 3000, max: 20000, step: 500, setter: setBatterijPrijs, format: formatEuro },
            { label: 'Stroomprijs (€/kWh)', value: stroomprijs, min: 0.10, max: 0.60, step: 0.01, setter: setStroomprijs, format: (v: number) => `€${v.toFixed(2)}` },
            { label: 'Terugleverprijs (€/kWh)', value: terugleverprijs, min: 0.02, max: 0.20, step: 0.01, setter: setTerugleverprijs, format: (v: number) => `€${v.toFixed(2)}` },
          ].map(field => (
            <div key={field.label}>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: 6, fontFamily: 'DM Sans, sans-serif' }}>
                {field.label}
                <span style={{ color: 'var(--blue-mid)', fontWeight: 700, marginLeft: 6 }}>{field.format(field.value)}</span>
              </label>
              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={field.value}
                onChange={e => field.setter(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--blue)' }}
              />
            </div>
          ))}
        </div>

        {/* Results */}
        <div style={{ background: 'var(--blue-light)', borderRadius: 12, padding: 20, marginBottom: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: tvtKleur }}>{formatJaar(terugverdientijd)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>Terugverdientijd</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: 'var(--green)' }}>{formatEuro(jaarlijkseBesparing)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>Jaarlijkse besparing</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: totaalBesparing25jaar > 0 ? 'var(--green)' : 'var(--red)' }}>
                {formatEuro(totaalBesparing25jaar)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>Netto besparing na 25 jaar</div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--amber-light)', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>
          ⚠️ Dit is een <strong>indicatieve berekening</strong>. Werkelijke besparing hangt af van uw verbruiksprofiel, batterijchemie, gewestpremies en de evolutie van energieprijzen.
        </div>

        <Link href="/offerte-thuisbatterij" className="btn-primary">
          Ontvang een gepersonaliseerde berekening van een installateur →
        </Link>
      </div>
    </div>
  );
}
