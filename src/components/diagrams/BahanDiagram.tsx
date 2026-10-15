import React, { useState } from 'react';
import { Lightbulb, Flame, Compass, RefreshCw, Sun, BatteryCharging, Volume2 } from 'lucide-react';

export const BahanDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sumber' | 'makmal' | 'tenaga'>('sumber');
  const [testedMaterial, setTestedMaterial] = useState<'paku' | 'pemadam' | 'kayu' | 'plastik' | 'kain'>('paku');

  const materialsData = {
    paku: {
      name: 'Paku Besi (Logam)',
      source: 'Batuan',
      terapung: false,
      konduktorElektrik: true,
      konduktorHaba: true,
      serapAir: false,
      kenyal: false,
      desc: 'Logam ialah konduktor elektrik dan haba yang sangat baik. Ia tumpat dan tenggelam di dalam air.',
    },
    pemadam: {
      name: 'Pemadam / Gelang Getah',
      source: 'Tumbuhan (Getah)',
      terapung: true,
      konduktorElektrik: false,
      konduktorHaba: false,
      serapAir: false,
      kenyal: true,
      desc: 'Getah adalah kenyal (kembali ke bentuk asal apabila diregangkan), kalis air dan merupakan penebat elektrik serta haba.',
    },
    kayu: {
      name: 'Bongkah Kayu',
      source: 'Tumbuhan (Pokok Balak)',
      terapung: true,
      konduktorElektrik: false,
      konduktorHaba: false,
      serapAir: true,
      kenyal: false,
      desc: 'Kayu kurang tumpat daripada air lalu terapung. Ia adalah penebat haba yang menjadikannya sesuai sebagai senduk masakan.',
    },
    plastik: {
      name: 'Penyedut Minuman / Botol Plastik',
      source: 'Petroleum',
      terapung: true,
      konduktorElektrik: false,
      konduktorHaba: false,
      serapAir: false,
      kenyal: false,
      desc: 'Plastik bersifat ringan, kalis air, dan penebat elektrik yang cemerlang bagi menyalut wayar logam.',
    },
    kain: {
      name: 'Tuala Kain Kapas',
      source: 'Tumbuhan (Pokok Kapas)',
      terapung: false,
      konduktorElektrik: false,
      konduktorHaba: false,
      serapAir: true,
      kenyal: false,
      desc: 'Kain kapas mempunyai liang kapilari yang menyerap cecair dengan cepat, sesuai untuk pakaian dan tuala lap.',
    },
  };

  const curr = materialsData[testedMaterial];

  return (
    <div className="space-y-6">
      {/* Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        <button
          onClick={() => setActiveTab('sumber')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'sumber'
              ? 'bg-white text-amber-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. 4 Sumber Asas Bahan
        </button>
        <button
          onClick={() => setActiveTab('makmal')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'makmal'
              ? 'bg-white text-amber-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Makmal Ujian Sifat Bahan
        </button>
        <button
          onClick={() => setActiveTab('tenaga')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'tenaga'
              ? 'bg-white text-amber-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Sumber Tenaga & Bahan Fosil
        </button>
      </div>

      {/* TAB 1: 4 SUMBER ASAS BAHAN */}
      {activeTab === 'sumber' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-1">Pokok Pengelasan 4 Sumber Asas Bahan</h4>
            <p className="text-xs text-slate-500 mb-6">
              Setiap objek buatan manusia dihasilkan daripada 4 sumber semula jadi ini.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Sumber 1: Tumbuhan */}
              <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🌳
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Sumber 1</span>
                  <h5 className="text-base font-bold text-slate-900 mt-0.5">Tumbuhan</h5>
                  <p className="text-xs text-slate-600 mt-2">
                    Bahagian batang, getah susu, dan buah pokok.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 space-y-1.5 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <strong>Kayu:</strong> Meja, kerusi, kertas
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <strong>Kapas:</strong> Baju kemeja, tuala
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <strong>Getah:</strong> Tayar, sarung tangan
                  </div>
                </div>
              </div>

              {/* Sumber 2: Haiwan */}
              <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🐑
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Sumber 2</span>
                  <h5 className="text-base font-bold text-slate-900 mt-0.5">Haiwan</h5>
                  <p className="text-xs text-slate-600 mt-2">
                    Kulit haiwan dan bulu mamalia atau ulat sutera.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200/60 space-y-1.5 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-amber-100">
                    <strong>Kulit Lembu:</strong> Kasut, beg, jaket
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-amber-100">
                    <strong>Bulu Biri-biri:</strong> Baju panas (benang bulu)
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-amber-100">
                    <strong>Kokun Sutera:</strong> Kain sutera lembut
                  </div>
                </div>
              </div>

              {/* Sumber 3: Batuan */}
              <div className="bg-slate-100/70 rounded-2xl p-5 border border-slate-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center text-2xl mb-3">
                    ⛰️
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Sumber 3</span>
                  <h5 className="text-base font-bold text-slate-900 mt-0.5">Batuan</h5>
                  <p className="text-xs text-slate-600 mt-2">
                    Bahan galian yang digali dari dalam kerak bumi.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-300/60 space-y-1.5 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <strong>Logam:</strong> Paku besi, kunci, duit syiling
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <strong>Tanah Liat:</strong> Pasu bunga, tembikar, bata
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <strong>Pasir Kuarza:</strong> Kaca tingkap, balang kaca
                  </div>
                </div>
              </div>

              {/* Sumber 4: Petroleum */}
              <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-3">
                    🛢️
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">Sumber 4</span>
                  <h5 className="text-base font-bold text-slate-900 mt-0.5">Petroleum</h5>
                  <p className="text-xs text-slate-600 mt-2">
                    Minyak mentah bawah tanah yang diproses secara kimia.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-200/60 space-y-1.5 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-indigo-100">
                    <strong>Plastik:</strong> Botol mineral, beg plastik
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-indigo-100">
                    <strong>Kain Sintetik:</strong> Khemah poliester, nilon
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-indigo-100">
                    <strong>Bahan Bakar:</strong> Petrol kenderaan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAKMAL UJIAN SIFAT BAHAN */}
      {activeTab === 'makmal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Material Selectors (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Pilih Objek Diuji</span>
            <div className="space-y-2">
              {(Object.keys(materialsData) as Array<keyof typeof materialsData>).map((key) => (
                <button
                  key={key}
                  onClick={() => setTestedMaterial(key)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                    testedMaterial === key
                      ? 'bg-amber-50 border-amber-500 text-amber-900 ring-2 ring-amber-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{materialsData[key].name}</span>
                  <span className="text-[11px] font-normal text-slate-500">[{materialsData[key].source}]</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Simulation Dashboard (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">{curr.name}</h4>
                <p className="text-xs text-slate-500">Sumber Asas: <strong>{curr.source}</strong></p>
              </div>
              <button
                onClick={() => {
                  const speech = `${curr.name}. Sumber asas: ${curr.source}. ${curr.terapung ? 'Terapung di air' : 'Tenggelam dalam air'}. ${curr.konduktorElektrik ? 'Konduktor elektrik' : 'Penebat elektrik'}. ${curr.konduktorHaba ? 'Konduktor haba' : 'Penebat haba'}. ${curr.kenyal ? 'Sifat bahan adalah kenyal' : 'Tidak kenyal'}. ${curr.desc}`;
                  import('../../utils/speech').then(({ speechReader }) => {
                    speechReader.speak(speech);
                  });
                }}
                className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Dengar Sifat Objek
              </button>
            </div>

            {/* Test Matrix Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {/* Ujian 1: Keapungan Air */}
              <div className={`p-3.5 rounded-xl border text-center ${curr.terapung ? 'bg-sky-50 border-sky-300' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-2xl block mb-1">🌊</span>
                <span className="text-[11px] font-semibold text-slate-500 block">Ujian Air</span>
                <strong className={`text-xs block mt-0.5 ${curr.terapung ? 'text-sky-700' : 'text-slate-800'}`}>
                  {curr.terapung ? 'Terapung di Air' : 'Tenggelam'}
                </strong>
              </div>

              {/* Ujian 2: Konduktor Elektrik */}
              <div className={`p-3.5 rounded-xl border text-center ${curr.konduktorElektrik ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200'}`}>
                <Lightbulb className={`w-6 h-6 mx-auto mb-1 ${curr.konduktorElektrik ? 'text-amber-500 fill-amber-400' : 'text-slate-400'}`} />
                <span className="text-[11px] font-semibold text-slate-500 block">Ujian Litar</span>
                <strong className={`text-xs block mt-0.5 ${curr.konduktorElektrik ? 'text-amber-800' : 'text-slate-700'}`}>
                  {curr.konduktorElektrik ? 'Mentol Menyala (Konduktor)' : 'Mentol Padam (Penebat)'}
                </strong>
              </div>

              {/* Ujian 3: Pengaliran Haba */}
              <div className={`p-3.5 rounded-xl border text-center ${curr.konduktorHaba ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200'}`}>
                <Flame className={`w-6 h-6 mx-auto mb-1 ${curr.konduktorHaba ? 'text-rose-500' : 'text-slate-400'}`} />
                <span className="text-[11px] font-semibold text-slate-500 block">Ujian Haba</span>
                <strong className={`text-xs block mt-0.5 ${curr.konduktorHaba ? 'text-rose-800' : 'text-slate-700'}`}>
                  {curr.konduktorHaba ? 'Cepat Panas (Konduktor)' : 'Lambat Panas (Penebat)'}
                </strong>
              </div>

              {/* Ujian 4: Kekenyalan */}
              <div className={`p-3.5 rounded-xl border text-center ${curr.kenyal ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`}>
                <RefreshCw className={`w-6 h-6 mx-auto mb-1 ${curr.kenyal ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span className="text-[11px] font-semibold text-slate-500 block">Kekenyalan</span>
                <strong className={`text-xs block mt-0.5 ${curr.kenyal ? 'text-emerald-800' : 'text-slate-700'}`}>
                  {curr.kenyal ? 'Kenyal (Regang)' : 'Tidak Kenyal'}
                </strong>
              </div>
            </div>

            {/* Explanation card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Rumusan Fakta Saintifik:</strong> {curr.desc}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SUMBER TENAGA & BAHAN FOSIL */}
      {activeTab === 'tenaga' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-1">
              Pengelasan Sumber Tenaga (Rujuk Gambar 3 Buku Teks)
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Tenaga ialah keupayaan untuk melakukan kerja. Sumber tenaga terbahagi kepada dua kategori utama:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Boleh Dibaharui */}
              <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md">
                    Boleh Dibaharui
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold">Dijana secara berterusan & tidak habis</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 text-center text-xs">
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs">
                    <Sun className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                    <strong className="text-slate-800">Matahari</strong>
                    <span className="block text-[10px] text-slate-500">Tenaga Suria</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-2xl block mb-1">🌊</span>
                    <strong className="text-slate-800">Ombak</strong>
                    <span className="block text-[10px] text-slate-500">Tenaga Kinetik Laut</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-2xl block mb-1">💧</span>
                    <strong className="text-slate-800">Air</strong>
                    <span className="block text-[10px] text-slate-500">Hidroelektrik</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-2xl block mb-1">💨</span>
                    <strong className="text-slate-800">Angin</strong>
                    <span className="block text-[10px] text-slate-500">Kincir Angin</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="text-2xl block mb-1">🪵</span>
                    <strong className="text-slate-800">Biojisim</strong>
                    <span className="block text-[10px] text-slate-500">Sisa Tumbuhan/Tahi</span>
                  </div>
                </div>
              </div>

              {/* Tidak Boleh Dibaharui */}
              <div className="bg-slate-100/60 rounded-2xl p-5 border border-slate-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-slate-800 text-white text-xs font-bold rounded-md">
                    Tidak Boleh Dibaharui
                  </span>
                  <span className="text-xs text-slate-700 font-semibold">Terhad dan tidak boleh dijana semula</span>
                </div>

                <div className="space-y-3 mt-4">
                  {/* Bahan Api Fosil */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-2">A. Bahan Api Fosil:</span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="text-lg block mb-0.5">🪨</span>
                        <strong className="text-slate-800">Arang Batu</strong>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="text-lg block mb-0.5">🛢️</span>
                        <strong className="text-slate-800">Petroleum</strong>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="text-lg block mb-0.5">⛽</span>
                        <strong className="text-slate-800">Gas Asli</strong>
                      </div>
                    </div>
                  </div>

                  {/* Bahan Nuklear */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">B. Bahan Nuklear:</span>
                      <span className="text-xs text-slate-600">Uranium (menghasilkan tenaga nuklear terkawal)</span>
                    </div>
                    <span className="text-2xl">☢️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
