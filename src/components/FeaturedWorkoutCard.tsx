import React from 'react';
import { Workout } from '../types';
import { Play, Sparkles, Clock, HeartHandshake } from 'lucide-react';

interface FeaturedWorkoutCardProps {
  workout: Workout;
  onStartFlow: (workout: Workout) => void;
}

export const FeaturedWorkoutCard: React.FC<FeaturedWorkoutCardProps> = ({ workout, onStartFlow }) => {
  const isSunday = workout.mode === 'sunday';

  return (
    <article className="overflow-hidden rounded-3xl glow-card transition-all duration-300 hover:shadow-lg border-2 border-pink-200/80">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
        {/* Workout Visual Asset */}
        <div className="relative md:col-span-5 h-52 md:h-auto min-h-[220px] overflow-hidden bg-pink-100/50">
          <img
            src={workout.image}
            alt={workout.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // Resilient fallback container if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 md:hidden pointer-events-none" />

          {/* Quick badge on image */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-1.5 border border-pink-200/50">
            <span>{isSunday ? '🕯️ Sunday Feature' : '🩰 Weekday Sculpt'}</span>
          </div>
        </div>

        {/* Content & CTA */}
        <div className="p-5 sm:p-6 md:col-span-7 flex flex-col justify-between bg-white/95">
          <div>
            {/* Clean Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-medium text-pink-700 mb-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {workout.durationMinutes} mins
              </span>
              <span aria-hidden="true" className="text-pink-300">·</span>
              <span>{workout.intensity}</span>
              <span aria-hidden="true" className="text-pink-300">·</span>
              <span>{workout.tag}</span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {workout.title}
            </h2>

            <p className="text-xs sm:text-sm text-pink-800/90 font-medium mt-1">
              {workout.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              {workout.description}
            </p>

            {/* Movement Highlights preview */}
            <div className="mt-3 pt-3 border-t border-pink-100 flex flex-wrap gap-2 text-[11px] text-slate-600">
              <span className="font-semibold text-pink-700">3 Gentle Moves:</span>
              {workout.exercises.map((ex, idx) => (
                <span key={ex.id} className="bg-pink-50/80 px-2 py-0.5 rounded-lg border border-pink-200/50">
                  {idx + 1}. {ex.name.split('(')[0].trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mt-5 pt-3">
            <button
              onClick={() => onStartFlow(workout)}
              className="w-full min-h-[48px] px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-pink-300/40 active:scale-[0.98] transition-all duration-200 group"
            >
              <Play className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
              <span>Start Today's Flow 🌸</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
