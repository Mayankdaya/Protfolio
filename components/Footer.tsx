'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    'Social Media': [
      { name: 'GitHub', href: 'https://github.com/mayankdayal' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/mayankdayal' },
      { name: 'Twitter', href: 'https://twitter.com/mayankdayal' },
      { name: 'LeetCode', href: 'https://leetcode.com/mayankdayal' }
    ],
    'Contact': [
      { name: 'mayank.dayal@example.com', href: 'mailto:mayank.dayal@example.com' },
      { name: 'Bhopal, India', href: '#' },
      { name: 'Available for Remote Work', href: '#contact' }
    ]
  }

  return (
    <footer className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-[#030014]" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated SVG Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,100"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M100,0 L0,100"
            stroke="rgba(139, 92, 246, 0.1)"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
                  <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      MD
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Mayank Dayal</h3>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Building digital experiences with modern technologies and creative solutions.
              </p>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 
                          text-sm flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Mayank Dayal. All rights reserved.
              </div>
              
              {/* Additional Links */}
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-blue-500/0 via-blue-500/50 to-blue-500/0"
          animate={{
            height: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-purple-500/0 via-purple-500/50 to-purple-500/0"
          animate={{
            height: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </footer>
  )
} 