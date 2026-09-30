import React, { useState } from 'react';
import { AFFIRMATIONS, AffirmationItem } from '../data/affirmations';
import { Sparkles, RefreshCw, Quote } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DailyAffirmationCard: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const current: AffirmationItem = AFFIRMATIONS[index];

  const handleShuffle = () => {
    soundFx.playWaterSip();
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % AFFIRMATIONS.length);
      setAnimating(false);
    }, 180);
  };

  return (
    <section className="rounded-3xl glow-card p-5 sm:p-6 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-pink-50/90 via-purple-50/60 to-rose-50/70 border border-pink-200/80">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
            <Quote className="w-4 h-4 fill-pink-300 text-pink-500" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-slate-800">
              Daily Queen Affirmation
            </h3>
            <p className="text-[11px] text-pink-700 font-medium">
              Sisterly words of self-love & grace
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/80 text-pink-700 border border-pink-200">
          {current.moodTag}
        </span>
      </div>

      {/* Quote Container */}
      <div
        className={`my-3 p-4 rounded-2xl bg-white/90 border border-pink-100 transition-opacity duration-200 shadow-2xs ${
          animating ? 'opacity-30 scale-[0.99]' : 'opacity-100 scale-100'
        }`}
      >
        <p className="font-display text-sm sm:text-base text-slate-800 italic leading-relaxed text-center">
          "{current.quote}"
        </p>
        <div className="text-center mt-2 text-xs font-semibold text-pink-700">
          — {current.source}
        </div>
      </div>

      {/* Action to shuffle */}
      <div className="flex items-center justify-between pt-2 border-t border-pink-100/60">
        <span className="text-xs text-slate-500">
          Card {index + 1} of {AFFIRMATIONS.length}
        </span>

        <button
          onClick={handleShuffle}
          className="min-h-[44px] px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm active:scale-95 transition-transform"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${animating ? 'animate-spin' : ''}`} />
          <span>Shuffle Queen Affirmation 👑</span>
        </button>
      </div>
    </section>
  );
};
