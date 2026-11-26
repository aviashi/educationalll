import multimeterImg from '@/src/assets/images/multimeter_digital_1795691817156.jpg';
import tangAmpereImg from '@/src/assets/images/tang_ampere_1795691817578.jpg';
import testPenImg from '@/src/assets/images/test_pen_1795691818066.jpg';
import solderListrikImg from '@/src/assets/images/solder_listrik_1795691817919.jpg';
import tangKombinasiImg from '@/src/assets/images/tang_kombinasi_1795691818499.jpg';
import obengIsolasiImg from '@/src/assets/images/obeng_isolasi_1795691819313.jpg';
import type { Equipment } from '../types/equipment';

export const EQUIPMENT_DATA: Equipment[] = [
  {
    id: 'multimeter-digital',
    name: 'Multimeter Digital',
    subtitle: 'Alat Ukur Besaran Listrik Terpadu (AVO Meter Digital)',
    categoryId: 'alat-ukur',
    image: multimeterImg,
    imageAlt: 'Multimeter digital berwarna kuning abu-abu beserta probe merah dan hitam',
    shortDescription:
      'Alat ukur multifungsi untuk mengukur tegangan (AC/DC), arus listrik, dan hambatan secara akurat pada layar digital.',
    definition:
      'Multimeter digital adalah instrumen pengukuran elektronik yang menggabungkan fungsi voltmeter, amperemeter, dan ohmmeter dalam satu perangkat dengan tampilan angka pada layar LCD.',
    functions: [
      'Mengukur tegangan listrik searah (DC) seperti pada baterai dan catu daya rangkaian elektronik.',
      'Mengukur tegangan listrik bolak-balik (AC) pada instalasi listrik maupun stopkontak.',
      'Mengukur kuat arus listrik yang mengalir pada suatu rangkaian secara seri.',
      'Mengukur nilai hambatan (resistansi) komponen seperti resistor atau elemen pemanas.',
      'Memeriksa kontinuitas (keterhubungan jalur kabel/sekering) dan kondisi komponen semikonduktor seperti dioda.',
    ],
    components: [
      {
        name: 'Layar LCD',
        description:
          'Menampilkan angka hasil pengukuran beserta satuan dan indikator polaritas secara langsung.',
      },
      {
        name: 'Sakelar Pemilih (Selector Switch)',
        description:
          'Tombol putar untuk memilih jenis besaran ukur (Volt AC/DC, Ohm, Ampere, Kontinuitas) dan batas ukurnya.',
      },
      {
        name: 'Terminal Soket Probe',
        description:
          'Lubang konektor tempat mencolokkan kabel probe: COM (hitam/negatif), VΩmA (merah), dan 10A (arus besar).',
      },
      {
        name: 'Kabel Probe (Merah & Hitam)',
        description:
          'Penghantar berujung jarum uji yang menghubungkan titik ukur pada rangkaian dengan multimeter.',
      },
    ],
    workingPrinciple:
      'Sinyal listrik analog yang masuk melalui probe (tegangan, arus, atau jatuh tegangan pada resistor internal) dikondisikan oleh rangkaian pembagi dan pengubah sinyal, lalu dikonversi menjadi data biner oleh komponen Analog-to-Digital Converter (ADC) agar dapat ditampilkan sebagai angka desimal pada layar LCD.',
    characteristics: [
      { label: 'Jenis Tampilan', value: 'Layar LCD Digital' },
      { label: 'Besaran Ukur Utama', value: 'Tegangan (V), Arus (A), Hambatan (Ω)' },
      { label: 'Sumber Daya Internal', value: 'Baterai 9V atau 2× AAA' },
      { label: 'Tingkat Presisi Umum', value: 'Tinggi, minim kesalahan paralaks pembacaan' },
    ],
    safetyNote:
      'Selalu pastikan posisi sakelar pemilih dan colokan probe sesuai besaran yang diukur. Mengukur tegangan langsung saat sakelar berada pada mode Ohm atau Ampere dapat merusak sekering internal maupun alat ukur.',
  },
  {
    id: 'tang-ampere',
    name: 'Tang Ampere (Clamp Meter)',
    subtitle: 'Alat Ukur Arus Listrik Tanpa Memutus Rangkaian',
    categoryId: 'alat-ukur',
    image: tangAmpereImg,
    imageAlt: 'Tang ampere digital berwarna biru tua dengan rahang penjepit di bagian atas',
    shortDescription:
      'Alat ukur portabel berbentuk penjepit untuk mengukur kuat arus AC pada kabel penghantar tanpa memutus jalur rangkaian.',
    definition:
      'Tang ampere atau clamp meter adalah alat ukur listrik yang dilengkapi rahang penjepit berinti feromagnetik untuk mengukur arus listrik secara non-kontak langsung melalui induksi medan magnet di sekitar kabel penghantar.',
    functions: [
      'Mengukur besar arus listrik pada kabel instalasi atau motor listrik tanpa memutus aliran rangkaian.',
      'Memeriksa keseimbangan beban arus antar fasa pada panel distribusi listrik.',
      'Mengukur tegangan AC/DC dan hambatan tambahan apabila dihubungkan dengan kabel probe.',
      'Membantu mendeteksi beban berlebih (overload) pada peralatan rumah tangga seperti AC atau pompa air.',
    ],
    components: [
      {
        name: 'Rahang Penjepit (Current Clamp Jaw)',
        description:
          'Bagian berbentuk tang yang dapat dibuka untuk melingkari satu kabel penghantar tunggal.',
      },
      {
        name: 'Tuas Pembuka Rahang (Trigger)',
        description:
          'Tuas di sisi bodi untuk membuka dan menutup rahang penjepit dengan satu tangan.',
      },
      {
        name: 'Sakelar Pemilih & Tombol Hold',
        description:
          'Mengatur mode pengukuran (Ampere, Volt, Ohm) serta mengunci angka pembacaan pada layar agar mudah dicatat.',
      },
      {
        name: 'Layar LCD & Soket Probe Tambahan',
        description:
          'Menampilkan hasil pengukuran dan menyediakan konektor probe untuk pengukuran tegangan atau resistansi.',
      },
    ],
    workingPrinciple:
      'Ketika arus bolak-balik (AC) mengalir melalui sebuah kabel penghantar, muncul medan magnet yang berubah-ubah di sekeliling kabel tersebut. Rahang penjepit bertindak sebagai inti transformator arus (current transformer) yang menangkap medan magnet dan mengubahnya menjadi arus induksi proporsional untuk dibaca oleh sirkuit meter digital.',
    characteristics: [
      { label: 'Metode Ukur Arus', value: 'Induksi medan magnet (non-invasif)' },
      { label: 'Aturan Penjepitan', value: 'Wajib menjepit 1 konduktor tunggal (fasa atau netral)' },
      { label: 'Kapasitas Arus Umum', value: 'Hingga 400 A – 600 A AC' },
      { label: 'Keunggulan Utama', value: 'Aman dan cepat pada rangkaian berbeban aktif' },
    ],
    safetyNote:
      'Jangan menjepit kabel fasa dan netral secara bersamaan karena medan magnet keduanya saling meniadakan sehingga alat akan membaca angka mendekati nol.',
  },
  {
    id: 'test-pen',
    name: 'Test Pen',
    subtitle: 'Alat Uji Sederhana Pendeteksi Tegangan Fasa',
    categoryId: 'alat-uji',
    image: testPenImg,
    imageAlt: 'Test pen listrik dengan gagang plastik transparan berwarna kuning amber dan ujung obeng pipih',
    shortDescription:
      'Alat uji praktis berbentuk obeng kecil untuk mendeteksi keberadaan tegangan listrik fasa AC pada kabel atau stopkontak.',
    definition:
      'Test pen (voltage tester) adalah alat uji listrik genggam berbentuk obeng pipih yang memiliki lampu indikator internal guna mengetahui apakah suatu penghantar atau terminal memiliki tegangan listrik aktif.',
    functions: [
      'Mendeteksi apakah kabel, terminal, atau stopkontak memiliki aliran tegangan fasa (bermuatan listrik).',
      'Membedakan kabel fasa (bertegangan) dengan kabel netral pada instalasi listrik 1 fasa.',
      'Membantu pemeriksaan awal keamanan sebelum teknisi menyentuh komponen peralatan listrik.',
      'Mengencangkan atau melonggarkan sekrup terminal kecil dengan beban puntir ringan.',
    ],
    components: [
      {
        name: 'Ujung Logam Penguji (Tip)',
        description:
          'Batang logam konduktif berbentuk obeng pipih yang ditempelkan ke titik atau penghantar yang diuji.',
      },
      {
        name: 'Resistor Pembatas Arus',
        description:
          'Komponen bernilai hambatan tinggi (umumnya ratusan kilo-ohm hingga mega-ohm) yang membatasi arus ke tingkat sangat aman.',
      },
      {
        name: 'Lampu Indikator Neon',
        description:
          'Lampu kecil di dalam gagang transparan yang menyala terang saat terdapat beda potensial fasa.',
      },
      {
        name: 'Pelat Sentuh Logam & Gagang Isolator',
        description:
          'Tutup logam di ujung atas tempat jari menyentuh untuk melengkapi jalur referensi tanah (ground), serta gagang plastik berisolasi.',
      },
    ],
    workingPrinciple:
      'Saat ujung logam menyentuh penghantar bertegangan fasa dan jari pengguna menyentuh pelat logam di bagian atas, arus listrik yang sangat kecil (mikroampere) mengalir melalui resistor bernilai sangat besar, menyalakan lampu neon di dalam tabung, lalu menuju tubuh pengguna sebagai referensi kapasitif ke tanah tanpa membahayakan.',
    characteristics: [
      { label: 'Rentang Tegangan Kerja', value: '100 V – 250 V AC (umum)' },
      { label: 'Indikator', value: 'Lampu Neon / LED' },
      { label: 'Sifat Pengujian', value: 'Kualitatif (ada atau tidaknya tegangan fasa)' },
      { label: 'Bentuk Fisik', value: 'Ringkas, mudah dibawa di saku baju kerja' },
    ],
    safetyNote:
      'Periksa selalu kondisi fisik isolasi gagang sebelum digunakan dan jangan pernah memakai test pen sebagai obeng berat untuk membongkar sekrup yang keras karena dapat merusak komponen di dalamnya.',
  },
  {
    id: 'solder-listrik',
    name: 'Solder Listrik',
    subtitle: 'Alat Pemanas untuk Penyambungan Timah & Komponen',
    categoryId: 'perkakas-kerja',
    image: solderListrikImg,
    imageAlt: 'Solder listrik dengan gagang biru tua, pipa pemanas logam, ujung tembaga, dan kabel daya tergulung',
    shortDescription:
      'Peralatan pemanas listrik yang digunakan untuk melelehkan timah solder saat menyambung atau melepas komponen rangkaian.',
    definition:
      'Solder listrik adalah alat kerja elektronik dan kelistrikan yang mengubah energi listrik menjadi energi panas pada ujung mata solder untuk melelehkan paduan timah (solder) sehingga terbentuk sambungan mekanis dan elektris yang kuat.',
    functions: [
      'Menyambung kaki komponen elektronik ke jalur tembaga pada papan sirkuit cetak (PCB).',
      'Menyambung ujung kabel serabut agar kuat dan terlindungi dari oksidasi.',
      'Membantu proses pelepasan komponen rusak (desoldering) bersama penyedot timah (attractor).',
      'Memperbaiki sambungan solderan yang retak atau lepas (cold solder joint) pada peralatan listrik.',
    ],
    components: [
      {
        name: 'Mata Solder (Soldering Tip)',
        description:
          'Ujung logam penghantar panas (biasanya berbahan tembaga berlapis besi) tempat melelehkan timah.',
      },
      {
        name: 'Elemen Pemanas (Heating Element)',
        description:
          'Kawat nikelin atau pemanas keramik di dalam selongsong baja yang menghasilkan panas saat dialiri listrik.',
      },
      {
        name: 'Selongsong Pelindung (Barrel)',
        description:
          'Tabung baja tahan karat yang melindungi elemen pemanas dan menyalurkan panas ke mata solder.',
      },
      {
        name: 'Gagang Isolator & Kabel Daya',
        description:
          'Pegangan berbahan tahan panas dan isolator listrik untuk kenyamanan dan keamanan tangan.',
      },
    ],
    workingPrinciple:
      'Ketika dihubungkan ke sumber listrik AC, arus listrik mengalir melewati elemen pemanas berhambatan tertentu. Berdasarkan efek pemanasan Joule, energi listrik diubah menjadi panas yang merambat secara konduksi menuju mata solder hingga mencapai suhu leleh timah (sekitar 180°C–350°C).',
    characteristics: [
      { label: 'Daya Listrik Umum', value: '30 W, 40 W, hingga 60 W' },
      { label: 'Tegangan Masukan', value: '220 V AC / 50 Hz' },
      { label: 'Kisaran Suhu Ujung', value: '± 300°C – 400°C (tergantung daya)' },
      { label: 'Bahan Pendukung', value: 'Timah solder (tin-lead / lead-free) & fluks' },
    ],
    safetyNote:
      'Letakkan selalu solder panas pada dudukannya (soldering stand). Hindari menyentuh bagian logam pemanas, pastikan ventilasi ruangan baik untuk menghindari asap fluks, dan cabut steker setelah selesai bekerja.',
  },
  {
    id: 'tang-kombinasi',
    name: 'Tang Kombinasi Berisolasi',
    subtitle: 'Perkakas Tangan Serbaguna untuk Pekerjaan Kabel & Mekanik',
    categoryId: 'perkakas-kerja',
    image: tangKombinasiImg,
    imageAlt: 'Tang kombinasi berisolasi VDE berwarna merah kuning dengan rahang baja',
    shortDescription:
      'Tang serbaguna dengan gagang berisolasi untuk memegang, memuntir, membengkokkan, serta memotong kabel penghantar listrik.',
    definition:
      'Tang kombinasi adalah perkakas tangan mekanis yang menggabungkan permukaan penjepit datar, alur cengkeram bergerigi, dan mata pisau pemotong dalam satu rahang, serta dilengkapi gagang berlapis isolator keselamatan listrik.',
    functions: [
      'Menjepit dan menahan benda kerja atau kabel saat proses perakitan.',
      'Memuntir sambungan kabel penghantar (seperti sambungan ekor babi / pigtail) agar rapat dan kuat.',
      'Memotong kawat tembaga atau kabel instalasi berukuran kecil hingga sedang.',
      'Membengkokkan ujung kabel membentuk mata itik untuk dipasang pada sekrup terminal.',
    ],
    components: [
      {
        name: 'Ujung Rahang Datar Bergerigi',
        description:
          'Bagian depan rahang untuk mencengkeram benda pipih, menarik kabel, dan memuntir sambungan kawat.',
      },
      {
        name: 'Lekukan Penjepit Bulat',
        description:
          'Bagian tengah bergerigi melengkung untuk menahan benda silindris seperti baut kecil atau pipa tipis.',
      },
      {
        name: 'Mata Pisau Pemotong (Side Cutter)',
        description:
          'Bagian tajam di pangkal rahang yang berfungsi memotong kabel atau kawat.',
      },
      {
        name: 'Poros Engsel & Gagang Isolator VDE',
        description:
          'Sumbu pengungkit dan pegangan berlapis karet/polimer tebal dengan pembatas jari (finger guard) penahan sengatan.',
      },
    ],
    workingPrinciple:
      'Tang kombinasi bekerja menggunakan prinsip tuas mekanis kelas pertama dengan poros engsel sebagai titik tumpu. Gaya tekan dari tangan pada gagang yang panjang diperbesar pada rahang yang lebih pendek sehingga menghasilkan daya cengkeram dan daya potong yang kuat.',
    characteristics: [
      { label: 'Material Rahang', value: 'Baja karbon / Chrome Vanadium yang dikeraskan' },
      { label: 'Standar Isolasi Listrik', value: 'Hingga 1.000 V AC (standar IEC 60900 / VDE)' },
      { label: 'Ukuran Panjang Umum', value: '6 inci, 7 inci, dan 8 inci' },
      { label: 'Fitur Keamanan', value: 'Pelindung selip jari pada pangkal gagang' },
    ],
    safetyNote:
      'Meskipun berisolasi 1.000 V, selalu putuskan sumber listrik utama sebelum memotong kabel. Jangan memotong kawat baja keras menggunakan mata pisau tang standar kabel tembaga karena dapat menumpulkan rahang.',
  },
  {
    id: 'obeng-isolasi',
    name: 'Obeng Isolasi (Plus & Minus)',
    subtitle: 'Perkakas Pengencang Sekrup Khusus Pekerjaan Kelistrikan',
    categoryId: 'perkakas-kerja',
    image: obengIsolasiImg,
    imageAlt: 'Sepasang obeng isolasi listrik VDE merah kuning jenis pipih dan kembang',
    shortDescription:
      'Obeng khusus pekerjaan listrik dengan selubung isolator penuh pada batang logam hingga mendekati ujung mata obeng.',
    definition:
      'Obeng isolasi adalah perkakas tangan untuk memutar sekrup terminal atau baut pengikat pada perangkat listrik yang seluruh gagang dan hampir seluruh batangnya dilapisi bahan isolator tegangan tinggi guna mencegah korsleting maupun sengatan listrik.',
    functions: [
      'Membuka dan memasang sekrup penutup bodi peralatan listrik (setrika, kipas angin, blender, panel).',
      'Mengencangkan atau melonggarkan baut terminal kabel pada MCB, sakelar, dan stopkontak.',
      'Mencegah terjadinya hubungan singkat (korsleting) apabila batang obeng tanpa sengaja menyentuh bagian konduktif di dekat terminal.',
    ],
    components: [
      {
        name: 'Mata Obeng (Tip Plus/Phillips & Minus/Slotted)',
        description:
          'Bagian ujung logam presisi (bentuk silang + atau pipih −) yang masuk ke kepala sekrup.',
      },
      {
        name: 'Selubung Isolator Batang',
        description:
          'Lapisan polimer tahan tegangan tinggi yang membungkus batang logam hingga mendekati ujung mata obeng.',
      },
      {
        name: 'Gagang Ergonomis Anti-Selip',
        description:
          'Pegangan bertekstur dan berlekuk untuk menyalurkan momen puntir secara nyaman dan stabil.',
      },
    ],
    workingPrinciple:
      'Obeng bekerja berdasarkan prinsip torsi (momen puntir). Gaya putar tangan pada gagang yang berdiameter lebih besar diteruskan sepanjang batang logam menuju mata obeng untuk memutar sekrup dengan gaya ungkit yang lebih efektif, sementara lapisan isolator memblokir aliran arus ke tubuh pengguna.',
    characteristics: [
      { label: 'Jenis Mata Utama', value: 'Pipih (Slotted / −) & Kembang (Phillips / +)' },
      { label: 'Ketahanan Isolasi', value: 'Umumnya teruji hingga 1.000 V AC (IEC 60900)' },
      { label: 'Ujung Magnetis', value: 'Sering dilengkapi magnet untuk menahan sekrup kecil' },
      { label: 'Ukuran Umum Listrik', value: 'PH0, PH1, PH2 serta 3.5 mm – 6.5 mm' },
    ],
    safetyNote:
      'Gunakan ukuran mata obeng yang pas dengan alur kepala sekrup agar kepala sekrup tidak aus (dol), serta periksa agar selubung isolator tidak retak atau terkelupas.',
  },
];
