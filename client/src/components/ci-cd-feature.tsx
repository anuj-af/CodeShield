"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollFade } from "@/components/ui/scroll-fade"

import { Shield, CheckCircle2, Github, GitPullRequest, Code, FileDown } from "lucide-react"

export function CICDFeature() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/code-shield.yml"
    link.download = "code-shield.yml"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative w-full py-16 sm:py-24">
      <style>{`
        .scroll-y::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .scroll-y::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .scroll-y::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 4px;
        }
        .scroll-y::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>

      <div className="container px-4 sm:px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-400 to-gray-500 bg-clip-text text-transparent">
              Automated Security Pipeline
            </h2>
            <p className="mt-4 text-gray-400 md:text-xl">
              Integrate security directly into your CI/CD workflow with one-click deployment
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
                  <Github className="h-5 w-5 text-emerald-400" />
                  <span className="font-mono text-sm text-gray-300">.github/workflows/code-shield.yml</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              <div
                className="scroll-y bg-gray-900 p-6 font-mono text-sm text-gray-300 overflow-auto max-h-[400px]"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#374151 #1f2937",
                }}
              >
                <pre className="whitespace-pre">{`name: CodeShield Scan

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  scan:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: 🔍 Initiate CodeShield Security Scan
        id: codeshield
        shell: bash
        run: |
          RESPONSE=$(curl -s -X POST https://codeshield-web-prod-server.vercel.app/scanGit \\
            -H "Content-Type: application/json" \\
            -d '{
              "repoUrl": "\${{ github.event.repository.clone_url }}",
              "scanType": "open_source"
            }')

          STATUS=$(echo "$RESPONSE" | jq -r '.status')
          SUMMARY=$(echo "$RESPONSE" | jq -r '.summary')
          
          echo "status=$STATUS" >> "$GITHUB_OUTPUT"
          echo "summary=$SUMMARY" >> "$GITHUB_OUTPUT"

          echo ""
          echo "📘 Security Scan Summary"
          echo "──────────────────────────────"
          echo "🔎 Status     : \${STATUS^^}"
          echo "📝 Summary    : $SUMMARY"
          echo "──────────────────────────────"

      - name: ❌ Block PR - High Risk Vulnerabilities Found
        if: steps.codeshield.outputs.status == 'fail'
        run: |
          echo "🛑 Security scan failed:"
          echo "\${{ steps.codeshield.outputs.summary }}"
          exit 1

      - name: ✅ Security Scan Passed
        if: steps.codeshield.outputs.status == 'pass'
        run: |
          echo "🎉 Security scan passed successfully!"
          echo "\${{ steps.codeshield.outputs.summary }}"
          echo "Your code is secure and ready for deployment."`}
                </pre>
              </div>
            </motion.div>
          </ScrollFade>

          <ScrollFade>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-emerald-400">Continuous Security Integration</h3>
                </div>
                <p className="text-gray-300">
                  Automatically scan every commit and pull request for security vulnerabilities before they reach
                  production. Block high-risk code from being merged and ensure your codebase remains secure at all
                  times.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    Icon: CheckCircle2,
                    title: "One-Click Integration",
                    desc: "Add the workflow file to your repository and you're protected",
                  },
                  {
                    Icon: GitPullRequest,
                    title: "Pull Request Protection",
                    desc: "Automatically block vulnerable code from being merged",
                  },
                  {
                    Icon: Code,
                    title: "Detailed Security Reports",
                    desc: "Get comprehensive vulnerability reports with remediation steps",
                  },
                ].map(({ Icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-emerald-500/30"
                  >
                    <Icon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-emerald-400">{title}</h4>
                      <p className="text-sm text-gray-300">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                type="button"
                className="w-full bg-emerald-500 text-gray-900 hover:bg-emerald-600 group relative overflow-hidden"
                onClick={handleDownload}
              >
                <span className="relative z-10">Add to your workflow</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-gray-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <FileDown className="ml-2 h-5 w-5 relative z-10" />
              </Button>

              <div className="text-center text-sm text-gray-400 mt-2">
                Just add this file to{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">.github/workflows/</code> in your repository to get
                started
              </div>
            </div>
          </ScrollFade>
        </div>

        <ScrollFade>
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">See It In Action</h3>
              <p className="text-gray-300">
                CodeShield automatically runs on every push and pull request, providing immediate feedback on your
                code's security status directly in your GitHub workflow.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-3xl rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                <div className="bg-gray-800 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-300">GitHub Actions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <div className="bg-white p-3">
                  <img
                    src="/images/github-check.png"
                    alt="CodeShield Scan Successful"
                    className="w-full h-auto shadow-md rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
