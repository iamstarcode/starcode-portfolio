import { TwStyle } from "twin.macro";

export interface IProject{
    id: string,
    title: string,
    color: TwStyle,
    link: string,
    subtitle:string,
    keywords?:string[],
    stack?:string[],
    cover:string
}