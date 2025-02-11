"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Tags, Users, HelpCircle, BookOpen } from "lucide-react"
import { cn, isActiveMenuItem } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NAV_ITEMS } from "@/types/menu"

const MenuItem = ({
  href,
  icon: Icon,
  title,
}: {
  href: string
  icon: typeof Home
  title: string
}) => {
  const pathname = usePathname()
  const isActive = isActiveMenuItem(href, pathname)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
            isActive
              ? "bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5",
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-400"
            )}
          />
          <span className="font-medium">{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            AI Q&A
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 text-xs text-center text-gray-500">
        © 2025 AI Q&A Platform
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
