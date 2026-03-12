"use client";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export function Hero() {
  const [tagline, setTagline] = useState("");
  const fullTagline = "First-year student. Real tools. Documented methodology.";
  const [isTyping, setIsTyping] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      setTagline(fullTagline);
      setIsTyping(false);
      return;
    }

    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setTagline(fullTagline.slice(0, i + 1));
        i++;
        if (i >= fullTagline.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 40);

      return () => clearInterval(interval);
    }, 600);

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  const getFadeClass = (delayClass: string) =>
    reducedMotion ? "opacity-100 translate-y-0" : `animate-fade-in-up is-visible ${delayClass}`;

  return (
    <section className="relative flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle red radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.03) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 text-center">

        {/* Role badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-[6px] bg-elevated border border-border ${getFadeClass("delay-150")}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[12px] text-secondary">Offensive Security Student</span>
        </div>

        {/* Name */}
        <h1 className={`text-[clamp(40px,7vw,80px)] font-extrabold text-primary leading-[1.1] tracking-tight mb-6 ${getFadeClass("delay-300")}`}>
          Cristobal Maier
        </h1>

        {/* Terminal tagline */}
        <div className={`mb-12 inline-block text-left min-h-[50px] ${getFadeClass("delay-450")}`}>
          <div className="font-mono text-[15px] sm:text-[17px] text-secondary">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span>{tagline}</span>
              <span className="inline-block w-[2px] h-[18px] bg-accent cursor-blink" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${getFadeClass("delay-600")}`}>
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-3 bg-accent text-primary font-sans text-[14px] font-medium rounded-[6px] hover:bg-accent/90 transition-colors duration-200"
          >
            View Experience
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-border text-secondary font-sans text-[14px] font-medium rounded-[6px] hover:border-accent hover:text-primary transition-all duration-200"
          >
            View Projects
          </a>
        </div>

        {/* Stats row */}
        <div className={`flex items-center justify-center gap-8 sm:gap-12 pt-8 border-t border-border ${getFadeClass("delay-750")}`}>
          <div className="text-center">
            <div className="text-[24px] font-bold text-primary">1+</div>
            <div className="font-mono text-[11px] text-muted uppercase tracking-wider">Year Learning</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-bold text-primary">3+</div>
            <div className="font-mono text-[11px] text-muted uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-bold text-primary">10+</div>
            <div className="font-mono text-[11px] text-muted uppercase tracking-wider">CTF Writeups</div>
          </div>
        </div>

        {/* Social links */}
        <div className={`flex items-center justify-center gap-4 mt-10 ${getFadeClass("delay-900")}`}>
          {[
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: Github, href: "https://github.com/cristobalmaier", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/cristobal-maier/", label: "LinkedIn" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-3 bg-surface border border-border rounded-[6px] text-muted hover:border-accent hover:text-primary transition-all duration-200"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="px-4 py-3 bg-surface border border-border rounded-[6px] text-muted hover:border-accent hover:text-primary transition-all duration-200 flex items-center gap-2 font-mono text-[13px]"
            aria-label="Download CV"
          >
            <FileText className="w-5 h-5" />
            <span>resume.pdf</span>
          </a>
        </div>

      </div>
    </section>
  );
}
