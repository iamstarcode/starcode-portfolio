import { Children, ReactElement, useEffect } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../components'
import ThemeToggle from '../components/ThemeToggle'
import DefaultLayout from '../layouts/default'
import Image from 'next/image'

import { useSpring, animated, config, easings } from '@react-spring/web'

import { useInView } from 'react-intersection-observer';

import AOS from "aos";
import "aos/dist/aos.css";


import { BiMap } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],

  card: tw` w-10 h-10 flex justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg`

}

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const { ref, inView, entry } = useInView({
    /* Optional options */
    //threshold: 0,

  });

  const myCard = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: -5 },
    config: {
      duration: 2000,
      easing: easings.easeInSine,
    }
  })

  const headerStyle = useSpring({
    from: { opacity: 0, translateX: 500 },
    to: {
      opacity: inView ? 1 : 0,
      translateX: inView ? 0 : 500
    },
    config: {duration:500}
  });


  return <>
    <div tw="w-full grid grid-cols-1 lg:grid-cols-2">
      <div>
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

        <animated.h2 tw="block text-sm text-text-color text-align[justify] lg:(text-left text-lg) font-bold mt-5">
          Starcode is a freelancer and a front-end developer, with a passion for building and delivering great ideas into digital products.

          When he's not writting codes, He hang's out with Bruce Wayne, am not kidding I hang out with batsy! Loves to play COD after long hours writting codes.

          Loves  learning new things and also sharing with the community and also support new devs trasitioning into tech,

        </animated.h2>
      </div>



      <div
        data-aos="fade-up-right"
        data-aos-offset="300"
        tw="w-full flex justify-center">
        <div tw="relative w-52 h-52 mt-5  box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-xl"
        >
          <animated.div
            style={myCard}
            css={[styles.card, tw`absolute top-0 -left-5`]}
          >
            <FaReact size="24" color="cyan" />
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
      </div>

      <div ref={ref} tw="flex justify-center items-center">
        <animated.div  style={headerStyle}>
          <div tw="relative flex justify-center items-center w-52 h-52 mt-5  box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-xl"
          >
            <animated.div
              style={myCard}
              css={[styles.card, tw`absolute top-0 -left-5`]}
            >
              <FaReact size="24" color="cyan" />
            </animated.div>

            <animated.div
              style={myCard}
              css={[styles.card, tw`absolute top-0 -left-5`]}
            >
              <FaReact size="24" color="cyan" />
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
        </animated.div>
      </div>


      <div className="lg:col-span-2 flex flex-col  py-6">

      </div>
    </div>
    <div tw="w-full flex flex-col justify-center gap-y-5 mt-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button tw="bg-primary" isSmall>Close</Button>
      <ThemeToggle />
    </div>
  </>
}


App.getLayout = function getLayout(page: ReactElement) {
  return (<DefaultLayout>{page}</DefaultLayout>)
}
export default App
