import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center mb-4">
              <Car className="w-7 h-7 text-blue-500" />
              <span className="ml-2 text-xl font-bold">LuxeWash</span>
            </div>
            <p className="text-slate-400 mb-6">
              Premium car care services for discerning drivers. Experience the difference with our state-of-the-art equipment and expert technicians.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'Locations', 'Membership', 'Gift Cards', 'Careers', 'FAQ'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <span className="text-slate-400">
                  42, 2nd Cross, 5th Main Road,<br />
                  Koramangala 6th Block,<br />
                  Bengaluru, Karnataka - 560095
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                <a href="tel:+15551234567" className="text-slate-400 hover:text-blue-500 transition-colors">
                  +91 98765 43210
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <a href="mailto:info@luxewash.com" className="text-slate-400 hover:text-blue-500 transition-colors">
                  rahul.jaiswal@luxewash.com
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
            <h3 className="text-lg font-semibold mb-6">Hours of Operation</h3>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Monday - Friday:</span>
                  <span className="text-slate-300">7:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Saturday:</span>
                  <span className="text-slate-300">8:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="text-slate-300">9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LuxeWash. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-slate-500 hover:text-blue-500 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-500 hover:text-blue-500 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;