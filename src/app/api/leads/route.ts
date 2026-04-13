import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Valideer minimale velden
    if (!data.naam || !data.email || !data.telefoon || !data.postcode) {
      return NextResponse.json({ success: false, error: 'Verplichte velden ontbreken' }, { status: 400 });
    }

    // Log lead (vervang door webhook/e-mail/CRM in productie)
    console.log('=== NIEUWE OFFERTEAANVRAAG ===');
    console.log(`Naam: ${data.naam}`);
    console.log(`E-mail: ${data.email}`);
    console.log(`Telefoon: ${data.telefoon}`);
    console.log(`Postcode: ${data.postcode}`);
    console.log(`Jaarverbruik: ${data.jaarverbruik || 'niet opgegeven'} kWh`);
    console.log(`Zonnepanelen: ${data.heeftZonnepanelen ? `Ja (${data.vermogenZonnepanelen || '?'} kWp)` : 'Nee'}`);
    console.log(`Gewenste capaciteit: ${data.gewensteCapaciteit || 'niet opgegeven'}`);
    console.log(`Bericht: ${data.bericht || '—'}`);
    console.log(`Tijdstip: ${new Date().toISOString()}`);
    console.log('==============================');

    // Optioneel: stuur naar webhook
    // await fetch(process.env.WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(data) });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Serverfoort' }, { status: 500 });
  }
}
