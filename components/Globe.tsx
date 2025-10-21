'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Session, GlobePoint } from '@/types';
import { useStore } from '@/store/useStore';
import { aggregateCountryData } from '@/utils/countryData';

// Dynamically import react-globe.gl to avoid SSR issues
const GlobeGL = dynamic(() => import('react-globe.gl'), { ssr: false });

interface GlobeProps {
  sessions: Session[];
}

export default function Globe({ sessions }: GlobeProps) {
  const globeEl = useRef<any>();
  const [globeReady, setGlobeReady] = useState(false);
  const { setSelectedCountry, setHoveredCountry, selectedCountry } = useStore();

  const points: GlobePoint[] = sessions.map((session) => ({
    lat: session.lat,
    lng: session.lng,
    size: 0.3,
    color: '#ffffff',
    session,
  }));

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;

      // Set initial view
      globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
      setGlobeReady(true);
    }
  }, []);

  useEffect(() => {
    // If a country is selected, zoom to it
    if (selectedCountry && globeEl.current) {
      globeEl.current.pointOfView(
        {
          lat: selectedCountry.lat,
          lng: selectedCountry.lng,
          altitude: 1.5,
        },
        1000
      );
    }
  }, [selectedCountry]);

  const handlePointClick = (point: any, event: MouseEvent) => {
    const globePoint = point as GlobePoint;
    const countryData = aggregateCountryData(sessions);
    const country = countryData.get(globePoint.session.countryCode);

    if (country) {
      // Get click position for popover placement
      const position = {
        x: event.clientX + 10,
        y: event.clientY + 10,
      };
      setSelectedCountry(country, position);
    }
  };

  const handlePointHover = (point: any) => {
    if (point) {
      const globePoint = point as GlobePoint;
      setHoveredCountry(
        `${globePoint.session.city} - ${globePoint.session.country}`
      );
    } else {
      setHoveredCountry(null);
    }
  };

  return (
    <div className="w-full h-full relative">
      <GlobeGL
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={points}
        pointAltitude={0.01}
        pointRadius={(d: any) => (d as GlobePoint).size}
        pointColor={(d: any) => (d as GlobePoint).color}
        pointLabel={(d: any) => {
          const point = d as GlobePoint;
          return `${point.session.city}, ${point.session.country}`;
        }}
        onPointClick={handlePointClick}
        onPointHover={handlePointHover}
        atmosphereColor="#4a9eff"
        atmosphereAltitude={0.15}
        width={typeof window !== 'undefined' ? window.innerWidth * 0.65 : 1000}
        height={typeof window !== 'undefined' ? window.innerHeight : 800}
      />
    </div>
  );
}
