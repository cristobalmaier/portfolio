const experience = [
    {
        company: "Siemens Energy",
        role: "IT Support Trainee",
        location: "Buenos Aires, Argentina",
        dates: "June 2025 – November 2025",
        bullets: [
            "Supported 70+ corporate devices, performing structured diagnostics of hardware and Windows 10/11 issues with remote support to internal users.",
            "Prepared and configured Windows 10/11 systems, corporate software, and Microsoft 365, ensuring proper integration with company network and policies.",
            "Performed preventive and corrective hardware maintenance, identifying early failures and minimizing user downtime.",
            "Documented solutions and updated records in the ticketing system, enabling better issue tracking and collaboration across IT teams.",
            "Exposure to enterprise network architecture and endpoint management informed a practical understanding of the attack surface that offensive security practitioners target."
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-[70px]">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Section header */}
                <div className="mb-10">
                    <p className="terminal-label mb-2">$ cat experience.log</p>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">Experience</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {experience.map((entry) => (
                        <div
                            key={entry.company}
                            className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] p-6 transition-colors hover:border-accent/30"
                        >
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                                <div>
                                    <h3 className="text-[18px] font-bold text-primary">{entry.company}</h3>
                                    <p className="text-[14px] font-mono text-accent mt-0.5">{entry.role}</p>
                                </div>
                                <div className="flex flex-col sm:items-end shrink-0">
                                    <span className="font-mono text-[12px] text-accent">{entry.dates}</span>
                                    <span className="font-mono text-[11px] text-muted mt-0.5">{entry.location}</span>
                                </div>
                            </div>

                            {/* Bullets */}
                            <ul className="space-y-3">
                                {entry.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="font-mono text-accent text-[13px] shrink-0 mt-[2px]">›</span>
                                        <span className="text-[13px] text-secondary leading-[1.75]">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
