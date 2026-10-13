export type EducationEntry = {
  degree: string
  institution: string
  period: string
  detail?: string
}

export type CertificationEntry = {
  name: string
  issuer: string
  year: string
  url?: string
}

/**
 * Add verified education entries here. Leave empty until real information is available.
 */
export const education: EducationEntry[] = []

/**
 * Add verified certifications here. Leave empty until real information is available.
 */
export const certifications: CertificationEntry[] = []