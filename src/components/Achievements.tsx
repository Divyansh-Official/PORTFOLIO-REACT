import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Trophy, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const achievements = [
    {
      title: 'HackerRank Java Expert',
      description: '5 Star rating in Java with 44,000 points',
      icon: <Star className="text-yellow-400" size={32} />,
      link: '#',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 200+ coding questions across various difficulty levels',
      icon: <Trophy className="text-green-400" size={32} />,
      link: '#',
      color: 'from-green-400 to-cyan-400',
      bgColor: 'from-green-500/10 to-cyan-500/10',
      borderColor: 'border-green-400/30'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Programming Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className={`relative bg-black/40 backdrop-blur-md border ${achievement.borderColor} rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-2xl`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 mb-4">{achievement.description}</p>
                      
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${achievement.color} bg-opacity-20 border border-current/30 rounded-full px-4 py-2 text-sm text-white hover:bg-opacity-30 transition-all duration-300`}
                      >
                        View Profile
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;