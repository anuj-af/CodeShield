"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  isDarkMode: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className={`transition-all duration-200 ${
        isDarkMode
          ? "text-green-400 hover:text-green-300 hover:bg-green-400/10 border border-green-500/20"
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-300"
      }`}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
