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
    heroImage: '/images/villa-complex.png',
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
        image: '/images/blueprint-base.png',
        description: 'Bespoke structural blueprint displaying coordinate mapping, foundation details, and architectural load-bearing grids.'
      },
      {
        type: 'Interior Framing',
        image: '/images/construction-manager.png',
        description: 'Technical Timber-frame construction and structural column integration, ensuring extreme rigidity and permanence.'
      },
      {
        type: 'Final Finishes',
        image: '/images/luxury-kitchen.png',
        description: 'The finished interior pavilion showing premium muted-gold trim, seamless stone counters, and custom high-contrast cabinetry.'
      }
    ]
  },
  {
    id: 'luxury-estate',
    title: 'Luxury Estate',
    location: 'Aspen, CO',
    scope: '2,100 sqm / Alpine Residence',
    heroImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
        image: '/images/blueprint-drawing.png',
        description: 'CAD-style elevations and structural drawings showing the alpine frame resistance layers.'
      },
      {
        type: 'Interior Framing',
        image: '/images/construction-manager.png',
        description: 'Framing alignment phase with precise joint construction to manage thermal expansion.'
      },
      {
        type: 'Final Finishes',
        image: '/images/luxury-kitchen.png',
        description: 'Gourmet kitchen space featuring built-in state-of-the-art appliances and monolithic stone details.'
      }
    ]
  },
  {
    id: 'urban-development',
    title: 'Urban Development',
    location: 'New York, NY',
    scope: '3,800 sqm / Mixed-Use Residential Hub',
    heroImage: '/images/urban-development.png',
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
        image: '/images/blueprint-base.png',
        description: 'Comprehensive high-detail CAD structural schematics for the urban layout grid.'
      },
      {
        type: 'Interior Framing',
        image: '/images/construction-manager.png',
        description: 'Real-time construction execution, detailing complex steel joints and structural concrete pours.'
      },
      {
        type: 'Final Finishes',
        image: '/images/luxury-kitchen.png',
        description: 'Ultra-modern urban culinary layout showing custom black-slate details and golden architectural task lights.'
      }
    ]
  },
  {
    id: 'architectural-masterpiece',
    title: 'Architectural Masterpiece',
    location: 'Malibu, CA',
    scope: '950 sqm / Oceanfront Luxury Pavilion',
    heroImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
        image: '/images/blueprint-drawing.png',
        description: 'CAD detail of the cantilever structure anchoring to the coastal bluff.'
      },
      {
        type: 'Interior Framing',
        image: '/images/construction-manager.png',
        description: 'Carbon-fiber reinforcement installation, verifying millimeter precision prior to concrete pouring.'
      },
      {
        type: 'Final Finishes',
        image: '/images/luxury-kitchen.png',
        description: 'Premium light-filled interior showing absolute minimalist detailing, white concrete surfaces, and gold finishes.'
      }
    ]
  }
];
