'use client';

import dynamic from 'next/dynamic';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SessionsPanel from '@/components/SessionsPanel';
import GlobeControls from '@/components/GlobeControls';
import CountryInfoPopover from '@/components/CountryInfoModal';
import { allSessions } from '@/data/mockSessions';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Globe area */}
          <div className="flex-1 relative bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <Globe sessions={allSessions} />
            <GlobeControls />
          </div>

          {/* Sessions panel */}
          <div className="w-96">
            <SessionsPanel sessions={allSessions} />
          </div>
        </div>
      </div>

      {/* Country info popover */}
      <CountryInfoPopover />
    </div>
  );
}
