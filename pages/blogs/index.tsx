import { ReactElement, useEffect } from 'react'
import tw from 'twin.macro'
import DefaultLayout from '../../layouts/default'

import Card from '../../components/Card';


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import { IBlogProps } from '../../types'
import blogs from '../../data/blogs'

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
    <div tw="w-full mx-auto grid grid-cols-1 gap-3 px-4 py-4 md:(p-8 grid-cols-2 gap-5 max-w-5xl) mt-10">
      <div tw="p-4 md:(col-span-2 p-8)">
        <h2 tw="text-3xl text-special">Blogs</h2>
      </div>
      {blogs.map(({title, link, cover }: IBlogProps, index: number) => (
      
          <AnimationOnScroll key={index} animateOnce={true} animateIn="animate__bounceInUp">
            <Card
              link={link}
              subtitle={title}
              cover={cover}
              type="blog"
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
