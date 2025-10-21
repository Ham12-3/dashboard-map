import { create } from 'zustand';
import { Session, CountryData } from '@/types';

interface PopoverPosition {
  x: number;
  y: number;
}

interface DashboardState {
  selectedCountry: CountryData | null;
  selectedSession: Session | null;
  hoveredCountry: string | null;
  dateRange: string;
  popoverPosition: PopoverPosition | null;
  setSelectedCountry: (country: CountryData | null, position?: PopoverPosition | null) => void;
  setSelectedSession: (session: Session | null) => void;
  setHoveredCountry: (country: string | null) => void;
  setDateRange: (range: string) => void;
  setPopoverPosition: (position: PopoverPosition | null) => void;
}

export const useStore = create<DashboardState>((set) => ({
  selectedCountry: null,
  selectedSession: null,
  hoveredCountry: null,
  dateRange: 'Last 30 days',
  popoverPosition: null,
  setSelectedCountry: (country, position = null) => set({ selectedCountry: country, popoverPosition: position }),
  setSelectedSession: (session) => set({ selectedSession: session }),
  setHoveredCountry: (country) => set({ hoveredCountry: country }),
  setDateRange: (range) => set({ dateRange: range }),
  setPopoverPosition: (position) => set({ popoverPosition: position }),
}));
