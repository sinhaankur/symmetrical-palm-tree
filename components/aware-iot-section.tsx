// components/aware-iot-section.tsx

export function AwareIotSection() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Aware IoT (Upcoming)</h2>
      <p className="mb-6 text-lg text-muted-foreground">
        Prevent problems before they happen with our upcoming Aware IoT module.
      </p>
      <ul className="text-left mx-auto inline-block list-disc pl-6 text-base mb-6">
        <li>Water leak detection sensors</li>
        <li>HVAC performance monitoring</li>
        <li>Electrical system alerts</li>
        <li>Temperature and humidity tracking</li>
        <li>Automated staff notifications</li>
        <li>Historical trend analysis</li>
      </ul>
      <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
        Coming soon
      </span>
    </section>
  )
}
