import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Summary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="summary" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 shadow-2xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                Aspiring Android Software Engineer skilled in <span className="text-cyan-400 font-semibold">Java</span>, <span className="text-cyan-400 font-semibold">Advanced Java</span>, <span className="text-cyan-400 font-semibold">React Native</span>, <span className="text-cyan-400 font-semibold">Spring Boot</span>, <span className="text-cyan-400 font-semibold">Android SDK</span>, <span className="text-cyan-400 font-semibold">MySQL</span>, <span className="text-cyan-400 font-semibold">NoSQL</span>, <span className="text-cyan-400 font-semibold">Firebase</span>, <span className="text-cyan-400 font-semibold">REST APIs</span>, <span className="text-cyan-400 font-semibold">Git</span>, <span className="text-cyan-400 font-semibold">Gradle</span>, <span className="text-cyan-400 font-semibold">Maven</span>. 
                <br /><br />
                Experienced in data structures, API integration, database management, and UI/UX optimization. Built real-world projects like <span className="text-purple-400 font-semibold">ZENFIT</span> and <span className="text-purple-400 font-semibold">ZENSTORE</span>, showcasing problem-solving, scalable design, and teamwork.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;