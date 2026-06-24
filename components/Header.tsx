"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ui/ThemeToggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background/70 dark:bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary hover:from-primary hover:to-foreground transition-all duration-300"
          >
            KDG
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold transition-all relative group",
                      pathname === link.href ? "text-primary" : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
