"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#labs", label: "Labs" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-1.5 text-[14px] font-medium text-secondary transition-colors hover:text-accent"
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-surface border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-mono text-primary text-[14px]">cmaier<span className="text-accent">.sec</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Status Badge */}
          <div className="hidden md:flex items-center">
            <span className="flex items-center gap-2 font-mono text-[12px] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
              Available
            </span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-3 border-t border-border bg-surface">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <div className="mt-3 px-3 flex items-center">
                <span className="flex items-center gap-2 font-mono text-[12px] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
                  Available
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
