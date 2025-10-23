
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, FileText, ArrowLeft, PlusCircle, Search, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const initialKegiatanList = [
  {
    tanggal: "2025-10-15",
    waktu: "06:30 - 08:00",
    kegiatan: "Senam Sehat Keluarga",
    deskripsi: "Kegiatan senam rutin menjaga kebugaran keluarga.",
    lokasi: "Lapangan Parkir",
    hasil: "75 peserta hadir, meningkat kesadaran kesehatan keluarga.",
    laporan: true,
  },
  {
    tanggal: "2025-10-22",
    waktu: "08:00 - 11:00",
    kegiatan: "Bazar Produk UMKM",
    deskripsi: "Pameran dan penjualan produk lokal dari UMKM binaan.",
    lokasi: "Halaman Rumah Dilan",
    hasil: "Transaksi mencapai Rp 5.000.000",
    laporan: true,
  },
  {
    tanggal: "2025-10-29",
    waktu: "13:00 - 16:00",
    kegiatan: "Workshop Keterampilan",
    deskripsi: "Membuat kerajinan tangan bernilai ekonomis.",
    lokasi: "Ruang Pelatihan",
    hasil: "30 peserta berhasil membuat produk kerajinan.",
    laporan: true,
  },
];

const KegiatanPage = () => {
  const { toast } = useToast();
  const [kegiatanList, setKegiatanList] = useState(initialKegiatanList);
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const [filter, setFilter] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newKegiatan, setNewKegiatan] = useState({
    tanggal: "",
    waktu: "",
    kegiatan: "",
    deskripsi: "",
    lokasi: "",
    hasil: "",
    laporan: true
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewKegiatan((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddKegiatan = (e) => {
    e.preventDefault();
    if (Object.values(newKegiatan).some(val => val === "" && val !== newKegiatan.laporan)) {
        toast({
            title: "Error!",
            description: "Semua kolom harus diisi.",
            variant: "destructive"
        });
        return;
    }
    setKegiatanList([newKegiatan, ...kegiatanList]);
    setNewKegiatan({ tanggal: "", waktu: "", kegiatan: "", deskripsi: "", lokasi: "", hasil: "", laporan: true });
    setIsFormOpen(false);
    toast({
        title: "Sukses!",
        description: "Kegiatan baru berhasil ditambahkan."
    });
  };
  
  const handlePrint = () => {
    window.print();
  };

  const filteredKegiatan = useMemo(() => 
    kegiatanList.filter(item => 
      item.kegiatan.toLowerCase().includes(filter.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(filter.toLowerCase()) ||
      item.lokasi.toLowerCase().includes(filter.toLowerCase())
    ), [kegiatanList, filter]);

  return (
    <>
      <Helmet>
        <title>Kegiatan - Rumah Dilan MILEA</title>
        <meta name="description" content="Daftar kegiatan dan agenda Rumah Dilan MILEA." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Kegiatan</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600">Daftar Kegiatan Rumah Dilan</p>
          </motion.div>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white flex justify-between items-center">
                <h2 className="text-2xl font-bold">Daftar Kegiatan</h2>
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary"><PlusCircle className="mr-2 h-4 w-4" /> Tambah Kegiatan</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Tambah Kegiatan Baru</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddKegiatan}>
                      <div className="grid gap-4 py-4">
                        {Object.keys(newKegiatan).filter(k => k !== 'laporan').map(key => (
                          <div className="grid grid-cols-4 items-center gap-4" key={key}>
                            <Label htmlFor={key} className="text-right capitalize">{key}</Label>
                            <Input id={key} type={key === 'tanggal' ? 'date' : key === 'waktu' ? 'time' : 'text'} value={newKegiatan[key]} onChange={handleInputChange} className="col-span-3" />
                          </div>
                        ))}
                      </div>
                      <DialogFooter>
                        <Button type="submit">Simpan</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input placeholder="Cari kegiatan..." value={filter} onChange={(e) => setFilter(e.target.value)} className="pl-10 w-full" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {["No", "Tanggal", "Kegiatan", "Waktu", "Deskripsi", "Lokasi", "Hasil"].map((head, i) => (
                        <th key={i} className="px-6 py-4 text-left text-sm font-bold text-gray-700">{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredKegiatan.map((item, index) => (
                      <motion.tr key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 text-sm">{index + 1}</td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap">{item.tanggal}</td>
                        <td className="px-6 py-4 text-sm font-medium">{item.kegiatan}</td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap">{item.waktu}</td>
                        <td className="px-6 py-4 text-sm max-w-xs truncate">{item.deskripsi}</td>
                        <td className="px-6 py-4 text-sm">{item.lokasi}</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm" onClick={() => setSelectedKegiatan(item)} disabled={!item.laporan}>
                            <FileText className="h-4 w-4 mr-2" />Lihat
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <Dialog open={!!selectedKegiatan} onOpenChange={() => setSelectedKegiatan(null)}>
        <DialogContent className="max-w-3xl no-print">
          {selectedKegiatan && (
            <div id="print-area">
              <div className="print-container">
                  <DialogHeader className="print-header">
                    <DialogTitle className="text-2xl font-bold text-gray-800">LAPORAN KEGIATAN</DialogTitle>
                    <p className="text-lg text-gray-600">RUMAH DILAN "MILEA"</p>
                  </DialogHeader>

                  <div className="space-y-2 mb-6">
                    <p><span className="font-bold">TANGGAL :</span> {selectedKegiatan.tanggal}</p>
                    <p><span className="font-bold">KEGIATAN :</span> {selectedKegiatan.kegiatan}</p>
                    <p><span className="font-bold">WAKTU :</span> {selectedKegiatan.waktu}</p>
                  </div>

                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full print-table">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-r">DESKRIPSI</th>
                          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-r">LOKASI</th>
                          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b">HASIL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">{selectedKegiatan.deskripsi}</td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-r">{selectedKegiatan.lokasi}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{selectedKegiatan.hasil}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="outline" onClick={() => setSelectedKegiatan(null)}><ArrowLeft className="h-4 w-4 mr-2" />Kembali</Button>
                <Button onClick={handlePrint}><Printer className="h-4 w-4 mr-2" />Export ke PDF</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KegiatanPage;
