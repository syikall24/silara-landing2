"use client";

import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  X, 
  Info, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  CheckCircle2,
  FileText,
  ListOrdered,
  Facebook,
  Globe,
  Instagram,
  Scale
} from 'lucide-react';

// --- DATA MOCKUP ---
const categories = ['Semua', 'Perkara', 'Perkawinan', 'Perceraian', 'Kewarisan', 'Lainnya'];

const servicesData = [
  {
    id: 1,
    title: 'Pos Bantuan Hukum (Posbakum)',
    category: 'Lainnya',
    shortDesc: 'Layanan bantuan hukum di PTSP Pengadilan Agama Kuala Tungkal. Petugas Posbakum...',
    fullDesc: 'Layanan bantuan hukum di PTSP Pengadilan Agama Kuala Tungkal. Petugas Posbakum membantu para pihak dalam pembuatan surat gugatan atau permohonan secara GRATIS. Jam Pelayanan: Senin-Jumat 08.00-16.00 (Istirahat: 12.00-14.00).',
    requirements: [
      'Membawa berkas persyaratan yang lengkap sesuai dengan perkara yang akan diajukan',
      'Membawa KTP asli / Surat Keterangan',
      'Membawa Fotokopi KTP dan KK',
      'Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan/Desa (Khusus layanan Prodeo)'
    ],
    procedures: [
      'Mengambil nomor antrean layanan Posbakum di mesin antrean PTSP',
      'Menunggu panggilan sesuai nomor antrean',
      'Konsultasi dan pembuatan draf gugatan/permohonan oleh petugas',
      'Pemeriksaan kembali (Review) draf oleh pihak yang bersangkutan',
      'Pencetakan (Printing) surat gugatan/permohonan yang telah selesai',
      'Penandatanganan dokumen oleh pihak dan penyerahan ke Meja Pendaftaran'
    ]
  },
  {
    id: 2,
    title: 'Cerai Gugat / Talak',
    category: 'Perceraian',
    shortDesc: 'Prosedur pengajuan cerai baik oleh istri (Gugat) maupun suami (Talak).',
    fullDesc: 'Prosedur pengajuan cerai baik oleh istri (Gugat) maupun suami (Talak).',
    requirements: [
      'KTP / Surat keterangan domisili asli dan fotocopy',
      'Buku nikah asli dan fotocopy dilegalisir di kantor pos',
      'Alamat lengkap suami/istri',
      'Surat izin atasan jika PNS/POLRI/TNI/P3K',
      'Email dan nomor whatsapp yang aktif',
      'Surat Gugatan/Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Fotocopy menggunakan ukuran kertas A4'
    ],
    procedures: [
      'Pendaftaran perkara di Meja 1 / E-Court',
      'Pembayaran Panjar Biaya Perkara',
      'Pemanggilan para pihak oleh Jurusita',
      'Proses Mediasi',
      'Persidangan',
      'Putusan Pengadilan'
    ]
  },
  {
    id: 3,
    title: 'Dispensasi Kawin',
    category: 'Perkawinan',
    shortDesc: 'Permohonan bagi calon mempelai yang usianya di bawah batas minimal pernikahan.',
    fullDesc: 'Permohonan bagi calon mempelai yang usianya di bawah batas minimal pernikahan.',
    requirements: [
      'KTP / Surat domisili asli kedua orang tua calon pengantin yang di bawah umur',
      'KTP / surat domisili asli kedua calon pengantin',
      'KK kedua calon pengantin',
      'Akta kelahiran kedua calon pengantin',
      'Ijazah terakhir kedua calon pengantin',
      'Surat keterangan penolakan dari KUA',
      'Asesmen psikolog',
      'Pemeriksaan kesehatan lengkap dan/atau kesiapan organ reproduksi dari Puskesmas/RSUD',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–8 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Pemeriksaan identitas dan alasan mendesak',
      'Persidangan dengan menghadirkan calon mempelai dan orang tua',
      'Penetapan Hakim'
    ]
  },
  {
    id: 4,
    title: 'Isbat Nikah',
    category: 'Perkawinan',
    shortDesc: 'Pengesahan pernikahan yang sudah terjadi namun belum tercatat secara resmi.',
    fullDesc: 'Pengesahan pernikahan yang sudah terjadi namun belum tercatat secara resmi.',
    requirements: [
      'KTP asli and fotocopy kedua pemohon',
      'KK asli kedua pemohon',
      'Fotocopy akta cerai bagi pemohon berstatus duda atau janda',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–3 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Pemeriksaan saksi-saksi',
      'Sidang pembuktian',
      'Penetapan pengesahan'
    ]
  },
  {
    id: 5,
    title: 'Isbat Nikah - Cerai Gugat/Talak',
    category: 'Perceraian',
    shortDesc: 'Pengesahan nikah sekaligus pengajuan perceraian dalam satu perkara.',
    fullDesc: 'Pengesahan nikah sekaligus pengajuan perceraian dalam satu perkara.',
    requirements: [
      'KTP asli and fotocopy Penggugat/Pemohon',
      'KK asli Penggugat/Pemohon',
      'Fotocopy KTP atau KK Tergugat/Termohon',
      'Fotocopy akta cerai bagi Penggugat/Pemohon berstatus duda atau janda',
      'Email dan whatsapp yang aktif',
      'Surat Gugatan/Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–4 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Pemeriksaan saksi untuk pernikahan',
      'Pemeriksaan alasan perceraian',
      'Putusan / Penetapan'
    ]
  },
  {
    id: 6,
    title: 'Penetapan Asal Usul Anak',
    category: 'Lainnya',
    shortDesc: 'Permohonan untuk menetapkan status hukum anak terhadap orang tuanya.',
    fullDesc: 'Permohonan untuk menetapkan status hukum anak terhadap orang tuanya.',
    requirements: [
      'Buku nikah asli',
      'KK asli',
      'Akta kelahiran anak / Surat keterangan lahir asli',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–3 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Persidangan',
      'Pemeriksaan saksi',
      'Penetapan hakim'
    ]
  },
  {
    id: 7,
    title: 'Penetapan Ahli Waris',
    category: 'Kewarisan',
    shortDesc: 'Permohonan untuk menetapkan siapa saja yang menjadi ahli waris dari pewaris yang meninggal dunia.',
    fullDesc: 'Permohonan untuk menetapkan siapa saja yang menjadi ahli waris dari pewaris yang meninggal dunia.',
    requirements: [
      'KTP asli',
      'KK asli',
      'Akta kelahiran seluruh anak almarhum',
      'Buku nikah almarhum',
      'Surat keterangan kematian almarhum',
      'Surat keterangan kematian orang tua almarhum jika sudah meninggal',
      'Surat keterangan ahli waris dari desa/kelurahan',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–7 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Persidangan',
      'Pemeriksaan bukti silsilah',
      'Penetapan ahli waris'
    ]
  },
  {
    id: 8,
    title: 'Penetapan Wali Adhol',
    category: 'Perkawinan',
    shortDesc: 'Permohonan penggantian wali nikah karena wali nasab enggan atau menolak menikahkan.',
    fullDesc: 'Permohonan penggantian wali nikah karena wali nasab enggan atau menolak menikahkan.',
    requirements: [
      'KTP / Surat Keterangan Domisili asli',
      'Buku nikah orang tua',
      'KK pemohon',
      'Surat keterangan penolakan dari KUA',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–4 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Persidangan',
      'Upaya mediasi wali nasab oleh hakim',
      'Penetapan wali hakim'
    ]
  },
  {
    id: 9,
    title: 'Hak Asuh Anak',
    category: 'Perceraian',
    shortDesc: 'Pengajuan hak pemeliharaan anak pasca perceraian.',
    fullDesc: 'Pengajuan hak pemeliharaan anak pasca perceraian.',
    requirements: [
      'Fotocopy KTP / Surat keterangan domisili',
      'Fotocopy akta cerai',
      'Fotocopy akta kelahiran anak',
      'Alamat lengkap mantan suami/istri',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–3 dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Persidangan',
      'Pemeriksaan kelayakan pengasuhan',
      'Putusan hak asuh'
    ]
  },
  {
    id: 10,
    title: 'Perwalian oleh Orang Tua',
    category: 'Lainnya',
    shortDesc: 'Pengajuan perwalian oleh salah satu orang tua karena alasan tertentu (misalnya pasangan meninggal).',
    fullDesc: 'Pengajuan perwalian oleh salah satu orang tua karena alasan tertentu (misalnya pasangan meninggal).',
    requirements: [
      'KTP / Surat keterangan domisili asli pemohon',
      'KK pemohon',
      'Buku nikah pemohon',
      'Akta kelahiran anak',
      'Akta kematian orang tua anak yang meninggal',
      'Surat obyek yang membutuhkan perwalian',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–6 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Pemeriksaan saksi',
      'Sidang penetapan',
      'Penetapan perwalian'
    ]
  },
  {
    id: 11,
    title: 'Pengangkatan Anak (Adopsi)',
    category: 'Lainnya',
    shortDesc: 'Prosedur pengangkatan anak secara sah menurut hukum.',
    fullDesc: 'Prosedur pengangkatan anak secara sah menurut hukum.',
    requirements: [
      'KTP dan KK Calon Orang Tua Angkat',
      'Fotocopy Akta Kelahiran & Buku Nikah Calon Orang Tua Angkat',
      'Surat Keterangan Sehat & Kesehatan Jiwa dari RS Pemerintah',
      'SKCK Setempat',
      'Fotocopy KK & Buku Nikah Orang Tua Kandung',
      'Fotocopy Akta Kelahiran Anak',
      'Rekomendasi Instansi Sosial & Izin Pengangkatan Anak',
      'Surat Izin Orang Tua Kandung bermeterai',
      'Surat Keterangan Tidak Mampu/Meninggal Dunia (jika perlu)',
      'Surat Keterangan Penghasilan & Pernyataan kepentingan terbaik anak bermeterai',
      'Kronologis anak & Jaminan keabsahan dokumen bermeterai',
      'Email dan whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Fotocopy menggunakan ukuran kertas A4'
    ],
    procedures: [
      'Pendaftaran',
      'Home visit oleh Pekerja Sosial',
      'Sidang pembuktian',
      'Penetapan Adopsi'
    ]
  },
  {
    id: 12,
    title: 'Izin Poligami',
    category: 'Perkawinan',
    shortDesc: 'Pengajuan izin bagi suami untuk beristri lebih dari satu orang.',
    fullDesc: 'Pengajuan izin bagi suami untuk beristri lebih dari satu orang.',
    requirements: [
      'KTP Pemohon, Isteri Pertama & Calon Isteri',
      'KK Pemohon & Buku Nikah',
      'Surat Izin Atasan jika PNS/POLRI/TNI',
      'Surat Keterangan Status Calon Isteri & Penghasilan dari Desa',
      'Surat Pernyataan Sanggup Berlaku Adil bermeterai',
      'Surat Pernyataan Tidak Keberatan Dimadu dari Isteri Pertama',
      'Surat Pernyataan Siap menjadi Isteri Kedua',
      'Surat Keterangan Harta Bersama dengan Isteri Pertama',
      'Surat Pernyataan Calon Isteri tidak akan mengganggu harta bersama',
      'Email dan Whatsapp yang aktif',
      'Surat Permohonan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1–11 difotocopy dan dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Sidang pemeriksaan kemampuan finansial',
      'Pemeriksaan persetujuan isteri pertama',
      'Putusan Izin Poligami'
    ]
  },
  {
    id: 13,
    title: 'Gugatan Waris',
    category: 'Kewarisan',
    shortDesc: 'Sengketa pembagian harta warisan di antara para ahli waris.',
    fullDesc: 'Sengketa pembagian harta warisan di antara para ahli waris.',
    requirements: [
      'KTP / Surat Keterangan Domisili Asli Penggugat',
      'Akta Kematian Pewaris & Akta Kematian Ahli Waris',
      'Akta Kelahiran & KK para Penggugat',
      'Silsilah/Ranji Keluarga Pewaris and Ahli Waris',
      'Bukti Kepemilikan Harta yang digugat',
      'Email dan Whatsapp yang aktif',
      'Surat Gugatan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Poin 1-7 difotocopy and dilegalisir di kantor pos (ukuran kertas A4)'
    ],
    procedures: [
      'Pendaftaran',
      'Upaya Mediasi (Wajib)',
      'Sidang Jawab-Menjawab',
      'Pembuktian & Pemeriksaan Setempat (Descente)',
      'Putusan Pembagian'
    ]
  },
  {
    id: 14,
    title: 'Layanan E-Court (E-Litigation)',
    category: 'Lainnya',
    shortDesc: 'Alur tata cara persidangan secara elektronik di Pengadilan Agama Kuala Tungkal.',
    fullDesc: 'Alur tata cara persidangan secara elektronik di Pengadilan Agama Kuala Tungkal.',
    requirements: [
      'Memiliki akun E-Court yang sudah terverifikasi',
      'Persetujuan tertulis dari para pihak untuk beracara secara elektronik',
      'Dokumen bukti dalam format digital (PDF/JPG)',
      'Alamat email aktif untuk menerima notifikasi persidangan'
    ],
    procedures: [
      'Sidang Pertama & Persetujuan',
      'Mediasi',
      'Jawab-Menjawab (E-Litigation)',
      'Pembuktian Dokumen Digital',
      'Kesimpulan & Putusan Elektronik'
    ]
  },
  {
    id: 15,
    title: 'Harta Bersama (Gono Gini)',
    category: 'Perceraian',
    shortDesc: 'Gugatan pembagian harta yang diperoleh selama masa perkawinan.',
    fullDesc: 'Gugatan pembagian harta yang diperoleh selama masa perkawinan.',
    requirements: [
      'Fotocopy KTP / Surat Keterangan Domisili Asli Penggugat',
      'Fotocopy Bukti Kepemilikan Harta dilegalisir di Kantor Pos',
      'Fotocopy Akta Cerai Penggugat dilegalisir di Kantor Pos',
      'Email dan Whatsapp yang aktif',
      'Surat Gugatan 5 Rangkap (Pembuatan Gratis di Posbakum)',
      'Catatan: Fotocopy menggunakan ukuran kertas A4'
    ],
    procedures: [
      'Pendaftaran',
      'Mediasi',
      'Pembuktian kepemilikan harta',
      'Putusan Pembagian'
    ]
  }
];

// --- COMPONENTS ---

const TiktokIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Logo = ({ className }: { className?: string }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={`shrink-0 ${className}`}>
      {!imgError ? (
        <img 
          src="./logo pa KUALA TUNGKAL.jpg" 
          alt="Logo PA Kuala Tungkal" 
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-inner border border-emerald-500/50">
          <Scale size={className?.includes('w-14') ? 28 : 24} />
        </div>
      )}
    </div>
  );
};

const Navbar = () => (
  <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <Logo className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">Pengadilan Agama Kuala Tungkal</h1>
            <p className="text-xs text-gray-500 font-medium tracking-wide">SISTEM LAYANAN INFORMASI TERPADU</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-900 font-semibold border-b-2 border-emerald-600 pb-1">Beranda</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Layanan</a>
        </div>
      </div>
    </div>
  </nav>
);

const ServiceModal = ({ service, onClose }: { service?: any; onClose: () => void }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-emerald-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold tracking-wider text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">
                  {service.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Info size={14} /> INFORMASI PUBLIK
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
               RINGKASAN LAYANAN
               <div className="h-px bg-gray-200 flex-1"></div>
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">{service.fullDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Persyaratan */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="bg-emerald-100 p-1.5 rounded-md text-emerald-700"><ListOrdered size={18}/></div>
                PERSYARATAN BERKAS
              </h3>
              <ul className="space-y-3">
                {service.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <ChevronRight size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prosedur */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="bg-emerald-100 p-1.5 rounded-md text-emerald-700"><CheckCircle2 size={18}/></div>
                TAHAPAN PROSEDUR
              </h3>
              <ul className="space-y-4">
                {service.procedures.map((proc, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-200 text-emerald-600 flex items-center justify-center text-xs font-bold z-10">
                        {idx + 1}
                      </div>
                      {idx !== service.procedures.length - 1 && (
                        <div className="w-px h-full bg-emerald-100 absolute top-6 bottom-[-16px]"></div>
                      )}
                    </div>
                    <span className="pt-0.5 pb-2">{proc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <p className="text-xs text-emerald-600 flex items-center gap-2 font-medium bg-emerald-50 px-3 py-2 rounded-lg">
             <Info size={14}/> INFORMASI INI DIPERBARUI SECARA BERKALA SESUAI REGULASI TERBARU.
          </p>
          <button 
            onClick={onClose}
            className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            TUTUP INFORMASI
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Filter logic
  const filteredServices = servicesData.filter(service => {
    const matchCategory = activeTab === 'Semua' || service.category === activeTab;
    const matchSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-teal-50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
            Digital Government Service
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Selamat Datang di <span className="text-emerald-700">SILARA</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pusat Layanan Informasi yang Cepat, Mudah, dan Efisien dalam Satu Sistem Terpadu Pengadilan Agama Kuala Tungkal.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-4 py-5 border border-gray-200 rounded-full text-lg shadow-lg hover:shadow-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white/90 backdrop-blur-sm outline-none"
              placeholder="Cari prosedur, biaya, atau persyaratan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-sm">
            <span className="text-gray-400 font-medium mr-2 uppercase tracking-wide text-xs">Sering Dicari:</span>
            {['Cerai Gugat', 'E-Court', 'Isbat Nikah', 'Waris'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 font-medium transition-all shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Direktori Layanan Publik</h2>
            <p className="text-gray-600">Pilih kategori layanan di bawah ini untuk melihat persyaratan dan prosedur lengkap secara detail.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <button 
                      className="text-sm font-semibold text-emerald-600 flex items-center gap-1 group-hover:text-emerald-800 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click if clicking button directly
                        setSelectedService(service);
                      }}
                    >
                      DETAIL INFORMASI <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Layanan tidak ditemukan</h3>
                <p className="text-gray-500">Coba gunakan kata kunci lain atau pilih kategori 'Semua'.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EAC Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Announcement Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600 shrink-0 mt-1">
              <Info size={24} />
            </div>
            <div>
              <span className="inline-block px-2.5 py-1 bg-amber-200 text-amber-800 text-xs font-bold rounded mb-2">
                PENGUMUMAN RESMI
              </span>
              <h4 className="font-bold text-gray-900 text-lg mb-1">
                Berdasarkan SK Dirjen Badilag Nomor 932/DJA/SK.TI1.3/VII/2025
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mulai tanggal <strong className="text-gray-900">01 Juli 2025</strong>, Pengadilan Agama Kuala Tungkal telah menerapkan penerbitan dan Pengambilan Akta Cerai secara Elektronik melalui aplikasi EAC.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">Akses Layanan EAC</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Elektronik Akta Cerai (EAC) memberikan kemudahan bagi masyarakat untuk mengakses produk pengadilan secara mandiri, cepat, dan transparan.
              </p>
              <a 
                href="https://eac.mahkamahagung.go.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-500/30 w-full sm:w-auto justify-center"
              >
                Buka Website Portal EAC <ExternalLink size={20} />
              </a>
            </div>

            <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-4">
                <span className="bg-gray-200 h-px flex-1"></span>
                ALUR PANDUAN PENGAMBILAN PRODUK
                <span className="bg-gray-200 h-px flex-1"></span>
              </h3>
              
              <p className="text-center text-gray-600 text-sm mb-10 max-w-2xl mx-auto">
                Ikuti 5 langkah mudah berikut untuk melakukan pendaftaran hingga pengambilan produk secara mandiri melalui sistem EAC.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-gray-200 z-0"></div>

                {[
                  { title: 'Pendaftaran Akun', desc: 'Kunjungi situs EAC dan isi formulir pendaftaran dengan data diri lengkap (NIK, WA, Email). Klik link aktivasi yang dikirimkan ke email Anda.' },
                  { title: 'Login Aplikasi', desc: 'Gunakan username dan password yang telah didapat dari email aktivasi untuk masuk ke dashboard portal EAC.' },
                  { title: 'Pemeriksaan Produk', desc: 'Pilih menu "Periksa Produk", tentukan produk yang ingin diambil (Akta Cerai atau Salinan Putusan), lalu centang pilihan tersebut.' },
                  { title: 'Pembayaran', desc: 'Pilih metode pembayaran (VA/Transfer). Setelah bayar, tunggu proses validasi oleh petugas pengadilan.' },
                  { title: 'Pengambilan Produk', desc: 'Setelah tervalidasi, tombol unduh akan muncul. Perlu diingat, pengunduhan dokumen hanya bisa dilakukan satu kali.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white border-4 border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 leading-tight">{step.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-white p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                  <Info size={18} /> Penting untuk Diperhatikan:
                </h4>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li>Pengunduhan dokumen hanya bisa dilakukan <strong className="text-gray-900">satu kali</strong> untuk setiap satu kali pembayaran.</li>
                  <li>Jika Anda ingin mengunduh kembali, Anda harus melakukan pembayaran ulang mengikuti prosedur yang sama.</li>
                  <li>Simpan dokumen PDF Anda di tempat yang aman setelah berhasil diunduh.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated with High Contrast Emerald theme */}
      <footer className="bg-emerald-950 text-white py-16 border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-14 h-14" />
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Pengadilan Agama<br/>Kuala Tungkal</h2>
                <p className="text-[10px] text-emerald-300 font-bold tracking-widest mt-1">WILAYAH HUKUM KELAS I B</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-emerald-50/90 font-medium">
              Memberikan pelayanan hukum yang berkeadilan, transparan, dan akuntabel bagi seluruh elemen masyarakat di wilayah Kabupaten Tanjung Jabung Barat melalui sistem informasi terpadu yang modern.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "https://m.facebook.com/271835610012760/" },
                { Icon: Globe, url: "https://pa-kualatungkal.go.id/" },
                { Icon: Instagram, url: "https://www.instagram.com/pa.kualatungkal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: TiktokIcon, url: "https://www.tiktok.com/@pa.kualatungkal?_r=1&_t=ZS-93uyE4PUPje" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-500 text-white transition-all border border-emerald-700 shadow-lg"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6 text-sm flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
               KONTAK RESMI
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="text-emerald-300 shrink-0 mt-1" size={18} />
                <span className="text-white font-medium">Tungkal Ilir, Jl. Prof. Dr. Soedewi, Tanjung Jabung Barat, Kota Jambi, 36551</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-emerald-300 shrink-0" size={18} />
                <span className="text-white font-medium">(0742) 21082</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <WhatsAppIcon className="text-emerald-300 shrink-0" size={18} />
                <a 
                  href="https://wa.me/6285185548843" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-bold hover:text-emerald-300 transition-colors underline decoration-emerald-500/50 underline-offset-4"
                >
                  0851-8554-8843
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-emerald-300 shrink-0" size={18} />
                <span className="text-white font-medium">pa_kualatungkal@yahoo.co.id</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
             <h3 className="text-white font-bold tracking-wider mb-6 text-sm flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
               JAM OPERASIONAL
             </h3>
             <div className="bg-emerald-900/50 rounded-xl p-5 border border-emerald-700/50 backdrop-blur-md">
               <div className="flex justify-between items-center mb-4 pb-4 border-b border-emerald-800/50">
                 <span className="text-sm font-bold text-emerald-100 uppercase tracking-tighter">Hari Kerja</span>
                 <span className="text-sm text-white font-black">Senin - Jumat</span>
               </div>
               <div className="flex justify-between items-center mb-6">
                 <span className="text-sm font-bold text-emerald-100 uppercase tracking-tighter">Jam Layanan</span>
                 <span className="text-sm text-white font-black">08.00 - 16.00</span>
               </div>
               
               <div className="bg-emerald-950/80 rounded-lg p-3 border border-emerald-700/30">
                  <h4 className="text-xs text-emerald-300 font-black mb-3 flex items-center gap-2">
                    <Clock size={14}/> WAKTU ISTIRAHAT
                  </h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-emerald-100">Senin - Kamis</span>
                    <span className="font-black text-white">12.00 - 13.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-emerald-100">Jumat</span>
                    <span className="font-black text-white">11.30 - 13.30</span>
                  </div>
               </div>
               <p className="text-center text-xs mt-4 text-emerald-300 font-bold uppercase tracking-widest">Tutup Hari Libur Nasional</p>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-emerald-400">
          <p>© 2026 PENGADILAN AGAMA KUALA TUNGKAL</p>
          <div className="flex gap-6">
            <a 
              href="https://forms.gle/xrtspGSQQrzJpzZ68" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors border-b border-transparent hover:border-white"
            >
              SURVEY KEPUASAN
            </a>
            <a href="#" className="hover:text-white transition-colors">SYARAT & KETENTUAN</a>
            <a href="#" className="hover:text-white transition-colors">KEBIJAKAN PRIVASI</a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40 group flex items-center gap-3">
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-black text-emerald-700 border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
          Butuh Bantuan? Chat Sekarang
        </div>
        <a 
          href="https://wa.me/6285185548843"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        >
          <WhatsAppIcon size={28} />
        </a>
      </div>

      {/* Modal Container */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}
