import { CyclePhaseInfo } from '../types';

export const CYCLE_PHASES: CyclePhaseInfo[] = [
  {
    key: 'luteal',
    title: 'Luteal Flow',
    emoji: '🍵',
    days: 'Days 15–28',
    hormones: 'Progesterone rising · Metabolic rate higher (+100–250 kcal/day)',
    energyLevel: 'Nesting, introspective, cozy & grounded',
    cortisolAdvice: 'Avoid high-intensity HIIT. Cortisol peaks easily; stick to mat pilates, barre, slow walks, and nourishing magnesium-rich foods.',
    idealMovement: 'Mat Pilates, gentle lengthening barre & evening strolls',
    recommendedWorkoutId: 'sunday-reset'
  },
  {
    key: 'menstrual',
    title: 'Menstrual Calm',
    emoji: '🕯️',
    days: 'Days 1–5',
    hormones: 'Estrogen & progesterone at baseline · Deep renewal phase',
    energyLevel: 'Low battery, sacred restorative energy, hibernation mode',
    cortisolAdvice: 'Zero punishment. Cortisol should remain minimal. Rest in bed or do slow yin yoga, deep diaphragmatic breathing, and hot baths.',
    idealMovement: 'Bed stretches, Legs-Up-The-Wall & gentle Yin Yoga',
    recommendedWorkoutId: 'bed-spine-melt'
  },
  {
    key: 'follicular',
    title: 'Follicular Glow',
    emoji: '🌸',
    days: 'Days 6–13',
    hormones: 'Estrogen climbing · Insulin sensitivity peak · Brain fog lifting',
    energyLevel: 'Fresh, bubbly, creative, ready to learn new routines',
    cortisolAdvice: 'Body tolerates physical challenge exceptionally well. Ideal time for progressive pilates resistance, core sculpting, and dance cardio.',
    idealMovement: 'Pilates Princess core sculpting, glute lifts & fresh choreo',
    recommendedWorkoutId: 'weekday-featured'
  },
  {
    key: 'ovulatory',
    title: 'Ovulatory Power',
    emoji: '✨',
    days: 'Days 14–16',
    hormones: 'Estrogen & testosterone peak · Maximum radiance & social magnetism',
    energyLevel: 'Highest confidence, vibrant stamina, magnetic social energy',
    cortisolAdvice: 'Peak strength! You can handle energetic power flows, brisk Hot Girl Walks with friends, and sculpting intervals with ankle weights.',
    idealMovement: 'Power mat pilates, brisk Hot Girl Walks & social workouts',
    recommendedWorkoutId: 'hot-girl-walk-prep'
  }
];
