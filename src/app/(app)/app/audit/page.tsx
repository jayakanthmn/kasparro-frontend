"use client";

import { useModuleStore } from "@/store/moduleStore";
import { Card } from "@/components/ui/card";

import visibility from "@/data/audit/visibility.json";
import trust from "@/data/audit/trust.json";
import keywords from "@/data/audit/keywords.json";

const modules: Record<string, any> = {
  visibility,
  trust,
  keywords,
};

export default function AuditPage() {
  const { selectedModuleId, setModule } = useModuleStore();

  const moduleData = modules[selectedModuleId];

  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-3 border-r pr-4 space-y-2">
        {["visibility", "trust", "keywords"].map((m) => (
          <button
            key={m}
            onClick={() => setModule(m)}
            className={
              m === selectedModuleId
                ? "font-semibold block"
                : "text-gray-600 block"
            }
          >
            {m}
          </button>
        ))}
      </aside>

      <main className="col-span-9 space-y-4">
        <h2 className="text-2xl font-bold">{moduleData.name}</h2>

        <p className="text-4xl font-black">{moduleData.score}</p>

        <section>
          <h3 className="font-semibold mb-2">Recommendations</h3>
          <div className="space-y-2">
            {moduleData.recommendations.map((r: any) => (
              <Card key={r.id}>{r.text}</Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
