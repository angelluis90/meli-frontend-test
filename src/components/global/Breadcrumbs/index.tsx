import SkeletonBreadcrumbs from "@src/components/elements/SkeletonBreadcrumbs";
import useCategories from "@src/store/categories";
import { PropsWithChildren } from "react";

type BreadcrumbItemProps = PropsWithChildren & {
  isLast: boolean;
};

function BreadcrumbItem({ children, isLast }: BreadcrumbItemProps) {
  return (
    <>
      {isLast ? (
        <div className="font-bold">{children}</div>
      ) : (
        <>
          <a href="#" className={`flex items-center`}>
            {children}
          </a>
          <span className="mx-2">&gt;</span>
        </>
      )}
    </>
  );
}

export default function Breadcrumbs() {
  const categories = useCategories(state => state.categories)  
  const isLoading = useCategories(state => state.isLoading)

  return (
    <div className="breadcrumbs flex flex-wrap mb-4 text-[14px] leading-none text-dark-gray">
      {isLoading ? <SkeletonBreadcrumbs /> : null}
      {!isLoading && categories.map((item, index, arr) => (
        <BreadcrumbItem
          key={item.toLowerCase().split(/\s/).join("-")}
          isLast={index === arr.length - 1}
        >
          {item}
        </BreadcrumbItem>
      ))}
    </div>
  );
}
