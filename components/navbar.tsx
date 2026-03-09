"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#labs", label: "Labs" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-mono text-[13px] text-accent">cmaier.sec</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-mono text-secondary hover-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status badge */}
          <div className="hidden md:flex items-center">
            <span className="flex items-center gap-2 font-mono text-[11px] text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
              available
            </span>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden py-3 border-t border-border bg-surface">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-[13px] font-mono text-secondary hover-accent"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 px-3">
                <span className="flex items-center gap-2 font-mono text-[11px] text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
                  available
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
