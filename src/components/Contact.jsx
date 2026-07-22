import SectionCard from './SectionCard';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { personalInfo, links } from "../data/portfolioData.js";

export default function Contact() {
  return (
    
    <section className="py-section-gap-mobile mx-2 sm:mx-4 md:mx-8 border-t border-outline-variant dark:border-outline" id="contact">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary">Reach out to me!</h2>
          <p className="text-on-surface-variant dark:text-on-primary uppercase tracking-widest text-xs font-bold">
            Discussing SWE roles, referrals, or a project? My inbox is open.
          </p>
          <p className="font-bold text-lg dark:text-on-primary">
            B.Tech EE student · Building full-stack projects · Open to SWE opportunities
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
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-8 border-primary-container shadow-2xl bg-surface-container-low flex items-center justify-center">
            <div className="w-full h-full rounded-full border-8 border-surface-container-high relative z-10 shadow-2xl bg-surface-container-low overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${personalInfo.image}`}
                alt="Pravesh Tewary"
                className="w-full h-full object-cover scale-205 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
