"use client";

import { Github } from "lucide-react";

const projects = [
    {
        title: "Auka-Tech | Internal Communications Platform",
        description:
            "Real-time internal communication platform connecting employees to corporate support teams. Conceived during a professional internship at Siemens Energy to reduce response times and eliminate informal communication channels. Features a priority ticket system, WebSocket-based messaging, and a monitoring dashboard for management oversight.",
        tags: ["Node.js", "Express", "WebSockets", "EJS", "JavaScript", "MySQL"],
        github: "https://github.com/cristobalmaier/auka-Tech",
        buttonText: "View Source",
        status: "Completed",
        filename: "auka-tech.js",
        authors: "// built with @Tzaw14 · @Agusicolman06"
    }
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

export function Development() {
    return (
        <section id="development" className="py-[120px]">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Section header */}
                <div className="mb-12">
                    <p className="font-mono text-[12px] text-muted mb-3">$ ls ./development</p>
                    <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-primary">Development</h2>
                    <p className="text-[16px] text-secondary mt-3 leading-[1.75]">Software projects from my background as a technical programming student.</p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 items-start">
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
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[11px] text-secondary bg-elevated border border-border px-2 py-0.5 rounded-[4px]"
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
