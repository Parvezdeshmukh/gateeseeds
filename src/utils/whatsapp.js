
import siteConfig from '../config/siteConfig'

const { whatsapp } = siteConfig.contact

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(
  message = siteConfig.messages.en.general
) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}

/** Link for a specific onion seed variety. */
export function productWhatsappLink(
  productName,
  lang = 'en'
) {
  const messages =
    siteConfig.messages[lang] || siteConfig.messages.en

  return whatsappLink(
    messages.product(productName)
  )
}

/** tel: link for the primary number. */
export function telLink(
  number = siteConfig.contact.phonePrimary
) {
  return `tel:${number.replace(/\s/g, '')}`
}

