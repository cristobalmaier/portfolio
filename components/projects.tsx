"use client";

import { Github, Terminal, Lock } from "lucide-react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useScanLines } from "@/hooks/use-scan-lines"; const projects = [
  {
    title: "NETSCOPE — Port Scanner",
    description:
      "Simple TCP port scanner written in Python. Detects open ports and displays common service mappings. Built as a learning project to understand socket networking and concurrent scanning using ThreadPoolExecutor.",
    tags: ["Python", "Sockets", "TCP/IP", "Threading"],
    icon: Terminal,
    github: "https://github.com/cristobalmaier/port-scanner",
    buttonText: "View Code",
    status: "Active",
  },
  {
    title: "DIRSCOPE — Directory Fuzzer",
    description:
      "Directory and web file fuzzer written in pure Python. Discovers hidden paths on HTTP/HTTPS servers using a wordlist, similar to ffuf or dirbuster. Handles concurrent scanning, status code colorization, and redirect resolution.",
    tags: ["Python", "Fuzzing", "Reconnaissance", "Automation"],
    icon: Terminal,
    github: "https://github.com/cristobalmaier/dirscope",
    buttonText: "View Source",
    status: "Active",
  },
  {
    title: "CTF Writeups",
    description:
      "Structured notes documenting the attack chain for each DockerLabs machine: reconnaissance, enumeration, exploitation, and privilege escalation. A living methodology reference, not a solution dump.",
    tags: ["DockerLabs", "Methodology", "Documentation"],
    icon: Lock,
    github: "https://github.com/cristobalmaier/pentesting-labs",
    buttonText: "View Writeups",
    status: "Active",
  },
];

export function Projects() {
  const { displayText: titleText, elementRef: titleRef } = useDecodeText("Projects");
  const { elementRef: scanRef } = useScanLines();

  return (
    <section id="projects" className="py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p ref={scanRef as any} className="terminal-label mb-2 scan-in">$ ls ./projects</p>
          <h2 ref={titleRef as any} className="text-[clamp(28px,4vw,52px)] font-bold text-primary">{titleText}</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] flex flex-col transition-all duration-200 hover:border-accent/30 hover-pulse-border"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 px-6 py-3 border-b border-border">
                <project.icon className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-[11px] text-muted">
                  {project.title.toLowerCase().replace(/ /g, "-")}.sh
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-[17px] text-primary mb-3">{project.title}</h3>
                <p className="text-[13px] text-secondary leading-[1.75] mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-accent bg-accent/5 border border-accent/15 px-2 py-0.5 rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto pt-2 border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-fit px-5 h-10 bg-transparent border border-border font-mono text-[12px] text-secondary rounded-[4px] hover-accent-border"
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
