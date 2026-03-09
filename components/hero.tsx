import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

function SocialIcon({ icon: Icon, href, label }: { icon: LucideIcon; href: string; label: string }) {
  return (
    <a
      href={href}
      target={label !== "Email" ? "_blank" : undefined}
      rel={label !== "Email" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-muted hover:text-accent transition-colors duration-200"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden bg-base">
      {/* Subtle radial gradient with terminal green */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,65,0.03) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 text-center py-20">
        {/* Role badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-elevated border border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[13px] text-muted">Cybersecurity Student</span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(32px,5vw,72px)] font-black text-primary leading-tight tracking-tight mb-6">
          Cristobal Maier
        </h1>

        {/* Terminal-style description */}
        <div className="mb-12 max-w-xl mx-auto">
          <div className="font-mono text-[14px] sm:text-[16px] text-secondary space-y-1 text-left inline-block">
            <div className="flex items-center gap-2">
              <span className="text-accent">{">"}</span>
              <span>Mapping attack surfaces</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">{">"}</span>
              <span>Breaking weak assumptions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">{">"}</span>
              <span>Documenting how systems fail</span>
              <span className="inline-block w-[10px] h-[20px] bg-accent cursor-blink ml-1" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <Button asChild className="h-10 px-6 rounded-[6px] bg-accent hover:bg-accent-dim text-base font-medium border-0 transition-colors">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" className="h-10 px-6 rounded-[6px] bg-transparent border-border text-secondary hover:border-accent hover:bg-accent-glow hover:text-primary transition-colors">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Social - Minimal */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {[
            { icon: Mail, href: "mailto:cristobalmaier1@gmail.com", label: "Email" },
            { icon: Github, href: "https://github.com/cristobalmaier", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/cristobal-maier/", label: "LinkedIn" },
          ].map((item) => (
            <SocialIcon key={item.label} icon={item.icon} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8 border-t border-border">
          {[
            { label: "Machines Rooted", value: "10" },
            { label: "Very Easy", value: "8" },
            { label: "Easy", value: "2" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-[28px] font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[12px] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
