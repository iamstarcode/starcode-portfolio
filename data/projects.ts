import { IProject } from '../types'
import tw from 'twin.macro'


const projects: IProject[] = [
  {
    id: 'my-portfolio',
    title: 'iamstarcode.com',
    subtitle: 'My portfolio website',
    about:
      'This website, where i dump some of the works have worked on, and where i test out new things i play with ',
    link: '/projects/my-portfolio',
    live_url: '#',
    platforms:["WEB"],
    year:"2022",
    color: tw`text-special`,
    stack: ["React","Next", "TailwindCSS"],
    cover: '/img/projects/portfolio-cover.png',
    images:['/img/projects/portfolio-cover.png','/img/projects/portfolio-0.png'],
    repo:"https://github.com/iamstarcode/starcode-portfolio"
  },

  {
    id: 'kings-card',
    title: 'Kings Card',
    subtitle: 'Gift card trading platform',
    about:
      'Kingscard is one of the most trusted online trading platforms in Nigeria',
    link: '/projects/kings-card',
    live_url: '#',
    platforms:["WEB", "MOBILE"],
    year:"2022",
    color: tw`text-blue-700`,
    stack: ["React","Next","TailwindCSS"],
    cover: '/img/projects/kingscard-cover.png',
    images:['/img/projects/kingscard-cover.png'],
    repo:null
  },

  {
    id: 'petlly',
    title: 'Petlly',
    subtitle: 'Pets app',
    about:
      'A simple website consuming a Pets API',
    link: '/projects/petlly',
    live_url: 'petlly.iamstarcode.com',
    platforms:["WEB"],
    year:"2021",
    color: tw`text-indigo-400`,
    stack: ["React", "TailwindCSS"],
    cover: '/img/projects/petlly-cover.png',
    images:['/img/projects/petlly-cover.png', '/img/projects/petlly-0.png'],
    repo:"https://github.com/iamstarcode/petly-react"
  },

  {
    id: 'cat-wiki',
    title: 'Cat Wiki',
    subtitle: 'For the love of cats',
    about:
      'A cats API consumption using Laravel as backend',
    link: '/projects/cat-wiki',
    live_url: 'cat-wiki.iamstarcode.com',
    platforms:["WEB"],
    year:"2021",
    color: tw`text-[#291507]`,
    stack: ["React","TailwindCSS","Laravel"],
    cover: '/img/projects/cat-wiki-cover.png',
    images:['/img/projects/cat-wiki-cover.png', '/img/projects/cat-wiki-0.png'],
    repo:"https://github.com/iamstarcode/cat-wiki"
  },
  {
    id: 'wordlens',
    title: 'Wordlens',
    subtitle: 'A simple dictionary',
    about:
      'A simple dictionary using dictionary API',
    link: '/projects/wordlens',
    live_url: 'wordlens.iamstarcode.com/',
    platforms:["WEB"],
    year:"2021",
    color: tw`text-[#0B0A1B]`,
    stack: ["TailwindCSS"],
    cover: '/img/projects/wordlens-cover.png',
    images:['/img/projects/wordlens-cover.png', '/img/projects/wordlens-0.png'],
    repo:"https://github.com/iamstarcode/wordlens"
  },

  {
    id: 'frontend-mentor-e-commerce',
    title: 'Product Page',
    subtitle: 'An e-commerce product page',
    about:
      'A frontendmentor.com challenge written in Vue',
    link: '/projects/frontend-mentor-e-commerce',
    live_url: 'starcode-dev.netlify.app/e-commerce',
    platforms:["WEB"],
    year:"2021",
    color: tw`text-[#ff7d1a]`,
    stack: ["Vue","TailwindCSS"],
    cover: '/img/projects/frontend-mentor-e-commerce-cover.png',
    images:['/img/projects/frontend-mentor-e-commerce-cover.png'],
    repo:"https://github.com/iamstarcode/e-commerce"
  }
]

export default projects
