/**
 * GATEE SEEDS — single place to edit every piece of business information.
 * Change a value here and it updates everywhere on the website.
 */

const siteConfig = {
  company: {
    name: "GATEE SEEDS PVT. LTD.",
    shortName: "GATEE SEEDS",
    tagline: "Quality Onion Seeds. Better Agriculture.",
    // Taken from the printed seed carton. Edit if anything changes.
    description:
      "GATEE SEEDS PVT. LTD. produces and markets onion seed, packed and labelled for farm supply across Maharashtra and neighbouring states.",
  },

  contact: {
    // Printed on the carton as Customer Care
    phonePrimary: "+918380887058",
    phonePrimaryDisplay: "+91 83808 87058",
    phoneSecondary: "+918380887058",
    phoneSecondaryDisplay: "+91 83808 87058",

    // WhatsApp number in international format, digits only (country code + number)
    whatsapp: "+918380887058",

    // TODO: replace with the official GATEE SEEDS email address
    email: "gatee.seeds.pvt.ltd@gmail.com",

    addressLines: [
      "GATEE SEEDS PVT. LTD.",
      "Gut No. 122, Lad Sawangi Road, Chauka,",
      "Chhatrapati Sambhajinagar (Aurangabad) – 431008,",
      "Maharashtra, India",
    ],
    addressShort: "Chauka, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  },

  // All office / branch locations shown on the Map section.
  // Add or remove entries here to update the map tabs everywhere on the site.
  locations: [
    {
      id: "chauka",
      name: "Chauka (Head Office)",
      googleMapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.9157494403007!2d75.39296517397825!3d20.017066321758808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbfc22a4cbcd9%3A0x91cbf8fe79556acd!2schauka%20Chhatrapati%20sambhajinagar!5e1!3m2!1sen!2sin!4v1789939399925!5m2!1sen!2sin",
      addressLines: [
        "GATEE SEEDS PVT. LTD.",
        "Gut No. 122, Lad Sawangi Road, Chauka,",
        "Chhatrapati Sambhajinagar (Aurangabad) – 431008,",
        "Maharashtra, India",
      ],
    },
    {
      id: "kannad",
      name: "Kannad",
      // TODO: paste the Google Maps "Embed a map" iframe src for the Kannad branch
      googleMapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23665.19668196989!2d75.11007074147194!3d20.26854270525929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbfaa176bfdbab%3A0x8fad4798e06790fa!2sKannad%2C%20Maharashtra%20431103!5e1!3m2!1sen!2sin!4v1790282287142!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
      addressLines: [
        "Kannad, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
      ],
    },
    {
      id: "phulambri",
      name: "Phulambri",
      // TODO: paste the Google Maps "Embed a map" iframe src for the Phulambri branch
      googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94764.05951819422!2d75.38389974862797!3d20.098592182381683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbf5b2e60230b%3A0xf9ad1afd6aa9888f!2sPhulambri%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1790282472530!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
      addressLines: [
        "Phulambri, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
      ],
    },
  ],

  // TODO: replace placeholders with the official profile links
  social: {
    instagram:
      "https://www.instagram.com/gatee.seeds.pvt.ltd?stkn=dThoa3huZTI1ZDI=",
    facebook: "FACEBOOK_URL",
    youtube: "https://www.youtube.com/@Gateeseedspvtltd",
  },

  messages: {
    general:
      "Hello GATEE SEEDS, I would like to enquire about your onion seed products.",
    product: (productName) =>
      `Hello GATEE SEEDS, I would like to enquire about ${productName}. Please share more details.`,
  },
};

export default siteConfig;
