export type ChemistryType = 'LFP' | 'NMC' | 'NCA' | 'VRLA';
export type Gewest = 'Vlaanderen' | 'Wallonië' | 'Brussel' | 'Federaal';
export type CtaType = 'affiliate' | 'lead-form' | 'internal-link';
export type CtaVariant = 'primary' | 'outline' | 'banner';

export interface BatteryBrand {
  slug: string;
  naam: string;
  fabrikant: string;
  logo: string;
  tagline: string;
  beschrijving: string;
  capaciteit: {
    min: number;
    max: number;
    label: string;
  };
  vermogen: {
    continu: number;
    piek: number;
  };
  chemie: ChemistryType;
  garantie: number;
  cycluslevensduur: number;
  efficiency: number;
  prijsBereik: {
    min: number;
    max: number;
    label: string;
  };
  affiliateUrl: string;
  geschiktZonderZonnepanelen: boolean;
  blackout: boolean;
  driefasig: boolean;
  kenmerken: string[];
  pros: string[];
  cons: string[];
  ranking: number;
  score: {
    totaal: number;
    kwaliteit: number;
    prijs: number;
    garantie: number;
    technologie: number;
    installatie: number;
  };
}

export interface PremieInfo {
  id: string;
  gewest: Gewest;
  naam: string;
  bedrag: string;
  beschrijving: string;
  voorwaarden: string[];
  geldigheidsdatum: string;
  aanvraagUrl: string;
  combineerbaar: boolean;
  vereistZonnepanelen: boolean;
  maxKwh?: number;
}

export interface FaqItem {
  vraag: string;
  antwoord: string;
  schema?: boolean;
}

export interface LeadFormData {
  naam: string;
  email: string;
  telefoon: string;
  postcode: string;
  jaarverbruik?: number;
  heeftZonnepanelen: boolean;
  vermogenZonnepanelen?: number;
  gewensteCapaciteit?: string;
  bericht?: string;
}
