import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Image as ImageIcon,
  MessageSquareText,
  Paintbrush,
  PenTool,
  Server,
  Sparkles,
  Terminal,
  Video,
  Wand2,
  Workflow,
} from 'lucide-react'

export type Skill = {
  name: string
  level?: string
  /** Approximate proficiency used for animated progress bars (0-100). */
  progress?: number
  icon: LucideIcon
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Generative Tools',
    skills: [
      { name: 'Artificial Intelligence Tools', level: 'Basic Knowledge', icon: Sparkles },
      { name: 'Generative AI Tools & Applications', level: 'Basic Knowledge', icon: Wand2 },
      { name: 'AI-Assisted Content Creation', level: 'Learning', icon: PenTool },
      { name: 'AI Image & Video Generation', level: 'Learning', icon: ImageIcon },
      { name: 'AI Coding Assistants', level: 'Learning', icon: Code2 },
    ],
  },
  {
    title: 'Prompt Engineering',
    skills: [
      { name: 'AI Prompt Engineering', level: 'Beginner Level', icon: MessageSquareText },
      { name: 'Creative Prompt Design', level: 'Beginner Level', icon: PenTool },
      { name: 'Image and Video Prompt Workflows', level: 'Learning', icon: Video },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Paintbrush },
      { name: 'JavaScript', level: 'Learning', icon: Braces },
      { name: 'React', level: 'Learning', icon: Atom },
      { name: 'TypeScript', level: 'Learning', icon: FileCode2 },
      { name: 'Node.js', level: 'Learning', icon: Server },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'OpenCode', icon: Terminal },
      { name: 'AI-Assisted Development Workflows', icon: Workflow },
    ],
  },
]