# Modul Ulang Kaji & Kuiz Sains Tahun 4 (KSSR Semakan): Manusia, Haiwan & Bahan

Aplikasi pembelajaran interaktif Sains Tahun 4 yang direka khas untuk guru dan murid mengulang kaji tiga topik teras berpandukan buku teks KSSR Semakan: **Manusia**, **Haiwan**, dan **Bahan**, dilengkapi gambar rajah berwarna interaktif, kuiz penguasaan bertanda aras minimum 70%, sistem lencana motivasi dan Sijil Digital Penghargaan Murid.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan yang disahkan bersama pengguna berdasarkan maklum balas fasa penjelasan:
> - **Skop Topik**: 3 modul utama meliputi **Topik 1: Manusia** (Pernafasan, Perkumuhan & Penyahtinjaan, Rangsangan & Gerak Balas), **Topik 2: Haiwan** (Vertebrata vs Invertebrata & 5 Kelas Haiwan), dan **Topik 3: Bahan** (Sumber Bahan, Sifat Bahan, dan perkaitan tenaga/kegunaan bahan).
> - **Tanda Aras Penguasaan**: Minimum markah lulus ditetapkan pada **70%** (Tahap Penguasaan KSSR Sains). Sekiranya markah kurang daripada 70%, murid dibimbing dengan ulasan jawapan serta butang ulang kaji pantas sebelum mencuba semula.
> - **Sistem Ganjaran**: Pungutan **Mata Bintang Sains**, **Lencana Penguasaan (Gangsa/Perak/Emas)** mengikut prestasi topik, dan **Sijil Digital Pencapaian Murid** yang boleh diisi nama murid, kelas, serta dicetak/disimpan sebagai fail cetakan atau PDF sebagai motivasi.

---

### 1. Overview & Core Concept

- **Apa Yang Dilakukan**: 
  Aplikasi web pendidikan interaktif dwibahasa santun bahasa Melayu KSSR Sains Tahun 4 yang menyediakan:
  1. **Nota Pintar Bergambar Rajah Berwarna**: Gambar rajah ilustrasi sains yang jelas dan interaktif (Sistem Pernafasan & Organ Perkumuhan Manusia; Pengelasan & Rangka Haiwan Vertebrata; Pokok Sumber Asas & Sifat Fizikal Bahan).
  2. **Kuiz Interaktif Bertingkat**: Soalan aneka pilihan bergambar, seret & padan (drag-and-match), dan pengelasan interaktif dengan maklum balas segera visual & audio ceria.
  3. **Penunjuk Tahap Penguasaan (TP)**: Pengiraan markah automatik dengan semakan lulus $\ge 70\%$ untuk membuka lencana setiap topik.
  4. **Studio Sijil Digital Murid**: Penjana sijil penghargaan rasmi Guru Sains Tahun 4 yang cantik, lengkap dengan nama murid, tarikh, tandatangan guru, dan cop kelulusan KSSR untuk dicetak atau disimpan.

- **Sasaran Pengguna**: Murid Tahun 4 sekolah rendah (umur 10 tahun) serta guru sains bagi sesi PdP bilik darjah, kelas pemulihan, atau kerja rumah berperingkat kendiri.
- **Nilai Utama**: Membantu murid menghafal fakta sains abstrak secara visual dan visualisasi rajah, meningkatkan keyakinan diri dengan sasaran penguasaan 70%, dan memberi ganjaran serta-merta yang membanggakan murid.

---

### 2. User Experience & Visual Design

#### A. Aliran Pengguna (User Flows)
1. **Lobi Pembelajaran (Hub Utama)**:
   - Paparan kad 3 Topik Utama dengan ilustrasi sains cerah dan penunjuk status penguasaan (Belum Mula / Sedang Belajar / Dikuasai).
   - Bar status murid memaparkan Jumlah Bintang terkumpul, Lencana yang berjaya diperoleh, dan butang cepat ke "Sijil Saya".
2. **Mod Nota Ringkas & Rajah Berwarna**:
   - Tab navigasi mudah antara subtopik (contohnya: Pernafasan Manusia $\rightarrow$ Perkumuhan $\rightarrow$ Gerak Balas).
   - Gambar rajah vektor sains berwarna-warni dengan titik interaktif (*clickable hot spots*) untuk melihat penerangan bahagian organ, laluan udara semasa tarik/hembus nafas, jadual perbandingan vertebrata, dan sifat konduktor/penebat bahan.
3. **Mod Kuiz Penguasaan Interaktif**:
   - Kuiz 10 soalan setiap topik dengan format mesra kanak-kanak: Soalan Bergambar, Isi Tempat Kosong, dan Padanan Organ/Ciri.
   - Penjejak kemajuan soalan masa nyata dan animasi confetti serta-merta apabila mendapat jawapan tepat.
   - Selepas soalan terakhir, paparan rumusan markah dipaparkan:
     - Jika $\ge 70\%$: Skrin tahniah meraikan penguasaan, penganugerahan lencana topik & bintang, serta membuka akses sijil digital.
     - Jika $< 70\%$: Mesej motivasi mesra kanak-kanak ("Usaha Lagi! Jangan putus asa"), semakan nota khusus untuk soalan yang salah, dan butang "Ulang Kaji & Cuba Semula".
4. **Studio Sijil Penghargaan Digital**:
   - Templat sijil bersaiz A4 landskap dengan sempadan anugerah rasmi berwarna emas-biru diraja.
   - Borang mudah untuk murid/guru memasukkan nama murid, nama sekolah/kelas, dan tarikh.
   - Butang satu klik "Cetak / Simpan Sijil (PDF/Print)" yang dioptimumkan untuk cetakan berkualiti tinggi.

#### B. Identiti Visual & Tema
- **Gaya Estetik**: Ceria, bersih, mesra murid sekolah rendah berorientasikan buku teks Sains Malaysia KSSR Semakan tanpa unsur serabut.
- **Palet Warna (60-30-10)**:
  - *60% Kanvas*: Latar belakang bersih lembut `#F8FAFC` (Slate 50) dengan pencahayaan visual mesra mata.
  - *30% Struktur*: Kad modul putih `#FFFFFF` berbingkai halus `#E2E8F0`, kad topik berwarna pastel cerah mengikut tema (Biru Udara untuk Manusia, Hijau Alam untuk Haiwan, Jingga-Emas untuk Bahan).
  - *10% Aksen*: Biru Diraja `#2563EB` dan Emas Kejayaan `#F59E0B` bagi butang tindakan utama, mata bintang, dan lencana.
- **Tipografi**:
  - Tajuk & Penegasan: `Plus Jakarta Sans` / `Outfit` bersaiz jelas (18px–28px, Bold/SemiBold).
  - Teks Penerangan & Soalan: Bersaiz minimum 16px dengan jarak baris lapang (1.6) untuk memudahkan pembacaan murid 10 tahun.
- **Mikro-interaksi & Maklum Balas**:
  - Efek butang responsif, kad bertukar warna lembut semasa disentuh, dan kesan audio sintesis Web Audio API (bunyi 'ding' ceria apabila betul, dan nada lembut apabila perlu semakan semula - boleh diredamkan).

---

### 3. Key Product Decisions & Trade-Offs

- **Keputusan 1: Format Gambar Rajah Berwarna (Interaktif Berasaskan SVG & Komponen Visual)**
  - *Pendekatan*: Membina gambar rajah sains berwarna khusus menggunakan SVG beresolusi tinggi yang tajam di mana-mana skrin (telefon, tablet murid, projektor kelas), dilengkapi label berkod warna dan animasi laluan udara/anak panah pernafasan.
  - *Sebab*: Memastikan teks label tepat 100% mengikut istilah buku teks Sains Tahun 4 KSSR (seperti hidung, trakea, peparu, insang, kulit lembap, vertebrata, litupan badan, batuan, petroleum, kekonduksian haba) tanpa risiko salah ejaan AI atau kekaburan visual.
- **Keputusan 2: Kriteria Penguasaan 70% & Sokongan Pemulihan (Remediation Loop)**
  - *Pendekatan*: Menetapkan 70% (sekurang-kurangnya 7 daripada 10 soalan) sebagai syarat melepasi Tahap Penguasaan. Jika murid mendapat 60% atau kurang, soalan yang dijawab salah akan disenaraikan bersama nota rujukan ringkas sebelum murid mengambil semula kuiz dengan susunan soalan yang disegarkan.
  - *Sebab*: Mengelakkan murid berasa kecewa dan membantu murid memahami konsep yang belum dikuasai secara berstruktur.
- **Keputusan 3: Penjana Sijil Cetak Langsung (CSS Print-Ready & Canvas)**
  - *Pendekatan*: Komponen sijil digital dengan sokongan terus `window.print()` yang dipratetap kepada orientasi landskap A4 tanpa iklan/elemen luaran, serta pratonton interaktif masa nyata.
  - *Sebab*: Memudahkan guru sains mencetak sijil untuk seluruh kelas secara terus di makmal komputer sekolah tanpa memerlukan langganan pihak ketiga.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Main Hub & State)                      │
│   - activeTab: 'hub' | 'nota' | 'kuiz' | 'sijil'                       │
│   - activeTopicId: 'manusia' | 'haiwan' | 'bahan'                      │
│   - masteryState: { manusia: score, haiwan: score, bahan: score }      │
│   - totalStars: number, unlockedBadges: Badge[]                        │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│    NotaSection      │   │     QuizSection     │   │  CertificateSection │
│ - DiagramViewer     │   │ - QuestionCard      │   │ - Interactive Form  │
│   • Manusia (Nafas/ │   │ - ScoreReview       │   │ - A4 Award Canvas   │
│     Kumuh/Deria)    │   │ - MasteryFeedback   │   │ - Browser Print     │
│   • Haiwan (Rangka/ │   │ - RemediationGuide  │   │   Styles (@media)   │
│     5 Kelas)        │   │ - BadgeAwardModal   │   └─────────────────────┘
│   • Bahan (Sumber/  │   └─────────────────────┘
│     Sifat Fizikal)  │
└─────────────────────┘
```

#### Struktur Data Utama
- **`TopicData`**: Mengandungi fakta nota ringkas, penerangan rajah berwarna, dan titik interaktif bagi setiap tajuk:
  1. *Manusia*: Organ pernafasan (Hidung $\to$ Trakea $\to$ Peparu), pertukaran gas, kadar pernafasan, perkumuhan (Ginjal, Kulit, Peparu) & penyahtinjaan, gerak balas rangsangan.
  2. *Haiwan*: Definisi vertebrata vs invertebrata, 5 kelas vertebrata (Mamalia, Reptilia, Amfibia, Burung, Ikan), jadual ciri litupan badan, habitat, organ nafas dan pembiakan.
  3. *Bahan*: 4 Sumber asas bahan (Tumbuhan, Haiwan, Batuan, Petroleum), Sifat bahan (Menyerap air, Terapung/Tenggelam, Konduktor/Penebat elektrik & haba, Kekenyalan).
- **`QuizData`**: 10 soalan kurikulum Sains Tahun 4 berkualiti tinggi bagi setiap satu daripada 3 topik (jumlah 30 soalan) beserta penjelasan jawapan yang mendidik.
- **`MasteryEngine`**: Menjejak penguasaan murid dengan penarafan:
  - 90% - 100%: Cemerlang (Lencana Emas + 3 Bintang)
  - 70% - 89%: Menguasai (Lencana Perak + 2 Bintang)
  - < 70%: Perlu Ulang Kaji (Bimbingan jawapan disediakan)
