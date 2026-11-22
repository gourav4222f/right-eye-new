/**
 * Areas we serve from the Rohini office (near Rithala Metro Station).
 *
 * One hub page (/locations/delhi-ncr) covers all of these with genuinely
 * different local detail per area. Do NOT generate a separate thin page per
 * area: near-duplicate city pages are "doorway pages" under Google's spam
 * policies and can hurt the whole site.
 */

export interface ServiceAreaGroup {
  id: string;
  title: string;
  /** What is distinctive about doing business here — unique per group. */
  body: string;
  places: string[];
  /** Typical businesses we work with here. */
  businesses: string[];
}

export const serviceAreas: ServiceAreaGroup[] = [
  {
    id: "north-west-delhi",
    title: "Rohini & North-West Delhi",
    body:
      "Our home ground. From the office near Rithala Metro we are minutes from Rohini's sector markets, the District Centre and the Bawana and Narela industrial areas. We meet clients in person, shoot on location the same day and know the neighbourhoods their customers live in.",
    places: ["Rohini", "Rithala", "Pitampura", "Shalimar Bagh", "Prashant Vihar", "Netaji Subhash Place", "Bawana", "Narela", "Budh Vihar", "Mangolpuri"],
    businesses: ["Coaching institutes and schools", "Clinics and diagnostic centres", "Manufacturers and traders", "Restaurants and cafés", "Showrooms and retail shops"],
  },
  {
    id: "north-delhi",
    title: "North & Central Delhi",
    body:
      "Dense, competitive markets where being found first matters — wholesale and retail around Kamla Nagar and Model Town, the coaching belt of Mukherjee Nagar, and established trading businesses moving their customers online.",
    places: ["Model Town", "Kamla Nagar", "Mukherjee Nagar", "GTB Nagar", "Civil Lines", "Karol Bagh", "Connaught Place"],
    businesses: ["Coaching and test-prep", "Wholesale and retail traders", "Fashion and jewellery", "Professional services"],
  },
  {
    id: "west-south-delhi",
    title: "West & South Delhi",
    body:
      "Neighbourhoods with strong local brands and premium consumers. Here, polished social media, video and reviews decide which salon, clinic, restaurant or boutique people choose.",
    places: ["Janakpuri", "Rajouri Garden", "Punjabi Bagh", "Paschim Vihar", "Dwarka", "Lajpat Nagar", "Saket"],
    businesses: ["Salons, gyms and wellness", "Restaurants and cloud kitchens", "Boutiques and D2C brands", "Real estate and interiors"],
  },
  {
    id: "ncr",
    title: "Gurugram, Noida & the NCR",
    body:
      "Corporate offices, startups and large residential markets. Most of this work runs remotely with scheduled visits for strategy meetings and shoots, and campaigns targeted to each city.",
    places: ["Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Faridabad", "Sonipat", "Bahadurgarh"],
    businesses: ["Startups and SaaS", "Real estate developers", "Corporate and B2B services", "Hospitality and events"],
  },
];

export const allServiceAreaNames = serviceAreas.flatMap((g) => g.places);
