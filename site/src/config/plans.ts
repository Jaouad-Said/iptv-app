import plansData from '../data/plans.json';

export interface Plan {
  id: string;
  type: 'single' | 'multi';
  durationLabel: string;
  durationMonths: number;
  priceEUR: number;
  originalPriceEUR?: number;
  devicesCount?: number;
  isBestValue?: boolean;
  badge?: string;
  waMessageKey: string;
}

export const SINGLE_PLANS = plansData.singlePlans as Plan[];
export const MULTI_PLANS = plansData.multiPlans as Plan[];
export const PLAN_FEATURES_BASE = plansData.featuresBase;
export const PLAN_FEATURES_EXTRA = plansData.featuresExtra;
