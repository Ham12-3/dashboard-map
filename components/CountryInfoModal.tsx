'use client';

import { useStore } from '@/store/useStore';
import { X, Users, Eye, Clock, MapPin } from 'lucide-react';
import { formatDuration } from '@/utils/countryData';
import { useEffect, useRef } from 'react';

export default function CountryInfoPopover() {
  const { selectedCountry, setSelectedCountry, popoverPosition } = useStore();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setSelectedCountry(null);
      }
    };

    if (selectedCountry) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCountry, setSelectedCountry]);

  if (!selectedCountry || !popoverPosition) return null;

  // Calculate position - adjust to keep popover on screen
  const adjustedX = Math.min(popoverPosition.x, window.innerWidth - 380);
  const adjustedY = Math.min(popoverPosition.y, window.innerHeight - 450);

  return (
    <div
      ref={popoverRef}
      className="fixed z-50 animate-popover-in"
      style={{
        left: `${adjustedX}px`,
        top: `${adjustedY}px`,
      }}
    >
      {/* Arrow pointing to click location */}
      <div
        className="absolute -top-2 left-8 w-4 h-4 bg-gray-900 border-t border-l border-gray-700 transform rotate-45"
      />

      {/* Popover content */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-lg shadow-2xl w-80 mt-2">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-2xl">
                  {String.fromCodePoint(
                    ...selectedCountry.code
                      .toUpperCase()
                      .split('')
                      .map((char) => 127397 + char.charCodeAt(0))
                  )}
                </span>
                {selectedCountry.name}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Analytics Overview
              </p>
            </div>
            <button
              onClick={() => setSelectedCountry(null)}
              className="text-gray-400 hover:text-white transition-colors -mt-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Users className="w-3 h-3" />
                <span className="text-xs">Sessions</span>
              </div>
              <p className="text-xl font-bold text-white">
                {selectedCountry.sessionCount}
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Eye className="w-3 h-3" />
                <span className="text-xs">Pageviews</span>
              </div>
              <p className="text-xl font-bold text-white">
                {selectedCountry.totalPageviews}
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Clock className="w-3 h-3" />
              <span className="text-xs">Avg. Duration</span>
            </div>
            <p className="text-lg font-bold text-white">
              {formatDuration(Math.round(selectedCountry.avgDuration))}
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">Top Cities</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedCountry.topCities.slice(0, 5).map((city) => (
                <span
                  key={city}
                  className="px-2 py-0.5 bg-gray-700 rounded text-xs text-gray-300"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-1 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Avg. {(selectedCountry.totalPageviews / selectedCountry.sessionCount).toFixed(1)} pages per session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
