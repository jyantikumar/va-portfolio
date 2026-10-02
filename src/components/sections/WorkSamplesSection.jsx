import React, { useState } from 'react';
import { 
  CalendarCheck, 
  BarChart3, 
  FolderKanban, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Work Samples Data
const WORK_SAMPLES = [
  {
    id: 'calendar',
    title: 'Calendar & Schedule Management',
    category: 'Executive Support',
    icon: CalendarCheck,
    shortDesc: 'Multi-person calendar coordination, conflict detection, and recurring meeting logs.',
    tools: ['Google Calendar', 'MS Outlook', 'Notion', 'Lab Scheduler UI'],
    metrics: 'Zero scheduling conflicts across multi-department project cycles',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
        caption: 'Color-Coded Weekly Schedule & Conflict Management Dashboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
        caption: 'Meeting Notes & Follow-up Action Items Log'
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Power BI & Executive Dashboards',
    category: 'Data Analytics',
    icon: BarChart3,
    shortDesc: 'Interactive business intelligence dashboards, KPI tracking, and operational analytics.',
    tools: ['Power BI', 'Power Query', 'DAX', 'SQL (MySQL)'],
    metrics: 'Processed 165,000+ total records into decision-ready visual insights',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        caption: 'Amazon Marketplace Logistics & Fulfillment Dashboard (22k+ Records)'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        caption: 'HR Attrition & Compensation Risk Trend Report (95k Records)'
      }
    ]
  },
  {
    id: 'task-systems',
    title: 'Notion & Agile Workflow Systems',
    category: 'Operations',
    icon: FolderKanban,
    shortDesc: 'Structured workspace architectures for team task distribution and deadline monitoring.',
    tools: ['Notion', 'JIRA', 'Agile/Scrum', 'Trello'],
    metrics: 'Maintained 100% sprint deliverable tracking across capstone project lifecycle',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
        caption: 'Notion Project Task Management & Documentation Hub'
      }
    ]
  }
];

export default function WorkSamplesSection() {
  const [activeSample, setActiveSample] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (sample) => {
    setActiveSample(sample);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!activeSample) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeSample.images.length);
  };

  const prevImage = () => {
    if (!activeSample) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeSample.images.length) % activeSample.images.length);
  };

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="outline" className="mb-3 border-sage/40 bg-sage/10 text-foreground">
            Interactive Proof of Work
          </Badge>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Click Any Skill to View Work Samples
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore previews, screenshots, and operational results from handled projects.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK_SAMPLES.map((sample) => {
            const IconComponent = sample.icon;
            return (
              <Card 
                key={sample.id}
                onClick={() => openModal(sample)}
                className="group border-border bg-card hover:border-cyan-accent/80 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] bg-muted font-medium">
                      {sample.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-teal-brand transition-colors">
                    {sample.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2 mt-1">
                    {sample.shortDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {sample.tools.map((tool, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-teal-brand group-hover:text-cyan-accent">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      View Samples ({sample.images.length})
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Modal Dialog */}
        <Dialog open={!!activeSample} onOpenChange={() => setActiveSample(null)}>
          {activeSample && (
            <DialogContent className="max-w-6xl bg-card border-border p-6 rounded-xl shadow-2xl">
              <DialogHeader>
                <div className="flex items-center justify-between gap-2">
                  <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    {activeSample.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {activeSample.metrics}
                </DialogDescription>
              </DialogHeader>

              {/* Carousel Container */}
              <div className="relative mt-4 bg-navy/90 rounded-lg overflow-hidden border border-border group">
                <img 
                  src={activeSample.images[currentImgIndex].url} 
                  alt={activeSample.images[currentImgIndex].caption}
                  className="w-full h-72 sm:h-96 object-cover"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs sm:text-sm font-medium">
                    {activeSample.images[currentImgIndex].caption}
                  </p>
                  <p className="text-[10px] text-gray-300 mt-0.5">
                    Image {currentImgIndex + 1} of {activeSample.images.length}
                  </p>
                </div>

                {activeSample.images.length > 1 && (
                  <>
                    <Button 
                      size="icon" 
                      variant="secondary"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/80 border-none"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/80 border-none"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Tools Used Footer */}
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-foreground">Tools Used:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeSample.tools.map((t, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] py-0 px-2 border-sage/40">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" onClick={() => setActiveSample(null)} className="bg-teal-brand hover:bg-teal-brand-hover text-white text-xs">
                  Close Preview
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  );
}