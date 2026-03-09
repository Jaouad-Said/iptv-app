import whatsappData from '../data/whatsapp.json';

export const WHATSAPP_CONFIG = whatsappData;

export type MessageKey = keyof typeof whatsappData.messages;

export function getWhatsAppUrl(key: MessageKey = 'default'): string {
  const msg = WHATSAPP_CONFIG.messages[key];
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(msg)}`;
}
