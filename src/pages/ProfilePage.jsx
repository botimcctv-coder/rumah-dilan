import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
const ProfilePage = () => {
  const visiMisi = [{
    icon: Eye,
    title: 'Visi',
    color: 'from-blue-500 to-blue-600',
    items: ['Mewujudkan rumah inovatif yang mendidik, memberdayakan, menyehatkan, dan melindungi keluarga, serta menjadi wadah yang sejahtera dan unggul bagi orang tua.', 'Membangun keluarga yang harmonis dan berkualitas', 'Menciptakan generasi yang unggul dan berkarakter']
  }, {
    icon: Target,
    title: 'Misi',
    color: 'from-green-500 to-green-600',
    items: ['Menguatkan pendidikan dan keterampilan orang tua.', 'Mendorong ekonomi kreatif dan pemberdayaan keluarga.', 'Menumbuhkan budaya, kesehatan, perlindungan, dan pengasuhan positif']
  }, {
    icon: Award,
    title: 'Fungsi & Tujuan',
    color: 'from-purple-500 to-purple-600',
    items: ['Pusat pembelajaran dan inovasi kreatif bagi orang tua', 'Wadah kolaborasi lintas lembaga dan pelayanan keluarga', 'Meningkatkan literasi, keterampilan, dan kesejahteraan keluarga', 'Mendorong kegiatan inovasi yang berkelanjutan']
  }];
  const struktur = [{
    jabatan: 'Pengawas',
    nama: 'Arief Hidayat, S.Sos., M.M'
  }, {
    jabatan: 'Pembina',
    nama: 'Resha Tri Aditya'
  }, {
    jabatan: 'Ketua',
    nama: 'Upi Musdalifah'
  }, {
    jabatan: 'Sekretaris',
    nama: 'Kanti Sari'
  }, {
    jabatan: 'Bendahara',
    nama: 'Widya Nurhayati'
  }, {
    jabatan: 'Bidang Respon Kasus',
    nama: 'Siti Aisah & Eti Sumiati'
  }, {
    jabatan: 'Bidang Kemitraan',
    nama: 'Peni, S.Pd'
  }, {
    jabatan: 'Bidang Pembinaan',
    nama: 'Iis Ismawati, S.Pd.I., M.Pd'
  }];
  const konferensi = [{
    kategori: 'PKK',
    detail: 'Penggerak utama kegiatan dan kaderisasi yang berkelanjutan'
  }, {
    kategori: 'PKBM',
    detail: 'Melaksanakan pendampingan bagi anak putus sekolah dan peningkatan literasi orang tua'
  }, {
    kategori: 'PAUD',
    detail: 'Mendorong potensi orang tua untuk mengisi waktu secara positif dalam pendidikan dan keterampilan'
  }, {
    kategori: 'PATBM',
    detail: 'Memberikan edukasi dan perlindungan terhadap kekerasan dalam keluarga, dengan fokus pada orang tua'
  }, {
    kategoran: 'Sanggar Gentra Pajajaran',
    detail: 'Menyediakan ruang ekspresi budaya dan seni untuk perlindungan anak dan keluarga'
  }];
  return <>
      <Helmet>
        <title>Profil - Rumah Dilan MILEA</title>
        <meta name="description" content="Profil lengkap Rumah Dilan MILEA - Mitra Keluarga Langgeng Edukatif Keluarga dengan visi, misi, dan struktur kepengurusan." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Profil Rumah Dilan</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.section initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Rumah Dilan "MILEA"</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rumah DILAN “MILEA” (Mitra Inovasi Lingkungan Edukasi Keluarga) merupakan konsep inovasi dari Pokja II Tim Penggerak PKK Kelurahan Cimahpar yang bertujuan mewujudkan lingkungan keluarga yang mendidik, kreatif, dan berdaya.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Program ini hadir sebagai wadah kolaborasi antara PKK, PAUD, PKBM, Sanggar, PATBM, dan komunitas masyarakat untuk meningkatkan pendidikan, keterampilan, serta kesejahteraan keluarga di Kelurahan Cimahpar.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 mt-6">
                    <h3 className="font-bold text-blue-800 mb-2">Fokus Utama Kami:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Pendidikan dan pengembangan keluarga</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Pemberdayaan ekonomi keluarga</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Kesehatan dan kesejahteraan keluarga</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img alt="Kegiatan Rumah Dilan dengan keluarga" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/f5e09ce9-887b-4679-83df-69f0c4a03bd5/whatsapp-image-2025-10-18-at-10.54.55-wewv2.jpeg" />
                </div>
              </div>
            </div>
          </motion.section>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {visiMisi.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <item.icon className="h-10 w-10 mb-3" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {item.items.map((point, idx) => <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-blue-500 mr-2 mt-1">✓</span>
                          <span>{point}</span>
                        </li>)}
                    </ul>
                  </div>
                </motion.div>)}
            </div>
          </section>

          <motion.section initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Struktur Kepengurusan Rumah Dilan "MILEA"</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {struktur.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.05
              }} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{item.jabatan}</p>
                        <p className="text-lg font-bold text-gray-800">{item.nama}</p>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.section>

          <motion.section initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Kolaborasi Lintas Lembaga</h2>
              <p className="text-center text-blue-100 mb-8 max-w-3xl mx-auto">
                Rumah DILAN MILEA tumbuh melalui sinergi antar lembaga dan komunitas di lingkungan Kelurahan Cimahpar
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {konferensi.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.05
              }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                    <h3 className="font-bold text-xl mb-2">{item.kategori}</h3>
                    <p className="text-blue-100">{item.detail}</p>
                  </motion.div>)}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>;
};
export default ProfilePage;