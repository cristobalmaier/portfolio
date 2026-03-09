export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden bg-base">
      {/* Faint green radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,65,0.04) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 text-center py-20">

        {/* Role badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-md bg-elevated border border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-accent status-pulse" />
          <span className="font-mono text-[12px] text-muted">cybersecurity student</span>
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
        <div className="flex items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="h-10 px-6 rounded-[4px] bg-accent text-black font-mono text-[13px] font-semibold flex items-center hover:bg-accent/90 transition-colors"
          >
            view_projects
          </a>
          <a
            href="#contact"
            className="h-10 px-6 rounded-[4px] bg-transparent border border-border font-mono text-[13px] text-secondary flex items-center hover-accent-border"
          >
            initialize_contact
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8 mb-16">
          {[
            { href: "mailto:cristobalmaier1@gmail.com", label: "email" },
            { href: "https://github.com/cristobalmaier", label: "github" },
            { href: "https://www.linkedin.com/in/cristobal-maier/", label: "linkedin" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "email" ? "_blank" : undefined}
              rel={item.label !== "email" ? "noopener noreferrer" : undefined}
              className="font-mono text-[12px] text-muted hover-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto py-8 border-t border-border">
          {[
            { label: "machines_rooted", value: "10" },
            { label: "very_easy", value: "8" },
            { label: "easy", value: "2" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-[32px] font-bold text-primary font-mono mb-1">{stat.value}</div>
              <div className="font-mono text-[11px] text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
