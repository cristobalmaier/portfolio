"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "cristobalmaier1@gmail.com", href: "#contact" },
  { icon: Github, label: "GitHub", value: "github.com/cristobalmaier", href: "https://github.com/cristobalmaier" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cristobal-maier", href: "https://www.linkedin.com/in/cristobal-maier/" },
];

export function Contact() {
  return (
    <section id="contact" className="py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-[12px] text-muted mb-3">&gt; initialize_connection</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-primary mb-3">Contact</h2>
          <p className="text-[16px] text-secondary leading-[1.75]">
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
                className={`flex items-center gap-4 p-4 border border-border ${index !== 0 ? "border-t-0" : "rounded-t-[6px]"} ${index === contacts.length - 1 ? "rounded-b-[6px]" : ""} bg-surface hover:bg-elevated transition-colors duration-200 group`}
              >
                <contact.icon className="w-4 h-4 text-muted transition-colors duration-200 group-hover:text-accent" />
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-primary">{contact.label}</span>
                  <span className="font-mono text-[12px] text-secondary">{contact.value}</span>
                </div>
              </a>
            ))}

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green status-pulse"></span>
              <span className="font-mono text-[12px] text-secondary">Currently available for opportunities</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-border rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-mono text-[12px] text-muted">form.tsx</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green status-pulse" />
                <span className="font-mono text-[11px] text-muted">awaiting_input</span>
              </div>
            </div>

            <div className="p-6">
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
        <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center text-green mb-2">
          <Send className="w-6 h-6" />
        </div>
        <p className="text-[16px] font-medium text-primary">Message sent successfully</p>
        <p className="text-secondary text-[14px] max-w-[280px] leading-[1.6]">
          Your message has been transmitted. I will respond shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 font-mono text-[12px] text-muted hover:text-accent transition-colors duration-200"
        >
          [send_another]
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="email" className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full bg-base border border-border rounded-[6px] px-4 py-3 text-[14px] text-primary font-sans placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-accent text-[12px] font-mono mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here..."
          required
          rows={5}
          className="w-full bg-base border border-border rounded-[6px] px-4 py-3 text-[14px] text-primary font-sans placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-accent text-[12px] font-mono mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-transparent border border-border text-secondary font-sans text-[14px] rounded-[6px] hover:border-accent hover:bg-[rgba(230,57,70,0.05)] hover:text-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
}
