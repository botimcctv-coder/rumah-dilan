
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Program Kerja', path: '/program-kerja' },
    { name: 'Kegiatan', path: '/kegiatan' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <img src="https://yixefbpywpkwrezodxum.supabase.co/storage/v1/object/public/Galery/logo_dilan.png" alt="Logo Rumah Dilan" className="h-10 w-auto" />
              <span className="font-bold text-xl text-gray-800 hidden sm:inline">
                Rumah Dilan "MILEA"
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={`relative ${
                    isActive(item.path)
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={`w-full justify-start ${
                    isActive(item.path)
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
