"use client";
export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function CitasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Citas" subtitle="Agenda de consultas: mascota, motivo, fecha y estado." />
      <CrudTable title="Citas"
        fields={[
          { key: "mascota", label: "Mascota" },
          { key: "motivo", label: "Motivo" },
          { key: "fecha", label: "Fecha" },
          { key: "estado", label: "Estado", render: (r: any) => <Badge tone={r.estado === "Confirmada" ? "success" : r.estado === "Pendiente" ? "warning" : r.estado === "Cancelada" ? "danger" : "info"}>{r.estado}</Badge> },
        ]}
        initial={[
          { id: 1, mascota: "Firulais", motivo: "Vacunación anual", fecha: "2026-06-08 09:00", estado: "Confirmada" },
          { id: 2, mascota: "Michi", motivo: "Control dermatológico", fecha: "2026-06-08 10:30", estado: "Pendiente" },
          { id: 3, mascota: "Rocky", motivo: "Cirugía menor", fecha: "2026-06-08 12:00", estado: "En espera" },
          { id: 4, mascota: "Lola", motivo: "Desparasitación", fecha: "2026-06-09 15:00", estado: "Cancelada" },
        ]} />
    </div>
  );
}
