import React from 'react';
import { CyclePhaseKey, Workout } from '../types';
import { CYCLE_PHASES } from '../data/cyclePhases';
import { WORKOUT_ROUTINES } from '../data/workouts';
import { Sparkles, Activity, ShieldAlert, ArrowRight, Play } from 'lucide-react';

interface CycleSyncSectionProps {
  currentPhase: CyclePhaseKey;
  onSelectPhase: (phase: CyclePhaseKey) => void;
  onStartFlow: (workout: Workout) => void;
}

export const CycleSyncSection: React.FC<CycleSyncSectionProps> = ({
  currentPhase,
  onSelectPhase,
  onStartFlow,
}) => {
  const activePhaseInfo = CYCLE_PHASES.find((p) => p.key === currentPhase) || CYCLE_PHASES[0];

  const recommendedWorkout =
    WORKOUT_ROUTINES.find((w) => w.id === activePhaseInfo.recommendedWorkoutId) ||
    WORKOUT_ROUTINES[0];

  return (
    <section className="rounded-3xl glow-card p-5 sm:p-6 transition-all duration-300 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
            🌸
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-800">
              Cycle-Synced Movement Guidance
            </h3>
            <p className="text-xs text-pink-700 font-medium">
              Honor your biological rhythm & avoid cortisol spikes
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-slate-500 self-start sm:self-auto">
          Sync with your 28-day cycle
        </span>
      </div>

      {/* 4 Phase Selectors (Segmented Interactive Controls) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CYCLE_PHASES.map((phase) => {
          const isActive = phase.key === currentPhase;
          return (
            <button
              key={phase.key}
              onClick={() => onSelectPhase(phase.key)}
              className={`min-h-[48px] py-2 px-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-sm shadow-pink-200'
                  : 'bg-white hover:bg-pink-50/60 text-slate-700 border-pink-200/60'
              }`}
            >
              <span>{phase.emoji}</span>
              <span className="truncate">{phase.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Details Card */}
      <div className="bg-gradient-to-br from-pink-50/60 via-purple-50/40 to-white p-4 sm:p-5 rounded-2xl border border-pink-200/70 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{activePhaseInfo.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-base text-slate-900">
                  {activePhaseInfo.title}
                </h4>
                <span className="text-[11px] font-semibold text-pink-700 bg-pink-100/70 px-2 py-0.5 rounded-full">
                  {activePhaseInfo.days}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {activePhaseInfo.hormones}
              </p>
            </div>
          </div>
        </div>

        {/* Cortisol & Energy Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white/90 border border-pink-100">
            <span className="font-semibold text-pink-900 block mb-1 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-pink-600" />
              Energy & Vibe
            </span>
            <p className="text-slate-600 leading-relaxed">
              {activePhaseInfo.energyLevel}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/90 border border-purple-100">
            <span className="font-semibold text-purple-900 block mb-1 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-purple-600" />
              Cortisol Protection
            </span>
            <p className="text-slate-600 leading-relaxed">
              {activePhaseInfo.cortisolAdvice}
            </p>
          </div>
        </div>

        {/* Recommended Routine for this Phase */}
        <div className="pt-2 border-t border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs">
            <span className="text-slate-500 font-medium">Synced Flow: </span>
            <strong className="text-slate-800">{recommendedWorkout.title}</strong>
            <span className="text-pink-600 ml-1">({recommendedWorkout.durationMinutes}m)</span>
          </div>

          <button
            onClick={() => onStartFlow(recommendedWorkout)}
            className="min-h-[40px] px-4 py-1.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-all self-start sm:self-auto"
          >
            <Play className="w-3 h-3 fill-white" />
            <span>Start Synced Flow 🌸</span>
          </button>
        </div>
      </div>
    </section>
  );
};
