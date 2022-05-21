import { Children, Dispatch, ReactElement, SetStateAction, useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../../components'
import DefaultLayout from '../../layouts/default'
import Image from 'next/image'
import Link from 'next/link'

import { useSpring, animated, config, easings, useSprings } from '@react-spring/web'


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { Affix, Switch, ActionIcon, Badge } from '@mantine/core';
import { IProject } from '../../types'
import { useRouter } from 'next/router'
import { BsLink45Deg, BsQuestionCircle } from 'react-icons/bs'
import projects from '../../data/projects'

import {
  SiCss3,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

import { ImArrowLeft2 } from "react-icons/im"
import useMeasure from 'react-use-measure'
import { useDrag } from '@use-gesture/react'
import { clamp } from "lodash"

const Project = () => {


  const router = useRouter()
  const { p_name } = router.query
  const project = projects.find(project => project.id === p_name)

  const styles = {
    card: tw`p-1 flex space-x-2 text-sm justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg`
  }

  const getIcon = (icon: string) => {
    let jsx: JSX.Element
    switch (icon.toLocaleLowerCase()) {
      case "react":
        jsx = <SiReact size="34" color="cyan" />
        break;
      case "next":
        jsx = <SiNextdotjs size="34" color="black" />
        break
      case "tailwindcss":
        jsx = <SiTailwindcss size="34" color="cyan" />
        break;
      default:
        jsx = <BsQuestionCircle size="34" color="red" />
    }

    return jsx
  }

  const index = useRef(0)
  const [ref, { width }] = useMeasure()

  const [props, api] = useSprings(
    //project?.images.length ? project?.images.length : 0,
    4,
    i => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: 'block',
    }),
    [width]
  )

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > width / 2) {
      //index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, project?.images.length ? project?.images.length : 0 - 1)
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, 4 - 1)
      cancel()
    }
    api.start(i => {
      //if it is the first and also if it is the start
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })


  console.log(project)
  return <>
    {project && <div tw="w-full mb-16">
      <AnimationOnScroll tw="p-4 lg:p-8" animateOnce={true} animateIn="animate__bounceInLeft">
        <div tw="my-8 md:(my-10)" css={[project.color]}>
          <ImArrowLeft2 size="28" />
        </div>
        <section tw=" mt-5 md:(flex flex-row)">

          <div>
            <h2 tw="font-size[2.65rem] mt-2" css={[project.color]}>{project.title}</h2>
            <h2 tw=" text-lg leading-5 text-text-color lg:( text-xl) my-3">
              {project.about}
            </h2>
          
            <a href={project.live_url} tw=" inline-flex space-x-2" css={[project.color]} target="_blank">
              <BsLink45Deg size="24" />
              iamstarcode.com
            </a>
          </div>
          <div ref={ref} tw="height[13rem] w-full md:(height[25rem] w-[85%])">
            <div tw="relative w-full h-full overflow-hidden ">
              {props.map(({ x, display, scale }, i) => (
                <animated.div tw="absolute w-full h-full overflow-hidden" {...bind()} key={i} style={{ display, x }}>
                  <animated.div
                    tw="w-full h-full bg-cover bg-center touch-action[none] box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)]
                  "
                    style={{ scale, backgroundImage: `url(${project.images[i]})` }} />
                </animated.div>
              ))}
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll tw="p-4 lg:p-8" animateOnce={true} animateIn="animate__bounceInLeft">
        <section tw="flex flex-col space-y-6">
          <div tw="inline-flex items-center space-x-2">
            <h2 tw="text-text-color font-medium">Year:</h2>
            <Badge
              tw="bg-base-100"
              css={[project.color]}
            >
              {project.year}
            </Badge>
          </div>
          <div tw="inline-flex items-center space-x-2">
            <h2 tw="text-text-color font-medium">Platform:</h2>
            <div tw="inline-flex items-center space-x-1">
              {project.platforms.map((platform: string, index: number) => (
                <Badge
                  tw="bg-base-100"
                  css={[project.color]}
                  key={index}>
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 tw="text-text-color font-medium">Stack:</h2>
            <div tw="w-full flex flex-wrap space-y-4 items-baseline">
              {project.stack.map((tool: any, index: number) => (
                <div key={index} tw="inline-flex items-center mr-2" css={[styles.card]}>
                  {getIcon(tool)}
                  <h2 css={[project.color]} tw="font-medium">{tool}</h2>
                </div>
              ))}
            </div>

            <div tw="inline-flex items-center space-x-4 mt-3">
              <h2 tw="text-text-color font-medium">Source:</h2>
              <div tw="p-2 cursor-pointer" css={[styles.card]}>
                <SiGithub size="24" />
              </div>
            </div>
          </div>
        </section>

      </AnimationOnScroll>

      {/*   <div
        tw="overflow-hidden w-full box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer">
        <div tw="w-full">
          <Image
            src={cover}
            height="200"
            width="300"
            layout="responsive"
            alt="starcode picture"
          />
        </div>
        <div tw="px-2 py-1 bg-base-100">
          <h2 css={[color]}
            tw="text-sm font-medium lg:(text-lg)">
            {title}
          </h2 >

          <h1 tw="text-text-color text-lg font-medium lg:(text-xl)">
            {subtitle}
          </h1>
        </div>
      </div>
 */}
    </div>}
  </>
}


Project.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default Project
