"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, Dumbbell, Play, Clock, Calendar, BarChart, ChevronRight, Zap, Activity } from "lucide-react"
import Header from "../../components/header"

export default function TrainingPage() {
  const [progress, setProgress] = useState(68)

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30">
      <Header />
      <main className="flex-1 pb-12">
        
        {/* Header Section */}
        <div className="relative py-12 overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
           <div className="container px-4 md:px-6">
             <div className="flex flex-col gap-4 max-w-2xl">
               <Badge variant="outline" className="w-fit border-violet-500/30 bg-violet-500/10 text-violet-300 px-3 py-1 backdrop-blur-md">
                 <Zap className="mr-1 h-3 w-3 fill-violet-500" />
                 AI Trainer Active
               </Badge>
               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                 Training Sessions
               </h1>
               <p className="text-lg text-slate-400">
                 Your personalized path to peak performance. Track, analyze, and improve with real-time feedback.
               </p>
             </div>
           </div>
        </div>

        <div className="container px-4 md:px-6 space-y-10">
          
          {/* Main Dashboard Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Active Plan Card */}
            <Card className="col-span-full lg:col-span-2 bg-slate-900/50 border-slate-800 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[50px] -z-10" />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-white">Current Training Plan</CardTitle>
                    <CardDescription className="text-slate-400">Strength & Conditioning Program</CardDescription>
                  </div>
                  <Badge className="bg-violet-600 hover:bg-violet-700 text-white border-0">Week 2 of 8</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300 font-medium">Overall Progress</span>
                      <span className="text-violet-400 font-bold">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2.5 bg-slate-800" />
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 hover:border-violet-500/30 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                        <Dumbbell className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">12</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Workouts</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 hover:border-violet-500/30 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">5.5h</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 hover:border-violet-500/30 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">4 days</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Remaining</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-slate-950 hover:bg-slate-200 font-semibold">Continue Training</Button>
              </CardFooter>
            </Card>

            {/* Start Session Card */}
            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 overflow-hidden group">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-violet-400" /> 
                  Start Session
                </CardTitle>
                <CardDescription className="text-slate-400">AI-Guided Real-time Analysis</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="aspect-video relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 transition-all">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                       <Camera className="h-8 w-8 text-violet-400" />
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Live Cam</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a href="/exercise-detection-updated.html" className="w-full">
                  <Button className="w-full gap-2 bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-900/20">
                    <Play className="h-4 w-4 fill-current" />
                    Launch AI Camera
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Upcoming Schedule */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Schedule</CardTitle>
                <CardDescription className="text-slate-400">Upcoming Sessions</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1">
                  {[
                    { name: "Upper Body Power", day: "Tomorrow", type: "Strength" }, 
                    { name: "Core Stability", day: "In 2 days", type: "Mobility" },
                    { name: "Active Recovery", day: "In 3 days", type: "Recovery" }
                  ].map((workout, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 ${i === 0 ? 'bg-violet-500/10 text-violet-400' : 'bg-slate-900 text-slate-500'}`}>
                          <Dumbbell className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-200 group-hover:text-white transition-colors">{workout.name}</div>
                          <div className="text-xs text-slate-500">{workout.day} • {workout.type}</div>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white">
                  View Full Calendar
                </Button>
              </CardFooter>
            </Card>

            {/* Analytics Preview */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Performance</CardTitle>
                <CardDescription className="text-slate-400">Weekly Analytics</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group hover:border-violet-500/30 transition-colors">
                  <div className="absolute inset-0 p-6 flex items-end gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                     {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-violet-500 rounded-t-sm hover:bg-violet-400 transition-colors" style={{ height: `${h}%` }} />
                     ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
                  <BarChart className="h-10 w-10 text-slate-400 relative z-10" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white">
                  Detailed Stats
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Recommended Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold text-white">Recommended Workouts</h2>
               <a href="/library" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
                  View Library <ChevronRight className="h-4 w-4" />
               </a>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-slate-900/80 border border-slate-800 p-1 h-auto rounded-full inline-flex">
                {['all', 'strength', 'cardio', 'recovery'].map((tab) => (
                    <TabsTrigger 
                        key={tab} 
                        value={tab} 
                        className="rounded-full px-6 py-2 text-slate-400 data-[state=active]:bg-violet-600 data-[state=active]:text-white transition-all capitalize"
                    >
                        {tab}
                    </TabsTrigger>
                ))}
              </TabsList>

              <div className="mt-8">
                {['all', 'strength', 'cardio', 'recovery'].map((tabValue) => (
                    <TabsContent key={tabValue} value={tabValue} className="mt-0 animate-in fade-in-50 slide-in-from-bottom-2">
                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <WorkoutCard 
                                key={i} 
                                type={tabValue === 'all' ? (i === 0 ? 'Strength' : i === 1 ? 'Cardio' : 'Recovery') : tabValue.charAt(0).toUpperCase() + tabValue.slice(1)} 
                                index={i}
                              />
                            ))}
                         </div>
                    </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function WorkoutCard({ type = "HIIT", index = 0 }: { type?: string, index?: number }) {
  return (
    <div 
        className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 shadow-lg"
        style={{ animationDelay: `${index * 100}ms` }}
    >
      <a href="/training/workout-1" className="flex flex-col h-full">
        <div className="aspect-video relative overflow-hidden bg-slate-950">
          <div className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity ${
              type === 'Strength' ? 'from-blue-600 to-violet-600' : 
              type === 'Cardio' ? 'from-orange-500 to-red-600' : 
              'from-emerald-500 to-teal-600'
          }`} />
          
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10">
            <Clock className="h-3 w-3" />
            <span>25 min</span>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Play className="h-5 w-5 text-white fill-current ml-0.5" />
             </div>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
             <Badge variant="outline" className={`border-0 text-xs px-2 py-0.5 ${
                 type === 'Strength' ? 'bg-blue-500/10 text-blue-400' : 
                 type === 'Cardio' ? 'bg-orange-500/10 text-orange-400' : 
                 'bg-emerald-500/10 text-emerald-400'
             }`}>
                {type}
             </Badge>
             <div className="flex gap-0.5">
                {[1,2,3].map(star => (
                    <div key={star} className={`h-1.5 w-1.5 rounded-full ${star <= (type === 'Recovery' ? 1 : 2) ? 'bg-violet-500' : 'bg-slate-800'}`} />
                ))}
             </div>
          </div>

          <h3 className="font-bold text-lg text-slate-100 line-clamp-1 group-hover:text-violet-400 transition-colors mb-2">
            {type === "Strength"
              ? "Full Body Power"
              : type === "Cardio"
                ? "HIIT Ignite"
                : "Deep Stretch Flow"}
          </h3>
          
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {type === "Strength"
              ? "Build explosive power and raw strength with this compound movement session."
              : type === "Cardio"
                ? "Torch calories and boost your VO2 max with high-intensity intervals."
                : "Improve flexibility and reduce recovery time with guided mobility work."}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/50">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Dumbbell className="h-3.5 w-3.5" />
              <span>{type === "Recovery" ? "Beginner" : "Intermediate"}</span>
            </div>
            <span className="text-xs font-semibold text-violet-400 group-hover:translate-x-1 transition-transform flex items-center">
                Start <ChevronRight className="h-3 w-3 ml-0.5" />
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}