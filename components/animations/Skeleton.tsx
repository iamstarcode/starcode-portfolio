function Skeleton() {
  return (
    <div className="animate-pulse grid grid-cols-2 gap-6">
      <div className="col-span-2 lg:col-span-1">
        <div className="bg-slate-400   px-4 py-4 rounded-lg h-52"></div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="h-2 bg-slate-400 rounded col-span-3"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-3"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
        </div>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <div className="bg-slate-400   px-4 py-4 rounded-lg h-52"></div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-3"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          <div className="h-2 bg-slate-400 rounded col-span-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
