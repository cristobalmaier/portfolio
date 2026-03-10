"use client";

import { Github, FileCode2 } from "lucide-react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useScanLines } from "@/hooks/use-scan-lines"; const projects = [
    {
        title: "Auka-Tech | Internal Communications Platform",
        description:
            "Real-time internal communication platform connecting employees to corporate support teams. Conceived during a professional internship at Siemens Energy to reduce response times and eliminate informal communication channels. Features a priority ticket system, WebSocket-based messaging, and a monitoring dashboard for management oversight.",
        tags: ["Node.js", "Express", "WebSockets", "EJS", "JavaScript", "MySQL"],
        icon: FileCode2,
        github: "https://github.com/cristobalmaier/auka-Tech",
        buttonText: "View Source",
        status: "Completed",
        filename: "auka-tech.js",
        authors: "// built with @Tzaw14 · @Agusicolman06"
    }
];

export function Development() {
    const { displayText: titleText, elementRef: titleRef } = useDecodeText("Development");
    const { elementRef: scanRef } = useScanLines();

    return (
        <section id="development" className="py-[70px]">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Section header */}
                <div className="mb-10">
                    <p ref={scanRef as any} className="terminal-label mb-2 scan-in">$ ls ./development</p>
                    <h2 ref={titleRef as any} className="text-[clamp(28px,4vw,52px)] font-bold text-primary">{titleText}</h2>
                    <p className="text-[15px] text-secondary mt-3">Software projects from my background as a technical programming student.</p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 items-start">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] flex flex-col transition-all duration-200 hover:border-accent/30 hover-pulse-border"
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-3 px-6 py-3 border-b border-border">
                                <project.icon className="w-4 h-4 text-accent shrink-0" />
                                <span className="font-mono text-[11px] text-muted">
                                    {project.filename}
                                </span>
                                <span className="font-mono text-[10px] text-accent/80 ml-auto border border-accent/20 px-1.5 py-0.5 rounded-[2px] bg-accent/5">
                                    {project.status.toLowerCase()}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-semibold text-[17px] text-primary mb-3">{project.title}</h3>
                                <p className="text-[13px] text-secondary leading-[1.75] mb-5 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[11px] text-accent bg-accent/5 border border-accent/15 px-2 py-0.5 rounded-[3px]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Authors */}
                                <p className="font-mono text-[11px] text-muted mb-5">
                                    {project.authors}
                                </p>

                                {/* Link */}
                                <div className="mt-auto pt-2 border-border">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-fit px-5 h-10 bg-transparent border border-border font-mono text-[12px] text-secondary rounded-[4px] hover-accent-border transition-colors"
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
