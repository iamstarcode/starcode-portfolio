import { IProject } from '../types'
import tw from 'twin.macro'

const projects: IProject[] = [
  {
    id:"my-portfolio",
    title: 'Starcode',
    link: '/projects/my-portfolio',
    color: tw`text-special`,
    subtitle: 'My portfolio website',
    stack: ['React', 'Next'],
    cover: '/img/projects/test.png',
  },

  {
    id:"my-other",
    title: 'Other',
    link: '/projects/my-other',
    color: tw`text-special`,
    subtitle: 'My portfolio website',
    stack: ['React', 'Next'],
    cover: '/img/projects/test.png',
  },
]

export default projects
