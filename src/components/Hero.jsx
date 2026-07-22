import { personalInfo, links } from "../data/portfolioData.js";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionCard from './SectionCard';

export default function Hero() {
  return (
    
    <section className="flex flex-col md:flex-row items-center justify-between md:py-section-gap gap-15 mr-10 ml-10" id="home">
      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface dark:text-inverse-primary h-12">
          Hello! I'am
        </h2>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface dark:text-inverse-primary">
          {personalInfo.name}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-secondary max-w-xl">
          {personalInfo.bio}
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#171515] text-white transition-all duration-200 ease-out hover:opacity-80  hover:scale-125 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5] text-white transition-all duration-200 ease-out hover:scale-125 hover:-translate-y-1 hover:shadow-lg active:scale-95 hover:opacity-80"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
          href={links.x}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white transition-all hover:scale-125 hover:-translate-y-1 hover:shadow-lg active:scale-95 hover:opacity-80"
            aria-label="X"
          >
            <FaXTwitter size={20} />
          </a>

          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-125 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 hover:opacity-80"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href={`mailto:${links.email}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-google-red text-white hover:scale-125 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 hover:opacity-80"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
        </div>
        
        <div className="flex gap-4 pt-6">
          <a href="#contact" className="px-8 py-3 rounded-lg bg-google-blue text-on-primary font-bold hover:shadow-lg transition-all">
            CONTACT ME
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Pravesh_Tewary_Resume.pdf"
            className="px-8 py-3 rounded-lg bg-google-blue text-on-primary font-bold hover:shadow-lg transition-all hover:bg-primary-container active:scale-95 duration-150 inline-block"
          >
            RESUME
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-80 h-80 md:w-105 md:h-105">
          <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-3xl animate-pulse" />
          <div className="w-full h-full rounded-full border-8 border-surface-container-high relative z-10 shadow-2xl bg-surface-container-low overflow-hidden">
            <img
              src={personalInfo.image}
              alt="Pravesh Tewary"
              className="w-full h-full object-cover scale-205 ml-3"
            />
          </div>
        </div>
      </div>
    </section>
    
  )
}
