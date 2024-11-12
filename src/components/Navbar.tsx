import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+18483463282';
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-500" />
            <span className="text-white font-bold text-xl">Media Mentor AI</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <div className="relative group">
                <NavLink to="/services">Services</NavLink>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <NavLink to="/video-services" className="block px-4 py-2">Video Services</NavLink>
                    <NavLink to="/audio-services" className="block px-4 py-2">Audio Services</NavLink>
                    <NavLink to="/image-services" className="block px-4 py-2">Image Services</NavLink>
                    <NavLink to="/automation-services" className="block px-4 py-2">Business Automation</NavLink>
                    <NavLink to="/content-services" className="block px-4 py-2">Content Creation</NavLink>
                    <NavLink to="/analytics-services" className="block px-4 py-2">Analytics Services</NavLink>
                  </div>
                </div>
              </div>
              <NavLink to="/contact">Contact</NavLink>
              <button 
                onClick={handleCall}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4 mr-2" />
                Book a Call
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/video-services" onClick={() => setIsOpen(false)}>- Video Services</MobileNavLink>
            <MobileNavLink to="/audio-services" onClick={() => setIsOpen(false)}>- Audio Services</MobileNavLink>
            <MobileNavLink to="/image-services" onClick={() => setIsOpen(false)}>- Image Services</MobileNavLink>
            <MobileNavLink to="/automation-services" onClick={() => setIsOpen(false)}>- Business Automation</MobileNavLink>
            <MobileNavLink to="/content-services" onClick={() => setIsOpen(false)}>- Content Creation</MobileNavLink>
            <MobileNavLink to="/analytics-services" onClick={() => setIsOpen(false)}>- Analytics Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <div className="px-3 py-2">
              <button 
                onClick={handleCall}
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4 mr-2" />
                Book a Call
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) => (
  <Link
    to={to}
    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;