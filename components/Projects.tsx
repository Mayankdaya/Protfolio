'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and natural language processing.",
      tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      link: "https://github.com/yourusername/ai-chat",
      icon: (isHovered: boolean) => (
        <motion.svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-blue-500"
          initial={false}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.circle
            cx="12" cy="12" r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M12 8v8M8 12h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
        </motion.svg>
      )
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/yourusername/ecommerce",
      icon: (isHovered: boolean) => (
        <motion.svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-purple-500"
          initial={false}
          animate={isHovered ? { scale: 1.2 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="9" cy="19" r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.svg>
      )
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with interactive animations and 3D elements.",
      tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
      link: "https://github.com/yourusername/portfolio",
      icon: (isHovered: boolean) => (
        <motion.svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-pink-500"
          initial={false}
          animate={isHovered ? {
            rotateY: 180,
            transition: { duration: 0.8 }
          } : {}}
        >
          <motion.rect
            x="3" y="3" width="18" height="18" rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M12 8v8M8 12h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
        </motion.svg>
      )
    }
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/90 to-[#030014]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030014] to-transparent" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-500 via-purple-500 to-pink-500"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Explore some of my recent work and personal projects
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative z-10 glass-card p-6 rounded-2xl border border-white/10 
                  space-y-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300"
                >
                  {/* Project Icon */}
                  <div className="w-16 h-16">
                    {project.icon(hoveredIndex === index)}
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 
                      transition-colors duration-300"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-blue-500/10 
                            border border-blue-500/20 text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-blue-400 
                      hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                  rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        style={{
          scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1])
        }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      />
    </section>
  )
} 