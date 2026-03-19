import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Facility {
  id: string
  name: string
  address: string
}

export default function FacilityDetailPage({ params }: { params: { id: string } }) {
  const [facility, setFacility] = useState<Facility | null>(null)
  const router = useRouter()

  useEffect(() => {
    // In a real app, fetch facility by ID from backend
    const stored = localStorage.getItem("facilities")
    if (stored) {
      const facilities: Facility[] = JSON.parse(stored)
      const found = facilities.find(f => f.id === params.id)
      if (found) setFacility(found)
      else router.replace("/facilities")
    } else {
      router.replace("/facilities")
    }
  }, [params.id, router])

  if (!facility) return <div className="p-8">Loading...</div>

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="font-[var(--font-bebas)] text-3xl mb-6">Facility Details</h1>
      <div className="mb-4">
        <div className="font-mono text-lg">{facility.name}</div>
        <div className="font-mono text-xs text-muted-foreground">{facility.address}</div>
      </div>
      <button
        onClick={() => router.push("/facilities")}
        className="mt-4 border border-accent text-accent px-6 py-2 rounded font-mono text-xs uppercase tracking-widest"
      >
        Back to Facilities
      </button>
    </div>
  )
}
