import { useState } from "react"
import Link from "next/link"

interface Facility {
  id: string
  name: string
  address: string
}

export default function FacilitiesPage() {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [form, setForm] = useState({ name: "", address: "" })
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return
    setFacilities([
      ...facilities,
      { id: crypto.randomUUID(), name: form.name, address: form.address },
    ])
    setForm({ name: "", address: "" })
  }

  const handleEdit = (id: string) => {
    const facility = facilities.find(f => f.id === id)
    if (facility) {
      setForm({ name: facility.name, address: facility.address })
      setEditingId(id)
    }
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setFacilities(facilities.map(f =>
      f.id === editingId ? { ...f, name: form.name, address: form.address } : f
    ))
    setForm({ name: "", address: "" })
    setEditingId(null)
  }

  const handleDelete = (id: string) => {
    setFacilities(facilities.filter(f => f.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="font-[var(--font-bebas)] text-3xl mb-6">Facilities</h1>
      <form onSubmit={editingId ? handleUpdate : handleAdd} className="mb-8 space-y-4">
        <div>
          <label className="block font-mono text-xs mb-2">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-border bg-card/50 px-4 py-3 font-mono text-sm text-foreground"
            required
          />
        </div>
        <div>
          <label className="block font-mono text-xs mb-2">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-border bg-card/50 px-4 py-3 font-mono text-sm text-foreground"
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-accent-foreground px-6 py-2 rounded font-mono text-xs uppercase tracking-widest"
        >
          {editingId ? "Update Facility" : "Add Facility"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => { setEditingId(null); setForm({ name: "", address: "" }) }}
            className="ml-4 border border-destructive text-destructive px-6 py-2 rounded font-mono text-xs uppercase tracking-widest"
          >
            Cancel
          </button>
        )}
      </form>
      <ul className="space-y-4">
        {facilities.map(facility => (
          <li key={facility.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <Link href={`/facilities/${facility.id}`} className="font-mono text-lg text-accent underline hover:text-accent-foreground">
                {facility.name}
              </Link>
              <div className="font-mono text-xs text-muted-foreground">{facility.address}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(facility.id)}
                className="text-accent font-mono text-xs underline"
              >Edit</button>
              <button
                onClick={() => handleDelete(facility.id)}
                className="text-destructive font-mono text-xs underline"
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
