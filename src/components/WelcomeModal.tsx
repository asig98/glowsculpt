import React, { useState } from 'react';
import { Sparkles, Heart, CheckCircle2, ChevronRight, X, Moon, Flame, Play } from 'lucide-react';
import { fireHeartSparkles } from '../utils/confetti';
import { soundFx } from '../utils/audio';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteOnboarding: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose,
  onCompleteOnboarding,
}) => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  if (!isOpen) return null;

  const handleFinish = () => {
    soundFx.playCelebrationChime();
    fireHeartSparkles();
    onCompleteOnboarding();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-200 shadow-2xl overflow-hidden p-6 sm:p-7 max-h-[90vh] flex flex-col justify-between">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 text-slate-500 hover:text-slate-800 transition-colors"
          title="Close Tour"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎀</span>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
              Welcome to GlowSculpt
            </span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
            The Aesthetic Movement & Self-Care Studio ✨
          </h2>

          <p className="text-xs text-slate-600 mt-1">
            Designed for women in their 20s. Movement is self-love, not punishment.
          </p>

          {/* 3-Tab Segmented Switcher */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-pink-50/80 rounded-2xl border border-pink-100 mt-4">
            <button
              onClick={() => setActiveTab(0)}
              className={`min-h-[40px] text-xs font-semibold py-1.5 px-2 rounded-xl transition-all ${
                activeTab === 0
                  ? 'bg-white text-pink-700 shadow-xs border border-pink-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Philosophy 🌸
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`min-h-[40px] text-xs font-semibold py-1.5 px-2 rounded-xl transition-all ${
                activeTab === 1
                  ? 'bg-white text-pink-700 shadow-xs border border-pink-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Features 🩰
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`min-h-[40px] text-xs font-semibold py-1.5 px-2 rounded-xl transition-all ${
                activeTab === 2
                  ? 'bg-white text-pink-700 shadow-xs border border-pink-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Day-1 Plan 👑
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="my-5 overflow-y-auto max-h-[48vh] pr-1">
          {/* TAB 0: Philosophy */}
          {activeTab === 0 && (
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
                <span className="font-semibold text-pink-900 block text-sm mb-1">
                  💖 Zero Gym-Bro Intimidation
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  No screaming trainers, no grueling two-hour beatdowns, and zero toxic diet talk. We believe in romanticizing movement through soft pilates, graceful posture, and restorative bedtime flows.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-50 to-rose-50 border border-purple-100">
                <span className="font-semibold text-purple-900 block text-sm mb-1">
                  🩰 Gentle, Consistent Radiance
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Whether you have 10 minutes on your bedroom rug or 20 minutes for a sunny Hot Girl Walk, every tiny showing-up counts. Listen to your hormones, sip warm tea, and let your body breathe.
                </p>
              </div>
            </div>
          )}

          {/* TAB 1: Main Features */}
          {activeTab === 1 && (
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-pink-50/60 border border-pink-100">
                <span className="text-lg">🩰</span>
                <div>
                  <strong className="text-slate-800 block font-semibold">10–25 Min Bite-Sized Mat Sculpts</strong>
                  <span className="text-slate-600">Zero jumping, low-impact core & booty toning you can do in cute pajamas or activewear.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-purple-50/60 border border-purple-100">
                <span className="text-lg">🌸</span>
                <div>
                  <strong className="text-slate-800 block font-semibold">Cycle Syncing Wisdom</strong>
                  <span className="text-slate-600">Tailors workouts to your Luteal, Menstrual, Follicular, and Ovulatory phases to avoid cortisol spikes.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-50/60 border border-rose-100">
                <span className="text-lg">💖</span>
                <div>
                  <strong className="text-slate-800 block font-semibold">Heart & Sparkle Streak Badges</strong>
                  <span className="text-slate-600">Collect weekly hearts, celebrate consistency, and unlock glowing milestone rewards.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-orange-50/60 border border-orange-100">
                <span className="text-lg">🍵</span>
                <div>
                  <strong className="text-slate-800 block font-semibold">Beauty Sleep & Hydration Tracker</strong>
                  <span className="text-slate-600">Track 8 cups of herbal tea/water and log deep sleep to recharge your cellular glow.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Where to Start (Day-1 Plan) */}
          {activeTab === 2 && (
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-pink-50 border border-pink-200">
                <div className="flex items-center gap-2 font-semibold text-pink-900 mb-1">
                  <span className="w-5 h-5 rounded-full bg-pink-600 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Check Today's Workout on the Dashboard</span>
                </div>
                <p className="text-slate-600 text-xs pl-7">
                  Lavender Cloud Yin Yoga is already queued up for Self-Care Sunday!
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                <div className="flex items-center gap-2 font-semibold text-purple-900 mb-1">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Log Your Sleep, Mood & First 2 Tea Cups</span>
                </div>
                <p className="text-slate-600 text-xs pl-7">
                  Tap the serene mood bubble and drink some hydration to activate your morning glow.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                <div className="flex items-center gap-2 font-semibold text-rose-900 mb-1">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Tap "Start Today's Flow" & Claim Your Sunday Heart</span>
                </div>
                <p className="text-slate-600 text-xs pl-7">
                  Complete the 3 relaxing moves with our soothing countdown timer and celebrate your streak!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-3 border-t border-pink-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  activeTab === i ? 'w-6 bg-pink-600' : 'w-2 bg-pink-200'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {activeTab < 2 ? (
              <button
                onClick={() => setActiveTab((prev) => ((prev + 1) as 0 | 1 | 2))}
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="min-h-[48px] px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md shadow-pink-300/40 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enter My Glow Dashboard ✨</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
