import React from 'react';
import { TopicId, StudentProgress } from '../types';
import { TOPICS } from '../data/scienceCurriculum';
import { BookOpen, CheckCircle2, Play, Award, Star, Sparkles, ChevronRight, Check } from 'lucide-react';

interface HubViewProps {
  progress: StudentProgress;
  onSelectTopic: (topicId: TopicId) => void;
  onStartQuiz: (topicId: TopicId) => void;
  onOpenCertificate: () => void;
  onOpenBadges: () => void;
}

export const HubView: React.FC<HubViewProps> = ({
  progress,
  onSelectTopic,
  onStartQuiz,
  onOpenCertificate,
  onOpenBadges,
}) => {
  const topics: TopicId[] = ['manusia', 'haiwan', 'bahan'];

  const passedCount = topics.filter((t) => progress.topicScores[t].passed).length;
  const progressPercent = Math.round((passedCount / topics.length) * 100);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Welcome Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Decorative backdrop shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 backdrop-blur-xs border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Portal Ulang Kaji Sains Tahun 4 · KSSR Semakan
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-heading">
            Terokai Sains: Manusia, Haiwan & Bahan
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Selamat datang, murid Tahun 4! Fahami setiap topik dengan bantuan <strong>gambar rajah berwarna interaktif</strong>, uji kemahiran dengan kuiz penguasaan (tanda aras <strong className="text-white">minimum 70%</strong>), dan kumpulkan lencana serta <strong>Sijil Digital Penghargaan</strong> anda.
          </p>

          {/* Quick Stats Pill Strip */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span className="font-bold tabular-nums">{progress.totalStars}</span> Bintang Terkumpul
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-bold tabular-nums">{passedCount} / 3</span> Topik Dikuasai
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <Award className="w-4 h-4 text-amber-300" />
              Tanda Aras Lulus: <span className="font-bold text-white">70%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mastery Progress Bar Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Kemajuan Murid</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">
              {progressPercent}% Siap
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-800">
            {passedCount === 3
              ? '🎉 Tahniah! Anda telah menguasai ketiga-tiga topik teras Sains Tahun 4!'
              : `Lengkapkan ${3 - passedCount} lagi topik dengan markah $\\ge$ 70% untuk layak menerima Sijil Bitara Penuh.`}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBadges}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Award className="w-4 h-4 text-amber-600" />
            Lihat Lencana
          </button>
          <button
            onClick={onOpenCertificate}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            Jana Sijil Saya
          </button>
        </div>
      </div>

      {/* 3 Main Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {topics.map((tId) => {
          const topic = TOPICS[tId];
          const scoreData = progress.topicScores[tId];
          const isPassed = scoreData.passed;

          let badgeIcon = '🫁';
          if (tId === 'haiwan') badgeIcon = '🐎';
          if (tId === 'bahan') badgeIcon = '🔬';

          return (
            <div
              key={tId}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl shadow-xs group-hover:scale-105 transition-transform">
                    {badgeIcon}
                  </div>

                  {isPassed ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      <Check className="w-3.5 h-3.5" />
                      Dikuasai ({scoreData.highestScore}%)
                    </span>
                  ) : scoreData.highestScore > 0 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                      Skor: {scoreData.highestScore}%
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-500">
                      Belum Diuji
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Unit {topic.unitNumber} Sains
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors font-heading">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                    {topic.subtitle}
                  </p>
                </div>

                {/* Subtopic list preview */}
                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-[11px] text-slate-600 border border-slate-100">
                  {tId === 'manusia' && (
                    <>
                      <div>• Laluan Pernafasan & Pertukaran Gas O₂/CO₂</div>
                      <div>• Perkumuhan: Ginjal, Kulit, Peparu</div>
                      <div>• Organ Deria & Gerak Balas Rangsangan</div>
                    </>
                  )}
                  {tId === 'haiwan' && (
                    <>
                      <div>• Vertebrata (Bertulang Belakang) vs Invertebrata</div>
                      <div>• 5 Kelas: Mamalia, Reptilia, Amfibia, Burung, Ikan</div>
                      <div>• Ciri Litupan Badan, Nafas, Membiak & Habitat</div>
                    </>
                  )}
                  {tId === 'bahan' && (
                    <>
                      <div>• 4 Sumber Asas: Tumbuhan, Haiwan, Batuan, Petroleum</div>
                      <div>• Sifat Bahan: Konduktor, Penebat, Keapungan, Kenyal</div>
                      <div>• Sumber Tenaga Boleh / Tidak Boleh Dibaharui</div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectTopic(tId)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Nota & Rajah
                </button>

                <button
                  onClick={() => onStartQuiz(tId)}
                  className="px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Ambil Kuiz
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Motivational Info Footer Banner */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl shrink-0">
            🏅
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Sistem Ganjaran Sains Tahun 4
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xl">
              Setiap kali murid mencapai sekurang-kurangnya 70% (7 daripada 10 soalan betul), murid akan membuka Lencana Perak/Emas dan mengumpul Mata Bintang untuk dicetak pada Sijil Digital Penghargaan Sains!
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCertificate}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0 active:scale-95"
        >
          Lihat Sijil Penghargaan
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
