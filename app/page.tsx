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
  const data: any = await getPosts(4);
  const posts = data?.data?.user?.posts?.edges;

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <IndexGreeting />
        <div className="flex w-full items-center justify-center lg:justify-end">
          <IndexFloatSection />
        </div>

        <div className="mt-16 lg:col-span-2">
          <div className="inline-flex w-full items-center">
            <h2 className="pr-3 text-2xl font-bold">Projects</h2>
            <hr className="my-4 h-1 w-32 rounded border-0 bg-gray-200 dark:bg-gray-700 lg:w-64" />
          </div>
          <div className="mx-auto py-4 lg:max-w-5xl lg:p-8">
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
          <div className="mt-5 flex justify-start lg:justify-end">
            <Link passHref href="/projects">
              <div className="cursor-pointer rounded-full bg-base-200 px-4 py-2 text-sm font-bold text-primary shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)]">
                SEE MORE
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:col-span-2">
          <div className="inline-flex w-full items-center">
            <h2 className="pr-3 text-2xl font-bold">Blog Posts</h2>
            <hr className="my-4 h-1 w-32 rounded border-0 bg-gray-200 dark:bg-gray-700 lg:w-64" />
          </div>
          <div className="mx-auto py-4 lg:max-w-5xl lg:p-8">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {posts?.map(({ node }: { node: BlogProps }, index: number) => (
                <div key={index}>
                  <BlogCard
                    slug={node.slug}
                    title={node.title}
                    coverImage={node.coverImage}
                    brief={node.brief}
                    publishedAt={node.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-start lg:justify-end">
            <Link passHref href="/blogs">
              <div className="cursor-pointer rounded-full bg-base-200 px-4 py-2 text-sm font-bold text-primary shadow-[0rem_0.5rem_calc(4*0.5rem)_var(--shadow-color)]">
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
