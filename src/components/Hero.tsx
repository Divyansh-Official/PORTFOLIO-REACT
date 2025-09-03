import React from "react";
import { motion } from "framer-motion";
// import profile_photo from "../assets/profile_photo.jpg"; // ✅ Ensure path is correct
import { Phone, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 blur-xl opacity-50 animate-pulse"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQEPT0VQEwQ2yw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692042406273?e=1759363200&v=beta&t=hpQL7B1wvXh6yOvUDyUJkCjzLVRYy76hFNdFUa1kkj4"
                alt="Divyansh Tiwari"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Divyansh
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tiwari
                </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
            >
              Android Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl"
            >
              Building scalable apps with Java, Android, and modern web
              technologies.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="tel:9580550130"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full px-6 py-3 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <Phone size={18} />
                <span>9580550130</span>
              </a>

              <a
                href="mailto:jamdivyanshtiwari@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full px-6 py-3 text-purple-400 hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/divyansh-tiwari-100299288/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-full px-6 py-3 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Divyansh-Official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gray-500/10 to-slate-500/10 border border-gray-400/30 rounded-full px-6 py-3 text-gray-400 hover:bg-gray-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
