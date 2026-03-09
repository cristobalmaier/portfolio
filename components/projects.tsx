import { Github, Terminal, Lock, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NETSCOPE — Port Scanner",
    description: "TCP port scanner written in pure Python. Detects open ports, identifies services by number, and raises automatic alerts for dangerous configurations — nmap-style output. Uses ThreadPoolExecutor for concurrent scanning of up to 200 ports simultaneously.",
    tags: ["Python", "Sockets", "TCP/IP", "Threading", "Pentesting"],
    icon: Terminal,
    github: "https://github.com/cristobalmaier/port-scanner",
    buttonText: "View Code",
    status: "Active",
    statusType: "online" as const,
  },
  {
    title: "CTF Writeups",
    description: "Documenting the complete attack chain for each DockerLabs machine reconnaissance, enumeration, exploitation, and privilege escalation. Repository functions as a living methodology reference, not a solution dump.",
    tags: ["DockerLabs", "Methodology", "Documentation"],
    icon: Lock,
    github: "https://github.com/cristobalmaier/pentesting-labs",
    buttonText: "View Writeups",
    status: "Active",
    statusType: "info" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary mb-12">
          Projects
        </h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-surface border border-border rounded-[6px] transition-all duration-200 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(230,57,70,0.1)] flex flex-col border-l-[3px] ${project.status === 'Completed' ? 'border-l-green' :
                project.status === 'In Progress' ? 'border-l-amber' : 'border-l-accent'
                }`}
            >
              <div className="flex items-center p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] text-muted">
                    {project.title.toLowerCase().replace(/ /g, "-")}.sh
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-[18px] text-primary mb-3">{project.title}</h3>
                <p className="text-[14px] text-secondary leading-[1.75] mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] text-secondary bg-elevated border border-border px-2 py-1 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-10 bg-transparent border-border text-secondary font-medium hover:border-accent hover:bg-accent/5 hover:text-primary transition-colors"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {project.buttonText || "View Code"}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
