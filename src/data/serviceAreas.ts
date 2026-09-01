export interface SuburbEntry {
  region: 'Northern Beaches' | 'North Shore';
  suburb: string;
  postcode: string;
}

export const rawServiceAreasDataset: SuburbEntry[] = [
  { region: "Northern Beaches", suburb: "Newport", postcode: "2104" },
  { region: "Northern Beaches", suburb: "Mona Vale", postcode: "2103" },
  { region: "Northern Beaches", suburb: "Bayview", postcode: "2103" },
  { region: "Northern Beaches", suburb: "Warriewood", postcode: "2102" },
  { region: "Northern Beaches", suburb: "Narrabeen", postcode: "2101" },
  { region: "Northern Beaches", suburb: "Elanora Heights", postcode: "2101" },
  { region: "Northern Beaches", suburb: "Cromer", postcode: "2099" },
  { region: "Northern Beaches", suburb: "Dee Why", postcode: "2099" },
  { region: "Northern Beaches", suburb: "Narraweena", postcode: "2099" },
  { region: "Northern Beaches", suburb: "Brookvale", postcode: "2100" },
  { region: "Northern Beaches", suburb: "Allambie Heights", postcode: "2100" },
  { region: "Northern Beaches", suburb: "Freshwater", postcode: "2096" },
  { region: "Northern Beaches", suburb: "Curl Curl", postcode: "2096" },
  { region: "Northern Beaches", suburb: "Fairlight", postcode: "2095" },
  { region: "Northern Beaches", suburb: "Manly", postcode: "2095" },
  { region: "Northern Beaches", suburb: "Queenscliff", postcode: "2095" },
  { region: "Northern Beaches", suburb: "Balgowlah", postcode: "2093" },
  { region: "Northern Beaches", suburb: "Balgowlah Heights", postcode: "2093" },
  { region: "Northern Beaches", suburb: "North Balgowlah", postcode: "2093" },
  { region: "Northern Beaches", suburb: "Manly Vale", postcode: "2093" },
  { region: "Northern Beaches", suburb: "Clontarf", postcode: "2093" },
  { region: "Northern Beaches", suburb: "Belrose", postcode: "2085" },
  { region: "Northern Beaches", suburb: "Davidson", postcode: "2085" },
  { region: "Northern Beaches", suburb: "Terrey Hills", postcode: "2084" },
  { region: "Northern Beaches", suburb: "Duffys Forest", postcode: "2084" },
  { region: "North Shore", suburb: "Roseville", postcode: "2069" },
  { region: "North Shore", suburb: "Lindfield", postcode: "2070" },
  { region: "North Shore", suburb: "St Ives", postcode: "2075" },
  { region: "North Shore", suburb: "Killara", postcode: "2071" },
  { region: "North Shore", suburb: "Gordon", postcode: "2072" },
  { region: "North Shore", suburb: "Pymble", postcode: "2073" },
  { region: "North Shore", suburb: "Mosman", postcode: "2088" },
  { region: "North Shore", suburb: "Neutral Bay", postcode: "2089" },
  { region: "North Shore", suburb: "Cremorne", postcode: "2088" },
  { region: "North Shore", suburb: "Cammeray", postcode: "2062" },
  { region: "North Shore", suburb: "Chatswood", postcode: "2067" },
  { region: "North Shore", suburb: "Northbridge", postcode: "2063" },
  { region: "North Shore", suburb: "Naremburn", postcode: "2065" },
  { region: "North Shore", suburb: "Castle Cove", postcode: "2069" },
  { region: "North Shore", suburb: "Willoughby", postcode: "2068" },
  { region: "North Shore", suburb: "Castlecrag", postcode: "2068" },
  { region: "North Shore", suburb: "Middle Cove", postcode: "2068" }
];

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
    suburbs: rawServiceAreasDataset
      .filter((s) => s.region === 'Northern Beaches')
      .map((s) => ({ name: s.suburb, postcode: s.postcode })),
  },
  {
    id: 'north-shore',
    region: 'North Shore (Sydney)',
    description: 'Exclusive modern home construction, heritage architectural restorations & artisan timber craftsmanship.',
    suburbs: rawServiceAreasDataset
      .filter((s) => s.region === 'North Shore')
      .map((s) => ({ name: s.suburb, postcode: s.postcode })),
  },
];

/**
 * Lead qualification & geographical routing helper function.
 * Matches input string against suburb name or postcode.
 */
export function qualifyLeadGeography(query: string): {
  isQualified: boolean;
  match?: SuburbEntry;
  message: string;
} {
  if (!query || query.trim() === '') {
    return {
      isQualified: false,
      message: 'Please provide a suburb or postcode to verify service qualification.',
    };
  }

  const normalized = query.toLowerCase().trim();

  // Search by exact postcode match or substring suburb match
  const found = rawServiceAreasDataset.find(
    (item) =>
      item.postcode === normalized ||
      item.suburb.toLowerCase() === normalized ||
      normalized.includes(item.suburb.toLowerCase()) ||
      normalized.includes(item.postcode)
  );

  if (found) {
    return {
      isQualified: true,
      match: found,
      message: `Verified Primary Service Area: ${found.suburb} (${found.postcode}) - ${found.region}`,
    };
  }

  return {
    isQualified: true, // Extended service radius consideration
    message: 'Primary target area adjacent - subject to project scope review.',
  };
}
