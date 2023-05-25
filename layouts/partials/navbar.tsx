'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDisclosure, useViewportSize } from '@mantine/hooks';

import { Logo } from '@/components/Logo';

import { Burger, Drawer } from '@mantine/core';
import { SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

const NavBar = () => {
  const pathName = usePathname();

  const { width } = useViewportSize();

  const [opened, { close, toggle }] = useDisclosure(false);

  const CustomLink = ({ href, text }: { href: string; text: string }) => (
    <li
      className={`${pathName !== href ? 'transform transition-transform' : ''}`}
    >
      <Link
        href={href}
        onClick={close}
        className={`${
          pathName === href ? 'bg-primary text-white' : 'text-primary'
        }`}
      >
        {text}
      </Link>
    </li>
  );

  const links = [
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

  const socials = (
    <div className="inline-flex items-center space-x-4">
      <button
        id="github"
        className="h-8 w-8 transform rounded-full border-2 border-gray-500 bg-white text-2xl text-gray-600 duration-500 hover:scale-110 hover:bg-gray-600 hover:text-white"
      >
        <a href="https://github.com/iamstarcode" target="_blank">
          <BsGithub size="20" className="w-full" />
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
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size="80%"
        classNames={{
          content: 'bg-base-100',
          header: 'bg-base-100',
        }}
        withCloseButton={false}
      >
        <ul className="menu space-y-2 bg-base-100 p-2 text-base-content">
          {links.map((link: any, index) => (
            <CustomLink key={index} href={link.href} text={link.text} />
          ))}
        </ul>
      </Drawer>
      <div className="shadow-sm backdrop-blur-sm ">
        <div
          id="#navbar"
          className="fixed z-40 mx-auto w-full max-w-6xl flex-none text-gray-700 lg:fixed "
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <nav
            className={`${
              !opened ? `` : ''
            } flex h-14 flex-col px-4 lg:flex-row lg:items-center lg:justify-between lg:px-4`}
          >
            <div className="flex w-full flex-row items-center justify-between">
              <Logo />

              {width < 728 && (
                <Burger opened={opened} onClick={toggle} aria-label="burger" />
              )}
            </div>

            {width >= 768 && (
              <nav className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-2 lg:pb-0">
                <ul className="menu menu-horizontal space-x-2 bg-base-100 p-2">
                  {links.map(({ href, text }: any, index) => (
                    <>
                      <li key={index}>
                        <Link
                          href={href}
                          onClick={close}
                          className={`${
                            pathName === href
                              ? 'bg-primary text-white'
                              : 'text-primary '
                          } p-4 py-2 hover:font-medium`}
                        >
                          {text}
                        </Link>
                      </li>
                    </>
                  ))}
                  {socials}
                </ul>
                <ul className="inline-flex list-none space-x-3"></ul>
              </nav>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
