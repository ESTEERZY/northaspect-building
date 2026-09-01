export interface ProjectMetric {
  label: string;
  value: string;
}

export interface GalleryItem {
  type: 'Structural Details' | 'Interior Framing' | 'Final Finishes';
  image: string;
  description: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  location: string;
  scope: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  metrics: ProjectMetric[];
  gallery: GalleryItem[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: 'industrial-loft',
    title: 'Coastal Timber Build',
    location: 'Manly, Northern Beaches',
    scope: '450 sqm / Custom Residential Build',
    heroImage: '/case-studies/industrial-loft/image1.png',
    overview: 'A custom residential build showcasing architectural steel and fine timber framing. The home balances rugged structural permanence with refined coastal living spaces, custom dark joinery, and expansive living zones.',
    highlights: [
      'Precision timber framing and custom structural steel detailing',
      'Handcrafted hardwood joinery and custom architectural cabinetry',
      'Open-plan living layout with passive thermal control for coastal living'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Timber Frame & Steel' },
      { label: 'Primary Materials', value: 'Hardwood, Corrugated Steel, Glass' },
      { label: 'Energy Rating', value: '7-Star Energy Rating' },
      { label: 'Master Builder', value: 'NorthAspect Building' },
      { label: 'Interior Scale', value: '450 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/industrial-loft/image2.png',
        description: 'Expansive open-plan living space featuring precision timber posts and custom steel structural accents.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/industrial-loft/image3.png',
        description: 'Bespoke modern kitchen with solid timber cabinetry, stone benchtops, and warm architectural lighting.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/industrial-loft/image1.png',
        description: 'Exterior view highlighting high-durability dark cladding contrasted with natural timber accents.'
      }
    ]
  },
  {
    id: 'minimalist-pavilion',
    title: 'Northern Beaches Pavilion',
    location: 'Avalon Beach, NSW',
    scope: '380 sqm / Architectural Extension & Renovation',
    heroImage: '/case-studies/minimalist-pavilion/image1.png',
    overview: 'A modern pavilion extension nestled into the coastal landscape. Designed as a light-filled residential sanctuary, this renovation utilizes floor-to-ceiling double glazing and custom timber soffits to connect indoor living with nature.',
    highlights: [
      'Floor-to-ceiling high-efficiency glazing for maximum thermal efficiency',
      'Custom artisan timber ceiling paneling and bespoke carpentry detailing',
      'Seamless transition between original dwelling and modern rear extension'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Custom Timber & Steel Hybrid' },
      { label: 'Primary Materials', value: 'Australian Hardwood, Polished Concrete, Glass' },
      { label: 'Energy Rating', value: '7.5-Star Energy Rating' },
      { label: 'Master Builder', value: 'NorthAspect Building' },
      { label: 'Interior Scale', value: '380 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/minimalist-pavilion/image2.png',
        description: 'Open living lounge with integrated timber bench seating and expansive garden views.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/minimalist-pavilion/image3.png',
        description: 'Custom kitchen featuring fine timber joinery, integrated storage, and polished concrete surfaces.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/minimalist-pavilion/image1.png',
        description: 'Exterior view of the new architectural extension illuminated at dusk.'
      }
    ]
  },
  {
    id: 'suburban-elegance',
    title: 'North Shore Residence',
    location: 'Mosman, North Shore',
    scope: '520 sqm / Custom Family Home',
    heroImage: '/case-studies/suburban-elegance/image1.png',
    overview: 'A masterfully crafted custom home built for modern family living across Sydney\'s North Shore. The residence features expansive outdoor deck spaces, custom timber screening, and an elegant two-story facade with high-performance insulation.',
    highlights: [
      'Expansive timber entertaining deck with custom hardwood pergolas',
      'Open-plan kitchen, dining, and living zones filled with natural light',
      'High-performance timber framing and energy-efficient building envelope'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Advanced Timber Frame' },
      { label: 'Primary Materials', value: 'Australian Timber, Rendered Cladding, Glass' },
      { label: 'Energy Rating', value: '7-Star Energy Rating' },
      { label: 'Master Builder', value: 'NorthAspect Building' },
      { label: 'Interior Scale', value: '520 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/suburban-elegance/image2.png',
        description: 'Spacious light-filled living area and kitchen featuring custom timber trims and open layout.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/suburban-elegance/image3.png',
        description: 'Covered outdoor entertaining deck crafted with durable Australian hardwood.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/suburban-elegance/image1.png',
        description: 'Two-story facade showcasing warm timber screening and modern rendered finish.'
      }
    ]
  }
];
