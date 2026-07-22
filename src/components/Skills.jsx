import { useState } from "react"

const skills = [
  {
    name: "C++",
    level: "Expert",
    description: "Strong DSA foundation — STL, competitive programming, and problem solving.",
    size: "col-span-2 row-span-2",
    color: "google-red",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    description: "ES6+, async patterns, and the backbone of all my full-stack projects.",
    size: "col-span-2 row-span-1",
    color: "google-yellow",
  },
  {
    name: "React",
    level: "Advanced",
    description: "Hooks, Redux Toolkit, component architecture for scalable frontends.",
    size: "col-span-1 row-span-2",
    color: "google-blue",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: "REST APIs, Express, and backend services for MERN stack apps.",
    size: "col-span-1 row-span-1",
    color: "google-green",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    description: "Schema design, aggregation pipelines, and MongoDB Atlas deployments.",
    size: "col-span-1 row-span-1",
    color: "google-green",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    description: "Utility-first styling, responsive design, and custom design tokens.",
    size: "col-span-1 row-span-1",
    color: "google-blue",
  },
  {
    name: "Git & GitHub",
    level: "Advanced",
    description: "Version control, branching workflows, and collaborative development.",
    size: "col-span-1 row-span-1",
    color: "google-red",
  },
  {
    name: "SQL",
    level: "Intermediate",
    description: "Relational schema design and querying with SQL Server.",
    size: "col-span-1 row-span-1",
    color: "google-red",
  },
  {
  name: "C#",
  level: "Intermediate",
  description: "Built enterprise apps with .NET, used during my Accenture internship.",
  size: "col-span-1 row-span-1",
  color: "google-blue",
},
{
  name: "Docker",
  level: "Intermediate",
  description: "Containerizing apps and services for consistent deployment environments.",
  size: "col-span-1 row-span-1",
  color: "google-green",
},
{
  name: "Python",
  level: "Intermediate",
  description: "Scripting, data structures practice, and automation tasks.",
  size: "col-span-1 row-span-1",
  color: "google-yellow",
},
]

const colorMap = {
  "google-blue": { text: "text-google-blue", bar: "bg-google-blue" },
  "google-red": { text: "text-google-red", bar: "bg-google-red" },
  "google-green": { text: "text-google-green", bar: "bg-google-green" },
  "google-yellow": { text: "text-google-yellow", bar: "bg-google-yellow" },
}

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      className="py-section-gap-mobile md:py-section-gap border-t border-outline-variant dark:border-outline mx-2 sm:mx-4 md:mx-8"
      id="skills"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-primary mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-30 gap-4">
        {skills.map((skill) => {
          const colors = colorMap[skill.color]
          const isHovered = hovered === skill.name

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              className={`${skill.size} relative rounded-xl border border-outline-variant dark:border-outline bg-surface-light dark:bg-surface-container-high overflow-hidden cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Default state */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className={`font-headline-md ${skill.size.includes("col-span-2") ? "text-headline-lg" : "text-headline-md"} font-bold ${colors.text}`}>
                  {skill.name}
                </span>
                <span className="text-on-surface-variant dark:text-outline-variant text-label-caps font-label-caps uppercase tracking-wide">
                  {skill.level}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 gap-2 transition-opacity duration-300 ${colors.bar} ${
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <span className="font-bold text-white text-body-md">{skill.name}</span>
                <p className="text-white/90 text-sm leading-snug">{skill.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}