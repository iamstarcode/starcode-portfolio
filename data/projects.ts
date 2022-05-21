import { IProject } from '../types'
import tw from 'twin.macro'
import { BiMap } from 'react-icons/bi'

import { FaHtml5, FaReact } from 'react-icons/fa'
import { ReactElement } from 'react'

import { Button, Logo } from '../components'

import Tool from '../components/Tool'

const projects: IProject[] = [
  {
    id: 'my-portfolio',
    title: 'iamstarcode.com',
    subtitle: 'My portfolio website',
    about:
      'This website, where i dump some of the works have worked on, and where i test out new things i play with ',
    link: '/projects/my-portfolio',
    live_url: '#',
    platforms:["WEB","MOBILE"],
    year:"2022",
    color: tw`text-special`,
    stack: ["React","Next", "TailwindCSS"],
    cover: '/img/projects/portfolio-cover.png',
    images:['/img/projects/portfolio-cover.png','/img/projects/test2.png', '/img/projects/test2.png','/img/projects/test2.png']
  },
]

export default projects
