import packGulabi from '../assets/pack-super-gulabi.jpg'
import packExport from '../assets/pack-export-special.jpg'
import packWhite from '../assets/pack-super-white.jpg'
import packFursungi from '../assets/pack-puna-fursungi.jpg'
import onionGulabi from '../assets/onion-super-gulabi.jpg'
import onionExport from '../assets/onion-export-special.jpg'
import onionWhite from '../assets/onion-super-white.jpg'
import onionFursungi from '../assets/onion-puna-fursungi.jpg'

/**
 * Onion seed varieties.
 *
 * Everything here is taken from the GATEE SEEDS carton artwork.
 * Leave a field as an empty string and the website simply hides it —
 * nothing is invented and nothing breaks.
 *
 * Fields the client can fill in later:
 *   season, seedRate, spacing, bulbColour, bulbShape, bulbWeight, maturity
 */
const onionSeeds = [
  {
    id: 'super-gulabi',
    name: 'Super Gulabi (313)',
    nameMarathi: 'सुपर गुलाबी',
    category: 'Onion Seeds',
    packColor: '#5B1440',
    image: onionGulabi,
    packImage: packGulabi,
    short: 'Rose-pink onion selection, packed as sortexed seed in a 1 kg carton.',
    description:
      'Super Gulabi is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
    // netWeight: '1 kg',
    // cropCode: 'MH 20',
    // seedTreatment: 'Thiram',
    season: 'Rabi',
    seedRate: '2.5–3.0 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 * 15 cm',
    bulbColour: 'Attractive pink',
    bulbShape: 'Oval Round',
    bulbWeight: '120–150 gm',
    TSS: '12.5%',
    maturity: '110–120 days (After transplanting)',
    Yield: 'High Yielding',
    MarketRate: 'High Market Rate',
    Storage: 'Good Storage Quality',
    Remarks: 'Suitable for Export & Domestic Market'
  },
  {
    id: 'onion-export-special',
    name: 'Onion Export Special',
    nameMarathi: 'कांदा - एक्सपोर्ट स्पेशल',
    category: 'Onion Seeds',
    packColor: '#0F4A33',
    image: onionExport,
    packImage: packExport,
    short: 'Deep red onion selection, packed as sortexed seed in a 1 kg carton.',
    description:
      'Onion Export Special is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
    // netWeight: '1 kg',
    // cropCode: 'MH 20',
    // seedTreatment: 'Thiram',
    season: 'Kharif',
    seedRate: '2.5–3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbColour: 'Attractive Blackish Dark Red',
    bulbShape: 'Oval Round',
    bulbWeight: '80–110 gm',
    TSS: '12.5%',
    maturity: '80–90 days (After transplanting)',
    Yield: 'High Yielding',
    MarketRate: 'High Market Rate',
    Storage: 'Good Storage Quality',
    Remarks: 'Suitable for Export & Domestic Market'
  },
  {
    id: 'super-white',
    name: 'Super White',
    nameMarathi: 'सुपर व्हाईट',
    category: 'Onion Seeds',
    packColor: '#0D3B26',
    image: onionWhite,
    packImage: packWhite,
    short: 'White onion selection, packed as sortexed seed in a 1 kg carton.',
    description:
      'Super White is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
    // netWeight: '1 kg',
    // cropCode: 'MH 20',
    // seedTreatment: 'Thiram',
    season: 'Late Kharif to Rabi',
    seedRate: '2-3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbColour: 'Attractive White',
    bulbShape: 'Globular',
    bulbWeight: '90–120 gm',
    TSS: '13.5% to 14.5%',
    maturity: '110–120 days (After transplanting)',
    Yield: 'High Yielding',
    MarketRate: 'High Market Rate',
    Storage: 'Good Storage Quality',
    Remarks: 'Suitable for Export & Domestic Market'
  },
  {
    id: 'puna-fursungi-gavran',
    name: 'Puna Fursungi Gavran',
    nameMarathi: 'पुना फुरसुंगी गावरान',
    category: 'Onion Seeds',
    packColor: '#4A2A1B',
    image: onionFursungi,
    packImage: packFursungi,
    short: 'Golden-brown onion selection, packed as sortexed seed in a 1 kg carton.',
    description:
      'Puna Fursungi Gavran is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
    // netWeight: '1 kg',
    // cropCode: 'MH 20',
    // seedTreatment: 'Thiram',
    season: 'Rabi',
    seedRate: '2.5–3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbColour: 'Attractive Golden Brown',
    bulbShape: 'Oval Round',
    bulbWeight: '110–140 gm',
    TSS: '12.5%',
    maturity: '110–120 days (After transplanting)',
    Yield: 'High Yielding',
    MarketRate: 'High Market Rate',
    Storage: 'Good Storage Quality',
    Remarks: 'Suitable for Export & Domestic Market'
  }
]

/** Truthful-label figures printed on every GATEE SEEDS onion carton. */
export const labelStandards = [
  { label: 'Physical purity (min.)', value: '98%' },
  { label: 'Inert matter (max.)', value: '2%' },
  { label: 'Other crop seed (max.)', value: 'None' },
  { label: 'Weed seeds (max.)', value: 'None' },
  { label: 'Germination (min.)', value: '70%' },
  { label: 'Genetic purity (min.)', value: '98%' }
]

/** States listed on the carton under "Recommended for cultivation". */
export const recommendedStates = [
  'Maharashtra',
  'Karnataka',
  'Andhra Pradesh',
  'Tamil Nadu',
  'Rajasthan',
  'Gujarat',
  'Madhya Pradesh',
  'Uttar Pradesh',
  'Chhattisgarh',
  'Haryana',
  'Uttarakhand'
]

export function getSeedById(id) {
  return onionSeeds.find((seed) => seed.id === id)
}

export default onionSeeds
