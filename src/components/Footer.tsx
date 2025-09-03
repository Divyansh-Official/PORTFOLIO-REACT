import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-6 border-t border-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="mailto:jamdivyanshtiwari@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail size={24} />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full text-blue-400 hover:bg-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-400/30 rounded-full text-gray-400 hover:bg-gray-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={24} />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <span>© 2025 Divyansh Tiwari</span>
            {/* <span>•</span> */}
            {/* <span className="flex items-center gap-1">
              Made with <Heart className="text-red-400" size={16} /> for innovation
            </span> */}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;