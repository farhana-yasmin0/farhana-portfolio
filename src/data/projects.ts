export type ProjectStatus = 'In Development' | 'Concept' | 'Completed'

export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  status: ProjectStatus
  live?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio designed to present my skills, creative interests, projects, and journey as a Creative Developer.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    status: 'In Development',
  },
  {
    id: 2,
    title: 'AI Video Creation',
    description:
      'An AI-assisted creative video project exploring visual storytelling, scene composition, camera movement, music, and voice-over.',
    tech: ['AI Video Generation', 'Prompt Engineering', 'Creative Editing'],
    status: 'Concept',
  },
  {
    id: 3,
    title: 'Employee Attendance & Salary Management',
    description:
      'A project exploring employee attendance records and salary calculations, including salary, bonuses, and fines.',
    tech: [],
    status: 'Concept',
  },
]