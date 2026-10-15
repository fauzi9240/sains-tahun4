import React, { useState } from 'react';
import { Wind, Activity, AlertTriangle, Eye, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

export const ManusiaDiagram: React.FC = () => {
  const [breathMode, setBreathMode] = useState<'tarik' | 'hembus'>('tarik');
  const [selectedOrgan, setSelectedOrgan] = useState<string>('peparu');
  const [activeTab, setActiveTab] = useState<'pernafasan' | 'perkumuhan' | 'gerakbalas'>('pernafasan');

  return (
    <div className="space-y-6">
      {/* Subtopic Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        <button
          onClick={() => setActiveTab('pernafasan')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'pernafasan'
              ? 'bg-white text-sky-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Sistem Pernafasan
        </button>
        <button
          onClick={() => setActiveTab('perkumuhan')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'perkumuhan'
              ? 'bg-white text-sky-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Perkumuhan & Penyahtinjaan
        </button>
        <button
          onClick={() => setActiveTab('gerakbalas')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'gerakbalas'
              ? 'bg-white text-sky-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Gerak Balas Rangsangan
        </button>
      </div>

      {/* TAB 1: PERNAFASAN */}
      {activeTab === 'pernafasan' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Visual Interactive Stage (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Rajah Berwarna: Laluan Udara Pernafasan</h4>
                <p className="text-xs text-slate-500">Klik organ atau tukar mod pernafasan di bawah</p>
              </div>

              {/* Inhale/Exhale Selector */}
              <div className="flex items-center gap-1 p-1 bg-sky-50 border border-sky-200 rounded-xl">
                <button
                  onClick={() => setBreathMode('tarik')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    breathMode === 'tarik'
                      ? 'bg-sky-600 text-white shadow'
                      : 'text-sky-700 hover:bg-sky-100'
                  }`}
                >
                  <Wind className="w-3.5 h-3.5" />
                  Menarik Nafas
                </button>
                <button
                  onClick={() => setBreathMode('hembus')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    breathMode === 'hembus'
                      ? 'bg-rose-500 text-white shadow'
                      : 'text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  <Wind className="w-3.5 h-3.5 rotate-180" />
                  Menghembus Nafas
                </button>
              </div>
            </div>

            {/* SVG Visual Stage */}
            <div className="relative bg-gradient-to-b from-sky-50/50 to-blue-50/30 rounded-xl p-4 flex flex-col items-center justify-center border border-sky-100 min-h-[360px]">
              {/* Dynamic Path Indicator */}
              <div className="w-full bg-white/90 backdrop-blur rounded-lg px-4 py-2.5 mb-4 border border-sky-200 shadow-xs flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">Laluan Udara Semasa:</span>
                {breathMode === 'tarik' ? (
                  <span className="font-bold text-sky-700 flex items-center gap-1.5">
                    Hidung <span className="text-sky-400">➔</span> Trakea <span className="text-sky-400">➔</span> Peparu (O₂ Kaya)
                  </span>
                ) : (
                  <span className="font-bold text-rose-600 flex items-center gap-1.5">
                    Peparu <span className="text-rose-400">➔</span> Trakea <span className="text-rose-400">➔</span> Hidung (CO₂ Kaya)
                  </span>
                )}
              </div>

              {/* Colorful Human Respiratory Anatomy SVG */}
              <svg viewBox="0 0 340 320" className="w-full max-w-[320px] h-auto drop-shadow-sm select-none">
                <defs>
                  <linearGradient id="lungGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FB7185" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                  <linearGradient id="inhaleGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                  <linearGradient id="exhaleGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#F43F5E" />
                    <stop offset="100%" stopColor="#FB923C" />
                  </linearGradient>
                </defs>

                {/* Head & Neck Outline */}
                <path
                  d="M 170 20 C 130 20 120 45 120 70 C 120 85 110 95 95 105 C 105 112 115 115 125 115 L 125 140 C 90 155 70 185 70 240 L 270 240 C 270 185 250 155 215 140 L 215 115 C 225 115 235 110 240 95 C 240 45 210 20 170 20 Z"
                  fill="#F1F5F9"
                  stroke="#CBD5E1"
                  strokeWidth="2.5"
                />

                {/* Nose / Hidung Hotspot */}
                <g
                  onClick={() => setSelectedOrgan('hidung')}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <circle cx="108" cy="98" r="14" fill={selectedOrgan === 'hidung' ? '#0284C7' : '#38BDF8'} opacity="0.3" />
                  <circle cx="108" cy="98" r="8" fill="#0284C7" />
                  <path d="M 104 95 Q 112 95 110 102" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                </g>

                {/* Nasal cavity into Pharynx */}
                <path
                  d="M 112 98 Q 140 100 155 115 L 170 130"
                  fill="none"
                  stroke={breathMode === 'tarik' ? '#0284C7' : '#E11D48'}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 3"
                />

                {/* Trakea (Windpipe with rings) */}
                <g
                  onClick={() => setSelectedOrgan('trakea')}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <rect
                    x="162"
                    y="130"
                    width="16"
                    height="45"
                    rx="6"
                    fill={selectedOrgan === 'trakea' ? '#38BDF8' : '#60A5FA'}
                    stroke="#1D4ED8"
                    strokeWidth="1.5"
                  />
                  {/* Cartilage rings */}
                  <line x1="162" y1="138" x2="178" y2="138" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="162" y1="148" x2="178" y2="148" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="162" y1="158" x2="178" y2="158" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="162" y1="168" x2="178" y2="168" stroke="#FFFFFF" strokeWidth="1.5" />
                </g>

                {/* Bronchus Branches */}
                <path d="M 170 175 L 140 195" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
                <path d="M 170 175 L 200 195" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />

                {/* Right Lung (on visual left) */}
                <g
                  onClick={() => setSelectedOrgan('peparu')}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <path
                    d="M 140 185 C 110 185 95 210 95 255 C 95 285 120 295 145 295 C 158 295 165 280 165 255 C 165 215 155 185 140 185 Z"
                    fill="url(#lungGrad)"
                    stroke="#9F1239"
                    strokeWidth="2"
                    transform={breathMode === 'tarik' ? 'scale(1.05) translate(-6, -6)' : 'scale(0.97) translate(3, 3)'}
                  />
                  {/* Bronchioles network */}
                  <path d="M 140 205 Q 120 225 115 250" stroke="#FFE4E6" strokeWidth="2" fill="none" />
                  <path d="M 135 220 Q 148 240 145 270" stroke="#FFE4E6" strokeWidth="1.5" fill="none" />
                </g>

                {/* Left Lung (on visual right) */}
                <g
                  onClick={() => setSelectedOrgan('peparu')}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <path
                    d="M 200 185 C 230 185 245 210 245 255 C 245 285 220 295 195 295 C 182 295 175 280 175 255 C 175 215 185 185 200 185 Z"
                    fill="url(#lungGrad)"
                    stroke="#9F1239"
                    strokeWidth="2"
                    transform={breathMode === 'tarik' ? 'scale(1.05) translate(-6, -6)' : 'scale(0.97) translate(3, 3)'}
                  />
                  {/* Cardiac notch indent & bronchioles */}
                  <path d="M 200 205 Q 220 225 225 250" stroke="#FFE4E6" strokeWidth="2" fill="none" />
                  <path d="M 205 220 Q 192 240 195 270" stroke="#FFE4E6" strokeWidth="1.5" fill="none" />
                </g>

                {/* Chest movement indicators */}
                {breathMode === 'tarik' ? (
                  <g>
                    <path d="M 80 230 L 60 215" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow)" />
                    <text x="35" y="210" fill="#0284C7" fontSize="10" fontWeight="bold">Dada Menaik ⬆</text>
                  </g>
                ) : (
                  <g>
                    <path d="M 60 215 L 80 230" stroke="#E11D48" strokeWidth="3" />
                    <text x="35" y="210" fill="#E11D48" fontSize="10" fontWeight="bold">Dada Menurun ⬇</text>
                  </g>
                )}

                {/* Labels with callout pointers */}
                <g onClick={() => setSelectedOrgan('hidung')} className="cursor-pointer">
                  <rect x="15" y="86" width="60" height="22" rx="6" fill="#0284C7" />
                  <text x="45" y="101" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">1. Hidung</text>
                  <line x1="75" y1="97" x2="100" y2="97" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 2" />
                </g>

                <g onClick={() => setSelectedOrgan('trakea')} className="cursor-pointer">
                  <rect x="235" y="138" width="65" height="22" rx="6" fill="#2563EB" />
                  <text x="267" y="153" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">2. Trakea</text>
                  <line x1="235" y1="149" x2="182" y2="149" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="2 2" />
                </g>

                <g onClick={() => setSelectedOrgan('peparu')} className="cursor-pointer">
                  <rect x="240" y="238" width="68" height="22" rx="6" fill="#E11D48" />
                  <text x="274" y="253" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">3. Peparu</text>
                  <line x1="240" y1="249" x2="215" y2="249" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 2" />
                </g>
              </svg>
            </div>
          </div>

          {/* Organ Detail Deck (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Penerangan Organ</span>
                <button
                  onClick={() => {
                    let organSpeech = '';
                    if (selectedOrgan === 'hidung') {
                      organSpeech = 'Hidung ialah pintu masuk udara utama. Di dalamnya terdapat bulu halus dan mukus lembap untuk menapis habuk kotor serta menghangatkan udara yang disedut.';
                    } else if (selectedOrgan === 'trakea') {
                      organSpeech = 'Trakea ialah tiub berongga diperbuat daripada gelang rawan yang kukuh agar salur pernafasan tidak kempis. Ia menghubungkan rongga hidung dengan peparu.';
                    } else if (selectedOrgan === 'peparu') {
                      organSpeech = 'Peparu adalah organ utama di dalam rongga dada tempat berlakunya pertukaran gas. Udara disedut mengandungi lebih banyak oksigen, manakala udara dihembus mengandungi lebih banyak karbon dioksida.';
                    }
                    import('../../utils/speech').then(({ speechReader }) => {
                      speechReader.speak(organSpeech);
                    });
                  }}
                  className="px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Dengar Suara
                </button>
              </div>
              <h5 className="text-xl font-bold text-slate-900 mt-1 capitalize">
                {selectedOrgan === 'hidung' && '1. Hidung (Rongga Udara)'}
                {selectedOrgan === 'trakea' && '2. Trakea (Salur Udara)'}
                {selectedOrgan === 'peparu' && '3. Peparu (Pertukaran Gas)'}
              </h5>

              <div className="mt-3 text-sm text-slate-700 leading-relaxed space-y-2">
                {selectedOrgan === 'hidung' && (
                  <>
                    <p>
                      Hidung ialah pintu masuk udara utama. Di dalamnya terdapat bulu halus dan mukus lembap untuk menapis habuk kotor serta menghangatkan udara.
                    </p>
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900">
                      <strong>Laluan Tarik:</strong> Udara luar masuk melalui hidung.<br />
                      <strong>Laluan Hembus:</strong> Udara dari trakea keluar melalui hidung ke persekitaran.
                    </div>
                  </>
                )}

                {selectedOrgan === 'trakea' && (
                  <>
                    <p>
                      Trakea ialah tiub berongga diperbuat daripada gelang rawan yang kukuh agar salur pernafasan tidak kempis.
                    </p>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900">
                      <strong>Fungsi:</strong> Menghubungkan rongga hidung dengan kedua-dua belah peparu kiri dan kanan.
                    </div>
                  </>
                )}

                {selectedOrgan === 'peparu' && (
                  <>
                    <p>
                      Peparu adalah organ utama di dalam rongga dada tempat berlakunya <strong>pertukaran gas</strong> antara alveolus dengan kapilari darah.
                    </p>
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-900 space-y-1">
                      <div><strong>Udara Disedut:</strong> Mengandungi <em>lebih banyak Oksigen (O₂)</em>.</div>
                      <div><strong>Udara Dihembus:</strong> Mengandungi <em>lebih banyak Karbon Dioksida (CO₂) & Wap Air</em>.</div>
                    </div>
                  </>
                )}
              </div>

              {/* Quick Select Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <span className="text-xs text-slate-400">Pilih organ:</span>
                <button
                  onClick={() => setSelectedOrgan('hidung')}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${selectedOrgan === 'hidung' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                >
                  Hidung
                </button>
                <button
                  onClick={() => setSelectedOrgan('trakea')}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${selectedOrgan === 'trakea' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                >
                  Trakea
                </button>
                <button
                  onClick={() => setSelectedOrgan('peparu')}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${selectedOrgan === 'peparu' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                >
                  Peparu
                </button>
              </div>
            </div>

            {/* Kadar Pernafasan Info Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                Kadar Pernafasan vs Kecergasan Aktiviti
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Kadar pernafasan ditentukan oleh bilangan pergerakan dada naik dan turun dalam seminit.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="block font-bold text-emerald-700">Rendah</span>
                  <span className="text-[11px] text-slate-500">Tidur / Duduk Rehat</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="block font-bold text-amber-700">Sederhana</span>
                  <span className="text-[11px] text-slate-500">Berjalan Santai</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="block font-bold text-rose-700">Tinggi</span>
                  <span className="text-[11px] text-slate-500">Berlari Pecut / Bersukan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PERKUMUHAN & PENYAHTINJAAN */}
      {activeTab === 'perkumuhan' && (
        <div className="space-y-6">
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="font-semibold text-amber-950">Ingat Perbezaan Penting Sains Tahun 4:</strong><br />
              <strong>Perkumuhan:</strong> Penyingkiran bahan buangan metabolisme daripada darah (air kencing, peluh, karbon dioksida).<br />
              <strong>Penyahtinjaan:</strong> Penyingkiran sisa makanan tidak tercerna (tinja) keluar melalui dubur.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ginjal */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-bold text-lg mb-3">
                  🫘
                </div>
                <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">Organ 1</div>
                <h5 className="text-lg font-bold text-slate-900 mt-0.5">Ginjal (Buah Pinggang)</h5>
                <p className="text-xs text-slate-600 mt-2">
                  Menapis darah untuk membuang toksin, lebihan air, dan urea dari badan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 bg-rose-50/50 p-2.5 rounded-lg">
                <span className="text-[11px] text-slate-500 block">Hasil Perkumuhan:</span>
                <span className="text-sm font-bold text-rose-800">Air Kencing</span>
                <span className="text-[11px] text-rose-600 block mt-0.5">(Urea + Garam mineral + Air)</span>
              </div>
            </div>

            {/* Kulit */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-bold text-lg mb-3">
                  💧
                </div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Organ 2</div>
                <h5 className="text-lg font-bold text-slate-900 mt-0.5">Kulit</h5>
                <p className="text-xs text-slate-600 mt-2">
                  Mempunyai kelenjar peluh yang merembeskan cecair apabila badan panas atau cergas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 p-2.5 rounded-lg">
                <span className="text-[11px] text-slate-500 block">Hasil Perkumuhan:</span>
                <span className="text-sm font-bold text-amber-800">Peluh</span>
                <span className="text-[11px] text-amber-600 block mt-0.5">(Air + Garam mineral + Sedikit urea)</span>
              </div>
            </div>

            {/* Peparu */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 font-bold text-lg mb-3">
                  🫁
                </div>
                <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">Organ 3</div>
                <h5 className="text-lg font-bold text-slate-900 mt-0.5">Peparu</h5>
                <p className="text-xs text-slate-600 mt-2">
                  Menyingkirkan gas buangan hasil respirasi sel semasa hembus nafas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 bg-sky-50/50 p-2.5 rounded-lg">
                <span className="text-[11px] text-slate-500 block">Hasil Perkumuhan:</span>
                <span className="text-sm font-bold text-sky-800">Karbon Dioksida & Wap Air</span>
                <span className="text-[11px] text-sky-600 block mt-0.5">(Dikeluarkan melalui hidung)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GERAK BALAS RANGSANGAN */}
      {activeTab === 'gerakbalas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                5 Organ Deria & Rangsangan
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Manusia mengesan rangsangan persekitaran menggunakan organ deria khas:
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-sky-600" /> Mata
                  </span>
                  <span className="text-slate-600">Menerima rangsangan <strong>Cahaya</strong></span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-emerald-600" /> Telinga
                  </span>
                  <span className="text-slate-600">Menerima rangsangan <strong>Bunyi</strong></span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">👃 Hidung</span>
                  <span className="text-slate-600">Menerima rangsangan <strong>Bau</strong></span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">👅 Lidah</span>
                  <span className="text-slate-600">Menerima rangsangan <strong>Rasa</strong> (manis, masam, masin, pahit)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">✋ Kulit</span>
                  <span className="text-slate-600">Menerima rangsangan <strong>Sentuhan, Suhu & Sakit</strong></span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Kepentingan & Amaran Tabiat Buruk</h4>
                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                    <span className="font-bold text-emerald-900 block mb-1">Kepentingan Gerak Balas:</span>
                    <ul className="list-disc list-inside space-y-1 text-emerald-800">
                      <li>Mengelakkan diri daripada kecederaan fizikal.</li>
                      <li>Menyelamatkan diri daripada ancaman bahaya / pemangsa.</li>
                      <li>Mendapatkan maklumat dan berkomunikasi dengan sekeliling.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
                    <span className="font-bold text-rose-900 block mb-1">Tabiat Yang Mengganggu Gerak Balas:</span>
                    <p className="text-rose-800">
                      Meminum <strong>arak</strong>, <strong>menghidu gam</strong>, dan <strong>dadah</strong> melambatkan pemprosesan isyarat di otak. Kesannya: mabuk, berkhayal, dan kehilangan koordinasi badan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Semua konsep Unit 2 Manusia telah dipelajari!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
