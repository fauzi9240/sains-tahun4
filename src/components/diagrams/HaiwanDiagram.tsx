import React, { useState } from 'react';
import { Check, Info, HelpCircle, Volume2 } from 'lucide-react';

export const HaiwanDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rangka' | 'kelas' | 'kuizmini'>('rangka');
  const [selectedAnimal, setSelectedAnimal] = useState<'kuda' | 'burung' | 'ikan' | 'katak' | 'kurakura'>('kuda');
  const [selectedClass, setSelectedClass] = useState<'mamalia' | 'reptilia' | 'amfibia' | 'burung' | 'ikan'>('mamalia');

  // Mini quiz game state
  const [miniAnimalIdx, setMiniAnimalIdx] = useState(0);
  const [miniFeedback, setMiniFeedback] = useState<string | null>(null);

  const miniQuestions = [
    { animal: 'Ikan Lumba-lumba / Paus', correct: 'Mamalia', reason: 'Bernafas guna peparu & melahirkan anak walaupun hidup di air!' },
    { animal: 'Katak & Salamander', correct: 'Amfibia', reason: 'Bernafas guna peparu di darat dan kulit lembap di dalam air.' },
    { animal: 'Burung Enggang & Penguin', correct: 'Burung', reason: 'Mempunyai bulu pelepah dan membiak secara bertelur.' },
    { animal: 'Buaya, Ular & Penyu', correct: 'Reptilia', reason: 'Bersisik atau berkulit keras, bertelur dan bernafas guna peparu.' },
    { animal: 'Ikan Siakap & Keli', correct: 'Ikan', reason: 'Bernafas guna insang, bersisik dan hidup dalam air.' },
  ];

  const handleMiniGuess = (guessClass: string) => {
    if (guessClass === miniQuestions[miniAnimalIdx].correct) {
      setMiniFeedback(`✅ Tepat sekali! ${guessClass} - ${miniQuestions[miniAnimalIdx].reason}`);
    } else {
      setMiniFeedback(`❌ Kurang tepat. Jawapan sebenar ialah ${miniQuestions[miniAnimalIdx].correct} (${miniQuestions[miniAnimalIdx].reason})`);
    }
  };

  const nextMiniQuestion = () => {
    setMiniFeedback(null);
    setMiniAnimalIdx((prev) => (prev + 1) % miniQuestions.length);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        <button
          onClick={() => setActiveTab('rangka')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'rangka'
              ? 'bg-white text-emerald-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Rangka Vertebrata vs Invertebrata
        </button>
        <button
          onClick={() => setActiveTab('kelas')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'kelas'
              ? 'bg-white text-emerald-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Ciri-ciri 5 Kelas Haiwan
        </button>
        <button
          onClick={() => setActiveTab('kuizmini')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'kuizmini'
              ? 'bg-white text-emerald-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Uji Minda Pengelasan
        </button>
      </div>

      {/* TAB 1: RANGKA TULANG BELAKANG */}
      {activeTab === 'rangka' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Rajah Rangka Haiwan Vertebrata</h4>
                <p className="text-xs text-slate-500">
                  Haiwan vertebrata mempunyai <strong>turus tulang belakang</strong> (ditandakan dengan warna merah).
                </p>
              </div>

              {/* Animal Switcher */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {(['kuda', 'burung', 'ikan', 'katak', 'kurakura'] as const).map((animal) => (
                  <button
                    key={animal}
                    onClick={() => setSelectedAnimal(animal)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg capitalize transition-all ${
                      selectedAnimal === animal
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {animal === 'kurakura' ? 'Kura-kura' : animal}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Visual Stage for Animal Skeleton */}
            <div className="bg-gradient-to-b from-slate-50 to-emerald-50/30 rounded-xl p-6 border border-emerald-100 flex flex-col items-center justify-center min-h-[300px]">
              {selectedAnimal === 'kuda' && (
                <div className="w-full max-w-lg text-center">
                  <svg viewBox="0 0 380 220" className="w-full h-auto drop-shadow-sm select-none">
                    {/* Horse Skeleton Body Outline */}
                    <path
                      d="M 50 80 Q 70 40 100 45 Q 115 50 120 70 L 140 90 L 260 85 Q 295 85 305 115 L 305 185 L 290 185 L 285 130 L 255 130 L 250 185 L 235 185 L 245 110 L 155 115 L 140 185 L 125 185 L 130 115 L 105 185 L 90 185 L 95 100 Z"
                      fill="#F8FAFC"
                      stroke="#94A3B8"
                      strokeWidth="2"
                    />
                    {/* Ribcage */}
                    <path d="M 160 95 C 160 135 190 135 190 95" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />
                    <path d="M 180 95 C 180 140 215 140 215 95" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />
                    <path d="M 205 95 C 205 135 240 135 240 95" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />
                    {/* Highlighted Red Spine / Tulang Belakang */}
                    <path
                      d="M 95 55 Q 120 70 140 85 L 285 85"
                      stroke="#E11D48"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Spine Vertebrae Dots */}
                    {[110, 130, 150, 170, 190, 210, 230, 250, 270].map((x, idx) => (
                      <circle key={idx} cx={x} cy={x < 140 ? 60 + (x - 110) * 0.8 : 85} r="3" fill="#FFFFFF" />
                    ))}
                    {/* Callout Indicator */}
                    <rect x="170" y="20" width="120" height="26" rx="6" fill="#E11D48" />
                    <text x="230" y="37" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Tulang Belakang Kuda
                    </text>
                    <line x1="230" y1="46" x2="230" y2="82" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                  <p className="mt-2 text-xs font-semibold text-emerald-800">
                    Kuda (Mamalia): Mempunyai tulang belakang panjang dari tengkuk hingga ke pangkal ekor.
                  </p>
                </div>
              )}

              {selectedAnimal === 'burung' && (
                <div className="w-full max-w-lg text-center">
                  <svg viewBox="0 0 380 220" className="w-full h-auto drop-shadow-sm select-none">
                    {/* Bird Skeleton Outline */}
                    <path
                      d="M 110 50 Q 130 30 150 40 L 180 70 Q 240 80 270 130 L 290 140 L 250 140 L 200 170 L 190 200 L 175 200 L 185 160 L 150 130 L 130 90 Z"
                      fill="#F8FAFC"
                      stroke="#94A3B8"
                      strokeWidth="2"
                    />
                    {/* Wing Skeleton */}
                    <path d="M 160 85 L 210 50 L 240 70" stroke="#CBD5E1" strokeWidth="3" fill="none" />
                    {/* Highlighted Red Spine */}
                    <path
                      d="M 135 45 Q 160 70 180 90 L 250 135"
                      stroke="#E11D48"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Callout Indicator */}
                    <rect x="170" y="15" width="130" height="26" rx="6" fill="#E11D48" />
                    <text x="235" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Tulang Belakang Burung
                    </text>
                    <line x1="235" y1="41" x2="210" y2="105" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                  <p className="mt-2 text-xs font-semibold text-emerald-800">
                    Burung: Tulang belakang bersambung kukuh dan berongga ringan untuk memudahkan penerbangan.
                  </p>
                </div>
              )}

              {selectedAnimal === 'ikan' && (
                <div className="w-full max-w-lg text-center">
                  <svg viewBox="0 0 380 220" className="w-full h-auto drop-shadow-sm select-none">
                    {/* Fish Outline */}
                    <path
                      d="M 60 110 Q 120 40 250 80 L 320 50 L 300 110 L 320 170 L 250 140 Q 120 180 60 110 Z"
                      fill="#F8FAFC"
                      stroke="#94A3B8"
                      strokeWidth="2"
                    />
                    {/* Fish Ribs / Duri Ikan */}
                    {[120, 145, 170, 195, 220, 245].map((x, idx) => (
                      <g key={idx}>
                        <line x1={x} y1="110" x2={x - 10} y2="80" stroke="#CBD5E1" strokeWidth="2" />
                        <line x1={x} y1="110" x2={x - 10} y2="140" stroke="#CBD5E1" strokeWidth="2" />
                      </g>
                    ))}
                    {/* Highlighted Red Spine / Tulang Belakang Ikan */}
                    <line x1="90" y1="110" x2="280" y2="110" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
                    {/* Callout Indicator */}
                    <rect x="170" y="25" width="120" height="26" rx="6" fill="#E11D48" />
                    <text x="230" y="42" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Tulang Belakang Ikan
                    </text>
                    <line x1="230" y1="51" x2="230" y2="107" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                  <p className="mt-2 text-xs font-semibold text-emerald-800">
                    Ikan: Tulang belakang melintang dari kepala hingga ekor diapit oleh duri rusuk.
                  </p>
                </div>
              )}

              {selectedAnimal === 'katak' && (
                <div className="w-full max-w-lg text-center">
                  <svg viewBox="0 0 380 220" className="w-full h-auto drop-shadow-sm select-none">
                    {/* Frog Top-Down Skeleton */}
                    <ellipse cx="190" cy="110" rx="45" ry="60" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
                    {/* Front Limbs */}
                    <path d="M 155 80 L 110 65 L 90 85" stroke="#94A3B8" strokeWidth="3" fill="none" />
                    <path d="M 225 80 L 270 65 L 290 85" stroke="#94A3B8" strokeWidth="3" fill="none" />
                    {/* Hind Limbs (Long jumping legs) */}
                    <path d="M 160 145 L 100 170 L 80 145 L 60 180" stroke="#94A3B8" strokeWidth="3.5" fill="none" />
                    <path d="M 220 145 L 280 170 L 300 145 L 320 180" stroke="#94A3B8" strokeWidth="3.5" fill="none" />
                    {/* Highlighted Red Spine */}
                    <line x1="190" y1="70" x2="190" y2="155" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
                    {/* Vertebrae segments */}
                    {[80, 95, 110, 125, 140].map((y, idx) => (
                      <circle key={idx} cx="190" cy={y} r="3" fill="#FFFFFF" />
                    ))}
                    {/* Callout Indicator */}
                    <rect x="235" y="45" width="130" height="26" rx="6" fill="#E11D48" />
                    <text x="300" y="62" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Tulang Belakang Katak
                    </text>
                    <line x1="235" y1="58" x2="193" y2="105" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                  <p className="mt-2 text-xs font-semibold text-emerald-800">
                    Katak (Amfibia): Tulang belakang bersambung dengan kaki belakang yang kuat untuk melompat.
                  </p>
                </div>
              )}

              {selectedAnimal === 'kurakura' && (
                <div className="w-full max-w-lg text-center">
                  <svg viewBox="0 0 380 220" className="w-full h-auto drop-shadow-sm select-none">
                    {/* Turtle Shell & Skeleton */}
                    <ellipse cx="190" cy="110" rx="65" ry="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
                    {/* Head & Feet */}
                    <path d="M 190 60 L 190 35 Q 190 25 190 20" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 140 80 L 105 60" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 240 80 L 275 60" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 145 140 L 115 165" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 235 140 L 265 165" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                    {/* Shell ribs fused to spine */}
                    {[80, 95, 110, 125, 140].map((y, idx) => (
                      <line key={idx} x1="140" y1={y} x2="240" y2={y} stroke="#CBD5E1" strokeWidth="2" />
                    ))}
                    {/* Highlighted Red Spine (Fused to shell) */}
                    <line x1="190" y1="65" x2="190" y2="155" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
                    {/* Callout Indicator */}
                    <rect x="235" y="25" width="135" height="26" rx="6" fill="#E11D48" />
                    <text x="302" y="42" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                      Tulang Belakang Kura-kura
                    </text>
                    <line x1="235" y1="38" x2="193" y2="90" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                  <p className="mt-2 text-xs font-semibold text-emerald-800">
                    Kura-kura (Reptilia): Tulang belakang bercantum dan bersatu terus dengan karapas (cengkerang).
                  </p>
                </div>
              )}
            </div>

            {/* Invertebrata Comparison Box */}
            <div className="mt-6 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Perbandingan: Haiwan Invertebrata (TIADA Tulang Belakang)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 text-center text-xs">
                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <span className="text-2xl block mb-1">🪳</span>
                  <strong className="text-slate-800">Lipas</strong>
                  <span className="block text-[11px] text-slate-500">Rangka luar kutikel</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <span className="text-2xl block mb-1">🪱</span>
                  <strong className="text-slate-800">Cacing</strong>
                  <span className="block text-[11px] text-slate-500">Badan bersegmen lembut</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <span className="text-2xl block mb-1">🐜</span>
                  <strong className="text-slate-800">Semut</strong>
                  <span className="block text-[11px] text-slate-500">Badan berkepala tiga</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <span className="text-2xl block mb-1">🦀</span>
                  <strong className="text-slate-800">Ketam / Udang</strong>
                  <span className="block text-[11px] text-slate-500">Karapas cengkerang luar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CIRI-CIRI 5 KELAS HAIWAN */}
      {activeTab === 'kelas' && (
        <div className="space-y-6">
          {/* Class Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'mamalia', label: 'Mamalia', icon: '🐎', color: 'from-blue-500 to-indigo-600' },
              { id: 'reptilia', label: 'Reptilia', icon: '🐊', color: 'from-amber-500 to-emerald-600' },
              { id: 'amfibia', label: 'Amfibia', icon: '🐸', color: 'from-emerald-500 to-teal-600' },
              { id: 'burung', label: 'Burung', icon: '🦅', color: 'from-sky-500 to-blue-500' },
              { id: 'ikan', label: 'Ikan', icon: '🐟', color: 'from-cyan-500 to-blue-600' },
            ].map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClass(cls.id as typeof selectedClass)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  selectedClass === cls.id
                    ? 'border-emerald-500 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl block mb-1">{cls.icon}</span>
                <span className="text-xs font-bold text-slate-800">{cls.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Class Specification Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Jadual Spesifikasi KSSR</span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h4 className="text-xl font-bold text-slate-900 capitalize">Ciri-Ciri Kelas: {selectedClass}</h4>
                  <button
                    onClick={() => {
                      let text = '';
                      if (selectedClass === 'mamalia') {
                        text = 'Kelas Mamalia. Bernafas menggunakan peparu, melahirkan anak, berbulu halus, dan kebanyakan hidup di darat seperti kuda, kucing dan gajah. Paus dan lumba-lumba juga mamalia.';
                      } else if (selectedClass === 'reptilia') {
                        text = 'Kelas Reptilia. Bernafas menggunakan peparu, bertelur, mempunyai litupan bersisik atau berkulit keras, dan kebanyakan hidup di darat seperti buaya, ular dan kura-kura.';
                      } else if (selectedClass === 'amfibia') {
                        text = 'Kelas Amfibia. Bernafas menggunakan peparu di darat dan kulit lembap di dalam air, membiak secara bertelur, mempunyai kulit lembap, dan hidup di darat serta air seperti katak dan salamander.';
                      } else if (selectedClass === 'burung') {
                        text = 'Kelas Burung. Bernafas menggunakan peparu, bertelur, mempunyai litupan bulu pelepah yang unik, dan tinggal di darat seperti helang, burung hantu dan penguin.';
                      } else if (selectedClass === 'ikan') {
                        text = 'Kelas Ikan. Bernafas menggunakan insang untuk menyerap oksigen terlarut dalam air, bertelur, bersisik dan hidup sepenuhnya di dalam air seperti ikan keli dan salmon.';
                      }
                      import('../../utils/speech').then(({ speechReader }) => {
                        speechReader.speak(text);
                      });
                    }}
                    className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Dengar Ciri-Ciri
                  </button>
                </div>
              </div>
              <span className="text-3xl">
                {selectedClass === 'mamalia' && '🐎'}
                {selectedClass === 'reptilia' && '🐊'}
                {selectedClass === 'amfibia' && '🐸'}
                {selectedClass === 'burung' && '🦅'}
                {selectedClass === 'ikan' && '🐟'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {/* Organ Pernafasan */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Organ Pernafasan</span>
                <div className="text-base font-bold text-slate-900 mt-1">
                  {selectedClass === 'mamalia' && 'Peparu'}
                  {selectedClass === 'reptilia' && 'Peparu'}
                  {selectedClass === 'amfibia' && 'Peparu & Kulit Lembap'}
                  {selectedClass === 'burung' && 'Peparu'}
                  {selectedClass === 'ikan' && 'Insang'}
                </div>
                <span className="text-xs text-slate-500 block mt-1">
                  {selectedClass === 'amfibia'
                    ? 'Peparu di darat, kulit lembap di air'
                    : selectedClass === 'ikan'
                    ? 'Menyerap oksigen terlarut dalam air'
                    : 'Menyedut udara atmosfera'}
                </span>
              </div>

              {/* Cara Membiak */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cara Membiak</span>
                <div className="text-base font-bold text-slate-900 mt-1">
                  {selectedClass === 'mamalia' ? 'Melahirkan Anak' : 'Bertelur'}
                </div>
                <span className="text-xs text-slate-500 block mt-1">
                  {selectedClass === 'mamalia' ? 'Menyusukan anak' : 'Menghasilkan telur berlendir / bercengkerang'}
                </span>
              </div>

              {/* Litupan Badan */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Litupan Badan</span>
                <div className="text-base font-bold text-slate-900 mt-1">
                  {selectedClass === 'mamalia' && 'Berbulu Halus'}
                  {selectedClass === 'reptilia' && 'Bersisik / Berkulit Keras'}
                  {selectedClass === 'amfibia' && 'Kulit Lembap'}
                  {selectedClass === 'burung' && 'Berbulu Pelepah'}
                  {selectedClass === 'ikan' && 'Bersisik'}
                </div>
                <span className="text-xs text-slate-500 block mt-1">
                  {selectedClass === 'burung' ? 'Membantu meluncur di udara' : 'Melindungi tubuh daripada kecederaan'}
                </span>
              </div>

              {/* Habitat */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Habitat</span>
                <div className="text-base font-bold text-slate-900 mt-1">
                  {selectedClass === 'mamalia' && 'Darat (Paus/Dolfin di air)'}
                  {selectedClass === 'reptilia' && 'Kebanyakannya di Darat'}
                  {selectedClass === 'amfibia' && 'Darat dan Air'}
                  {selectedClass === 'burung' && 'Darat'}
                  {selectedClass === 'ikan' && 'Air'}
                </div>
                <span className="text-xs text-slate-500 block mt-1">Kawasan tempat tinggal semulajadi</span>
              </div>
            </div>

            {/* Examples Pill strip */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Contoh Haiwan:</span>
              {selectedClass === 'mamalia' && ['Kuda', 'Kucing', 'Kelawar', 'Paus', 'Gajah', 'Manusia'].map((ex) => (
                <span key={ex} className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-800 rounded-md font-medium">
                  {ex}
                </span>
              ))}
              {selectedClass === 'reptilia' && ['Buaya', 'Ular', 'Kura-kura', 'Cicak', 'Biawak'].map((ex) => (
                <span key={ex} className="px-2.5 py-1 text-xs bg-amber-50 text-amber-800 rounded-md font-medium">
                  {ex}
                </span>
              ))}
              {selectedClass === 'amfibia' && ['Katak', 'Kodok', 'Salamander', 'Sesilia'].map((ex) => (
                <span key={ex} className="px-2.5 py-1 text-xs bg-teal-50 text-teal-800 rounded-md font-medium">
                  {ex}
                </span>
              ))}
              {selectedClass === 'burung' && ['Helang', 'Burung Hantu', 'Ayam', 'Penguin', 'Burung Unta'].map((ex) => (
                <span key={ex} className="px-2.5 py-1 text-xs bg-sky-50 text-sky-800 rounded-md font-medium">
                  {ex}
                </span>
              ))}
              {selectedClass === 'ikan' && ['Ikan Keli', 'Ikan Salmon', 'Ikan Emas', 'Ikan Jerung', 'Ikan Kembung'].map((ex) => (
                <span key={ex} className="px-2.5 py-1 text-xs bg-cyan-50 text-cyan-800 rounded-md font-medium">
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: UJI MINDA PENGELASAN */}
      {activeTab === 'kuizmini' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
            <HelpCircle className="w-5 h-5" />
            Cabaran Padanan Pantas Haiwan
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            Haiwan ini tergolong dalam kelas yang mana?
          </h4>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-4 text-center">
            <span className="text-xs text-emerald-700 font-semibold block">Soalan {miniAnimalIdx + 1} daripada {miniQuestions.length}</span>
            <span className="text-2xl font-bold text-slate-900 block mt-1">
              "{miniQuestions[miniAnimalIdx].animal}"
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            {['Mamalia', 'Reptilia', 'Amfibia', 'Burung', 'Ikan'].map((c) => (
              <button
                key={c}
                onClick={() => handleMiniGuess(c)}
                className="py-2.5 px-3 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl border border-slate-200 text-xs font-bold transition-all text-slate-700"
              >
                {c}
              </button>
            ))}
          </div>

          {miniFeedback && (
            <div className="p-3 bg-slate-100 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between animate-fade-in">
              <span>{miniFeedback}</span>
              <button
                onClick={nextMiniQuestion}
                className="ml-2 px-3 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-xs font-bold"
              >
                Seterusnya ➔
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
