import { NextResponse } from 'next/server';
import { getBattery } from '@/lib/batteries';

const affiliateLinks: Record<string, string> = {
  'tesla-powerwall-3': 'https://www.tesla.com/be_nl/powerwall',
  'lg-resu-10h-prime': 'https://www.lgenergysolution.com/product/resu10h-prime',
  'sonnen-eco-8': 'https://sonnen.be',
  'huawei-luna-2000': 'https://solar.huawei.com/be',
  'solarwatt-myreserve': 'https://www.solarwatt.be',
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ brand: string }> }
) {
  const { brand } = await params;
  const battery = getBattery(brand);

  if (!battery) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const affiliateUrl = affiliateLinks[brand] || battery.affiliateUrl;
  console.log(`Affiliate click: ${brand} - ${new Date().toISOString()}`);

  return NextResponse.redirect(affiliateUrl, {
    status: 302,
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
  });
}
