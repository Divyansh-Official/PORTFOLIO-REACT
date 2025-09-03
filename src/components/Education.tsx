import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Chandigarh University</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-cyan-400" size={16} />
                    <span className="text-gray-400">Expected Aug 2026</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">Bachelor of Technology in Computer Science and Engineering</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="text-purple-400" size={16} />
                    <span className="text-gray-300 font-semibold">Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures and Algorithms (Java)',
                      'DBMS',
                      'OOP',
                      'Software Engineering',
                      'Computer Networks'
                    ].map((course) => (
                      <span
                        key={course}
                        className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-full px-3 py-1 text-sm text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
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

export default Education;