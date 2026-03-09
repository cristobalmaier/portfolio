const machines = [
    { name: "machine_01", difficulty: "very-easy", status: "rooted" },
    { name: "machine_02", difficulty: "very-easy", status: "rooted" },
    { name: "machine_03", difficulty: "very-easy", status: "rooted" },
    { name: "machine_04", difficulty: "very-easy", status: "rooted" },
    { name: "machine_05", difficulty: "very-easy", status: "rooted" },
    { name: "machine_06", difficulty: "very-easy", status: "rooted" },
    { name: "machine_07", difficulty: "very-easy", status: "rooted" },
    { name: "machine_08", difficulty: "very-easy", status: "rooted" },
    { name: "machine_09", difficulty: "easy", status: "rooted" },
    { name: "machine_10", difficulty: "easy", status: "rooted" },
];



const environment = [
    { key: "platform", value: "DockerLabs" },
    { key: "os", value: "Kali Linux" },
    { key: "network", value: "Host-only" },
    { key: "arch", value: "x86_64" },
];

export function Labs() {
    return (
        <section id="labs" className="py-[70px] bg-base">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Section header */}
                <div className="mb-10">
                    <p className="terminal-label mb-2">$ cat lab_results.log</p>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-primary">Lab Practice</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 items-start">



                    {/* Machine list */}
                    <div className="lg:col-span-2 bg-surface border border-border rounded-[4px] overflow-hidden">
                        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                            <span className="font-mono text-[12px] text-accent">machines.log</span>
                            <span className="font-mono text-[11px] text-muted">10 entries</span>
                        </div>
                        <div className="divide-y divide-border">
                            {machines.map((m, i) => (
                                <div key={m.name} className="flex items-center justify-between px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-[11px] text-muted w-5">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="font-mono text-[13px] text-secondary">{m.name}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-[11px] text-muted">{m.difficulty}</span>
                                        <span className="font-mono text-[11px] text-accent">✓ {m.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Environment panel */}
                    <div className="bg-surface border border-border rounded-[4px] overflow-hidden">
                        <div className="px-5 py-3 border-b border-border">
                            <span className="font-mono text-[12px] text-accent">env.config</span>
                        </div>
                        <div className="p-5 space-y-3">
                            {environment.map((e) => (
                                <div key={e.key} className="flex flex-col gap-0.5">
                                    <span className="font-mono text-[10px] text-muted">{e.key}</span>
                                    <span className="font-mono text-[13px] text-secondary">{e.value}</span>
                                </div>
                            ))}

                            <div className="pt-4 border-t border-border mt-4">
                                <p className="font-mono text-[11px] text-muted leading-relaxed">
                                    Local lab running DockerLabs containers against a Kali Linux attack machine.
                                    Host-only network isolation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
