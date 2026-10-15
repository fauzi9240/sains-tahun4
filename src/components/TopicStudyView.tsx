import React from 'react';
import { TopicId } from '../types';
import { TOPICS } from '../data/scienceCurriculum';
import { ManusiaDiagram } from './diagrams/ManusiaDiagram';
import { HaiwanDiagram } from './diagrams/HaiwanDiagram';
import { BahanDiagram } from './diagrams/BahanDiagram';
import { BookOpen, CheckCircle2, Star, Play, Sparkles } from 'lucide-react';

interface TopicStudyViewProps {
  topicId: TopicId;
  onStartQuiz: (topicId: TopicId) => void;
  passed: boolean;
  highestScore: number;
}

export const TopicStudyView: React.FC<TopicStudyViewProps> = ({
  topicId,
  onStartQuiz,
  passed,
  highestScore,
}) => {
  const topic = TOPICS[topicId];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Topic Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
              Unit {topic.unitNumber} Sains Tahun 4
            </span>
            {passed ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Dikuasai ({highestScore}%)
              </span>
            ) : highestScore > 0 ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                Skor Terbaik: {highestScore}% (Perlu $\ge$ 70%)
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
                Belum Mengambil Kuiz
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Topik: {topic.title}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            {topic.subtitle}
          </p>
        </div>

        {/* Start Quiz Action Card */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shrink-0 text-center sm:text-right space-y-2">
          <div className="text-xs text-slate-500">
            Tanda Aras Lulus: <strong className="text-emerald-700 font-bold">70% (7/10 Soalan)</strong>
          </div>
          <button
            onClick={() => onStartQuiz(topicId)}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            Mula Kuiz Penguasaan
          </button>
          <div className="text-[11px] text-amber-700 flex items-center justify-center sm:justify-end gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Dapatkan sehingga 30 Mata Bintang & Lencana!
          </div>
        </div>
      </div>

      {/* Interactive Diagrams Stage */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Gambar Rajah Berwarna & Simulasi Interaktif
            </h3>
            <p className="text-xs text-slate-500">
              Terokai gambar rajah interaktif di bawah untuk memahami konsep saintifik dengan mendalam.
            </p>
          </div>
        </div>

        {topicId === 'manusia' && <ManusiaDiagram />}
        {topicId === 'haiwan' && <HaiwanDiagram />}
        {topicId === 'bahan' && <BahanDiagram />}
      </section>

      {/* Refleksi Minda: Ringkasan Nota Pintar KSSR (Tanpa butang suara) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Refleksi Minda: Fakta Ringkas Buku Teks
            </h3>
            <p className="text-xs text-slate-500">
              Ulang kaji fakta dan konsep utama mengikut kurikulum KSSR Semakan Sains Tahun 4.
            </p>
          </div>
        </div>

        {/* Note Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topic.summary.map((point, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5 hover:bg-slate-100/80 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Glosari Istilah Penting */}
        <div className="pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Glosari Istilah Penting KSSR Sains Tahun 4
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topic.keyTerms.map((term, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-amber-200/70 bg-amber-50/40 text-xs"
              >
                <strong className="text-amber-950 font-bold block mb-1">{term.term}</strong>
                <p className="text-slate-600 leading-normal">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Floating Quiz Callout */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
            Sedia Untuk Menguji Pemahaman Anda?
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">
            Ambil Kuiz Penguasaan Topik {topic.title}
          </h3>
          <p className="text-xs text-blue-100 mt-1 max-w-xl">
            10 soalan interaktif menanti. Capai sekurang-kurangnya 70% untuk membuka Lencana Sains dan membuka kelayakan Sijil Digital!
          </p>
        </div>

        <button
          onClick={() => onStartQuiz(topicId)}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-extrabold transition-all shadow flex items-center gap-2 shrink-0 active:scale-95"
        >
          <Play className="w-4 h-4 fill-amber-950" />
          Mula Kuiz Sekarang
        </button>
      </div>
    </div>
  );
};
