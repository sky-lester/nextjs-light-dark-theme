import { ThemeContext, useTheme } from "@/theme-context"
import { useContext } from "react"

export default function Home() {
  const value = useContext(ThemeContext)
  console.log(value)
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <p>This is a sample content for the homepage</p>
      <button onClick={() => {}}>Change Theme</button>
    </main>
  )
}
