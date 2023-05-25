'use client';

import { Drawer } from '@mantine/core';
import CustomLink from './CustomLink';
import Image from 'next/image';
import { useState } from 'react';
import {
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiGithub,
} from 'react-icons/si';
import { useAtom } from 'jotai';
import { burgerOpenedAtom } from '@/stores';

export const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/projects',
    text: 'Projects',
  },

  {
    href: '/blogs',
    text: 'Blogs',
  },
];

export const linksJsx = links.map((link: any, index) => (
  <CustomLink key={index} href={link.href} text={link.text} />
));
export const socials = (
  <div className="mx-auto inline-flex items-center space-x-4">
    <button
      id="github"
      className="h-8 w-8 transform rounded-full border-2 border-gray-500 bg-white text-2xl text-gray-600 duration-500 hover:scale-110 hover:bg-gray-600 hover:text-white"
    >
      <a href="https://github.com/iamstarcode" target="_blank">
        <SiGithub size="20" className="w-full" />
      </a>
    </button>
    <button className="h-8 w-8 rounded-full border-2 border-blue-600 bg-white text-blue-600 transition-transform duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white">
      <a href="https://www.linkedin.com/in/iamstarcode/" target="_blank">
        <SiLinkedin size="20" className="w-full" />
      </a>
    </button>
    <button className="h-8 w-8 rounded-full border-2 border-blue-600 bg-white text-blue-600 transition-transform duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white">
      <a href="https://twitter.com/i_am_starcode" target="_blank">
        <SiTwitter size="20" className="w-full" />
      </a>
    </button>
    <button
      id="instagram"
      className="h-8 w-8 rounded-full border-2 border-pink-500 bg-white text-pink-600 transition-transform duration-500 hover:scale-110 hover:border-0 hover:bg-gradient-to-b hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white"
    >
      <a href="https://www.instagram.com/i_am_starcode" target="_blank">
        <SiInstagram
          size="20"
          className="w-full text-[border-pink-500] hover:text-white"
        />
      </a>
    </button>
  </div>
);

function MenuDrawer() {
  const [opened, setOpened] = useState(false);

  const [burgerOpened, setBurgerOpened] = useAtom(burgerOpenedAtom);

  return (
    <Drawer
      opened={burgerOpened}
      onClose={() => setBurgerOpened(!burgerOpened)}
      size="80%"
      classNames={{
        content: 'bg-base-100',
        header: 'bg-base-100',
      }}
      withCloseButton={false}
    >
      <ul className="menu space-y-2 bg-base-100 p-2 text-base-content">
        {linksJsx}
      </ul>
      <div className="mt-5 flex flex-col items-center justify-items-center space-y-3">
        {socials}
        <Image
          src="/img/me1.jpg"
          height="256"
          width="256"
          alt="starcode picture"
          className="h-32 w-32 rounded-full lg:h-64 lg:w-64"
        />
      </div>
    </Drawer>
  );
}

export default MenuDrawer;
