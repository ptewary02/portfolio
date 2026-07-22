import { personalInfo, links } from "../data/portfolioData.js";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdEmail, MdLanguage } from "react-icons/md";
import SectionCard from './SectionCard';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
]

const moreLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Footer() {
  return (
    <SectionCard id='Footer' className="mb-0">
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-outline-variant dark:border-outline">
      <div className="max-w-container-max mx-auto px-gutter py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1 flex items-start">
          <span className="font-[Agustina_Regular] text-headline-md text-primary dark:text-inverse-primary">
            {personalInfo.name}
          </span>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="font-bold text-body-lg text-on-surface dark:text-inverse-primary mb-4">
            Navigation
          </h4>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* More */}
        <div className="space-y-3">
          <h4 className="font-bold text-body-lg text-on-surface dark:text-inverse-primary mb-4">
            More
          </h4>
          {moreLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-bold text-body-lg text-on-surface dark:text-inverse-primary mb-4">
            Contact
          </h4>
          <a
            href={`mailto:${links.email}`}
            className="flex items-center gap-2 text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors"
          >
            <MdEmail size={18} />
            {links.email}
          </a>
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors"
            >
              <MdLanguage size={18} />
              {links.website}
            </a>
          )}

          <div className="flex gap-4 pt-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-on-surface dark:text-inverse-primary hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-on-surface dark:text-inverse-primary hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-on-surface dark:text-inverse-primary hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant dark:border-outline">
        <div className="max-w-container-max mx-auto px-gutter py-6 text-center">
          <p className="text-on-surface-variant dark:text-outline-variant text-sm">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </SectionCard>
  )
}