"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Tags, Users, HelpCircle, BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Questions",
    href: "/questions",
    icon: BookOpen,
  },
  {
    title: "Tags",
    href: "/tags",
    icon: Tags,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "About",
    href: "/about",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            AI Q&A
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                    (item.href === "/" && pathname === "/") ||
                      (item.href !== "/" &&
                        (pathname === item.href ||
                          (pathname.includes("question") &&
                            item.href === "/questions") ||
                          (pathname.includes("tag") && item.href === "/tags") ||
                          (pathname.includes("user") &&
                            item.href === "/users")))
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      (item.href === "/" && pathname === "/") ||
                        (item.href !== "/" &&
                          (pathname === item.href ||
                            (pathname.includes("question") &&
                              item.href === "/questions") ||
                            (pathname.includes("tag") &&
                              item.href === "/tags") ||
                            (pathname.includes("user") &&
                              item.href === "/users")))
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400"
                    )}
                  />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-center text-gray-500">
        © 2025 AI Q&A Platform
      </SidebarFooter>
    </Sidebar>
  )
}
