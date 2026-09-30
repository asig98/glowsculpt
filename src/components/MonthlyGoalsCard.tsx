import React from 'react';
import { Target, Footprints, Heart, Plus } from 'lucide-react';

interface MonthlyGoalsCardProps {
  workoutsCompleted: number;
  walkMiles: number;
  restDaysHonored: number;
  onAddWalkMile: (delta: number) => void;
  onAddRestDay: () => void;
}

export const MonthlyGoalsCard: React.FC<MonthlyGoalsCardProps> = ({
  workoutsCompleted,
  walkMiles,
  restDaysHonored,
  onAddWalkMile,
  onAddRestDay,
}) => {
  const workoutTarget = 20;
  const walkTarget = 50;
  const restTarget = 4;

  const workoutPct = Math.min(100, Math.round((workoutsCompleted / workoutTarget) * 100));
  const walkPct = Math.min(100, Math.round((walkMiles / walkTarget) * 100));
  const restPct = Math.min(100, Math.round((restDaysHonored / restTarget) * 100));

  return (
    <section className="rounded-3xl glow-card-peach p-5 sm:p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
            <Target className="w-4 h-4 text-orange-600" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-800">
              Monthly Glow Milestones
            </h3>
            <p className="text-xs text-orange-700/80 font-medium">
              Consistency over perfection ✨
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-900 border border-orange-200">
          October Goals
        </span>
      </div>

      <div className="space-y-4">
        {/* Goal 1: Workouts & Flows */}
        <div className="bg-white/80 p-3.5 rounded-2xl border border-orange-100">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
            <span className="flex items-center gap-1.5">
              <span>🩰</span>
              <span>Workouts & Flows Completed</span>
            </span>
            <span className="tabular-nums text-orange-800">
              {workoutsCompleted} / {workoutTarget} sessions ({workoutPct}%)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-orange-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-300 via-amber-400 to-orange-500 transition-all duration-500"
              style={{ width: `${workoutPct}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {workoutTarget - workoutsCompleted > 0
              ? `${workoutTarget - workoutsCompleted} sessions to complete your monthly ribbon 🎀`
              : 'Goal unlocked! Radiating queen energy 👑'}
          </p>
        </div>

        {/* Goal 2: Hot Girl Walk Miles */}
        <div className="bg-white/80 p-3.5 rounded-2xl border border-purple-100">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-purple-500" />
              <span>Hot Girl Walk Miles</span>
            </span>
            <span className="tabular-nums text-purple-800">
              {walkMiles} / {walkTarget} miles ({walkPct}%)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-purple-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 transition-all duration-500"
              style={{ width: `${walkPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[11px] text-slate-500">
              Fresh air, endorphins & podcasts 🎧
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => onAddWalkMile(1)}
                className="min-h-[32px] px-2.5 py-0.5 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                title="Log 1 mile"
              >
                <Plus className="w-3 h-3" />
                <span>+1 mi</span>
              </button>
              <button
                onClick={() => onAddWalkMile(2)}
                className="min-h-[32px] px-2.5 py-0.5 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                title="Log 2 miles"
              >
                <Plus className="w-3 h-3" />
                <span>+2 mi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Goal 3: Rest Days Honored */}
        <div className="bg-white/80 p-3.5 rounded-2xl border border-pink-100">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              <span>Self-Care & Rest Days Honored</span>
            </span>
            <span className="tabular-nums text-pink-800">
              {restDaysHonored} / {restTarget} taken ({restPct}% ✨)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-pink-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 transition-all duration-500"
              style={{ width: `${restPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[11px] text-slate-500">
              100% of rest days taken! Zero guilt, all repair 🕯️
            </p>
            <button
              onClick={onAddRestDay}
              className="min-h-[32px] px-2.5 py-0.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Log Rest Day"
            >
              <Plus className="w-3 h-3" />
              <span>Log Rest Day</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
