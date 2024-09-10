interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'huetiful-js',
    description: `JavaScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation.`,
    imgSrc: '/static/images/huetiful.png',
    href: 'https://huetiful-js.com',
  },
  {
    title: '26 Pike Place Guest House',
    description: `Website for 26 Pike Place Guest House in Mutare, Zimbabwe.`,
    imgSrc: '/static/images/pikeplace.png',
    href: 'https://granyamul.com',
  },
]

export default projectsData
