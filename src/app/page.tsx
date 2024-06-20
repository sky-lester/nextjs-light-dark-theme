"use client"
import { useTheme } from "@/theme-context"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <p>This is a sample content for the homepage</p>
      <div className="" style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("christmas")}>Christmas Mode</button>
      </div>
    </main>
  )
}
