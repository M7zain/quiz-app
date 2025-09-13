"use client"

import Link from "next/link"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-horizontal.png" 
            alt="مجموعة القمة القانونية - ALQIMMAH LEGAL GROUP" 
            width={200} 
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-medium text-sm">الدكتور المحامي مرزوق العاصي</span>
          <Button variant="ghost" size="icon" className="rounded-full p-0">
            <Avatar className="size-9">
              <AvatarImage src="/user.png" alt="User" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>

      
    </header>
  )
}


