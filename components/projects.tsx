import { Github, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Port Scanner",
    description: "Simple TCP port scanner written in Python. Detects open ports and displays common service mappings. Built as a learning project to understand socket networking and concurrent scanning.",
    tags: ["Python", "Sockets", "TCP/IP", "Threading"],
    icon: Terminal,
    github: "https://github.com/cristobalmaier/port-scanner",
    buttonText: "View Code",
    status: "Active",
  },
  {
    title: "CTF Writeups",
    description: "Personal documentation of DockerLabs machine solutions. Notes on reconnaissance, enumeration, exploitation, and privilege escalation steps. A reference for learning, not a solution dump.",
    tags: ["DockerLabs", "Methodology", "Documentation"],
    icon: Lock,
    github: "https://github.com/cristobalmaier/pentesting-labs",
    buttonText: "View Writeups",
    status: "Active",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header with terminal prefix */}
        <div className="mb-12">
          <span className="font-mono text-[14px] text-accent mb-2 block">$ projects</span>
          <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary">
            Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border rounded-[6px] transition-all duration-200 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(0,255,65,0.1)] flex flex-col border-l-[3px] border-l-accent"
            >
              <div className="flex items-center p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] text-muted">
                    {project.title.toLowerCase().replace(/ /g, "-")}.sh
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-[18px] text-primary">{project.title}</h3>
                </div>
                <p className="text-[14px] text-secondary leading-[1.75] mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] text-accent/80 bg-accent/5 border border-accent/20 px-2 py-1 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-10 bg-transparent border-border text-secondary font-medium hover:border-accent hover:bg-accent-glow hover:text-primary transition-colors"
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
