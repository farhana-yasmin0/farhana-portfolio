export type Project = {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  live: string
  github: string
  featured?: boolean
}
export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Classroom Engagement Program',
    description: 'Designed interactive lesson plans, activities and assessment tools that boosted student participation and retention in a 50+ student classroom.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    tech: ['Lesson Planning', 'Assessment', 'Classroom Management'],
    live: 'https://classroom-demo.vercel.app',
    github: 'https://github.com/farhanayasmin/classroom-program',
    featured: true,
  },
  {
    id: 2,
    title: 'Local Business SEO Boost',
    description: 'On-page SEO, keyword research and content optimization for a local business, resulting in improved search rankings and organic traffic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['SEO', 'Keyword Research', 'Content Strategy'],
    live: 'https://seo-case-study.vercel.app',
    github: 'https://github.com/farhanayasmin/seo-boost',
  },
  {
    id: 3,
    title: 'Customer Support Playbook',
    description: 'Created scripts, FAQs and SOPs for a sales & support team to deliver consistent, high-quality customer service.',
    image: 'https://images.unsplash.com/photo-1556745757-8d76b395b0a2?w=800&q=80',
    tech: ['Customer Service', 'Sales Support', 'Documentation'],
    live: 'https://support-playbook.vercel.app',
    github: 'https://github.com/farhanayasmin/support-playbook',
  },
  {
    id: 4,
    title: 'School Event Coordination',
    description: 'Coordinated annual school events end-to-end: planning, vendor coordination, scheduling and on-the-day management.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    tech: ['Event Management', 'Coordination', 'Time Management'],
    live: 'https://event-coord.vercel.app',
    github: 'https://github.com/farhanayasmin/event-coordination',
  },
]