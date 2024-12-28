import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-400/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold text-accent-yellow">
              Shayak<span className="text-white">Siraj</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-accent-yellow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{label}</span>
                {location.pathname === path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-lg bg-dark-100"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-400"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === path
                      ? 'text-accent-yellow bg-dark-100'
                      : 'text-gray-300 hover:text-white hover:bg-dark-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
