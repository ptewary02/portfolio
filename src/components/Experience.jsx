import SectionCard from './SectionCard';

const experiences = [
  {
    title: 'Associate Software Engineer Intern',
    company: 'Accenture',
    period: 'INTERNSHIP',
    color: 'bg-google-blue',
    icon: 'assets/Accenture.png',
    duration: "May'26 - July'26",
    linkedin: 'https://www.linkedin.com/posts/pravesh-tewary-2a0ba5294_accentureinternship-proudaccentureintern2026-ugcPost-7482734384299814914-RWEZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdeEVgBshUetDDSc9qqD-4h461ZWN3ongc',
    description:
      'Worked on a C#/.NET enterprise audit application for a Fortune 500 energy client, with CI/CD pipeline work via Azure DevOps in an Agile/Scrum environment.',
  },
  {
    title: 'Summer Intern',
    company: 'Indian Institute of Technology (BHU)',
    period: 'INTERNSHIP',
    color: 'bg-google-yellow',
    icon: 'assets/IIT_BHU.png',
    duration: "May'25 - June'25",
    linkedin: 'https://www.linkedin.com/posts/pravesh-tewary-2a0ba5294_summerinternship-iitbhu-electricalengineering-ugcPost-7346451110427037696-ygKa/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdeEVgBshUetDDSc9qqD-4h461ZWN3ongc',
    description:
      'Developed mathematical models of DC motor characteristics in MATLAB, simulating speed vs. torque curves across 2 load conditions and analyzing performance over a speed range of 0–1500 RPM with approximately 92% model accuracy against theoretical values.',
  },
]

export default function Experience() {
  return (
    
    <section
      className="border-t py-section-gap-mobile mr-10 ml-10 border-outline-variant dark:border-outline"
      id="experience"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary mb-12">
        Experience
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <a
              key={exp.title}
              href={exp.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bento-card bg-surface-light dark:bg-surface-container-high rounded-xl shadow-sm border border-outline-variant dark:border-outline overflow-hidden block hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="h-24 bg-surface-container dark:bg-surface-container-low flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${exp.icon}`}
                  alt={exp.company}
                  className="h-12 object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h4 className="font-headline-md text-headline-md text-on-surface dark:text-on-surface">
                    {exp.title}
                  </h4>
                  <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface mt-1">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-surface mt-1">
                    {exp.duration}
                  </p>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-surface text-center">
                  {exp.description}
                </p>
              </div>
            </a>
          ))}
        </div>
    </section>
    
  )
}