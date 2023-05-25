import Link from 'next/link';

import { Badge } from './mantine';

import nProjects from '@/data/projects';
import { BlogProps, IProject } from '../types';
import getPosts from '@/lib/getPosts';

import Card from '@/components/Card';
import IndexGreeting from '@/components/ui/IndexGreeting';
import IndexFloatSection from '@/components/ui/IndexFloatSection';
import BlogCard from '@/components/BlogCard';

const App = async () => {
  const projects: any = nProjects?.slice(0, 4);
  const data: any = await getPosts();

  const posts = data.data.user.publication.posts.slice(0, 4);
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-2">
        <IndexGreeting />
        {/*   <motion.div
          className="p-4 lg:p-8"
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={transition}
          viewport={viewport}
        >
          <h2 className="text-sm text-text-color lg:( text-lg) font-bold mt-5">
            Hi!, I'm Bakare Abiola alias!
          </h2>

          <h2 className="text-sm text-text-color lg:( text-lg) font-bold mt-5"></h2>
          <h2 className="text-6xl mt-2 text-special">Starcode</h2>
          <h2 className=" text-sm text-text-color lg:( text-lg) font-bold mt-5">
            catchy right? Lol
          </h2>
          <h2 className="block text-sm text-text-color text-align[justify] lg:(text-left text-lg) font-bold mt-5">
            Starcode is a freelancer and a front-end developer, with a passion
            for building and delivering great ideas into digital products. When
            he's not writting codes, He hang's out with Bruce Wayne, am not
            kidding I hang out with batsy! Also loves to play Call Of Duty after
            long hours writting codes. Loves learning new things and also
            sharing with the community and also support new devs trasitioning
            into tech.
          </h2>
        </motion.div> */}
        <div className="w-full flex justify-center items-center lg:justify-end">
          <IndexFloatSection />
        </div>

        <div className="lg:col-span-2 mt-16">
          <div className="inline-flex items-center w-full">
            <h2 className="pr-3 font-bold text-2xl">Projects</h2>
            <hr className="w-32 lg:w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          </div>
          <div className="py-4 lg:p-8 lg:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 ">
              {projects &&
                projects.map(
                  (
                    { title, link, color, subtitle, cover }: IProject,
                    index: number,
                  ) => (
                    <div key={index}>
                      <Card
                        title={title}
                        link={link}
                        color={color}
                        subtitle={subtitle}
                        cover={cover}
                        type="project"
                      />
                    </div>
                  ),
                )}
            </div>
          </div>
          <div className="flex justify-start mt-5 lg:justify-end">
            <Link passHref href="/projects">
              <div className="px-4 py-2 bg-base-200 text-primary text-sm font-bold cursor-pointer rounded-full">
                SEE MORE
              </div>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 mt-16">
          <div className="inline-flex items-center w-full">
            <h2 className="pr-3 font-bold text-2xl">Blog Posts</h2>
            <hr className="w-32 lg:w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          </div>
          <div className="py-4 lg:p-8 lg:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {posts?.map(
                (
                  { title, brief, coverImage, slug, dateAdded }: BlogProps,
                  index: number,
                ) => (
                  <div key={index}>
                    <BlogCard
                      slug={slug}
                      title={title}
                      coverImage={coverImage}
                      brief={brief}
                      dateAdded={dateAdded}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex justify-start mt-5 lg:justify-end">
            <Link passHref href="/blogs">
              <div className="px-4 py-2 bg-base-200 text-primary text-sm font-bold cursor-pointer rounded-full">
                SEE MORE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
