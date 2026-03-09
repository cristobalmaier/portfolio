"use client";

import { Shield, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-mono text-muted text-[14px]">cmaier.sec</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: "mailto:cristobalmaier1@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/cristobalmaier", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/cristobal-maier/", label: "LinkedIn" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-muted transition-colors"
                style={{ color: undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e63946")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                aria-label={item.label}
              >
                <item.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[13px] text-muted font-mono">
            {new Date().getFullYear()}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border-subtle text-center">
          <p className="text-[12px] text-muted font-mono">
            // built with security in mind. no tracking. no cookies. just code.
          </p>
        </div>
      </div>
    </footer>
  );
}
