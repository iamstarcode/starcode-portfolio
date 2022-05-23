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
]

export default projects
