'use client';

import { useState } from 'react';
import { Map, Navigation, Globe as GlobeIcon, MapPin } from 'lucide-react';

export default function GlobeControls() {
  const [activeView, setActiveView] = useState<string>('globe');

  const controls = [
    { id: '2d', label: '2D', icon: Map },
    { id: 'timeline', label: 'Timeline', icon: Navigation },
    { id: 'coordinates', label: 'Coordinates', icon: MapPin },
    { id: 'countries', label: 'Countries', icon: GlobeIcon },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
      {controls.map((control) => {
        const Icon = control.icon;
        return (
          <button
            key={control.id}
            onClick={() => setActiveView(control.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${
              activeView === control.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{control.label}</span>
          </button>
        );
      })}
    </div>
  );
}
