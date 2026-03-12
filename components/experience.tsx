"use client";

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
        <section id="experience" className="py-[120px]">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Section header */}
                <div className="mb-12">
                    <p className="font-mono text-[12px] text-muted mb-3">$ cat experience.log</p>
                    <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-primary">Experience</h2>
                </div>

                <div className="flex flex-col gap-6">
                    {experience.map((entry, index) => (
                        <div
                            key={entry.company}
                            className="relative pl-6 border-l-[3px] border-l-accent"
                        >
                            {/* Number */}
                            <span className="absolute -left-[14px] top-0 w-6 h-6 bg-base border border-border rounded-full flex items-center justify-center font-mono text-[11px] text-muted">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Header */}
                            <div className="mb-4">
                                <h3 className="text-[18px] font-semibold text-primary">{entry.company}</h3>
                                <p className="font-mono text-[13px] text-muted mt-1">{entry.role} · {entry.dates}</p>
                                <p className="font-mono text-[12px] text-muted">{entry.location}</p>
                            </div>

                            {/* Bullets */}
                            <ul className="space-y-3">
                                {entry.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="font-mono text-secondary text-[14px] shrink-0 mt-[1px]">›</span>
                                        <span className="text-[14px] text-secondary leading-[1.75]">{bullet}</span>
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
