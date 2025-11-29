import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dumbbell, Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Aura</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors">Home</a>
          <a href="/library" className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors">Video Library</a>
          <a href="/training" className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors">Training</a>
          <a href="/leaderboard" className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors">Leaderboard</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login">
             <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">Login</Button>
          </a>
          <a href="/login?signup=true">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white border-0 shadow-lg shadow-violet-500/20">Sign Up</Button>
          </a>
          <a href="/profile">
            <Avatar className="h-8 w-8 border border-slate-700 cursor-pointer hover:border-violet-500 transition-colors">
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
              <AvatarFallback className="bg-slate-800 text-slate-400"><User className="h-4 w-4" /></AvatarFallback>
            </Avatar>
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
           <a href="/profile">
            <Avatar className="h-8 w-8 border border-slate-700">
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
              <AvatarFallback className="bg-slate-800 text-slate-400">U</AvatarFallback>
            </Avatar>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-slate-800 bg-slate-900 text-slate-400 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-slate-800 text-slate-200">
              <nav className="flex flex-col gap-6 mt-8">
                <a href="/" className="text-lg font-medium hover:text-violet-400 transition-colors">Home</a>
                <a href="/library" className="text-lg font-medium hover:text-violet-400 transition-colors">Video Library</a>
                <a href="/training" className="text-lg font-medium hover:text-violet-400 transition-colors">Training</a>
                <a href="/leaderboard" className="text-lg font-medium hover:text-violet-400 transition-colors">Leaderboard</a>
                <div className="h-px bg-slate-800 my-2" />
                <a href="/profile" className="text-lg font-medium hover:text-violet-400 transition-colors">Profile</a>
                <a href="/login" className="text-lg font-medium hover:text-violet-400 transition-colors">Login</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}