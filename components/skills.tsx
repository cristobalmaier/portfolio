import { Globe, Terminal, Network, Database, Code2, Shield } from "lucide-react";

const skills = [
  {
    icon: Network,
    title: "Network Reconnaissance",
    description: "Learning host discovery, port scanning, and service fingerprinting in local lab environments.",
    tools: ["nmap", "netcat", "ping"],
  },
  {
    icon: Globe,
    title: "Web Application Testing",
    description: "Practicing directory enumeration, parameter fuzzing, and basic web logic analysis.",
    tools: ["ffuf", "curl"],
  },
  {
    icon: Terminal,
    title: "Enumeration",
    description: "Systemically identifying services, users, and potential attack vectors on target machines.",
    tools: ["nmap", "gobuster"],
  },
  {
    icon: Shield,
    title: "Linux Privilege Escalation",
    description: "Studying common misconfigurations, SUID binaries, and path injection techniques in CTF contexts.",
    tools: ["linpeas", "sudo -l", "cron"],
  },
  {
    icon: Code2,
    title: "Security Automation",
    description: "Writing small scripts to automate repetitive recon tasks and format scan output.",
    tools: ["python", "bash"],
  },
  {
    icon: Database,
    title: "Linux Systems",
    description: "Comfortable working in terminal-native environments, configuring lab VMs and workflow tooling.",
    tools: ["Kali Linux", "bspwm"],
  },
];

export function Skills() {
  return (
    <section id="toolkit" className="py-[70px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">$ cat toolkit.json</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">Toolkit</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-surface border border-border rounded-[4px] p-6 transition-all duration-200 hover:border-accent/30 group"
            >
              {/* Filename */}
              <div className="mb-4">
                <span className="font-mono text-[11px] text-muted">
                  // {skill.title.toLowerCase().replace(/ /g, "_")}.sh
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="w-4 h-4 text-accent shrink-0" />
                <h3 className="font-semibold text-[15px] text-primary">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[13px] text-secondary leading-relaxed mb-5">
                {skill.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] text-accent bg-accent/5 border border-accent/15 px-2 py-0.5 rounded-[3px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
