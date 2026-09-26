import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarCheck, Mail, Database, Headphones, Share2, FileText } from "lucide-react"

const services = [
  {
    icon: CalendarCheck,
    title: "Calendar & Appointment Scheduling",
    description: "Multi-party scheduling, reminders, rescheduling, and time-zone coordination via Google Calendar and Calendly.",
    tags: ["Google Calendar", "Calendly"],
  },
  {
    icon: Mail,
    title: "Email Management & Triage",
    description: "Sorting incoming mail, drafting replies, flagging what needs your attention, and follow-up tracking.",
    tags: ["Gmail", "Outlook"],
  },
  {
    icon: Database,
    title: "Data Entry & Record-Keeping",
    description: "Organized spreadsheets, CRM updates, digital filing, and clean documentation practices.",
    tags: ["Google Sheets", "Excel", "Notion"],
  },
  {
    icon: Headphones,
    title: "Customer Support & Enquiries",
    description: "Professional handling of customer messages, complaint resolution, and cross-team coordination.",
    tags: ["Email", "Chat", "Social"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Content scheduling, engagement monitoring, and consistent tone across Facebook and Instagram.",
    tags: ["Facebook", "Instagram", "Canva"],
  },
  {
    icon: FileText,
    title: "Basic IT & Tool Troubleshooting",
    description: "Software, account, and connectivity issues resolved quickly — no need to escalate to a separate IT person.",
    tags: ["Setup", "Account", "Connectivity"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Hourly and monthly retainer arrangements. Mix and match based on what you need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="bg-card">
                <CardHeader>
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}