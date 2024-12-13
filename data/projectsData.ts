interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'huetiful-js',
    description: `TypeScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation.`,
    imgSrc: '/static/images/logo.svg',
    href: 'https://huetiful-js.com',
  },
  {
    title: '26 Pike Place Guest House',
    description: `Website for 26 Pike Place Guest House in Mutare, Zimbabwe.`,
    imgSrc: '/static/images/hero-1.jpeg',
    href: 'https://granyamul.com',
  },
]

export default projectsData
