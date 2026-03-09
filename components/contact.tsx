import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "cristobalmaier1@gmail.com",
    href: "mailto:cristobalmaier1@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/cristobalmaier",
    href: "https://github.com/cristobalmaier",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Cristobal Maier",
    href: "https://www.linkedin.com/in/cristobal-maier/",
  },
];

const availability = [
  "Open to internship opportunities",
  "Available for CTF team collaborations",
  "Happy to discuss security topics",
];

export function Contact() {
  return (
    <section id="contact" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header with terminal prefix */}
        <div className="mb-12">
          <span className="font-mono text-[14px] text-accent mb-2 block">$ contact</span>
          <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-[16px] text-secondary max-w-xl leading-[1.75]">
            Interested in discussing security research, collaboration, or potential roles? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Contact Methods */}
          <div className="flex flex-col">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 border border-border ${index !== 0 ? 'border-t-0' : ''} bg-surface hover:bg-elevated transition-colors group`}
              >
                <contact.icon className="w-5 h-5 text-muted shrink-0 transition-colors group-hover:text-accent" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-primary">{contact.label}</span>
                  <span className="font-mono text-[13px] text-secondary">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Availability Panel */}
          <div className="bg-surface border border-border rounded-[6px] flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-bold text-[18px] text-primary">Status</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent status-pulse" />
                <span className="font-mono text-[12px] text-accent">Available</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                {availability.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[8px] shrink-0" />
                    <span className="text-[14px] text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full h-[48px] bg-transparent border-border text-secondary font-medium hover:border-accent hover:bg-accent-glow hover:text-primary transition-colors"
              >
                <a href="mailto:cristobalmaier1@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
