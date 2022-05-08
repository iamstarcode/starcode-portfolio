import { TwStyle } from "twin.macro";

export interface IProject{
    title: string,
    color: TwStyle,
    link: string,
    subtitle:string,
    keywords?:string[],
    stack?:string[],
    image:string
}