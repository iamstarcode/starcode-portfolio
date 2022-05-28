import { Children, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import tw from 'twin.macro'
import DefaultLayout from '../../layouts/default'

import Card from '../../components/Card';


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { IProject } from '../../types'
import projects from '../../data/projects'
import ClientOnly from '../../utils/clientonly'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],

  card: tw` w-11 h-11 flex justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg`

}


const Projects = () => {

  useEffect(() => {

  }, [])



  return <>

    <div tw="w-full grid grid-cols-1 gap-3 px-4 py-4 mx-auto md:(p-8 grid-cols-2 gap-5 max-w-5xl) mt-10">
      <div tw="p-4 md:(col-span-2 p-8)">
        <h2 tw="text-3xl text-special">Projects</h2>
      </div>
      {projects.map(({ id, title, link, color, subtitle, cover }: IProject, index: number) => (
      
          <AnimationOnScroll key={index} animateOnce={true} animateIn="animate__bounceInUp">
            <Card
              title={title}
              link={link}
              color={color}
              subtitle={subtitle}
              cover={cover}
              type="project"
            />
          </AnimationOnScroll>
      ))}
    </div>
  </>
}


Projects.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default Projects
