'use client';

import { Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { BsBoxArrowDownRight } from 'react-icons/bs';
import AnimatedText from '../AnimatedText';

const transition = {
  type: 'spring',
  damping: 10,
  stiffness: 110,
};

const viewport = {
  once: true,
};

const initial = { opacity: 0, y: 20 };
const visible = {
  opacity: 1,
  y: 0,
};

export default function IndexGreeting() {
  return (
    <motion.div initial={{ ...initial }} whileInView={{ ...visible }}>
      <AnimatedText text="Building and delivring great ideas into digital products." />
      <div className="mt-5 inline-flex w-full items-baseline justify-center space-x-2 text-xl font-medium lg:justify-start">
        <h2 className="text-lg">I&apos;m Bakare Abiola aka</h2>
        <div className="relative ">
          <h2 className="text-3xl font-bold text-primary">StarCode!</h2>
          <span className="absolute -left-2 top-4">✨</span>
          <span className="absolute bottom-2.5 right-0">✨</span>
        </div>
      </div>
      <p className="mt-2 text-lg font-medium">
        <span className="text-6xl">A</span> freelancer, full-stack developer,
        sometimes a writer, with a passion for building and delivering great
        ideas into digital products
      </p>

      <motion.div
        className="mt-5 inline-flex w-full justify-center space-x-2 lg:justify-start"
        initial={{ ...initial }}
        whileInView={{ ...visible }}
        transition={{
          type: 'spring',
          damping: 6,
          stiffness: 100,
        }}
      >
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1iH9VziBg1alVGUDiJNXevmdwpAloQVzy7Cr166hV7w0/edit?usp=sharing"
        >
          <Button
            classNames={{
              root: ' btn rounded-lg bg-gradient-to-r from-primary to-secondary border-0',
              inner: 'px-5 y-4 b-0',
              label: 'text-md',
            }}
            rightIcon={<BsBoxArrowDownRight size="18" />}
          >
            Resume
          </Button>
        </a>
        <a href="mailto:iamstarcode@gmail.com">
          <button className="y-4 b-0 text-md btn-outline btn-primary btn rounded-lg px-10">
            Contact
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
}
