import { MapPin, GraduationCap, Target, Briefcase } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "education", value: "Cybersecurity Student" },
  { icon: Target, label: "focus", value: "Penetration Testing" },
  { icon: Briefcase, label: "status", value: "Open to Internships" },
];

export function About() {
  return (
    <section id="about" className="py-[70px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">&gt; about</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Profile Card */}
          <div className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-border">
              <span className="font-mono text-[13px] text-accent">profile.md</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-[15px] text-secondary leading-[1.8]">
                I am a first-year cybersecurity student focused on offensive security.
                I learn by doing — running a local lab with Kali Linux, rooting machines
                on DockerLabs, and writing Python and Bash scripts to automate
                reconnaissance tasks.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                My methodology is terminal-native. I use <span className="font-mono text-primary">nmap</span>,{" "}
                <span className="font-mono text-primary">ffuf</span>, and{" "}
                <span className="font-mono text-primary">curl</span> to analyze web logic and
                network behavior, then document findings in structured writeups.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                I am looking for a junior or internship role where I can continue
                learning alongside experienced security professionals.
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
