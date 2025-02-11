import { ModeToggle } from "@/components/shared/header/mode-toggle"
import { SearchBar } from "@/components/shared/header/search-bar"
import { LoginButton } from "@/components/shared/auth/login-button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const NavigationActions = () => {
  return (
    <nav
      className="flex items-center gap-4"
      role="navigation"
      aria-label="User actions"
    >
      <LoginButton />
      <ModeToggle />
    </nav>
  )
}

const SearchSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex-1 flex items-center flex-row mr-6 max-w-xl",
        className
      )}
    >
      <SidebarTrigger className="mr-2 md:hidden" aria-label="Toggle sidebar" />
      <SearchBar />
    </div>
  )
}

export function MainNav() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background" role="banner">
      <div className="container mx-auto lg:max-w-full">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <SearchSection />
          <NavigationActions />
        </div>
      </div>
    </header>
  )
}

export default MainNav
