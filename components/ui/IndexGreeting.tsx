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
      <div className="w-full mt-5 inline-flex items-baseline justify-center lg:justify-start space-x-2 text-xl font-medium">
        <h2 className="text-lg">I&apos;m Bakare Abiola aka</h2>
        <div className="relative ">
          <h2 className="font-bold text-3xl text-primary">StarCode!</h2>
          <span className="absolute -left-2 top-4">✨</span>
          <span className="absolute right-0 bottom-2.5">✨</span>
        </div>
      </div>
      <p className="text-lg mt-2 font-medium">
        <span className="text-6xl">A</span> freelancer, full-stack developer,
        sometimes a writer, with a passion for building and delivering great
        ideas into digital products
      </p>

      <motion.div
        className="w-full inline-flex justify-center lg:justify-start space-x-2 mt-5"
        initial={{ ...initial }}
        whileInView={{ ...visible }}
        transition={{
          type: 'spring',
          damping: 6,
          stiffness: 100,
        }}
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
        <button className="btn btn-outline btn-primary px-10 y-4 b-0 text-md rounded-lg">
          Contact
        </button>
      </motion.div>
    </motion.div>
  );
}
