import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { MainNav } from "@/components/shared/header/main-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { TopWeeklyPosts } from "@/components/top-weekly-posts"

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "AI Q&A Platform",
  description: "An open-source AI-focused Q&A platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
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
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
