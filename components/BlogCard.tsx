import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { siteConfig } from '@/config/site';

import { BlogProps } from '../types';

const BlogCard = ({ brief, coverImage, title, slug, dateAdded }: BlogProps) => {
  const date = new Date(dateAdded);
  return (
    <a target="_blank" href={siteConfig.links.blog + slug}>
      <div className=" h-full w-full cursor-pointer rounded-lg bg-base-200 shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)] transition-transform duration-500 hover:scale-105">
        <Image
          src={coverImage}
          height="300"
          width="1121"
          alt="starcode picture"
          className="rounded-tl-lg rounded-tr-lg"
        />
        <div className="space-y-2 p-4 ">
          <h2
            style={
              {
                /*  color, */
              }
            }
            className=" text-xl font-bold lg:text-2xl"
          >
            {title}
          </h2>
          <div className="inline-flex">
            <h1 className="text-sm font-normal text-slate-500">
              {`${date.toDateString().slice(3)}`}
            </h1>
          </div>
          <h1 className="text-sm font-normal text-slate-500 lg:text-lg">
            {brief}
          </h1>
        </div>
      </div>
    </a>
  );

  /*   if (type == 'blog')
    return (
      <>
        <a href={link} target="_blank">
          {tsx}
        </a>
      </>
    );
  else {
    return (
      <>
        <Link href={link}>{tsx}</Link>
      </>
    );
  } */
};

export default BlogCard;
