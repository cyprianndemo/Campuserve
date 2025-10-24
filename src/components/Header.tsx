import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Simplified navigation - main pages only
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' }
  ];

  // Function to check if current path is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  // Close menu when clicking outside
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-md'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Campuserve Logo"
                  className="h-20 w-20 transition-transform duration-200 group-hover:scale-110 bg-white rounded-full p-1"
                />
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                  CAMPUSERVE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-6 py-3 transition-all duration-200 rounded-lg group ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-200 ${
                      isActive(item.path)
                        ? 'w-3/4'
                        : 'w-0 group-hover:w-3/4'
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button - Updated to be longer and without arrow */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Get Started Today
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 z-50"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Overlay style */}
          <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 z-50 ${
            isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}>
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Campuserve Logo"
                  className="h-12 w-12 bg-white rounded-full p-1"
                />
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    CAMPUSERVE
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="py-8">
              <div className="flex flex-col space-y-2 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-4 transition-all duration-200 rounded-lg flex items-center justify-between group ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span className="text-lg">{item.name}</span>
                    <svg 
                      className={`h-5 w-5 transition-opacity duration-200 ${
                        isActive(item.path)
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="px-6 mt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full text-center block hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-lg"
                >
                  Get Started Today
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;