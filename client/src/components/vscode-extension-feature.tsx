"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollFade } from "@/components/ui/scroll-fade"
import { PatternBackground } from "@/components/ui/pattern-background"
import { Code2, CheckCircle2, Download, Zap, Shield, AlertTriangle } from "lucide-react"

export function VSCodeExtensionFeature() {
  const handleInstallExtension = () => {
    // Open VS Code marketplace link
    window.open("vscode:extension/CodeShield.codeshield-security", "_blank")
  }

  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <PatternBackground  />
        <ScrollFade>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-400 to-gray-500 bg-clip-text text-transparent">
              VS Code Security Extension
            </h2>
            <p className="mt-4 text-gray-400 md:text-xl">
              Secure your code as you write it with real-time vulnerability detection
            </p>
          </div>
        </ScrollFade>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ScrollFade>
            <motion.div
              className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-mono text-sm text-gray-300">CodeShield Security Extension</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              <div className="bg-gray-900 p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20at%202.17.06%E2%80%AFPM-iBAnc89cp6JDayWdS3jTfRBi7dAaoq.png"
                  alt="CodeShield VS Code Extension Interface"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </ScrollFade>

          <ScrollFade>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-emerald-400">Real-Time Code Security</h3>
                </div>
                <p className="text-gray-300">
                  Integrate security scanning directly into your VS Code environment. Get instant feedback on
                  vulnerabilities as you code, with detailed explanations and fix suggestions right in your editor.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-emerald-500/30">
                  <Zap className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-emerald-400">Instant Vulnerability Detection</h4>
                    <p className="text-sm text-gray-300">
                      Scan your code in real-time and identify security issues as you type
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-emerald-500/30">
                  <Shield className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-emerald-400">Detailed Fix Guidance</h4>
                    <p className="text-sm text-gray-300">
                      Get step-by-step remediation instructions with code examples
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-emerald-500/30">
                  <AlertTriangle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-emerald-400">Priority-Based Alerts</h4>
                    <p className="text-sm text-gray-300">
                      Focus on critical issues first with intelligent priority scoring
                    </p>
                  </div>
                </div>
              </div>

              {/* <Button
                className="w-full bg-emerald-500 text-gray-900 hover:bg-emerald-600 group relative overflow-hidden"
                onClick={handleInstallExtension}
              >
                <span className="relative z-10">Install VS Code Extension</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-gray-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="ml-2 h-5 w-5 relative z-10" />
              </Button> */}

              {/* <div className="text-center text-sm text-gray-400 mt-2">
                Available in the <code className="bg-gray-800 px-2 py-1 rounded">VS Code Marketplace</code>
              </div> */}
            </div>
          </ScrollFade>
        </div>

        <ScrollFade>
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Security Insights at Your Fingertips</h3>
              <p className="text-gray-300">
                Get comprehensive security analysis with categorized issues, detailed explanations, and actionable
                remediation steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Open Source Security</h4>
                    {/* <p className="text-sm text-gray-400">4 issues found</p> */}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Identify vulnerabilities in your dependencies and third-party packages
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <Shield className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Code Security</h4>
                    {/* <p className="text-sm text-gray-400">SQL Injection detected</p> */}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Real-time detection of security anti-patterns and vulnerabilities in your code
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Code Quality</h4>
                    {/* <p className="text-sm text-gray-400">2671 issues analyzed</p> */}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Comprehensive code quality analysis with security-focused recommendations
                </p>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
