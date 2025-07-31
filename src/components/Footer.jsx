// Footer.jsx
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400">DevDinner 🍔</h2>
          <p className="text-sm mt-2 text-gray-400">Fuel your frontend cravings with tasty code components and juicy UI ideas.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Resources</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#guides" className="hover:text-white">Guides</a></li>
            <li><a href="#community" className="hover:text-white">Community</a></li>
            <li><a href="#support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Stay Connected</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ruchi-badkur/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RuchiBadkur" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        <p>
          Made with <FaHeart className="inline text-red-500 mx-1" /> by Ruchi Badkur @ DevDinner 🍔
        </p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
