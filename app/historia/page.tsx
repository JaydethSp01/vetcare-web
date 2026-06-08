"use client";
export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function HistoriaPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Historia clínica" subtitle="Registro de diagnósticos y tratamientos por consulta." />
      <CrudTable title="Historia clínica"
        fields={[
          { key: "mascota", label: "Mascota" },
          { key: "fecha", label: "Fecha" },
          { key: "diagnostico", label: "Diagnóstico" },
          { key: "tratamiento", label: "Tratamiento" },
        ]}
        initial={[
          { id: 1, mascota: "Firulais", fecha: "2026-05-02", diagnostico: "Otitis externa", tratamiento: "Limpieza + antibiótico ótico" },
          { id: 2, mascota: "Michi", fecha: "2026-05-10", diagnostico: "Dermatitis alérgica", tratamiento: "Dieta especial + antihistamínico" },
          { id: 3, mascota: "Rocky", fecha: "2026-05-18", diagnostico: "Fractura leve pata", tratamiento: "Inmovilización + reposo" },
          { id: 4, mascota: "Lola", fecha: "2026-05-25", diagnostico: "Parásitos intestinales", tratamiento: "Desparasitante oral" },
        ]} />
    </div>
  );
}
