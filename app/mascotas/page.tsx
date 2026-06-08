"use client";
export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
export default function MascotasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Mascotas" subtitle="Registro de pacientes: especie, raza, edad y dueño responsable." />
      <CrudTable title="Mascotas"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "especie", label: "Especie", render: (r: any) => <Badge tone={r.especie === "Perro" ? "brand" : r.especie === "Gato" ? "info" : "warning"}>{r.especie}</Badge> },
          { key: "raza", label: "Raza" },
          { key: "edad", label: "Edad", type: "number" },
          { key: "dueno", label: "Dueño" },
        ]}
        initial={[
          { id: 1, nombre: "Firulais", especie: "Perro", raza: "Labrador", edad: 4, dueno: "Carlos Pérez" },
          { id: 2, nombre: "Michi", especie: "Gato", raza: "Siamés", edad: 2, dueno: "Ana Torres" },
          { id: 3, nombre: "Rocky", especie: "Perro", raza: "Bulldog", edad: 6, dueno: "Luis Gómez" },
          { id: 4, nombre: "Piolín", especie: "Ave", raza: "Canario", edad: 1, dueno: "Marta Ruiz" },
        ]} />
    </div>
  );
}
