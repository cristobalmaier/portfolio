import { Search, Network, Terminal, Globe, Code2 } from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "Enumeration",
    description: "Identifying hosts, open ports, and services on target networks. Learning systematic information gathering techniques.",
    tools: ["nmap", "netcat"],
  },
  {
    icon: Network,
    title: "Network Reconnaissance",
    description: "Understanding network topologies and traffic patterns. Practicing packet analysis fundamentals.",
    tools: ["nmap", "tcpdump"],
  },
  {
    icon: Terminal,
    title: "Linux Privilege Escalation",
    description: "Studying common misconfigurations and escalation vectors on Linux systems through lab exercises.",
    tools: ["linpeas", "bash"],
  },
  {
    icon: Globe,
    title: "Web Application Testing",
    description: "Learning to identify basic web vulnerabilities through directory fuzzing and parameter testing.",
    tools: ["ffuf", "curl", "burpsuite"],
  },
  {
    icon: Code2,
    title: "Security Automation",
    description: "Writing scripts to automate repetitive reconnaissance and enumeration tasks.",
    tools: ["python", "bash"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header with terminal prefix */}
        <div className="mb-12">
          <span className="font-mono text-[14px] text-accent mb-2 block">$ skills</span>
          <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary">
            Learning Areas
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-surface border border-border rounded-[6px] p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(0,255,65,0.1)] group"
            >
              {/* Category Filename */}
              <div className="mb-4">
                <span className="font-mono text-[12px] text-muted">
                  // {skill.title.toLowerCase().replace(/ /g, "-")}.sys
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-[16px] text-primary">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[14px] text-secondary leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[12px] text-accent/80 bg-accent/5 border border-accent/20 px-2 py-1 rounded-[4px]"
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
