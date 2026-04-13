'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ShoppingBag, Heart, Search, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CartDrawer from '@/components/cart-drawer'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Detect active section based on scroll position
      const sections = ['home', 'products', 'about', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'হোম', href: '/', bengali: 'হোম' },
    { label: 'পণ্য', href: '/#products', bengali: 'পণ্য' },
    { label: 'শপ', href: '/shop', bengali: 'শপ' },
    { label: 'আমাদের সম্পর্কে', href: '/#about', bengali: 'আমাদের সম্পর্কে' },
    { label: 'যোগাযোগ', href: '/#contact', bengali: 'যোগাযোগ' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
        setActiveSection(id)
      }
    }
  }

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeSection === ''
    }
    if (href === '/shop') {
      return pathname === '/shop'
    }
    if (href.startsWith('/#')) {
      const section = href.substring(2)
      return pathname === '/' && activeSection === section
    }
    return false
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Nadia Fashion Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-foreground text-lg leading-tight">
                Nadia
              </span>
              <span className="text-xs text-muted-foreground leading-tight">Fashion</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.bengali}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex p-2 hover:bg-secondary rounded-full transition-colors text-foreground">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex p-2 hover:bg-secondary rounded-full transition-colors text-foreground">
              <Heart size={20} />
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex p-2 hover:bg-secondary rounded-full transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-secondary rounded-full transition-colors text-foreground relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-xs text-primary-foreground rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.bengali}
                  </Link>
                )
              })}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full" asChild>
                  <a href="#products">
                    অর্ডার
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 rounded-full" asChild>
                  <a
                    href="https://wa.me/8801742787523?text=আমি%20Nadia%20Fashion%20থেকে%20একটি%20পণ্য%20অর্ডার%20করতে%20আগ্রহী।"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </nav>
  )
}
