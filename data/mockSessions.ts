import { Session } from '@/types';

const animalNames = [
  'Pink Magpie', 'Salmon Bison', 'Azure Falcon', 'Crimson Panda',
  'Golden Eagle', 'Violet Wolf', 'Emerald Fox', 'Amber Lynx',
  'Indigo Bear', 'Coral Hawk', 'Teal Leopard', 'Scarlet Owl'
];

const cities = [
  { city: 'New York', country: 'United States', code: 'US', lat: 40.7128, lng: -74.0060 },
  { city: 'London', country: 'United Kingdom', code: 'GB', lat: 51.5074, lng: -0.1278 },
  { city: 'Tokyo', country: 'Japan', code: 'JP', lat: 35.6762, lng: 139.6503 },
  { city: 'Paris', country: 'France', code: 'FR', lat: 48.8566, lng: 2.3522 },
  { city: 'Berlin', country: 'Germany', code: 'DE', lat: 52.5200, lng: 13.4050 },
  { city: 'Sydney', country: 'Australia', code: 'AU', lat: -33.8688, lng: 151.2093 },
  { city: 'Toronto', country: 'Canada', code: 'CA', lat: 43.6532, lng: -79.3832 },
  { city: 'São Paulo', country: 'Brazil', code: 'BR', lat: -23.5505, lng: -46.6333 },
  { city: 'Mumbai', country: 'India', code: 'IN', lat: 19.0760, lng: 72.8777 },
  { city: 'Singapore', country: 'Singapore', code: 'SG', lat: 1.3521, lng: 103.8198 },
  { city: 'Dubai', country: 'UAE', code: 'AE', lat: 25.2048, lng: 55.2708 },
  { city: 'Seoul', country: 'South Korea', code: 'KR', lat: 37.5665, lng: 126.9780 },
  { city: 'Mexico City', country: 'Mexico', code: 'MX', lat: 19.4326, lng: -99.1332 },
  { city: 'Amsterdam', country: 'Netherlands', code: 'NL', lat: 52.3676, lng: 4.9041 },
  { city: 'Stockholm', country: 'Sweden', code: 'SE', lat: 59.3293, lng: 18.0686 },
  { city: 'Middletown', country: 'United States', code: 'US', lat: 41.5623, lng: -72.6506 },
];

const browsers = ['chrome', 'firefox', 'safari', 'edge'] as const;
const oses = ['windows', 'mac', 'linux', 'ios', 'android'] as const;
const referrers = ['direct', 'github', 'google', 'twitter', 'linkedin'] as const;

function getCountryFlag(code: string): string {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function generateSession(index: number): Session {
  const location = cities[Math.floor(Math.random() * cities.length)];
  const now = new Date();
  const hoursAgo = Math.floor(Math.random() * 24);

  return {
    id: `session-${index}`,
    name: animalNames[index % animalNames.length],
    timestamp: new Date(now.getTime() - hoursAgo * 60 * 60 * 1000),
    duration: Math.floor(Math.random() * 300) + 10, // 10-310 seconds
    pageviews: Math.floor(Math.random() * 10) + 1,
    country: location.country,
    countryCode: location.code,
    city: location.city,
    lat: location.lat + (Math.random() - 0.5) * 2, // Add some spread
    lng: location.lng + (Math.random() - 0.5) * 2,
    browser: browsers[Math.floor(Math.random() * browsers.length)],
    os: oses[Math.floor(Math.random() * oses.length)],
    referrer: referrers[Math.floor(Math.random() * referrers.length)],
    flag: getCountryFlag(location.code),
  };
}

// Generate 50 sessions
export const mockSessions: Session[] = Array.from({ length: 50 }, (_, i) => generateSession(i));

// Generate additional concentrated sessions around major cities for visual effect
const concentratedSessions: Session[] = [];
cities.slice(0, 6).forEach((location, cityIndex) => {
  for (let i = 0; i < 20; i++) {
    concentratedSessions.push({
      id: `session-concentrated-${cityIndex}-${i}`,
      name: animalNames[Math.floor(Math.random() * animalNames.length)],
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
      duration: Math.floor(Math.random() * 300) + 10,
      pageviews: Math.floor(Math.random() * 10) + 1,
      country: location.country,
      countryCode: location.code,
      city: location.city,
      lat: location.lat + (Math.random() - 0.5) * 0.5,
      lng: location.lng + (Math.random() - 0.5) * 0.5,
      browser: browsers[Math.floor(Math.random() * browsers.length)],
      os: oses[Math.floor(Math.random() * oses.length)],
      referrer: referrers[Math.floor(Math.random() * referrers.length)],
      flag: getCountryFlag(location.code),
    });
  }
});

export const allSessions = [...mockSessions, ...concentratedSessions].sort(
  (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
);
