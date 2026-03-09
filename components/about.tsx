import { MapPin, GraduationCap, Target, Briefcase } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Buenos Aires, Argentina" },
  { icon: GraduationCap, label: "Education", value: "Cybersecurity Student" },
  { icon: Target, label: "Focus", value: "Penetration Testing" },
  { icon: Briefcase, label: "Status", value: "Open to Internships" },
];

const progressItems = [
  { label: "DockerLabs", current: "10 machines rooted" },
  { label: "Difficulty", current: "8 very easy, 2 easy" },
];

export function About() {
  return (
    <section id="about" className="py-[120px] bg-base">
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Profile Card */}
          <div className="bg-surface border border-border border-l-2 border-l-accent rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-border">
              <span className="font-bold text-[20px] text-primary">Profile</span>
              <span className="font-mono text-[13px] text-muted">profile.md</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-[16px] text-secondary leading-[1.75]">
                Systems fail because administrators trust the implementation. I study offensive security to measure the exact distance between how a network is designed and how it actually functions.
              </p>
              <p className="text-[16px] text-secondary leading-[1.75]">
                I operate a localized lab running Kali Linux against DockerLabs targets. My methodology is terminal-native, relying on nmap, curl, and ffuf to analyze web logic, supplemented by custom Python and Bash scripts.
              </p>
              <p className="text-[16px] text-secondary leading-[1.75]">
                The objective is a junior or intern role where I can continue learning and executing this methodology.
              </p>
            </div>
          </div>

          {/* Info + Progress Panel */}
          <div className="space-y-6">
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 bg-surface border border-border rounded-[6px] p-6">
              {infoItems.map((item) => (
                <div key={item.label} className="bg-base border border-border rounded-[6px] p-4 flex flex-col gap-1">
                  <span className="font-mono text-[12px] text-muted">{item.label}</span>
                  <span className="font-medium text-[14px] text-primary">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Progress - Clean List Format */}
            <div className="bg-surface border border-border rounded-[6px] p-6">
              <h3 className="font-bold text-[18px] text-primary mb-6">Active Practice</h3>
              <div className="space-y-3">
                {progressItems.map((item, index) => (
                  <div key={item.label} className={`flex items-baseline justify-between py-2 ${index !== progressItems.length - 1 ? 'border-b border-border-subtle' : ''}`}>
                    <span className="font-medium text-[14px] text-secondary">{item.label}</span>
                    <span className="flex-1 border-b-[2px] border-dotted border-border-subtle mx-4 relative top-[-4px]"></span>
                    <span className="font-mono text-[13px] text-muted tabular-nums shrink-0">
                      {item.current}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
