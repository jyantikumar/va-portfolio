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
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24 border-b border-border">
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-full max-w-none mx-auto px-4 sm:px-6 relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Tile 1: Main Hero & Intro (Large Banner) */}
          <Card className="md:col-span-12 lg:col-span-8 border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              {/* Availability Badge */}
              <div className="flex items-center gap-2 mb-6">
                <Badge 
                  variant="outline" 
                  className="px-3.5 py-1.5 border-sage/40 bg-sage/10 text-foreground flex items-center gap-2 rounded-full text-xs font-medium shadow-sm hover:bg-sage/20 transition-all"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
                  </span>
                  Available for Q4 Operations & Analytics Projects
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Technical Operations & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-brand via-cyan-accent to-sage">
                  Data Virtual Assistant
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                I help busy executives and growing businesses streamline administrative workflows, transform raw operational data into actionable dashboards, and maintain tech systems using modern AI and Web tools.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button 
                size="lg" 
                className="bg-teal-brand hover:bg-teal-brand-hover text-white shadow-lg shadow-teal-brand/20 gap-2 font-semibold px-6"
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

          {/* Tile 2: Key Metric - Data Volume */}
          <Card className="md:col-span-6 lg:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-sm hover:border-cyan-accent/40 transition-all duration-300">
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
              <span>Data Pipeline Quality</span>
              <span className="font-semibold text-teal-brand dark:text-sage">99.9% Cleaned</span>
            </div>
          </Card>

          {/* Tile 3: Core Tech Toolkit */}
          <Card className="md:col-span-6 lg:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-sm hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-sm">Specialized Toolkit</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Core technologies utilized for administrative, technical support, and analytics workflows:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Power BI', 'SQL', 'React JS', 'Notion', 'Python', 'AI Workflows', 'Excel / Sheets'].map((tool, idx) => (
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
              <span>AI-Augmented Productivity</span>
            </div>
          </Card>

          {/* Tile 4: Multilingual Communication */}
          <Card className="md:col-span-6 lg:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-sm hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-sm">Global Reach</h3>
              </div>
              <div className="text-2xl font-bold text-foreground tracking-tight mb-3">
                3+ Languages
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Filipino', level: 'Native' },
                  { lang: 'Hindi', level: 'Fluent' },
                  { lang: 'Korean', level: 'Conversational' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-muted/50 border border-border/40">
                    <div className="text-xs font-semibold text-foreground">{item.lang}</div>
                    <div className="text-[10px] text-muted-foreground">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Tile 5: Remote Infrastructure & Reliability */}
          <Card className="md:col-span-6 lg:col-span-4 border-border bg-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-sm hover:border-cyan-accent/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage">
                  <Wifi className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[11px] border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                  100% Remote Ready
                </Badge>
              </div>

              <div className="text-base font-bold text-foreground tracking-tight mb-2">
                Guaranteed System Uptime
              </div>

              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                  <span><strong>Primary:</strong> 300 Mbps Converge Fiber</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                  <span><strong>Backup:</strong> DITO Mobile Data Hotspot</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground flex items-center justify-between">
              <span>Availability</span>
              <span className="font-semibold text-foreground">99.9% Uptime</span>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}