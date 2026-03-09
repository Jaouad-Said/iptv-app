import resellerData from '../data/reseller.json';

export interface ResellerPackage {
  name: string;
  credits: number;
  price: number;
  bestSeller?: boolean;
}

export interface ResellerTier {
  tier: string;
  color: string;
  darkBg: string;
  packages: ResellerPackage[];
}

export const RESELLER_TIERS: ResellerTier[] = resellerData.tiers as ResellerTier[];
export const WHY_RESELL_FEATURES = resellerData.whyResellFeatures;
