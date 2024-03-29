//import blogs from '../../data/blogs';

import BlogCard from '@/components/BlogCard';
import getPosts from '@/lib/getPosts';
import { BlogProps } from '@/types';
import { Suspense } from 'react';

import Skeleton from '@/components/animations/Skeleton';
import { Basic } from '@/components/animations/Basic';

import { siteConfig } from '@/config/site';

const Projects = async () => {
  const data: any = await getPosts(10);
  const posts = data?.data?.user?.posts?.edges;

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
    <div className="mx-auto w-full lg:max-w-5xl">
      <div className="inline-flex w-full items-center">
        <h2 className="pr-3 text-lg font-bold lg:text-2xl">Blog Posts</h2>
        <hr className="my-4 h-1 w-32 rounded border-0 bg-gray-200 dark:bg-gray-700 lg:w-64" />
      </div>

      <Suspense fallback={<Skeleton />}>
        <div className="mt-5 grid grid-cols-1 items-center gap-5 lg:grid-cols-2">
          {posts?.map(({ node }: { node: BlogProps }, index: number) => (
            <Basic style={{ height: '100%' }} variants={variants} key={index}>
              <BlogCard
                slug={node.slug}
                title={node.title}
                coverImage={node.coverImage}
                brief={node.brief}
                publishedAt={node.publishedAt}
              />
            </Basic>
          ))}
        </div>
        <a href={siteConfig.links.blog} target="_blank">
          <div className="mt-6 cursor-pointer rounded-full py-2 text-sm font-bold text-primary">
            SEE MORE @ {siteConfig.links.blog}
          </div>
        </a>
      </Suspense>
    </div>
  );
};

export default Projects;
