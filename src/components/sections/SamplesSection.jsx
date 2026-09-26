import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const samples = [
  {
    title: "Multi-Party Scheduling",
    service: "Calendar Management",
    description: "Coordinated a 4-person team across three time zones using Google Calendar and Calendly. Zero missed meetings over 15 months.",
    image: "/samples/GCalendar.jpg",
    tools: ["Google Calendar", "Calendly"],
  },
  {
    title: "Inbox Triage System",
    service: "Email Management",
    description: "Set up a labeling system that reduced inbox clutter from 800+ unread to zero in a week.",
    image: "/samples/email.png",
    tools: ["Gmail", "Labels"],
  },
  {
    title: "Structured Data Tracker",
    service: "Data Entry",
    description: "Built a spreadsheet for tracking client inquiries, statuses, and follow-ups.",
    image: "/samples/data-entry.png",
    tools: ["Google Sheets"],
  },
  {
    title: "Customer Inquiry Handling",
    service: "Customer Support",
    description: "Managed a live business page, responding to buyer inquiries and complaints professionally.",
    image: "/samples/customer-support.png",
    tools: ["Facebook", "Messenger"],
  },
  {
    title: "Content Calendar",
    service: "Social Media",
    description: "Planned a month of posts with captions, hashtags, and visuals ahead of schedule.",
    image: "/samples/social-media.png",
    tools: ["Canva", "Notion"],
  },
  {
    title: "Account Recovery Guide",
    service: "IT Support",
    description: "Created a step-by-step guide for common account issues, so the team could resolve them without waiting.",
    image: "/samples/troubleshooting.png",
    tools: ["Documentation"],
  },
]

export default function SamplesSection() {
  return (
    <section id="samples" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Work Samples</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Representative samples of my work. Screenshots use fictional client data.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample) => (
          <Card key={sample.title} className="overflow-hidden group">
            <div className="aspect-video overflow-hidden bg-muted border-b">
              <img
                src={sample.image}
                alt={sample.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-sm leading-tight">{sample.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">{sample.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {sample.tools.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}