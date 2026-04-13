import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Valideer verplichte velden
    if (!data.naam || !data.email || !data.telefoon || !data.postcode) {
      return NextResponse.json({ success: false, error: 'Verplichte velden ontbreken' }, { status: 400 });
    }

    // Altijd loggen (fallback)
    console.log('=== NIEUWE OFFERTEAANVRAAG ===');
    console.log(`Naam: ${data.naam}`);
    console.log(`E-mail: ${data.email}`);
    console.log(`Telefoon: ${data.telefoon}`);
    console.log(`Postcode: ${data.postcode}`);
    console.log(`Jaarverbruik: ${data.jaarverbruik || 'niet opgegeven'} kWh`);
    console.log(`Zonnepanelen: ${data.heeftZonnepanelen ? `Ja (${data.vermogenZonnepanelen || '?'} kWp)` : 'Nee'}`);
    console.log(`Gewenste capaciteit: ${data.gewensteCapaciteit || 'niet opgegeven'}`);
    console.log(`Tijdstip: ${new Date().toISOString()}`);
    console.log('==============================');

    // Laag 1: E-mailnotificatie via Resend
    if (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'leads@thuisbatterijbelgie.be',
          to: process.env.LEAD_EMAIL,
          subject: `🔋 Nieuwe offerteaanvraag van ${data.naam} (${data.postcode})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #1E3A5F; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #F59E0B; font-size: 20px; margin: 0;">🔋 Nieuwe offerteaanvraag</h1>
                <p style="color: #93C5FD; margin: 6px 0 0; font-size: 14px;">ThuisbatterijBelgie.be — ${new Date().toLocaleString('nl-BE')}</p>
              </div>

              <div style="background: white; border: 1px solid #E5E7EB; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
                <h2 style="font-size: 16px; color: #1C1C1C; margin-bottom: 16px;">Contactgegevens</h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280; width: 40%;">Naam</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #1C1C1C;">${data.naam}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280;">E-mail</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #1C1C1C;">
                      <a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280;">Telefoon</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #1C1C1C;">
                      <a href="tel:${data.telefoon}" style="color: #2563EB;">${data.telefoon}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #6B7280;">Postcode</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #1C1C1C;">${data.postcode}</td>
                  </tr>
                </table>

                <h2 style="font-size: 16px; color: #1C1C1C; margin: 24px 0 16px;">Installatiedetails</h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280; width: 40%;">Jaarverbruik</td>
                    <td style="padding: 10px 0; color: #1C1C1C;">${data.jaarverbruik ? `${data.jaarverbruik} kWh` : 'Niet opgegeven'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280;">Zonnepanelen</td>
                    <td style="padding: 10px 0; color: #1C1C1C;">${data.heeftZonnepanelen ? `Ja — ${data.vermogenZonnepanelen || '?'} kWp` : 'Nee'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F3F4F6;">
                    <td style="padding: 10px 0; color: #6B7280;">Gewenste capaciteit</td>
                    <td style="padding: 10px 0; color: #1C1C1C;">${data.gewensteCapaciteit || 'Niet opgegeven'}</td>
                  </tr>
                  ${data.bericht ? `
                  <tr>
                    <td style="padding: 10px 0; color: #6B7280;">Opmerking</td>
                    <td style="padding: 10px 0; color: #1C1C1C;">${data.bericht}</td>
                  </tr>` : ''}
                </table>

                <div style="margin-top: 28px; text-align: center;">
                  <a href="mailto:${data.email}?subject=Uw offerteaanvraag thuisbatterij"
                     style="background: #1E3A5F; color: white; padding: 12px 28px; border-radius: 8px;
                            text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">
                    Neem contact op met ${data.naam} →
                  </a>
                </div>
              </div>

              <p style="font-size: 11px; color: #9CA3AF; text-align: center; margin-top: 16px;">
                Lead ontvangen via ThuisbatterijBelgie.be op ${new Date().toLocaleString('nl-BE')}
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Resend fout:', emailError);
        // Niet fataal — lead is al gelogd
      }
    }

    // Laag 2: Webhook forwarding (Zapier, Make, Companeo, enz.)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            naam: data.naam,
            email: data.email,
            telefoon: data.telefoon,
            postcode: data.postcode,
            jaarverbruik: data.jaarverbruik || null,
            heeftZonnepanelen: data.heeftZonnepanelen,
            vermogenZonnepanelen: data.vermogenZonnepanelen || null,
            gewensteCapaciteit: data.gewensteCapaciteit || null,
            bericht: data.bericht || null,
            bron: 'thuisbatterijbelgie.be',
            tijdstip: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error('Webhook fout:', webhookError);
        // Niet fataal — lead is al gelogd en e-mail verstuurd
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Serverfout' }, { status: 500 });
  }
}
