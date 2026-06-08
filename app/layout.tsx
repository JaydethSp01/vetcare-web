export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/citas", label: "Citas" }, { href: "/duenos", label: "Duenos" }, { href: "/historia", label: "Historia" }, { href: "/mascotas", label: "Mascotas" }, { href: "/vacunas", label: "Vacunas" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Veterinaria", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Veterinaria">{children}</ProtectedShell>
      </body>
    </html>
  );
}
