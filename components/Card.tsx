import React, { useState } from "react"
import "twin.macro"

import Link from "next/link"
import Image from "next/image"



import { title } from "process"
import { TwStyle } from "twin.macro"
import { ICardProps } from "../types"


const Card = ({ link, cover, color, subtitle, title, type }: ICardProps) => {

  const tsx = <div
    tw="overflow-hidden w-full box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer">
    <div tw="w-full">
      <Image
        src={cover}
        height="200"
        width="300"
        layout="responsive"
        alt="starcode picture"
      />
    </div>
    <div tw="px-4 py-1 bg-base-100 min-h-[64px]">
      <h2 css={[color]}
        tw="text-xl font-medium lg:(text-2xl)">
        {title}
      </h2 >
      <h1 tw="text-text-color text-sm font-normal lg:(text-lg)">
        {subtitle}
      </h1>
    </div>
  </div>

  if (type == "blog")
    return <>
      <a href={link} target="_blank">
        {tsx}
      </a>
    </>
  else {
    return <>
      <Link href={link} >
        {tsx}
      </Link>
    </>
  }

}

export default Card
