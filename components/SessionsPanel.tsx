'use client';

import { Session } from '@/types';
import { Globe, Monitor, Laptop, Smartphone, TabletSmartphone } from 'lucide-react';
import { formatDuration } from '@/utils/countryData';
import { formatDistanceToNow } from 'date-fns';

interface SessionsPanelProps {
  sessions: Session[];
}

const BrowserIcon = ({ browser }: { browser: string }) => {
  const iconClass = "w-4 h-4 text-gray-400";

  switch (browser) {
    case 'chrome':
      return <Globe className={iconClass} />;
    case 'firefox':
      return <Globe className={iconClass} />;
    case 'safari':
      return <Globe className={iconClass} />;
    case 'edge':
      return <Globe className={iconClass} />;
    default:
      return <Globe className={iconClass} />;
  }
};

const OSIcon = ({ os }: { os: string }) => {
  const iconClass = "w-4 h-4";

  switch (os) {
    case 'windows':
      return <Monitor className={`${iconClass} text-blue-400`} />;
    case 'mac':
      return <Laptop className={`${iconClass} text-gray-400`} />;
    case 'linux':
      return <Monitor className={`${iconClass} text-yellow-400`} />;
    case 'ios':
      return <Smartphone className={`${iconClass} text-gray-300`} />;
    case 'android':
      return <TabletSmartphone className={`${iconClass} text-green-400`} />;
    default:
      return <Monitor className={`${iconClass} text-gray-500`} />;
  }
};

const ReferrerBadge = ({ referrer }: { referrer: string }) => {
  const colors: Record<string, string> = {
    direct: 'bg-gray-700 text-gray-300',
    github: 'bg-purple-900/50 text-purple-300',
    google: 'bg-blue-900/50 text-blue-300',
    twitter: 'bg-sky-900/50 text-sky-300',
    linkedin: 'bg-blue-800/50 text-blue-200',
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs ${colors[referrer]}`}>
      {referrer.charAt(0).toUpperCase() + referrer.slice(1)}
    </span>
  );
};

export default function SessionsPanel({ sessions }: SessionsPanelProps) {
  const recentSessions = sessions.slice(0, 20);

  return (
    <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm border-l border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-white">SESSIONS</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {recentSessions.map((session) => (
          <div
            key={session.id}
            className="p-3 border-b border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{session.flag}</span>
                <span className="text-sm font-medium text-white">
                  {session.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(session.timestamp, { addSuffix: true })}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <BrowserIcon browser={session.browser} />
              <OSIcon os={session.os} />
              <span className="text-xs text-gray-400">
                {session.pageviews} views
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">
                {formatDuration(session.duration)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <ReferrerBadge referrer={session.referrer} />
              <span className="text-xs text-gray-500">{session.city}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-800 text-center">
        <span className="text-xs text-gray-500">
          Showing {recentSessions.length} of {sessions.length} sessions
        </span>
      </div>
    </div>
  );
}
