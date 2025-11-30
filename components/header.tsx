"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-school-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
           <img src="/tss-logo.svg" alt="TSS Logo" className="w-18" />
            <span className="font-bold text-lg hidden sm:block">THE STELLAR SCHOOL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-school-accent transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-school-accent transition-colors">
              About
            </a>
            <a href="#facilities" className="hover:text-school-accent transition-colors">
              Facilities
            </a>
            <a href="#programs" className="hover:text-school-accent transition-colors">
              Programs
            </a>
            <a href="#contact" className="hover:text-school-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-school-primary bg-transparent"
            >
              ENQUIRY
            </Button>
            <Button className="bg-school-accent hover:bg-school-accent-light text-white">GET APPS</Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-school-accent transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-school-accent transition-colors">
                About
              </a>
              <a href="#facilities" className="hover:text-school-accent transition-colors">
                Facilities
              </a>
              <a href="#programs" className="hover:text-school-accent transition-colors">
                Programs
              </a>
              <a href="#contact" className="hover:text-school-accent transition-colors">
                Contact
              </a>
              {/* <div className="flex flex-col gap-2 pt-2">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-school-primary w-full bg-transparent"
                >
                  ENQUIRY
                </Button>
                <Button className="bg-school-accent hover:bg-school-accent-light text-white w-full">GET APPS</Button>
              </div> */}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
