"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#development", label: "Development" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-base/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="font-mono text-accent text-[15px] font-bold tracking-tight">
            Offensive Security<span className="animate-pulse">_</span>
          </a>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[13px] font-mono text-secondary hover-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Status / Mobile Toggle */}
        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex items-center">
            <span className="flex items-center gap-2 font-mono text-[11px] text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-[3px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse"></span>
              Available
            </span>
          </div>
          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 text-secondary ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="py-3 border-t border-border bg-surface">
          <div className="px-6 flex flex-col pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[14px] font-mono text-secondary hover-accent transition-colors border-b border-border-subtle last:border-0"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-border flex items-center gap-2">
              <span className="flex items-center gap-2 font-mono text-[12px] text-accent">
                <span className="w-2 h-2 rounded-full bg-accent status-pulse"></span>
                Available
              </span>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
