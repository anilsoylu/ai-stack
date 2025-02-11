import { AppSidebar } from "@/components/app-sidebar"
import { MainNav } from "@/components/shared/header/main-nav"
import { TopWeeklyPosts } from "@/components/top-weekly-posts"

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <MainNav />
        <main className="flex-1 container mx-auto lg:max-w-full py-6 px-4 md:px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">{children}</div>
            <div className="w-full lg:w-80">
              <TopWeeklyPosts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
