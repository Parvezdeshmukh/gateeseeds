import siteConfig from '../config/siteConfig'

const { whatsapp } = siteConfig.contact

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(message = siteConfig.messages.general) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}

/** Link for a specific onion seed variety. */
export function productWhatsappLink(productName) {
  return whatsappLink(siteConfig.messages.product(productName))
}

/** tel: link for the primary number. */
export function telLink(number = siteConfig.contact.phonePrimary) {
  return `tel:${number.replace(/\s/g, '')}`
}
