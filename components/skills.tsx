import { Shield, Globe, Terminal, Database, Code2, Network } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Web Security",
    description: "Studying web traffic interception and basic application logic flaws.",
    tools: ["ffuf", "curl"],
    level: 35,
  },
  {
    icon: Terminal,
    title: "Penetration Testing",
    description: "Practicing host enumeration and access vector identification in local lab environments.",
    tools: ["nmap", "hydra"],
    level: 30,
  },
  {
    icon: Network,
    title: "Networking",
    description: "Learning basic packet flow analysis and protocol fundamentals.",
    tools: ["nmap", "netcat"],
    level: 50,
  },
  {
    icon: Database,
    title: "Linux Systems",
    description: "Configuring local lab virtual machines and terminal-native workflows.",
    tools: ["Kali Linux", "bspwm"],
    level: 55,
  },
  {
    icon: Code2,
    title: "Scripting",
    description: "Writing scripts to automate repetitive reconnaissance tasks.",
    tools: ["Python", "Bash"],
    level: 40,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary mb-12">
          Skills
        </h2>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-surface border border-border rounded-[6px] p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(230,57,70,0.1)] group"
            >
              {/* Category Filename */}
              <div className="mb-4">
                <span className="font-mono text-[12px] text-muted">
                  // {skill.title.toLowerCase().replace(" ", "-")}.sys
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="w-5 h-5 text-primary" />
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
                    className="font-mono text-[12px] text-secondary bg-elevated border border-border px-2 py-1 rounded-[4px]"
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
