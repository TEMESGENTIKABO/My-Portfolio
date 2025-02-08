'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Code, Cpu, Zap, Globe, Server, Coffee, Smile, GitMerge } from 'react-feather';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="py-16 md:py-32 bg-gray-950 text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12 md:mb-20 text-center"
        >
          <div className="inline-flex items-center mb-4 md:mb-6 text-emerald-400">
            <Terminal className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 animate-pulse" />
            <h2 className="text-2xl md:text-4xl font-mono font-bold">
              $ whoami
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-xl text-gray-400 font-mono">
            Full-stack engineer passionate about building scalable systems and solving real-world problems.
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center mb-4 md:mb-6">
            <Smile className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mr-2 md:mr-3" />
            <h3 className="text-xl md:text-2xl font-mono">About Me</h3>
          </div>
          <div className="p-4 md:p-8 bg-gray-900 rounded-lg border border-gray-800">
            <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
              I’m a developer who believes that technology should solve real problems, not just create new ones. 
              I thrive on building systems that are not only scalable and efficient but also intuitive and user-friendly.
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
              Outside of coding, I’m a lifelong learner who enjoys diving into new technologies, exploring open-source projects, 
              and sharing knowledge through writing and mentoring.
            </p>
            <p className="text-sm md:text-base text-gray-300">
              When I’m not at my desk, you’ll find me brewing coffee, listening to synthwave, or tinkering with side projects 
              that combine my love for code and creativity.
            </p>
          </div>
        </motion.div>

        {/* Timeline & Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20" ref={ref}>
          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 md:p-8 bg-gray-900 rounded-lg border border-gray-800 relative"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mr-2 md:mr-3" />
              <h3 className="text-xl md:text-2xl font-mono">Career Timeline</h3>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  year: '2018',
                  title: 'First Production Deployment',
                  tech: ['Node.js', 'MongoDB'],
                  description: 'Deployed first REST API handling 10k+ daily requests',
                  icon: <Server className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                },
                {
                  year: '2020',
                  title: 'Enterprise System Architecture',
                  tech: ['AWS', 'Kubernetes'],
                  description: 'Led migration to microservices architecture',
                  icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                },
                {
                  year: '2023',
                  title: 'OSS Contributions',
                  tech: ['React', 'TypeScript'],
                  description: 'Became core contributor to popular OSS projects',
                  icon: <Zap className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{ y }}
                  className="pl-4 md:pl-8 border-l-2 border-emerald-400/30"
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <span className="font-mono text-sm md:text-base text-emerald-400 ml-2">{item.year}</span>
                    <div className="ml-2 md:ml-4 flex flex-wrap gap-1 md:gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-gray-800 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 md:p-8 bg-gray-900 rounded-lg border border-gray-800"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mr-2 md:mr-3" />
              <h3 className="text-xl md:text-2xl font-mono">Design Philosophy</h3>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  principle: 'Scalability First',
                  description: 'Design systems that can handle 10x traffic spikes without breaking a sweat.',
                  icon: '🚀'
                },
                {
                  principle: 'Resilience by Design',
                  description: 'Build fault-tolerant systems that self-heal and recover gracefully.',
                  icon: '🛡️'
                },
                {
                  principle: 'Developer Experience',
                  description: 'Prioritize clean APIs and documentation to empower other developers.',
                  icon: '👩‍💻'
                },
                {
                  principle: 'Continuous Improvement',
                  description: 'Iterate and optimize systems based on real-world usage and feedback.',
                  icon: '🔄'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4">{item.icon}</span>
                  <div>
                    <h4 className="font-mono text-sm md:text-base text-emerald-400">{item.principle}</h4>
                    <p className="text-sm md:text-base text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests & Methodologies Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-4 md:gap-8"
        >
          {/* Personal Interests */}
          <div className="p-4 md:p-8 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4 md:mb-6">
              <Coffee className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mr-2 md:mr-3" />
              <h3 className="text-xl md:text-2xl font-mono"># /etc/passions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {[
                {
                  icon: '📚',
                  title: 'Tech Blogging',
                  desc: 'Writing about system design patterns'
                },
                {
                  icon: '🧩',
                  title: 'OSS Contributions',
                  desc: 'Maintaining React libraries'
                },
                {
                  icon: '☕',
                  title: 'Coffee Brewing',
                  desc: 'Perfecting V60 technique'
                },
                {
                  icon: '🎧',
                  title: 'Synthwave',
                  desc: 'Coding soundtrack curator'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="p-3 md:p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                >
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">{item.icon}</div>
                  <div className="font-mono text-sm md:text-base text-emerald-400">{item.title}</div>
                  <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engineering Methodologies */}
          <div className="p-4 md:p-8 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4 md:mb-6">
              <GitMerge className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mr-2 md:mr-3" />
              <h3 className="text-xl md:text-2xl font-mono">Engineering Methods</h3>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: '🧠',
                  title: 'Systems Thinking',
                  description: 'Holistic approach to complex system design',
                  tools: ['Event-driven architecture', 'Domain-driven design']
                },
                {
                  icon: '⚡',
                  title: 'Performance First',
                  description: 'Optimization at every layer',
                  tools: ['Web Vitals optimization', 'CDN edge caching']
                },
                {
                  icon: '🛡️',
                  title: 'Secure by Default',
                  description: 'Zero-trust implementation',
                  tools: ['OWASP Top 10 compliance', 'Automated security testing']
                },
                {
                  icon: '🔁',
                  title: 'CI/CD Pipelines',
                  description: 'Automated quality gates',
                  tools: ['GitHub Actions', 'ArgoCD', 'Kubernetes']
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="p-3 md:p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex items-start">
                    <span className="text-xl md:text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h4 className="font-mono text-sm md:text-base text-emerald-400 mb-1">{item.title}</h4>
                      <p className="text-sm md:text-base text-gray-300">{item.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1 md:gap-2">
                        {item.tools.map((tool) => (
                          <span 
                            key={tool}
                            className="px-2 py-1 text-[10px] md:text-xs bg-gray-900 rounded-full border border-emerald-400/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}