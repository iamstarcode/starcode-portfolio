import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { TwStyle } from "twin.macro";

export interface IProject{
    id: string,
    title: string,
    subtitle:string,
    about:string,
    live_url:string,
    color: TwStyle,
    link: string,
    stack:string[]
    platforms: string[],
    year:string,
    cover:string,
    images:string[]
}

export interface ICardProps {
    link: string,
    cover: string,
    color: TwStyle,
    title:string,
    subtitle: string
  }