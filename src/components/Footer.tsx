import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../images/logo.jpg';

const Footer = () => {
  // Function to handle footer link clicks and scroll to top
  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Campuserve Logo"
                className="h-16 w-16 bg-white rounded-full p-1 transition-transform duration-200 group-hover:scale-110"
              />              
              <div>
                <div className="text-xl font-bold">Campuserve</div>
                <div className="text-sm text-green-400">Transnational Hub</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering African talent for a global tomorrow. Your trusted partner for international education and career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Pages - Moved from Navbar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/pricing" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  onClick={handleFooterLinkClick}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">+254 758 220 860</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">campuservetransnationalhub@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/254758220860"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Campuserve Transnational Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;