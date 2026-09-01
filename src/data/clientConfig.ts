export interface ClientMetadata {
  contactName: string;
  businessName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  targetBudgetMin: number;
  targetBudgetMax: number;
  targetBudgetLabel: string;
  serviceRegions: string[];
}

export const clientConfig: ClientMetadata = {
  contactName: 'Chris (Aspect North)',
  businessName: 'NorthAspect Building',
  phone: '0414 920 942',
  phoneRaw: '0414920942',
  email: 'aspectnorthccooke@gmail.com',
  targetBudgetMin: 10000,
  targetBudgetMax: 200000,
  targetBudgetLabel: '$10,000 – $200,000 AUD (Small to Medium Residential Building)',
  serviceRegions: ['Northern Beaches', 'North Shore'],
};

export interface BudgetTier {
  id: string;
  label: string;
  range: string;
  isTarget: boolean;
}

export const budgetTiers: BudgetTier[] = [
  { id: 'under_10k', label: 'Under $10,000 AUD', range: '< $10k', isTarget: false },
  { id: '10k_25k', label: '$10,000 – $25,000 AUD (Carpentry & Remedial Repairs)', range: '$10k–$25k', isTarget: true },
  { id: '25k_50k', label: '$25,000 – $50,000 AUD (Decks, Pergolas & Structural Alterations)', range: '$25k–$50k', isTarget: true },
  { id: '50k_100k', label: '$50,000 – $100,000 AUD (Kitchen, Bathroom & Facelift Renovations)', range: '$50k–$100k', isTarget: true },
  { id: '100k_200k', label: '$100,000 – $200,000 AUD (Full Home Renovations & 2nd Storey Additions)', range: '$100k–$200k', isTarget: true },
  { id: 'over_200k', label: '$200,000+ AUD (Major Custom Residential Builds)', range: '$200k+', isTarget: true },
];
