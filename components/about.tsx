import { MapPin, GraduationCap, Target, Briefcase } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "education", value: "Cybersecurity Student" },
  { icon: Target, label: "focus", value: "Penetration Testing" },
  { icon: Briefcase, label: "status", value: "Open to Internships" },
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
                <div key={item.label} className="bg-surface border border-border rounded-[4px] p-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-muted">{item.label}</span>
                  <span className="text-[14px] font-medium text-primary">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Terminal note */}
            <div className="bg-surface border border-border rounded-[4px] p-5 font-mono text-[13px]">
              <p className="text-muted mb-1">$ uptime</p>
              <p className="text-secondary">first year <span className="text-accent">cybersecurity student</span></p>
              <p className="text-muted mt-3 mb-1">$ whoami</p>
              <p className="text-secondary">cristobalmaier@bsas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
