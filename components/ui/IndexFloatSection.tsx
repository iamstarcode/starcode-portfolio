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
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiTypescript,
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
      <div className="relative flex h-64 w-64 items-center justify-center rounded-xl shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)] lg:h-96 lg:w-96">
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
          <SiNodedotjs size="34" color="green" />
        </FloatingCard>

        <FloatingCard>
          <SiExpress size="34" color="black" />
        </FloatingCard>

        <FloatingCard>
          <SiNestjs size="34" color="red" />
        </FloatingCard>

        <FloatingCard>
          <SiTypescript size="34" color="blue" />
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
            className="h-32 w-32 rounded-full lg:h-64 lg:w-64"
          />
          <h2 className="text-special mt-2 text-xs font-medium">
            Bakare Abiola
          </h2>
          <div className="mt-2 inline-flex items-center ">
            <BiMap color="red" />
            <p className="text-text-color text-sm">Gotham</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
