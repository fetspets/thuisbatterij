import type { BatteryBrand } from './types';

export const batteries: BatteryBrand[] = [
  {
    slug: 'tesla-powerwall-3',
    naam: 'Tesla Powerwall 3',
    fabrikant: 'Tesla',
    logo: '/logos/tesla.png',
    tagline: 'Marktleider met geïntegreerde omvormer',
    beschrijving: 'De Tesla Powerwall 3 is een van de bekendste thuisbatterijen ter wereld. Met een geïntegreerde omvormer, uitstekende software en een sterk ecosysteem is het een populaire keuze voor wie al zonnepanelen heeft. De app geeft real-time inzicht in productie, verbruik en opslag.',
    capaciteit: { min: 13.5, max: 13.5, label: '13,5 kWh' },
    vermogen: { continu: 11.5, piek: 22 },
    chemie: 'NMC',
    garantie: 10,
    cycluslevensduur: 4000,
    efficiency: 90,
    prijsBereik: { min: 9000, max: 13000, label: '€9.000 – €13.000' },
    affiliateUrl: 'https://www.tesla.com/be_nl/powerwall',
    geschiktZonderZonnepanelen: false,
    blackout: true,
    driefasig: true,
    kenmerken: [
      '13,5 kWh bruikbare capaciteit',
      'Ingebouwde omvormer (all-in-one)',
      'Volledige blackout-bescherming',
      'Tesla app voor real-time monitoring',
      '10 jaar garantie',
      'Stapelbaar tot 4 eenheden',
    ],
    pros: [
      'All-in-one oplossing (omvormer inbegrepen)',
      'Uitstekende app en monitoring',
      'Bewezen betrouwbaarheid wereldwijd',
      'Sterk ecosysteem met zonnepanelen',
    ],
    cons: [
      'Hogere aankoopprijs dan concurrenten',
      'Beperkt netwerk van installateurs in België',
      'NMC-chemie: iets minder veilig dan LFP',
    ],
    ranking: 1,
    score: { totaal: 8.6, kwaliteit: 9.0, prijs: 7.5, garantie: 8.5, technologie: 9.5, installatie: 8.0 },
  },
  {
    slug: 'lg-resu-10h-prime',
    naam: 'LG RESU 10H Prime',
    fabrikant: 'LG Energy Solution',
    logo: '/logos/lg.png',
    tagline: 'Populaire keuze met LFP-veiligheid',
    beschrijving: 'De LG RESU 10H Prime combineert compactheid met degelijke prestaties. Met LFP-chemie (lithium-ijzerfosfaat) is deze batterij veiliger en heeft ze een langere levensduur dan veel concurrenten. Bijzonder populair bij Belgische installateurs dankzij brede compatibiliteit.',
    capaciteit: { min: 9.6, max: 9.6, label: '9,6 kWh' },
    vermogen: { continu: 5.0, piek: 7.0 },
    chemie: 'LFP',
    garantie: 10,
    cycluslevensduur: 6000,
    efficiency: 94,
    prijsBereik: { min: 5500, max: 8500, label: '€5.500 – €8.500' },
    affiliateUrl: 'https://www.lgenergysolution.com/product/resu10h-prime',
    geschiktZonderZonnepanelen: true,
    blackout: false,
    driefasig: false,
    kenmerken: [
      '9,6 kWh bruikbare capaciteit',
      'LFP-chemie: veiliger en duurzamer',
      '6.000 laadcycli levensduur',
      'Compact wandmodel',
      'Breed compatibel met omvormers',
      '10 jaar garantie',
    ],
    pros: [
      'LFP-chemie: langste levensduur in klasse',
      'Betaalbare instapprijs',
      'Breed installateurnetwerk in België',
      'Compact formaat, makkelijk te plaatsen',
    ],
    cons: [
      'Geen ingebouwde omvormer',
      'Geen volledige blackout-bescherming',
      'Beperktere capaciteit dan Tesla',
    ],
    ranking: 2,
    score: { totaal: 8.3, kwaliteit: 8.5, prijs: 8.5, garantie: 8.5, technologie: 8.0, installatie: 8.5 },
  },
  {
    slug: 'sonnen-eco-8',
    naam: 'sonnen eco 8',
    fabrikant: 'sonnen',
    logo: '/logos/sonnen.png',
    tagline: 'Premium Duits kwaliteit met slim energiebeheer',
    beschrijving: 'sonnen is een Duits merk dat bekendstaat om zijn hoge kwaliteitsstandaarden en slimme energiebeheer-software. De sonnen eco 8 is modulair opgebouwd (van 5 tot 15 kWh) en ondersteunt dynamische energietarieven, waardoor het ook zonder zonnepanelen interessant kan zijn.',
    capaciteit: { min: 5, max: 15, label: '5 – 15 kWh (modulair)' },
    vermogen: { continu: 3.3, piek: 3.3 },
    chemie: 'LFP',
    garantie: 10,
    cycluslevensduur: 10000,
    efficiency: 88,
    prijsBereik: { min: 8000, max: 14000, label: '€8.000 – €14.000' },
    affiliateUrl: 'https://sonnen.be',
    geschiktZonderZonnepanelen: true,
    blackout: true,
    driefasig: false,
    kenmerken: [
      'Modulair: 5 tot 15 kWh',
      'LFP-chemie: 10.000 laadcycli',
      'Slimme energiebeheer-software',
      'Blackout-bescherming inbegrepen',
      'Compatibel met dynamische tarieven',
      '10 jaar / 10.000 cycli garantie',
    ],
    pros: [
      'Uitzonderlijk lange levensduur (10.000 cycli)',
      'Slimste energiebeheersoftware in test',
      'Modulair: uitbreidbaar naargelang behoefte',
      'Geschikt voor gebruik zonder zonnepanelen',
    ],
    cons: [
      'Hogere aankoopprijs',
      'Beperkt vermogen (3,3 kW continu)',
      'Minder installateurs dan LG of Tesla',
    ],
    ranking: 3,
    score: { totaal: 8.1, kwaliteit: 9.0, prijs: 7.0, garantie: 9.0, technologie: 8.5, installatie: 7.5 },
  },
  {
    slug: 'huawei-luna-2000',
    naam: 'Huawei LUNA 2000',
    fabrikant: 'Huawei',
    logo: '/logos/huawei.png',
    tagline: 'Beste prijs-kwaliteit voor zonnepanelenbezitters',
    beschrijving: 'De Huawei LUNA 2000 is bijzonder populair in combinatie met Huawei zonnepanelen en omvormers. Met een modulair systeem van 5 kWh-modules, LFP-chemie en uitstekende integratie biedt het een van de beste prijs-kwaliteitsverhoudingen op de Belgische markt.',
    capaciteit: { min: 5, max: 30, label: '5 – 30 kWh (modulair)' },
    vermogen: { continu: 5.0, piek: 10.0 },
    chemie: 'LFP',
    garantie: 10,
    cycluslevensduur: 6000,
    efficiency: 95,
    prijsBereik: { min: 4000, max: 10000, label: '€4.000 – €10.000' },
    affiliateUrl: 'https://solar.huawei.com/be',
    geschiktZonderZonnepanelen: false,
    blackout: true,
    driefasig: true,
    kenmerken: [
      'Modulair: 5 tot 30 kWh',
      'LFP-chemie met 95% efficiëntie',
      'Driefasige aansluiting mogelijk',
      'Uitstekende integratie met Huawei omvormer',
      'Blackout-bescherming inbegrepen',
      '10 jaar garantie',
    ],
    pros: [
      'Beste prijs-kwaliteit op de markt',
      'Hoge efficiëntie (95%)',
      'Zeer flexibele capaciteit (modulair)',
      'Driefasige ondersteuning',
    ],
    cons: [
      'Beste resultaten alleen met Huawei-ecosysteem',
      'Minder geschikt zonder zonnepanelen',
      'Software-interface minder intuïtief dan Tesla',
    ],
    ranking: 4,
    score: { totaal: 8.0, kwaliteit: 8.0, prijs: 9.0, garantie: 8.5, technologie: 8.0, installatie: 8.5 },
  },
  {
    slug: 'solarwatt-myreserve',
    naam: 'SOLARWATT MyReserve',
    fabrikant: 'SOLARWATT',
    logo: '/logos/solarwatt.png',
    tagline: 'Duits topkwaliteit met 10 jaar all-inclusive garantie',
    beschrijving: 'SOLARWATT is een Duits bedrijf dat zich onderscheidt met een uitzonderlijke 10 jaar alles-inclusief garantie. De MyReserve is modulair, werkt met LFP-chemie en heeft een uitstekende reputatie voor betrouwbaarheid. Minder bekend maar kwalitatief sterk.',
    capaciteit: { min: 4.4, max: 17.6, label: '4,4 – 17,6 kWh (modulair)' },
    vermogen: { continu: 4.6, piek: 4.6 },
    chemie: 'LFP',
    garantie: 10,
    cycluslevensduur: 8000,
    efficiency: 92,
    prijsBereik: { min: 6000, max: 12000, label: '€6.000 – €12.000' },
    affiliateUrl: 'https://www.solarwatt.be',
    geschiktZonderZonnepanelen: false,
    blackout: false,
    driefasig: false,
    kenmerken: [
      'Modulair: 4,4 tot 17,6 kWh',
      'LFP-chemie: 8.000 laadcycli',
      '10 jaar all-inclusive garantie',
      'Gemaakt in Duitsland',
      'Stille werking',
      'Geschikt voor particulier en professioneel gebruik',
    ],
    pros: [
      'Uitzonderlijke garantievoorwaarden',
      'Gemaakt in Duitsland — hoge betrouwbaarheid',
      'Stille werking (ideaal in woonkamer of garage)',
      'Modulair uitbreidbaar',
    ],
    cons: [
      'Beperkt netwerk in België',
      'Geen blackout-bescherming standaard',
      'Hogere prijs voor vergelijkbare capaciteit',
    ],
    ranking: 5,
    score: { totaal: 7.8, kwaliteit: 9.0, prijs: 7.0, garantie: 9.5, technologie: 7.5, installatie: 7.0 },
  },
];

export function getBattery(slug: string): BatteryBrand | undefined {
  return batteries.find(b => b.slug === slug);
}

export function getTopBatteries(n: number = 5): BatteryBrand[] {
  return batteries.sort((a, b) => a.ranking - b.ranking).slice(0, n);
}

export function getBatteriesBy(filter: 'zonder-zonnepanelen' | 'blackout' | 'groot' | 'klein' | 'lfp'): BatteryBrand[] {
  switch (filter) {
    case 'zonder-zonnepanelen':
      return batteries.filter(b => b.geschiktZonderZonnepanelen);
    case 'blackout':
      return batteries.filter(b => b.blackout);
    case 'groot':
      return batteries.filter(b => b.capaciteit.max >= 10);
    case 'klein':
      return batteries.filter(b => b.capaciteit.max < 10);
    case 'lfp':
      return batteries.filter(b => b.chemie === 'LFP');
    default:
      return batteries;
  }
}
