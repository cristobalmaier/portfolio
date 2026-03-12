"use client";

import { Github } from "lucide-react";

const projects = [
  {
    title: "NETSCOPE — Port Scanner",
    description:
      "TCP port scanner built from scratch in Python. Maps open ports and identifies common services on target hosts. Designed as a first-phase recon tool for local lab engagements — faster to customize than running nmap flags from memory.",
    tags: ["Python", "Sockets", "TCP/IP", "Threading"],
    github: "https://github.com/cristobalmaier/port-scanner",
    buttonText: "View Code",
    status: "In Progress",
    filename: "netscope---port-scanner.sh",
  },
  {
    title: "DIRSCOPE — Directory Fuzzer",
    description:
      "Directory and web file fuzzer written in pure Python. Discovers hidden paths on HTTP/HTTPS servers using a wordlist. Built as an alternative to ffuf for environments where installing external tools is not an option. Handles concurrent scanning, status code colorization, and redirect resolution.",
    tags: ["Python", "Fuzzing", "Reconnaissance", "Automation"],
    github: "https://github.com/cristobalmaier/dirscope",
    buttonText: "View Source",
    status: "In Progress",
    filename: "dirscope---directory-fuzzer.sh",
  },
  {
    title: "CTF Writeups",
    description:
      "Structured notes documenting the attack chain for each DockerLabs machine: reconnaissance, enumeration, exploitation, and privilege escalation. A living methodology reference, not a solution dump.",
    tags: ["DockerLabs", "Methodology", "Documentation"],
    github: "https://github.com/cristobalmaier/pentesting-labs",
    buttonText: "View Writeups",
    status: "Ongoing",
    filename: "ctf-writeups.sh",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "border-l-green text-green bg-green/10";
    case "In Progress":
      return "border-l-amber text-amber bg-amber/10";
    case "Ongoing":
    default:
      return "border-l-accent text-accent bg-accent/10";
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-[12px] text-muted mb-3">$ ls ./projects</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-primary">Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-surface border border-border border-l-[3px] ${getStatusColor(project.status).split(' ')[0]} rounded-[6px] flex flex-col transition-all duration-200 hover:border-accent/30 hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(230,57,70,0.15)]`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-border">
                <span className="font-mono text-[11px] text-muted">
                  {project.filename}
                </span>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded-[4px] border ${getStatusColor(project.status).split(' ').slice(1).join(' ')} border-current/20`}>
                  {project.status}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-[17px] text-primary mb-3">{project.title}</h3>
                <p className="text-[14px] text-secondary leading-[1.75] mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-secondary bg-elevated border border-border px-2 py-0.5 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-border font-mono text-[12px] text-secondary rounded-[6px] hover:border-accent hover:text-primary transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
