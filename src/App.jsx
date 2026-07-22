import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Proficiency from './components/Proficiency'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutMe from './components/Aboutme'
import GlowBackground from './components/GlowBackground';
import SectionCard from './components/SectionCard';
import { motion, useScroll, useTransform } from "framer-motion";
import Skills from './components/Skills'
import Certificates from './components/Certificates'

export default function App() {
  const { scrollYProgress } = useScroll();

  // Background glow intensity increases as you scroll down the whole page
  const bgGlow = useTransform(
    scrollYProgress,
    [0, 1],
    ["radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)", 
     "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.4) 0%, transparent 70%)"]
  );
  return (
    
    <div className="bg-surface-light dark:bg-surface-dark min-h-screen transition-colors duration-200">
      <GlowBackground />
      <Navbar />
      <SectionCard id='main'>
      <main className="max-w-container-max mx-auto px-gutter overflow-x-hidden">
        <Hero />
        <AboutMe />
        <Skills/>
        <WhatIDo />
        <Education />
        <Experience />
        <Certificates/>
        <Projects />
        <Contact />
      </main>
      </SectionCard>
      <Footer />
    </div>
  )
}
