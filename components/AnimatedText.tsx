'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { theme } from 'antd';

export interface IAnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text }: IAnimatedTextProps) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.11, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      background: [
        `linear-gradient(to top, #cabade 5% ,  #722ed1 100%`,
        `linear-gradient(to top, #722ed1 100% , #cabade 5%)`,
      ],

      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      fill: 'transparent',
      WebkitTextFillColor: 'transparent',

      transition: {
        type: 'spring',
        damping: 6,
        stiffness: 100,
        background: {
          delay: 1,
          duration: 1,
          ease: [0.075, 0.082, 0.09, 1],
        },
      },
    },
    hidden: {
      opacity: 0,
      y: '20%',

      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      fill: 'transparent',
      WebkitTextFillColor: 'transparent',

      transition: {
        type: 'spring',
        damping: 11,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full mx-auto flex justify-center overflow-hidden">
      <motion.h1
        className="w-full inline-block font-semibold text-5xl text-center lg:text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word: any, index: number) => (
          <motion.span
            variants={child}
            className="inline-block mr-2 py-1 capitalize"
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
