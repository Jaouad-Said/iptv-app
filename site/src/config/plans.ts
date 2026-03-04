export interface Plan {
  id: string;
  type: 'single' | 'multi';
  /** i18n key for duration label e.g. 'plans.duration.1m' */
  durationLabel: string;
  durationMonths: number;
  priceEUR: number;
  originalPriceEUR?: number;
  devicesCount?: number;
  isBestValue?: boolean;
  /** Extra badge text shown on card e.g. '+ 2 FREE App activations' */
  badge?: string;
  /** WhatsApp message key for the CTA */
  waMessageKey: 'pricing' | 'trial';
}

export const SINGLE_PLANS: Plan[] = [
  {
    id: 'single-1m',
    type: 'single',
    durationLabel: '1 Month',
    durationMonths: 1,
    priceEUR: 15,
    originalPriceEUR: 21,
    waMessageKey: 'pricing',
  },
  {
    id: 'single-3m',
    type: 'single',
    durationLabel: '3 Months',
    durationMonths: 3,
    priceEUR: 30,
    originalPriceEUR: 42,
    waMessageKey: 'pricing',
  },
  {
    id: 'single-6m',
    type: 'single',
    durationLabel: '6 Months',
    durationMonths: 6,
    priceEUR: 45,
    originalPriceEUR: 62,
    waMessageKey: 'pricing',
  },
  {
    id: 'single-1y',
    type: 'single',
    durationLabel: '1 Year',
    durationMonths: 12,
    priceEUR: 70,
    originalPriceEUR: 95,
    isBestValue: true,
    badge: 'FREE app activation included',
    waMessageKey: 'pricing',
  },
];

export const MULTI_PLANS: Plan[] = [
  {
    id: 'multi-2d',
    type: 'multi',
    durationLabel: '1 Year',
    durationMonths: 12,
    devicesCount: 2,
    priceEUR: 120,
    originalPriceEUR: 165,
    badge: '+ 2 FREE App activations',
    waMessageKey: 'pricing',
  },
  {
    id: 'multi-3d',
    type: 'multi',
    durationLabel: '1 Year',
    durationMonths: 12,
    devicesCount: 3,
    priceEUR: 180,
    originalPriceEUR: 249,
    isBestValue: true,
    badge: '+ 3 FREE App activations',
    waMessageKey: 'pricing',
  },
  {
    id: 'multi-4d',
    type: 'multi',
    durationLabel: '1 Year',
    durationMonths: 12,
    devicesCount: 4,
    priceEUR: 210,
    originalPriceEUR: 289,
    badge: '+ 4 FREE App activations',
    waMessageKey: 'pricing',
  },
];

/** Features shown on all plan cards (i18n keys) */
export const PLAN_FEATURES_BASE = [
  'plans.features.channels',
  'plans.features.vod',
  'plans.features.adult',
  'plans.features.vpn',
  'plans.features.devices',
] as const;

/** Features inside the expandable "More details" section (i18n keys) */
export const PLAN_FEATURES_EXTRA = [
  'plans.features.multilingual',
  'plans.features.subtitles',
  'plans.features.vod_updated',
  'plans.features.catchup',
  'plans.features.epg',
] as const;
