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
  metrics: ProjectMetric[];
  gallery: GalleryItem[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: 'modern-villa-complex',
    title: 'Modern Villa Complex',
    location: 'Beverly Hills, CA',
    scope: '1,450 sqm / Custom Brutalist Villa',
    heroImage: '/case-studies/modern-villa-complex/image1.webp',
    overview: 'Merging brutalist architectural form with the dramatic hillside topography of Beverly Hills. The structure utilizes heavy cast-in-place concrete cantilevers to suspend habitable volumes over the terrain, creating an active dialog between mass and gravity. Floor-to-ceiling glass envelopes frame panoramic views while ensuring a completely seamless transition between the internal structural grid and the external landscaped terraces.',
    metrics: [
      { label: 'Year Completed', value: '2025' },
      { label: 'Structural System', value: 'Post-Tensioned Concrete & Structural Steel' },
      { label: 'Primary Materials', value: 'Board-Formed Concrete, Low-Iron Glass, Muted Gold Steel' },
      { label: 'Energy Rating', value: 'LEED Gold Certified' },
      { label: 'Architect in Charge', value: 'Elena Vance' },
      { label: 'Interior Scale', value: '1,450 sqm' }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/case-studies/modern-villa-complex/image2.webp',
        description: 'Cast-in-place concrete cores and post-tensioned slab formwork detailing.'
      },
      {
        type: 'Interior Framing',
        image: '/case-studies/modern-villa-complex/image3.webp',
        description: 'Board-formed concrete structural framing and load-bearing columns.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/modern-villa-complex/image4.webp',
        description: 'Exposed brutalist concrete walls and custom minimalist glass transitions.'
      }
    ]
  },
  {
    id: 'luxury-estate',
    title: 'Luxury Estate',
    location: 'Aspen, CO',
    scope: '2,100 sqm / Alpine Residence',
    heroImage: '/case-studies/luxury-estate/image1.webp',
    overview: 'A contemporary interpretation of the classic alpine chalet. Designed to withstand extreme climate loads while presenting a light, hovering aesthetic on the snowy slopes of Aspen. Heavy timber glulam columns integrate perfectly with a structural stone core to anchor the building, while double-glazed glass curtain walls frame dramatic snow-capped peaks. The design prioritizes local stone extraction and sustainable wood sourcing.',
    metrics: [
      { label: 'Year Completed', value: '2024' },
      { label: 'Structural System', value: 'Timber Glulam Frame & Stone Core' },
      { label: 'Primary Materials', value: 'Sourced Granite, Alpine Larch Glulam, Insulated Glass' },
      { label: 'Energy Rating', value: 'Passivhaus Standard' },
      { label: 'Architect in Charge', value: 'Elena Vance' },
      { label: 'Interior Scale', value: '2,100 sqm' }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/case-studies/luxury-estate/image2.webp',
        description: 'Site excavation, heavy foundation concrete pour, and primary structural stone core anchoring.'
      },
      {
        type: 'Interior Framing',
        image: '/case-studies/luxury-estate/image3.webp',
        description: 'Alpine larch framing and load-bearing timber columns in winter conditions.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/luxury-estate/image4.webp',
        description: 'Finished modern rustic living area featuring natural stone and larch timber finishes.'
      }
    ]
  },
  {
    id: 'urban-development',
    title: 'Urban Development',
    location: 'New York, NY',
    scope: '3,800 sqm / Mixed-Use Residential Hub',
    heroImage: '/case-studies/urban-development/image1.webp',
    overview: 'Redefining vertical luxury living within a dense urban envelope. This Manhattan project coordinates high-performance steel framing with structural acoustic dampening. By maximizing natural light penetration through complex structural setbacks and terraces, each residence feels expansive and private. The exterior envelope features an innovative pre-weathered steel and bronze facade that echoes the industrial heritage of its neighborhood.',
    metrics: [
      { label: 'Year Completed', value: 'In Progress' },
      { label: 'Structural System', value: 'Composite Steel & Concrete Core' },
      { label: 'Primary Materials', value: 'Structural Steel, Bronze Cladding, Acoustic Insulated Glass' },
      { label: 'Energy Rating', value: 'LEED Platinum Target' },
      { label: 'Architect in Charge', value: 'Elena Vance' },
      { label: 'Interior Scale', value: '3,800 sqm' }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/case-studies/urban-development/image2.webp',
        description: 'Heavy structural steel framing showing columns, beams, and composite metal decks.'
      },
      {
        type: 'Interior Framing',
        image: '/case-studies/urban-development/image3.webp',
        description: 'Installation of high-performance glass curtain walls and structural sound dampening systems.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/urban-development/image4.webp',
        description: 'Completed industrial loft residence with exposed structural steel details.'
      }
    ]
  },
  {
    id: 'architectural-masterpiece',
    title: 'Architectural Masterpiece',
    location: 'Malibu, CA',
    scope: '950 sqm / Oceanfront Luxury Pavilion',
    heroImage: '/case-studies/architectural-masterpiece/image1.webp',
    overview: 'A masterclass in structural minimalist precision. Perched on a coastal bluff in Malibu, this pavilion represents a single-level monumental frame that captures the Pacific Ocean. The architecture utilizes ultra-slender carbon-fiber reinforced concrete supports to create a wide-span living area that is completely free of interior columns. Fully pocketing glass panels slide away, merging the living space with the infinity pool deck.',
    metrics: [
      { label: 'Year Completed', value: '2025' },
      { label: 'Structural System', value: 'Carbon-Fiber Reinforced Concrete' },
      { label: 'Primary Materials', value: 'Exposed White Concrete, Carbon Fiber Columns, Marine-Grade Stainless Steel' },
      { label: 'Energy Rating', value: 'Zero Net Energy (ZNE)' },
      { label: 'Architect in Charge', value: 'Elena Vance' },
      { label: 'Interior Scale', value: '950 sqm' }
    ],
    gallery: [
      {
        type: 'Structural Details',
        image: '/case-studies/architectural-masterpiece/image2.webp',
        description: 'Slender structural columns and wide-span carbon-fiber reinforced concrete pavilion skeleton.'
      },
      {
        type: 'Interior Framing',
        image: '/case-studies/architectural-masterpiece/image3.webp',
        description: 'Framing of minimalist sliding glass wall tracks and oceanfront infinity pool deck reinforcement.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/architectural-masterpiece/image4.webp',
        description: 'Finished seaside pavilion with glass walls fully pocketed, exposing pure white finishes.'
      }
    ]
  }
];
