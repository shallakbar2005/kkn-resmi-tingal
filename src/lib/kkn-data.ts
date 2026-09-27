// Semua konten halaman bisa diedit dari file ini.
import logoKelompok1 from "@/assets/logo-kelompok-1.png";
import logoKelompok2 from "@/assets/logo-kelompok-2.png";
import logoKelompok3 from "@/assets/logo-kelompok-3.png";
import HeroImage from "@/assets/ResmiTingalHero.jpeg";
import FotoDesa from "@/assets/GnResmiTingal.jpeg";
import fotoBawangDaun from "@/assets/potensi-bawang-daun.jpg";
import fotoKol from "@/assets/potensi-kol.jpg";
import fotoWortel from "@/assets/potensi-wortel.jpg";
import fotoKentang from "@/assets/potensi-kentang.jpg";

const u = (id: string, w = 600) => `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop`;

export const SITE_URL = "https://kkn-resmi-tingal.vercel.app";

export const villageProfile = {
  namaDesa: "Desa Resmi Tingal",
  kecamatan: "Kecamatan Kertasari",
  kabupaten: "Kabupaten Bandung",
  deskripsi:
    "Desa Resmi Tingal adalah desa yang dikelilingi oleh perkebunan dan terkenal dengan kebun Daun Bawang-nya. Warganya dikenal ramah, gotong royong, dan terus menumbuhkan UMKN lokal.",
  jumlahPenduduk: 6336,
  jumlahDusun: 3,
  luasWilayah: "328,326 ha",
  potensi: ["Bawang Daun", "Kol", "Wortel", "Kentang"],
  fotoDesa: FotoDesa,
  heroImage: HeroImage,
  googleMapsUrl:
    "https://www.google.com/maps/place/Desa+Resmi+Tingal/@-7.1539866,107.6884694,749m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e68bfae971899ed:0xc334ab097f9def56!8m2!3d-7.1539919!4d107.6910443!16s%2Fg%2F11kqs001g5?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D",
};

export type KelompokId = 1 | 2 | 3;
export type Member = {
  id: string;
  nama: string;
  nim: string;
  prodi: string;
  role: string;
  foto: string;
  kelompokId: KelompokId;
};
export type Proker = {
  id: string;
  kelompokId: KelompokId;
  judul: string;
  kategori: string;
  deskripsi: string;
  status: "Terlaksana" | "Berlanjut";
  thumbnail: string;
};
export type Komoditas = {
  id: string;
  nama: string;
  deskripsi: string;
  musim: string;
  gambar: string;
};

export const potensiDesa: Komoditas[] = [
  {
    id: "bawang-daun",
    nama: "Bawang Daun",
    deskripsi:
      "Jadi andalan utama desa. Tumbuh segar di udara sejuk, daunnya wangi, dan hampir tiap hari ada warga yang panen.",
    musim: "Panen bergilir sepanjang tahun",
    gambar: fotoBawangDaun,
  },
  {
    id: "kol",
    nama: "Kol",
    deskripsi:
      "Ditanam di kebun-kebun lereng. Kepalanya padat dan tahan dibawa jauh, jadi favorit pedagang pasar.",
    musim: "Paling bagus di musim hujan",
    gambar: fotoKol,
  },
  {
    id: "wortel",
    nama: "Wortel",
    deskripsi:
      "Tanahnya yang gembur bikin akarnya lurus dan manis. Banyak dijual segar, masih dengan tanah yang menempel.",
    musim: "Ditanam selepas bawang daun",
    gambar: fotoWortel,
  },
  {
    id: "kentang",
    nama: "Kentang",
    deskripsi:
      "Ditanam warga di sela-sela kebun. Selain dikirim ke pasar induk, hasilnya juga dipakai untuk konsumsi sendiri.",
    musim: "Panen di musim kemarau",
    gambar: fotoKentang,
  },
];

export const members: Member[] = [
  // ---------- KELOMPOK 1 ----------
  {
    id: "1",
    kelompokId: 1,
    nama: "Reksa Pramudya",
    nim: "230208138",
    prodi: "Ilmu Komunikasi",
    role: "Ketua",
    foto: "../public/download.jpeg",
  },
  {
    id: "2",
    kelompokId: 1,
    nama: "Agisni Alawiyah",
    nim: "230313009",
    prodi: "Manajemen",
    role: "Sekretaris",
    foto: "../public/download.jpeg",
  },
  {
    id: "3",
    kelompokId: 1,
    nama: "Tania Nurul Fithriyah",
    nim: "230312095",
    prodi: "Akutansi",
    role: "Bendahara",
    foto: "../public/download.jpeg",
  },
  {
    id: "4",
    kelompokId: 1,
    nama: "Naulita Fauziah",
    nim: "230207122",
    prodi: "Psikologi",
    role: "Acara",
    foto: "../public/download.jpeg",
  },
  {
    id: "5",
    kelompokId: 1,
    nama: "Salsabilah",
    nim: "230312082",
    prodi: "Akutansi",
    role: "Acara",
    foto: "../public/download.jpeg",
  },
  {
    id: "6",
    kelompokId: 1,
    nama: "Salma Nurhidayat",
    nim: "230104047",
    prodi: "Teknologi Pangan",
    role: "Humas",
    foto: "../public/download.jpeg",
  },
  {
    id: "7",
    kelompokId: 1,
    nama: "Robbi Alloh",
    nim: "230417045",
    prodi: "KPI",
    role: "Humas",
    foto: "../public/Robbi.jpeg",
  },
  {
    id: "8",
    kelompokId: 1,
    nama: "Galuh Sopandi",
    nim: "230313116",
    prodi: "Manajemen",
    role: "Logistik",
    foto: "../public/download.jpeg",
  },
  {
    id: "9",
    kelompokId: 1,
    nama: "Andika Hidayah Putra",
    nim: "240102014",
    prodi: "Teknik Informatika",
    role: "Logistik",
    foto: "../public/download.jpeg",
  },
  {
    id: "10",
    kelompokId: 1,
    nama: "Mf Arfiandi NP",
    nim: "230102074",
    prodi: "Teknik Informatika",
    role: "PDD",
    foto: "../public/download.jpeg",
  },
  {
    id: "11",
    kelompokId: 1,
    nama: "Nazwa Azizatul Fitri",
    nim: "230106094",
    prodi: "Farmasi",
    role: "PDD",
    foto: "../public/download.jpeg",
  },
  // ---------- KELOMPOK 2 ----------
  {
    id: "12",
    kelompokId: 2,
    nama: "Yasin Hakim",
    nim: "240103048",
    prodi: "Teknik Industri",
    role: "Ketua",
    foto: "../public/yasin.jpeg",
  },
  {
    id: "13",
    kelompokId: 2,
    nama: "Rina Pitria",
    nim: "230313254",
    prodi: "Manajemen",
    role: "Sekretaris",
    foto: "../public/cia.jpeg",
  },
  {
    id: "14",
    kelompokId: 2,
    nama: "Labieb Mahilatun Nail",
    nim: "230312045",
    prodi: "Akutansi",
    role: "Bendahara",
    foto: "../public/labib.jpeg",
  },
  {
    id: "15",
    kelompokId: 2,
    nama: "Tiandra Divya Azzahra",
    nim: "230211112",
    prodi: "Administrasi Publik",
    role: "Acara",
    foto: "../public/tiandra.jpeg",
  },
  {
    id: "16",
    kelompokId: 2,
    nama: "Faridsyah Zikry",
    nim: "230101007",
    prodi: "Teknik Elektro",
    role: "Acara",
    foto: "../public/zikry.jpeg",
  },
  {
    id: "17",
    kelompokId: 2,
    nama: "Meisya Aliffia Martanti",
    nim: "230208080",
    prodi: "Ilmu Komunikasi",
    role: "Humas",
    foto: "../public/aca.jpeg",
  },
  {
    id: "18",
    kelompokId: 2,
    nama: "Nazhira Kiasati Nazrian",
    nim: "230207127",
    prodi: "Psikologi",
    role: "Humas",
    foto: "../public/nazhira.jpeg",
  },
  {
    id: "19",
    kelompokId: 2,
    nama: "Adriano Hoshi Sumanto",
    nim: "230104002",
    prodi: "Teknologi Pangan",
    role: "Logistik",
    foto: "../public/ano.jpeg",
  },
  {
    id: "20",
    kelompokId: 2,
    nama: "Aisha Putri Karlina",
    nim: "230208008",
    prodi: "Ilmu Komunikasi",
    role: "PDD",
    foto: "../public/cey.jpeg",
  },
  {
    id: "21",
    kelompokId: 2,
    nama: "Farhan Hidayah",
    nim: "240102029",
    prodi: "Teknik Informatika",
    role: "PDD",
    foto: "../public/farhan.jpeg",
  },
  {
    id: "22",
    kelompokId: 2,
    nama: "Dinni Sintawati",
    nim: "230106036",
    prodi: "Farmasi",
    role: "Konsumsi",
    foto: "../public/dini.jpeg",
  },
  // ---------- KELOMPOK 3 ----------
  {
    id: "23",
    kelompokId: 3,
    nama: "Muhammad Saefuloh",
    nim: "230313165",
    prodi: "Manajemen",
    role: "Ketua",
    foto: "../public/musa.jpg",
  },
  {
    id: "24",
    kelompokId: 3,
    nama: "Siti Syakira Hasna K",
    nim: "230313281",
    prodi: "Manajemen",
    role: "Sekretaris",
    foto: "../public/kira.jpg",
  },
  {
    id: "25",
    kelompokId: 3,
    nama: "Asti Maesa Ayu",
    nim: "230312015",
    prodi: "Akutansi",
    role: "Bendahara",
    foto: "../public/eca.jpg",
  },
  {
    id: "26",
    kelompokId: 3,
    nama: "Najar Muhamad Rijki",
    nim: "230312062",
    prodi: "Akutansi",
    role: "Acara",
    foto: "../public/najar.jpg",
  },
  {
    id: "27",
    kelompokId: 3,
    nama: "Zakiyatunisa",
    nim: "230208169",
    prodi: "Ilmu Komunikasi",
    role: "Acara",
    foto: "../public/kiya.jpg",
  },
  {
    id: "28",
    kelompokId: 3,
    nama: "Maulidya Karyani",
    nim: "230207088",
    prodi: "Spikologi",
    role: "Acara",
    foto: "../public/lidya.jpg",
  },
  {
    id: "29",
    kelompokId: 3,
    nama: "Sarah Mutia Azahra",
    nim: "230313269",
    prodi: "Manajemen",
    role: "Humas",
    foto: "../public/sarah.jpg",
  },
  {
    id: "30",
    kelompokId: 3,
    nama: "Azzahra Zain",
    nim: "230211023",
    prodi: "Administrasi Publik",
    role: "Humas",
    foto: "../public/jara.jpg",
  },
  {
    id: "31",
    kelompokId: 3,
    nama: "Firman Hadiyansyah",
    nim: "240102034",
    prodi: "Teknik Informatika",
    role: "PDD",
    foto: "../public/firman.jpg",
  },
  {
    id: "32",
    kelompokId: 3,
    nama: "Angelya Setyaningrum",
    nim: "230106013",
    prodi: "Farmasi",
    role: "PDD",
    foto: "../public/angel.jpg",
  },
  {
    id: "33",
    kelompokId: 3,
    nama: "Marshal August Akbar",
    nim: "240102052",
    prodi: "Teknik Informatika",
    role: "Logistik",
    foto: "../public/Marshal.jpg",
  },
];

export const prokers: Proker[] = [
  {
    id: "p1",
    kelompokId: 1,
    judul: "Edukasi Pencegahan Stunting di SDN Joglo 1",
    kategori: "Pendidikan",
    deskripsi:
      "Mengedukasi siswa SD, guru,  di SDN Joglo 1 tentang pentingnya gizi seimbang dan PHBS.",
    status: "Terlaksana",
    thumbnail: "../public/stunting.jpg",
  },
  {
    id: "p2",
    kelompokId: 1,
    judul: "Spikoedukasi : Kenakalan Usia Dini di SDN Joglo 1",
    kategori: "Pendidikan",
    deskripsi: "Mengedukasi siswa SDN Joglo 1 untuk mencegah kenakalan usia dini.",
    status: "Terlaksana",
    thumbnail: "../public/spikoedukasi.jpg",
  },
  {
    id: "p3",
    kelompokId: 1,
    judul: "Program Tempat Sampah Botol Plastik & Cup",
    kategori: "Lingkungan",
    deskripsi:
      "Membuat tempat sampah untuk botol plastik & cup guna edukasi dan bisa diolah kembali.",
    status: "Terlaksana",
    thumbnail: "../public/banksampah.jpg",
  },
  {
    id: "p4",
    kelompokId: 2,
    judul: "Membuat Tempat Sampah Khusus Botol Plastik",
    kategori: "Lingkungan",
    deskripsi: "Guna sebagai edukasi betapa pentingnya memilah sampah pada anak SD Resmi Tingal.",
    status: "Terlaksana",
    thumbnail: "../public/botolplastik.jpeg",
  },
  {
    id: "p5",
    kelompokId: 2,
    judul: "Sosialisasi Pemanfaatan Minyak Jalantah",
    kategori: "Ekonomi & Lingkungan",
    deskripsi: "Mengedukasi warga mengolah minyak jelantah menjadi produk bernilai jual .",
    status: "Terlaksana",
    thumbnail: "../public/minyak.jpeg",
  },
  {
    id: "p6",
    kelompokId: 2,
    judul: "Penyuluhan Anak Tidak Sekolah(Kolaborasi kelompok 2 & 3)",
    kategori: "Pendidikan",
    deskripsi: "Membangun semangat pada anak SMP 2 Kertasari agar tidak putus sekolah.",
    status: "Terlaksana",
    thumbnail: "../public/ats23.jpeg",
  },
  {
    id: "p7",
    kelompokId: 3,
    judul: "Pemetaan Map Desa Resmi Tingal",
    kategori: "Infrastruktur",
    deskripsi: "Membuat peta tematik sebaran infrastruktur dan batas dusun desa resmi tingal.",
    status: "Terlaksana",
    thumbnail: "../public/Pemetaan.jpeg",
  },
  {
    id: "p8",
    kelompokId: 3,
    judul: "Edukasi Sampah SD Sukamaju",
    kategori: "Pendidikan",
    deskripsi:
      "Edukasi sampah anak SD Sukamaju agar lebih pintar dalam memilah & mengelola sampah.",
    status: "Terlaksana",
    thumbnail: "../public/edukasisampahsd.jpeg",
  },
  {
    id: "p9",
    kelompokId: 3,
    judul: "Pemerdayaan Ekonomi",
    kategori: "Ekonomi",
    deskripsi: "Meningkatkan promosi dan penjualan produk UMKM Desa Resmi Tingal melalui spanduk.",
    status: "Terlaksana",
    thumbnail: "../public/umkmpmdy.jpeg",
  },
];

const dokIds = [
  ["/dokumentasi/mappp.jpeg", "Gotong royong bersama warga"],
  ["/dokumentasi/ngaji.jpeg", "Lomba anak sholeh"],
  ["/dokumentasi/sisingaan.jpeg", "Mengikuti serta dalam sisingaan"],
  ["/dokumentasi/lomba17.jpeg", "Lomba 17 Agustusan"],
  ["/dokumentasi/posyandu.jpg", "Kegiatan posyandu"],
  ["/dokumentasi/minyakj.jpeg", "Edukasi Mengolah minyak jalantah"],
  // lanjutkan sampai habis
];

export const dokumentasi = dokIds.map(([imageUrl, caption], i) => ({
  id: `d${i + 1}`,
  imageUrl: imageUrl, // <-- langsung pakai path, jangan pakai u()
  caption,
}));

export type KelompokLogo = { kelompokId: KelompokId; nama: string; logo: string };

// Logo kelompok: ganti file di src/assets kalau punya logo resmi dari kampus.
export const kelompokLogos: KelompokLogo[] = [
  { kelompokId: 1, nama: "Kelompok 1", logo: logoKelompok1 },
  { kelompokId: 2, nama: "Kelompok 2", logo: logoKelompok2 },
  { kelompokId: 3, nama: "Kelompok 3", logo: logoKelompok3 },
];

export const footer = {
  lokasi: "Desa Resmi Tingal, Kecamatan Kertasari, Kabupaten Bandung",
  // Nama akun Instagram tiap kelompok KKN. TULIS TANPA tanda @,
  // sesuai nama user di Instagram (contoh: "kknkel1.resmitingal").
  instagramkkn1: "kkn.resmitingal_01",
  instagramkkn2: "kkn_resmitingal02",
  instagramkkn3: "kkn_resmitingal03",
};
