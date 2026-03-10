import { MapPin, GraduationCap, Crosshair, CircleDot } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "Education", value: ["Cybersecurity Student", "Technical Degree in Programming"] },
  { icon: Crosshair, label: "Focus", value: "Penetration Testing" },
  { icon: CircleDot, label: "Status", value: "Open to Internships" },
];

export function About() {
  return (
    <section id="about" className="py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">&gt; cat about_me.md</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Profile Card */}
          <div className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-border">
              <span className="font-mono text-[13px] text-accent">profile.md</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-[15px] text-secondary leading-[1.8]">
                I approach systems with a breaker&apos;s mindset. My focus is offensive security — understanding how infrastructure fails before someone with bad intentions finds out first.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                My methodology is terminal-native. I use <span className="font-mono text-primary">nmap</span> for host discovery, <span className="font-mono text-primary">ffuf</span> for parameter enumeration, and custom <span className="font-mono text-primary">Python</span> scripts to automate recon and parse output. My background in software development means I don't just run tools — I build them when they don't exist or don't fit the task.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                Discipline over hacks. Every finding gets documented. Every dead end gets logged. The goal is a repeatable, reliable attack process — not a lucky shot.
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <div key={item.label} className="bg-elevated border border-border rounded-[4px] p-4 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <item.icon className="w-3.5 h-3.5 text-muted" />
                    <span className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]">{item.label}</span>
                  </div>
                  {Array.isArray(item.value) ? (
                    <div className="flex flex-col gap-[2px]">
                      {item.value.map((v, i) => (
                        <span key={i} className={`font-sans text-[14px] leading-tight ${i === 0 ? "font-medium text-primary" : "text-secondary"}`}>{v}</span>
                      ))}
                    </div>
                  ) : (
                    <span className="font-sans text-[14px] font-medium text-primary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
