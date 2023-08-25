'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { useSpring } from 'framer-motion';
import ClientOnly from '../utils/clientonly';

export interface IFloatingCard {
  children: React.ReactNode;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const FloatingCard: React.FC<IFloatingCard> = ({
  position = 'absolute',
  top = '0',
  right = '0',
  bottom = '0',
  left = '0',
  children,
}: IFloatingCard) => {
  const min = -200;
  const max = 200;
  const rand = (min: number, max: number) => {
    return {
      x: Math.floor(min + Math.random() * (max - min)),
      y: Math.floor(min + Math.random() * (max - min)),
    };
  };
  const springOptions = {
    stiffness: 110,
    damping: 80,
  };
  const { x, y } = rand(min, max);
  const springX = useSpring(0, springOptions);
  const springY = useSpring(0, springOptions);
  springY.set(y);
  springX.set(x);

  useEffect(() => {
    const interval = setInterval(() => {
      const { x, y } = rand(min, max);
      springY.set(y);
      springX.set(x);
    }, 5000);

    return () => clearInterval(interval);
  }, [min, springX, springY]);
  return (
    <ClientOnly>
      <motion.div
        /* css={{ position, top, left, right, bottom, zIndex: '40' }} */
        /* css={position} */
        className="absolute z-40 flex h-11 w-11 items-center justify-center rounded-lg bg-base-100 shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)]"
        style={{
          x: springX,
          y: springY,
        }}
      >
        {children}
      </motion.div>
    </ClientOnly>
  );
};

export default FloatingCard;
