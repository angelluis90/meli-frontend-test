import Skeleton from "@components/global/Skeleton";

export default function SkeletonSearchResults() {
  return (
    <div className="search-results__loading ">
      <div className="result__item grid md:grid-cols-[180px_auto_160px] gap-4 mb-4">
        <Skeleton className="h-[180px] w-full md:w-[180px]" />
        <div className="py-4">
          <Skeleton className="h-6 mb-4 w-full" />
          <Skeleton className="h-6 mb-4 w-full" />
        </div>
        <Skeleton className="h-6 md:mt-4 mb-0 w-full" />
      </div>
      <div className="result__item grid md:grid-cols-[180px_auto_160px] gap-4 mb-4">
        <Skeleton className="h-[180px] w-full md:w-[180px]" />
        <div className="py-4">
          <Skeleton className="h-6 mb-4 w-full" />
          <Skeleton className="h-6 mb-4 w-full" />
        </div>
        <Skeleton className="h-6 md:mt-4 mb-0 w-full" />
      </div>
      <div className="result__item grid md:grid-cols-[180px_auto_160px] gap-4 mb-4">
        <Skeleton className="h-[180px] w-full md:w-[180px]" />
        <div className="py-4">
          <Skeleton className="h-6 mb-4 w-full" />
          <Skeleton className="h-6 mb-4 w-full" />
        </div>
        <Skeleton className="h-6 md:mt-4 mb-0 w-full" />
      </div>
      <div className="result__item grid md:grid-cols-[180px_auto_160px] gap-4 mb-4">
        <Skeleton className="h-[180px] w-full md:w-[180px]" />
        <div className="py-4">
          <Skeleton className="h-6 mb-4 w-full" />
          <Skeleton className="h-6 mb-4 w-full" />
        </div>
        <Skeleton className="h-6 md:mt-4 mb-0 w-full" />
      </div>
    </div>
  );
}
