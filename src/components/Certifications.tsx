import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-md border border-indigo-400/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Industrial Training in Android App Development</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-indigo-400" size={16} />
                    <span className="text-gray-400">May – July 2024</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-indigo-400 font-semibold">Premragati Technology Pvt. Ltd.</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-400" size={18} />
                      <span className="text-gray-300">Hands-on training in Android Application Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-400" size={18} />
                      <span className="text-gray-300">Proficiency in Java, XML, SQLite, API integration, and database handling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;