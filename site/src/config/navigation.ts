export interface NavLink {
  key: string; // i18n key for label
  href: string; // relative to /{lang}/
}

export const NAV_LINKS: NavLink[] = [
  { key: 'nav.home', href: '' },
  { key: 'nav.pricing', href: 'pricing' },
  { key: 'nav.reseller', href: 'reseller' },
  { key: 'nav.affiliate', href: 'affiliate' },
  { key: 'nav.faq', href: 'faq' },
  { key: 'nav.blog', href: 'blog' },
];

export const FOOTER_LINKS = {
  services: [
    { key: 'nav.pricing', href: 'pricing' },
    { key: 'nav.reseller', href: 'reseller' },
    { key: 'nav.affiliate', href: 'affiliate' },
  ],
  help: [
    { key: 'nav.faq', href: 'faq' },
    { key: 'footer.contact', href: '#contact' },
  ],
  legal: [
    { key: 'footer.privacy', href: 'privacy' },
    { key: 'footer.terms', href: 'terms' },
    { key: 'footer.refund', href: 'refund' },
  ],
};
