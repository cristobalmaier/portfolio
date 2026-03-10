"use client";

import { useEffect, useState, useRef } from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export function Hero() {
  const [tagline, setTagline] = useState("");
  const fullTagline = "First-year student. Real tools. Documented methodology.";
  const [isTyping, setIsTyping] = useState(true);
  const [glitchTrigger, setGlitchTrigger] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      setTagline(fullTagline);
      setIsTyping(false);
      return;
    }

    // Delay typing start to sync with fade sequence (e.g., after 600ms)
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

    // Glitch effect loop
    const glitchInterval = setInterval(() => {
      setGlitchTrigger(true);
      setTimeout(() => setGlitchTrigger(false), 400); // Glitch duration
    }, Math.random() * 4000 + 4000); // 4-8s random interval

    return () => {
      clearTimeout(startDelay);
      clearInterval(glitchInterval);
    };
  }, []);

  // Utility to determine if elements should fade in or just be visible immediately
  const getFadeClass = (delayClass: string) =>
    reducedMotion ? "opacity-100 translate-y-0" : `animate-fade-in-up is-visible ${delayClass}`;

  return (
    <section className="relative flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Faint red radial glow for offsec aesthetic */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,51,51,0.03) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 text-center">

        {/* Role badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-[4px] bg-surface border border-border ${getFadeClass("delay-150")}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
          <span className="font-mono text-[12px] text-secondary">Offensive Security Student</span>
        </div>

        {/* Name */}
        <h1 className={`text-[clamp(36px,6vw,80px)] font-black text-primary leading-tight tracking-tight mb-8 ${getFadeClass("delay-300")} ${glitchTrigger && !reducedMotion ? "glitch-anim" : ""}`}>
          Cristobal Maier
        </h1>

        {/* Terminal description block */}
        <div className={`mb-12 inline-block text-left min-h-[50px] ${getFadeClass("delay-450")}`}>
          <div className="font-mono text-[15px] sm:text-[17px] text-secondary">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-accent select-none">{">"}</span>
              <span>{tagline}</span>
              <span className="inline-block w-[3px] h-[18px] bg-accent cursor-blink ml-0.5 translate-y-[1px]" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 ${getFadeClass("delay-600")}`}>
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-2.5 bg-accent text-black font-mono text-[13px] font-semibold rounded-[4px] hover:bg-accent/90 transition-colors"
          >
            view_experience
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-border text-secondary font-mono text-[13px] rounded-[4px] hover-accent-border transition-all hover-pulse-border"
          >
            view_projects
          </a>
        </div>

        {/* Social links & CV */}
        <div className={`flex items-center justify-center gap-6 ${getFadeClass("delay-750")}`}>
          <div className="flex gap-4">
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
                className="p-3 bg-surface border border-border rounded-[4px] text-muted hover-accent-border transition-all flex items-center justify-center hover-pulse-border"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}

            {/* CV Download Button */}
            <a
              href="/cv.pdf"
              download
              className="px-4 py-3 bg-surface border border-border rounded-[4px] text-muted hover-accent-border transition-all flex items-center gap-2 font-mono text-[13px] hover-pulse-border"
              aria-label="Download CV"
            >
              <FileText className="w-5 h-5" />
              <span>resume.pdf</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
