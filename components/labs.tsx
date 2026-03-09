import { Server, CheckCircle2 } from "lucide-react";

const labStats = [
  { label: "Total Machines", value: "10", status: "completed" },
  { label: "Very Easy", value: "8", status: "completed" },
  { label: "Easy", value: "2", status: "completed" },
];

const recentMachines = [
  { name: "Trust", difficulty: "Very Easy", status: "Rooted" },
  { name: "Vacaciones", difficulty: "Very Easy", status: "Rooted" },
  { name: "Obsession", difficulty: "Very Easy", status: "Rooted" },
  { name: "Injection", difficulty: "Very Easy", status: "Rooted" },
  { name: "BreakMySSH", difficulty: "Easy", status: "Rooted" },
];

export function Labs() {
  return (
    <section id="labs" className="py-[120px] bg-surface">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header with terminal prefix */}
        <div className="mb-12">
          <span className="font-mono text-[14px] text-accent mb-2 block">$ labs</span>
          <h2 className="text-[clamp(28px,4vw,56px)] font-bold text-primary">
            Lab Practice
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Stats Panel */}
          <div className="bg-base border border-border rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-accent" />
                <span className="font-bold text-[18px] text-primary">DockerLabs Machines</span>
              </div>
              <span className="font-mono text-[12px] text-muted">stats.log</span>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {labStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-surface rounded-[6px] border border-border">
                    <div className="text-[32px] font-bold text-accent mb-1">{stat.value}</div>
                    <div className="font-mono text-[11px] text-muted uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Terminal-style progress */}
              <div className="bg-surface rounded-[6px] border border-border p-4 font-mono text-[13px]">
                <div className="text-muted mb-2">// difficulty breakdown</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-accent">$</span>
                    <span className="text-secondary">very_easy:</span>
                    <span className="text-primary">8/8</span>
                    <span className="text-accent ml-auto">100%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent">$</span>
                    <span className="text-secondary">easy:</span>
                    <span className="text-primary">2/2</span>
                    <span className="text-accent ml-auto">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Machines */}
          <div className="bg-base border border-border rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-bold text-[18px] text-primary">Recent Completions</span>
              <span className="font-mono text-[12px] text-muted">history.log</span>
            </div>

            <div className="divide-y divide-border">
              {recentMachines.map((machine) => (
                <div key={machine.name} className="flex items-center justify-between px-6 py-4 hover:bg-surface/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="font-medium text-[14px] text-primary">{machine.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[12px] text-muted">{machine.difficulty}</span>
                    <span className="font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                      {machine.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
