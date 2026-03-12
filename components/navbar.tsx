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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-surface border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] w-full mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <a href="#" className="font-mono text-primary text-[14px] tracking-tight">
          cmaier.sec
        </a>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 text-[14px] font-sans font-medium transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-accent"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Status / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2 font-mono text-[11px] text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-green status-pulse"></span>
            Available
          </span>
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
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="py-3 border-t border-border bg-surface">
          <div className="px-6 flex flex-col pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-[14px] font-sans font-medium transition-colors border-b border-border-subtle last:border-0 ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-border flex items-center gap-2">
              <span className="flex items-center gap-2 font-mono text-[11px] text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-green status-pulse"></span>
                Available
              </span>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
