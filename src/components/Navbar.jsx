import { useState, useEffect } from 'react'
import { personalInfo } from "../data/portfolioData.js";

const links = [
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills'},
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleTheme = () => setDark((d) => !d)

  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-outline-variant sticky top-0 z-50 transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-container-max mx-auto h-16">
        
        {/* Logo Link (Added '#' to href) */}
        <div className="text-headline-md font-bold text-primary dark:text-inverse-primary cursor-pointer">
          <a href='#home'>
            <span> &lt; </span>
            <span className="font-[Agustina_Regular]">{personalInfo.name}</span>
            <span> /&gt; </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant dark:text-on-secondary hover:text-primary transition-colors font-body-md text-body-md"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Button fixed as an <a> tag */}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors active:scale-95 duration-150 inline-block"
          >
            Resume
          </a>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-surface-container-low transition-colors" 
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-primary">
              {dark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-colors" aria-label="Open menu">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      </div>
    </nav>
  )
}