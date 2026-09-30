import { Workout } from '../types';

export const WORKOUT_ROUTINES: Workout[] = [
  {
    id: 'sunday-featured',
    title: 'Lavender Cloud Yin Yoga & Lymphatic Drain',
    subtitle: 'Hip openers, butterfly stretches & legs-up-the-wall elevation',
    durationMinutes: 15,
    intensity: 'Restorative',
    tag: 'Zero Jumping · Stress Relief',
    image: '/src/assets/images/workout_yin_yoga_1790807804062.jpg',
    description: 'A slow, dreamy Sunday flow designed to calm your central nervous system, drain lymphatic fluids, and melt tight hips after a long week.',
    mode: 'sunday',
    recommendedPhase: 'menstrual',
    exercises: [
      {
        id: 'move-1',
        name: 'Butterfly Spine Melt (Baddha Konasana)',
        durationSeconds: 45,
        repsOrBreath: '10 deep nasal breaths',
        cue: 'Bring soles of feet together, let knees fall open softly like butterfly wings. Fold forward from hips and soften your neck completely.',
        targetArea: 'Adductors, sacrum & gentle spinal decompression',
        breathTip: 'Inhale for 4 counts expanding your belly, exhale for 6 counts dropping your shoulders away from ears.'
      },
      {
        id: 'move-2',
        name: 'Supine Reclined Heart & Hip Opener',
        durationSeconds: 45,
        repsOrBreath: 'Smooth passive stretch',
        cue: 'Rest back on your mat or pillows. Draw arms out into a soft cactus shape. Let gravity open your chest and hips with zero pulling or strain.',
        targetArea: 'Pectorals, chest cavity, hip flexors',
        breathTip: 'Imagine breathing pink warm light directly into your heart space with every gentle inhalation.'
      },
      {
        id: 'move-3',
        name: 'Legs-Up-The-Wall Lymphatic Flush',
        durationSeconds: 60,
        repsOrBreath: 'Circulatory release',
        cue: 'Scoot hips close to a wall, headboard or couch and extend legs upward. Relax ankles and let gravity drain stagnant fluid down toward your lymph nodes.',
        targetArea: 'Venous circulation, ankles, parasympathetic reset',
        breathTip: 'Close your eyes. Soften your jaw, brow, and tongue. You are safe, supported, and recharging.'
      }
    ]
  },
  {
    id: 'weekday-featured',
    title: 'Pilates Princess: 15-Min Core & Glute Lift',
    subtitle: 'Pointed toes, tabletop pulses & waistline contouring',
    durationMinutes: 15,
    intensity: 'Gentle Sculpt',
    tag: 'Low Impact · Mat Only',
    image: '/src/assets/images/workout_pilates_princess_1790807815393.jpg',
    description: 'A chic, lengthening mat series focusing on micro-pulses, pointed ballet toes, pelvic floor stabilization, and toning the glute-hamstring tie-in.',
    mode: 'weekday',
    recommendedPhase: 'follicular',
    exercises: [
      {
        id: 'wp-1',
        name: 'Pointed Toe Tabletop Glute Pulses',
        durationSeconds: 45,
        repsOrBreath: '20 pulses right / 20 pulses left',
        cue: 'Come to hands and knees. Keep ribs knitted together and spine long. Float one leg up, point toes like a ballerina, and pulse upward 2 inches.',
        targetArea: 'Gluteus maximus, hamstrings & pelvic floor',
        breathTip: 'Exhale sharply through pursed lips on every upward pulse to engage your transverse abdominis.'
      },
      {
        id: 'wp-2',
        name: 'Coquette Mermaid Waistline Sweeps',
        durationSeconds: 45,
        repsOrBreath: '12 controlled sweeps per side',
        cue: 'Sit with knees folded in a mermaid pinwheel. Sweep your top arm in a graceful rainbow arc overhead, lengthening your side body and obliques.',
        targetArea: 'Obliques, serratus & elegant spinal articulation',
        breathTip: 'Inhale to reach long through your fingertips, exhale to ground both hips softly into the mat.'
      },
      {
        id: 'wp-3',
        name: 'Low-Impact Glute Bridge & Inner Thigh Squeeze',
        durationSeconds: 45,
        repsOrBreath: '15 slow rolls + 10s isometric hold',
        cue: 'Lie on your back, knees hip-distance apart. Articulate spine off the mat one vertebra at a time, squeezing an imaginary Pilates ring between inner thighs.',
        targetArea: 'Posterior chain, inner thighs, lower core',
        breathTip: 'Hold at the peak for 3 slow seconds, whispering an affirmation: I am strong, graceful, and glowing.'
      }
    ]
  },
  {
    id: 'sunday-reset',
    title: 'Sunday Reset: Full Body Unwind',
    subtitle: 'Gentle torso twists, cat-cow glides & childs pose',
    durationMinutes: 12,
    intensity: 'Restorative',
    tag: 'Cozy Morning or Evening',
    image: '/src/assets/images/hero_wellness_sanctuary_1790807824380.jpg',
    description: 'Release Sunday scaries with slow floor movements that release mid-back tension and shoulder heaviness.',
    mode: 'sunday',
    recommendedPhase: 'luteal',
    exercises: [
      {
        id: 'sr-1',
        name: 'Wide-Knee Child’s Pose Ribcage Breaths',
        durationSeconds: 45,
        repsOrBreath: 'Deep grounding',
        cue: 'Big toes touch, knees open wide as your mat. Walk fingertips forward, melting forehead down. Focus on 3D breathing into lateral ribcage.',
        targetArea: 'Lats, lower back, inner thighs',
        breathTip: 'Deep exhale sending warm relaxing energy all the way to your lower spine.'
      },
      {
        id: 'sr-2',
        name: 'Liquid Cat-Cow Spine Waves',
        durationSeconds: 45,
        repsOrBreath: '10 smooth waves',
        cue: 'On all fours, undulate through spine like gentle water ripples. Inhale dip belly lift collarbones, exhale tuck tailbone round upper back.',
        targetArea: 'Spine mobility, shoulder blades, neck ease',
        breathTip: 'Move at your own natural tempo without forcing end ranges.'
      },
      {
        id: 'sr-3',
        name: 'Thread-The-Needle Shoulder Melt',
        durationSeconds: 45,
        repsOrBreath: 'Both sides equally',
        cue: 'Slide one arm under chest until your shoulder and temple rest comfortably on the mat. Enjoy the gentle twist across your thoracic spine.',
        targetArea: 'Deltoids, rhomboids, upper spine',
        breathTip: 'With each exhale, let your jaw unclench and shoulders melt.'
      }
    ]
  },
  {
    id: 'bed-spine-melt',
    title: 'Cuddle Bed Spine & Hip Melt',
    subtitle: '100% in-bed mobility for cozy slow mornings',
    durationMinutes: 10,
    intensity: 'Soothing Bed Flow',
    tag: 'No Mat Needed · Bed Friendly',
    image: '/src/assets/images/workout_yin_yoga_1790807804062.jpg',
    description: 'Zero need to even get out of your pajamas. Gentle wake-up stretches directly on your mattress to wake up stiff joints.',
    mode: 'sunday',
    recommendedPhase: 'menstrual',
    exercises: [
      {
        id: 'cbm-1',
        name: 'Morning Pillow Hug & Side Body Stretch',
        durationSeconds: 40,
        repsOrBreath: '6 slow breaths each side',
        cue: 'Curl up hugging your favorite pillow, gently elongating side waist and ribcage while letting hips rest heavy.',
        targetArea: 'Side waist, thoracic spine',
        breathTip: 'Soothing long inhales with peaceful sighs.'
      },
      {
        id: 'cbm-2',
        name: 'Supine Knee-to-Chest Gentle Rock',
        durationSeconds: 40,
        repsOrBreath: 'Gentle circles',
        cue: 'Draw both knees toward chest, holding shins softly. Massage sacrum against your mattress in small, comforting circles.',
        targetArea: 'Lower lumbar, sacrum, digestion',
        breathTip: 'Release any belly tension completely; let tummy be soft.'
      },
      {
        id: 'cbm-3',
        name: 'Bedtime Feet Ankle Rolls & Point-Flex',
        durationSeconds: 40,
        repsOrBreath: '15 rolls per direction',
        cue: 'Prop pillows under calves. Rotate ankles clockwise, then counter-clockwise, followed by ballerina point and gentle flexes.',
        targetArea: 'Ankles, calf muscles, circulation',
        breathTip: 'Grounding rhythm, breathing calmness into toes and soles.'
      }
    ]
  },
  {
    id: 'hot-girl-walk-prep',
    title: 'Hot Girl Walk: Pre-Stroll Activation',
    subtitle: 'Hip circles, calf pumps & posture alignment',
    durationMinutes: 8,
    intensity: 'Low Impact',
    tag: 'Pre-Walk Ritual',
    image: '/src/assets/images/workout_pilates_princess_1790807815393.jpg',
    description: 'Get your mind and body ready for a sunny outdoor or treadmill Hot Girl Walk with music and positive vibes.',
    mode: 'weekday',
    recommendedPhase: 'ovulatory',
    exercises: [
      {
        id: 'hgw-1',
        name: 'Standing Ballet Calf Rises & Ankle Rolls',
        durationSeconds: 45,
        repsOrBreath: '20 controlled rises',
        cue: 'Stand tall with posture pulled toward the ceiling. Rise onto balls of feet, hold for 1 count, lower with control.',
        targetArea: 'Calves, achilles tendon, balance',
        breathTip: 'Inhale lift, exhale lower smoothly.'
      },
      {
        id: 'hgw-2',
        name: 'Standing Hip Hula Circles & Openers',
        durationSeconds: 45,
        repsOrBreath: '8 circles each direction',
        cue: 'Hands on hips, soften knees. Draw big, smooth circles with your pelvis to unlock hip capsules before walking.',
        targetArea: 'Hip flexors, pelvis, lumbar spine',
        breathTip: 'Relax shoulders and breathe fluidly.'
      },
      {
        id: 'hgw-3',
        name: 'Heart Opener & Posture Lengthener',
        durationSeconds: 45,
        repsOrBreath: 'Hold and pulse gently',
        cue: 'Interlace fingers behind lower back. Roll shoulders back and down, expanding chest and lifting gaze slightly.',
        targetArea: 'Pectorals, posture, anterior shoulders',
        breathTip: 'Feel your chest expand with confidence and that-girl energy.'
      }
    ]
  }
];
