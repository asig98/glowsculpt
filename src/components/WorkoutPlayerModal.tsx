import React, { useState, useEffect, useRef } from 'react';
import { Workout, Exercise } from '../types';
import { Play, Pause, SkipForward, SkipBack, X, Volume2, VolumeX, CheckCircle, Sparkles, Heart } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface WorkoutPlayerModalProps {
  workout: Workout | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (workoutTitle: string) => void;
}

export const WorkoutPlayerModal: React.FC<WorkoutPlayerModalProps> = ({
  workout,
  isOpen,
  onClose,
  onComplete,
}) => {
  if (!isOpen || !workout) return null;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(workout.exercises[0]?.durationSeconds || 45);
  const [isRunning, setIsRunning] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const currentExercise: Exercise = workout.exercises[currentIdx] || workout.exercises[0];
  const totalExercises = workout.exercises.length;
  const initialDuration = currentExercise.durationSeconds;

  // Progress for circle stroke
  const strokeProgress = ((initialDuration - timeLeft) / initialDuration) * 100;
  const circumference = 2 * Math.PI * 48; // radius 48
  const strokeDashoffset = circumference - (strokeProgress / 100) * circumference;

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 4 && prev > 1) {
            soundFx.playSoftTick();
          }
          if (prev === 1) {
            soundFx.playBellChime();
            // Auto advance or complete
            if (currentIdx < totalExercises - 1) {
              setTimeout(() => {
                goToNextExercise();
              }, 400);
            } else {
              setTimeout(() => {
                handleFinishWorkout();
              }, 400);
            }
          }
          return Math.max(0, prev - 1);
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, currentIdx, totalExercises]);

  const togglePlayPause = () => {
    setIsRunning((prev) => !prev);
  };

  const toggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundFx.setMuted(nextMute);
  };

  const goToNextExercise = () => {
    if (currentIdx < totalExercises - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setTimeLeft(workout.exercises[nextIdx].durationSeconds);
      setIsRunning(true);
      soundFx.playBellChime();
    } else {
      handleFinishWorkout();
    }
  };

  const goToPrevExercise = () => {
    if (currentIdx > 0) {
      const prevIdx = currentIdx - 1;
      setCurrentIdx(prevIdx);
      setTimeLeft(workout.exercises[prevIdx].durationSeconds);
      setIsRunning(true);
    }
  };

  const handleFinishWorkout = () => {
    setIsRunning(false);
    setShowCelebration(true);
    setTimeout(() => {
      onComplete(workout.title);
      setShowCelebration(false);
      onClose();
    }, 1800);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-200 shadow-2xl overflow-hidden p-5 sm:p-7 flex flex-col justify-between max-h-[92vh]">
        {/* Celebration Overlay if finished */}
        {showCelebration && (
          <div className="absolute inset-0 z-20 bg-pink-500/90 backdrop-blur-md flex flex-col items-center justify-center text-white text-center p-6 animate-in zoom-in-95 duration-300">
            <span className="text-5xl mb-3 animate-bounce">👑</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              You showed up, queen! 💖
            </h3>
            <p className="text-sm font-medium text-pink-100 max-w-xs">
              Flow complete! Glowing streak updated & heart unlocked ✨
            </p>
          </div>
        )}

        {/* Top Bar: Title & Mute / Close */}
        <div className="flex items-center justify-between border-b border-pink-100 pb-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-pink-700">
              <span>🩰</span>
              <span>Glow Studio Player</span>
            </div>
            <h3 className="font-display font-bold text-sm sm:text-base text-slate-800 line-clamp-1">
              {workout.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleSound}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Exit Workout"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Exercise Progress Step Indicator */}
        <div className="my-3">
          <div className="flex items-center justify-between text-xs font-semibold text-pink-700 mb-1">
            <span>
              Movement {currentIdx + 1} of {totalExercises}: {currentExercise.name.split('(')[0].trim()}
            </span>
            <span>{Math.round(((currentIdx + 1) / totalExercises) * 100)}%</span>
          </div>

          {/* Stepper Dots */}
          <div className="grid grid-cols-3 gap-1.5">
            {workout.exercises.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < currentIdx
                    ? 'bg-pink-500'
                    : i === currentIdx
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse'
                    : 'bg-pink-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Circular Countdown Timer */}
        <div className="flex flex-col items-center justify-center my-3 sm:my-4">
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="48"
                className="stroke-pink-100"
                strokeWidth="7"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                className="stroke-pink-500 transition-all duration-300 ease-linear"
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="font-display text-3xl sm:text-4xl font-bold text-slate-800 tabular-nums">
                {formatTime(timeLeft)}
              </span>
              <span className="text-[11px] font-semibold text-pink-700 uppercase tracking-wider mt-0.5">
                {isRunning ? 'Breathe Deeply' : 'Paused'}
              </span>
            </div>
          </div>

          {/* Reps/Breathing Target Indicator */}
          {currentExercise.repsOrBreath && (
            <span className="mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-pink-100/80 text-pink-800 border border-pink-200">
              ✨ {currentExercise.repsOrBreath}
            </span>
          )}
        </div>

        {/* Gentle Sisterly Form Cue Box */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50/50 to-pink-50/60 border border-pink-200/80 space-y-1.5 my-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-pink-800">
            <span>🎀 Form Cue & Sensation:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentExercise.cue}
          </p>

          <div className="pt-2 border-t border-pink-100/80 flex items-center gap-1.5 text-[11px] text-purple-700">
            <span>🌬️ Breath Tip:</span>
            <span className="text-slate-600">{currentExercise.breathTip}</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="pt-2 flex flex-col gap-2.5">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrevExercise}
              disabled={currentIdx === 0}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Previous movement"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="min-h-[52px] min-w-[52px] flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-md shadow-pink-300/40 active:scale-95 transition-transform"
              title={isRunning ? 'Pause' : 'Resume'}
            >
              {isRunning ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
            </button>

            <button
              onClick={goToNextExercise}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors"
              title="Next movement"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Early Exit / Complete Flow Action */}
          <button
            onClick={handleFinishWorkout}
            className="w-full min-h-[44px] py-2 px-4 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
          >
            <Heart className="w-4 h-4 fill-purple-600 text-purple-600" />
            <span>Complete & Log Heart Streak 💖</span>
          </button>
        </div>
      </div>
    </div>
  );
};
