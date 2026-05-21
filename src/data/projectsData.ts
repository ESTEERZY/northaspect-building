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
    id: 'industrial-loft',
    title: 'Industrial Loft',
    location: 'Brooklyn, NY',
    scope: '1,200 sqm / Urban Transformation',
    heroImage: '/case-studies/industrial-loft/image1.png',
    overview: 'A masterful restoration of a historic industrial warehouse into a contemporary loft residence. The design preserves the original brickwork and steel elements while introducing modern, open-plan living spaces. Featuring a striking black metal exterior cladding, custom-designed dark kitchen cabinetry, and an open mezzanine accessed by a monumental steel staircase, the home balances raw industrial character with refined luxury.',
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
  }
];
