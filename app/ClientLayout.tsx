"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { TenantProvider } from "@/contexts/tenant-context"
import { LanguageProvider } from "@/contexts/language-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import TenantSwitcher from "@/components/tenant-switcher"
import { useTracking } from "@/hooks/use-tracking"
import "@/lib/i18n"

function TrackingWrapper({ children }: { children: React.ReactNode }) {
  useTracking() // This will automatically track page views
  return <>{children}</>
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isBegginsHomePage = pathname === "/beggins-home"

  return (
    <TenantProvider>
      <LanguageProvider>
        <TrackingWrapper>
          <div className="min-h-screen flex flex-col">
            {!isHomePage && !isBegginsHomePage && <Navigation />}
            <main className="flex-1">{children}</main>
            <Footer />
            <TenantSwitcher />
            <Toaster />
          </div>
        </TrackingWrapper>
      </LanguageProvider>
    </TenantProvider>
  )
}
