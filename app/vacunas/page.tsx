"use client";
export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function VacunasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Vacunas" subtitle="Control de inmunizaciones y próximas dosis por mascota." />
      <CrudTable title="Vacunas"
        fields={[
          { key: "mascota", label: "Mascota" },
          { key: "vacuna", label: "Vacuna", render: (r: any) => <Badge tone="brand">{r.vacuna}</Badge> },
          { key: "fecha", label: "Aplicada" },
          { key: "proxima", label: "Próxima" },
        ]}
        initial={[
          { id: 1, mascota: "Firulais", vacuna: "Rabia", fecha: "2026-01-10", proxima: "2027-01-10" },
          { id: 2, mascota: "Michi", vacuna: "Triple felina", fecha: "2026-03-05", proxima: "2027-03-05" },
          { id: 3, mascota: "Rocky", vacuna: "Parvovirus", fecha: "2026-02-20", proxima: "2026-08-20" },
          { id: 4, mascota: "Lola", vacuna: "Moquillo", fecha: "2026-04-12", proxima: "2026-10-12" },
        ]} />
    </div>
  );
}
