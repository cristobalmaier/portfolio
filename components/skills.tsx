import { Globe, Terminal, Network, Database, Shield, FileCode2, Cpu, LayoutTemplate, GitBranch } from "lucide-react";

type SkillType = {
  icon: any;
  title: string;
  description: string;
  tools: string[];
  filename: string;
};

const offensiveSecurity = [
  {
    icon: Network,
    title: "Network Reconnaissance",
    description: "Learning host discovery, port scanning, and service fingerprinting in local lab environments.",
    tools: ["nmap", "netcat"],
    filename: "network_reconnaissance.sh"
  },
  {
    icon: Globe,
    title: "Web Application Testing",
    description: "Practicing directory enumeration, parameter fuzzing, and basic web logic analysis.",
    tools: ["ffuf", "curl"],
    filename: "web_application_testing.sh"
  },
  {
    icon: Terminal,
    title: "Enumeration",
    description: "Systematically identifying services, users, and potential attack vectors on target machines.",
    tools: ["gobuster", "nmap"],
    filename: "enumeration.sh"
  },
  {
    icon: Shield,
    title: "Linux Privilege Escalation",
    description: "Studying common misconfigurations, SUID binaries, and path injection techniques in CTF contexts.",
    tools: ["linpeas", "sudo -l", "cron"],
    filename: "linux_privilege_escalation.sh"
  },
  {
    icon: Database,
    title: "Linux Systems",
    description: "Comfortable working in terminal-native environments, configuring lab VMs and workflow tooling.",
    tools: ["Kali Linux", "bspwm"],
    filename: "linux_systems.sh"
  },
];

const development = [
  {
    icon: FileCode2,
    title: "Python",
    description: "Intermediate level. OOP, file I/O, API consumption, and socket programming applied to security tooling.",
    tools: ["Python", "OOP", "Sockets", "APIs"],
    filename: "python.sh"
  },
  {
    icon: Cpu,
    title: "Systems Programming",
    description: "Low-level programming fundamentals including memory management, pointers, and data structures.",
    tools: ["C", "C++"],
    filename: "systems_programming.sh"
  },
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "Frontend and backend fundamentals applied in full-stack academic projects.",
    tools: ["JavaScript", "Node.js", "Express", "EJS"],
    filename: "web_development.sh"
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Daily use of Git for project management, documentation, and collaborative development.",
    tools: ["Git", "GitHub"],
    filename: "version_control.sh"
  },
];

export function Skills() {
  const SkillCard = ({ skill }: { skill: SkillType }) => (
    <div className="bg-surface border border-border rounded-[4px] p-6 transition-all duration-200 hover:border-accent/30 group flex flex-col h-full">
      {/* Filename */}
      <div className="mb-4">
        <span className="font-mono text-[11px] text-muted">
          // {skill.filename}
        </span>
      </div>

      {/* Title & Icon */}
      <div className="flex items-center gap-3 mb-3">
        <skill.icon className="w-4 h-4 text-accent shrink-0" />
        <h3 className="font-semibold text-[15px] text-primary">{skill.title}</h3>
      </div>

      {/* Description */}
      <p className="text-[13px] text-secondary leading-relaxed mb-5 flex-grow">
        {skill.description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {skill.tools.map((tool: string) => (
          <span
            key={tool}
            className="font-mono text-[11px] text-accent bg-accent/5 border border-accent/15 px-2 py-0.5 rounded-[3px]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">$ cat skills.json</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">Skills</h2>
        </div>

        {/* Block 1: Offensive Security */}
        <div>
          <h3 className="font-mono text-[15px] text-secondary mb-6">
            // offensive_security
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offensiveSecurity.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border my-12" />

        {/* Block 2: Development */}
        <div>
          <h3 className="font-mono text-[15px] text-secondary mb-6">
            // development
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {development.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
