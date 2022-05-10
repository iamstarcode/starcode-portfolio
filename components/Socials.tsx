import { ActionIcon, Affix, Modal } from "@mantine/core"
import { useState } from "react"
import "twin.macro"

import { animated, useSpring, useSpringRef, useTransition, useChain, config } from "@react-spring/web"

import { useClickOutside } from "@mantine/hooks"

import { SiGmail, SiInstagram, SiTwitter, SiWhatsapp } from "react-icons/si"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { TiSocialAtCircular } from 'react-icons/ti'
import { BsGithub } from "react-icons/bs"


const Social = () => {

  const [open, set] = useState(false)

  const springRef = useSpringRef()
  const clickOutsideRef = useClickOutside(() => set(false))

  const { scale, opacity } = useSpring({
    ref: springRef,
    from: {
      opacity: 1,
      scale: 1
    },
    to: {
      opacity: open ? 0 : 1,
      scale: open ? 0 : 1
    },
    config: config.stiff
  })

  const data = [1, 3, 4, 5]
  const socials = [
    <button
      id="phone"
      tw="bg-white w-12 h-12 text-2xl text-gray-600 border-2  border-gray-500 rounded-full duration-500 transform hover:(-translate-y-2 bg-gray-600 hover:text-white)"
    >
      <a href="https://github.com/iamstarcode" target="_blank">
        {' '}
        <BsGithub tw="w-full" />
      </a>
    </button>,
    <button
      id="phone"
      tw="bg-white w-12 h-12 text-2xl text-blue-600 border-2  border-blue-500 rounded-full duration-500 transform hover:(-translate-y-2 bg-blue-600 hover:text-white)"
    >
      <a href="tel:+2348184991004" target="_blank">
        {' '}
        <IoPhonePortraitOutline tw="w-full" />
      </a>
    </button>,
    <button
      id="gmail"
      tw="bg-white w-12 h-12 text-2xl text-red-600 border-2  border-red-500 rounded-full duration-500 transform hover:(-translate-y-2 bg-red-600 hover:text-white)"
    >
      <a href="mailto:iamstarcode@gmail.com" target="_blank">
        {' '}
        <SiGmail tw="w-full" />
      </a>
    </button>,
    <button
      id="facebook"
      tw="bg-white w-12 h-12 text-2xl text-blue-600 border-2  border-blue-600 rounded-full duration-500 transform hover:(-translate-y-2 bg-blue-600 hover:text-white)"
    >
      <a href="https://twitter.com/i_am_starcode" target="_blank">
        {' '}
        <SiTwitter tw="w-full" />
      </a>
    </button>,
    <button
      id="instagram"
      tw=" bg-white w-12 h-12 text-2xl text-pink-600 border-2 border-pink-500  rounded-full transform duration-500  hover:(bg-gradient-to-b border-0 from-indigo-600 via-pink-600 text-white to-yellow-500 -translate-y-2)"
    >
      <a href="https://www.instagram.com/i_am_starcode" target="_blank">
        {' '}
        <SiInstagram tw="w-full" />
      </a>
    </button>,
    <button
      id="whatsapp"
      tw="bg-white w-12 h-12 text-2xl text-green-500 border-2 border-green-600  rounded-full  transform duration-500  hover:(-translate-y-2 bg-green-600 text-white)"
    >
      <a href="https://wa.me/+2348184991004" target="_blank">
        {' '}
        <SiWhatsapp tw="w-full" />
      </a>
    </button>
  ]
  const transRef = useSpringRef()
  const transition = useTransition(open ? socials : [], {
    ref: transRef,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ])
  return <>
    <Affix position={{ bottom: 24, left: 20 }}
      ref={clickOutsideRef}
    >
      <animated.div
        style={
          {
            opacity,
            scale
          }
        }
      >
        <ActionIcon tw="shadow-2xl bg-special-bg text-text-color transform transition hover:(bg-special-bg  duration-500 -translate-y-1)" onClick={() => set(open => !open)} variant="filled" radius="md" size="xl">
          <TiSocialAtCircular color="white" size="64" />
        </ActionIcon>
      </animated.div>
    </Affix>
    <Modal
      opened={open}
      onClose={() => console.log('closed')}
      withCloseButton={true}
      centered
      overlayColor="var(--shadow-color)"
      overlayOpacity={0.55}
      size="sm"
      tw="backdrop-blur-sm"
    >
      <div tw="grid grid-cols-2 gap-3 place-items-center w-full items-center justify-center  lg:justify-start lg:max-w-[25rem] mt-5">
        {transition((style, item) => (
          <animated.div style={{ ...style }}>
            {item}
          </animated.div>
        ))}
      </div>
    </Modal>
  </>
}
const Sun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93v-.001zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
  </svg>
)

const Moon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.977 6.977 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
  </svg>
)

export default Social
