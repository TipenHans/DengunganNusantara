import React, { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';

import tigaFoto1 from "./assets/TigaFoto1.jpg";
import tigaFoto2 from "./assets/TigaFoto2.jpg";
import tigaFoto3 from "./assets/TigaFoto3.jpg";

import ilustrasi1 from "./assets/ilustrasi1.png";
import ilustrasi2 from "./assets/ilustrasi2.png";
import ilustrasi3 from "./assets/ilustrasi3.png";

import maskot1 from "./assets/maskot1.png";
import maskot2 from "./assets/maskot2.png";
import maskot3 from "./assets/maskot3.png";
import maskot4 from "./assets/maskot4.png";

import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import foto4 from "./assets/foto4.jpg";
import foto5 from "./assets/foto5.jpg";
import foto6 from "./assets/foto6.jpg";
import foto7 from "./assets/foto7.jpg";
import foto8 from "./assets/foto8.jpg";
import foto9 from "./assets/foto9.jpg";
import foto10 from "./assets/foto10.jpg";
import foto11 from "./assets/foto11.jpg";
import foto12 from "./assets/foto12.jpg";
import foto13 from "./assets/foto13.jpg";
import foto14 from "./assets/foto14.jpg";
import foto15 from "./assets/foto15.jpg";
import foto16 from "./assets/foto16.jpg";

import sejarah1 from "./assets/sejarah1.jpg";
import sejarah2 from "./assets/sejarah2.jpg";

import zaki from "./assets/gambarZaki.png";

import infografis from "./assets/Infografis Alat Musik Gong.png";

import suaraGong from "./assets/audio gong.mp3"

const Landing = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [scrollAmount, setScrollAmount] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScroll) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [activePopupData, setActivePopupData] = useState(null);

  const sliderImages = [
    {
      src: maskot1,
      nama: "Asep",
      budaya: "Pembuat Gong",
      popupData: {
        judul: "Sang Penjaga Kebudayaan Leluhur: Gong Factory di Bogor",
        konten: [
  
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Terdengar suara gong yang sedang diservis di Gong Factory, Bogor. Bunyi itu terlihat sederhana di mata, tetapi membutuh dua sampai tiga orang untuk membetulkan hanya satu gong. Ini membuktikan bahwa seseorang harus mempunyai ilmu dan keahlian yang tinggi dalam dunia pembuatan gong.  Salah satu orang tersebut adalah Krisna Hidayat. " },
          { type: "teks", value: "Sekilas melihat Gong Factory dari luar, tidak terlihat seperti pabrik pembuatan gong, tetapi sebuah tempat penghunian warga. Memasuki sebuah lorong kecil terdapat sebuah tempat alat musik gong diproduksi dan juga diservis.  Di belakang tempat gong tersebut, terdapat sebuah rumah yang dihuni oleh seseorang yang bernama Krisna Hidayat. Krisna Hidayat merupakan generasi ke-7 pembuat gong di Gong Factory yang terletak di Bogor ini." },
          { type: "gambar", value: foto1, caption: "Pak Krisna sedang melakukan perbaikan alat musik gong (14/05/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "Dengan muka yang tenang, Krisna menceritakan sejarah terbentuknya Gong Factory ini. Secara singkat Gong Factory ini sudah berdiri sejak 1820 dan telah berjalan selama tujuh generasi.  Tempat ini tetap ada sampai sekarang.  Dalam perjalanannya, Gong Factory ini telah mengalami masa naik turun. Krisna mengatakan hal ini karena masa penjajahan Gong Factory telah mengalami masa pasang surut. Tempat ini mulai stabil kembali pada 1970." },
          { type: "teks", value: "Dalam pembuatan gong dan gamelan di Gong Factory diperlukan beberapa bahan baku untuk membuatnya, seperti perunggu, kuningan, dan besi. Di Gong Factory, mereka lebih fokus dalam membuat alat musik gong dan gamelan dari bahan perunggu karena kualitas perunggu yang lebih berkualitas. " },
          { type: "teks", value: "Pria yang pernah bekerja di supermarket ini mengatakan bahwa proses pembuatan alat musik gong itu tidak banyak, tetapi membutuhkan waktu yang cukup lama. Hal pertama yang dilakukan adalah proses peleburan yang merupakan sebuah proses pencampuran antara bahan baku timah putih dan tembaga merah dengan perbandingan 1 berbanding 3, 1 kg timah dicampur dengan 3 kg tembaga merah yang nanti akan menghasilkan 4 kg perunggu. Tahap kedua dalam pembuatan gong adalah penempaan yang dilakukan oleh 4 orang, orang-orang ini menempa perunggu tersebut yang nanti hasil akhirnya akan terbentuk seperti gong. Proses ketiga adalah proses pengilapan yang artinya proses mengupas sisa-sisa pembakaran yang menempel di gong tersebut. Proses yang keempat adalah penyeteman alat musik gong dengan cara diketok.  Terakhir adalah proses pemolesan untuk mengilapkan alat musik gong tersebut. " },
          { type: "teks", value: "Dengan suara yang berat, Krisna mengatakan bahwa pandemi virus Covid-19 merupakan sebuah alasan besar mengapa Gong Factory. Sekarang ini mengalami penurunan pemesanan yang sangat drastis. Krisna mengatakan bahwa bukan hanya Gong Factory saja yang terpengaruh oleh Covid-19, melainkan tempat wisata budaya lain yang ada di Bogor juga mengalami penurunan sejak pandemi tersebut. Gong Factory sekarang memang mengalami sebuah penurunan, tetapi tetap ada saja orang yang bertemu dengan Krisna untuk membetulkan gong mereka yang sudah rusak.  Ini membuktikan bahwa walaupun tempat ini secara bisnis sudah mulai menurun, tetapi kepercayaan dalam keahlian mereka tetap digunakan. " },
          { type: "teks", value: "Gong menurut Krisna merupakan sebuah alat musik yang bukan hanya identik dengan budaya Sunda dan Budaya Jawa, melainkan sudah merupakan sebuah alat musik yang Nusantara. " },
          { type: "teks", value: "“Gong dan gamelan ini sebenarnya sudah bukan alat musik asli orang Sunda orang Jawa, tapi ini sudah nasional gong ini karena apa setiap wilayah di Indonesia ini pasti memakai gong,” kata Krisna dengan senyuman kecil (14/05/2026). " },
          { type: "gambar", value: foto2, caption: "Bonang di rumah Pak Krisna  (14/05/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "Ini membuktikan bahwa gong merupakan sebuah alat musik yang unik karena hampir semua wilayah dan budaya di Nusantara menggunakan gong dalam kegiatan ritual atau kesenian. " },
          { type: "gambar", value: foto3, caption: "Gong di rumah Pak Krisna  (14/05/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "Krisna mengatakan bahwa kebudayaan gamelan dan gong ini harus dilestarikan karena ini merupakan warisan dari leluhur Nusantara. Namun, Krisna juga mengatakan bahwa walaupun ketertarikan anak muda mengenai kesenian gamelan itu ada, semua ini masih jauh dari harapan karena masih sangat kurang anak muda yang ingin mendalami ilmu mengenai kesenian karawitan ujar Krisna dengan muka yang tenang, tetapi dengan suara yang lelah. " },
          { type: "gambar", value: foto4, caption: "Saron di rumah Pak Krisna  (14/05/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "“Gong ini ‘kan warisan leluhur kita yang harus kita lestarikan. Menurut saya, itu sudah seharusnya menjadi motivasi bahwa kita sebagai penerusnya atau generasi muda untuk melestarikan untuk bisa bahkan bukan melestarikan saja, tapi mengembangkan ke arah yang lebih baik dari sebelum-sebelum kita,” pendapat Krisna dengan muka yang tenang, tetapi bertekad (14/05/2026). " },
          { type: "infografis", value: infografis, caption: "Infografis"},
          { type: "youtube", value: "gfz_mmKY41Q" },
          { type: "youtube", value: "nrhvr9JnH80" },
        ]
      }
    },
    {
      src: maskot2,
      nama: "Fiona",
      budaya: "Buddha Theravada",
      popupData: {
        judul: "Berbeda tetapi Tetap Sama: Gong dalam Kebudayaan Buddha Theravada",
        konten: [
          { type: "teks", value: "Tercium aroma wangi yang mengelilingi tempat ibadah, terlihat ornamen-ornamen yang indah ketika masuk ke dalam ruangan ibadah, tempat tersebut adalah Vihara Punna Karya." },
          { type: "gambar", value: foto5, caption: "Altar Dewi Kwan Im (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "Vihara Punna Karya terletak di kecamatan Curug, Kabupaten Tangerang. Di tengah-tengahnya kepadatan Kabupaten Tangerang, Vihara Punna Karya tetap berdiri sebagai tempat ibadahnya umat Buddha yang ada di daerah tersebut." },
          { type: "gambar", value: foto6, caption: "Altar di Vihara Punna Karya (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "Vihara Punna Karya terlihat seperti bangunan yang dari luarnya sudah tua, tetapi  memiliki interior yang dipenuhi dengan altar-altar dan mempunyai suasana yang sangat hangat dan spiritual. Ini bukti bahwa tempat ini adalah tempat yang sangat dirawat dan sering dikunjungi oleh umat Buddha. Salah satu umat tersebut adalah seorang perempuan yang bernama Dessy Chandra." },
          { type: "teks", value: "Dessy Chandra merupakan seorang mahasiswi di Universitas Multimedia Nusantara. Selain mempunyai kesibukan sebagai pelajar di universitas, Dessy merupakan ketua pengurus remaja di Vihara Punna Karya. Dengan senyuman yang penuh dengan kegembiraan dan semangat, Dessy memberikan penjelasan mengenai tempat-tempat yang ada di Vihara Punna Karya, sambil menjelajahi area-area tersebut." },
          { type: "teks", value: "Dalam Vihara Punna Karya ini terlihat berbagai macam ornamen-ornamen indah, seperti patung dewa-dewi, Muk Yi, Hio, dan gong. Di Indonesia sendiri terdapat tiga aliran Buddha utama, yaitu Theravada, Mahayana, dan Tantrayana. Vihara Punna Karya sendiri merupakan Vihara yang lebih mengarah ke aliran Theravada, dalam aliran tersebut gong bukan sebuah alat yang wajib digunakan dalam ibadah Buddha Theravada, tetapi gong tersebut merupakan sebuah alat yang lebih mengarah kepada kebudayaan bukan keagamaan. " },
          { type: "gambar", value: foto7, caption: "Hio (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "gambar", value: foto8, caption: "Muk Yi (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "gambar", value: foto9, caption: "Patung dewa-dewi  (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "Gong dalam Buddha Theravada biasanya digunakan sebagai penanda dalam berbagai hal, seperti penanda datangnya detik-detik Waisak dan penggantian dalam pembacaan sutra atau mantra. Uniknya dalam Vihara ini yang dikatakan sebagai gong itu tidak seperti gong di Nusantara pada umumnya, tetapi dalam Vihara Punna Karya yang dikatakan sebagai gong itu adalah gong yang berbentuk seperti mangkuk. " },
          { type: "teks", value: "Dalam berbagai kebudayaan di Nusantara, alat musik gong biasanya memiliki sebuah ciri khas, yaitu sebuah jendolan yang terdapat di tengah-tengah alat musik gong tersebut. Walaupun berbeda secara bentuk, alat tersebut tetap diakui sebagai gong. " },
          { type: "teks", value: "Gong yang berbentuk seperti mangkuk ini mempunyai mempunyai asal-usul dari negeri Tiongkok yang akhirnya dibawa ke berbagai daerah di Nusantara, seperti di Curug ini. Bukan hanya gong mangkuk, dalam Vihara Punna Karya ini terdapat sebuah alat yang lebih mirip seperti gong pada umumnya yang terdapat di Nusantara, tetapi alat tersebut lebih disebut sebagai tambur dari pada gong. Tambur tersebut juga memiliki fungsi sebagai penanda dalam penggantian pembacaan sutra atau mantra. " },
          { type: "gambar", value: foto10, caption: "Bowl Gong (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "gambar", value: foto11, caption: "Bowl Gong (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "gambar", value: foto12, caption: "Tambur (16/05/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "Vihara Punna Karya ini membuktikan bahwa alat-alat ini yang mempunyai sejarah panjang dan masih digunakan dalam ritual dan kebudayaan Buddha (Theravada). Namun, generasi muda zaman sekarang mungkin masih banyak yang kurang mengerti mengenai sejarah dan makna alat-alat tersebut.  Pernyataan ini sungguh telah mengusung tanya: Apakah generasi muda perlu memahami semua ilmu tersebut?" },
          { type: "teks", value: "“Kita ‘kan generasi muda, sayang banget kalau gak tau tradisi-tradisi yang biasanya dilakuin gitu, menurut aku sayang sih,” sanggah Dessy dengan penuh semangat (26/02/2026). " },
          { type: "teks", value: "Walaupun alat-alat tersebut masih digunakan di Vihara, budaya apa pun kalau tidak jaga akan hilang dari peradaban. Oleh karena itu, generasi muda mempunyai peran yang sangat penting untuk menjaga budaya-budaya yang kita punya di Nusantara ini." },
          { type: "teks", value: "Di tengah-tengah kemajuan teknologi dan pengaruh budaya dari luar, melestarikan budaya dalam negeri bisa menjadi sesuatu hal yang sulit karena tidak sedikit dari generasi muda yang sudah mulai tidak peduli dengan budaya dalam negeri. Walaupun mungkin kadang terlihat suram, tidak sedikit juga generasi muda yang berusaha untuk melestarikan budaya-budaya yang terdapat di dalam negeri." },
          { type: "teks", value: "Dessy dan pengurus remaja Vihara lainnya merupakan contoh bahwa masih ada anak muda yang peduli dan ingin mempelajari mengenai budaya dan tradisi yang ada di dalam Buddha (Theravada). " },
          { type: "teks", value: "“Kalian (anak muda) perlu tau, kalian perlu bersikap apa ya, bersikap penasaran juga terhadap sesuatu karena mungkin dari hal-hal itu kalian bisa dapat perspektif baru dan pengetahuan yang baru,” saran Dessy untuk generasi muda Indonesia (26/02/2026). " },
          { type: "youtube", value: "ICvB6_ohdKA" },
          { type: "youtube", value: "s0Lm6qRlZAo" },
        ]
      }
    },
    {
      src: maskot3,
      nama: "Kadek",
      budaya: "Hindu Bali",
      popupData: {
        judul: " Identitas Seniman Bali: Gong dalam Hindu Bali",
        konten: [
          { type: "teks", value: "“Ting, tang, tung, ting, tang, tung,” terdengar suara siswa dan siswi sedang memainkan ansambel alat musik Gamelan Bali di area pendopo SMA. Bukan hanya anak-anak ekstrakurikuler Gamelan Bali yang terlihat di SMA, terpandang siswa dan siswi SMA Plus Pembangunan Jaya sedang mempersiapkan diri untuk pulang ke rumah masing-masing. Walaupun area sekolah keliatan lebih sepi ketika saatnya pulang, terdengar gembira suara anak-anak yang sedang melakukan kegiatan ekstrakurikuler di area sekolah.  Salah satu kegiatan yang sangat terdengar di lorong sekolah adalah ekstrakurikuler Gamelan Bali. " },
          { type: "teks", value: "Di tengah-tengah anak-anak yang sedang memainkan Gamelan, terlihat  Wayan yang sedang melatih mereka memainkan Gamelan Bali. Muka Wayan terlihat lelah, tetapi dari suaranya terdengar sangat semangat melatih anak-anak dalam memainkan ansambel Gamelan Bali. " },
          { type: "teks", value: "I Wayan Kurnada merupakan seorang pelatih Gamelan Bali yang mengajar anak-anak SMA Plus Pembangunan Jaya dalam memainkan ansambel Gamelan Bali. " },
          { type: "teks", value: "“Kalau seniman di Bali tidak seperti seniman yang lain, kalau seniman lain ‘kan duit, ada duit kerja, kalau Bali tuh kepuasan batin,” komentar  Wayan dengan senyuman yang lebar (09/04/2026). " },
          { type: "teks", value: "Pria yang pernah bekerja di Suku Dinas Kebudayaan Kota Administrasi Jakarta Barat sudah bertahun-tahun menjadi pelatih gamelan Bali di SMA Plus Pembangunan Jaya. Namun, walaupun Wayan terus melatih anak-anak di sekolah tersebut, tidak terdengar ada suara lesu keluar dari ucapan dia. Setiap Kamis setelah waktunya untuk pulang sekolah, Wayan hadir untuk memberi ilmu leluhur terhadap generasi muda negeri ini. " },
          { type: "teks", value: "Dalam kegiatan pelatihan Gamelan Bali di sekolah tersebut, terdapat berbagai alat musik dalam ansambelnya, seperti gendang, ceng-ceng, bonang, kempul, dan gong." },
          { type: "gambar", value: foto13, caption: "Gong Bali (09/04/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "Gong dalam ritual keagamaan Bali digunakan dalam banyak hal, seperti mengiringi seseorang saat sembahyang, tatanan upacara adat, kawinan, dan bahkan saat seseorang sudah meninggal. Tidak hanya digunakan dalam kegiatan-kegiatan yang sakral saja, tetapi gong dalam budaya Bali juga digunakan dalam kegiatan rekreasi. Dalam kegiatan-kegiatan rekreasi gong digunakan dalam berbagai macam festival, seperti dalam Festival Ogoh-ogoh. " },
          { type: "teks", value: "Walaupun gong ini dapat digunakan dalam bermacam-macam kegiatan sakral hingga rekreasi, terdapat sebuah perbedaan dalam pengiringannya. " },
          { type: "gambar", value: foto14, caption: "Kempul Bali (09/04/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "“Fungsinya beda. Di mana tempatnya dan apa kreasinya juga beda, tempat pawai beda, tempat di pura sakral gak boleh main-main, benar-benar mengiringi sakral,” ujar Wayan dengan muka yang serius (09/04/2026)." },
          { type: "teks", value: "Bali sendiri merupakan sebuah tempat yang unik karena Gamelan Bali ini mempunyai peran yang sangat integral dengan kehidupan sehari-hari masyarakat di Bali. Gamelan Bali itu sangat berhubungan dengan kegiatan upacara adat dan oleh karena itu, budaya Gamelan Bali itu harus tetap dilestarikan. " },
          { type: "teks", value: "“Kalau di Bali karena terkait dengan upacara harus ada harus tetap lestari, gak boleh tidak,” ucap Wayan dengan nada bicara yang bertekad (09/04/2026). " },
          { type: "teks", value: "Wayan mengatakan bahwa keunikan seniman dari Bali adalah mengenai kepuasan batin mereka mengenai pelestarian kebudayaan Bali, seniman dari Bali bukan mengejar uang, melainkan kepuasan batin. Muka Wayan terlihat dengan sangat penuh harapan karena dia tau bahwa budaya Bali tidak akan pernah punah. " },
          { type: "youtube", value: "RRSJCj9Pzoo" },
          { type: "youtube", value: "zNrv7U94Ku4" },
          { type: "youtube", value: "OrUS5iWxkSA" },
        ]
      }
    },
    {
      src: maskot4,
      nama: "Ingrid",
      budaya: "Katolik",
      popupData: {
        judul: "Budaya dan Spiritual: Gong dalam Gereja Katolik",
        konten: [
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Teng …" },
          { type: "teks", value: "Terdengar suara yang hening saat gong dipukul, gong ini digunakan saat kegiatan konsekrasi. Dalam agama Katolik, konsekrasi merupakan proses hosti dan anggur diubah menjadi tubuh dan darah Kristus. Setelah proses konsekrasi selesai, hosti akan dibagikan ke umat ketika komuni. Ketika umat memakan roti tersebut, mereka akan menerima tubuh Kristus di dalam dirinya, di sinilah sebuah gong digunakan dalam Gereja Santa Monica." },
          { type: "teks", value: "Di kompleks perumahan area Serpong, Tangerang Selatan, terdapat sebuah bangunan yang memiliki bentuk yang sangat unik. atap bangunan tersebut berbentuk piramida yang sangat mencolok dibandingkan dengan bangunan yang ada di sekelilingnya. Bangunan tersebut dinamakan Gereja Santa Monica. Ketika masuk ke dalam ruang ibadah, jiwa terasa tenang. Di bagian tengah, terdapat patung salib besar menghias. Mozaic kisah alkitab mengelilingi ruangan. " },
          { type: "teks", value: "Di tengah ruangan, ada Ignatia Sara Wahyuputro menunggu. Perempuan yang mempunyai senyuman hangat itu bercerita tentang penggunaan gong di gereja Katolik sambil menunjukkan berbagai area yang ada di gereja tersebut, mulai dari Gua Maria, ruang berdoa, hingga panti umat. " },
          { type: "teks", value: "Mulanya gong merupakan alat tukar atau barter. Namun, tidak berhenti di situ, gong akhirnya mulai menjadi sebuah simbol dalam agama Katolik. " },
          { type: "teks", value: "“Dari memahami sejarah dan juga sisi spiritual gong ini, pasti mereka bisa jadi dalam pemaknaannya,” jelas Sara dengan senyuman yang hangat (28/02/2026)." },
          { type: "teks", value: "Gong dalam gereja Katolik merupakan sebuah bentuk inkulturasi dari berbagai budaya yang akhirnya menciptakan sebuah tradisi baru dalam ritual ibadah agama Katolik, salah satu kegunaan gong adalah dalam Tata Perayaan Ekaristi. " },
          { type: "teks", value: "Perayaan Ekaristi merupakan sebuah acara untuk mengenang tubuh dan darah Kristus. Dalam Perayaan Ekaristi, Ibadah doa dan ucapan syukur kepada Tuhan dipimpin oleh seorang Pastor. Peran misdinar dalam perayaan adalah membantu kelancaran Ekaristinya, seperti mempersiapkan peralatan untuk romo pada saat misa berlangsung, tentunya, salah satu alat yang digunakan dalam Perayaan Ekaristi adalah gong. " },
          { type: "gambar", value: foto15, caption: "Gong dalam Gereja Katolik (28/02/2026). (Dok: Muhammad Zaki) " },
          { type: "teks", value: "Gong dibunyikan sebanyak tiga kali dalam proses konsekrasi untuk menandakan bahwa Tuhan telah hadir.  Bukan hanya itu, gong juga mempunyai kegunaan untuk meningkatkan suasana spiritual saat Perayaan Ekaristi." },
          { type: "gambar", value: foto16, caption: "Lonceng Gereja Katolik (28/02/2026). (Dok: Muhammad Zaki)" },
          { type: "teks", value: "Di mata orang awam gong bisa sering kali dianggap sebagai sebuah alat musik yang sering dipandang sebelah mata. Namun, gong ini mempunyai peran yang sangat istimewa dalam kegiatan keagamaan Katolik. " },
          { type: "teks", value: "“Teng, teng, teng,” walaupun gong ini hanya dibunyikan sebanyak tiga kali, efek dari suara gong tersebut bisa mengubah suasana gereja jadi hening hingga menyentuh banyak hati umat. " },
          { type: "teks", value: "“Sering kali sekarang kita sudah melihat ibadah sebagai formalitas saja, tetapi justru kalau kita misalnya memahami sejarah atau makna-makna spiritual di balik tata perayaan agama kita masing-masing, itu pasti akan meningkatkan pemaknaan dan juga keinginan kita untuk semakin mendekatkan diri kepada Tuhan,” ujar Sara dengan suara yang bertekad (28/02/2026). " },
          { type: "teks", value: "Gong ini bukan hanya sekedar sebuah alat yang digunakan saat acara keagamaan, melainkan juga sebagai pengingat bagi kita bahwa banyak benda yang kita sering temui dalam keseharian kita mempunyai sebuah makna dan filosofi yang lebih dalam. Dengan mempelajari makna dan filosofi dari benda tersebut, kita bisa lebih menghargai acara atau kegiatan yang berasosiasi dengan benda tersebut. " },
          { type: "youtube", value: "0k9WyxoDjnM" },
          { type: "youtube", value: "yz8fs-QHqBg" },
          { type: "youtube", value: "Q2rtnxp9zvA" },

        ]
      }
    }
  ];
  
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, question: "Apa nama lain dari Gong Factory di Bogor?", options: ["Gamelan Factory", "Gong Pancasan", "Pengrajin karawitan", "Sanggar seni gamelan"], correctAnswer: "Gong Pancasan" },
    { id: 2, question: "Tahun berapa Gong Factory Bogor didirikan?", options: ["1945", "1890", "1934", "1820"], correctAnswer: "1820" },
    { id: 3, question: "Gong Factory Bogor lebih fokus membuat alat musik gong dari bahan apa?", options: ["Kayu", "Perunggu", "Baja", "Stainless steel"], correctAnswer: "Perunggu" },
    { id: 4, question: "Apa kegunaan gong dalam Gereja Katolik?", options: ["Sebagai alat musik untuk kegiatan rekreasi", "Alat komunikasi antar gereja", "Menanda konsekrasi", "Sebagai ornamen dalam gereja saja"], correctAnswer: "Menanda konsekrasi" },
    { id: 5, question: "Siapa saja orang-orang yang bisa memainkan gong dalam Gereja Katolik?", options: ["Siapa saja boleh memainkan gong", "Tim dokumentasi gereja", "Petugas dan pelayan gereja yang melayani altar", "Jemaat gereja"], correctAnswer: "Petugas dan pelayan gereja yang melayani altar" },
    { id: 6, question: "Seberapa kali gong Gereja Katolik dimainkan saat proses konsekrasi?", options: ["3 kali", "1 kali", "4 kali", "100 kali"], correctAnswer: "3 kali" },
    { id: 7, question: "Apa salah satu fungsi gong dalam Buddha Theravada?", options: ["Sebagai alat musik untuk kegiatan rekreasi", "Penanda penggantian dalam pembacaan sutra atau mantra", "Sebagai penanda bagi umat untuk pulang dari vihara", "Untuk mengingatkan umat untuk selalu ke vihara"], correctAnswer: "Penanda penggantian dalam pembacaan sutra atau mantra" },
    { id: 8, question: "Apa saja alat-alat musik yang terdapat pada ansambel Gamelan Bali?", options: ["Piano, gong, bedug, biola, trompet", "Melodica, Drum, ceng-ceng, suling, bass", "Organ, gambus, kempul, tifa, kolintang", "Gendang, ceng-ceng, bonang, kempul, gong"], correctAnswer: "Gendang, ceng-ceng, bonang, kempul, gong" },
    { id: 9, question: "Apa contoh fungsi gong dalam kegiatan keagaaman dalam Hindu Bali?", options: ["Mengiringi festival pawai", "Mengiringi tatanan upacara adat", "Mengiringi musik Jawa", "Mengiringi festival musik modern"], correctAnswer: "Mengiringi tatanan upacara adat" },
    { id: 10, question: "Apa contoh fungsi gong Bali dalam kegiatan rekreasi?", options: ["Mengiringi Festival Ogoh-ogoh", "Mengiringi tatanan upacara adat", "Mengiringi seseorang pada saat sembahyang", "Mengiringi acara perkawinan"], correctAnswer: "Mengiringi Festival Ogoh-ogoh" }
  ];

  const handleOptionSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) finalScore += 1;
    });
    setScore(finalScore);
    setShowResult(true);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const bgMusic = new Audio(suaraGong);
    
    bgMusic.loop = false; 

    const maksimalPutar = 5; 
    let jumlahPutarsaatIni = 1;

    const handleAudioEnded = () => {
      if (jumlahPutarsaatIni < maksimalPutar) {
        jumlahPutarsaatIni++;
        bgMusic.play().catch(() => {});
      }
    };

    bgMusic.addEventListener('ended', handleAudioEnded);

    const playMusic = () => {
      bgMusic.play().catch(() => {
        console.log("Autoplay ditahan browser, menunggu klik pengguna.");
      });
    };
    playMusic();

    const handleInteraction = () => {
      bgMusic.play();
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      bgMusic.pause();
      bgMusic.removeEventListener('ended', handleAudioEnded);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    
    <div className="bg-[#BFD4DB] text-[#2F3E4E] font-serif overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} />

      {}
      <section id="section-1" className="w-full flex flex-col">
        <div className="w-full h-screen overflow-hidden">
          <img 
            src={foto15} 
            alt="Hero Gong" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center bg-[#BFD4DB]">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-sm bg-gradient-to-r from-[#2F3E4E] via-[#2F3E4E] to-[#537391] bg-clip-text text-transparent">
            DENGUNGAN NUSANTARA
          </h1>
          
          <p className="text-xl md:text-2xl text-[#4A647A] font-light tracking-[0.3em] uppercase mb-16">
            Budaya Alat Musik Gong yang Terdapat di Nusantara
          </p>

          <button 
            onClick={() => scrollToSection('section-2')}
            className="animate-bounce flex flex-col items-center text-[#2F3E4E] hover:text-[#78A2CC] transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest mb-2 font-sans font-semibold">Scroll Ke Konten</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {}
      <section 
        id="section-2"
        className="relative min-h-screen py-24 bg-fixed bg-center bg-cover"
        style={{
          
          backgroundImage: `linear-gradient(rgba(18, 24, 38, 0.92), rgba(18, 24, 38, 0.92)), url('https://images.unsplash.com/photo-1571244856003-0d53cb059fc5?q=80&w=1600')`
        }}
      >
        <div className="hidden md:block absolute top-[15%] left-[5%] w-40 h-40 md:w-56 md:h-56 z-10 select-none group">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/95 backdrop-blur-sm text-[#14263B] text-xs p-3 rounded-2xl shadow-xl border border-[#96B9D0]/40 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 font-sans font-medium text-center leading-relaxed">
            Halo teman-teman nama aku Gang, penasaran sama sejarah dan budaya gong yang ada di Nusantara? Yuk kita jelajahi artikel ini bersama!
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white/95"></div>
          </div>

          <div className="w-full h-full pointer-events-auto transform -rotate-12 filter drop-shadow-[0_0_15px_rgba(152,150,187,0.3)] transition-transform duration-300 group-hover:scale-105">
            <img src={ilustrasi1} alt="Dekorasi Maskot" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden md:block absolute bottom-[5%] right-[5%] w-40 h-40 md:w-56 md:h-56 z-10 select-none group">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/95 backdrop-blur-sm text-[#14263B] text-xs p-3 rounded-2xl shadow-xl border border-[#96B9D0]/40 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 font-sans font-medium text-center leading-relaxed">
            Halo teman-teman nama aku Ging, penasaran sama sejarah dan budaya gong yang ada di Nusantara? Yuk kita jelajahi artikel ini bersama!
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white/95"></div>
          </div>

          <div className="w-full h-full pointer-events-auto transform rotate-45 filter drop-shadow-[0_0_15px_rgba(152,150,187,0.3)] transition-transform duration-300 group-hover:scale-105">
            <img src={ilustrasi2} alt="Dekorasi Maskot" className="w-full h-full object-contain" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6">
          {}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl border border-[#78A2CC]/50">
              <img 
                src={tigaFoto1} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                alt="Gong 1" 
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl border border-[#78A2CC]/50">
              <img 
                src={tigaFoto2} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                alt="Gong 2" 
              />
            </div>
            <div className="col-span-2 aspect-video overflow-hidden rounded-lg shadow-2xl border border-[#78A2CC]/50">
              <img 
                src={tigaFoto3} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                alt="Gong 3" 
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button onClick={() => scrollToSection('section-3')} className="text-[#78A2CC] hover:text-[#2F3E4E] animate-pulse">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {}
      {}
      <section id="section-3" className="min-h-screen bg-[#AECBD6] relative overflow-hidden py-16">
        <div className="hidden md:block absolute top-[30%] left-[5%] w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0 transform -rotate-12 select-none">
          <img src={ilustrasi3} alt="Dekorasi Maskot" className="w-full h-full object-contain" />
        </div>
        <div className="hidden md:block absolute bottom-[20%] right-[5%] w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0 transform rotate-45 select-none">
          <img src={ilustrasi1} alt="Dekorasi Maskot" className="w-full h-full object-contain" />
        </div>
        
        <div className="max-w-2xl mx-auto px-8">
          {}
          <h2 className="text-4xl font-bold bg-gradient-to-r text-[#78A2CC] bg-clip-text text-transparent mb-12 text-center border-b border-[#78A2CC] pb-4">
            Sejarah Singkat Gong
          </h2>
          
          {}
          <div className="space-y-8 text-[#2F3E4E] text-lg leading-relaxed italic">
            <p className="text-center font-sans tracking-widest text-[#78A2CC]">Gong ... Gong ... Gong ...</p>
            
            <p className="not-italic text-xl text-[#2F3E4E]">
              Suara yang mungkin sudah tidak asing lagi didengar oleh masyarakat Nusantara, dari ujung Sumatera hingga tanah Papua.  Suara ini menyebar di seluruh budaya di Nusantara dalam keperluan ritual, agama, hingga rekreasi. 
            </p>

            <p className="text-center font-sans tracking-widest text-[#78A2CC]">Gong ... Gong ... Gong ...</p>

            <p className="not-italic text-xl text-[#2F3E4E]">
              Ini bukan sekedar suara, tetapi sebuah tanda bahwa di Bumi Nusantara ini terdapat sebuah alat yang sebenarnya adalah sebuah bukti bahwa kita sebagai masyarakat Nusantara mempunyai sebuah kesamaan yang mengingatkan kita bahwa walaupun kita berbeda, tetap saja ada suatu hal yang menyatukan kita semua. 
            </p>

            <p className="not-italic text-[#3F5568]">
              Benda berbentuk bundar itu secara umum merupakan sebuah alat musik yang terbuat dari logam atau perunggu yang dimainkan dengan cara dipukul. Gong secara umum mempunyai bentuk bundar dan dimainkan dengan cara memukul bagian tengah alat musik tersebut. Gong mempunyai beberapa variasi dalam bentuknya. Pada umumnya gong yang kita bisa temukan di seluruh Nusantara mempunyai sebuah jendolan di bagian tengahnya. Ada juga variasi gong yang tidak mempunyai jendolan di tengahnya dan jika mainkan mempunyai suara yang berbeda dibanding dengan gong yang memiliki jendolan tersebut. Terakhir, ada juga gong yang mempunyai bentuk seperti mangkuk (bowl gong) yang biasanya digunakan oleh umat Buddha. 
            </p>

            <p className="not-italic text-[#3F5568]">
              Secara ilmu etnomusikologi gong merupakan alat musik idiophone yang artinya alat musik tersebut mempunyai sumber bunyi yang asalnya dari getaran badannya. 
            </p>

            {}
            <div className="w-full space-y-1.5 py-1">
              <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl border border-[#78A2CC]/60 bg-[#BFD4DB]">
                <img 
                  src={sejarah1}
                  alt="Gong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-[#4A647A] italic text-center font-serif">
                Alat musik gong (14/05/2026). (Dok: Muhammad Zaki) 
              </p>
            </div>

            <p className="not-italic text-[#3F5568]">
              Sebuah hipotesis dari seorang pengamat budaya mengatakan bahwa alat musik gong merupakan sebuah alat yang mempunyai akar sejarah dari Tiongkok. Ia juga mempunyai hipotesis yang mengatakan bahwa gong bisa menyebar ke seluruh Nusantara karena adanya pengaruh dari budaya Kerajaan Majapahit.
            </p>

            <div className="w-full space-y-1.5 py-1">
              <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl border border-[#78A2CC]/60 bg-[#BFD4DB]">
                <img 
                  src={sejarah2}
                  alt="Gong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-[#4A647A] italic text-center font-serif">
                Perbaikan alat musik gong (14/05/2026). (Dok: Muhammad Zaki) 
              </p>
            </div>

            <p className="not-italic text-[#3F5568]">
              Walaupun merupakan alat musik yang terkesan terlihat sederhana, alat musik ini tidak boleh secara sembarang dimainkan. Dalam seni karawitan, alat musik gong itu mempunyai fungsi untuk memadai. Gong itu dianggap yang paling mudah untuk dimainkan karena dalam seni tersebut hanya dimainkan dengan memukul sekali. Biasanya jika seseorang ingin mempelajari gamelan dari awal-awal mereka harus memainkan gong terlebih dahulu. Namun, walaupun gong itu dianggap paling mudah untuk dimainkan, dalam sajian kesenian karawitan seseorang tidak boleh sembarangan dalam memainkan gong, ini membuktikan bahwa gong memiliki peran yang penting dalam berbagai budaya yang ada di Nusantara. 
            </p>
          </div>
        </div>
      </section>

          {}
      {}
      <section id="section-4" className="min-h-screen bg-[#BFD4DB] flex flex-col justify-center items-center py-12 relative border-t border-[#78A2CC]/20">
        <div className="relative w-full max-w-3xl px-4 flex flex-col items-center gap-8">
          
          {sliderImages.length > 0 && (
            <div className="w-full max-w-xs flex flex-col items-center">
                  <div className="text-center w-full mb-3">
                    <h4 className="text-[#14263B] font-sans text-sm tracking-widest font-semibold uppercase">
                      Asep
                    </h4>
                  </div>
              <div 
                onClick={() => setActivePopupData(sliderImages[0])}
                className="h-full w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-[#A4C3D2]/20 cursor-pointer hover:border-[#78A2CC] hover:shadow-[0_0_25px_rgba(120,162,204,0.3)] transition-all group relative"
              >
                <div className="absolute inset-0 bg-[#BFD4DB]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="text-[#14263B] text-xs tracking-widest font-sans uppercase bg-[#AECBD6]/90 px-4 py-2 rounded-full border border-[#78A2CC]/40">
                    Klik Detail
                  </span>
                </div>
                <img 
                  src={sliderImages[0].src} 
                  alt="Pembuat Gong" 
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-center w-full mt-3">
                <p className="text-[#14263B] font-serif text-sm italic tracking-wide">
                  {sliderImages[0].budaya}
                </p>
              </div>
            </div>
          )}

          <div className="w-24 h-[2px] bg-[#78A2CC]/30 rounded-full md:block hidden"></div>

          <div id="apa-kata-mereka" className="w-full flex flex-col items-center">
            <div 
              ref={sliderRef}
              className="flex md:grid md:grid-cols-3 w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-6 gap-0 md:gap-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sliderImages.slice(1).map((item, index) => (
                <div key={index} className="flex-none w-full md:w-full snap-center px-4 md:px-0 flex flex-col items-center justify-between">
                  
                  <div className="text-center w-full mb-3">
                    <h4 className="text-[#14263B] font-sans text-sm tracking-widest font-semibold uppercase">
                      {item.nama}
                    </h4>
                  </div>

                  <div 
                    onClick={() => setActivePopupData(item)}
                    className="h-full w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-[#A4C3D2]/20 cursor-pointer hover:border-[#78A2CC] hover:shadow-[0_0_25px_rgba(120,162,204,0.3)] transition-all group relative"
                  >
                    <div className="absolute inset-0 bg-[#BFD4DB]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <span className="text-[#14263B] text-xs tracking-widest font-sans uppercase bg-[#AECBD6]/90 px-4 py-2 rounded-full border border-[#78A2CC]/40">
                        Klik Detail
                      </span>
                    </div>
                    <img 
                      src={item.src} 
                      alt={item.nama} 
                      className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-center w-full mt-3">
                    <p className="text-[#14263B] font-serif text-sm italic tracking-wide">
                      {item.budaya}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            <div className="flex md:hidden items-center space-x-6 mt-6">
              <button 
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
                  }
                }}
                className="p-3 rounded-full bg-[#AECBD6] border border-[#78A2CC]/30 text-[#14263B] hover:text-[#BFD4DB] active:scale-95 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span className="text-[#14263B] font-sans text-sm tracking-widest">Geser / Klik</span>

              <button 
                onClick={() => {
                  if (sliderRef.current) {
                    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
                    if (sliderRef.current.scrollLeft >= maxScroll - 10) {
                      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
                    }
                  }
                }}
                className="p-3 rounded-full bg-[#AECBD6] border border-[#78A2CC]/30 text-[#14263B] hover:text-[#BFD4DB] active:scale-95 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="section-5" className="min-h-screen bg-[#AECBD6] flex flex-col justify-center items-center py-24 px-4 border-t border-[#78A2CC]/20">
        
        {}
        {!quizActive && !showResult && (
          <div className="max-w-md w-full bg-[#BFD4DB]/80 backdrop-blur-md border border-[#A4C3D2]/20 p-8 rounded-3xl shadow-2xl text-center animate-fade-in">
            {}
            <div className="w-16 h-16 bg-[#78A2CC]/10 border border-[#14263B]/30 text-[#14263B] flex items-center justify-center rounded-full mx-auto mb-6 text-2xl font-bold font-sans">
              ?
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#14263B] to-[#18314A] bg-clip-text text-transparent mb-2 tracking-wider">
              ASAH WAWASAN
            </h2>
            <p className="text-[#14263B] font-sans text-xs tracking-[0.2em] uppercase mb-6">
              Uji Pengetahuan Gong Nusantara
            </p>
            <div className="w-full h-px bg-[#A4C3D2]/20 mb-6"></div>
            <p className="text-[#14263B] font-sans text-sm leading-relaxed mb-8">
              Apakah kamu sudah menyimak sejarah singkat di atas dengan baik? Mari uji ingatanmu melalui 10 pertanyaan seru seputar budaya gong.
            </p>
            
            {}
            <button 
              onClick={() => setQuizActive(true)}
              className="w-full px-6 py-4 bg-[#78A2CC] hover:bg-[#88AED0] text-[#14263B] font-sans uppercase text-xs tracking-widest rounded-full transition-all font-bold shadow-lg shadow-[#78A2CC]/20 active:scale-98"
            >
              🚀 Ayo Mulai Quiz!
            </button>
          </div>
        )}

        {}
        {quizActive && !showResult && (
          <div className="max-w-xl w-full bg-[#BFD4DB]/60 backdrop-blur-md border border-[#A4C3D2]/20 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col">
            
            <div className="flex justify-between items-center mb-4 font-sans text-xs tracking-wider text-[#96B9D0]">
              <span className="text-[#14263B] font-bold uppercase tracking-widest">Kuis Berjalan</span>
              <span>SOAL {currentQuestionIndex + 1} / {questions.length}</span>
            </div>
            
            {}
            <div className="w-full h-1 bg-[#AECBD6] rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-[#14263B] transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className="min-h-[80px] mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-[#14263B] leading-snug">
                {questions[currentQuestionIndex].question}
              </h2>
            </div>

            {}
            <div className="space-y-3 mb-8 font-sans">
              {questions[currentQuestionIndex].options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === option;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 flex items-center justify-between group
                      ${isSelected 
                        ? 'bg-[#78A2CC]/10 border-[#78A2CC] text-[#14263B] font-semibold' 
                        : 'bg-[#AECBD6]/40 border-[#A4C3D2]/10 text-[#14263B] hover:border-[#88AED0] hover:text-[#14263B]'
                      }`}
                  >
                    <span>{option}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                      ${isSelected ? 'border-[#78A2CC] bg-[#78A2CC]' : 'border-[#A4C3D2]/30'}`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 bg-[#BFD4DB] rounded-full"></div>}
                    </div>
                  </button>
                );
              })}
            </div>

            {}
            <div className="flex items-center justify-between font-sans border-t border-[#A4C3D2]/20 pt-6">
              <button
                onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest flex items-center space-x-1 ${currentQuestionIndex === 0 ? 'text-[#14263B]/20 cursor-not-allowed' : 'text-[#14263B] bg-[#AECBD6]'}`}
              >
                <span>Sebelumnya</span>
              </button>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() => selectedAnswers[currentQuestionIndex] && setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  disabled={!selectedAnswers[currentQuestionIndex]}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest flex items-center space-x-1 font-bold ${selectedAnswers[currentQuestionIndex] ? 'bg-[#78A2CC] text-[#14263B]' : 'bg-[#AECBD6] text-[#14263B]/30 cursor-not-allowed'}`}
                >
                  <span>Lanjut</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(selectedAnswers).length < questions.length}
                  className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold ${Object.keys(selectedAnswers).length === questions.length ? 'bg-[#88AED0] text-[#BFD4DB] hover:bg-[#78A2CC]' : 'bg-[#AECBD6] text-[#14263B]/30 cursor-not-allowed'}`}
                >
                  Kirim Jawaban
                </button>
              )}
            </div>
          </div>
        )}

        {}
        {showResult && (
          <div className="max-w-2xl w-full bg-[#BFD4DB]/80 backdrop-blur-md border border-[#A4C3D2]/20 p-6 md:p-8 rounded-3xl shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#14263B] to-[#78A2CC] bg-clip-text text-transparent mb-1">HASIL EVALUASI</h2>
              <div className="inline-flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-[#78A2CC]/20 bg-[#AECBD6] my-4">
                <span className="text-4xl font-bold text-[#14263B] font-sans">{score * 10}</span>
                <span className="text-[10px] text-[#14263B] font-sans tracking-wider uppercase">Skor</span>
              </div>
              <p className="text-[#14263B]">
                Benar <span className="text-[#14263B] font-bold font-sans">{score}</span> dari <span className="font-sans text-[#14263B]">{questions.length}</span> soal
              </p>
            </div>

            {}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2 mb-6 border border-[#A4C3D2]/20 p-4 rounded-xl bg-[#AECBD6]/40 font-sans no-scrollbar">
              {questions.map((q, index) => {
                const isCorrect = selectedAnswers[index] === q.correctAnswer;
                return (
                  <div key={index} className="p-3 rounded-lg bg-[#BFD4DB]/50 border border-[#A4C3D2]/10 text-xs">
                    <p className="font-serif text-sm text-[#14263B] mb-1">{q.id}. {q.question}</p>
                    <p className={isCorrect ? 'text-[#14263B]' : 'text-[#14263B]'}>
                      Jawaban Anda: {selectedAnswers[index]} {isCorrect ? '✓' : '✗'}
                    </p>
                    {!isCorrect && <p className="text-[#14263B]">Kunci: {q.correctAnswer}</p>}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
                setShowResult(false);
                setScore(0);
                setQuizActive(true); 
              }}
              className="w-full px-6 py-3 bg-[#78A2CC] hover:bg-[#88AED0] text-[#14263B] font-sans uppercase text-xs tracking-widest rounded-full transition-all font-bold text-center"
            >
              Coba Ulang Kuis
            </button>
          </div>
        )}
      </section>
      
      {}
      {}
      <section id="section-6" className="min-h-screen bg-[#BFD4DB] text-[#14263B] flex flex-col justify-center items-center py-24 px-4 border-t border-[#78A2CC]/20 relative overflow-hidden">
        
        {}
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#78A2CC]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#A4C3D2]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl w-full flex flex-col items-center">          
          {}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#14263B] text-center mb-12 tracking-wide leading-tight">
            Pentingnya Gong untuk Dilestarikan
          </h2>

          {}
          <div className="space-y-6 text-[#14263B] font-sans text-base leading-relaxed text-justify">
            
            <p>
              Walaupun di mata orang awam ini hanya sekadar sebuah alat yang digunakan dalam kegiatan-kegiatan tertentu, 
              gong ini merupakan sebuah pengingat bagi kita semua bahwa sesuatu yang terlihat sederhana justru mempunyai 
              sebuah makna yang dalam dan sejarah yang panjang.
            </p>

            {}
            <blockquote className="border-l-4 border-[#78A2CC] bg-[#AECBD6]/60 p-5 rounded-r-2xl my-8 font-serif italic text-[#14263B] text-base relative">
              <span className="absolute -top-4 -left-2 text-6xl text-[#14263B]/10 font-serif font-bold select-none">“</span>
              “Di sini ada satu hal yang menarik buat saya gong itu perannya tuh kalau dilihat sedikit ya cuma ‘gong, gong’ 
              gitu doang, tapi kenapa sangat dibutuhkan dan selalu ada di apapun. Nah ini menurut saya menjadi menarik ya, 
              kenapa karena saya pikir mungkin ya tadi gong itu tidak hanya sebagai material,”
              <cite className="block font-sans not-italic text-xs text-[#14263B] mt-3 tracking-wider uppercase font-semibold">
                — Pak Teddy Hendiawan (Dosen Film & Pengamat Budaya UMN, 07/04/2026)
              </cite>
            </blockquote>

            <p>
              Banyak orang yang berpikir kenapa kita harus peduli dengan gong. Mungkin untuk sebagian besar masyarakat 
              di Nusantara, gong hanya sebuah alat musik “kuno” yang hanya digunakan dalam bermain gamelan. Namun, liputan 
              ini membuktikan bahwa gong merupakan sebuah alat musik yang telah menyebar ke berbagai daerah di Nusantara 
              dan digunakan oleh beragam budaya serta kepercayaan yang ada.
            </p>

            <p>
              Dalam setiap budaya di Nusantara, gong digunakan dalam berbagai macam hal, seperti kegiatan ritual keagamaan, 
              as a means of rekreasi, alat komunikasi, and masih banyak lagi. Sebuah alat musik yang pada pandangan pertama 
              hanya terlihat sebagai logam berbentuk bundar, rupanya mempunyai fungsi yang sangat kaya dan digunakan secara luas di Nusantara.
            </p>

            <p>
              Gong juga merupakan pengingat bagi kita semua bahwa sebuah alat atau benda dari suatu budaya yang kelihatannya 
              “biasa-biasa saja” justru mempunyai sebuah kegunaan dan makna yang lebih dalam. Ini adalah sebuah pengingat bahwa 
              kita tinggal di negara yang mempunyai banyak sekali budaya yang mungkin di mata orang terlihat lumrah. Tetapi jika kita 
              gali lebih dalam lagi makna dan sejarahnya, kita mungkin akan terkejut bahwa benda tersebut menyimpan nilai atau ilmu-ilmu 
              yang tidak bisa kita jumpai di tempat lain.
            </p>

            <p>
              Kita sebagai generasi penerus bangsa harus mempunyai pemikiran bahwa sesuatu benda dalam sebuah budaya atau adat tertentu 
              pasti mempunyai sebuah makna yang lebih mendalam. Dengan menjaga pemikiran ini, kita sebagai generasi muda dapat 
              melihat budaya-budaya yang ada di Nusantara dengan perspektif yang lebih luas.
            </p>

            <p>
              Generasi muda Indonesia mempunyai sebuah tanggung jawab untuk melestarikan budaya-budaya yang terdapat di negeri ini. 
              Di era yang terus berkembang ini, anak-anak muda dapat menggunakan ilmu-ilmu modern mereka untuk mengembangkan 
              budaya di Nusantara, agar ilmu-ilmu leluhur kita akan tetap dilestarikan sampai bumi menutup mata.
            </p>

            {}
            <blockquote className="border-l-4 border-[#88AED0] bg-[#AECBD6]/60 p-5 rounded-r-2xl my-8 font-serif italic text-[#14263B] text-base relative">
              <span className="absolute -top-4 -left-2 text-6xl text-[#14263B]/10 font-serif font-bold select-none">“</span>
              “Kita harus kembali ke akar tradisi apa, biar tahu kita tuh dari mana, nah agar kita bisa bertahan, kita tentu 
              harus melakukan tadi reinterpretasi ulang, gitu jangan takut, karena budaya itu dinamis,”
              <cite className="block font-sans not-italic text-xs text-[#14263B] mt-3 tracking-wider uppercase font-semibold">
                — Pak Teddy Hendiawan (Dosen Film & Pengamat Budaya UMN, 07/04/2026)
              </cite>
            </blockquote>

          </div>

          <div className="w-full h-px bg-[#A4C3D2]/20 my-12" />
          
          {}
          <div className="text-center space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl tracking-[0.3em] bg-gradient-to-r from-[#14263B] via-[#14263B] to-[#78A2CC] bg-clip-text text-transparent font-bold uppercase animate-pulse">
              Gong  … Gong … Gong …  Gong
            </h3>
            <p className="font-sans text-sm text-[#14263B] max-w-md mx-auto leading-relaxed tracking-wide">
              Gong sudah digaungkan. Saatnya anak bangsa untuk mengambil bagian sebagai pelestari budaya Bumi Nusantara.
            </p>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#A4C3D2]/20 bg-[#BFD4DB] shadow-inner">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/pmEiNRfIRYw`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
               ></iframe>
            </div>
          </div>
        </div>
      </section>


      {}
      {}
      <section id="section-7" className="min-h-screen bg-[#AECBD6] text-[#14263B] flex flex-col justify-center items-center py-24 px-4 border-t border-[#78A2CC]/20 relative overflow-hidden">
        
        <div className="max-w-3xl w-full flex flex-col items-center">
          
          {}
          <div className="w-full h-[55vh] md:h-[60vh] overflow-hidden rounded-2xl border-4 border-[#A4C3D2]/30 shadow-2xl bg-[#BFD4DB] mb-4">
            <img 
              src={foto1}
              alt="Pak Krisna memperbaiki gong" 
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          {}
          <div className="text-center w-full max-w-2xl px-4 mb-20">
            <p className="text-sm md:text-base text-[#14263B] font-serif italic tracking-wide leading-relaxed">
              Pak Krisna sedang melakukan perbaikan alat musik gong (14/05/2026). (Dok: Muhammad Zaki)
            </p>
          </div>

          {}
          <div className="text-center w-full py-6 border-y border-[#A4C3D2]/20 bg-[#BFD4DB]/40 backdrop-blur-sm rounded-3xl">
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.2em] text-[#14263B] font-bold uppercase animate-pulse">
              “Gong…… Gong ……… Gong ……..”
            </h3>
          </div>
          
        </div>
      </section>

    <section id="section-8" className="bg-[#BFD4DB] py-20 px-4 border-t border-[#78A2CC]/20 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="flex flex-col items-center space-y-4 group">
        <a 
          href="/biografi"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center"
        >
          <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full border-2 border-[#A4C3D2]/30 bg-[#AECBD6]/50 p-2 shadow-xl group-hover:border-[#78A2CC] transition-all duration-300 group-hover:scale-105 group-active:scale-95 group-hover:shadow-[0_0_20px_rgba(120,162,204,0.2)]">
            <img 
              src={zaki}
              alt="Mini Zaki" 
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
          <span className="mt-4 px-4 py-1.5 bg-[#AECBD6] border border-[#A4C3D2]/20 text-[#14263B] group-hover:text-[#14263B] group-hover:border-[#78A2CC]/40 text-[11px] uppercase tracking-widest font-sans font-bold rounded-full transition-all duration-300 shadow-md animate-bounce group-hover:animate-none">
            👉 Klik Aku
          </span>
        </a>
      </div>
      <div className="mt-16 text-[10px] text-[#14263B]/40 font-sans tracking-widest uppercase">
        © 2026 Dengungan Nusantara. All Rights Reserved.
      </div>
    </section>


    {}
    {}
    {}
    {activePopupData && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {}
        <div 
          onClick={() => setActivePopupData(null)}
          className="absolute inset-0 bg-[#BFD4DB]/90 backdrop-blur-sm transition-opacity duration-300"
        />
        
        {}
        <div className="relative w-full max-w-xl bg-[#AECBD6] border border-[#A4C3D2]/20 p-6 md:p-8 rounded-3xl shadow-2xl z-10 max-h-[85vh] overflow-y-auto no-scrollbar font-sans text-left">
          
          {}
          <button 
            onClick={() => setActivePopupData(null)}
            className="absolute top-4 right-4 text-[#14263B] hover:text-[#14263B] p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {}
          <div className="text-center mb-4">
            <span className="text-[#78A2CC] text-xs tracking-[0.2em] uppercase font-bold">
              {activePopupData.budaya}
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#14263B] mt-1">
              {activePopupData.popupData.judul}
            </h3>
          </div>
          <div className="w-full h-px bg-[#A4C3D2]/10 mb-6"></div>
          
          {}
          <div className="space-y-5">
            {activePopupData.popupData.konten.map((item, index) => {
              
              if (item.type === "teks") {
                return (
                  <p key={index} className="text-[#14263B] text-sm leading-relaxed text-justify font-sans">
                    {item.value}
                  </p>
                );
              }
              
              if (item.type === "gambar") {
                return (
                  <div key={index} className="w-full space-y-1.5 py-1">
                    <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl border border-[#A4C3D2]/20 bg-[#BFD4DB]">
                      <img 
                        src={item.value} 
                        alt={item.caption || "Detail"} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-[11px] text-[#14263B] italic text-center font-serif">
                        {item.caption}
                      </p>
                    )}
                  </div>
                );
              }
              
              if (item.type === "infografis") {
                return (
                  <div key={index} className="w-full space-y-2 py-2">
                    <div className="w-full overflow-hidden rounded-2xl border border-[#A4C3D2]/20 bg-[#BFD4DB] shadow-inner">
                      <img 
                        src={item.value} 
                        alt={item.caption || "Infografis Full"} 
                        className="w-full h-auto object-contain block mx-auto"
                        loading="lazy"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-[11px] text-[#14263B] italic text-center font-serif">
                        {item.caption}
                      </p>
                    )}
                  </div>
                );
              }
              
              if (item.type === "youtube") {
                return (
                  <div key={index} className="w-full py-2">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#A4C3D2]/20 bg-[#BFD4DB] shadow-inner">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${item.value}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setActivePopupData(null)}
              className="px-8 py-2 bg-[#BFD4DB] hover:bg-[#78A2CC] text-[#14263B] hover:text-[#BFD4DB] text-xs uppercase tracking-widest rounded-full transition-all border border-[#78A2CC]/30 font-semibold"
            >
              Tutup
            </button>
          </div>
          
        </div>
      </div>
    )}
  </div>
);
};

export default Landing;