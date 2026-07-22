import SectionCard from './SectionCard';

const techIcons = [
  { icon: 'html', color: 'text-orange-500' },
  { icon: 'css', color: 'text-blue-500' },
  { icon: 'javascript', color: 'text-yellow-500' },
  { icon: 'east', color: 'text-blue-400' }, // React
  { icon: 'code', color: 'text-green-600' }, // Node
  { icon: 'database', color: 'text-primary' }, // MongoDB / SQL Server
  { icon: 'dns', color: 'text-purple-500' }, // .NET / C#
  { icon: 'terminal', color: 'text-on-surface' },
]

const points = [
  'Build full-stack web apps end to end — React/Redux front ends on Node.js/Express or ASP.NET Core MVC back ends',
  'Practice data-structure-heavy system design: caching, priority queues, graph algorithms, distributed job queues',
  'Debug and deploy across real infrastructure — Vercel, Render, MongoDB Atlas, Redis, Azure DevOps CI/CD',
]

export default function WhatIDo() {
  return (
    
    <section className="border-t border-outline-variant dark:border-outline py-section-gap-mobile md:py-section-gap-mobile mx-2 sm:mx-4 md:mx-8" id="skills">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-full max-w-md bg-surface-container-low rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
            <span className="material-symbols-outlined text-[200px] text-primary/20 absolute -bottom-10 -right-10">
              code
            </span>
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {techIcons.map((tech, i) => (
                <div key={i} className="p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform">
                  <span className={`material-symbols-outlined ${tech.color}`}>{tech.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-on-primary">What I do</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary uppercase tracking-widest font-bold">
            Aspiring software engineer
          </p>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="material-symbols-outlined text-google-yellow">bolt</span>
                <span className="font-body-md text-body-md text-on-surface-variant dark:text-on-secondary">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    
  )
}
