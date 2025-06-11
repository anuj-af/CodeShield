"use client"

import { motion } from "framer-motion"
import { ScrollFade } from "@/components/ui/scroll-fade"
import { PatternBackground } from "@/components/ui/pattern-background"
import { CheckCircle2, X, TrendingUp, DollarSign, Clock, Shield, Users, Zap, Star, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function BusinessFeasibility() {
  const [activeMetric, setActiveMetric] = useState(0)

  const pricingPlans = [
    {
      name: "CodeShield Free",
      subtitle: "Try it and see",
      price: "$0",
      period: "month",
      popular: false,
      features: [
        "Basic vulnerability scanning",
        "Up to 5 repositories",
        "Community support",
        "Basic CI/CD integration",
        "Standard reporting",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "CodeShield Enterprise",
      subtitle: "Most popular",
      price: "$29",
      period: "month",
      annualPrice: "$290 billed annually",
      popular: true,
      features: [
        "Unlimited vulnerability scanning",
        "Real-time security monitoring",
        "Advanced AI recommendations",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team collaboration tools",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
    },
    {
      name: "CodeShield Pro",
      subtitle: "For power users",
      price: "$99",
      period: "month",
      popular: false,
      features: [
        "Everything in Enterprise",
        "White-label solutions",
        "Custom security policies",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced compliance reporting",
        "Custom training sessions",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
    },
  ]

  const competitors = [
    {
      name: "CodeShield",
      pricing: "$29/dev/month",
      realTimeScanning: true,
      cicdIntegration: true,
      vscodeExtension: true,
      aiRecommendations: true,
      openSource: true,
      enterpriseSupport: true,
      deploymentTime: "< 5 minutes",
      falsePositiveRate: "< 5%",
      languages: "25+",
      isOurs: true,
    },
    {
      name: "Snyk",
      pricing: "$52/dev/month",
      realTimeScanning: false,
      cicdIntegration: true,
      vscodeExtension: true,
      aiRecommendations: false,
      openSource: true,
      enterpriseSupport: true,
      deploymentTime: "2-4 hours",
      falsePositiveRate: "15-20%",
      languages: "20+",
      isOurs: false,
    },
    {
      name: "SonarQube",
      pricing: "$150/dev/month",
      realTimeScanning: false,
      cicdIntegration: true,
      vscodeExtension: false,
      aiRecommendations: false,
      openSource: false,
      enterpriseSupport: true,
      deploymentTime: "1-2 days",
      falsePositiveRate: "25-30%",
      languages: "15+",
      isOurs: false,
    },
    {
      name: "Veracode",
      pricing: "$200+/dev/month",
      realTimeScanning: false,
      cicdIntegration: true,
      vscodeExtension: false,
      aiRecommendations: false,
      openSource: false,
      enterpriseSupport: true,
      deploymentTime: "3-5 days",
      falsePositiveRate: "20-25%",
      languages: "18+",
      isOurs: false,
    },
    {
      name: "Checkmarx",
      pricing: "$180/dev/month",
      realTimeScanning: false,
      cicdIntegration: true,
      vscodeExtension: true,
      aiRecommendations: false,
      openSource: false,
      enterpriseSupport: true,
      deploymentTime: "2-3 days",
      falsePositiveRate: "18-22%",
      languages: "22+",
      isOurs: false,
    },
  ]

  const businessMetrics = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Savings",
      value: "67%",
      description: "Average reduction in security tooling costs compared to enterprise alternatives",
      details: "Save $1.2M annually for a 100-developer team",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time to Value",
      value: "< 5 min",
      description: "From installation to first security scan results",
      details: "vs. 2-5 days for traditional solutions",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI",
      value: "340%",
      description: "Return on investment within the first year",
      details: "Based on prevented security incidents and developer productivity gains",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vulnerability Detection",
      value: "95%",
      description: "Accuracy rate with minimal false positives",
      details: "Industry-leading detection with AI-powered analysis",
    },
  ]

  const costAnalysis = [
    { teamSize: "10 Developers", codeshield: "$290", competitors: "$520-$2000", savings: "$230-$1710" },
    { teamSize: "50 Developers", codeshield: "$1,450", competitors: "$2,600-$10,000", savings: "$1,150-$8,550" },
    { teamSize: "100 Developers", codeshield: "$2,900", competitors: "$5,200-$20,000", savings: "$2,300-$17,100" },
    { teamSize: "500 Developers", codeshield: "$14,500", competitors: "$26,000-$100,000", savings: "$11,500-$85,500" },
  ]

  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <PatternBackground/>

        <ScrollFade>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-400 to-gray-500 bg-clip-text text-transparent">
              Business Feasibility & ROI
            </h2>
            <p className="mt-4 text-gray-400 md:text-xl">
              Comprehensive analysis of CodeShield's business value and competitive advantage
            </p>
          </div>
        </ScrollFade>

        {/* Pricing Cards */}
        <ScrollFade>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Choose Your Security Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-xl border transition-all duration-300 ${
                    plan.popular
                      ? "bg-emerald-500/10 border-emerald-500 shadow-lg shadow-emerald-500/20"
                      : "bg-gray-800/30 border-gray-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    boxShadow: plan.popular
                      ? "0 0 30px rgba(16, 185, 129, 0.3), inset 0 0 30px rgba(16, 185, 129, 0.1)"
                      : "0 0 20px rgba(16, 185, 129, 0.1)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-emerald-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-emerald-400 mb-2">{plan.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-100">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/ {plan.period}</span>
                    </div>
                    {plan.annualPrice && <p className="text-sm text-emerald-300">{plan.annualPrice}</p>}
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  
                    <Button
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-emerald-500 text-gray-900 hover:bg-emerald-600"
                        : "border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-gray-900 bg-transparent"
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* Business Metrics */}
        <ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {businessMetrics.map((metric, i) => (
              <motion.div
                key={metric.title}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeMetric === i
                    ? "bg-emerald-500/20 border-emerald-500"
                    : "bg-gray-800/50 border-gray-700 hover:border-emerald-500/50"
                }`}
                onClick={() => setActiveMetric(i)}
                whileHover={{ scale: 1.02 }}
                style={{
                  boxShadow:
                    activeMetric === i ? "0 0 20px rgba(16, 185, 129, 0.3)" : "0 0 10px rgba(16, 185, 129, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <div className="text-emerald-400">{metric.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-200">{metric.title}</h3>
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                <p className="text-sm text-gray-300 mb-2">{metric.description}</p>
                {activeMetric === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-emerald-300 font-medium"
                  >
                    {metric.details}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollFade>

        {/* Competitor Comparison Table */}
        <ScrollFade>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Competitive Analysis</h3>
            <div className="overflow-x-auto">
              <div
                className="min-w-full bg-gray-800/30 rounded-lg"
                style={{
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.05)",
                }}
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-emerald-500/30">
                      <th className="text-left p-4 text-gray-300 font-medium">Solution</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Pricing</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Real-time Scanning</th>
                      <th className="text-center p-4 text-gray-300 font-medium">CI/CD Integration</th>
                      <th className="text-center p-4 text-gray-300 font-medium">VS Code Extension</th>
                      <th className="text-center p-4 text-gray-300 font-medium">AI Recommendations</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Open Source</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Deployment Time</th>
                      <th className="text-left p-4 text-gray-300 font-medium">False Positive Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((competitor) => (
                      <tr
                        key={competitor.name}
                        className={`border-b border-emerald-500/20 ${
                          competitor.isOurs ? "bg-emerald-500/10" : "hover:bg-gray-700/30"
                        }`}
                        style={{
                          boxShadow: competitor.isOurs ? "inset 0 0 20px rgba(16, 185, 129, 0.1)" : "none",
                        }}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-medium ${competitor.isOurs ? "text-emerald-400" : "text-gray-200"}`}>
                              {competitor.name}
                            </span>
                            {competitor.isOurs && (
                              <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded">
                                Our Solution
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-gray-300">{competitor.pricing}</td>
                        <td className="p-4 text-center">
                          {competitor.realTimeScanning ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.cicdIntegration ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.vscodeExtension ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.aiRecommendations ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.openSource ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-gray-300">{competitor.deploymentTime}</td>
                        <td className="p-4 text-gray-300">{competitor.falsePositiveRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollFade>

        {/* Cost Analysis */}
        <ScrollFade>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Monthly Cost Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Cost Comparison by Team Size</h4>
                <div className="space-y-4">
                  {costAnalysis.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                      <span className="text-gray-300 font-medium">{item.teamSize}</span>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold">{item.codeshield}</div>
                        <div className="text-xs text-gray-400">vs {item.competitors}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Annual Savings Potential</h4>
                <div className="space-y-4">
                  {costAnalysis.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-emerald-500/10 rounded">
                      <span className="text-gray-300 font-medium">{item.teamSize}</span>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold">{item.savings}/month</div>
                        <div className="text-xs text-emerald-300">
                          ${Number.parseInt(item.savings.split("-")[0].replace("$", "").replace(",", "")) * 12}k - $
                          {Number.parseInt(item.savings.split("-")[1]?.replace("$", "").replace(",", "") || "0") * 12}k
                          annually
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>

        {/* Key Differentiators */}
        <ScrollFade>
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Key Competitive Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-gray-800/30 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-emerald-400" />
                  <h4 className="font-semibold text-emerald-400">Real-Time Security</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Only solution offering true real-time vulnerability detection as you code, preventing issues before
                  they reach production.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/30 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-emerald-400" />
                  <h4 className="font-semibold text-emerald-400">Cost Efficiency</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Up to 80% cost savings compared to enterprise alternatives while providing superior features and
                  faster deployment.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/30 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-emerald-400" />
                  <h4 className="font-semibold text-emerald-400">Developer Experience</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Seamless integration with existing workflows, minimal learning curve, and AI-powered recommendations
                  for faster remediation.
                </p>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
