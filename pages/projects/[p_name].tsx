import { Children, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../../components'
import DefaultLayout from '../../layouts/default'
import Image from 'next/image'
import Link from 'next/link'

import { useSpring, animated, config, easings } from '@react-spring/web'


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { Affix, Switch, ActionIcon, Badge } from '@mantine/core';

import { BiMoon } from 'react-icons/bi';



import { BiMap } from 'react-icons/bi'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IProject } from '../../types'
import { useRouter } from 'next/router'
import ClientOnly from '../../utils/clientonly'

import projects from '../../data/projects'



const Project = () => {


  const router = useRouter()
  const { p_name } = router.query
  //console.log(p_name)


  const project = projects.find(project => project.id === p_name)

  console.log(project)
  return <>

    <div tw="w-full flex flex-col">
      <ClientOnly>
        <AnimationOnScroll tw="p-4 lg:p-8" animateOnce={true} animateIn="animate__bounceInLeft">
          <h2
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            tw=" text-sm text-text-color lg:( text-lg) font-bold mt-5">
            Hi!, I'm Bakare Abiola alias!
          </h2>
          <h2 tw="text-6xl mt-2 text-special">Starcode</h2>

          <h2 tw=" text-sm text-text-color lg:( text-lg) font-bold mt-5">
            catchy right? Lol
          </h2>

          <h2 tw="block text-sm text-text-color text-align[justify] lg:(text-left text-lg) font-bold mt-5">
            Starcode is a freelancer and a front-end developer, with a passion for building and delivering great ideas into digital products.

            When he's not writting codes, He hang's out with Bruce Wayne, am not kidding I hang out with batsy! Loves to play COD after long hours writting codes.

            Loves  learning new things and also sharing with the community and also support new devs trasitioning into tech,

          </h2>
        </AnimationOnScroll>
      </ClientOnly>

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
    </div>
  </>
}


Project.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default Project
