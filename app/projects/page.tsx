import Card from '@/components/Card';

import { IProject } from '@/types';
import projects from '@/data/projects';
import { Basic } from '@/components/animations/Basic';
const Projects = () => {
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
  return (
    <>
      <div className="w-full mx-auto lg:max-w-5xl">
        <div className="inline-flex items-center w-full">
          <h2 className="pr-3 font-bold text-lg lg:text-2xl">
            Some Things I&apos;ve Built
          </h2>
          <hr className="w-32 lg:w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        </div>

        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 mt-5">
          {projects.map(
            (
              { id, title, link, color, subtitle, cover }: IProject,
              index: number,
            ) => (
              <Basic key={index} variants={variants}>
                <Card
                  title={title}
                  link={link}
                  color={color}
                  subtitle={subtitle}
                  cover={cover}
                  type="project"
                />
              </Basic>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
