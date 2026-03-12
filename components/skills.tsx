"use client";

import { Globe, Terminal, Network, Database, Shield, FileCode2, LayoutTemplate } from "lucide-react";

type SkillType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tools: string[];
  filename: string;
};

const offensiveSecurity: SkillType[] = [
  {
    icon: Network,
    title: "Network Reconnaissance",
    description: "Learning host discovery, port scanning, and service fingerprinting in local lab environments.",
    tools: ["nmap", "netcat", "dig"],
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

const development: SkillType[] = [
  {
    icon: FileCode2,
    title: "Python",
    description: "Writing scripts and building small tools to automate reconnaissance tasks and extend existing functionality.",
    tools: ["Scripting", "Tooling"],
    filename: "python.sh"
  },
  {
    icon: LayoutTemplate,
    title: "Web Development",
    description: "Frontend and backend fundamentals applied in full-stack academic projects.",
    tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "MySQL"],
    filename: "web_development.sh"
  },
];

const SkillCard = ({ skill }: { skill: SkillType }) => (
  <div className="bg-surface border border-border rounded-[6px] p-6 transition-all duration-200 hover:border-accent/30 hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(230,57,70,0.1)] flex flex-col h-full">
    {/* Filename */}
    <div className="mb-4">
      <span className="font-mono text-[11px] text-muted">
        // {skill.filename}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-semibold text-[15px] text-primary mb-3">{skill.title}</h3>

    {/* Description */}
    <p className="text-[14px] text-secondary leading-[1.75] mb-5 flex-grow">
      {skill.description}
    </p>

    {/* Tools */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {skill.tools.map((tool: string) => (
        <span
          key={tool}
          className="font-mono text-[11px] text-secondary bg-elevated border border-border px-2 py-0.5 rounded-[4px]"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section id="skills" className="py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-[12px] text-muted mb-3">$ cat skills.json</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-primary">Skills</h2>
        </div>

        {/* Block 1: Offensive Security */}
        <div>
          <h3 className="font-mono text-[14px] text-muted mb-6">
            // offensive_security
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offensiveSecurity.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border my-16" />

        {/* Block 2: Development */}
        <div>
          <h3 className="font-mono text-[14px] text-muted mb-6">
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
