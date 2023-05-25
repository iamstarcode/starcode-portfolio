'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SlideUpProps {
  variants: { hidden: {}; visible: {} };
  children: React.ReactNode;
  style?: {};
}

export function Basic(props: SlideUpProps) {
  return (
    <motion.div
      variants={props.variants}
      initial="hidden"
      whileInView="visible"
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
}
