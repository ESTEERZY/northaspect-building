export interface ServiceSuburb {
  name: string;
  postcode: string;
}

export interface ServiceRegion {
  id: string;
  region: string;
  description: string;
  suburbs: ServiceSuburb[];
}

export const serviceAreasData: ServiceRegion[] = [
  {
    id: 'northern-beaches',
    region: 'Northern Beaches (Sydney)',
    description: 'Premier coastal residential builds, master carpentry, luxury house extensions & bespoke architectural renovations.',
    suburbs: [
      { name: 'Newport', postcode: '2104' },
      { name: 'Mona Vale', postcode: '2103' },
      { name: 'Bayview', postcode: '2103' },
      { name: 'Warriewood', postcode: '2102' },
      { name: 'Narrabeen', postcode: '2101' },
      { name: 'Elanora Heights', postcode: '2101' },
      { name: 'Cromer', postcode: '2099' },
      { name: 'Dee Why', postcode: '2099' },
      { name: 'Narraweena', postcode: '2099' },
      { name: 'Brookvale', postcode: '2100' },
      { name: 'Allambie Heights', postcode: '2100' },
      { name: 'Freshwater', postcode: '2096' },
      { name: 'Curl Curl', postcode: '2096' },
      { name: 'Fairlight', postcode: '2095' },
      { name: 'Manly', postcode: '2095' },
      { name: 'Queenscliff', postcode: '2095' },
      { name: 'Balgowlah', postcode: '2093' },
      { name: 'Balgowlah Heights', postcode: '2093' },
      { name: 'North Balgowlah', postcode: '2093' },
      { name: 'Manly Vale', postcode: '2093' },
      { name: 'Clontarf', postcode: '2093' },
      { name: 'Belrose', postcode: '2085' },
      { name: 'Davidson', postcode: '2085' },
      { name: 'Terrey Hills', postcode: '2084' },
      { name: 'Duffy\'s Forest', postcode: '2084' },
    ],
  },
  {
    id: 'north-shore',
    region: 'North Shore (Sydney)',
    description: 'Exclusive modern home construction, heritage architectural restorations & artisan timber craftsmanship.',
    suburbs: [
      { name: 'Roseville', postcode: '2069' },
      { name: 'Lindfield', postcode: '2070' },
      { name: 'St Ives', postcode: '2075' },
      { name: 'Killara', postcode: '2071' },
      { name: 'Gordon', postcode: '2072' },
      { name: 'Pymble', postcode: '2073' },
      { name: 'Mosman', postcode: '2088' },
      { name: 'Neutral Bay', postcode: '2089' },
      { name: 'Cremorne', postcode: '2088' },
      { name: 'Cammeray', postcode: '2062' },
      { name: 'Chatswood', postcode: '2067' },
      { name: 'Northbridge', postcode: '2063' },
      { name: 'Naremburn', postcode: '2065' },
      { name: 'Castle Cove', postcode: '2069' },
      { name: 'Willoughby', postcode: '2068' },
      { name: 'Castlecrag', postcode: '2068' },
      { name: 'Middle Cove', postcode: '2068' },
    ],
  },
];
