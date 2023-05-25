import BlogSkeleton from '@/components/ui/BlogSkeleton';
export default function Loading() {
  return (
    <div className="bg-base-100 fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <div className="text-gray-500 text-xs font-light mt-2 text-center">
          Please wait... in blogs
          {<BlogSkeleton />}
        </div>
      </div>
    </div>
  );
}
