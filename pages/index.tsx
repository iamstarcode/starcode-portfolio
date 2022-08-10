import { Children, Dispatch, ReactElement } from 'react'
import tw from 'twin.macro'
import DefaultLayout from '../layouts/default'
import Image from 'next/image'
import Link from 'next/link'




import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { Badge } from '@mantine/core';

import { IBlogProps } from '../types'
import nProjects from '../data/projects'
import nBlogs from '../data/blogs'



import { BiMap } from 'react-icons/bi'
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IProject } from '../types'
import Card from '../components/Card'

import { motion } from 'framer-motion'
import FloatingCard from '../components/FloatingCard'





const App = () => {

  const projects = nProjects.slice(0, 4)
  const blogs = nBlogs.slice(0, 2)

  const transition = {
    type: "spring",
    damping: 10,
    stiffness: 110
  }

  const viewport = {
    once: true
  }

  return <>
    <div tw="w-full grid grid-cols-1 lg:grid-cols-2">
      <motion.div tw="p-4 lg:p-8" initial={{ x: -300 }} whileInView={{ x: 0 }} transition={transition} viewport={viewport}>
        <h2
          tw=" text-sm text-text-color lg:( text-lg) font-bold mt-5">
          Hi!, I'm Bakare Abiola alias!
        </h2>
        <h2 tw="text-6xl mt-2 text-special">Starcode</h2>
        <h2 tw=" text-sm text-text-color lg:( text-lg) font-bold mt-5">
          catchy right? Lol
        </h2>
        <h2 tw="block text-sm text-text-color text-align[justify] lg:(text-left text-lg) font-bold mt-5">
          Starcode is a freelancer and a front-end developer, with a passion for building and delivering great ideas into digital products.
          When he's not writting codes, He hang's out with Bruce Wayne, am not kidding I hang out with batsy! Also loves to play Call Of Duty after long hours writting codes.
          Loves  learning new things and also sharing with the community and also support new devs trasitioning into tech.
        </h2>
      </motion.div>
      <div tw="w-full flex justify-center items-center">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={transition} viewport={viewport}>
          <div tw="relative flex justify-center items-center w-52 h-52 mt-5  box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-xl">

            <FloatingCard styles={{ position: tw`absolute top-0 -left-8 z-40` }} >
              <SiHtml5 size="34" color="orange" tw="" />
            </FloatingCard>

            <FloatingCard styles={{ position: tw`absolute top-24 -left-4 z-40` }} >
              <SiReact size="34" color="cyan" />
            </FloatingCard>

            <FloatingCard styles={{ position: tw`absolute -bottom-4 -left-6 z-40` }} >
              <SiCss3 size="34" color="blue" />
            </FloatingCard>

            <FloatingCard styles={{ position: tw`absolute -bottom-8 left-20 z-40` }} >
              <SiTailwindcss size="34" color="cyan" />
            </FloatingCard>

            <FloatingCard styles={{ position: tw`absolute bottom-2 right-0 z-40` }} >
            <SiNextdotjs size="34" color="black" />
            </FloatingCard>

            <FloatingCard styles={{ position: tw`absolute top-2 right-2 z-40` }} >
              <div tw="bg-black p-0">
                <SiJavascript size="34" color="yellow" />
              </div>
            </FloatingCard>

            <div
              tw="flex flex-col items-center justify-center py-5"
            >
              <Image
                src="/img/me.jpg"
                height="108"
                width="108"
                alt="starcode picture"
                tw="rounded-full h-16 w-16"
              />
              <h2 tw="text-xs text-special font-medium mt-2">Bakare Abiola</h2>
              <div tw="inline-flex items-center mt-2 "> <BiMap color="red" /> <p tw="text-sm text-text-color">Gotham</p></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div tw="px-4 lg:col-span-2 mt-16 mb-10  ">
        <h2
          tw="text-sm text-text-color py-1 font-bold border-b-2 border-b-special lg:(text-left text-lg)">
          Projects
        </h2>
        <div tw="py-4 lg:p-8 mx-auto md:max-w-5xl">
          <div tw="grid grid-cols-1 gap-3 md:(grid-cols-2 gap-5)">
            {projects && projects.map(({ title, link, color, subtitle, cover }: IProject, index: number) => (
              <div key={index} >
                <Card
                  title={title}
                  link={link}
                  color={color}
                  subtitle={subtitle}
                  cover={cover}
                  type="project"
                />
              </div>
            ))}
          </div>
        </div>
        <div tw="flex justify-start mt-5 md:(justify-end)">
          <Link passHref href="/projects">
            <Badge
              size="xl"
              tw="p-2 bg-special-bg text-text-color normal-case cursor-pointer">
              See More
            </Badge>
          </Link>
        </div>
      </div>

      <div tw="px-4 lg:col-span-2 mt-16 mb-10  ">
        <h2
          tw="text-sm text-text-color py-1 font-bold border-b-2 border-b-special lg:(text-left text-lg)">
          Blog Post
        </h2>
        <div tw="py-4 lg:p-8 mx-auto md:max-w-5xl">
          <div tw="grid grid-cols-1 gap-3 md:(grid-cols-2 gap-5)">
            {blogs.map(({ title, link, cover }: IBlogProps, index: number) => (
              <div key={index}>
                <Card
                  link={link}
                  subtitle={title}
                  cover={cover}
                  type="blog"
                />
              </div>
            ))}
          </div>
        </div>

        <div tw="flex justify-start mt-5 md:(justify-end)">
          <Link passHref href="/blogs">
            <Badge
              size="xl"
              tw="p-2 bg-special-bg text-text-color normal-case cursor-pointer">
              See More
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  </>
}
App.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default App
