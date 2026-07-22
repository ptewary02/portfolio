import SectionCard from './SectionCard';

const projects = [
  {
    name: 'SmartCab',
    description:
      'MERN ride-sharing platform showcasing six DSA concepts — Dijkstra\'s algorithm, a custom Min-Heap, LRU Cache, Geohash + Redis, BullMQ queues, and a graph adjacency list.',
    stack: 'React · Node.js · MongoDB · Redis · Express',
    githubLink: 'https://github.com/ptewary02/SmartCab',
    liveLink: 'https://smart-cab-navy.vercel.app/',
    color: 'google-blue',
  },
  {
    name: 'AlgoForge',
    description:
      'A coding practice platform with a React/Redux frontend and Node.js/Express backend, deployed on Vercel + Render with MongoDB Atlas and Redis.',
    stack: 'React · Redux · Node.js · Express · MongoDB · JavaScript',
    githubLink: 'https://github.com/ptewary02/AlgoForge/tree/main',
    liveLink: 'https://algo-forge-mauve.vercel.app/',
    color: 'google-red',
  },
  {
    name: 'Contract Employee Tracker',
    description:
      'An ASP.NET Core MVC app with a separate Data Access Layer, EF Core, and SQL Server for tracking contract employees.',
    stack: 'ASP.NET Core MVC · EF Core · SQL Server',
    githubLink: 'https://github.com/ptewary02/ContractDotCom',
    liveLink: 'https://github.com/ptewary02/ContractDotCom',
    color: 'google-green',
  },
  {
    name: 'Gym Buddy - AI',
    description: 'Gym Buddy is an AI-powered fitness web app that solves motivation and personalization problems in fitness. It uses AI to generate diet plans, matches compatible gym partners, and keeps users engaged through streaks and leaderboards.',
    stack: 'TypeScript · JavaScript',
    githubLink: 'https://github.com/ptewary02/Gym-Buddy-AI',
    liveLink: 'https://ptewary02.github.io/Gym-Buddy-AI/',
    color: 'google-yellow',
  },
]

const colorClasses = {
  'google-blue': { bar: 'bg-google-blue', text: 'text-google-blue', border: 'border-google-blue' },
  'google-red': { bar: 'bg-google-red', text: 'text-google-red', border: 'border-google-red' },
  'google-green': { bar: 'bg-google-green', text: 'text-google-green', border: 'border-google-green' },
  'google-yellow': { bar: 'bg-google-yellow', text: 'text-google-yellow', border: 'border-google-yellow' },
}

export default function Projects() {
  return (
    
    <section
      className="py-section-gap-mobile mr-10 ml-10 border-t border-outline-variant dark:border-outline"
      id="projects"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const colors = colorClasses[project.color]
          return (
            <div
              key={project.name}
              className="bento-card bg-surface-light dark:bg-surface-container-high border border-outline-variant dark:border-outline rounded-xl flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className={`h-1.5 ${colors.bar}`} />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <a
                    href={project.githubLink}
                    target={project.githubLink !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 mb-2 w-fit hover:opacity-80 transition-opacity"
                  >
                    <span className={`material-symbols-outlined ${colors.text}`}>book</span>
                    <span className="font-bold text-lg text-on-surface dark:text-on-surface">
                      {project.name}
                    </span>
                  </a>
                  <p className="text-on-surface-variant dark:text-on-surface-variant text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className={`text-xs font-label-code ${colors.text}`}>
                    {project.stack}
                  </div>
                  <a
                    href={project.liveLink}
                    target={project.liveLink !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`text-xs font-bold px-3 py-1.5 rounded-md border ${colors.border} ${colors.text} hover:${colors.bar} hover:text-white transition-colors whitespace-nowrap`}
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
    
  )
}