"use client"

import { useConversation } from "@elevenlabs/react"
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, Volume2, VolumeX, Phone, PhoneOff, Loader2 } from "lucide-react"
import CustomParticleOrb from "@/components/CustomParticleOrb"
import WaveBackground from "@/components/WaveBackground"
import LightWaveBackground from "@/components/LightWaveBackground"
import LanguageSelector from "@/components/LanguageSelector"
import { useTheme } from "next-themes"
// import ThemeToggle from "@/components/ThemeToggle"

export default function ConversationalAI() {
  const [isMuted, setIsMuted] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches
  type Language = "en" | "hi" 
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("hi") 
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string; timestamp: Date }>>([])

  const conversation = useConversation({
    overrides: {
        agent: {
            language: selectedLanguage
        }
    },
    onConnect: () => {
      console.log("Connected to Eleven Labs")
      setIsConnecting(false)
    },
    onDisconnect: () => {
      console.log("Disconnected from Eleven Labs")
      setIsConnecting(false)
    },
    onMessage: (message) => {
      console.log("Message:", message)
      if (message.type === "agent_response" && message.message) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: message.message,
            timestamp: new Date(),
          },
        ])
      } else if (message.type === "user_transcript" && message.message) {
        setMessages((prev) => [
          ...prev,
          {
            role: "user",
            content: message.message,
            timestamp: new Date(),
          },
        ])
      }
    },
    onError: (error) => {
      console.error("Conversation error:", error)
      setIsConnecting(false)
    },
  })

  const startConversation = useCallback(async () => {
    try {
      setIsConnecting(true)

      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true })

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "agent_01jwacbgw4eca8yn06ehx30e1z",
      })
    } catch (error) {
      console.error("Failed to start conversation:", error)
      setIsConnecting(false)
    }
  }, [conversation])

  const stopConversation = useCallback(async () => {
    await conversation.endSession()
    setIsConnecting(false)
  }, [conversation])

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted])

  // const toggleTheme = useCallback(() => {
  //   setIsDarkMode(!isDarkMode)
  // }, [isDarkMode])

  const isConnected = conversation.status === "connected"
  const isSpeaking = conversation.isSpeaking
  const isListening = isConnected && !isSpeaking

  // Theme-based classes
  const bgClass = isDarkMode ? "bg-black" : "bg-white"
  const headerBgClass = isDarkMode ? "bg-black/20" : "bg-white/90"
  const borderClass = isDarkMode ? "border-green-500/20" : "border-gray-200"
  const textPrimaryClass = isDarkMode ? "text-green-400" : "text-gray-900"
  const textSecondaryClass = isDarkMode ? "text-green-400/70" : "text-gray-600"
  const cardBgClass = isDarkMode ? "bg-slate-900/40" : "bg-white"
  const cardBorderClass = isDarkMode ? "border-green-500/30" : "border-gray-200"

  return (
    <div className={`min-h-screen ${bgClass} relative overflow-hidden transition-all duration-500`}>
      {/* Wave Background for both themes */}
      {isDarkMode ? <WaveBackground /> : <LightWaveBackground />}

      {/* Background effects */}
      {isDarkMode ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(34,197,94,0.08),transparent)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.10),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
        </>
      )}

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(139,92,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,transparent_1px)]"
          } bg-[size:60px_60px] animate-pulse`}
        />
      </div>

      {/* Header */}
      <header className={`relative z-10 p-6 border-b ${borderClass} backdrop-blur-md ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div
                className={`w-12 h-12 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-green-400 to-green-600 border-green-400/30"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-400/30"
                } rounded-xl flex items-center justify-center shadow-lg border`}
              >
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              {isConnected && (
                <div
                  className={`absolute -top-1 -right-1 w-4 h-4 ${
                    isDarkMode ? "bg-green-400" : "bg-purple-500"
                  } rounded-full animate-pulse shadow-lg`}
                />
              )}
            </div>
            <div>
              <h1
                className={`text-4xl font-bold ${
                  isDarkMode
                    ? "bg-gradient-to-r from-green-400 via-green-300 to-green-500"
                    : "bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900"
                } bg-clip-text text-transparent`}
              >
                CodeShield AI
              </h1>
              <p className={`${textSecondaryClass} text-sm font-medium`}>Advanced Security Assistant</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className={`hidden md:flex items-center space-x-3 px-4 py-2 ${
                isDarkMode ? "bg-green-500/10 border-green-500/30" : "bg-purple-50 border-purple-200"
              } border rounded-full backdrop-blur-sm`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  isConnected
                    ? `${isDarkMode ? "bg-green-400" : "bg-purple-500"} animate-pulse shadow-lg`
                    : "bg-gray-400"
                }`}
              />
              <span className={`${textPrimaryClass} text-sm font-medium`}>{isConnected ? "Connected" : "Offline"}</span>
            </div>

            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              isDarkMode={isDarkMode}
            />

            {/* <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} /> */}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className={`${
                isDarkMode
                  ? "text-green-400 hover:text-green-300 hover:bg-green-400/10 border-green-500/20"
                  : "text-gray-600 hover:text-gray-900 hover:bg-purple-50 border-purple-200"
              } border backdrop-blur-sm`}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 py-8">
        {/* Pure Particle Orb */}
        <div className="relative mb-8">
          <div className="w-96 h-96 relative">
            {/* Glow layers */}
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-green-400/20 to-green-600/20"
                  : "bg-gradient-to-r from-purple-400/25 to-indigo-500/25"
              } rounded-full blur-3xl animate-pulse`}
            />
            <div
              className={`absolute inset-8 ${
                isDarkMode
                  ? "bg-gradient-to-r from-green-400/10 to-green-600/10"
                  : "bg-gradient-to-r from-purple-400/20 to-indigo-500/20"
              } rounded-full blur-2xl`}
            />

            {/* Orb container */}
            <div className="relative w-full h-full">
              <CustomParticleOrb isListening={isListening} isSpeaking={isSpeaking} isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mb-8 text-center">
          <Card
            className={`inline-flex items-center px-8 py-4 ${cardBgClass} ${cardBorderClass} backdrop-blur-md shadow-xl`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-4 h-4 rounded-full ${
                  isSpeaking
                    ? `${isDarkMode ? "bg-green-400" : "bg-purple-500"} animate-pulse shadow-lg`
                    : isListening
                      ? `${isDarkMode ? "bg-blue-400" : "bg-indigo-500"} animate-pulse shadow-lg`
                      : isConnected
                        ? `${isDarkMode ? "bg-green-500" : "bg-purple-600"} shadow-lg`
                        : "bg-gray-400"
                }`}
              />
              <span
                className={`text-lg font-medium ${
                  isSpeaking
                    ? isDarkMode
                      ? "text-green-300"
                      : "text-purple-600"
                    : isListening
                      ? isDarkMode
                        ? "text-blue-300"
                        : "text-indigo-600"
                      : isConnected
                        ? textPrimaryClass
                        : "text-gray-500"
                }`}
              >
                {isSpeaking
                  ? "AI is speaking..."
                  : isListening
                    ? "Listening..."
                    : isConnected
                      ? "Connected - Ready to help"
                      : "Disconnected"}
              </span>
            </div>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-6 mb-8">
          <Button
            onClick={isConnected ? stopConversation : startConversation}
            disabled={isConnecting}
            className={`w-24 h-24 rounded-full transition-all duration-300 text-white font-medium border-2 ${
              isConnected
                ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-xl shadow-red-500/30 border-red-400/50"
                : isDarkMode
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 shadow-xl shadow-green-500/30 border-green-400/50"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-500/30 border-purple-400/50"
            }`}
          >
            {isConnecting ? (
              <Loader2 className="h-10 w-10 animate-spin" />
            ) : isConnected ? (
              <PhoneOff className="h-10 w-10" />
            ) : (
              <Phone className="h-10 w-10" />
            )}
          </Button>
        </div>

        {/* Connection instructions */}
        {!isConnected && !isConnecting && (
          <Card className={`max-w-lg p-8 ${cardBgClass} ${cardBorderClass} backdrop-blur-md text-center shadow-xl`}>
            <h3 className={`text-xl font-semibold ${textPrimaryClass} mb-3`}>Start Your AI Session</h3>
            <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"} text-base mb-6 leading-relaxed`}>
              Click the phone button to connect with CodeShield AI and start your security consultation.
            </p>
            <div
              className={`flex items-center justify-center space-x-3 text-sm ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}
            >
              <Mic className="h-5 w-5" />
              <span>Microphone access required</span>
            </div>
          </Card>
        )}

        {/* Conversation history */}
        {messages.length > 0 && (
          <Card
            className={`mt-8 w-full max-w-4xl max-h-96 overflow-y-auto ${cardBgClass} ${cardBorderClass} backdrop-blur-md shadow-xl`}
          >
            <div className="p-8">
              <h3 className={`text-xl font-semibold ${textPrimaryClass} mb-6 flex items-center`}>
                <Volume2 className="h-6 w-6 mr-3" />
                Conversation History
              </h3>
              <div className="space-y-6">
                {messages.slice(-6).map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-md px-6 py-4 rounded-xl ${
                        message.role === "user"
                          ? isDarkMode
                            ? "bg-green-500/20 text-green-100 border border-green-400/40"
                            : "bg-purple-500/10 text-purple-900 border border-purple-300"
                          : isDarkMode
                            ? "bg-slate-700/50 text-slate-100 border border-slate-600/40"
                            : "bg-gray-50 text-gray-900 border border-gray-200"
                      } shadow-lg`}
                    >
                      <p className="text-base leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-60 mt-2">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className={`relative z-10 p-6 border-t ${borderClass} backdrop-blur-md ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${isDarkMode ? "text-slate-400" : "text-gray-500"} text-sm`}>
            • Powered By CodeShield Security Platform
          </p>
        </div>
      </footer>
    </div>
  )
}