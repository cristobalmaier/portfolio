"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useScanLines } from "@/hooks/use-scan-lines";

const contacts = [
  { icon: Mail, label: "Email", value: "cristobalmaier1@gmail.com", href: "#contact" },
  { icon: Github, label: "GitHub", value: "github.com/cristobalmaier", href: "https://github.com/cristobalmaier" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cristobal-maier", href: "https://www.linkedin.com/in/cristobal-maier/" },
];

const availability = [
  "Open to internship opportunities",
  "Available for CTF team collaborations",
  "Happy to discuss security topics",
];

export function Contact() {
  const { displayText: titleText, elementRef: titleRef } = useDecodeText("Contact");
  const { elementRef: scanRef } = useScanLines();

  return (
    <section id="contact" className="py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p ref={scanRef as any} className="terminal-label mb-2 scan-in">&gt; initialize_connection</p>
          <h2 ref={titleRef as any} className="text-[clamp(28px,4vw,52px)] font-bold text-primary mb-3">{titleText}</h2>
          <p className="text-[15px] text-secondary max-w-lg leading-[1.75]">
            Interested in discussing security research, collaboration, or potential roles?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Contact list */}
          <div className="flex flex-col">
            {contacts.map((contact, index) => {
              const innerContent = (
                <>
                  <contact.icon className="w-4 h-4 text-muted shrink-0 transition-colors group-hover:text-[var(--accent-red)]" />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold text-primary">{contact.label}</span>
                    <span className="font-mono text-[12px] text-secondary">{contact.value}</span>
                  </div>
                </>
              );

              const className = `flex items-center gap-4 p-4 border border-border ${index !== 0 ? "border-t-0" : ""
                } bg-surface hover:bg-elevated hover-accent transition-colors group`;

              if (contact.href) {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {innerContent}
                  </a>
                );
              }

              return (
                <div key={contact.label} className={className}>
                  {innerContent}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-border rounded-[4px] flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-base/50">
              <span className="font-mono text-[13px] text-primary">form.tsx</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent status-pulse" />
                <span className="font-mono text-[11px] text-accent font-medium">awaiting_input</span>
              </div>
            </div>

            <div className="p-6 flex-1">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("maqpqrjr");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full space-y-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-2">
          <Send className="w-6 h-6" />
        </div>
        <p className="text-lg font-medium text-primary font-mono">&gt; payload_delivered</p>
        <p className="text-secondary text-sm max-w-[250px]">
          Message successfully transmitted to the server. I will respond shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 font-mono text-xs text-secondary hover:text-accent transition-colors"
        >
          [reset_connection]
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
      <div className="space-y-2">
        <label htmlFor="email" className="font-mono text-xs text-secondary pl-1 block">
          &gt; target_email
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full bg-base border border-border rounded p-3 text-sm text-primary font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-muted input-focus-accent group peer"
          />
          <span className="absolute right-3 top-3.5 w-1.5 h-4 bg-accent cursor-blink opacity-0 peer-focus:opacity-100 transition-opacity pointer-events-none" />
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-[var(--accent-red)] text-xs font-mono mt-1"
        />
      </div>

      <div className="space-y-2 flex-1">
        <label htmlFor="message" className="font-mono text-xs text-secondary pl-1 block">
          &gt; encrypted_payload
        </label>
        <div className="relative h-[120px]">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            required
            className="w-full bg-base border border-border rounded p-3 text-sm text-primary font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none placeholder:text-muted h-full peer input-focus-accent"
          />
          <span className="absolute right-3 top-3.5 w-1.5 h-4 bg-accent cursor-blink opacity-0 peer-focus:opacity-100 transition-opacity pointer-events-none" />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-[var(--accent-red)] text-xs font-mono mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-auto group flex items-center justify-center gap-2 w-full h-11 bg-accent/10 border border-accent/20 text-accent font-mono text-sm rounded hover:bg-accent/20 hover:border-accent/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>{state.submitting ? "transmitting..." : "execute_payload"}</span>
      </button>
    </form>
  );
}
