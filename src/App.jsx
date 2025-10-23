
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import LandingPage from '@/pages/LandingPage';
import ProfilePage from '@/pages/ProfilePage';
import ProgramPage from '@/pages/ProgramPage';
import KegiatanPage from '@/pages/KegiatanPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/program-kerja" element={<ProgramPage />} />
          <Route path="/kegiatan" element={<KegiatanPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
