/**
 * All English and Hindi text lives here.
 * Both languages must have the same keys. To add text for another section,
 * add a new group (for example `hero`, `footer`) to BOTH `en` and `hi`.
 */
export const translations = {
  en: {
    // Label on the language button. It shows the language you will SWITCH TO.
    langToggle: 'हिंदी',

    topbar: {
      whatsapp: 'WhatsApp',
      callPrimary: 'Call our main number',
      callSecondary: 'Call our second number',
      email: 'Send us an email',
      switchLanguage: 'Switch to Hindi'
    }
  },

  hi: {
    langToggle: 'English',

    topbar: {
      whatsapp: 'व्हॉट्सॲप संपर्क',
      callPrimary: 'मुख्य नंबर पर कॉल करें',
      callSecondary: 'दूसरे नंबर पर कॉल करें',
      email: 'हमें ईमेल भेजें',
      switchLanguage: 'अंग्रेज़ी में बदलें'
    }
  }
}

export default translations