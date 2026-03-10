import { Mail, Github, Linkedin, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "cristobalmaier1@gmail.com", href: "mailto:cristobalmaier1@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/cristobalmaier", href: "https://github.com/cristobalmaier" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cristobal-maier", href: "https://www.linkedin.com/in/cristobal-maier/" },
];

const availability = [
  "Open to internship opportunities",
  "Available for CTF team collaborations",
  "Happy to discuss security topics",
];

export function Contact() {
  return (
    <section id="contact" className="py-[70px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p className="terminal-label mb-2">&gt; initialize_connection</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary mb-3">Contact</h2>
          <p className="text-[15px] text-secondary max-w-lg leading-[1.75]">
            Interested in discussing security research, collaboration, or potential roles?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Contact list */}
          <div className="flex flex-col">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 border border-border ${index !== 0 ? "border-t-0" : ""
                  } bg-surface hover:bg-elevated hover-accent transition-colors group`}
              >
                <contact.icon className="w-4 h-4 text-muted shrink-0 transition-colors group-hover:!text-[var(--accent-red)]" />
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-primary">{contact.label}</span>
                  <span className="font-mono text-[12px] text-secondary">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Availability panel */}
          <div className="bg-surface border border-border rounded-[4px] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-mono text-[13px] text-primary">status.json</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent status-pulse" />
                <span className="font-mono text-[11px] text-accent font-medium">online</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <ul className="space-y-3 mb-6 flex-1">
                {availability.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-accent text-[13px] shrink-0 mt-[1px]">›</span>
                    <span className="text-[14px] text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2 border-border">
                <a
                  href="mailto:cristobalmaier1@gmail.com"
                  className="inline-flex items-center justify-center gap-2 w-fit px-5 h-10 bg-transparent border border-border font-mono text-[12px] text-secondary rounded-[4px] hover-accent-border"
                >
                  <Send className="w-4 h-4" />
                  <span>execute_payload</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
