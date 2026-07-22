import { personalInfo } from "../data/portfolioData.js";

export default function AboutMe() {
  return (
    
    <section
      className="border-t border-outline-variant dark:border-outline relative overflow-hidden md:py-section-gap-mobile animate-fade-in mx-2 sm:mx-4 md:mx-8"
      id="about"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-gutter text-center space-y-8">
        <div className="text-google-blue font-bold tracking-widest text-label-caps uppercase">
            About Me
            </div>

            <h2 className="text-headline-xl font-headline-xl text-on-surface dark:text-inverse-primary">
            Hi There!
            </h2>

        <p className="text-body-md text-on-surface-variant dark:text-white/90 leading-relaxed max-w-3xl mx-auto">
          My name is {personalInfo.name}. {personalInfo.aboutme}
        </p>

        <div className= " pt-8 space-y-4">
          <div className="text-on-surface-variant dark:text-white/60 text-label-caps italic">
            Want to know more about me!
          </div>
          <div className="flex justify-center gap-4 text-body-md font-bold text-on-surface dark:text-white">
            <a href="#contact" className="hover:text-google-green transition-colors">
              Let's Connect
            </a>
            
          </div>
        </div>
      </div>
    </section>
    
  )
}