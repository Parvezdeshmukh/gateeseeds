
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
 * Product names, images and technical values are kept unchanged.
 * Text translations are available for English, Hindi and Marathi.
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

    translations: {
      en: {
        category: 'Onion Seeds',
        short:
          'Rose-pink onion selection, packed as sortexed seed in a 1 kg carton.',
        description:
          'Super Gulabi is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
        season: 'Rabi',
        bulbColour: 'Attractive pink',
        bulbShape: 'Oval Round',
        maturity: '110–120 days (After transplanting)',
        Yield: 'High Yielding',
        MarketRate: 'High Market Rate',
        Storage: 'Good Storage Quality',
        Remarks: 'Suitable for Export & Domestic Market'
      },

      hi: {
        category: 'प्याज के बीज',
        short:
          'गुलाबी रंग की प्याज की किस्म, छांटे हुए बीज के रूप में 1 किलो कार्टन में पैक की गई।',
        description:
          'Super Gulabi छांटे हुए प्याज के बीज के रूप में GATEE SEEDS के सही लेबल वाले सीलबंद 1 किलो कार्टन में उपलब्ध है। कार्टन पर पैक से संबंधित विवरण दिया गया है।',
        season: 'रबी',
        bulbColour: 'आकर्षक गुलाबी',
        bulbShape: 'अंडाकार गोल',
        maturity: '110–120 दिन (रोपाई के बाद)',
        Yield: 'अधिक उत्पादन देने वाली',
        MarketRate: 'अच्छा बाजार भाव',
        Storage: 'अच्छी भंडारण गुणवत्ता',
        Remarks: 'निर्यात और घरेलू बाजार के लिए उपयुक्त'
      },

      ma: {
        category: 'कांदा बियाणे',
        short:
          'गुलाबी रंगाची कांद्याची जात, छाटलेले बियाणे म्हणून 1 किलो कार्टनमध्ये पॅक केलेली.',
        description:
          'Super Gulabi हे छाटलेले कांदा बियाणे म्हणून GATEE SEEDS च्या अचूक लेबल असलेल्या सीलबंद 1 किलो कार्टनमध्ये उपलब्ध आहे. कार्टनवर पॅकशी संबंधित माहिती दिलेली आहे.',
        season: 'रब्बी',
        bulbColour: 'आकर्षक गुलाबी',
        bulbShape: 'अंडाकृती गोल',
        maturity: '110–120 दिवस (लागवडीनंतर)',
        Yield: 'जास्त उत्पादन देणारी',
        MarketRate: 'चांगला बाजारभाव',
        Storage: 'चांगली साठवण गुणवत्ता',
        Remarks: 'निर्यात आणि देशांतर्गत बाजारासाठी योग्य'
      }
    },

    // Technical values
    seedRate: '2.5–3.0 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 * 15 cm',
    bulbWeight: '120–150 gm',
    TSS: '12.5%'
  },

  {
    id: 'onion-export-special',

    name: 'Onion Export Special',
    nameMarathi: 'कांदा - एक्सपोर्ट स्पेशल',

    category: 'Onion Seeds',

    packColor: '#0F4A33',
    image: onionExport,
    packImage: packExport,

    translations: {
      en: {
        category: 'Onion Seeds',
        short:
          'Deep red onion selection, packed as sortexed seed in a 1 kg carton.',
        description:
          'Onion Export Special is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
        season: 'Kharif',
        bulbColour: 'Attractive Blackish Dark Red',
        bulbShape: 'Oval Round',
        maturity: '80–90 days (After transplanting)',
        Yield: 'High Yielding',
        MarketRate: 'High Market Rate',
        Storage: 'Good Storage Quality',
        Remarks: 'Suitable for Export & Domestic Market'
      },

      hi: {
        category: 'प्याज के बीज',
        short:
          'गहरे लाल रंग की प्याज की किस्म, छांटे हुए बीज के रूप में 1 किलो कार्टन में पैक की गई।',
        description:
          'Onion Export Special छांटे हुए प्याज के बीज के रूप में GATEE SEEDS के सही लेबल वाले सीलबंद 1 किलो कार्टन में उपलब्ध है। कार्टन पर पैक से संबंधित विवरण दिया गया है।',
        season: 'खरीफ',
        bulbColour: 'आकर्षक काला-गहरा लाल',
        bulbShape: 'अंडाकार गोल',
        maturity: '80–90 दिन (रोपाई के बाद)',
        Yield: 'अधिक उत्पादन देने वाली',
        MarketRate: 'अच्छा बाजार भाव',
        Storage: 'अच्छी भंडारण गुणवत्ता',
        Remarks: 'निर्यात और घरेलू बाजार के लिए उपयुक्त'
      },

      ma: {
        category: 'कांदा बियाणे',
        short:
          'गडद लाल रंगाची कांद्याची जात, छाटलेले बियाणे म्हणून 1 किलो कार्टनमध्ये पॅक केलेली.',
        description:
          'Onion Export Special हे छाटलेले कांदा बियाणे म्हणून GATEE SEEDS च्या अचूक लेबल असलेल्या सीलबंद 1 किलो कार्टनमध्ये उपलब्ध आहे. कार्टनवर पॅकशी संबंधित माहिती दिलेली आहे.',
        season: 'खरीप',
        bulbColour: 'आकर्षक काळसर गडद लाल',
        bulbShape: 'अंडाकृती गोल',
        maturity: '80–90 दिवस (लागवडीनंतर)',
        Yield: 'जास्त उत्पादन देणारी',
        MarketRate: 'चांगला बाजारभाव',
        Storage: 'चांगली साठवण गुणवत्ता',
        Remarks: 'निर्यात आणि देशांतर्गत बाजारासाठी योग्य'
      }
    },

    seedRate: '2.5–3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbWeight: '80–110 gm',
    TSS: '12.5%'
  },

  {
    id: 'super-white',

    name: 'Super White',
    nameMarathi: 'सुपर व्हाईट',

    category: 'Onion Seeds',

    packColor: '#0D3B26',
    image: onionWhite,
    packImage: packWhite,

    translations: {
      en: {
        category: 'Onion Seeds',
        short:
          'White onion selection, packed as sortexed seed in a 1 kg carton.',
        description:
          'Super White is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
        season: 'Late Kharif to Rabi',
        bulbColour: 'Attractive White',
        bulbShape: 'Globular',
        maturity: '110–120 days (After transplanting)',
        Yield: 'High Yielding',
        MarketRate: 'High Market Rate',
        Storage: 'Good Storage Quality',
        Remarks: 'Suitable for Export & Domestic Market'
      },

      hi: {
        category: 'प्याज के बीज',
        short:
          'सफेद प्याज की किस्म, छांटे हुए बीज के रूप में 1 किलो कार्टन में पैक की गई।',
        description:
          'Super White छांटे हुए प्याज के बीज के रूप में GATEE SEEDS के सही लेबल वाले सीलबंद 1 किलो कार्टन में उपलब्ध है। कार्टन पर पैक से संबंधित विवरण दिया गया है।',
        season: 'देर खरीफ से रबी',
        bulbColour: 'आकर्षक सफेद',
        bulbShape: 'गोलाकार',
        maturity: '110–120 दिन (रोपाई के बाद)',
        Yield: 'अधिक उत्पादन देने वाली',
        MarketRate: 'अच्छा बाजार भाव',
        Storage: 'अच्छी भंडारण गुणवत्ता',
        Remarks: 'निर्यात और घरेलू बाजार के लिए उपयुक्त'
      },

      ma: {
        category: 'कांदा बियाणे',
        short:
          'पांढऱ्या रंगाची कांद्याची जात, छाटलेले बियाणे म्हणून 1 किलो कार्टनमध्ये पॅक केलेली.',
        description:
          'Super White हे छाटलेले कांदा बियाणे म्हणून GATEE SEEDS च्या अचूक लेबल असलेल्या सीलबंद 1 किलो कार्टनमध्ये उपलब्ध आहे. कार्टनवर पॅकशी संबंधित माहिती दिलेली आहे.',
        season: 'उशिरा खरीप ते रब्बी',
        bulbColour: 'आकर्षक पांढरा',
        bulbShape: 'गोलाकार',
        maturity: '110–120 दिवस (लागवडीनंतर)',
        Yield: 'जास्त उत्पादन देणारी',
        MarketRate: 'चांगला बाजारभाव',
        Storage: 'चांगली साठवण गुणवत्ता',
        Remarks: 'निर्यात आणि देशांतर्गत बाजारासाठी योग्य'
      }
    },

    seedRate: '2-3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbWeight: '90–120 gm',
    TSS: '13.5% to 14.5%'
  },

  {
    id: 'puna-fursungi-gavran',

    name: 'Puna Fursungi Gavran',
    nameMarathi: 'पुना फुरसुंगी गावरान',

    category: 'Onion Seeds',

    packColor: '#4A2A1B',
    image: onionFursungi,
    packImage: packFursungi,

    translations: {
      en: {
        category: 'Onion Seeds',
        short:
          'Golden-brown onion selection, packed as sortexed seed in a 1 kg carton.',
        description:
          'Puna Fursungi Gavran is supplied as sortexed onion seed in a sealed 1 kg carton carrying the GATEE SEEDS truthful label. Pack details below are printed on the carton.',
        season: 'Rabi',
        bulbColour: 'Attractive Golden Brown',
        bulbShape: 'Oval Round',
        maturity: '110–120 days (After transplanting)',
        Yield: 'High Yielding',
        MarketRate: 'High Market Rate',
        Storage: 'Good Storage Quality',
        Remarks: 'Suitable for Export & Domestic Market'
      },

      hi: {
        category: 'प्याज के बीज',
        short:
          'सुनहरे-भूरे रंग की प्याज की किस्म, छांटे हुए बीज के रूप में 1 किलो कार्टन में पैक की गई।',
        description:
          'Puna Fursungi Gavran छांटे हुए प्याज के बीज के रूप में GATEE SEEDS के सही लेबल वाले सीलबंद 1 किलो कार्टन में उपलब्ध है। कार्टन पर पैक से संबंधित विवरण दिया गया है।',
        season: 'रबी',
        bulbColour: 'आकर्षक सुनहरा भूरा',
        bulbShape: 'अंडाकार गोल',
        maturity: '110–120 दिन (रोपाई के बाद)',
        Yield: 'अधिक उत्पादन देने वाली',
        MarketRate: 'अच्छा बाजार भाव',
        Storage: 'अच्छी भंडारण गुणवत्ता',
        Remarks: 'निर्यात और घरेलू बाजार के लिए उपयुक्त'
      },

      ma: {
        category: 'कांदा बियाणे',
        short:
          'सुवर्ण-तपकिरी रंगाची कांद्याची जात, छाटलेले बियाणे म्हणून 1 किलो कार्टनमध्ये पॅक केलेली.',
        description:
          'Puna Fursungi Gavran हे छाटलेले कांदा बियाणे म्हणून GATEE SEEDS च्या अचूक लेबल असलेल्या सीलबंद 1 किलो कार्टनमध्ये उपलब्ध आहे. कार्टनवर पॅकशी संबंधित माहिती दिलेली आहे.',
        season: 'रब्बी',
        bulbColour: 'आकर्षक सोनेरी तपकिरी',
        bulbShape: 'अंडाकृती गोल',
        maturity: '110–120 दिवस (लागवडीनंतर)',
        Yield: 'जास्त उत्पादन देणारी',
        MarketRate: 'चांगला बाजारभाव',
        Storage: 'चांगली साठवण गुणवत्ता',
        Remarks: 'निर्यात आणि देशांतर्गत बाजारासाठी योग्य'
      }
    },

    seedRate: '2.5–3 kg/acre: Per Hactare 6.25 TO 7.50 kg',
    spacing: '15 x 10 cm',
    bulbWeight: '110–140 gm',
    TSS: '12.5%'
  }
]

/**
 * Truthful-label figures printed on every GATEE SEEDS onion carton.
 */
export const labelStandards = [
  { label: 'Physical purity (min.)', value: '98%' },
  { label: 'Inert matter (max.)', value: '2%' },
  { label: 'Other crop seed (max.)', value: 'None' },
  { label: 'Weed seeds (max.)', value: 'None' },
  { label: 'Germination (min.)', value: '70%' },
  { label: 'Genetic purity (min.)', value: '98%' }
]

/**
 * States listed on the carton under "Recommended for cultivation".
 */
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
