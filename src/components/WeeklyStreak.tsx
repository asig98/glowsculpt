import React from 'react';
import { Flame, Award, CheckCircle2 } from 'lucide-react';

interface WeeklyStreakProps {
  streakClaimed: boolean;
  onClaimBadge: () => void;
}

export const WeeklyStreak: React.FC<WeeklyStreakProps> = ({ streakClaimed, onClaimBadge }) => {
  const days = [
    { name: 'Mon', icon: '💖', active: true, pulse: false },
    { name: 'Tue', icon: '✨', active: true, pulse: false },
    { name: 'Wed', icon: '💖', active: true, pulse: false },
    { name: 'Thu', icon: '✨', active: true, pulse: false },
    { name: 'Fri', icon: '💖', active: true, pulse: false },
    { name: 'Sat', icon: '💖', active: true, pulse: false },
    { name: 'Sun', icon: '💗', active: true, pulse: true }, // Today (pulsing)
  ];

  return (
    <section className="rounded-3xl glow-card p-5 sm:p-6 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-2xs">
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-bounce" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 flex items-center gap-1.5">
              <span>7-Day Glow Streak</span>
              <span className="text-pink-500 text-xs">✨</span>
            </h3>
            <p className="text-xs text-pink-700 font-medium">
              You showed up, queen! 👑
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-800 border border-pink-200">
          7 / 7 Days Active
        </span>
      </div>

      {/* 7-Day Pill Row */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5 my-3">
        {days.map((day) => (
          <div
            key={day.name}
            className={`flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-2xl transition-all duration-200 border ${
              day.pulse
                ? 'bg-gradient-to-b from-pink-200 to-pink-100 border-pink-400 ring-2 ring-pink-300/60 shadow-sm'
                : 'bg-pink-50/70 border-pink-200/70'
            }`}
          >
            <span className="text-[11px] font-semibold text-slate-600 mb-1">
              {day.name}
            </span>
            <span
              className={`text-base sm:text-lg ${
                day.pulse ? 'animate-pulse scale-110 transform inline-block' : ''
              }`}
            >
              {day.icon}
            </span>
            {day.pulse && (
              <span className="text-[9px] font-bold text-pink-700 mt-1 uppercase tracking-wider">
                Today
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer / Badge Claim Action */}
      <div className="mt-4 pt-3 border-t border-pink-100/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-slate-600">
          <strong className="text-pink-800 font-semibold">Perfect 7/7 Heart Streak Unlocked!</strong> Keep your divine flow alive tomorrow.
        </p>

        {streakClaimed ? (
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Badge Claimed: 7-Day Goddess 👑</span>
          </div>
        ) : (
          <button
            onClick={onClaimBadge}
            className="min-h-[44px] px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Claim Badge ➔</span>
          </button>
        )}
      </div>
    </section>
  );
};
