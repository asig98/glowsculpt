import React from 'react';
import { Award, Sparkles, X, Heart, Share2 } from 'lucide-react';
import { fireGlowConfetti } from '../utils/confetti';
import { soundFx } from '../utils/audio';

interface ClaimBadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim: () => void;
}

export const ClaimBadgeModal: React.FC<ClaimBadgeModalProps> = ({ isOpen, onClose, onClaim }) => {
  if (!isOpen) return null;

  const handleClaim = () => {
    onClaim();
    soundFx.playCelebrationChime();
    fireGlowConfetti();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-200 shadow-2xl p-6 text-center overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 text-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge Visual */}
        <div className="my-3 flex justify-center">
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400 flex items-center justify-center text-5xl shadow-xl shadow-pink-300/60 ring-8 ring-pink-100 animate-pulse">
            👑
            <span className="absolute -bottom-1 -right-1 text-2xl">✨</span>
          </div>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 mt-3">
          7-Day Glow Goddess
        </h3>

        <p className="text-xs text-pink-700 font-semibold uppercase tracking-wider mt-1">
          Perfect 7/7 Heart Streak Unlocked 💖
        </p>

        <p className="text-xs text-slate-600 mt-2 leading-relaxed px-2">
          You prioritized joy, lengthened your muscles, nourished your hormones, and showed up all 7 days. You are radiating, queen!
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={handleClaim}
            className="w-full min-h-[48px] py-2.5 px-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-pink-300/40 active:scale-95 transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Wear Badge With Pride 👑</span>
          </button>

          <button
            onClick={onClose}
            className="w-full min-h-[40px] py-2 px-4 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 font-medium text-xs transition-colors"
          >
            Close & Keep Glowing
          </button>
        </div>
      </div>
    </div>
  );
};
