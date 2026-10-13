export type Education = { degree: string; school: string; period: string; detail: string }
export const education: Education[] = [
  { degree: 'Bachelor of Arts (B.A.)', school: 'Rajbari Government College — Dhaka, National University', period: '2017', detail: 'CGPA: 2.33 / 4.00' },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'Technical School & College, Rajbari — Building Maintenance & Construction', period: '2014', detail: 'Bangladesh Technical Education Board · CGPA: 3.22 / 5.00' },
  { degree: 'Secondary School Certificate (SSC)', school: 'Technical School & College, Rajbari — Building Maintenance', period: '2011', detail: 'Bangladesh Technical Education Board · CGPA: 4.03 / 5.00' },
]
export type Cert = { name: string; issuer: string; year: string }
export const certs: Cert[] = [
  { name: 'Digital Marketing Fundamentals', issuer: 'Google Digital Garage', year: '2023' },
  { name: 'SEO Basics Certification', issuer: 'HubSpot Academy', year: '2023' },
  { name: 'Classroom Management Workshop', issuer: 'Teacher Development Center', year: '2022' },
]