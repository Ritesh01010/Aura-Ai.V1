import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Search, Filter, Clock, Flame, Zap, Play, Sparkles } from "lucide-react";
import Header from "@/components/header";

const videoData = {
  all: [
    { title: "Full Body Dumbbell Workout", url: "https://www.youtube.com/embed/Sou12pLJFCc", category: "Full Body", calories: 350, level: "Intermediate", duration: "45 min" },
    { title: "Strength Training for Beginners", url: "https://www.youtube.com/embed/PfAAU3hVu5U", category: "Strength", calories: 400, level: "Advanced", duration: "30 min" },
    { title: "HIIT Cardio Blast", url: "https://www.youtube.com/embed/iMqj2R62CO8", category: "Cardio", calories: 500, level: "Intermediate", duration: "20 min" },
    { title: "Morning Yoga Routine", url: "https://www.youtube.com/embed/wTX5ya6zuYs", category: "Yoga", calories: 200, level: "Beginner", duration: "15 min" }
  ],
  strength: [
    { title: "Strength Training for Beginners", url: "https://www.youtube.com/embed/PfAAU3hVu5U", category: "Strength", calories: 400, level: "Advanced", duration: "30 min" },
    { title: "Upper Body Strength Workout", url: "https://www.youtube.com/embed/-SwqeFpf26Y", category: "Strength", calories: 450, level: "Intermediate", duration: "40 min" }
  ],
  cardio: [
    { title: "HIIT Cardio Blast", url: "https://www.youtube.com/embed/iMqj2R62CO8", category: "Cardio", calories: 500, level: "Intermediate", duration: "20 min" },
    { title: "Jump Rope HIIT Workout", url: "https://www.youtube.com/embed/uBGYht2hSPU", category: "Cardio", calories: 600, level: "Advanced", duration: "25 min" }
  ],
  yoga: [
    { title: "Morning Yoga Routine", url: "https://www.youtube.com/embed/wTX5ya6zuYs", category: "Yoga", calories: 200, level: "Beginner", duration: "15 min" },
    { title: "Relaxing Yoga for Flexibility", url: "https://www.youtube.com/embed/G-Z9BXM9Gy0", category: "Yoga", calories: 150, level: "Beginner", duration: "30 min" }
  ]
};

export default function VideoLibraryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <div className="relative py-12 md:py-20 overflow-hidden">
           {/* Background Glows */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
           <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

           <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                  <Badge variant="outline" className="border-violet-500/30 bg-violet-500/10 text-violet-300 px-3 py-1 backdrop-blur-sm">
                    <Sparkles className="mr-1 h-3 w-3 fill-violet-500" />
                    Pro Library
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    Master Every Move
                  </h1>
                  <p className="text-slate-400 md:text-xl max-w-[600px] leading-relaxed">
                    Explore our curated collection of AI-enhanced workouts designed to perfect your form and maximize results.
                  </p>

                  {/* Floating Search Bar */}
                  <div className="relative w-full max-w-md mt-4 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative flex items-center bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-1.5 shadow-xl focus-within:border-violet-500/50 transition-all">
                        <div className="pl-4 text-slate-500 group-focus-within:text-violet-400 transition-colors">
                            <Search className="h-5 w-5" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search workouts..."
                            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-200 placeholder:text-slate-500 h-10 text-base"
                        />
                        <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700 h-9 px-6 transition-all hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
                            Search
                        </Button>
                    </div>
                  </div>
              </div>
           </div>
        </div>

        <div className="container py-8 px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full space-y-8">
              {/* Controls Row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sticky top-20 z-30 p-2 -mx-2 rounded-2xl backdrop-blur-sm md:static md:p-0 md:backdrop-blur-none">
                 <TabsList className="bg-slate-900/80 border border-slate-800 p-1 h-auto rounded-full shadow-lg">
                    {['all', 'strength', 'cardio', 'yoga'].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="rounded-full px-6 py-2 text-slate-400 data-[state=active]:bg-violet-600 data-[state=active]:text-white transition-all capitalize data-[state=active]:shadow-md"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                 </TabsList>

                 <Button variant="outline" className="border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-violet-500/30 gap-2 rounded-full">
                    <Filter className="h-4 w-4" />
                    Filters
                 </Button>
              </div>

              {/* Content Grid */}
               {Object.keys(videoData).map((category) => (
                <TabsContent key={category} value={category} className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* {videoData[category].map((video, i) => ( */}
                    {videoData[category as keyof typeof videoData].map((video, i) => (
                      <VideoCard key={i} video={video} index={i} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
        </div>
      </main>
    </div>
  );
}

function VideoCard({ video, index }) {
  return (
    <div 
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 shadow-lg hover:shadow-violet-900/20"
        style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link href="/library/video-1" className="flex-1 flex flex-col">
        {/* Thumbnail Section */}
        <div className="aspect-video relative overflow-hidden bg-slate-950">
          {/* iframe needs pointer-events-none to allow clicking the card link, or use an image thumbnail instead */}
          <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <iframe
            src={`${video.url}?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=${video.url.split('/').pop()}`}
            title={video.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
            allow="autoplay; encrypted-media"
          ></iframe>
          
          {/* Play Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-12 w-12 rounded-full bg-violet-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Play className="h-5 w-5 fill-current ml-0.5" />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute top-3 left-3 z-20">
             <Badge variant="secondary" className="bg-slate-950/70 backdrop-blur text-xs border border-slate-800 text-slate-200 font-medium">
                {video.category}
             </Badge>
          </div>
          
           {/* Duration Pill */}
           <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
             <Clock className="h-3 w-3" /> {video.duration || "20 min"}
           </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-1 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-slate-100 line-clamp-1 group-hover:text-violet-400 transition-colors">
                {video.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Master your technique with real-time AI feedback on form and tempo.
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span>{video.calories} kcal</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Zap className={`h-3.5 w-3.5 ${video.level === 'Advanced' ? 'text-red-400' : 'text-emerald-400'}`} />
              <span>{video.level}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}