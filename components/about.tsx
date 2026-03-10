"use client";

import { MapPin, GraduationCap, Crosshair, CircleDot } from "lucide-react";
import { useDecodeText } from "@/hooks/use-decode-text";
import { useScanLines } from "@/hooks/use-scan-lines"; const infoItems = [
  { icon: MapPin, label: "Location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "Education", value: ["Cybersecurity Student", "Technical Degree in Programming"] },
  { icon: Crosshair, label: "Focus", value: "Penetration Testing" },
  { icon: CircleDot, label: "Status", value: "Open to Internships" },
];

export function About() {
  const { displayText: titleText, elementRef: titleRef } = useDecodeText("About Me");
  const { elementRef: scanRef } = useScanLines();

  return (
    <section id="about" className="py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <p ref={scanRef as any} className="terminal-label mb-2 scan-in">&gt; cat about_me.md</p>
          <h2 ref={titleRef as any} className="text-[clamp(28px,4vw,52px)] font-bold text-primary">{titleText}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Profile Card */}
          <div className="bg-surface border border-border border-l-2 border-l-accent rounded-[4px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-border">
              <span className="font-mono text-[13px] text-accent">profile.md</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-[15px] text-secondary leading-[1.8]">
                I got into security the way most people do — curiosity about how things break. The difference is I didn&apos;t stop there.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                I studied programming at a technical high school, which gave me a real foundation before I ever touched a security tool. Six months doing IT support at Siemens Energy showed me what enterprise infrastructure actually looks like from the inside — and how much of it is one misconfiguration away from being a problem.
              </p>
              <p className="text-[15px] text-secondary leading-[1.8]">
                Now I&apos;m in my first year of a Cybersecurity degree at Universidad de Palermo. Still early. But I show up every day, I document everything, and I build my own tools when the existing ones don&apos;t fit the job.
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <div key={item.label} className="bg-elevated border border-border rounded-[4px] p-4 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <item.icon className="w-3.5 h-3.5 text-muted" />
                    <span className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]">{item.label}</span>
                  </div>
                  {Array.isArray(item.value) ? (
                    <div className="flex flex-col gap-[2px]">
                      {item.value.map((v, i) => (
                        <span key={i} className={`font-sans text-[14px] leading-tight ${i === 0 ? "font-medium text-primary" : "text-secondary"}`}>{v}</span>
                      ))}
                    </div>
                  ) : (
                    <span className="font-sans text-[14px] font-medium text-primary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
