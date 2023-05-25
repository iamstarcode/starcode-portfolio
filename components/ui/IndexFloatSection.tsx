'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { BiMap } from 'react-icons/bi';
import {
  SiHtml5,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
} from 'react-icons/si';
import FloatingCard from '../FloatingCard';

export default function IndexFloatSection() {
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
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={transition}
      viewport={viewport}
    >
      {/* Floating Card */}
      <div className="relative flex justify-center items-center w-64 h-64 lg:h-96 lg:w-96 shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)] rounded-xl">
        <FloatingCard>
          <SiHtml5 size="34" color="orange" className="" />
        </FloatingCard>

        <FloatingCard>
          <SiReact size="34" color="cyan" />
        </FloatingCard>

        <FloatingCard>
          <SiCss3 size="34" color="blue" />
        </FloatingCard>

        <FloatingCard>
          <SiTailwindcss size="34" color="cyan" />
        </FloatingCard>

        <FloatingCard>
          <SiNextdotjs size="34" color="black" />
        </FloatingCard>

        <FloatingCard>
          <div className="bg-black p-0">
            <SiJavascript size="34" color="yellow" />
          </div>
        </FloatingCard>

        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src="/img/me.jpg"
            height="256"
            width="256"
            alt="starcode picture"
            className="rounded-full h-32 w-32 md:w-64 md:h-64"
          />
          <h2 className="text-xs text-special font-medium mt-2">
            Bakare Abiola
          </h2>
          <div className="inline-flex items-center mt-2 ">
            <BiMap color="red" />
            <p className="text-sm text-text-color">Gotham</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
