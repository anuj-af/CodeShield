"use client";

import { motion } from "framer-motion";
import { ScrollFade } from "@/components/ui/scroll-fade";
import { PatternBackground } from "@/components/ui/pattern-background";
import {
  CheckCircle2,
  X,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Users,
  Zap,
  Star,
  ArrowRight,
  Subtitles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BusinessFeasibility() {
  const [activeMetric, setActiveMetric] = useState(0);

  const pricingPlans = [
    {
      name: "Free Tier",
      subtitle: "Try it and see",
      price: "₹0",
      period: "month",
      popular: false,
      features: [
        "Basic vulnerability scanning",
        "AI code recommendations",
        "Security query interface",
        "Visualization",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium Tier",
      subtitle: "",
      price: "₹499",
      period: "month",
      annualPrice: "₹5988 billed annually",
      popular: false,
      features: [
        "Unlimited vulnerability scanning",
        "AI code recommendations",
        "AI code rewrite",
        "Security query interface",
        "Conversational AI",
        "Secure code generation",
        "Visualization & Reporting",
        "Predictive Analysis",
        "CI/CD Integration",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
    },
    {
      name: "Corporate Liscensing",
      subtitle: "For Corporate Organizations",
      price: "₹299",
      period: "month",
      popular: true,
      features: [
        "Everything in Premium",
        "In-house deployment",
        "Lesser Prices",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
    },
  ];

  const competitors = [
    {
      name: "CodeShield",
      aiCodeRewrite: true,
      visualization: true,
      collaboration: true,
      secureCodeGeneration: true,
      naturalLanguageQuery: true,
      conversationalAI: true,
      predictiveAnalysis: true,
      gamification: true,
      isOurs: true,
    },
    {
      name: "Snyk",
      aiCodeRewrite: true,
      visualization: true,
      collaboration: true,
      secureCodeGeneration: false,
      naturalLanguageQuery: false,
      conversationalAI: false,
      predictiveAnalysis: false,
      gamification: false,
      isOurs: false,
    },
    {
      name: "SonarQube",
      aiCodeRewrite: true,
      visualization: true,
      collaboration: true,
      secureCodeGeneration: false,
      naturalLanguageQuery: false,
      conversationalAI: false,
      predictiveAnalysis: false,
      gamification: false,
      isOurs: false,
    },
    {
      name: "Veracode",
      aiCodeRewrite: true,
      visualization: true,
      collaboration: true,
      secureCodeGeneration: false,
      naturalLanguageQuery: false,
      conversationalAI: false,
      predictiveAnalysis: false,
      gamification: false,
      isOurs: false,
    },
    {
      name: "Checkmarx",
      aiCodeRewrite: false,
      visualization: true,
      collaboration: true,
      secureCodeGeneration: false,
      naturalLanguageQuery: false,
      conversationalAI: false,
      predictiveAnalysis: false,
      gamification: true,
      isOurs: false,
    },
  ];

  const businessMetrics = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Savings",
      value: "67%",
      description:
        "Average reduction in security tooling costs compared to enterprise alternatives",
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
      details:
        "Based on prevented security incidents and developer productivity gains",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vulnerability Detection",
      value: "95%",
      description: "Accuracy rate with minimal false positives",
      details: "Industry-leading detection with AI-powered analysis",
    },
  ];

  const costAnalysis = [
    {
      teamSize: "10 Developers",
      codeshield: "$290",
      competitors: "$520-$2000",
      savings: "$230-$1710",
    },
    {
      teamSize: "50 Developers",
      codeshield: "$1,450",
      competitors: "$2,600-$10,000",
      savings: "$1,150-$8,550",
    },
    {
      teamSize: "100 Developers",
      codeshield: "$2,900",
      competitors: "$5,200-$20,000",
      savings: "$2,300-$17,100",
    },
    {
      teamSize: "500 Developers",
      codeshield: "$14,500",
      competitors: "$26,000-$100,000",
      savings: "$11,500-$85,500",
    },
  ];

  return (
    <section className="relative w-full py-2">
      <div className="container px-4 sm:px-6 lg:px-8">
        <PatternBackground />

        <ScrollFade>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-emerald-400 to-gray-500 bg-clip-text text-transparent">
              Business Feasibility & ROI
            </h2>
            <p className="mt-4 text-gray-400 md:text-xl">
              Comprehensive analysis of CodeShield's business value and
              competitive advantage
            </p>
          </div>
        </ScrollFade>

        {/* Pricing Cards */}
        <ScrollFade>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
              Choose Your Security Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-xl border transition-all duration-300 flex flex-col ${
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
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-emerald-400 mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-100">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        / {plan.period}
                      </span>
                    </div>
                    {plan.annualPrice && (
                      <p className="text-sm text-emerald-300">
                        {plan.annualPrice}
                      </p>
                    )}
                  </div>

                  {/* This section fills available space */}
                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button stays pinned to the bottom */}
                  <Button
                    className={`w-full mt-auto ${
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

        {/* Competitor Comparison Table */}
        <ScrollFade>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
              Competitive Analysis
            </h3>
            <div className="overflow-x-auto">
              <div
                className="min-w-full bg-gray-800/30 rounded-lg"
                style={{
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  boxShadow:
                    "0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.05)",
                }}
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-emerald-500/30">
                      <th className="text-left p-4 text-gray-300 font-medium">
                        Solutions
                      </th>
                      <th className="text-left p-5 text-gray-300 font-medium">
                        AI rewrite
                      </th>
                      <th className="text-center p-4 text-gray-300 font-medium">
                        Visualization
                      </th>
                      <th className="text-center p-4 text-gray-300 font-medium">
                        Collaboration
                      </th>
                      <th className="text-center p-4 text-gray-300 font-medium">
                        Secure code generation
                      </th>
                      <th className="text-center p-4 text-gray-300 font-medium">
                        Natural language query
                      </th>
                      <th className="text-center p-4 text-gray-300 font-medium">
                        Conversational AI
                      </th>
                      <th className="text-left p-4 text-gray-300 font-medium">
                        Predictive Analysis
                      </th>
                      <th className="text-left p-4 text-gray-300 font-medium">
                        Gamification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((competitor) => (
                      <tr
                        key={competitor.name}
                        className={`border-b border-emerald-500/20 ${
                          competitor.isOurs
                            ? "bg-emerald-500/10"
                            : "hover:bg-gray-700/30"
                        }`}
                        style={{
                          boxShadow: competitor.isOurs
                            ? "inset 0 0 20px rgba(16, 185, 129, 0.1)"
                            : "none",
                        }}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-medium ${
                                competitor.isOurs
                                  ? "text-emerald-400"
                                  : "text-gray-200"
                              }`}
                            >
                              {competitor.name}
                            </span>
                            {competitor.isOurs && (
                              <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded">
                                Our Solution
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          {competitor.aiCodeRewrite ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.visualization ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.collaboration ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.secureCodeGeneration ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.naturalLanguageQuery ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.conversationalAI ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.predictiveAnalysis ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {competitor.gamification ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
