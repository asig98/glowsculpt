/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useGlowState } from './hooks/useGlowState';
import { WORKOUT_ROUTINES } from './data/workouts';
import { Workout } from './types';
import { TopAppBar } from './components/TopAppBar';
import { QueenPraiseBanner } from './components/QueenPraiseBanner';
import { FeaturedWorkoutCard } from './components/FeaturedWorkoutCard';
import { WeeklyStreak } from './components/WeeklyStreak';
import { MonthlyGoalsCard } from './components/MonthlyGoalsCard';
import { SundaySanctuary } from './components/SundaySanctuary';
import { CycleSyncSection } from './components/CycleSyncSection';
import { DailyAffirmationCard } from './components/DailyAffirmationCard';
import { WelcomeModal } from './components/WelcomeModal';
import { WorkoutPlayerModal } from './components/WorkoutPlayerModal';
import { ClaimBadgeModal } from './components/ClaimBadgeModal';
import { Sparkles, Heart, Compass, Moon, Target, ShieldCheck } from 'lucide-react';

export default function App() {
  const {
    stats,
    toastMessage,
    showToast,
    setOnboarded,
    toggleMode,
    toggleWaterCup,
    adjustSleep,
    selectMood,
    setCyclePhase,
    addWalkMiles,
    addRestDay,
    claimStreakBadge,
    completeWorkout,
  } = useGlowState();

  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  // Auto-trigger welcome modal on 1st visit
  useEffect(() => {
    if (!stats.onboarded) {
      const timer = setTimeout(() => {
        setIsTourOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [stats.onboarded]);

  // Featured workout dynamic based on active mode
  const featuredWorkout =
    stats.mode === 'sunday'
      ? WORKOUT_ROUTINES.find((w) => w.id === 'sunday-featured') || WORKOUT_ROUTINES[0]
      : WORKOUT_ROUTINES.find((w) => w.id === 'weekday-featured') || WORKOUT_ROUTINES[1];

  // Gentle library workouts for Sunday Sanctuary
  const gentleSundayWorkouts = WORKOUT_ROUTINES.filter(
    (w) => w.id === 'sunday-reset' || w.id === 'bed-spine-melt'
  );

  const handleStartFlow = (workout: Workout) => {
    setActiveWorkout(workout);
  };

  const handleCompleteWorkout = (title: string) => {
    completeWorkout(title);
    setActiveWorkout(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F8] via-[#FAF5FF] to-[#FFF8F5] pb-24 text-slate-800 selection:bg-pink-200">
      {/* Top App Bar & Mode Switcher */}
      <TopAppBar
        mode={stats.mode}
        onToggleMode={toggleMode}
        onOpenTour={() => setIsTourOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 space-y-6">
        {/* 1. Queen Praise Banner */}
        <QueenPraiseBanner
          mode={stats.mode}
          workoutsCompleted={stats.workoutsCompleted}
        />

        {/* 2. Today's Featured Workout Card */}
        <section id="featured-workout">
          <FeaturedWorkoutCard
            workout={featuredWorkout}
            onStartFlow={handleStartFlow}
          />
        </section>

        {/* 3. Weekly Glow Streak */}
        <section id="weekly-streak">
          <WeeklyStreak
            streakClaimed={stats.streakClaimed}
            onClaimBadge={() => setIsClaimModalOpen(true)}
          />
        </section>

        {/* 4. Progress Toward Monthly Goals */}
        <section id="monthly-goals">
          <MonthlyGoalsCard
            workoutsCompleted={stats.workoutsCompleted}
            walkMiles={stats.walkMiles}
            restDaysHonored={stats.restDaysHonored}
            onAddWalkMile={addWalkMiles}
            onAddRestDay={addRestDay}
          />
        </section>

        {/* 5. Self-Care Sunday Sanctuary (Gentle Hub) */}
        <section id="sunday-sanctuary">
          <SundaySanctuary
            sleepHours={stats.sleepHours}
            waterCups={stats.waterCups}
            selectedMood={stats.selectedMood}
            gentleWorkouts={gentleSundayWorkouts}
            onAdjustSleep={adjustSleep}
            onToggleWaterCup={toggleWaterCup}
            onSelectMood={selectMood}
            onStartFlow={handleStartFlow}
          />
        </section>

        {/* 6. Cycle-Synced Suggestions */}
        <section id="cycle-sync">
          <CycleSyncSection
            currentPhase={stats.cyclePhase}
            onSelectPhase={setCyclePhase}
            onStartFlow={handleStartFlow}
          />
        </section>

        {/* 7. Daily Motivational Affirmation Card */}
        <section id="affirmation">
          <DailyAffirmationCard />
        </section>

        {/* Sisterly Footer Note */}
        <footer className="pt-6 pb-2 text-center text-xs text-pink-700/80 space-y-1">
          <div className="flex items-center justify-center gap-1.5 font-medium">
            <span>🩰 GlowSculpt Studio</span>
            <span>·</span>
            <span>Soft Girl Era</span>
            <span>·</span>
            <span>Movement as Self-Love 💖</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Listen to your body. Honor your seasons. Radiate your glow ✨
          </p>
        </footer>
      </main>

      {/* Floating Animated Celebration Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-none">
          <div className="bg-slate-900/90 text-white backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-pink-400/40 flex items-center gap-3">
            <span className="text-xl shrink-0 select-none">👑</span>
            <p className="text-xs sm:text-sm font-medium leading-snug flex-1">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Fixed Thumb-Zone Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-pink-100 shadow-lg px-2 py-1.5 flex items-center justify-around max-w-lg mx-auto md:hidden">
        <a
          href="#featured-workout"
          className="min-h-[44px] flex flex-col items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
        >
          <span className="text-lg">🩰</span>
          <span className="text-[10px] font-medium mt-0.5">Today</span>
        </a>

        <a
          href="#sunday-sanctuary"
          className="min-h-[44px] flex flex-col items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
        >
          <span className="text-lg">🕯️</span>
          <span className="text-[10px] font-medium mt-0.5">Sanctuary</span>
        </a>

        <a
          href="#cycle-sync"
          className="min-h-[44px] flex flex-col items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
        >
          <span className="text-lg">🌸</span>
          <span className="text-[10px] font-medium mt-0.5">Cycle</span>
        </a>

        <a
          href="#monthly-goals"
          className="min-h-[44px] flex flex-col items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
        >
          <span className="text-lg">💖</span>
          <span className="text-[10px] font-medium mt-0.5">Goals</span>
        </a>
      </nav>

      {/* Screen 3: First-Time User Welcome Modal */}
      <WelcomeModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onCompleteOnboarding={() => setOnboarded(true)}
      />

      {/* Screen 4: Interactive Studio Workout Player Modal */}
      <WorkoutPlayerModal
        workout={activeWorkout}
        isOpen={Boolean(activeWorkout)}
        onClose={() => setActiveWorkout(null)}
        onComplete={handleCompleteWorkout}
      />

      {/* Badge Unlocked Modal */}
      <ClaimBadgeModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        onClaim={claimStreakBadge}
      />
    </div>
  );
}
