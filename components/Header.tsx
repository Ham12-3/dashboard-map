'use client';

import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Header() {
  const { dateRange, hoveredCountry } = useStore();

  return (
    <div className="w-full h-14 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded border border-gray-700 transition-colors">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">Filter</span>
        </button>

        {hoveredCountry && (
          <div className="text-sm text-gray-400">
            <span className="text-white font-medium">{hoveredCountry}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-gray-400">Live</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded border border-gray-700">
          <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
          <span className="text-sm text-gray-300">{dateRange}</span>
          <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}
