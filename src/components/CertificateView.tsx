import React, { useState } from 'react';
import { StudentProgress } from '../types';
import { Printer, Download, Award, CheckCircle2, Sparkles, User, School, Calendar } from 'lucide-react';

interface CertificateViewProps {
  progress: StudentProgress;
  onUpdateProfile: (name: string, schoolClass: string, teacherName: string) => void;
  onBackToHub: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  progress,
  onUpdateProfile,
  onBackToHub,
}) => {
  const [studentName, setStudentName] = useState(progress.name || 'Ahmad Danial bin Roslan');
  const [schoolClass, setSchoolClass] = useState(progress.schoolClass || '4 Amanah · SK Seri Saujana');
  const [teacherName, setTeacherName] = useState(progress.teacherName || 'Cikgu Sains Tahun 4');
  const [certDate, setCertDate] = useState('15 Oktober 2026');

  const handlePrint = () => {
    window.print();
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(studentName, schoolClass, teacherName);
  };

  // Determine overall achievement level
  const passedTopicsCount = [
    progress.topicScores.manusia.passed,
    progress.topicScores.haiwan.passed,
    progress.topicScores.bahan.passed,
  ].filter(Boolean).length;

  let achievementTitle = 'Pencapaian Cemerlang Sains KSSR';
  let badgeGrade = 'Tahap Penguasaan Tinggi (TP 5 - TP 6)';

  if (passedTopicsCount === 3) {
    achievementTitle = 'Anugerah Bitara Sains Cilik Tahun 4';
    badgeGrade = 'Penguasaan Penuh 3 Topik (Manusia, Haiwan & Bahan)';
  } else if (passedTopicsCount >= 1) {
    achievementTitle = 'Sijil Penghargaan Penguasaan Modul Sains';
    badgeGrade = `Menguasai ${passedTopicsCount} daripada 3 Topik Teras`;
  }

  return (
    <div className="space-y-8">
      {/* Configuration Form Bar (Hidden when printing) */}
      <div className="no-print bg-white rounded-3xl p-6 border border-slate-200 shadow-sm max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                Studio Sijil Digital
              </span>
              <span className="text-xs text-slate-400">KSSR Semakan Sains Tahun 4</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              Peribadikan Sijil Penghargaan Murid
            </h3>
            <p className="text-xs text-slate-500">
              Isikan maklumat murid dan guru di bawah. Sijil di bawah akan dikemaskini secara automatik.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 active:scale-95"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>
            <button
              onClick={onBackToHub}
              className="px-4 py-2.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              Kembali
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSaveProfile} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-blue-600" /> Nama Penuh Murid
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-blue-500 font-medium"
              placeholder="Contoh: Muhammad Adam"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
              <School className="w-3.5 h-3.5 text-emerald-600" /> Kelas & Nama Sekolah
            </label>
            <input
              type="text"
              value={schoolClass}
              onChange={(e) => setSchoolClass(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-blue-500 font-medium"
              placeholder="Contoh: 4 Cemerlang · SK Taman Melati"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-600" /> Nama Guru Sains
            </label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-blue-500 font-medium"
              placeholder="Contoh: Puan Noraini / En. Razak"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-600" /> Tarikh Dianugerahkan
            </label>
            <input
              type="text"
              value={certDate}
              onChange={(e) => setCertDate(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-blue-500 font-medium"
              placeholder="Contoh: 15 Oktober 2026"
            />
          </div>
        </form>
      </div>

      {/* A4 Landscape Certificate Canvas */}
      <div className="max-w-4xl mx-auto">
        <div className="certificate-print-area bg-white rounded-3xl p-8 sm:p-12 border-8 border-double border-amber-600/70 shadow-xl relative overflow-hidden select-none">
          {/* Subtle Watermark BG */}
          <div className="absolute inset-0 bg-radial from-amber-50/40 via-transparent to-blue-50/20 pointer-events-none" />

          {/* Ornamental Corner Frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-amber-600/80 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-amber-600/80 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-amber-600/80 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-amber-600/80 rounded-br-xl pointer-events-none" />

          {/* Certificate Inner Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Header Lockup */}
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center gap-2 mb-1">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shadow-xs">
                  🏆
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-blue-950">
                  KEMENTERIAN PENDIDIKAN MALAYSIA · KSSR SEMAKAN
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 font-heading">
                SIJIL PENGHARGAAN KECEMERLANGAN
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-700 uppercase">
                {achievementTitle}
              </p>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />

            {/* Recipient Statement */}
            <div className="space-y-2 py-2">
              <p className="text-xs sm:text-sm text-slate-500 italic">
                Dengan penuh sukacita dan kebanggaan, sijil ini dianugerahkan kepada:
              </p>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-b-2 border-slate-300 pb-2 max-w-lg mx-auto tracking-wide font-heading">
                {studentName || 'Nama Murid'}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-700">
                {schoolClass || 'Kelas / Sekolah'}
              </p>
            </div>

            {/* Achievement text */}
            <div className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kerana telah berjaya menyelesaikan modul ulang kaji berpandukan gambar rajah berwarna dan melepasi tanda aras minimum <strong className="text-slate-900 font-bold">70% Tahap Penguasaan</strong> bagi kuiz topik Sains Tahun 4:
            </div>

            {/* Topic Badges strip on certificate */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-lg block">🫁</span>
                <span className="text-[11px] font-bold text-slate-800 block">Unit 2: Manusia</span>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                  {progress.topicScores.manusia.highestScore}% · {progress.topicScores.manusia.passed ? 'Dikuasai ✓' : 'Ulang Kaji'}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-lg block">🐎</span>
                <span className="text-[11px] font-bold text-slate-800 block">Unit 3: Haiwan</span>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                  {progress.topicScores.haiwan.highestScore}% · {progress.topicScores.haiwan.passed ? 'Dikuasai ✓' : 'Ulang Kaji'}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-lg block">🔬</span>
                <span className="text-[11px] font-bold text-slate-800 block">Unit 8: Bahan</span>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                  {progress.topicScores.bahan.highestScore}% · {progress.topicScores.bahan.passed ? 'Dikuasai ✓' : 'Ulang Kaji'}
                </span>
              </div>
            </div>

            {/* Footer Signatures & Official Gold Stamp */}
            <div className="pt-8 flex items-end justify-between max-w-xl mx-auto text-xs">
              {/* Date & Guru Sains */}
              <div className="text-center w-36">
                <div className="h-10 flex items-center justify-center italic text-blue-950 font-serif text-sm">
                  {teacherName}
                </div>
                <div className="border-t border-slate-400 pt-1 font-bold text-slate-800">
                  {teacherName}
                </div>
                <div className="text-[10px] text-slate-500">Guru Sains Tahun 4</div>
              </div>

              {/* Gold Ribbon Seal Stamp */}
              <div className="w-20 h-20 rounded-full border-4 border-amber-500 bg-radial from-amber-200 via-amber-400 to-amber-500 shadow-md flex flex-col items-center justify-center text-amber-950 font-bold p-1">
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span className="text-[8px] uppercase tracking-tighter text-center leading-tight">
                  KSSR SAINS<br />TERBILANG
                </span>
                <span className="text-[9px]">★★★★★</span>
              </div>

              {/* Date & Tarikh Kelulusan */}
              <div className="text-center w-36">
                <div className="h-10 flex items-center justify-center font-mono text-xs text-slate-700">
                  {certDate}
                </div>
                <div className="border-t border-slate-400 pt-1 font-bold text-slate-800">
                  Tarikh Penganugerahan
                </div>
                <div className="text-[10px] text-slate-500">Rekod Penguasaan KSSR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
