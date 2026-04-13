'use client';
import { useState } from 'react';

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: '', email: '', telefoon: '', postcode: '',
    jaarverbruik: '', heeftZonnepanelen: false,
    vermogenZonnepanelen: '', gewensteCapaciteit: '', bericht: '',
  });

  const update = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const inputStyle = {
    width: '100%', padding: '12px 14px', border: '1.5px solid var(--rule)',
    borderRadius: 8, fontSize: 14, fontFamily: 'DM Sans, sans-serif',
    color: 'var(--ink)', background: 'white', outline: 'none',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    display: 'block', fontSize: 13, fontWeight: 600,
    color: 'var(--ink)', marginBottom: 6, fontFamily: 'DM Sans, sans-serif',
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch { /* continue */ }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', background: 'var(--green-light)', borderRadius: 16, border: '1.5px solid #BBF7D0' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: 'var(--green)', marginBottom: 12 }}>
          Aanvraag ontvangen!
        </h3>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', maxWidth: 420, margin: '0 auto' }}>
          We hebben uw aanvraag ontvangen. Binnen <strong>48 uur</strong> neemt een gecertificeerde installateur in uw regio contact met u op met een vrijblijvende offerte.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: 'white', borderRadius: 16, border: '1.5px solid var(--rule)', overflow: 'hidden' }}>
      {/* Progress */}
      <div style={{ background: 'var(--blue)', padding: '16px 24px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              height: 4, flex: 1, borderRadius: 4,
              background: s <= step ? 'var(--amber)' : 'rgba(255,255,255,0.3)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#93C5FD', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>
          Stap {step} van 3 — {step === 1 ? 'Uw contactgegevens' : step === 2 ? 'Uw installatie' : 'Bevestiging'}
        </p>
      </div>

      <div style={{ padding: '24px 24px 20px' }}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={labelStyle}>Uw naam *</label>
              <input style={inputStyle} type="text" placeholder="Jan Janssen" value={form.naam} onChange={e => update('naam', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>E-mailadres *</label>
              <input style={inputStyle} type="email" placeholder="jan@example.be" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Telefoonnummer *</label>
              <input style={inputStyle} type="tel" placeholder="+32 470 12 34 56" value={form.telefoon} onChange={e => update('telefoon', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Postcode *</label>
              <input style={inputStyle} type="text" placeholder="1000" value={form.postcode} onChange={e => update('postcode', e.target.value)} />
            </div>
            <button
              onClick={() => { if (form.naam && form.email && form.telefoon && form.postcode) setStep(2); }}
              className="btn-primary"
              disabled={!form.naam || !form.email || !form.telefoon || !form.postcode}
            >
              Volgende stap →
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={labelStyle}>Jaarlijks elektriciteitsverbruik (kWh)</label>
              <input style={inputStyle} type="number" placeholder="bijv. 3500" value={form.jaarverbruik} onChange={e => update('jaarverbruik', e.target.value)} />
            </div>
            <div>
              <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                <input type="checkbox" checked={form.heeftZonnepanelen} onChange={e => update('heeftZonnepanelen', e.target.checked)} style={{ width: 16, height: 16 }} />
                Ik heb al zonnepanelen
              </label>
            </div>
            {form.heeftZonnepanelen && (
              <div>
                <label style={labelStyle}>Vermogen zonnepanelen (kWp)</label>
                <input style={inputStyle} type="number" placeholder="bijv. 6" value={form.vermogenZonnepanelen} onChange={e => update('vermogenZonnepanelen', e.target.value)} />
              </div>
            )}
            <div>
              <label style={labelStyle}>Gewenste batterijcapaciteit</label>
              <select style={inputStyle} value={form.gewensteCapaciteit} onChange={e => update('gewensteCapaciteit', e.target.value)}>
                <option value="">Ik weet het niet (installateur adviseert)</option>
                <option value="5-10 kWh">Klein: 5–10 kWh</option>
                <option value="10-15 kWh">Middel: 10–15 kWh</option>
                <option value=">15 kWh">Groot: meer dan 15 kWh</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Extra opmerkingen (optioneel)</label>
              <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} placeholder="Bijv. interesse in blackout-bescherming, specifiek merk..." value={form.bericht} onChange={e => update('bericht', e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setStep(1)} className="btn-outline" style={{ flex: 1 }}>← Terug</button>
              <button onClick={() => setStep(3)} className="btn-primary-blue" style={{ flex: 2 }}>Controleer aanvraag →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700, marginBottom: 16, color: 'var(--ink)' }}>
              Overzicht van uw aanvraag
            </h3>
            <div style={{ background: 'var(--cream)', borderRadius: 10, padding: '14px 18px', marginBottom: 20, fontSize: 13, fontFamily: 'DM Sans, sans-serif', lineHeight: 2 }}>
              <div><strong>Naam:</strong> {form.naam}</div>
              <div><strong>E-mail:</strong> {form.email}</div>
              <div><strong>Telefoon:</strong> {form.telefoon}</div>
              <div><strong>Postcode:</strong> {form.postcode}</div>
              {form.jaarverbruik && <div><strong>Jaarverbruik:</strong> {form.jaarverbruik} kWh</div>}
              <div><strong>Zonnepanelen:</strong> {form.heeftZonnepanelen ? `Ja (${form.vermogenZonnepanelen || '?'} kWp)` : 'Nee'}</div>
              {form.gewensteCapaciteit && <div><strong>Capaciteit:</strong> {form.gewensteCapaciteit}</div>}
            </div>

            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16, lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
              Door op "Verstuur aanvraag" te klikken gaat u akkoord met onze{' '}
              <a href="/privacy" style={{ color: 'var(--blue-mid)' }}>privacyverklaring</a>.
              Uw gegevens worden uitsluitend gebruikt om uw offerteaanvraag te verwerken.
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setStep(2)} className="btn-outline" style={{ flex: 1 }}>← Terug</button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn-primary"
                style={{ flex: 2, opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Versturen...' : '✓ Verstuur aanvraag — 100% gratis'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: '12px 24px', borderTop: '1px solid var(--rule)', background: '#F9FAFB', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        {['100% gratis', 'Geen verplichtingen', 'GDPR-conform', 'Binnen 48u reactie'].map(t => (
          <span key={t} style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>✓ {t}</span>
        ))}
      </div>
    </div>
  );
}
