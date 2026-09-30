export type AppMode = 'sunday' | 'weekday';

export type MoodType = 'serene' | 'soft' | 'matcha' | 'tired';

export type CyclePhaseKey = 'luteal' | 'menstrual' | 'follicular' | 'ovulatory';

export interface Exercise {
  id: string;
  name: string;
  durationSeconds: number;
  repsOrBreath?: string;
  cue: string;
  targetArea: string;
  breathTip: string;
}

export interface Workout {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  intensity: 'Restorative' | 'Gentle Sculpt' | 'Low Impact' | 'Soothing Bed Flow';
  tag: string;
  image: string;
  description: string;
  exercises: Exercise[];
  recommendedPhase?: CyclePhaseKey;
  mode: AppMode;
}

export interface CyclePhaseInfo {
  key: CyclePhaseKey;
  title: string;
  emoji: string;
  days: string;
  hormones: string;
  energyLevel: string;
  cortisolAdvice: string;
  idealMovement: string;
  recommendedWorkoutId: string;
}

export interface UserStats {
  onboarded: boolean;
  mode: AppMode;
  waterCups: number;
  sleepHours: number;
  workoutsCompleted: number;
  walkMiles: number;
  restDaysHonored: number;
  selectedMood: MoodType;
  cyclePhase: CyclePhaseKey;
  streakClaimed: boolean;
}
