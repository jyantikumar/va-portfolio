import React from 'react';
import { 
  Calendar, 
  BarChart3, 
  Database, 
  Globe2, 
  Wifi, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Cpu,
  FolderCheck,
  Clock,
  FileCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-12 lg:py-20 border-b border-border">
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Container constrained to max-w-7xl for clean fit beside sidebar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Tile 1: Main Hero & Intro (Large Banner) */}
          <Card className="md:col-span-2 xl:col-span-8 border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              {/* Availability Badge */}
              <div className="flex items-center gap-2 mb-6">
                <Badge 
                  variant="outline" 
                  className="px-3.5 py-1.5 border-sage/40 bg-sage/10 text-foreground flex items-center gap-2 rounded-full text-xs font-medium shadow-xs hover:bg-sage/20 transition-all"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
                  </span>
                  Available for GVA, Admin & Analytics Projects
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                General, Executive & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-brand via-cyan-accent to-sage">
                  Data Virtual Assistant
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                I help executives and growing teams offload daily administrative tasks, manage calendars and inboxes with zero clutter, build Notion task management systems, and turn complex operational data into actionable dashboards.
              </p>

              {/* Quick Admin & Tech Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Calendar & Inbox Management", 
                  "Notion Task Systems", 
                  "Power BI & SQL", 
                  "IT & System Support"
                ].map((item, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className="text-xs bg-muted/80 text-foreground font-medium px-3 py-1 border border-border/50"
                  >
                    ✓ {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button 
                size="lg" 
                className="bg-teal-brand hover:bg-teal-brand-hover text-white shadow-md shadow-teal-brand/20 gap-2 font-semibold px-6"
              >
                <Calendar className="w-4 h-4" />
                Book an Intro Call
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-cyan-accent text-foreground hover:bg-accent gap-2 font-medium px-6"
              >
                <BarChart3 className="w-4 h-4 text-cyan-accent" />
                View Sample Work
                <ArrowRight className="w-4 h-4 opacity-70" />
              </Button>
            </div>
          </Card>

          {/* Tile 2: Executive & Administrative Operations Spotlight */}
          <Card className="md:col-span-1 xl:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0">
                  <FolderCheck className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="text-[11px] font-semibold">
                  Executive Support
                </Badge>
              </div>

              <div className="text-xl font-bold text-foreground tracking-tight">
                Administrative Operations
              </div>

              <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                  <span><strong>Schedule Optimization:</strong> Google Calendar & Calendly logistics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                  <span><strong>Task Workflows:</strong> Notion, Asana, & Trello board setup.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                  <span><strong>Documentation:</strong> Meeting notes, digital archiving, & reports.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>Executive Reliability</span>
              <span className="font-semibold text-teal-brand dark:text-sage">100% Accuracy</span>
            </div>
          </Card>

          {/* Tile 3: Key Metric - Data Volume */}
          <Card className="md:col-span-1 xl:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0">
                  <Database className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="text-[11px] font-semibold">
                  ETL & Analytics
                </Badge>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                165k+
              </div>
              <div className="text-base font-semibold text-foreground/90 mt-1">
                Records Processed & Analyzed
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Automated data transformation pipelines configured with SQL, Power Query, & Python.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>Data Quality</span>
              <span className="font-semibold text-teal-brand dark:text-sage">99.9% Cleaned</span>
            </div>
          </Card>

          {/* Tile 4: Core Tech & Admin Toolkit */}
          <Card className="md:col-span-1 xl:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-sm">Tech & Admin Toolkit</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Platforms utilized daily for administrative, technical, and analytics workflows:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Notion', 'Google Workspace', 'Calendly', 'Asana', 
                  'Power BI', 'SQL', 'React JS', 'Python', 'Excel / Sheets'
                ].map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2.5 py-1 rounded-md bg-muted/80 text-foreground font-medium border border-border/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-cyan-accent font-medium">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>AI-Augmented Workflows</span>
            </div>
          </Card>

          {/* Tile 5: Multilingual Communication & Remote Infrastructure */}
          <Card className="md:col-span-1 xl:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage">
                  <Globe2 className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[11px] border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                  100% Remote Ready
                </Badge>
              </div>

              <div className="text-base font-bold text-foreground tracking-tight mb-2">
                Global Communication & Infrastructure
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {[
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Filipino', level: 'Native' },
                  { lang: 'Hindi', level: 'Fluent' },
                  { lang: 'Korean', level: 'Conversational' }
                ].map((item, idx) => (
                  <div key={idx} className="p-1.5 rounded bg-muted/50 border border-border/40 text-[11px]">
                    <span className="font-semibold text-foreground">{item.lang}</span>
                    <span className="text-muted-foreground block text-[10px]">{item.level}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
                  <span>300 Mbps Fiber + Hotspot Backup</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground flex items-center justify-between">
              <span>System Uptime</span>
              <span className="font-semibold text-foreground">99.9% Reliable</span>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}