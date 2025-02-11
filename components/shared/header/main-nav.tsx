import Link from "next/link"
import { ModeToggle } from "@/components/shared/header/mode-toggle"
import { SearchBar } from "@/components/shared/header/search-bar"
import { LoginButton } from "@/components/shared/auth/login-button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function MainNav() {
  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto lg:max-w-full flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex-1 flex items-center flex-row mr-6 max-w-xl">
          <SidebarTrigger className="mr-2 md:hidden" />
          <SearchBar />
        </div>
        <nav className="flex items-center gap-4">
          <LoginButton />
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
