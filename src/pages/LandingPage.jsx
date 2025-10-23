import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  const stats = [{
    number: "500+",
    label: "Keluarga Dampingan"
  }, {
    number: "8",
    label: "Program Kerja"
  }, {
    number: "100+",
    label: "Kegiatan per Tahun"
  }];
  return <>
      <Helmet>
        <title>Rumah Dilan - Rumah Pendidikan dan Keterampilan Keluarga</title>
        <meta name="description" content="Rumah Dilan MILEA - Mitra Inovasi Lingkungan Edukasi Keluarga, hadir untuk memberdayakan keluarga Indonesia melalui pendidikan dan pelatihan keterampilan yang berkualitas" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Text Section */}
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }}>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-sm font-semibold">Selamat Datang</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Rumah Pendidikan dan Keterampilan Keluarga
                </h1>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-3">MILEA</h2>
                  <p className="text-lg leading-relaxed">Mitra Inovasi Lingkungan Edukasi Keluarga, hadir untuk memberdayakan keluarga (Orang Tua) melalui pendidikan dan Keterampilan yang mengahsilan Karya yang unggul dan berkualitas</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/profil">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Kenali Kami Lebih Dekat
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  {/* 
                   <Link to="/program-kerja">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Lihat Program
                    </Button>
                   </Link> 
                   */}
                </div>
              </motion.div>

              {/* Right Image Section (Hero Image) */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                  <img alt="Rumah Dilan - Keluarga bahagia dengan anak-anak" className="w-full h-auto object-contain max-h-[400px]" src="https://horizons-cdn.hostinger.com/f5e09ce9-887b-4679-83df-69f0c4a03bd5/cover-9OQnW.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Statistik Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>)}
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default LandingPage;