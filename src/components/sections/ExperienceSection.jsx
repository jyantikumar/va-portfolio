import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";

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
];

// Individual Stack Card Component
function StackedCard({ item, index, total, containerRef }) {
  const cardRef = useRef(null);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Calculate dynamic scaling and offsets based on card position index
  const scale = useTransform(
    scrollYProgress,
    [index / total, 1],
    [1, 1 - (total - index) * 0.03]
  );

  return (
    <div 
      ref={cardRef} 
      className="sticky top-24 mb-8 last:mb-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div style={{ scale }}>
        <Card className="border-border bg-card/95 backdrop-blur-md shadow-lg hover:border-cyan-accent/50 transition-colors">
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

            {/* Tags */}
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
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef(null);

  return (
    <section id="work" ref={containerRef} className="py-16 lg:py-24 bg-background border-b border-border">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Relevant Experience
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Project and academic experience that directly translates to virtual assistant and technical operations work.
          </p>
        </div>

        {/* Scroll Stack Container */}
        <div className="relative max-w-4xl mx-auto">
          {experience.map((item, idx) => (
            <StackedCard 
              key={idx} 
              item={item} 
              index={idx} 
              total={experience.length}
              containerRef={containerRef} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}