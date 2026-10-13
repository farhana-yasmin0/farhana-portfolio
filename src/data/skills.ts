export type Skill = { name: string; icon: string; level: number; category: 'teaching' | 'marketing' | 'soft' | 'tools' }
export const skills: Skill[] = [
  { name: 'Teaching & Classroom Management', icon: '📚', level: 90, category: 'teaching' },
  { name: 'Lesson Planning', icon: '📝', level: 85, category: 'teaching' },
  { name: 'Student Assessment', icon: '✅', level: 82, category: 'teaching' },
  { name: 'Digital Marketing', icon: '📣', level: 75, category: 'marketing' },
  { name: 'Basic SEO', icon: '🔍', level: 72, category: 'marketing' },
  { name: 'Social Media Marketing', icon: '📱', level: 78, category: 'marketing' },
  { name: 'Communication', icon: '💬', level: 95, category: 'soft' },
  { name: 'Teamwork', icon: '🤝', level: 92, category: 'soft' },
  { name: 'Time Management', icon: '⏱️', level: 88, category: 'soft' },
  { name: 'Project Coordination', icon: '📋', level: 78, category: 'soft' },
  { name: 'Customer Service', icon: '😊', level: 86, category: 'tools' },
  { name: 'Sales Support', icon: '🛒', level: 80, category: 'tools' },
]