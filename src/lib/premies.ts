import type { PremieInfo, Gewest } from './types';

export const premies: PremieInfo[] = [
  {
    id: 'vlaanderen-prosumententarief',
    gewest: 'Vlaanderen',
    naam: 'Vlaams Energiepremie batterijopslag',
    bedrag: '€300 – €1.500',
    beschrijving: 'In Vlaanderen kunnen eigenaren van zonnepanelen via hun netbeheerder (Fluvius) of via het Vlaams Energieagentschap een premie aanvragen voor de plaatsing van een thuisbatterij. Het exacte bedrag hangt af van de capaciteit van de batterij en uw situatie. Controleer steeds de actuele bedragen op de website van uw netbeheerder.',
    voorwaarden: [
      'Woning gelegen in Vlaanderen',
      'Batterij gekoppeld aan zonnepanelen (meestal vereist)',
      'Installatie door erkend AREI-installateur',
      'Aanvraag binnen 12 maanden na installatie',
      'Minimum capaciteit van 2 kWh (afhankelijk van netbeheerder)',
    ],
    geldigheidsdatum: 'Controleer actuele datum op fluvius.be',
    aanvraagUrl: 'https://www.fluvius.be',
    combineerbaar: true,
    vereistZonnepanelen: true,
    maxKwh: 15,
  },
  {
    id: 'wallonie-renolution',
    gewest: 'Wallonië',
    naam: 'Prime Énergie Wallonie (Renolution)',
    bedrag: '€500 – €2.500',
    beschrijving: 'Wallonië biedt via het Renolution-programma steun aan voor de installatie van energieopslagsystemen. De premie is inkomensafhankelijk en hoger voor gezinnen met een lager inkomen. Aanvragen verlopen via energie.wallonie.be of via een erkende energieadviseur.',
    voorwaarden: [
      'Woning gelegen in Wallonië',
      'Woning van minstens 10 jaar oud',
      'Erkend installateur vereist',
      'Aanvraag vóór start werken of binnen toegestane termijn',
      'Inkomensgrenzen bepalen het percentage',
    ],
    geldigheidsdatum: 'Controleer actuele datum op energie.wallonie.be',
    aanvraagUrl: 'https://energie.wallonie.be',
    combineerbaar: true,
    vereistZonnepanelen: false,
  },
  {
    id: 'brussel-rep',
    gewest: 'Brussel',
    naam: 'Renolution Brussels (Leefmilieu Brussel)',
    bedrag: '€400 – €2.000',
    beschrijving: 'Het Brussels Hoofdstedelijk Gewest biedt via Leefmilieu Brussel premies voor energiebesparende investeringen, waaronder thuisbatterijen. De premie varieert naar gelang uw inkomen en gezinssamenstelling. Aanvragen via de website van Leefmilieu Brussel.',
    voorwaarden: [
      'Woning in Brussels Hoofdstedelijk Gewest',
      'Erkend installateur vereist (VCA of equivalent)',
      'Woning na 1945 gebouwd',
      'Aanvraag binnen 2 jaar na factuur',
    ],
    geldigheidsdatum: 'Controleer actuele datum op leefmilieu.brussels',
    aanvraagUrl: 'https://leefmilieu.brussels',
    combineerbaar: true,
    vereistZonnepanelen: false,
  },
  {
    id: 'federaal-btw',
    gewest: 'Federaal',
    naam: 'Federaal BTW-voordeel (6% i.p.v. 21%)',
    bedrag: 'Tot €1.000+ besparing',
    beschrijving: 'Op de aankoop en installatie van thuisbatterijen in woningen ouder dan 10 jaar geldt in bepaalde gevallen een verlaagd BTW-tarief van 6% in plaats van 21%. Dit is een automatisch voordeel dat uw installateur verwerkt in de factuur. Combineerbaar met alle gewestpremies.',
    voorwaarden: [
      'Woning ouder dan 10 jaar',
      'Installateur factureert BTW 6% automatisch',
      'Geldt voor de volledige installatie (materiaal + loon)',
      'Eigenaar of huurder met toestemming',
    ],
    geldigheidsdatum: 'Onbepaald (federale BTW-regelgeving)',
    aanvraagUrl: 'https://financien.belgium.be',
    combineerbaar: true,
    vereistZonnepanelen: false,
  },
];

export function getPremiesByGewest(gewest: Gewest): PremieInfo[] {
  return premies.filter(p => p.gewest === gewest);
}

export function getAllPremies(): PremieInfo[] {
  return premies;
}
