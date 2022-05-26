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
    cover: '/img/projects/portfolio-mokup.png',
    images:['/img/projects/portfolio-mokup.png','/img/projects/portfolio-mokup.png', '/img/projects/portfolio-mokup.png','/img/projects/portfolio-mokup.png']
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
    images:['/img/projects/petlly-cover.png', '/img/projects/petlly-0.png']
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
    images:['/img/projects/wordlens-cover.png', '/img/projects/wordlens-0.png']
  }
]

export default projects
