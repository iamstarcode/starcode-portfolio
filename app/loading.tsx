import BlogSkeleton from '@/components/ui/BlogSkeleton';
export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-base-100">
      <div className="flex flex-col items-center rounded-lg border bg-white px-5 py-2">
        <div className="mt-2 text-center text-xs font-light text-gray-500">
          Please wait...
          {/*  <BlogSkeleton /> */}
        </div>
      </div>
    </div>
  );
}
