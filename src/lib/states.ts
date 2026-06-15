/**
 * State-level data powering programmatic "/mortgage-calculator/[state]" pages.
 * Property-tax rates are approximate effective averages and median home prices
 * are indicative; refresh from an authoritative source on a schedule for E-E-A-T.
 */
export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  /** Effective average annual property tax rate, percent of home value. */
  propertyTaxRate: number;
  /** Indicative median home price in dollars. */
  medianHomePrice: number;
  /** Indicative average annual homeowners insurance premium. */
  avgInsurance: number;
}

export const STATES: StateData[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL", propertyTaxRate: 0.39, medianHomePrice: 220000, avgInsurance: 1900 },
  { slug: "alaska", name: "Alaska", abbr: "AK", propertyTaxRate: 1.04, medianHomePrice: 340000, avgInsurance: 1100 },
  { slug: "arizona", name: "Arizona", abbr: "AZ", propertyTaxRate: 0.62, medianHomePrice: 430000, avgInsurance: 1400 },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", propertyTaxRate: 0.61, medianHomePrice: 210000, avgInsurance: 2000 },
  { slug: "california", name: "California", abbr: "CA", propertyTaxRate: 0.71, medianHomePrice: 770000, avgInsurance: 1300 },
  { slug: "colorado", name: "Colorado", abbr: "CO", propertyTaxRate: 0.51, medianHomePrice: 545000, avgInsurance: 1700 },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", propertyTaxRate: 1.79, medianHomePrice: 380000, avgInsurance: 1400 },
  { slug: "delaware", name: "Delaware", abbr: "DE", propertyTaxRate: 0.58, medianHomePrice: 360000, avgInsurance: 900 },
  { slug: "florida", name: "Florida", abbr: "FL", propertyTaxRate: 0.86, medianHomePrice: 410000, avgInsurance: 2400 },
  { slug: "georgia", name: "Georgia", abbr: "GA", propertyTaxRate: 0.81, medianHomePrice: 340000, avgInsurance: 1600 },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", propertyTaxRate: 0.28, medianHomePrice: 840000, avgInsurance: 500 },
  { slug: "idaho", name: "Idaho", abbr: "ID", propertyTaxRate: 0.56, medianHomePrice: 460000, avgInsurance: 1100 },
  { slug: "illinois", name: "Illinois", abbr: "IL", propertyTaxRate: 2.05, medianHomePrice: 270000, avgInsurance: 1300 },
  { slug: "indiana", name: "Indiana", abbr: "IN", propertyTaxRate: 0.81, medianHomePrice: 240000, avgInsurance: 1200 },
  { slug: "iowa", name: "Iowa", abbr: "IA", propertyTaxRate: 1.50, medianHomePrice: 220000, avgInsurance: 1400 },
  { slug: "kansas", name: "Kansas", abbr: "KS", propertyTaxRate: 1.34, medianHomePrice: 230000, avgInsurance: 2200 },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", propertyTaxRate: 0.80, medianHomePrice: 220000, avgInsurance: 1700 },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", propertyTaxRate: 0.55, medianHomePrice: 210000, avgInsurance: 2300 },
  { slug: "maine", name: "Maine", abbr: "ME", propertyTaxRate: 1.24, medianHomePrice: 390000, avgInsurance: 1000 },
  { slug: "maryland", name: "Maryland", abbr: "MD", propertyTaxRate: 1.05, medianHomePrice: 430000, avgInsurance: 1300 },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", propertyTaxRate: 1.14, medianHomePrice: 600000, avgInsurance: 1500 },
  { slug: "michigan", name: "Michigan", abbr: "MI", propertyTaxRate: 1.38, medianHomePrice: 250000, avgInsurance: 1300 },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", propertyTaxRate: 1.05, medianHomePrice: 340000, avgInsurance: 1700 },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", propertyTaxRate: 0.79, medianHomePrice: 190000, avgInsurance: 2100 },
  { slug: "missouri", name: "Missouri", abbr: "MO", propertyTaxRate: 0.97, medianHomePrice: 250000, avgInsurance: 1900 },
  { slug: "montana", name: "Montana", abbr: "MT", propertyTaxRate: 0.74, medianHomePrice: 450000, avgInsurance: 1600 },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", propertyTaxRate: 1.54, medianHomePrice: 270000, avgInsurance: 2300 },
  { slug: "nevada", name: "Nevada", abbr: "NV", propertyTaxRate: 0.55, medianHomePrice: 450000, avgInsurance: 1100 },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", propertyTaxRate: 1.86, medianHomePrice: 460000, avgInsurance: 900 },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", propertyTaxRate: 2.23, medianHomePrice: 490000, avgInsurance: 1200 },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", propertyTaxRate: 0.67, medianHomePrice: 300000, avgInsurance: 1500 },
  { slug: "new-york", name: "New York", abbr: "NY", propertyTaxRate: 1.40, medianHomePrice: 470000, avgInsurance: 1400 },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", propertyTaxRate: 0.70, medianHomePrice: 340000, avgInsurance: 1700 },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", propertyTaxRate: 0.98, medianHomePrice: 280000, avgInsurance: 1700 },
  { slug: "ohio", name: "Ohio", abbr: "OH", propertyTaxRate: 1.41, medianHomePrice: 230000, avgInsurance: 1100 },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", propertyTaxRate: 0.85, medianHomePrice: 210000, avgInsurance: 2700 },
  { slug: "oregon", name: "Oregon", abbr: "OR", propertyTaxRate: 0.86, medianHomePrice: 490000, avgInsurance: 900 },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", propertyTaxRate: 1.41, medianHomePrice: 270000, avgInsurance: 1100 },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", propertyTaxRate: 1.30, medianHomePrice: 440000, avgInsurance: 1500 },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", propertyTaxRate: 0.53, medianHomePrice: 300000, avgInsurance: 1700 },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", propertyTaxRate: 1.08, medianHomePrice: 290000, avgInsurance: 2000 },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", propertyTaxRate: 0.56, medianHomePrice: 360000, avgInsurance: 1700 },
  { slug: "texas", name: "Texas", abbr: "TX", propertyTaxRate: 1.60, medianHomePrice: 350000, avgInsurance: 2400 },
  { slug: "utah", name: "Utah", abbr: "UT", propertyTaxRate: 0.52, medianHomePrice: 530000, avgInsurance: 1100 },
  { slug: "vermont", name: "Vermont", abbr: "VT", propertyTaxRate: 1.78, medianHomePrice: 380000, avgInsurance: 900 },
  { slug: "virginia", name: "Virginia", abbr: "VA", propertyTaxRate: 0.80, medianHomePrice: 400000, avgInsurance: 1200 },
  { slug: "washington", name: "Washington", abbr: "WA", propertyTaxRate: 0.87, medianHomePrice: 600000, avgInsurance: 1100 },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", propertyTaxRate: 0.55, medianHomePrice: 170000, avgInsurance: 1200 },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", propertyTaxRate: 1.51, medianHomePrice: 290000, avgInsurance: 1100 },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", propertyTaxRate: 0.55, medianHomePrice: 350000, avgInsurance: 1400 },
  { slug: "district-of-columbia", name: "District of Columbia", abbr: "DC", propertyTaxRate: 0.55, medianHomePrice: 630000, avgInsurance: 1300 },
];

export function getState(slug: string): StateData | undefined {
  return STATES.find((s) => s.slug === slug);
}
