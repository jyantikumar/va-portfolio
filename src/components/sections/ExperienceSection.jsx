import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, CheckCircle2, Briefcase } from "lucide-react"

// Simple, lightweight AnimatedList wrapper (React Bits / Framer-Motion style)
export function AnimatedList({ children, className = "" }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

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
    tags: ["Notion", "Coordination", "Documentation", "Project Management"],
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
    tags: ["Facebook", "Instagram", "Canva", "Customer Support"],
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
    tags: ["Google Calendar", "Calendly", "Google Sheets", "Email Coordination"],
  },
  {
    role: "IT Troubleshooting & Technical Support",
    org: "Peer & Informal Support",
    period: "2021 – Present",
    bullets: [
      "Assisted peers with software troubleshooting, account setup, password resets, and connectivity issues.",
      "Explained solutions in clear, non-technical terms.",
    ],
    tags: ["Troubleshooting", "Technical Support", "Systems Setup"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="work" className="py-12 lg:py-16 bg-background border-b border-border">
      {/* Container matching full layout width */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-brand/10 text-teal-brand dark:text-sage text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Relevant Experience
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Project and academic experience that directly translates to virtual assistant and technical operations work.
          </p>
        </div>

        {/* React Bits Animated List Container */}
        <AnimatedList>
          {experience.map((item, idx) => (
            <Card 
              key={idx} 
              className="border-border bg-card hover:border-cyan-accent/60 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                  <div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-brand dark:text-cyan-accent font-medium mt-1">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{item.org}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-muted text-muted-foreground self-start sm:self-auto border border-border/50">
                    <Calendar className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/40">
                  {item.tags.map((tag, tIdx) => (
                    <Badge 
                      key={tIdx} 
                      variant="secondary" 
                      className="text-xs bg-muted/80 hover:bg-muted text-foreground border border-border/50 font-medium px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedList>

      </div>
    </section>
  )
}