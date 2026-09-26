import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
            Available for new clients · Flexible with US time zones
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Virtual assistant for founders who need reliable administrative support.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
  I'm Jyanti, a virtual assistant based in Valenzuela, Philippines. I handle
  scheduling, email, data entry, and day-to-day admin — with the added bonus
  that I can troubleshoot the tools your team already uses.
</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#contact">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <Avatar className="h-56 w-56 rounded-xl">
            <AvatarImage src="/jyanti.jpg" alt="Jyanti Austria Kumar" />
            <AvatarFallback className="rounded-xl text-3xl bg-secondary text-secondary-foreground">
              JK
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}