"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Shield, AlertTriangle, TrendingUp, Users, Activity } from "lucide-react"

// Minimal color palette matching your theme
const vulnerabilityTypes = [
  { name: "SQL Injection", color: "hsl(155 66% 40%)" }, // Primary teal
  { name: "Cross-Site Scripting (XSS)", color: "hsl(155 40% 45%)" }, // Muted teal
  { name: "Broken Authentication", color: "hsl(217 19% 60%)" }, // Muted gray
  { name: "Insecure Direct Object References", color: "hsl(217 19% 45%)" }, // Darker gray
  { name: "CSRF", color: "hsl(215 25% 35%)" }, // Dark gray
]

interface preops {
  teamId: string | null
  teamName: string
  repoUrl: string
}

export default function PredictiveAnalysis({ teamId, teamName, repoUrl }: preops) {
  const teamData = {
    code: teamId,
    name: teamName,
    repository: repoUrl,
    members: [
      {
        id: "tcF5wSdLMPOLiMJbZSlKZBlnnge2",
        name: "Tanishq Soni",
        email: "tanishqsoni123@gmail.com",
        vulnerabilityScore: 30,
        riskLevel: "low" as const,
      },
      {
        id: "7b9r3vPUNKoMbR8YJexd",
        name: "Anuj khandelwal",
        email: "anujkhandelwal.0123@gmail.com",
        vulnerabilityScore: 45,
        riskLevel: "medium" as const,
      },
      {
        id: "BzdMLqy5ZB53wd0bf3BB",
        name: "Harshal Tiwari",
        email: "harshaltiwari534@gmail.com",
        vulnerabilityScore: 30,
        riskLevel: "low" as const,
      },
      {
        id: "ECP1ycUzhVPThUfgZn1T",
        name: "Harshi Jain",
        email: "harshijain23@gmail.com",
        vulnerabilityScore: 75,
        riskLevel: "high" as const,
      },
    ],
  }

  const members = teamData.members

  // Generate mock vulnerability data for each member
  const generateMemberVulnerabilities = (memberId: string) => {
    const seed = memberId.charCodeAt(0) + memberId.charCodeAt(1)
    return vulnerabilityTypes.map((vuln, index) => ({
      vulnerability: vuln.name,
      probability: Math.floor((seed * (index + 1) * 7) % 80) + 10,
      color: vuln.color,
    }))
  }

  const teamOverviewData = members.map((member) => ({
    name: member.name.split(" ")[0],
    score: member.vulnerabilityScore,
    riskLevel: member.riskLevel,
  }))

  // Minimal risk distribution colors
  const riskDistribution = [
    { name: "Low Risk", value: members.filter((m) => m.riskLevel === "low").length, color: "hsl(155 66% 40%)" },
    { name: "Medium Risk", value: members.filter((m) => m.riskLevel === "medium").length, color: "hsl(217 19% 50%)" },
    { name: "High Risk", value: members.filter((m) => m.riskLevel === "high").length, color: "hsl(217 19% 35%)" },
  ]

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case "low":
        return "default"
      case "medium":
        return "secondary"
      case "high":
        return "outline"
      default:
        return "outline"
    }
  }

  const avgRiskScore = Math.round(members.reduce((acc, m) => acc + m.vulnerabilityScore, 0) / members.length)
  const highRiskCount = members.filter((m) => m.riskLevel === "high").length

  return (
    <div className="space-y-8 p-6">
      {/* Team Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Team: {teamData.name}</CardTitle>
            <Users className="h-4 w-4 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">{members.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active members</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Risk Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">{avgRiskScore}</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 100</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Risk Members</CardTitle>
            <AlertTriangle className="h-4 w-4 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">{highRiskCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Repository</CardTitle>
            <Activity className="h-4 w-4 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-foreground truncate">{teamData.repository}</div>
            <p className="text-xs text-muted-foreground mt-1">Code: {teamData.code}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              Team Vulnerability Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Vulnerability Score",
                  color: "hsl(155 66% 40%)",
                },
              }}
              className="h-[280px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamOverviewData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    cursor={{ fill: "hsl(var(--muted))", opacity: 0.1 }}
                  />
                  <Bar dataKey="score" fill="hsl(155 66% 40%)" radius={[4, 4, 0, 0]} opacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground">Risk Level Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Members",
                  color: "hsl(155 66% 40%)",
                },
              }}
              className="h-[280px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={40}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={false}
                    fontSize={12}
                    fill="hsl(var(--muted-foreground))"
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Individual Member Analysis */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Users className="w-5 h-5 text-primary" />
            Individual Member Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {members.map((member) => {
              const memberVulnerabilities = generateMemberVulnerabilities(member.id)

              return (
                <Card key={member.id} className="border-border/30 bg-background/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-border/50">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.id}`} />
                          <AvatarFallback className="bg-muted text-muted-foreground">
                            {member.name[0]?.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-foreground">{member.name}</h3>
                          <p className="text-xs text-muted-foreground/70">{member.email}</p>
                        </div>
                      </div>
                      <Badge variant={getRiskBadgeVariant(member.riskLevel)} className="text-xs">
                        {member.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Risk Score</span>
                      <span className="text-lg font-semibold text-foreground">{member.vulnerabilityScore}/100</span>
                    </div>
                    <Progress value={member.vulnerabilityScore} className="w-full h-2 bg-muted/50" />

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-foreground">Vulnerability Analysis</h4>
                      {memberVulnerabilities.map((vuln, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground text-xs">{vuln.vulnerability}</span>
                            <span className="font-medium text-foreground text-xs">{vuln.probability}%</span>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-1.5">
                            <div
                              className="h-1.5 rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${vuln.probability}%`,
                                backgroundColor: vuln.color,
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
