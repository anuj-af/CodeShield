"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Check } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" }
]

interface LanguageSelectorProps {
  selectedLanguage: string
  onLanguageChange: (language: string) => void
  isDarkMode?: boolean
}

export default function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
  isDarkMode = true,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage) || languages[0]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 ${
          isDarkMode
            ? "bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20"
            : "bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200"
        }`}
      >
        <span className="text-lg">{selectedLang.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <Card
            className={`absolute top-full mt-2 right-0 z-20 min-w-48 py-2 shadow-xl ${
              isDarkMode ? "bg-slate-900/95 border-green-500/30 backdrop-blur-md" : "bg-white border-slate-200"
            }`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onLanguageChange(language.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 flex items-center justify-between transition-colors duration-150 ${
                  isDarkMode
                    ? "hover:bg-green-500/10 text-slate-300 hover:text-green-400"
                    : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className={`h-4 w-4 ${isDarkMode ? "text-green-400" : "text-green-600"}`} />
                )}
              </button>
            ))}
          </Card>
        </>
      )}
    </div>
  )
}