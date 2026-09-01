export interface ServiceCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  capabilities: string[];
}

export const serviceTaxonomy: ServiceCategory[] = [
  {
    id: 'additions-structural',
    category: 'Additions & Structural Alterations',
    iconName: 'Home',
    description: 'Custom home expansion, structural wall removal, and open-plan transformations.',
    capabilities: [
      '2nd Storey Additions',
      'Wall Removal & Load-Bearing Modifications',
      'Open-Plan Living Conversions',
      'Structural & Layout Remodelling',
    ],
  },
  {
    id: 'renovations',
    category: 'Internal & External Renovations',
    iconName: 'Hammer',
    description: 'Comprehensive interior remodelling, high-end kitchens, luxury bathrooms, and exterior facelifts.',
    capabilities: [
      'Full Home Renovations',
      'Bathroom Alterations & Custom Redesigns',
      'Kitchen Installations & Alterations',
      'External Facelift & Cladding',
    ],
  },
  {
    id: 'remedial-specialist',
    category: 'Remedial & Specialist Repairs',
    iconName: 'ShieldAlert',
    description: 'Expert structural repairs, roof alterations, and damp/waterproofing remediation.',
    capabilities: [
      'Roof Alterations & Restorations',
      'Damp & Waterproofing Remedial Repairs',
      'General Structural Remedial Works',
    ],
  },
  {
    id: 'outdoor-carpentry',
    category: 'Outdoor Living & Carpentry',
    iconName: 'Sun',
    description: 'Master timber decking, custom pergolas, and outdoor entertainment sanctuaries.',
    capabilities: [
      'Decks & Outdoor Entertaining',
      'Pergolas & Covered Alfresco Areas',
    ],
  },
];
