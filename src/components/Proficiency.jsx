const skills = [
  { label: 'Data Structures & Algorithms', value: 85 },
  { label: 'Frontend (React / Redux)', value: 80 },
  { label: 'Backend (Node.js, ASP.NET Core)', value: 70 },
]

export default function Proficiency() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">Proficiency</h2>
      <div className="max-w-3xl space-y-10">
        {skills.map((skill) => (
          <div key={skill.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-body-md text-body-md font-semibold">{skill.label}</span>
              <span className="text-primary font-bold">{skill.value}%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-expertise rounded-full"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
