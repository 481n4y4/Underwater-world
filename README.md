# 🌊 Underwater World
Website edukatif yang memperkenalkan dunia bawah laut: jenis-jenis ikan, ekosistem laut, rantai makanan, dan keindahan laut yang perlu dijaga.
________________________________________
## 🎯 Tujuan Website
•	Memberikan informasi dasar tentang kehidupan laut.
•	Mengedukasi pengguna tentang pentingnya menjaga ekosistem laut.
•	Menampilkan konten menarik dengan tampilan visual yang modern dan interaktif.
________________________________________
## 🧱 Teknologi yang Digunakan
Komponen	Teknologi
Framework UI	React (dengan Vite untuk build cepat)
Routing	React Router DOM
Styling	Tailwind CSS
Deployment	GitHub Pages / Netlify (opsional)
________________________________________
## 🗂️ Struktur Halaman (React Router DOM)
Route	Komponen	Deskripsi
/	Home.jsx	Halaman utama berisi pengantar dunia bawah laut dan navigasi ke halaman lain.
/fish	FishList.jsx	Menampilkan berbagai jenis ikan beserta gambar dan deskripsinya.
/ecosystem	Ecosystem.jsx	Menjelaskan ekosistem laut (karang, plankton, predator, dll).
/foodchain	FoodChain.jsx	Menampilkan rantai makanan laut dalam bentuk diagram atau urutan.
/about	About.jsx	Informasi tentang tujuan website dan sumber data.
________________________________________
## 🧩 Struktur Folder Project
```
underwater-world/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Card.jsx
│  │  └─ HeroSection.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ FishList.jsx
│  │  ├─ Ecosystem.jsx
│  │  ├─ FoodChain.jsx
│  │  └─ About.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ public/
│  ├─ images/
│  │  ├─ clownfish.jpg
│  │  ├─ shark.jpg
│  │  └─ coral.jpg
├─ package.json
└─ tailwind.config.js
```
________________________________________
## 🧭 Desain Navigasi
Navbar (tetap di atas)
•	Logo: 🌊 Underwater World
•	Link: Home | Fish | Ecosystem | Food Chain | About
Footer
•	Hak cipta © 2025 Underwater World
•	Kontak / Link sosial media (opsional)
________________________________________
## 🎨 Desain Visual
•	Warna utama:
o	#0D3B66 (biru laut dalam)
o	#00A896 (biru toska)
o	#F0F3BD (krem laut)
•	Font: Poppins atau Inter
•	Gaya: clean, minimalis, bergambar laut (ikan, karang, ombak)
________________________________________
## 🐠 Isi Konten Awal
🏠 Halaman Home
•	Hero section dengan gambar laut dan teks sambutan.
•	Tombol "Jelajahi Dunia Laut" → ke /fish.
🐟 Halaman Fish
•	Kartu daftar ikan (gambar + nama + deskripsi singkat).
Contoh:
o	Clownfish 🐠
o	Blue Tang 🐟
o	Great White Shark 🦈
🌿 Halaman Ecosystem
•	Penjelasan tentang:
o	Terumbu karang
o	Plankton
o	Predator dan mangsa
o	Kondisi ekosistem laut
🦑 Halaman Food Chain
•	Diagram atau list sederhana:
o	Plankton → Small Fish → Big Fish → Shark
o	Penjelasan tiap tahap rantai makanan.
ℹ️ Halaman About
•	Penjelasan singkat tentang tujuan website.
•	Nama pembuat / tim proyek.