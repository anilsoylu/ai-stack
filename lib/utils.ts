import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isActiveMenuItem = (
  itemHref: string,
  pathname: string
): boolean => {
  if (itemHref === "/" && pathname === "/") return true
  if (itemHref === "/") return false

  return (
    pathname === itemHref ||
    (pathname.includes("question") && itemHref === "/questions") ||
    (pathname.includes("tag") && itemHref === "/tags") ||
    (pathname.includes("user") && itemHref === "/users")
  )
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}
