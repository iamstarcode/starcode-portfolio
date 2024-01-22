import React from 'react';

import Image from 'next/image';

import { siteConfig } from '@/config/site';

import { BlogProps } from '../types';

const BlogCard = ({
  brief,
  coverImage,
  title,
  slug,
  publishedAt,
}: BlogProps) => {
  const date = new Date(publishedAt);
  return (
    <a target="_blank" href={siteConfig.links.blog + slug}>
      <div className=" h-full w-full cursor-pointer rounded-lg bg-base-200 shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)] transition-transform duration-500 hover:scale-105">
        <Image
          src={coverImage.url}
          height="300"
          width="1121"
          alt="starcode picture"
          className="h-60 rounded-tl-lg rounded-tr-lg object-cover"
        />
        <div className="space-y-2 p-4 ">
          <h2 className=" text-xl font-bold lg:text-2xl">{title}</h2>
          <div className="inline-flex">
            <h1 className="text-sm font-bold text-slate-500">
              {`${date.toDateString().slice(3)}`}
            </h1>
          </div>
          <h1 className="text-sm font-normal text-slate-600 lg:text-lg">
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
