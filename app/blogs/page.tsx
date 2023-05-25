//import blogs from '../../data/blogs';

import BlogCard from '@/components/BlogCard';
import getPosts from '@/lib/getPosts';
import { BlogProps } from '@/types';
import { Suspense } from 'react';

import Skeleton from '@/components/animations/Skeleton';
import { Basic } from '@/components/animations/Basic';

const awaitTimeout = (delay: number | undefined) =>
  new Promise(resolve => setTimeout(resolve, delay));
const Projects = async () => {
  const data: any = await getPosts();
  const posts = data.data.user.publication.posts;
  //const a = await dummYPrommis()
  //await awaitTimeout(10000);

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
    <div className="w-full mx-auto lg:max-w-5xl">
      <div className="inline-flex items-center w-full">
        <h2 className="pr-3 font-bold text-lg lg:text-2xl">Blog Posts</h2>
        <hr className="w-32 lg:w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>

      <Suspense fallback={<Skeleton />}>
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 mt-5">
          {posts?.map(
            (
              { title, brief, coverImage, slug, dateAdded }: BlogProps,
              index: number,
            ) => (
              <Basic style={{ height: '100%' }} variants={variants} key={index}>
                <BlogCard
                  slug={slug}
                  title={title}
                  coverImage={coverImage}
                  brief={brief}
                  dateAdded={dateAdded}
                />
              </Basic>
            ),
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;
