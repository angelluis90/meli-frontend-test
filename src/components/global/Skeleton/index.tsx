import { HTMLAttributes } from "react";

type TSkeleton = Pick<HTMLAttributes<HTMLElement>, "className">

export default function Skeleton({ className }: TSkeleton) {
    const classes = className ?? "w-full h-8"
    return <div className={`animate-pulse rounded bg-dark-gray ${classes}`}></div>
}