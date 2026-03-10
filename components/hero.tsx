import { Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-base">
      {/* Faint red radial glow for offsec aesthetic */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,51,51,0.03) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 text-center">

        {/* Role badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-[4px] bg-surface border border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
          <span className="font-mono text-[12px] text-muted">junior offensive security practitioner</span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(36px,6vw,80px)] font-black text-primary leading-tight tracking-tight mb-8">
          Cristobal Maier
        </h1>

        {/* Terminal description block */}
        <div className="mb-12 inline-block text-left">
          <div className="font-mono text-[15px] sm:text-[17px] text-secondary space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-accent select-none">{">"}</span>
              <span>Mapping attack surfaces</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent select-none">{">"}</span>
              <span>Breaking weak assumptions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent select-none">{">"}</span>
              <span>Documenting how systems fail</span>
              <span className="inline-block w-[9px] h-[18px] bg-accent cursor-blink ml-0.5 translate-y-[1px]" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-2.5 bg-accent text-black font-mono text-[13px] font-semibold rounded-[4px] hover:bg-accent/90 transition-colors"
          >
            view_experience
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-border text-secondary font-mono text-[13px] rounded-[4px] hover-accent-border transition-all"
          >
            view_projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
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
              className="p-3 bg-surface border border-border rounded-[4px] text-muted hover-accent-border transition-all"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
