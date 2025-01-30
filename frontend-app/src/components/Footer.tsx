import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaPhone, FaMapMarkerAlt, FaClock, FaBreadSlice, FaTwitter } from "react-icons/fa";
import { MdEmail, MdCake } from "react-icons/md";
import { GiCroissant } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-amber-900 border-t border-amber-200">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="border-r border-amber-300 pr-6">
            <h3 className="text-amber-800 text-lg font-semibold mb-4">About Cream Castle</h3>
            <p className="text-sm leading-6">
              Welcome to Cream Castle, where we craft delicious breads and cream buns 
              with love and tradition. Our freshly baked goods are made daily using 
              the finest ingredients and time-honored recipes.
            </p>
          </div>

          {/* Our Specialties */}
          <div className="border-r border-amber-300 pr-6">
            <h3 className="text-amber-800 text-lg font-semibold mb-4">Our Specialties</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <FaBreadSlice className="text-amber-700" />
                Artisan Bread
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MdCake className="text-amber-700" />
                Cream Bun
              </li>
              <li className="flex items-center gap-2 text-sm">
                <GiCroissant className="text-amber-700" />
                Coconut Bun
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaBreadSlice className="text-amber-700" />
                Burger Bun
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="border-r border-amber-300 pr-6">
            <h3 className="text-amber-800 text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <FaClock className="text-amber-700" />
                FAQ
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-amber-700" />
                Shipping Info
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MdEmail className="text-amber-700" />
                Returns & Exchanges
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-800 text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-amber-700" />
                123 Bakery Lane, Sweet Town
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaPhone className="text-amber-700" />
                <a href="tel:+1234567890" className="hover:text-amber-700 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MdEmail className="text-amber-700" />
                <a href="mailto:info@creamcastle.com" className="hover:text-amber-700 transition-colors">
                  info@creamcastle.com
                </a>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-4 flex gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                <CiInstagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-amber-800 py-4 text-amber-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Cream Castle Bakery. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
