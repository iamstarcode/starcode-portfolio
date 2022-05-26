import Link from 'next/link';
import { useRouter } from 'next/router';

import ClientOnly from '../../utils/clientonly'

import { Affix, Switch, Button, ActionIcon, Transition } from '@mantine/core';
import { useClickOutside, useViewportSize } from '@mantine/hooks';

import { useSpring, animated, config } from '@react-spring/web'

import { useToggle } from '@mantine/hooks';



import tw from 'twin.macro';

const NavBar = () => {

  const router = useRouter();
  const [burger, toggle] = useToggle(false, [false, true])
  const clickOutsideRef = useClickOutside(() => toggle(false))
  const useViewport = useViewportSize()

  const { s, r, o, y } = useSpring(
    {
      s: burger ? 1 : 0,
      r: burger ? 360 : 0,
      o: burger ? 1 : useViewport.width > 760 ? 1 : 0,
      y: burger ? 0 : -250,
      from: {
        s: 0,
        r: 0,
        o: 0,
        y: 0
      },
      config: config.slow,
      duration: 300
    })

  //console.log(router.asPath)
  //console.log(router.asPath.lastIndexOf('/projects'))
  // router.basePath === item[1]
  return (<>
    <div ref={clickOutsideRef} id="navbar" tw="z-50 w-full text-gray-700 fixed md:fixed flex-none top-0 bg-transparent backdrop-blur-sm shadow-sm"

    >
      <div tw="max-w-7xl mx-auto">
        <div css={[!burger ? tw`h-14` : ""]} tw="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div tw="flex flex-row items-center justify-between">
            <Link passHref href="/">
              <div tw="cursor-pointer ">
                <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M35.6821 18.0403L24.9224 54.0539L28.4005 54.1741L39.1603 18.1689L35.6821 18.0403Z" fill="#3E0EEB" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M40.0418 20.1861L44.5741 22.8068L49.1064 25.4191L44.5741 28.0397L40.0418 30.652V20.1861Z" fill="#FE2D04" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M40.0418 30.6677L49.0991 25.4191L49.1064 30.652V35.8923L40.0418 30.6677Z" fill="#FF6738" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L49.1148 30.652V25.4191L58.172 30.6593L49.1064 35.8923Z" fill="#FE0000" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L58.1647 30.6447L58.1793 41.1106L53.6471 38.4983L49.1064 35.8923Z" fill="#C10100" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.1064 35.8923L53.6397 38.5056L58.172 41.1252L49.1064 46.3582V35.8923Z" fill="#FE0000" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M40.0492 41.1336L49.1064 35.8923L49.1221 46.3582L40.0492 41.1336Z" fill="#BC0078" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M40.0492 41.1336L44.5814 43.7459L49.1148 46.3665L40.0492 51.5995V41.1336Z" fill="#4E0096" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.1148 25.4191L49.0991 14.9532L58.172 20.1788L49.1148 25.4191Z" fill="#FF6738" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.1148 14.9689L58.172 9.72026L58.1877 20.1861L49.1148 14.9689Z" fill="#FFCE34" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5367 20.48L14.4638 25.7056L23.5221 30.9459L23.5367 20.48Z" fill="#FE2D04" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5221 30.9459L14.4638 25.7056L14.4565 30.9386V36.1715L23.5221 30.9459Z" fill="#FF6738" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4565 36.1715V30.9386L14.4638 25.7056L5.39085 30.9312L14.4565 36.1715Z" fill="#FE0000" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4565 36.1715L5.39085 30.9312V36.1642L5.38353 41.3971L14.4565 36.1715Z" fill="#C10100" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5064 41.4191L18.9814 38.7911L14.4565 36.1715L14.4492 41.4044L14.4335 46.6374L23.5064 41.4191Z" fill="#BC0078" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5064 41.4191L18.9741 44.0324L14.4335 46.6374L23.4918 51.885L23.5064 41.4191Z" fill="#4E0096" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4335 46.6374L14.4492 41.4118L14.4565 36.1715L5.38353 41.3888L14.4335 46.6374Z" fill="#FE0000" />
                </svg>
              </div>
            </Link>

            <button tw="p-3 rounded-lg md:hidden cursor-pointer" onClick={() => toggle()}>
              <animated.svg style={
                {
                  scale: s.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 2.7, 2, 2.7, 2, 1.9, 1.5, 1],
                  }),
                  rotateZ: r,
                  opacity: o.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.75, 0.65, 0.25, 0.45, 0.65, 0.75, 1],
                  })
                }
              } fill="currentColor" viewBox="0 0 20 20" tw="w-6 h-6">
                {!burger && <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
                {burger && <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
              </animated.svg>
            </button>
          </div>
          <animated.nav
            tw="w-full flex flex-col flex-grow pb-4 md:(pb-0 flex items-center space-x-2 justify-end flex-row)"
            style={{
              y: useViewport.width < 760 ? y : 0,
              opacity: o,
            }}

          >
            <Link href="/">
              <a
                css={[
                  tw`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer lg:(mt-0)`,
                  router.pathname === "/" ? tw`bg-special-bg text-white` : tw`transform transition-transform hover:scale-105 text-special hover:bg-base-100`,
                ]}
                onClick={() => toggle()}
              >Home</a>
            </Link>
            <Link href="/projects">
              <a
                css={[
                  tw`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer lg:(mt-0)`,
                  router.asPath.lastIndexOf("/projects") > -1 ? tw`bg-special-bg text-white` : tw`transform transition-transform hover:scale-105 text-special hover:bg-base-100`,
                ]}
                onClick={() => toggle()}
              >Projects</a>
            </Link>
            <Link href="/blogs">
              <a
                css={[
                  tw`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer lg:(mt-0)`,
                  router.asPath.lastIndexOf("/blogs") > -1 ? tw`bg-special-bg text-white` : tw`transform transition-transform hover:scale-105 text-special hover:bg-base-100`,
                ]}
                onClick={() => toggle()}
              >Blogs</a>
            </Link>

            <Link href="/about">
              <a
                css={[
                  tw`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer lg:(mt-0)`,
                  router.pathname === "/about" ? tw`bg-special-bg text-white` : tw`transform transition-transform hover:scale-105 text-special hover:bg-base-100`,
                ]}
                onClick={() => toggle()}
              >About</a>
            </Link>
            {/* {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["About", "/about"],
              ["Porfolio", "/portfolio"]
            ].map((item: any, index: number) => (
              <Link href={item[1]} key={index}>
                <a
                  css={[
                    tw`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer lg:(mt-0)`,
                    router.asPath.lastIndexOf(item[1]) > -1 ? tw`bg-special-bg text-white` : tw`transform transition-transform hover:scale-105 text-special hover:bg-base-100`,
                  ]}
                  onClick={() => toggle()}
                >{item[0]}</a>
              </Link>
            ))} */}
          </animated.nav>
        </div>
      </div>

    </div>
  </>);
}

export default NavBar;