import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experience = [
  {
    role: "Capstone Project Team Leader",
    org: "Manila Central University",
    period: "Feb 2025 – May 2026",
    bullets: [
      "Coordinated schedules and managed meetings between team members and external clients across a multi-month project.",
      "Sent proactive reminders, follow-ups, and status updates to keep stakeholders aligned.",
      "Served as primary point of contact for scheduling changes, rescheduling, and meeting logistics.",
      "Maintained project documentation, meeting notes, and progress reports.",
      "Built and maintained a Notion-based task-tracking system for a 4-person team.",
    ],
    tags: ["Notion", "Coordination", "Documentation"],
  },
  {
    role: "Social Media & Administrative Manager",
    org: "Personal & Academic Projects",
    period: "2021 – Present",
    bullets: [
      "Managed a live Facebook business page during an e-commerce academic project — responding to enquiries and monitoring engagement.",
      "Created and scheduled content across Facebook and Instagram, maintaining a consistent tone.",
      "Handled customer questions and ensured timely, professional resolutions.",
    ],
    tags: ["Facebook", "Instagram", "Canva"],
  },
  {
    role: "Administrative & Scheduling Systems",
    org: "Personal & Academic Administration",
    period: "2021 – 2026",
    bullets: [
      "Managed email, calendar, and appointment coordination independently with high accuracy.",
      "Prepared structured digital records, reports, and spreadsheets.",
      "Configured availability and coordinated multi-party appointments via Google Calendar and Calendly.",
    ],
    tags: ["Google Calendar", "Calendly", "Sheets"],
  },
  {
    role: "IT Troubleshooting & Technical Support",
    org: "Peer & Informal Support",
    period: "2021 – Present",
    bullets: [
      "Assisted peers with software troubleshooting, account setup, password resets, and connectivity issues.",
      "Explained solutions in clear, non-technical terms.",
    ],
    tags: ["Troubleshooting", "Support"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="work" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Relevant Experience</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Project and academic experience that directly translates to virtual assistant work.
        </p>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <Card key={item.role}>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}