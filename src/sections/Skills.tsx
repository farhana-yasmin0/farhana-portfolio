import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg-soft)] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Skills"
          title="My Skills"
          subtitle="Technologies and creative tools I use and continue to explore."
        />

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="mb-5 font-display text-xl font-bold tracking-tight text-[var(--text)]">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={`${category.title}-${skill.name}`}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.05 + skillIndex * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
