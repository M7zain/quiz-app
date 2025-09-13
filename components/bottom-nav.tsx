"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { HomeIcon, LinkIcon } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2">
        <TabLink href="/" active={pathname === "/"}>
          <HomeIcon className="size-5" />
        </TabLink>
        <TabLink href="/social" active={pathname?.startsWith("/social") ?? false} >
          <span className="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors">
            اطلب استشارتك الآن
          </span>
        </TabLink>
      </div>
    </nav>
  )
}

function TabLink({
  href,
  active,
  label,
  children,
}: {
  href: string
  active?: boolean
  label?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-3 text-sm",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
      aria-current={active ? "page" : undefined}
    >
      {children}
      <span className="font-medium">{label}</span>
    </Link>
  )
}


