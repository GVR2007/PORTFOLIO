'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[auto]' : 'w-[auto]'
      }`}>
      <div className={`flex items-center gap-1 px-2 py-2 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-2xl shadow-primary/5 transition-all duration-500`}>
        <Link href="/" className="px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/50 rounded-full transition-colors leading-none">
          GV
        </Link>
        <div className="w-[1px] h-4 bg-border/60 mx-1" />
        <a href="#projects" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-full">
          Projects
        </a>
        <a href="#skills" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-full">
          Skills
        </a>
        <a href="#contact" className="px-5 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all rounded-full shadow-sm hover:scale-105 active:scale-95">
          Contact
        </a>
      </div>
    </nav>
  )
}
