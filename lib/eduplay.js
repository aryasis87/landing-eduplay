/* ==========================================================================
   EduPlay — latihan matematika SD kelas 1–3 lewat permainan sepuluh menit.
   Satu sumber isi untuk beranda, halaman main, dan kurikulum.
   Nama, harga, dan angka laporan adalah contoh purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-eduplay.vercel.app';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

// Satu "pulau" = satu topik dengan satu permainan. Empat pulau per kelas.
export const PULAU = [
  { slug: 'pulau-hitung', kelas: 1, nama: 'Pulau Hitung', main: 'Kelereng Berbaris', topik: 'Membilang dan membaca bilangan sampai 20', soal: 'Ada berapa kelereng di baris ini? ●●●●● ●●●' },
  { slug: 'teman-sepuluh', kelas: 1, nama: 'Pulau Teman Sepuluh', main: 'Teman Sepuluh', topik: 'Pasangan bilangan yang jumlahnya 10', soal: '3 berteman dengan berapa supaya jadi 10?' },
  { slug: 'pulau-bentuk', kelas: 1, nama: 'Pulau Bentuk', main: 'Cetakan Kue', topik: 'Mengenal segitiga, segi empat, dan lingkaran', soal: 'Cetakan mana yang punya tiga sudut?' },
  { slug: 'panjang-pendek', kelas: 1, nama: 'Pulau Panjang Pendek', main: 'Ular Tangga Penggaris', topik: 'Membandingkan dan mengurutkan panjang', soal: 'Pensil mana yang paling pendek?' },
  { slug: 'pulau-puluhan', kelas: 2, nama: 'Pulau Puluhan', main: 'Ikat Sepuluh', topik: 'Nilai tempat puluhan dan satuan sampai 100', soal: '4 ikat sepuluh dan 7 batang lepas = ?' },
  { slug: 'timbangan', kelas: 2, nama: 'Pulau Timbangan', main: 'Timbangan', topik: 'Penjumlahan dan pengurangan sampai 100', soal: '7 + ? sama berat dengan 12' },
  { slug: 'pulau-jam', kelas: 2, nama: 'Pulau Jam', main: 'Jam Bangun Pagi', topik: 'Membaca jam tepat dan setengah', soal: 'Jarum pendek di 7, jarum panjang di 6. Pukul berapa?' },
  { slug: 'pulau-uang', kelas: 2, nama: 'Pulau Uang', main: 'Warung Kecil', topik: 'Menghitung uang rupiah dan kembalian', soal: 'Harga roti Rp 3.000, kamu bayar Rp 5.000. Kembaliannya?' },
  { slug: 'pulau-kali', kelas: 3, nama: 'Pulau Kali', main: 'Kebun Berpetak', topik: 'Perkalian sebagai penjumlahan berulang', soal: '4 petak, tiap petak 6 tanaman. Ada berapa tanaman?' },
  { slug: 'pulau-bagi', kelas: 3, nama: 'Pulau Bagi', main: 'Bagi Kue', topik: 'Pembagian sama rata', soal: '12 kue dibagi rata untuk 3 anak. Masing-masing dapat?' },
  { slug: 'pulau-pecahan', kelas: 3, nama: 'Pulau Pecahan', main: 'Potong Martabak', topik: 'Pecahan ½, ⅓, dan ¼', soal: 'Martabak dipotong 4 sama besar, kamu makan 1. Pecahannya?' },
  { slug: 'pulau-diagram', kelas: 3, nama: 'Pulau Diagram', main: 'Sensus Kucing', topik: 'Membaca dan membuat piktogram', soal: 'Gambar kucing paling banyak ada di rumah siapa?' },
];

export const KELAS = [
  { no: 1, fase: 'Fase A', ket: 'Membilang, pasangan sepuluh, bentuk, panjang' },
  { no: 2, fase: 'Fase A', ket: 'Puluhan, tambah-kurang sampai 100, jam, uang' },
  { no: 3, fase: 'Fase B', ket: 'Kali, bagi, pecahan sederhana, piktogram' },
];

// Soal permainan Timbangan: a + ? = c.
export const SOAL_TIMBANGAN = [
  { a: 7, c: 12, pilihan: [4, 5, 6] },
  { a: 9, c: 15, pilihan: [7, 6, 5] },
  { a: 14, c: 20, pilihan: [6, 5, 7] },
  { a: 8, c: 17, pilihan: [8, 7, 9] },
  { a: 25, c: 40, pilihan: [5, 25, 15] },
];

// Contoh laporan mingguan untuk orang tua (menit bermain, batas 10 menit/hari).
export const LAPORAN = {
  anak: 'Kirana, kelas 1',
  batas: 10,
  menit: [['Sen', 10], ['Sel', 8], ['Rab', 10], ['Kam', 0], ['Jum', 10], ['Sab', 6], ['Min', 10]],
  kuasai: [['Teman Sepuluh', 92], ['Pulau Hitung', 100], ['Pulau Bentuk', 64]],
  catatan: 'Sering tertukar antara 6 + 4 dan 7 + 3 di awal minggu; hari Jumat sudah lancar.',
};

export const PRINSIP = [
  ['Berhenti sendiri', 'Setelah 10 atau 20 menit (Anda yang atur), aplikasi menutup pulau dan mengajak anak berhenti.'],
  ['Tanpa iklan, tanpa chat', 'Tidak ada iklan, tidak ada obrolan dengan orang asing, tidak ada pembelian di dalam aplikasi anak.'],
  ['Jalan tanpa internet', 'Unduh pulau sekali, mainkan di mobil atau di rumah nenek tanpa sinyal.'],
  ['Data anak secukupnya', 'Hanya nama panggilan dan kelas. Laporan dikirim ke surel orang tua, bukan ke pihak lain.'],
];

export const HARGA = [
  { nama: 'Coba', harga: 0, satuan: 'selamanya', isi: ['Satu pulau pertama di tiap kelas', 'Satu profil anak', 'Laporan mingguan ringkas'], cta: ['Main di peramban dulu', '/main'] },
  { nama: 'Keluarga', harga: 39000, satuan: 'per bulan', catatan: 'atau Rp 349.000 per tahun', isi: ['Semua 12 pulau', 'Sampai 3 profil anak', 'Laporan mingguan lengkap', 'Mode tanpa internet'], cta: ['Lihat isi 12 pulau', '/kurikulum'], unggul: true },
  { nama: 'Sekolah', harga: 15000, satuan: 'per siswa per tahun', isi: ['Semua 12 pulau', 'Dasbor guru per kelas', 'Tugas pulau mingguan', 'Minimal 20 siswa'], cta: ['Lihat kurikulum per kelas', '/kurikulum'] },
];

export const FAQ = [
  { t: 'Untuk umur berapa?', j: 'Untuk anak kelas 1 sampai 3 SD, kira-kira 6–9 tahun. Anak TK besar biasanya bisa mulai dari Pulau Hitung bersama orang tua.' },
  { t: 'Perangkat apa yang bisa dipakai?', j: 'Ponsel dan tablet Android 8 ke atas, iPad, dan peramban di laptop. Satu akun keluarga bisa dipakai di beberapa perangkat.' },
  { t: 'Apakah ada iklan atau pembelian di dalam aplikasi?', j: 'Tidak ada sama sekali. Langganan hanya bisa diatur dari akun orang tua yang dilindungi kata sandi.' },
  { t: 'Bagaimana kalau anak ingin main lebih lama?', j: 'Batas waktu bisa dinaikkan sampai 20 menit dari akun orang tua. Kami sengaja tidak menyediakan pilihan tanpa batas.' },
];
