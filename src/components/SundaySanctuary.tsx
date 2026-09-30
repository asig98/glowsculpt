import React from 'react';
import { MoodType, Workout } from '../types';
import { Moon, Plus, Minus, Heart, Sparkles, Coffee, Play, Info } from 'lucide-react';

interface SundaySanctuaryProps {
  sleepHours: number;
  waterCups: number;
  selectedMood: MoodType;
  gentleWorkouts: Workout[];
  onAdjustSleep: (delta: number) => void;
  onToggleWaterCup: (index: number) => void;
  onSelectMood: (mood: MoodType) => void;
  onStartFlow: (workout: Workout) => void;
}

export const SundaySanctuary: React.FC<SundaySanctuaryProps> = ({
  sleepHours,
  waterCups,
  selectedMood,
  gentleWorkouts,
  onAdjustSleep,
  onToggleWaterCup,
  onSelectMood,
  onStartFlow,
}) => {
  const moodFeedback: Record<MoodType, { title: string; quote: string; tag: string }> = {
    serene: {
      title: 'Serene & Grounded',
      quote: 'Your body is serene and balanced today. Keep protecting your peace.',
      tag: 'Gentle Energy'
    },
    soft: {
      title: 'Soft Girl Era',
      quote: 'Soft girl mode activated. Honoring gentle boundaries and cozy comfort.',
      tag: 'Nourish & Rest'
    },
    matcha: {
      title: 'Cozy Matcha Flow',
      quote: 'Cozy matcha energy! Perfect for slow mindful movement and self-care.',
      tag: 'Warm Endorphins'
    },
    tired: {
      title: 'Gentle Low Battery',
      quote: 'Low battery? Total permission to rest in bed. Rest is sacred, queen!',
      tag: 'Sacred Sleep'
    }
  };

  const moods: { type: MoodType; label: string; icon: string }[] = [
    { type: 'serene', label: 'Serene', icon: '☁️' },
    { type: 'soft', label: 'Soft', icon: '🌸' },
    { type: 'matcha', label: 'Cozy', icon: '🍵' },
    { type: 'tired', label: 'Low Energy', icon: '🕯️' },
  ];

  return (
    <section className="rounded-3xl glow-card-lavender p-5 sm:p-6 transition-all duration-300 space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-purple-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-xl shadow-2xs">
            🕯️
          </div>
          <div>
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-800">
              Self-Care Sunday Sanctuary
            </h2>
            <p className="text-xs text-purple-700 font-medium">
              Sip tea, honor sleep, and move like water 🌸
            </p>
          </div>
        </div>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
          Sunday Hub
        </span>
      </div>

      {/* Grid: Sleep Tracker & Hydration Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Beauty Sleep Tracker */}
        <div className="bg-white/80 p-4 rounded-2xl border border-purple-100 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-purple-600" />
              <span>Beauty Sleep Tracker</span>
            </span>
            <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
              REM Glow
            </span>
          </div>

          <div className="my-2 text-center py-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="text-2xl sm:text-3xl font-display font-bold text-purple-950 tabular-nums">
              {sleepHours.toFixed(1)} hrs
            </div>
            <p className="text-xs text-purple-700 font-medium mt-0.5">
              {sleepHours >= 8 ? 'Deep, restful REM · Cellular repair ✨' : 'Need a cozy afternoon nap, babe 💤'}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-purple-50">
            <span className="text-[11px] text-slate-500">Log Sleep:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onAdjustSleep(-0.5)}
                className="min-h-[40px] px-3 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold flex items-center gap-1 transition-colors active:scale-95"
                title="Subtract 30 minutes"
              >
                <Minus className="w-3.5 h-3.5" />
                <span>0.5h</span>
              </button>
              <button
                onClick={() => onAdjustSleep(0.5)}
                className="min-h-[40px] px-3 py-1 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 transition-colors active:scale-95 shadow-2xs"
                title="Add 30 minutes"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>0.5h</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tea & Water Hydration Tracker */}
        <div className="bg-white/80 p-4 rounded-2xl border border-pink-100 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-pink-600" />
              <span>Tea & Water Hydration Tracker</span>
            </span>
            <span className="text-[11px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
              {waterCups} / 8 Cups
            </span>
          </div>

          {/* 8 Interactive Pastel Cups */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 my-2">
            {Array.from({ length: 8 }).map((_, idx) => {
              const isFilled = idx < waterCups;
              return (
                <button
                  key={idx}
                  onClick={() => onToggleWaterCup(idx)}
                  className={`min-h-[44px] flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all duration-200 active:scale-95 ${
                    isFilled
                      ? 'bg-gradient-to-t from-pink-200 via-rose-100 to-pink-50 border-pink-300 shadow-2xs text-pink-600 ring-2 ring-pink-200/50'
                      : 'bg-slate-50/80 border-slate-200/80 text-slate-300 hover:border-pink-200'
                  }`}
                  title={`Cup ${idx + 1}: ${isFilled ? 'Hydrated' : 'Tap to fill'}`}
                >
                  <span className="text-base select-none">
                    {isFilled ? (idx % 2 === 0 ? '🍵' : '💖') : '🥤'}
                  </span>
                  <span className="text-[9px] font-semibold mt-0.5">
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-500 text-center">
            {waterCups >= 8
              ? '✨ 8/8 Completed! Your skin & fascia are glowing, queen!'
              : 'Tap cups to log matcha, herbal tea, or electrolyte water 🍵'}
          </p>
        </div>
      </div>

      {/* Sunday Mood Check-In */}
      <div className="bg-white/90 p-4 rounded-2xl border border-purple-100 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5">
            <span>🌸</span>
            <span>Sunday Mood Check-In</span>
          </span>
          <span className="text-[11px] text-purple-700 font-medium">
            How is your heart feeling today?
          </span>
        </div>

        {/* 4 Mood Tap Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {moods.map((m) => {
            const isSelected = selectedMood === m.type;
            return (
              <button
                key={m.type}
                onClick={() => onSelectMood(m.type)}
                className={`min-h-[48px] py-2.5 px-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-md shadow-purple-200'
                    : 'bg-purple-50/60 hover:bg-purple-100/70 text-slate-700 border-purple-200/60'
                }`}
              >
                <span className="text-lg">{m.icon}</span>
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sisterly Feedback Box */}
        <div className="mt-3.5 p-3 rounded-xl bg-purple-50/70 border border-purple-200/60 text-xs text-purple-950 flex items-start gap-2">
          <span className="text-base select-none shrink-0">✨</span>
          <div>
            <span className="font-semibold text-purple-900 block mb-0.5">
              {moodFeedback[selectedMood].title}
            </span>
            <p className="text-slate-700 italic">
              "{moodFeedback[selectedMood].quote}"
            </p>
          </div>
        </div>
      </div>

      {/* Gentle Yoga & Stretch Library */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-bold text-base text-slate-800 flex items-center gap-1.5">
            <span>Gentle Yoga & Stretch Library</span>
            <span className="text-purple-400 text-xs">✨</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Zero jumping · 100% cozy
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {gentleWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="bg-white/95 rounded-2xl p-4 border border-purple-200/70 hover:border-purple-300 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-purple-700 font-medium mb-1.5">
                  <span>{workout.durationMinutes} mins</span>
                  <span>·</span>
                  <span>{workout.intensity}</span>
                  <span>·</span>
                  <span className="text-slate-500">{workout.tag}</span>
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-800">
                  {workout.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {workout.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  3 gentle movements
                </span>
                <button
                  onClick={() => onStartFlow(workout)}
                  className="min-h-[40px] px-3.5 py-1.5 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-semibold flex items-center gap-1.5 transition-colors active:scale-95"
                >
                  <Play className="w-3 h-3 fill-purple-700" />
                  <span>Flow ➔</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
