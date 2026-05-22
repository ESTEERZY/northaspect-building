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
    title: 'Industrial Loft',
    location: 'Brooklyn, NY',
    scope: '1,200 sqm / Urban Transformation',
    heroImage: '/case-studies/industrial-loft/image1.png',
    overview: 'A restoration of a historic warehouse into a contemporary loft residence. The design balances raw industrial character with refined luxury, featuring original brickwork, steel elements, custom dark cabinetry, and an open mezzanine.',
    highlights: [
      'Preserved original historic brickwork and steel truss systems',
      'Custom-designed dark metal kitchen cabinetry with integrated lighting',
      'Monumental steel staircase leading to an open-plan mezzanine'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Masonry & Steel Frame' },
      { label: 'Primary Materials', value: 'Exposed Brick, Corrugated Steel, Concrete' },
      { label: 'Energy Rating', value: 'LEED Gold Certified' },
      { label: 'Architect in Charge', value: 'Elena Vance' },
      { label: 'Interior Scale', value: '1,200 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/industrial-loft/image2.png',
        description: 'Expansive open-plan living area featuring restored brick walls and a custom steel staircase.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/industrial-loft/image3.png',
        description: 'Dark-themed industrial kitchen with concrete finishes, black cabinetry, and warm accent lighting.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/industrial-loft/image1.png',
        description: 'Exterior view highlighting the contrast between the dark corrugated metal cladding and warm interior glow at dusk.'
      }
    ]
  },
  {
    id: 'minimalist-pavilion',
    title: 'Minimalist Pavilion',
    location: 'Portland, OR',
    scope: '650 sqm / Residential Sanctuary',
    heroImage: '/case-studies/minimalist-pavilion/image1.png',
    overview: 'A modernist pavilion nestled in a lush forest landscape. Designed as a residential sanctuary, the home utilizes floor-to-ceiling glass panel walls to dissolve the boundary between interior and exterior spaces, centered around a reflective pool.',
    highlights: [
      'Floor-to-ceiling glass panel walls providing 360-degree forest views',
      'Raw concrete structural core offset by a floating plaster roof line',
      'Reflective swimming pool aligned with the structural geometry'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Concrete & Steel Frame' },
      { label: 'Primary Materials', value: 'Polished Concrete, Limestone, Floor-to-Ceiling Glass' },
      { label: 'Energy Rating', value: 'LEED Platinum Certified' },
      { label: 'Architect in Charge', value: 'Vance & Associates' },
      { label: 'Interior Scale', value: '650 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/minimalist-pavilion/image2.png',
        description: 'Expansive open-plan living lounge with low-profile contemporary sofa looking out onto the garden.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/minimalist-pavilion/image3.png',
        description: 'Minimalist modern kitchen showcasing warm integrated lighting, sleek beige cabinetry, and concrete countertops.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/minimalist-pavilion/image1.png',
        description: 'Exterior view of the flat-roofed pavilion at twilight, reflecting beautifully in the integrated swimming pool.'
      }
    ]
  },
  {
    id: 'modernist-garden-home',
    title: 'Modernist Garden Home',
    location: 'Austin, TX',
    scope: '480 sqm / Contemporary Pavilion',
    heroImage: '/case-studies/modernist-garden-home/image1.png',
    overview: 'An open-concept contemporary garden home blending structural indoor spaces with a massive outdoor terrace and manicured lawn. Built around transparency, the residence features high-clarity glass, timber ceiling details, and a pool.',
    highlights: [
      'Timber-clad outdoor patio ceiling with integrated warm lighting',
      'Deep-water swimming pool running parallel to the transparent living zones',
      'Minimalist dining and kitchen space with custom dark wood cabinetry'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Wood Frame & Steel Columns' },
      { label: 'Primary Materials', value: 'Timber Cladding, Oak Decking, High-Clarity Glass' },
      { label: 'Energy Rating', value: 'LEED Gold Certified' },
      { label: 'Architect in Charge', value: 'Liam Carter' },
      { label: 'Interior Scale', value: '480 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/modernist-garden-home/image2.png',
        description: 'Spacious open-plan living room and kitchen showing how the large sliding glass doors connect directly to the swimming pool.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/modernist-garden-home/image3.png',
        description: 'Custom dark wood kitchen and dining area featuring warm lighting, minimalist white countertops, and bar seating.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/modernist-garden-home/image1.png',
        description: 'Exterior overview of the flat-roofed garden pavilion at dusk, highlighting the illuminated glass spaces.'
      }
    ]
  }
];
