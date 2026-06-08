"use client";
export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/ui/CrudTable";
import { PageHeader } from "@/components/ui/PageHeader";
export default function DuenosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dueños" subtitle="Directorio de propietarios y sus datos de contacto." />
      <CrudTable title="Dueños"
        fields={[
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "email", label: "Email" },
          { key: "mascotas", label: "Mascotas", type: "number" },
        ]}
        initial={[
          { id: 1, nombre: "Carlos Pérez", telefono: "300 111 2233", email: "carlos@mail.com", mascotas: 2 },
          { id: 2, nombre: "Ana Torres", telefono: "301 444 5566", email: "ana@mail.com", mascotas: 1 },
          { id: 3, nombre: "Luis Gómez", telefono: "310 777 8899", email: "luis@mail.com", mascotas: 3 },
          { id: 4, nombre: "Marta Ruiz", telefono: "320 222 3344", email: "marta@mail.com", mascotas: 1 },
        ]} />
    </div>
  );
}
