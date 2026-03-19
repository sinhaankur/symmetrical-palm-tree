import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getSession().then(session => {
      setUser(session?.user || null)
    })
  }, [])

  if (!user) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="font-[var(--font-bebas)] text-3xl mb-6">Your Profile</h1>
      <form className="space-y-6">
        <div>
          <label className="block font-mono text-xs mb-2">Name</label>
          <input
            type="text"
            value={user.name || ""}
            disabled
            className="w-full border border-border bg-card/50 px-4 py-3 font-mono text-sm text-foreground"
          />
        </div>
        <div>
          <label className="block font-mono text-xs mb-2">Email</label>
          <input
            type="email"
            value={user.email || ""}
            disabled
            className="w-full border border-border bg-card/50 px-4 py-3 font-mono text-sm text-foreground"
          />
        </div>
        {/* Add password change and update logic here */}
      </form>
    </div>
  )
}
