'use client'
import { motion } from 'framer-motion'

export default function About() {
  const skills = {
    "Programming": [
      { name: "C++", level: 90, icon: "💻" },
      { name: "JavaScript", level: 85, icon: "🌐" },
      { name: "Python", level: 80, icon: "🐍" }
    ],
    "Frontend": [
      { name: "React", level: 88, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "HTML/CSS", level: 90, icon: "🎨" }
    ],
    "Backend": [
      { name: "Flask", level: 82, icon: "🔧" },
      { name: "RESTful APIs", level: 85, icon: "🔌" },
      { name: "MySQL", level: 85, icon: "📊" }
    ]
  }

  const experience = [
    {
      title: "Problem Solving",
      items: [
        "300+ DSA Problems Solved",
        "LeetCode Rating: 1800+",
        "Consistent Problem Solving"
      ],
      icon: "🎯"
    },
    {
      title: "Projects",
      items: [
        "15+ Full Stack Projects",
        "5+ Open Source Contributions",
        "3 Hackathon Wins"
      ],
      icon: "🚀"
    },
    {
      title: "Education",
      items: [
        "VIT Bhopal University",
        "B.Tech in Software Engineering",
        "CGPA: 8.5/10"
      ],
      icon: "🎓"
    }
  ]

  const TechSVGs = {
    Programming: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M8 16l-4-4 4-4m8 0l4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Frontend: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
          d="M9 9h6M9 12h6M9 15h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Backend: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M5 12h14M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="12" cy="12" r="9"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Database: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M12 6c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M4 3v12c0 1.657 3.582 3 8 3s8-1.343 8-3V3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Tools: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-yellow-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    ),
  }

  const ExperienceSVGs = {
    Education: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M12 14l9-5-9-5-9 5 9 5z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Experience: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    ),
    Projects: (
      <motion.svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    ),
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background SVG */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Circles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              background: `radial-gradient(circle, ${i === 0 ? '#60A5FA' : i === 1 ? '#A855F7' : '#EC4899'} 0%, transparent 70%)`,
              width: '40%',
              height: '40%',
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-500 via-purple-500 to-pink-500 pb-2"
              >
                About Me
              </h2>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              A passionate Software Engineer specializing in full-stack development and 
              algorithmic problem-solving
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl border border-white/10 space-y-6"
              >
                <div className="flex items-center space-x-4">
                  {TechSVGs[category as keyof typeof TechSVGs]}
                  <h3 className="text-xl font-medium text-blue-400">{category}</h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span>{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(experience).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl border border-white/10 space-y-6"
              >
                <div className="flex items-center space-x-4">
                  {ExperienceSVGs[category as keyof typeof ExperienceSVGs]}
                  <h3 className="text-xl font-medium text-blue-400">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.items.map((subItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="text-gray-400 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{subItem}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-10 bottom-10 w-20 h-20"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 opacity-50">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 