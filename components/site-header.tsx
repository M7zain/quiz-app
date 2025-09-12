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
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <span className="font-medium">المحامي مرزوق  العاصي </span>
              <Button variant="ghost" size="icon" className="rounded-full p-0">
                <Avatar className="size-9">
                  <AvatarImage src="/user.png" alt="User" />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </Button>
      </div>
    </header>
  )
}


