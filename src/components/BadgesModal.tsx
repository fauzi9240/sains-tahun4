import React from 'react';
import { BADGES } from '../data/scienceCurriculum';
import { StudentProgress } from '../types';
import { X, Award, CheckCircle2, Lock, Star, Sparkles } from 'lucide-react';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: StudentProgress;
  onOpenCertificate: () => void;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  progress,
  onOpenCertificate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl shadow-xs">
            🏅
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Galeri Lencana & Ganjaran Sains
            </h3>
            <p className="text-xs text-slate-500">
              Kumpul lencana gangsa, perak, dan emas dengan mencapai tanda aras minimum 70%!
            </p>
          </div>
        </div>

        {/* Star Counter Card */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white flex items-center justify-between mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 fill-amber-200 text-amber-200 animate-pulse" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-100">
                Jumlah Mata Bintang Murid
              </span>
              <div className="text-2xl font-black tabular-nums">
                {progress.totalStars} Bintang
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCertificate();
            }}
            className="px-4 py-2 bg-white text-amber-800 hover:bg-amber-50 rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            Buka Sijil ➔
          </button>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BADGES.map((badge) => {
            let isUnlocked = false;

            if (badge.topicId === 'semua') {
              isUnlocked =
                progress.topicScores.manusia.passed &&
                progress.topicScores.haiwan.passed &&
                progress.topicScores.bahan.passed;
            } else {
              const topicScore = progress.topicScores[badge.topicId];
              isUnlocked = topicScore.highestScore >= badge.minScore;
            }

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-amber-50/60 border-amber-300 text-slate-900 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200 text-slate-400 opacity-75'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold ${
                    isUnlocked
                      ? 'bg-amber-400 text-amber-950 shadow-xs'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {isUnlocked ? (
                    badge.minScore >= 90 ? '🥇' : '🥈'
                  ) : (
                    <Lock className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      {badge.title}
                    </h4>
                    {isUnlocked && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-tight">
                    {badge.description}
                  </p>
                  <span className="text-[10px] font-bold text-amber-700 block mt-1">
                    Syarat: {badge.minScore}% markah kuiz
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
