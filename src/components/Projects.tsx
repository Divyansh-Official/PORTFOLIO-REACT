import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: 'ZENFIT',
      subtitle: 'Health and Fitness Management App',
      description: 'Built fitness app with pedometer, smart notifications, and Firebase authentication. Delivered smooth UX with optimized backend for performance and low resource usage.',
      image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tech: ['Java', 'XML', 'Firebase', 'SQLite', 'API'],
      icon: <Smartphone className="text-cyan-400" size={24} />,
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      title: 'ZENSTORE',
      subtitle: 'Compare, Save, and Shop from Local Vendors App',
      description: 'Built an app comparing product prices and recommending cheapest option. Enabled local vendors to list/promote products, increasing user choice and providing small shopkeepers an additional income stream.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tech: ['React Native', 'Node.js', 'Spring Boot', 'Python', 'Web Scraping', 'API'],
      icon: <ShoppingCart className="text-purple-400" size={24} />,
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-400/30'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className={`relative bg-black/40 backdrop-blur-md border ${project.borderColor} rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl`}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <h4 className={`text-lg bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3 font-semibold`}>
                      {project.subtitle}
                    </h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`bg-gradient-to-r ${project.color} bg-opacity-20 border border-current/30 rounded-full px-3 py-1 text-xs text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current/30 rounded-full px-4 py-2 text-sm text-white hover:bg-opacity-30 transition-all duration-300`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href="#"
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current/30 rounded-full px-4 py-2 text-sm text-white hover:bg-opacity-30 transition-all duration-300`}
                      >
                        <ExternalLink size={16} />
                        Demo
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

export default Projects;