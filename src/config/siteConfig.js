/**
 * GATEE SEEDS — single place to edit every piece of business information.
 * Change a value here and it updates everywhere on the website.
 */

const siteConfig = {
  company: {
    name: 'GATEE SEEDS PVT. LTD.',
    shortName: 'GATEE SEEDS',
    tagline: 'Quality Onion Seeds. Better Agriculture.',
    // Taken from the printed seed carton. Edit if anything changes.
    description:
      'GATEE SEEDS PVT. LTD. produces and markets onion seed, packed and labelled for farm supply across Maharashtra and neighbouring states.'
  },

  contact: {
    // Printed on the carton as Customer Care
    phonePrimary: '+919423931052',
    phonePrimaryDisplay: '+91 94239 31052',
    phoneSecondary: '+918380887058',
    phoneSecondaryDisplay: '+91 83808 87058',

    // WhatsApp number in international format, digits only (country code + number)
    whatsapp: '919423931052',

    // TODO: replace with the official GATEE SEEDS email address
    email: 'EMAIL_ADDRESS',

    addressLines: [
      'GATEE SEEDS PVT. LTD.',
      'Gut No. 122, Lad Sawangi Road, Chauka,',
      'Chhatrapati Sambhajinagar (Aurangabad) – 431008,',
      'Maharashtra, India'
    ],
    addressShort: 'Chauka, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra'
  },

  // TODO: paste the Google Maps "Embed a map" iframe src for the GATEE SEEDS address
  googleMapEmbedUrl:
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.9157494403007!2d75.39296517397825!3d20.017066321758808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbfc22a4cbcd9%3A0x91cbf8fe79556acd!2schauka%20Chhatrapati%20sambhajinagar!5e1!3m2!1sen!2sin!4v1789939399925!5m2!1sen!2sin',

  // TODO: replace placeholders with the official profile links
  social: {
    instagram: 'INSTAGRAM_URL',
    facebook: 'FACEBOOK_URL',
    youtube: 'YOUTUBE_URL'
  },

  messages: {
    general:
      'Hello GATEE SEEDS, I would like to enquire about your onion seed products.',
    product: (productName) =>
      `Hello GATEE SEEDS, I would like to enquire about ${productName}. Please share more details.`
  }
}

export default siteConfig
