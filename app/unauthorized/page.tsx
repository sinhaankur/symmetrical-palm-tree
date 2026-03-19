export default function UnauthorizedPage() {
  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h1 className="font-[var(--font-bebas)] text-3xl mb-6 text-destructive">Access Denied</h1>
      <p className="font-mono text-sm text-muted-foreground">
        You do not have permission to view this page.
      </p>
    </div>
  )
}
