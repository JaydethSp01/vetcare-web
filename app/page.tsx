"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import Link from "next/link";
import { PawPrint, Calendar, Syringe, Users, Plus } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

const MOCK = {
  stats: [
    { label: "Mascotas", value: 312, icon: <PawPrint size={20} />, trend: { value: "8%", positive: true } },
    { label: "Citas hoy", value: 14, icon: <Calendar size={20} />, trend: { value: "3%", positive: true } },
    { label: "Vacunas pendientes", value: 27, icon: <Syringe size={20} />, trend: { value: "5%", positive: false } },
    { label: "Dueños", value: 198, icon: <Users size={20} />, trend: { value: "6%", positive: true } },
  ],
  atenciones: [
    { label: "Lun", value: 12 }, { label: "Mar", value: 18 }, { label: "Mié", value: 15 },
    { label: "Jue", value: 21 }, { label: "Vie", value: 24 }, { label: "Sáb", value: 30 },
  ],
  especies: [
    { n: "Perros", p: 62 }, { n: "Gatos", p: 28 }, { n: "Aves", p: 7 }, { n: "Otros", p: 3 },
  ],
  citas: [
    { mascota: "Firulais", dueno: "Carlos Pérez", motivo: "Vacunación anual", hora: "9:00 am", estado: "Confirmada" },
    { mascota: "Michi", dueno: "Ana Torres", motivo: "Control dermatológico", hora: "10:30 am", estado: "Pendiente" },
    { mascota: "Rocky", dueno: "Luis Gómez", motivo: "Cirugía menor", hora: "12:00 pm", estado: "En espera" },
    { mascota: "Lola", dueno: "Marta Ruiz", motivo: "Desparasitación", hora: "3:00 pm", estado: "Confirmada" },
  ],
};
const tone = (e: string) => (e === "Confirmada" ? "success" : e === "Pendiente" ? "warning" : "info");

export default function Page() {
  const [data] = useState(MOCK);
  return (
    <div className="space-y-6">
      <Hero title="Hola, Clínica Veterinaria X"
        subtitle="312 mascotas registradas · 14 citas para hoy. Cuidemos a cada paciente con amor."
        action={<Link href="/citas"><Button variant="secondary" className="!bg-white !text-brand"><Plus size={16} /> Agendar cita</Button></Link>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(data.stats ?? []).map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" variant="bar" title="Atenciones por día" subtitle="Última semana" data={data.atenciones} />
        <Card>
          <h3 className="mb-4 text-base font-semibold text-slate-900">Por especie</h3>
          <div className="space-y-3">
            {(data.especies ?? []).map((e) => (
              <div key={e.n}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-700">{e.n}</span><span className="text-slate-500">{e.p}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${e.p}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="!p-0">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-base font-semibold text-slate-900">Próximas citas</h3>
          <Badge tone="brand">{data.citas?.length}</Badge>
        </div>
        <ul className="divide-y divide-slate-100">
          {(data.citas ?? []).map((c, i) => (
            <li key={i} className="flex items-center gap-4 p-5">
              <Avatar name={c.dueno} />
              <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{c.mascota} · {c.dueno}</p><p className="truncate text-sm text-slate-500">{c.motivo} · {c.hora}</p></div>
              <Badge tone={tone(c.estado)}>{c.estado}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
