"use client"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"

export const ThemeContext = createContext({})

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const theme = isDarkMode ? "dark" : "light"

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [isDarkMode, theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
