import { Children, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../components'
import ThemeToggle from '../components/ThemeToggle'
import DefaultLayout from '../layouts/default'
import Image from 'next/image'
import Link from 'next/link'

import { useSpring, animated, config, easings } from '@react-spring/web'


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { Affix, Switch, ActionIcon } from '@mantine/core';

import { BiMoon } from 'react-icons/bi';



import { BiMap } from 'react-icons/bi'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IProject } from '../types'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],

  card: tw` w-11 h-11 flex justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg`

}

const rand = (min: number, max: number) => {
  return { x: Math.floor(min + Math.random() * (max - min)), y: Math.floor(min + Math.random() * (max - min)) }
}


const setSpring = ({ xPos, yPos }: { xPos: number, yPos: number }) => {
  return useSpring({
    from: { y: 0, x: 0 },
    to: { y: yPos, x: xPos },
    config: config.molasses
  })
}

const setIntervalX = (setNextPos: Dispatch<SetStateAction<{
  x: number;
  y: number;
}>>) => {
  setInterval(() => {
    const { x, y } = rand(-50, 50)
    setNextPos({ x, y })
  }, 5000)
}
const App = () => {

  const [htmlPos, setHtmlPos] = useState(rand(-100, 100))
  const [cssPos, setCSSPos] = useState(rand(-100, 100))
  const [tailwindPos, setTailwindPos] = useState(rand(-100, 100))
  const [javaScriptPos, setJavasriptPos] = useState(rand(-100, 100))
  const [reactPos, setReactPos] = useState(rand(-100, 100))
  const [nextPos, setNextPos] = useState(rand(-100, 100))

  const reactSpring = setSpring({ xPos: reactPos.x, yPos: reactPos.y })
  const html5Spring = setSpring({ yPos: htmlPos.y, xPos: htmlPos.x })
  const nextSpring = setSpring({ yPos: nextPos.y, xPos: nextPos.x })
  const cssSpring = setSpring({ yPos: cssPos.y, xPos: cssPos.x })
  const tailwindSpring = setSpring({ yPos: tailwindPos.y, xPos: tailwindPos.x })
  const javascriptSpring = setSpring({ yPos: javaScriptPos.y, xPos: javaScriptPos.x })

  useEffect(() => {
    setIntervalX(setHtmlPos)
    setIntervalX(setReactPos)
    setIntervalX(setNextPos)
    setIntervalX(setCSSPos)
    setIntervalX(setTailwindPos)
    setIntervalX(setJavasriptPos)
  }, [])

  const projects: IProject[] = [
    {
      title: "Portfolio",
      link: '/project/portfolio',
      color: tw`color[green]`,
      subtitle: "My portfolio website",
      stack: ["React", "Next"],
      image: "/img/projects/test.png"
    }
  ]

  return <>
    <Affix position={{ bottom: 20, right: 10 }}>
      <ActionIcon variant="filled" size="lg" tw="bg-special-bg">
        <BiMoon size="34" />

      </ActionIcon>
    </Affix>
    <div tw="w-full grid grid-cols-1 lg:grid-cols-2">
      <AnimationOnScroll tw="p-4 lg:p-8" animateIn="animate__bounceInLeft">
        <h2
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          tw=" text-sm text-center text-text-color lg:(text-left text-lg) font-bold mt-5">
          Hi!, I'm Bakare Abiola alias!
        </h2>
        <h2 tw="text-6xl mt-2 text-center text-special lg:(text-left)">Starcode</h2>

        <h2 tw=" text-sm text-center text-text-color lg:(text-left text-lg) font-bold mt-5">
          catchy right? Lol
        </h2>

        <h2 tw="block text-sm text-text-color text-align[justify] lg:(text-left text-lg) font-bold mt-5">
          Starcode is a freelancer and a front-end developer, with a passion for building and delivering great ideas into digital products.

          When he's not writting codes, He hang's out with Bruce Wayne, am not kidding I hang out with batsy! Loves to play COD after long hours writting codes.

          Loves  learning new things and also sharing with the community and also support new devs trasitioning into tech,

        </h2>
      </AnimationOnScroll>

      <div tw="w-full flex justify-center items-center">
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div tw="relative flex justify-center items-center w-52 h-52 mt-5  box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-xl"
          >
            <animated.div
              style={html5Spring}
              css={[styles.card, tw`absolute top-0 -left-8 z-40`]}
            >
              <FaHtml5 size="34" color="orange" tw="" />
            </animated.div>

            <animated.div
              style={reactSpring}
              css={[styles.card, tw`absolute top-24 -left-4 z-40`]}
            >
              <FaReact size="34" color="cyan" />
            </animated.div>

            <animated.div
              style={cssSpring}
              css={[styles.card, tw`absolute -bottom-4 -left-6 z-40`]}
            >
              <SiCss3 size="34" color="blue" />
            </animated.div>

            <animated.div
              style={tailwindSpring}
              css={[styles.card, tw`absolute -bottom-8 left-20 z-40`]}
            >
              <SiTailwindcss size="34" color="cyan" />
            </animated.div>


            <animated.div
              style={nextSpring}
              css={[styles.card, tw`absolute bottom-2 right-0 z-40`]}
            >
              <SiNextdotjs size="34" color="black" />
            </animated.div>


            <animated.div
              style={javascriptSpring}
              css={[styles.card, tw`absolute top-2 right-2 z-40`]}
            >
              <div tw="bg-black p-0">
                <SiJavascript size="34" color="yellow" />
              </div>
            </animated.div>

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
        </AnimationOnScroll>
      </div>


      <div tw="px-4 lg:col-span-2 mt-16">
        <h2
          tw="text-sm text-text-color py-1 font-bold border-b-2 border-b-special lg:(text-left text-lg)">
          Projects
        </h2>
        <AnimationOnScroll tw="py-4 lg:p-8" animateIn="animate__bounceInUp">

          <div tw="grid grid-cols-1 gap-2 md:grid-cols-2">
            <ThemeToggle />
            {projects.map(({ title, link, color, subtitle, image }: IProject, index: number) => (
              <Link href={link} key={index}>
                <div tw="bg-cover bg-center relative h-64 w-full p-4 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg"
                style={
                  {
                    backgroundImage:`url(${image})`
                  }
                }
                >
               {/*  <div tw="z-10 absolute top-0">
                    <Image
                      src={image}
                      height="230"
                      width="430"
                      alt="starcode picture"
                    />
                  </div> */}
                  <div tw="z-20 relative">
                    <h2 css={[color]}
                      tw="text-sm font-medium lg:(text-lg)">
                      {title}
                    </h2 >

                    <h1 tw="text-text-color text-lg font-medium lg:(text-xl)">
                      {subtitle}
                    </h1>
                  </div>

                  
                </div>
              </Link>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  </>
}


App.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default App
