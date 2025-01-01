'use client'
import { motion } from 'framer-motion'

const techStack = [
  { name: 'React', color: '#61DAFB', years: '3+ years' },
  { name: 'Next.js', color: '#000000', years: '2+ years' },
  { name: 'TypeScript', color: '#3178C6', years: '3+ years' },
  { name: 'Node.js', color: '#339933', years: '4+ years' },
  { name: 'Tailwind', color: '#38B2AC', years: '2+ years' }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          animate={{
            y: [-10, -30, -10],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 text-sm text-blue-400 font-medium mb-8"
          >
            <motion.span
              className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Available for Work
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="text-gray-200 inline-block"
              whileHover={{ scale: 1.02 }}
            >
              Transforming Ideas into
            </motion.span>{' '}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 inline-block"
              whileHover={{ scale: 1.02 }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Digital Excellence
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Full Stack Developer with expertise in building scalable web applications 
            and delivering exceptional user experiences. Specialized in modern web technologies 
            and cloud architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                text-white font-medium group flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-sm text-gray-500 mb-6 uppercase tracking-wider"
              variants={fadeInUp}
            >
              Technical Expertise
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              variants={staggerContainer}
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 20px ${tech.color}40`
                  }}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                    hover:border-blue-500/50 transition-all duration-300 group relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  <div className="text-gray-300 font-medium mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                    {tech.years}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-gray-500 text-sm mb-2 tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EXPLORE
          </motion.span>
          <motion.div
            className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center p-1"
            animate={{ 
              boxShadow: [
                '0 0 0px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 0px rgba(59, 130, 246, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-1 bg-blue-500 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                backgroundColor: ['#3B82F6', '#8B5CF6', '#3B82F6']
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 