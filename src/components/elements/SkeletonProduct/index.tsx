import Skeleton from "@components/global/Skeleton";

export default function SkeletonProduct() {
  return (
    <div className="product__loading grid md:grid-cols-[4fr_1fr] gap-8">
      <div className="first">
        <Skeleton className="h-72 w-full mb-16" />
        <Skeleton className="h-4 mb-2 w-full" />
        <Skeleton className="h-4 mb-2 w-full" />
        <Skeleton className="h-4 mb-2 w-full" />
        <Skeleton className="h-4 mb-2 w-full" />
      </div>
      <div className="second flex flex-col gap-y-3">
        <Skeleton className="h-4" />
        <Skeleton className="h-6" />
        <Skeleton className="h-10 mb-5" />
        <Skeleton className="h-6" />
      </div>
    </div>
  );
}
