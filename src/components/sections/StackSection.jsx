import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FolderKanban, 
  MessageSquare, 
  Bot, 
  Wrench, 
  Globe2,
  Sparkles
} from 'lucide-react';

const tools = [
  { category: "Scheduling", icon: Calendar, items: ["Google Calendar", "Calendly"] },
  { category: "Productivity", icon: FolderKanban, items: ["Google Workspace", "Microsoft 365", "Notion", "Trello", "Asana"] },
  { category: "Communication", icon: MessageSquare, items: ["Slack", "Zoom", "Google Meet", "MS Teams", "Discord"] },
  { category: "AI & Design", icon: Bot, items: ["ChatGPT", "Claude", "Gemini", "Canva", "CapCut", "Photoshop"] },
  { category: "Technical", icon: Wrench, items: ["Basic IT Troubleshooting", "Account Setup", "Connectivity Issues"] },
  { category: "Languages", icon: Globe2, items: ["English (Fluent)", "Filipino (Native)", "Hindi (Fluent)", "Korean (Conversational)"] },
];

// Flat array of top tools for the infinite marquee ribbon
const ribbonTools = [
  "Power BI", "SQL", "React JS", "Notion", "Python", "Tailwind CSS", 
  "Google Calendar", "Calendly", "Asana", "Slack", "ChatGPT", "Claude", 
  "Gemini", "Canva", "Laravel", "MySQL", "Inertia.js"
];

// Reusable Infinite Marquee Ribbon Component
function InfiniteMarqueeRibbon({ items, direction = "left" }) {
  // Duplicate array to create a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-3 bg-muted/60 border-y border-border/60 backdrop-blur-sm select-none">
      {/* Gradient Mask for Smooth Edge Fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 items-center whitespace-nowrap w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border/80 shadow-xs text-xs font-semibold text-foreground hover:border-cyan-accent/50 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-cyan-accent" />
            <span>{tool}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="py-12 lg:py-16 bg-background border-b border-border overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Tools & Technical Stack
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            The software, platforms, and languages I use daily to power workflows and analytics.
          </p>
        </div>

        {/* ReactBits Animated Logo/Tool Ribbon */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-xs border border-border">
          <InfiniteMarqueeRibbon items={ribbonTools} direction="left" />
        </div>

        {/* Categorized Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Card 
                key={idx} 
                className="border-border bg-card/80 hover:border-cyan-accent/50 hover:shadow-sm transition-all duration-300 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/50">
                    <div className="p-2 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <Badge 
                        key={itemIdx} 
                        variant="secondary"
                        className="text-xs bg-muted/80 hover:bg-muted text-foreground border border-border/50 font-medium px-2.5 py-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}