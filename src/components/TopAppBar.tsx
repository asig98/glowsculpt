import React from 'react';
import { AppMode } from '../types';
import { Sparkles, HelpCircle, ArrowRightLeft } from 'lucide-react';

interface TopAppBarProps {
  mode: AppMode;
  onToggleMode: () => void;
  onOpenTour: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ mode, onToggleMode, onOpenTour }) => {
  const isSunday = mode === 'sunday';

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/85 border-b border-pink-100/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-pink-300 to-purple-300 flex items-center justify-center text-xl shadow-sm shadow-pink-200">
              🩰
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-semibold text-lg sm:text-xl text-slate-800 tracking-tight">
                  GlowSculpt
                </span>
                <span className="text-pink-400 text-xs">✨</span>
              </div>
              <p className="text-[11px] sm:text-xs text-pink-700/80 font-medium">
                Pilates & Self-Care Studio
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTour}
              className="min-h-[44px] px-3.5 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 border border-pink-200/70 active:scale-95 shadow-xs"
              title="Open App Tour"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>App Tour 🎀</span>
            </button>
          </div>
        </div>

        {/* Mode Switcher Banner / Pill */}
        <div className="mt-2.5 pt-2 border-t border-pink-100/60">
          <div
            className={`rounded-2xl p-2.5 sm:p-3 transition-all duration-300 border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 ${
              isSunday
                ? 'bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50/70 border-purple-200/80 shadow-xs'
                : 'bg-gradient-to-r from-pink-50 via-rose-50 to-orange-50/60 border-pink-200/80 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {isSunday ? '🕯️' : '🩰'}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {isSunday ? 'Self-Care Sunday Mode: ACTIVE' : 'Weekday Glow Sculpt Mode: ACTIVE'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/80 font-medium text-pink-700 border border-pink-200/60 shadow-2xs">
                    {isSunday ? '🌸 Sunday Hub' : '🎀 High Vibe'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 truncate mt-0.5">
                  {isSunday
                    ? 'Gentle yoga, stretching, sleep & mood check-ins'
                    : 'Mat pilates, booty burn & Hot Girl Walks'}
                </p>
              </div>
            </div>

            <button
              onClick={onToggleMode}
              className={`min-h-[44px] self-start sm:self-auto px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 shadow-sm active:scale-95 whitespace-nowrap ${
                isSunday
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200'
                  : 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-200'
              }`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Switch to {isSunday ? 'Weekday Mode ⇄' : 'Sunday Mode ⇄'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
