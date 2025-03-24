"use client"

import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { SidebarProvider } from "@/components/sidebar-context"
import { useEffect } from "react"
import { useSidebar } from "./sidebar-context"

interface LayoutContentProps {
  children: ReactNode
}

function LayoutContent({ children }: LayoutContentProps) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  // Close sidebar on route change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Keep sidebar open on large screens
      } else {
        closeSidebar()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [closeSidebar])

  return (
    <div className="min-h-screen bg-[#0f101a] text-white flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        {/* Overlay for mobile - only visible when sidebar is open */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={closeSidebar} aria-hidden="true" />
        )}
        {children}
      </div>
    </div>
  )
}

export function Layout({ children }: LayoutContentProps) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}

