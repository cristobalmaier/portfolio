import { MapPin, GraduationCap, Target, Briefcase } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "education", value: "Cybersecurity Student" },
  { icon: Target, label: "focus", value: "Penetration Testing" },
  { icon: Briefcase, label: "status", value: "Open to Internships" },
];

export function About() {
  return (
    <section id="methodology" className="py-[70px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">&gt; cat methodology.md</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">Methodology</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Profile Card */}
          <div className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-border">
              <span className="font-mono text-[13px] text-accent">profile.md</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-[15px] text-secondary leading-[1.8]">
                I approach systems with a breaker&apos;s mindset. As a junior offensive security practitioner, my daily workflow consists of structured reconnaissance, vulnerability identification, and controlled exploitation in local lab environments.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                My methodology relies on terminal-native tools. I use <span className="font-mono text-primary">nmap</span> for mapping attack surfaces, <span className="font-mono text-primary">ffuf</span> for parameter discovery, and custom <span className="font-mono text-primary">Python</span> scripts to automate repetitive tasks and format intelligence.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                Discipline over hacks. I document every finding, every dead end, and every successful exploit in detailed writeups to build a repeatable, reliable attack process.
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
              <p className="text-secondary">learning offensive security for <span className="text-accent">1 year</span></p>
              <p className="text-muted mt-3 mb-1">$ whoami</p>
              <p className="text-secondary">cybersecurity-student@bsas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
