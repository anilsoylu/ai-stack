import { Home, Tags, Users, HelpCircle, BookOpen } from "lucide-react"

export const NAV_ITEMS = [
  { title: "Home", href: "/", icon: Home },
  { title: "Questions", href: "/questions", icon: BookOpen },
  { title: "Tags", href: "/tags", icon: Tags },
  { title: "Users", href: "/users", icon: Users },
  { title: "About", href: "/about", icon: HelpCircle },
] as const
