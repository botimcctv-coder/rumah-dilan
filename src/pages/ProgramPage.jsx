import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Users, Heart, GraduationCap, Sprout } from 'lucide-react';

const ProgramPage = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'CERDAS',
      subtitle: 'CERia Dan ASpiratif Sejahtera',
      color: 'from-blue-500 to-blue-600',
      description: 'Program pendampingan keluarga yang berfokus mendukung kesejahteraan keluarga',
      features: [
        'Pelatihan, kreativitas',
        'Pelatihan, keterampilan',
        'Pendampingan tumbuh kembang anak',
        'Pojok cerita psikologi',
        'Konseling dan parenting keluarga',
        'Pelatihan keterampilan hidup untuk anak'
      ]
    },
    {
      icon: Sprout,
      title: 'LESTARI',
      subtitle: 'Layanan Efektif Sinergitas Terpadu Aktif Raih Impian',
      color: 'from-green-500 to-green-600',
      description: 'Berfokus pada kolaborasi lintas lembaga',
      features: [
        'Pelayanan Budaya',
        'Pembinaan budaya',
        'Pendampingan anak putus sekolah',
        'Pendampingan anak putus disabilitas',
        'Penguatan kemitraan keluarga'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Program Kerja - Rumah Dilan MILEA</title>
        <meta name="description" content="Program kerja Rumah Dilan MILEA meliputi CERDAS dan LESTARI untuk pemberdayaan keluarga Indonesia." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Program Kerja</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program & Kegiatan Inovatif Unggulan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Program & Kegiatan Inovasi Unggulan</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Rumah Dilan "MILEA" memiliki kegiatan berbasis inovasi yang bertujuan untuk meningkatkan kapasitas keluarga melalui edukasi, kreativitas, dan kolaborasi lintas lembaga
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${program.color} p-8 md:p-12 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <program.icon className="h-10 w-10" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{program.title}</h2>
                      <p className="text-lg text-white/90">{program.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/95 leading-relaxed">{program.description}</p>
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Kegiatan Program:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:shadow-md transition-shadow"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Tertarik Bergabung dengan Program Kami?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut tentang program-program yang tersedia dan bagaimana keluarga Anda dapat berpartisipasi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-bold text-blue-600">info@rumahdilan.id</p>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                <p className="text-sm text-gray-600">Telepon</p>
                <p className="font-bold text-blue-600">0812-3456-7890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProgramPage;