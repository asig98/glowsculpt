import { useState, useEffect } from 'react';
import { AppMode, MoodType, CyclePhaseKey, UserStats } from '../types';
import { fireGlowConfetti, fireHeartSparkles } from '../utils/confetti';
import { soundFx } from '../utils/audio';

const STORAGE_KEYS = {
  ONBOARDED: 'glowsculpt_onboarded',
  MODE: 'glowsculpt_mode',
  WATER_CUPS: 'glowsculpt_water_cups',
  SLEEP_HOURS: 'glowsculpt_sleep_hours',
  WORKOUTS: 'glowsculpt_workouts_completed',
  WALK_MILES: 'glowsculpt_walk_miles',
  REST_DAYS: 'glowsculpt_rest_days',
  MOOD: 'glowsculpt_selected_mood',
  CYCLE_PHASE: 'glowsculpt_cycle_phase',
  STREAK_CLAIMED: 'glowsculpt_streak_claimed',
};

export function useGlowState() {
  const [stats, setStats] = useState<UserStats>(() => {
    if (typeof window === 'undefined') {
      return {
        onboarded: false,
        mode: 'sunday',
        waterCups: 6,
        sleepHours: 8.5,
        workoutsCompleted: 16,
        walkMiles: 38,
        restDaysHonored: 4,
        selectedMood: 'serene',
        cyclePhase: 'follicular',
        streakClaimed: false,
      };
    }

    try {
      const storedOnboarded = localStorage.getItem(STORAGE_KEYS.ONBOARDED);
      const storedMode = localStorage.getItem(STORAGE_KEYS.MODE) as AppMode | null;
      const storedWater = localStorage.getItem(STORAGE_KEYS.WATER_CUPS);
      const storedSleep = localStorage.getItem(STORAGE_KEYS.SLEEP_HOURS);
      const storedWorkouts = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
      const storedWalkMiles = localStorage.getItem(STORAGE_KEYS.WALK_MILES);
      const storedRestDays = localStorage.getItem(STORAGE_KEYS.REST_DAYS);
      const storedMood = localStorage.getItem(STORAGE_KEYS.MOOD) as MoodType | null;
      const storedPhase = localStorage.getItem(STORAGE_KEYS.CYCLE_PHASE) as CyclePhaseKey | null;
      const storedStreakClaimed = localStorage.getItem(STORAGE_KEYS.STREAK_CLAIMED);

      return {
        onboarded: storedOnboarded ? JSON.parse(storedOnboarded) : false,
        // Default Active Mode: Self-Care Sunday Mode (ACTIVE BY DEFAULT)
        mode: storedMode === 'weekday' ? 'weekday' : 'sunday',
        waterCups: storedWater !== null ? Number(storedWater) : 6,
        sleepHours: storedSleep !== null ? Number(storedSleep) : 8.5,
        workoutsCompleted: storedWorkouts !== null ? Number(storedWorkouts) : 16,
        walkMiles: storedWalkMiles !== null ? Number(storedWalkMiles) : 38,
        restDaysHonored: storedRestDays !== null ? Number(storedRestDays) : 4,
        selectedMood: storedMood || 'serene',
        cyclePhase: storedPhase || 'follicular',
        streakClaimed: storedStreakClaimed ? JSON.parse(storedStreakClaimed) : false,
      };
    } catch {
      return {
        onboarded: false,
        mode: 'sunday',
        waterCups: 6,
        sleepHours: 8.5,
        workoutsCompleted: 16,
        walkMiles: 38,
        restDaysHonored: 4,
        selectedMood: 'serene',
        cyclePhase: 'follicular',
        streakClaimed: false,
      };
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const setOnboarded = (value: boolean) => {
    setStats((prev) => ({ ...prev, onboarded: value }));
    localStorage.setItem(STORAGE_KEYS.ONBOARDED, JSON.stringify(value));
  };

  const toggleMode = () => {
    setStats((prev) => {
      const nextMode: AppMode = prev.mode === 'sunday' ? 'weekday' : 'sunday';
      localStorage.setItem(STORAGE_KEYS.MODE, nextMode);
      showToast(
        nextMode === 'sunday'
          ? '🕯️ Self-Care Sunday Mode Activated! Time for gentle movement & pampering 🌸'
          : '🩰 Weekday Glow Sculpt Mode Activated! High vibe pilates & walks 🎀'
      );
      return { ...prev, mode: nextMode };
    });
  };

  const setWaterCups = (cups: number) => {
    const clamped = Math.max(0, Math.min(8, cups));
    soundFx.playWaterSip();
    setStats((prev) => {
      localStorage.setItem(STORAGE_KEYS.WATER_CUPS, String(clamped));
      if (clamped === 8 && prev.waterCups < 8) {
        fireHeartSparkles();
        showToast('💧 Glow Hydration Goal Crushed! 8/8 cups of pure radiance, queen! ✨');
      }
      return { ...prev, waterCups: clamped };
    });
  };

  const toggleWaterCup = (index: number) => {
    // index is 0..7
    setStats((prev) => {
      let nextCount = prev.waterCups;
      if (index < prev.waterCups) {
        nextCount = index;
      } else {
        nextCount = index + 1;
      }
      soundFx.playWaterSip();
      localStorage.setItem(STORAGE_KEYS.WATER_CUPS, String(nextCount));
      if (nextCount === 8) {
        fireHeartSparkles();
        showToast('💧 Glow Hydration Goal Crushed! 8/8 cups of pure radiance, queen! ✨');
      }
      return { ...prev, waterCups: nextCount };
    });
  };

  const adjustSleep = (delta: number) => {
    setStats((prev) => {
      const nextSleep = Math.max(4, Math.min(14, +(prev.sleepHours + delta).toFixed(1)));
      localStorage.setItem(STORAGE_KEYS.SLEEP_HOURS, String(nextSleep));
      return { ...prev, sleepHours: nextSleep };
    });
  };

  const selectMood = (mood: MoodType) => {
    setStats((prev) => {
      localStorage.setItem(STORAGE_KEYS.MOOD, mood);
      return { ...prev, selectedMood: mood };
    });
  };

  const setCyclePhase = (phase: CyclePhaseKey) => {
    setStats((prev) => {
      localStorage.setItem(STORAGE_KEYS.CYCLE_PHASE, phase);
      return { ...prev, cyclePhase: phase };
    });
  };

  const addWalkMiles = (delta: number) => {
    setStats((prev) => {
      const nextMiles = Math.max(0, prev.walkMiles + delta);
      localStorage.setItem(STORAGE_KEYS.WALK_MILES, String(nextMiles));
      showToast(`👟 Hot Girl Walk updated! +${delta} mile(s) logged 💖`);
      return { ...prev, walkMiles: nextMiles };
    });
  };

  const addRestDay = () => {
    setStats((prev) => {
      const nextDays = prev.restDaysHonored + 1;
      localStorage.setItem(STORAGE_KEYS.REST_DAYS, String(nextDays));
      fireHeartSparkles();
      showToast('🕯️ Sacred rest day honored! Beautiful self-care, queen ✨');
      return { ...prev, restDaysHonored: nextDays };
    });
  };

  const claimStreakBadge = () => {
    setStats((prev) => {
      localStorage.setItem(STORAGE_KEYS.STREAK_CLAIMED, JSON.stringify(true));
      fireGlowConfetti();
      soundFx.playCelebrationChime();
      return { ...prev, streakClaimed: true };
    });
  };

  const completeWorkout = (workoutTitle: string) => {
    setStats((prev) => {
      const nextWorkouts = prev.workoutsCompleted + 1;
      localStorage.setItem(STORAGE_KEYS.WORKOUTS, String(nextWorkouts));
      fireGlowConfetti();
      soundFx.playCelebrationChime();
      showToast(`👑 You showed up, queen! Glowing streak updated! 💖✨ Completed "${workoutTitle}"!`);
      return { ...prev, workoutsCompleted: nextWorkouts };
    });
  };

  return {
    stats,
    toastMessage,
    showToast,
    setOnboarded,
    toggleMode,
    setWaterCups,
    toggleWaterCup,
    adjustSleep,
    selectMood,
    setCyclePhase,
    addWalkMiles,
    addRestDay,
    claimStreakBadge,
    completeWorkout,
  };
}
