import { FileText, ExternalLink } from "lucide-react";

const learningEntries = [
  {
    title: "Linux Privilege Escalation Notes",
    description: "Common misconfigurations, SUID binaries, and escalation techniques learned from lab practice.",
    tags: ["Linux", "PrivEsc"],
  },
  {
    title: "Nmap Scanning Techniques",
    description: "Port scanning methodology, service detection, and script scanning documentation.",
    tags: ["Enumeration", "Nmap"],
  },
  {
    title: "Web Fuzzing Experiments",
    description: "Directory enumeration, parameter fuzzing, and wordlist selection strategies.",
    tags: ["Web", "ffuf"],
  },
  {
    title: "DockerLabs Walkthrough Notes",
    description: "Step-by-step methodology documentation for completed lab machines.",
    tags: ["CTF", "Methodology"],
  },
];

export function LearningLog() {
  return (
    <section id="learning" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header with terminal prefix */}
        <div className="mb-12">
          <span className="font-mono text-[14px] text-accent mb-2 block">$ learning</span>
          <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary">
            Learning Log
          </h2>
          <p className="text-[16px] text-secondary max-w-xl leading-[1.75] mt-4">
            Personal notes and documentation from ongoing security learning.
          </p>
        </div>

        {/* Learning entries grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {learningEntries.map((entry) => (
            <div
              key={entry.title}
              className="bg-surface border border-border rounded-[6px] p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(0,255,65,0.1)] group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-[16px] text-primary">{entry.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-secondary leading-relaxed mb-4 ml-8">
                {entry.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 ml-8">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-accent/80 bg-accent/5 border border-accent/20 px-2 py-0.5 rounded-[4px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note about continuous learning */}
        <div className="mt-8 bg-surface border border-border rounded-[6px] p-6">
          <div className="font-mono text-[13px] text-muted flex items-start gap-3">
            <span className="text-accent">{">"}</span>
            <span>Continuously documenting new techniques and methodologies as I progress through labs and courses.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
