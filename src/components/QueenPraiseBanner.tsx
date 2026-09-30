import React from 'react';
import { AppMode } from '../types';
import { Sparkles, Heart } from 'lucide-react';

interface QueenPraiseBannerProps {
  mode: AppMode;
  workoutsCompleted: number;
}

export const QueenPraiseBanner: React.FC<QueenPraiseBannerProps> = ({ mode, workoutsCompleted }) => {
  const isSunday = mode === 'sunday';

  return (
    <section className="relative overflow-hidden rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-pink-100/90 via-pink-50/80 to-purple-100/80 border border-pink-200/80 shadow-md shadow-pink-100/50">
      {/* Decorative ambient elements */}
      <div className="absolute top-2 right-4 text-3xl opacity-30 select-none pointer-events-none animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-2 right-12 text-2xl opacity-20 select-none pointer-events-none">
        🎀
      </div>

      <div className="flex items-start sm:items-center gap-4">
        {/* Glowing Crown Avatar */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400 flex items-center justify-center text-3xl sm:text-4xl shadow-md shadow-pink-300/50 ring-4 ring-white/90 transform hover:scale-105 transition-transform">
            👑
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 border-2 border-white items-center justify-center text-[8px] text-white">
              ♥
            </span>
          </span>
        </div>

        {/* Dynamic Sisterly Copy */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              You showed up, queen! 💖
            </h1>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-700 border border-pink-300/60">
              <Sparkles className="w-3 h-3 text-pink-500" />
              {workoutsCompleted} flows logged
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isSunday ? (
              <>
                <strong className="font-semibold text-purple-900">Soft girl era activated ✨</strong>{' '}
                Today is all about honoring your body with gentle, zero-pressure movement, warm tea, and deep rest.
              </>
            ) : (
              <>
                <strong className="font-semibold text-pink-900">Radiating that girl energy ✨</strong>{' '}
                Grab your cute grip socks and roll out your pink mat. Let’s sculpt, lengthen, and tone without burnout!
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
