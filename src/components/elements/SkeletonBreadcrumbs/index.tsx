import Skeleton from "@components/global/Skeleton";

export default function SkeletonBreadcrumbs() {
  return (
    <div className="flex gap-2">
      <Skeleton className="h-4 w-28 max-w-[30%]" />
      <Skeleton className="h-4 w-28 max-w-[30%]" />
      <Skeleton className="h-4 w-28 max-w-[30%]" />
    </div>
  );
}
