"use client";
import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export type CrudField = { key: string; label: string; type?: "text" | "number" | "email"; render?: (row: any) => React.ReactNode };

/** Tabla CRUD que SÍ funciona (cliente): agregar/editar/eliminar con modal y
 *  estado real. Los botones NO son decorativos — Editar abre el formulario con
 *  los datos, Guardar actualiza, Eliminar borra. Persiste en la sesión. */
export function CrudTable({
  fields,
  initial = [],
  title = "Registros",
}: {
  fields: CrudField[];
  initial?: any[];
  title?: string;
}) {
  const [rows, setRows] = useState<any[]>(initial);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState<any>({});

  function nuevo() { setEditing(null); setForm({}); setOpen(true); }
  function editar(r: any) { setEditing(r); setForm({ ...r }); setOpen(true); }
  function eliminar(r: any) { setRows((xs) => (xs ?? []).filter((x) => x !== r)); }
  function guardar(e: React.FormEvent) {
    e.preventDefault();
    if (editing) setRows((xs) => (xs ?? []).map((x) => (x === editing ? { ...editing, ...form } : x)));
    else setRows((xs) => [{ id: Date.now(), ...form }, ...xs]);
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <Button onClick={nuevo}><Plus size={16} /> Nuevo</Button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              {(fields ?? []).map((f) => <th key={f.key} className="px-4 py-3 font-semibold">{f.label}</th>)}
              <th className="px-4 py-3 text-right font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows?.length === 0 ? (
              <tr><td colSpan={fields?.length + 1} className="px-4 py-10 text-center text-slate-400">Sin registros. Crea el primero.</td></tr>
            ) : (rows ?? []).map((r, i) => (
              <tr key={r.id ?? i} className="border-t border-slate-100 hover:bg-slate-50">
                {(fields ?? []).map((f) => <td key={f.key} className="px-4 py-3 text-slate-700">{f.render ? f.render(r) : String(r[f.key] ?? "")}</td>)}
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    <button onClick={() => editar(r)} aria-label="Editar"
                      className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-brand cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"><Pencil size={16} /></button>
                    <button onClick={() => eliminar(r)} aria-label="Eliminar"
                      className="rounded-lg p-1.5 text-slate-500 hover:bg-rose-50 hover:text-rose-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/40"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4" onClick={() => setOpen(false)}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={guardar}
            className="w-full max-w-md space-y-3 rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900">{editing ? "Editar" : "Nuevo"} registro</h3>
            {(fields ?? []).map((f) => (
              <div key={f.key} className="space-y-1">
                <label className="text-sm font-medium text-slate-700">{f.label}</label>
                <input type={f.type || "text"} value={form[f.key] ?? ""} aria-label={f.label}
                  onChange={(e) => setForm({ ...form, [f.key]: f.type === "number" ? +e.target.value : e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Button type="submit">Guardar</Button>
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancelar</Button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default CrudTable;
