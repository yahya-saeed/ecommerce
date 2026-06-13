export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-slate-900 rounded-3xl p-4">
      <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 mt-4 rounded" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 mt-2 w-1/2 rounded" />
    </div>
  );
}
