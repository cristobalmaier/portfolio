"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <span className="font-mono text-[13px] text-accent">cmaier.sec</span>

          <div className="flex items-center gap-5">
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
                className="text-muted hover-accent"
                aria-label={item.label}
              >
                <item.icon className="w-[17px] h-[17px]" />
              </a>
            ))}
          </div>

          <span className="font-mono text-[12px] text-muted">
            {new Date().getFullYear()}
          </span>
        </div>

        <div className="mt-6 pt-4 border-t border-border-subtle text-center">
          <p className="font-mono text-[11px] text-muted">
            // built with security in mind. no tracking. no cookies. just code.
          </p>
        </div>
      </div>
    </footer>
  );
}
