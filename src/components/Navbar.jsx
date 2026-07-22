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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleTheme = () => setDark((d) => !d)
  const closeMenu = () => setMenuOpen(false)

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
            href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
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
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined text-primary">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-outline-variant ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-on-surface-variant dark:text-on-secondary hover:text-primary transition-colors font-body-md text-body-md py-2"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-3 pt-3">
            <a
              href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex-1 text-center px-4 py-2 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors active:scale-95 duration-150"
            >
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-container-low transition-colors shrink-0"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-primary">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}