'use client';

import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Badge, Avatar, Button, ActionIcon } from '@mantine/core';
import { useParams } from 'next/navigation';
import { BsLink45Deg, BsQuestionCircle } from 'react-icons/bs';
import projects from '@/data/projects';

import { Basic } from '@/components/animations/Basic';

import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiVuedotjs,
} from 'react-icons/si';

import { ImArrowLeft2 } from 'react-icons/im';

import { Carousel, Embla } from '@mantine/carousel';

const getIcon = (icon: string) => {
  let jsx: JSX.Element;
  switch (icon.toLocaleLowerCase()) {
    case 'react':
      jsx = <SiReact size="34" color="cyan" />;
      break;
    case 'next':
      jsx = <SiNextdotjs size="34" color="black" />;
      break;
    case 'tailwindcss':
      jsx = <SiTailwindcss size="34" color="cyan" />;
      break;
    case 'laravel':
      jsx = <SiLaravel size="34" color="red" />;
      break;
    case 'vue':
      jsx = <SiVuedotjs size="34" color="green" />;
      break;
    default:
      jsx = <BsQuestionCircle size="34" color="red" />;
  }

  return jsx;
};
const variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 6,
      stiffness: 100,
    },
  },
};
const styles = {
  card: `flex space-x-2 text-sm justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg`,
};
const Project = () => {
  const { p_name } = useParams();

  const project = projects.find(
    (project: { id: string }) => project.id === p_name,
  );

  const TWEEN_FACTOR = 3;
  const numberWithinRange = (
    number: number,
    min: number,
    max: number,
  ): number => Math.min(Math.max(number, min), max);

  const [embla, setEmbla] = useState<Embla | null>(null);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla
      .scrollSnapList()
      .map((scrollSnap: number, index: any) => {
        let diffToTarget = scrollSnap - scrollProgress;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(
            (loopItem: { target: () => any; index: any }) => {
              const target = loopItem.target();
              if (index === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1)
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1)
                  diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            },
          );
        }
        const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
        return numberWithinRange(tweenValue, 0.55, 1);
      });

    setTweenValues(styles);
  }, [embla, setTweenValues]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  //console.log(project);
  return (
    <>
      {project && (
        <div className={`w-full`} style={{ color: project.color }}>
          <Basic variants={variants}>
            <div style={{ color: project.color }}>
              <Link href="/projects">
                <ImArrowLeft2 size="28" />
              </Link>
            </div>
            <section className="mt-5 h-full w-full lg:flex lg:flex-row">
              <div className="lg:w-[50%]">
                <h2
                  className="font-size[2.65rem] mt-2"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h2>
                <h2
                  className=" text-text-color my-3 text-lg leading-5 lg:text-xl"
                  style={{ color: project.color }}
                >
                  {project.about}
                </h2>

                <a
                  href={project.live_url}
                  className=" inline-flex space-x-2"
                  target="_blank"
                >
                  <BsLink45Deg size="24" />
                  {project.live_url}
                </a>
              </div>

              <div className="w-full xxs:h-[12rem] xs:h-[14rem] s:h-[15.5rem]  sm:h-[20rem] sm:w-[50%] lg:h-[19rem] lg:h-[25rem] xl:h-[25rem]">
                <Carousel
                  withIndicators={true}
                  withControls={false}
                  getEmblaApi={setEmbla}
                  className="rounded-lg shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)]"
                  classNames={
                    {
                      //root: 'w-full xxs:h-[12rem] xs:h-[14rem] s:h-[15.5rem] sm:h-[20rem] lg:h-[25rem] sm:w-[50%] lg:h-[19rem] xl:h-[25rem]',
                    }
                  }
                >
                  {project.images.map((image: any, i: number) => (
                    <Carousel.Slide
                      key={i}
                      style={{
                        ...(tweenValues.length && {
                          transform: `scale(${tweenValues[i]})`,
                        }),
                      }}
                    >
                      <Image
                        alt="project image"
                        src={image}
                        height={200}
                        width={800}
                      />
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </div>
            </section>
          </Basic>

          <Basic variants={variants}>
            <section className="mt-6 flex flex-col space-y-4">
              <div className="inline-flex items-center space-x-2">
                <h2 className="font-bold">Year:</h2>
                <Badge size="lg" className="bg-primary text-primary-content">
                  {project.year}
                </Badge>
              </div>
              <div className="inline-flex items-center space-x-2">
                <h2 className="font-bold">Platform:</h2>
                <div className="inline-flex items-center space-x-1">
                  {project.platforms.map((platform: string, index: number) => (
                    <Badge
                      size="lg"
                      className="bg-primary text-primary-content"
                      key={index}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="block">
                <h2 className="font-bold">Stack:</h2>
                <div className="-mt-1 flex w-full flex-wrap items-baseline space-y-2">
                  {project.stack.map((tool: any, index: number) => (
                    <div
                      key={index}
                      className={`mr-2 inline-flex items-center  `}
                    >
                      <Badge
                        pl={2}
                        size="lg"
                        className="bg-primary text-primary-content"
                        radius="xl"
                        leftSection={
                          <ActionIcon
                            size="sm"
                            radius="xl"
                            variant="transparent"
                          >
                            {getIcon(tool)}
                          </ActionIcon>
                        }
                      >
                        {tool}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-3 inline-flex items-center space-x-4">
                  <h2 className="text-text-color font-medium">Source:</h2>
                  <div className="box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] flex cursor-pointer items-center justify-center space-x-2 rounded-lg bg-base-100 p-2 text-sm">
                    {project.repo ? (
                      <a href={project.repo} target="_blank">
                        <SiGithub size="24" />
                      </a>
                    ) : (
                      <Avatar size="md" color="red">
                        NDA
                      </Avatar>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </Basic>

          {/*   <div
        className="overflow-hidden w-full box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer">
        <div className="w-full">
          <Image
            src={cover}
            height="200"
            width="300"
            layout="responsive"
            alt="starcode picture"
          />
        </div>
        <div className="px-2 py-1 bg-base-100">
          <h2 css={[color]}
            className="text-sm font-medium lg:(text-lg)">
            {title}
          </h2 >

          <h1 className="text-text-color text-lg font-medium lg:(text-xl)">
            {subtitle}
          </h1>
        </div>
      </div>
 */}
        </div>
      )}
    </>
  );
};

export default Project;
