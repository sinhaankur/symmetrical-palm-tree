import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function RequireRole({ allowedRoles, children }: { allowedRoles: string[]; children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (!user || !allowedRoles.includes(user.role))) {
      router.replace("/unauthorized")
    }
  }, [user, isLoading, allowedRoles, router])

  if (isLoading || !user) return null
  if (!allowedRoles.includes(user.role)) return null
  return <>{children}</>
}
