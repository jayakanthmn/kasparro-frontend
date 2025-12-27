"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Brand {
  id: string;
  name: string;
}

const brands: Brand[] = [
  { id: "acme", name: "Acme Health" },
  { id: "orion", name: "Orion Tech" },
];

export default function DashboardPage() {
  const [brand, setBrand] = useState(brands[0]);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Brand Performance Overview
          </h1>
          <p className="text-gray-500">
            A structured snapshot of your AI-SEO & brand trust performance
          </p>
        </div>

        <select
          className="rounded-xl border px-3 py-2 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          value={brand.id}
          onChange={(e) =>
            setBrand(brands.find((b) => b.id === e.target.value)!)
          }
        >
          {brands.map((b) => (
            <option key={b.id}>{b.name}</option>
          ))}
        </select>
      </header>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-4">

        <MetricCard
          title="AI Visibility Score"
          value={78}
          trend="+4.2%"
          icon="📡"
          bar="bg-indigo-500"
          gradient="from-indigo-50 to-white"
          tagColor="bg-indigo-100 text-indigo-700"
        />

        <MetricCard
          title="Trust / EEAT Score"
          value={82}
          trend="+2.1%"
          icon="🛡️"
          bar="bg-emerald-500"
          gradient="from-emerald-50 to-white"
          tagColor="bg-emerald-100 text-emerald-700"
        />

        <MetricCard
          title="Non-Branded Keyword Coverage"
          value={64}
          trend="+1.3%"
          icon="🔍"
          bar="bg-amber-500"
          gradient="from-amber-50 to-white"
          tagColor="bg-amber-100 text-amber-700"
        />

        <LastAuditCard date="2025-01-05" />
      </div>

      {/* SECTION DIVIDER */}
      <div className="border-b" />

      {/* RECENT ACTIVITY */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

        <div className="space-y-3 text-sm">
          <Activity text="AI-SEO audit completed successfully" />
          <Activity text="7 new recommendations generated" />
          <Activity text="Visibility improved for 12 category keywords" />
        </div>
      </Card>
    </div>
  );
}

function MetricCard({
  title,
  value,
  trend,
  icon,
  bar,
  gradient,
  tagColor,
}: {
  title: string;
  value: number;
  trend: string;
  icon: string;
  bar: string;
  gradient: string;
  tagColor: string;
}) {
  return (
    <Card className={`p-5 rounded-2xl shadow-sm hover:shadow-md transition bg-gradient-to-br ${gradient} border`}>
      <div className={`rounded-xl px-3 py-1 w-fit text-xs font-medium ${tagColor}`}>
        {icon} KPI Metric
      </div>

      <p className="mt-3 text-sm text-gray-500">{title}</p>

      <p className="text-4xl font-extrabold">{value}</p>

      <div className="flex items-center gap-2 text-sm mt-1">
        <span className="text-emerald-600 font-semibold">{trend}</span>
        <span className="text-gray-500">vs last audit</span>
      </div>

      <div className="h-2 mt-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${bar}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </Card>
  );
}

function LastAuditCard({ date }: { date: string }) {
  return (
    <Card className="p-5 rounded-2xl border bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">Last AI-SEO Audit</p>

      <p className="text-2xl font-bold mt-2">{date}</p>

      <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full border bg-white shadow-sm text-gray-600">
        Audit cadence: Weekly
      </span>
    </Card>
  );
}

function Activity({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-500 font-bold text-lg leading-none">•</span>
      <span>{text}</span>
    </div>
  );
}
