import React from 'react';
import { Star, Award, Volume2, VolumeX } from 'lucide-react';
import { TopicId } from '../types';

interface NavbarProps {
  activeView: 'hub' | TopicId | 'sijil';
  onNavigate: (view: 'hub' | TopicId | 'sijil') => void;
  totalStars: number;
  onOpenBadges: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  totalStars,
  onOpenBadges,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="no-print bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hub')}
          className="text-lg font-extrabold tracking-tight text-blue-950 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors font-heading text-left"
        >
          Sains Tahun 4 KSSR
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <button
            onClick={() => onNavigate('hub')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'hub' ? 'text-blue-600 underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Lobi Utama
          </button>
          <button
            onClick={() => onNavigate('manusia')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'manusia' ? 'text-blue-600 underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Unit 2: Manusia
          </button>
          <button
            onClick={() => onNavigate('haiwan')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'haiwan' ? 'text-blue-600 underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Unit 3: Haiwan
          </button>
          <button
            onClick={() => onNavigate('bahan')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'bahan' ? 'text-blue-600 underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Unit 8: Bahan
          </button>
          <button
            onClick={() => onNavigate('sijil')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'sijil' ? 'text-blue-600 underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Sijil Digital
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Audio toggle button */}
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Matikan Bunyi' : 'Hidupkan Bunyi'}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Primary Action Button: Badges & Stars */}
          <button
            onClick={onOpenBadges}
            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Star className="w-4 h-4 fill-amber-200 text-amber-200" />
            <span className="tabular-nums">{totalStars}</span>
            <span className="hidden sm:inline">Bintang</span>
            <Award className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          </button>
        </div>
      </div>
    </header>
  );
};
