'use client';

import {
  BarChart3,
  Globe as GlobeIcon,
  FileText,
  Gauge,
  Target,
  Play,
  Filter,
  Route,
  Users,
  Activity,
  UserCircle,
  Zap,
  AlertCircle,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: any;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Web Analytics',
    items: [
      { id: 'main', label: 'Main', icon: BarChart3 },
      { id: 'globe', label: 'Globe', icon: GlobeIcon },
      { id: 'pages', label: 'Pages', icon: FileText },
      { id: 'performance', label: 'Performance', icon: Gauge },
      { id: 'goals', label: 'Goals', icon: Target },
    ],
  },
  {
    title: 'Product Analytics',
    items: [
      { id: 'replay', label: 'Replay', icon: Play },
      { id: 'funnels', label: 'Funnels', icon: Filter },
      { id: 'journeys', label: 'Journeys', icon: Route },
      { id: 'retention', label: 'Retention', icon: Users },
    ],
  },
  {
    title: 'Behavior',
    items: [
      { id: 'sessions', label: 'Sessions', icon: Activity },
      { id: 'users', label: 'Users', icon: UserCircle },
      { id: 'events', label: 'Events', icon: Zap },
      { id: 'errors', label: 'Errors', icon: AlertCircle },
    ],
  },
  {
    title: 'Settings',
    items: [{ id: 'site-settings', label: 'Site Settings', icon: Settings }],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('globe');

  return (
    <div className="w-64 h-full bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-white font-semibold">rybbit.io</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
              {section.title}
            </h3>
            <nav className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-800">
        <div className="text-xs text-gray-500 text-center">
          Dashboard v1.0
        </div>
      </div>
    </div>
  );
}
