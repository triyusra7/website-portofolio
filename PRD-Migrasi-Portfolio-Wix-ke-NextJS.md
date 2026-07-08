# PRD: Migrasi Konten Portfolio Lama (Wix) ke Website Portfolio Baru (Next.js + Tailwind)

## 1. Background
Tri Anugerah Yusra (Tri) sedang melanjutkan migrasi website portfolio pribadi dari Wix (`triyusra77.wixsite.com/portfolio`) ke stack Next.js + Tailwind CSS. Website lama berisi konten profil, pengalaman kerja, skill, dan showcase project, tapi desainnya sudah usang dan perlu disesuaikan dengan desain baru yang sedang dibangun.

## 2. Objective
Mengekstrak seluruh konten (teks + gambar + file) dari website Wix lama, mengunduh asset gambar dalam resolusi terbaik yang tersedia, lalu memetakan ulang konten tersebut ke struktur komponen website Next.js yang baru — mengikuti design system/layout yang SUDAH ADA di project baru (bukan meniru desain Wix).

## 3. Scope

**In scope:**
- Ekstraksi teks dari halaman Home dan Profile
- Download seluruh gambar terkait (logo, hero background, project showcase, foto profil) dalam resolusi original
- Migrasi link Resume PDF dan Portfolio PDF
- Restrukturisasi konten experience/timeline agar sesuai section yang ada di project baru
- Penyesuaian visual (tipografi, spacing, warna) mengikuti design system Next.js yang sudah berjalan

**Out of scope:**
- Case study detail per-project dengan gambar (karena sumber dibatasi ke Wix saja — 3 gambar showcase di Wix TIDAK punya judul/deskripsi project yang jelas terhubung; lihat catatan di Section 6)
- Redesign ulang total dari nol; ini murni migrasi konten ke desain yang sudah eksis
- Konten dari Behance/Dribbble (di luar scope sesuai keputusan saat ini)

## 4. Inventaris Konten Sumber (Sudah Diverifikasi dari Wix)

### 4.1 Teks — Hero (Home)
```
Hello! I'm Tri, an UX Designer, Product Designer, and Graphic Designer
who bridges people with design and bring happiness
```
Tagline: "Find your happiness and success at the same time"

### 4.2 Teks — About/Profile
- Nama: Tri Anugerah Yusra (panggilan: Tri)
- Pendidikan: Bachelor's degree in Economics (Accounting), 2018; Professional Certificate in Digital Design, 2021
- Lokasi: South Jakarta
- Deskripsi diri: passion di UI/UX, fokus user-centered design & riset untuk business growth
- Hobi: badminton, sepak bola, seni (fan Keith Haring), menyanyi, membaca berita
- Skill: UI/UX Design, Wireframing, Prototyping, User Research, Information Architecture, Graphic Design, Design Thinking, User Interview
- Tools: Figma, Adobe Creative Suite, Maze, Whimsical, DBeaver, Mixpanel, Notion, Trello, Jira

### 4.3 Teks — Experience Timeline (lengkap, siap pakai)

**Feb–Mar 2021 — Graphic Designer Intern, Sinarmas Land**
- Edit & shoot video e-learning bersama tim senior designer
- Buat poster & sertifikat untuk section e-learning, bantu UI design website
- Usulkan pendekatan desain minimalis untuk user flow yang lebih sederhana

**Aug 2021–Jun 2024 — UI/UX Designer, PasarMIKRO**
- Kolaborasi dengan developer & stakeholder untuk desain & delivery project
- Riset desk & lapangan (kunjungan langsung ke user)
- 4 project utama:
  1. **Area Tracking** — fitur "tracing steps" untuk mengukur luas lahan usaha secara akurat (untuk traceability saat jual produk)
  2. **Marketplace** — marketplace B2B agrikultur, fitur toko pribadi, indikator "success", simpan partner favorit, transaksi via WhatsApp tanpa install app
  3. **Wallet 2 (Business Wallet)** — dompet terpisah untuk dana penjualan, memudahkan tracking & withdraw
  4. **Financial Report → Cash Flow Record** — redesign laporan keuangan jadi bar chart, input manual sales/expense
- Testing platform (moderated user testing), high-fidelity mockup di Figma, branding & website development, Jira ticketing

**Jun–Aug 2024 — UI/UX Designer, Linkz Asia**
- Bangun Design System di Figma (component library, sesuai Material Design)
- Project "Inventory" — input data manual (sebelumnya cuma bisa upload xls)
- Project "Order Form" — kalkulasi pajak & diskon real-time
- Interview user langsung, demo online, Jira management

**Aug–Now — Freelance UI/UX & Graphic Designer**
- Redesign UI HRIS platform (mobile & web)
- Fitur "Angkot Cargo" untuk logistik/pengiriman parcel
- ERP solution lengkap: finance (jurnal, COA, Laba Rugi, Ledger, Neraca, Cash Flow Indirect) + modul HRIS
- Brand identity lengkap (logo + guideline) untuk perusahaan logistik

### 4.4 Asset Gambar (URL Original, Sudah Dibersihkan dari Parameter Crop Wix)

> Catatan teknis: URL Wix yang muncul di halaman punya suffix resize (`/v1/fill/w_...,h_...,...`). Untuk resolusi ORIGINAL, hapus semua path setelah `~mv2.jpg` / `~mv2.png`. Contoh downloader ada di Section 6.

| Asset | URL Original (base, tanpa crop) |
|---|---|
| Logo | `https://static.wixstatic.com/media/0e435c_0142509cdf094a3fb8770ffe0a017072~mv2.png` |
| Hero background (BG.jpg) | `https://static.wixstatic.com/media/0e435c_edfb836ba1264675ba3bf68d0ed3bfdb~mv2.jpg` |
| Project showcase image 1 | `https://static.wixstatic.com/media/0e435c_29f08d8270374f5cbd393853105bc0c2~mv2.jpg` |
| Project showcase image 2 | `https://static.wixstatic.com/media/0e435c_c9d0d1b76d404eac83536c5fbc9552e4~mv2.jpg` |
| Project showcase image 3 | `https://static.wixstatic.com/media/0e435c_9002abab51c647b8ae1a81642d7adb99~mv2.jpg` |
| Foto profil | `https://static.wixstatic.com/media/0e435c_35960f19b3cf453f9a6fd382e04ef0be~mv2.jpg` |

⚠️ Foto profil di halaman aslinya hanya dirender di 109x109px — original mungkin tidak jauh lebih besar dari itu. Cek hasil download; jika terlalu kecil/pecah untuk dipakai di layout baru, sebaiknya minta Tri upload foto profil baru dengan resolusi lebih tinggi.

### 4.5 File PDF
- Resume: `https://4c7aebdb-4865-4c39-be8d-b4261c131016.filesusr.com/ugd/0e435c_64510b16c54b455f9752de4073f2eafe.pdf`
- Portfolio PDF: `https://4c7aebdb-4865-4c39-be8d-b4261c131016.filesusr.com/ugd/0e435c_2d610dcb64334933a2ff4ada7277640e.pdf`

### 4.6 Social Links
- LinkedIn: https://www.linkedin.com/in/tri-anugerah-yusra-14a204115/
- Dribbble: https://dribbble.com/trian77
- Behance: https://www.behance.net/trianugerah1

## 5. ⚠️ Isu Penting yang Perlu Diputuskan
Ketiga gambar "Projects work" di halaman Home **tidak punya judul atau caption** apapun di Wix — jadi tidak diketahui pasti gambar mana mewakili project apa (Area Tracking / Marketplace / Wallet 2 / Cash Flow / project Linkz Asia / freelance). Ada 2 opsi:
1. Claude Code menampilkan ketiga gambar tersebut sebagai showcase generik tanpa label spesifik (aman, cepat)
2. Tri identifikasi manual gambar mana untuk project mana sebelum development dimulai (lebih akurat, tapi butuh waktu)

**Rekomendasi:** pilih opsi 1 dulu untuk migrasi cepat, lalu perbaiki captioning belakangan kalau sempat cross-check ke Behance.

## 6. Technical Execution Plan (untuk Claude Code)

### Step 1 — Inspeksi codebase baru dulu
Sebelum menulis apapun, baca struktur project Next.js yang sudah ada (`app/` atau `pages/`, komponen existing, `tailwind.config`, folder `public/`/`assets/`) supaya konten baru masuk ke pola yang sudah berjalan, bukan bikin struktur baru yang tidak konsisten.

### Step 2 — Download asset gambar (resolusi original)
```bash
mkdir -p public/images/legacy
curl -L -o public/images/legacy/hero-bg.jpg "https://static.wixstatic.com/media/0e435c_edfb836ba1264675ba3bf68d0ed3bfdb~mv2.jpg"
curl -L -o public/images/legacy/logo.png "https://static.wixstatic.com/media/0e435c_0142509cdf094a3fb8770ffe0a017072~mv2.png"
curl -L -o public/images/legacy/project-1.jpg "https://static.wixstatic.com/media/0e435c_29f08d8270374f5cbd393853105bc0c2~mv2.jpg"
curl -L -o public/images/legacy/project-2.jpg "https://static.wixstatic.com/media/0e435c_c9d0d1b76d404eac83536c5fbc9552e4~mv2.jpg"
curl -L -o public/images/legacy/project-3.jpg "https://static.wixstatic.com/media/0e435c_9002abab51c647b8ae1a81642d7adb99~mv2.jpg"
curl -L -o public/images/legacy/profile-photo.jpg "https://static.wixstatic.com/media/0e435c_35960f19b3cf453f9a6fd382e04ef0be~mv2.jpg"
curl -L -o public/files/resume.pdf "https://4c7aebdb-4865-4c39-be8d-b4261c131016.filesusr.com/ugd/0e435c_64510b16c54b455f9752de4073f2eafe.pdf"
curl -L -o public/files/portfolio.pdf "https://4c7aebdb-4865-4c39-be8d-b4261c131016.filesusr.com/ugd/0e435c_2d610dcb64334933a2ff4ada7277640e.pdf"
```
Setelah download, jalankan optimasi gambar (misal via `sharp` atau Next.js `<Image>` otomatis) — jangan pakai file mentah kalau ukurannya besar.

### Step 3 — Buat single source of truth untuk konten
Simpan seluruh teks di Section 4.2–4.3 sebagai data terstruktur (misal `content/profile.ts` atau `content/profile.json`), BUKAN hardcode di JSX — supaya gampang diedit belakangan. Struktur data disarankan:
```ts
export const profile = {
  name: "Tri Anugerah Yusra",
  hero: { ... },
  about: { ... },
  experience: [ { period, role, company, highlights: [], projects: [] } ],
  skills: [...],
  tools: [...],
  socials: { linkedin, dribbble, behance },
  files: { resume, portfolioPdf }
}
```

### Step 4 — Mapping ke komponen/section website baru
- Hero section → pakai hero background + headline dari 4.1
- About/Profile section → teks 4.2 + foto profil
- Experience/Timeline section → data 4.3, render sebagai timeline/accordion sesuai style komponen yang sudah ada
- Skills & Tools → grid/badge list mengikuti komponen existing
- Project showcase → 3 gambar dari 4.4, ikuti keputusan Section 5
- Footer/Contact → social links 4.6 + link resume & portfolio PDF

### Step 5 — Penyesuaian desain
Ikuti token desain (warna, font, spacing, radius) yang SUDAH didefinisikan di `tailwind.config` project baru. Jangan bawa warna/font dari Wix lama. Kalau ada inconsistency antara konten lama dan komponen baru (misal bullet points panjang di Experience tidak cocok dengan card kecil), rapikan ke format yang readable — prioritaskan keterbacaan di atas menjaga struktur asli Wix.

## 7. Acceptance Criteria
- [ ] Semua gambar ter-download di resolusi original (bukan thumbnail resize Wix)
- [ ] Konten teks 100% termigrasi tanpa typo/hilang bagian (bandingkan dengan Section 4)
- [ ] Resume & Portfolio PDF bisa diakses/didownload dari website baru
- [ ] Layout & styling konsisten dengan design system yang sudah ada di project baru (bukan tempelan style Wix)
- [ ] Social links (LinkedIn, Dribbble, Behance) berfungsi
- [ ] Tidak ada teks yang di-hardcode langsung di komponen JSX (semua dari data/content file)

## 8. Notes / Risiko
- Foto profil resolusi kecil (lihat 4.4) — mungkin perlu foto pengganti resolusi lebih tinggi
- 3 gambar showcase tanpa label jelas (lihat Section 5) — perlu keputusan sebelum dev
- File PDF Resume & Portfolio kemungkinan berisi info yang sudah outdated (posisi/pengalaman terakhir) — sebaiknya dicek ulang kontennya sebelum dipakai sebagai official CV di website baru
