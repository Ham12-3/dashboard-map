import { Session, CountryData } from '@/types';

export function aggregateCountryData(sessions: Session[]): Map<string, CountryData> {
  const countryMap = new Map<string, CountryData>();

  sessions.forEach((session) => {
    const existing = countryMap.get(session.countryCode);

    if (existing) {
      existing.sessionCount += 1;
      existing.totalPageviews += session.pageviews;
      existing.avgDuration = (existing.avgDuration * (existing.sessionCount - 1) + session.duration) / existing.sessionCount;
      if (!existing.topCities.includes(session.city)) {
        existing.topCities.push(session.city);
      }
    } else {
      countryMap.set(session.countryCode, {
        code: session.countryCode,
        name: session.country,
        lat: session.lat,
        lng: session.lng,
        sessionCount: 1,
        totalPageviews: session.pageviews,
        avgDuration: session.duration,
        topCities: [session.city],
      });
    }
  });

  return countryMap;
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
}

export function getCountryFlag(code: string): string {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
