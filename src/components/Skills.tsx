import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Smartphone, Cloud, GitBranch, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-cyan-400 to-blue-400'
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Smartphone size={24} />,
      skills: ['XML', 'Spring Boot', 'React', 'React Native', 'Android SDK'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Convex'],
      color: 'from-green-400 to-cyan-400'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'REST API', 'AWS', 'Gradle', 'Maven'],
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'IDEs',
      icon: <GitBranch size={24} />,
      skills: ['VS Code', 'Android Studio', 'IntelliJ IDEA'],
      color: 'from-indigo-400 to-purple-400'
    },
    {
      title: 'Concepts',
      icon: <Cloud size={24} />,
      skills: ['DSA', 'OOP', 'Database Management', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
      color: 'from-pink-400 to-purple-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-2xl blur-xl group-hover:opacity-50 transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                <div className="relative bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className={`flex items-center gap-3 mb-4`}>
                    <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-r ${category.color} bg-opacity-20 border border-current/30 rounded-full px-3 py-1 text-sm text-white hover:bg-opacity-30 transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default Skills;