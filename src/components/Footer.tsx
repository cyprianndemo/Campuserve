import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe2 className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-xl font-bold">Campuserve</div>
                <div className="text-sm text-green-400">Transnational Hub</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering African talent for a global tomorrow. Your trusted partner for international education and career opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/campuserve" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/campuserve" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/campuserve" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/campuserve" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-green-400 transition-colors">Study Destinations</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-green-400 transition-colors">Pricing</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-green-400 transition-colors">Events</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations#uk" className="text-gray-300 hover:text-green-400 transition-colors">United Kingdom</Link></li>
              <li><Link to="/destinations#usa" className="text-gray-300 hover:text-green-400 transition-colors">United States</Link></li>
              <li><Link to="/destinations#canada" className="text-gray-300 hover:text-green-400 transition-colors">Canada</Link></li>
              <li><Link to="/destinations#australia" className="text-gray-300 hover:text-green-400 transition-colors">Australia</Link></li>
              <li><Link to="/destinations#germany" className="text-gray-300 hover:text-green-400 transition-colors">Germany</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">+254 727 606 568</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">campurserveducation@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/254727606568"
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