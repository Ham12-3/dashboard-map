export interface Session {
  id: string;
  name: string;
  timestamp: Date;
  duration: number; // in seconds
  pageviews: number;
  country: string;
  countryCode: string;
  city: string;
  lat: number;
  lng: number;
  browser: 'chrome' | 'firefox' | 'safari' | 'edge';
  os: 'windows' | 'mac' | 'linux' | 'ios' | 'android';
  referrer: 'direct' | 'github' | 'google' | 'twitter' | 'linkedin';
  flag: string;
}

export interface CountryData {
  code: string;
  name: string;
  lat: number;
  lng: number;
  sessionCount: number;
  totalPageviews: number;
  avgDuration: number;
  topCities: string[];
}

export interface GlobePoint {
  lat: number;
  lng: number;
  size: number;
  color: string;
  session: Session;
}

export type ViewMode = '2D' | '3D';
export type MapView = 'globe' | 'coordinates' | 'countries' | 'subdivisions';
