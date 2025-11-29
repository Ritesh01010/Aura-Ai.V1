"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Settings,
  Trophy,
  BarChart3,
  Calendar,
  Clock,
  Flame,
  Dumbbell,
  Heart,
  ArrowUp,
  Camera,
  Edit,
  User,
  Zap,
  Menu
} from "lucide-react"
import Header from "../../components/header"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30">
      <Header />
      <main className="flex-1 pb-12">
        
        {/* Profile Header with Banner */}
        <div className="relative mb-8">
            <div className="h-48 w-full bg-gradient-to-r from-violet-900/40 via-indigo-900/40 to-slate-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            </div>
            
            <div className="container px-4 md:px-6 -mt-16 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                            <Avatar className="h-32 w-32 border-4 border-slate-950 relative">
                                <AvatarImage src="/placeholder.svg?height=128&width=128&text=User" className="object-cover" />
                                <AvatarFallback className="bg-slate-800 text-2xl font-bold text-slate-400">UN</AvatarFallback>
                            </Avatar>
                            <Button size="icon" variant="secondary" className="absolute bottom-1 right-1 h-8 w-8 rounded-full border-2 border-slate-950 bg-slate-800 hover:bg-slate-700 text-white shadow-lg">
                                <Camera className="h-4 w-4" />
                                <span className="sr-only">Change avatar</span>
                            </Button>
                        </div>
                        
                        <div className="space-y-2 mb-2">
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold text-white">Alex Johnson</h1>
                                <Badge className="bg-violet-500/20 text-violet-200 hover:bg-violet-500/30 border-violet-500/30 px-2 py-0.5 text-xs">
                                    <Zap className="w-3 h-3 mr-1 fill-current" /> Level 12
                                </Badge>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Joined Jan 2023</span>
                                <span className="flex items-center gap-1"><Trophy className="w-4 h-4" /> 125 Workouts</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex gap-3 mb-2">
                        <Button variant="outline" className="gap-2 border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
                            <Edit className="h-4 w-4" />
                            <span>Edit Profile</span>
                        </Button>
                        <Button variant="outline" size="icon" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container px-4 md:px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-8">
              <TabsList className="w-full max-w-md bg-slate-900/80 border border-slate-800 p-1 h-auto rounded-full grid grid-cols-3">
                <TabsTrigger value="overview" className="rounded-full py-2 text-slate-400 data-[state=active]:bg-violet-600 data-[state=active]:text-white transition-all">Overview</TabsTrigger>
                <TabsTrigger value="stats" className="rounded-full py-2 text-slate-400 data-[state=active]:bg-violet-600 data-[state=active]:text-white transition-all">Statistics</TabsTrigger>
                <TabsTrigger value="history" className="rounded-full py-2 text-slate-400 data-[state=active]:bg-violet-600 data-[state=active]:text-white transition-all">History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                
                {/* Key Metrics */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
                    <CardHeader className="pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium text-slate-400">Weekly Goal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-end justify-between">
                          <span className="text-2xl font-bold text-white">3<span className="text-slate-500 text-lg font-normal">/4</span></span>
                          <span className="text-xs font-medium text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">75%</span>
                        </div>
                        <Progress value={75} className="h-2 bg-slate-800" />
                        <p className="text-xs text-slate-500">1 workout left to reach target</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
                    <CardHeader className="pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium text-slate-400">Calories Burned</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">1,248</span>
                            <Badge variant="outline" className="text-[10px] gap-0.5 border-emerald-500/30 text-emerald-400 bg-emerald-500/10 h-5 px-1.5">
                              <ArrowUp className="h-2.5 w-2.5" /> 12%
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-500">Total this week</p>
                      </div>
                      <div className="mt-3 h-1 w-full flex gap-0.5 items-end opacity-50">
                          {[20, 40, 30, 50, 40, 60, 80].map((h, i) => (
                              <div key={i} className="flex-1 bg-orange-500 rounded-t-sm" style={{ height: `${h}%` }} />
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
                    <CardHeader className="pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium text-slate-400">Active Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-1">
                         <span className="text-2xl font-bold text-white">3h 45m</span>
                         <p className="text-xs text-slate-500">Total duration this week</p>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>Avg 45m / session</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
                    <CardHeader className="pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium text-slate-400">Current Streak</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-1">
                         <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">5 Days</span>
                            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
                         </div>
                         <p className="text-xs text-slate-500">Personal best: 14 days</p>
                      </div>
                      <div className="mt-3 flex gap-1">
                          {['M','T','W','T','F','S','S'].map((d, i) => (
                              <div key={i} className={`h-6 w-6 rounded flex items-center justify-center text-[10px] font-bold ${i < 5 ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-600'}`}>
                                  {d}
                              </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Recent Activity */}
                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                          <div>
                              <CardTitle className="text-white">Recent Activity</CardTitle>
                              <CardDescription className="text-slate-400">Your latest workout sessions</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10">View All</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Upper Body Strength", "HIIT Cardio", "Core Workout"].map((workout, i) => (
                          <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors group cursor-pointer border border-transparent hover:border-slate-800">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${i===0 ? 'bg-blue-500/10 text-blue-400' : i===1 ? 'bg-orange-500/10 text-orange-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                              <Dumbbell className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover:text-violet-300 transition-colors">{workout}</div>
                              <div className="text-xs text-slate-500 flex items-center gap-2">
                                <span>{i === 0 ? "Today" : i === 1 ? "Yesterday" : "3 days ago"}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span>{i === 0 ? "25 min" : i === 1 ? "35 min" : "20 min"}</span>
                              </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-slate-300">{i === 0 ? "320" : i === 1 ? "450" : "180"}</div>
                                <div className="text-[10px] text-slate-500 uppercase">Kcal</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievements */}
                  <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                          <div>
                              <CardTitle className="text-white">Achievements</CardTitle>
                              <CardDescription className="text-slate-400">Badges and milestones</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10">View All</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Flame, name: "Burner", desc: "5000 kcal", color: "text-orange-500", bg: "bg-orange-500/10" },
                          { icon: Calendar, name: "Consistent", desc: "7 day streak", color: "text-blue-500", bg: "bg-blue-500/10" },
                          { icon: Dumbbell, name: "Strong", desc: "10 strength", color: "text-violet-500", bg: "bg-violet-500/10" },
                          { icon: Heart, name: "Cardio", desc: "15 sessions", color: "text-pink-500", bg: "bg-pink-500/10" },
                          { icon: Trophy, name: "Top 50", desc: "Rank up", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                          { icon: Clock, name: "Dedicated", desc: "10 hours", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                        ].map((achievement, i) => (
                          <div key={i} className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-800 cursor-pointer group">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${achievement.bg} ${achievement.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                              <achievement.icon className="h-6 w-6" />
                            </div>
                            <div className="text-xs font-bold text-slate-300 group-hover:text-white">{achievement.name}</div>
                            <div className="text-[10px] text-slate-500">{achievement.desc}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="stats" className="mt-6 space-y-6 animate-in fade-in-50 slide-in-from-bottom-4">
                <Card className="bg-slate-900/40 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white">Workout Statistics</CardTitle>
                    <CardDescription className="text-slate-400">Metrics over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex flex-col items-center justify-center text-slate-500">
                    <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4 animate-pulse">
                         <BarChart3 className="h-10 w-10 text-slate-600" />
                    </div>
                    <p>Detailed visualization engine loading...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-6 animate-in fade-in-50 slide-in-from-bottom-4">
                <Card className="bg-slate-900/40 border-slate-800">
                   <CardHeader>
                     <CardTitle className="text-white">Full History</CardTitle>
                   </CardHeader>
                   <CardContent>
                      <div className="text-center py-12 text-slate-500">
                         <p>Complete workout history logs.</p>
                      </div>
                   </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  )
}