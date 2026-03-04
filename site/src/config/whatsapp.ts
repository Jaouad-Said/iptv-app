export const WHATSAPP_CONFIG = {
  // Replace with your real WhatsApp Business number (international format, no + or spaces)
  // Example: '33600000000' for a French number +33 6 00 00 00 00
  number: '212621419144',
  messages: {
    default: 'Hello! I am interested in your IPTV service.',
    pricing: 'Hello! I would like to know more about your pricing plans.',
    reseller: 'Hello! I am interested in your reseller program.',
    affiliate: 'Hello! I want to learn about your affiliate program.',
    trial: 'Hello! I would like to request a free trial.',
    extend: 'Hello! I would like to extend my subscription.',
  },
} as const;

export type MessageKey = keyof typeof WHATSAPP_CONFIG.messages;

export function getWhatsAppUrl(key: MessageKey = 'default'): string {
  const msg = WHATSAPP_CONFIG.messages[key];
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(msg)}`;
}
