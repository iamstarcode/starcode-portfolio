import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { ICardProps } from '../types';

const Card = ({ link, cover, color, subtitle, title }: ICardProps) => {
  return (
    <Link href={link}>
      <div className="h-full w-full cursor-pointer overflow-hidden rounded-lg shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)] transition-transform duration-500 hover:scale-105">
        <Image src={cover} height="300" width="1121" alt="starcode picture" />
        <div className="bg-base-200 p-3">
          <h2
            style={{
              color,
            }}
            className=" text-xl font-medium lg:text-2xl"
          >
            {title}
          </h2>
          <h1 className="text-text-color text-sm font-normal lg:text-lg">
            {subtitle}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
