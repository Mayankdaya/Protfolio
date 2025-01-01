'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]"
          >
            {/* Loading Animation */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full border-2 border-blue-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  borderRadius: ["50%", "30%", "50%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-purple-500"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="min-h-screen bg-[#030014] overflow-hidden">
        <Navbar />
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {/* Hero Section */}
          <section id="home" className="relative">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="relative">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative">
            <Contact />
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>

        {/* Floating Navigation Dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="space-y-4">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="block w-3 h-3 rounded-full bg-white/20 hover:bg-blue-500 
                  transition-colors duration-300"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{
            scaleX: 0
          }}
          animate={{
            scaleX: 1
          }}
          transition={{
            duration: 0.5
          }}
        />

        {/* Background Gradient Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 
            rounded-full filter blur-[120px] opacity-50" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 
            rounded-full filter blur-[120px] opacity-50" />
        </div>
      </main>
    </>
  )
}
