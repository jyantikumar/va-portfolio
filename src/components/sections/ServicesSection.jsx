import React, { useState } from 'react';
import { 
  FolderKanban, 
  CalendarCheck, 
  FileText, 
  BarChart, 
  Database, 
  Code2, 
  Globe2,
  ExternalLink,
  Eye,
  Wallet
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

// Consolidated service sample data including live-hosted web apps
const serviceSamplesData = {
  // --- EXECUTIVE & ADMIN SAMPLES ---
  'calendar-management': {
    id: 'calendar-management',
    title: 'Calendar & Schedule Management',
    category: 'Executive & Admin',
    description: 'Structured appointment scheduling, meeting coordination, and time-block tracking across Google Calendar and administrative tools.',
    tools: ['Google Calendar', 'Google Workspace', 'Notion'],
    images: [
      {
        url: '/samples/calendar.png',
        caption: 'Google Calendar matrix displaying organized meeting blocks, reminders, and scheduled availability.'
      }
    ],
    details: 'Managed administrative scheduling and appointment tracking independently with high accuracy, ensuring zero double-bookings or missed deadlines.'
  },
  'task-systems': {
    id: 'task-systems',
    title: 'Notion Task Management Systems',
    category: 'Executive & Admin',
    description: 'Custom Notion workspaces designed to track sprint deliverables, manage documentation, and organize team responsibilities.',
    tools: ['Notion', 'Task Databases', 'Agile Workflows'],
    images: [
      {
        url: '/samples/notion1.png',
        caption: 'Structured Notion database view featuring task status tracking, category tagging, and assignees.'
      },
      {
        url: '/samples/notion2.png',
        caption: 'Custom Notion board grid displaying project roadmaps and workflow progress.'
      }
    ],
    details: 'Architected and maintained Notion-based task management and documentation systems to track project progress, distribute responsibilities, and monitor deadlines.'
  },
  'file-management': {
    id: 'file-management',
    title: 'Document & Record Management',
    category: 'Executive & Admin',
    description: 'Centralized Notion documentation hubs and file systems converting unstructured technical discussions into indexed, relational databases.',
    tools: ['Notion', 'Relational Databases', 'Google Workspace', 'Microsoft 365'],
    images: [
      {
        url: '/samples/notion3.png',
        caption: 'Relational Notion Knowledge Base featuring topic tagging, subject categorization, and syntax-highlighted code references.'
      },
      {
        url: '/samples/filemanagement.png',
        caption: 'Structured directory architecture and organized digital records system.'
      }
    ],
    details: 'Structured and maintained multi-subject digital archives and reference manuals, ensuring fast retrieval of key operational processes and technical specifications.'
  },

  // --- DATA ANALYTICS & BI SAMPLES ---
  'interactive-dashboards': {
    id: 'interactive-dashboards',
    title: 'Power BI & Tableau Executive Dashboards',
    category: 'Data Analytics & BI',
    description: 'Interactive business intelligence reports analyzing operational sales, regional fulfillment metrics, and streaming engagement performance.',
    tools: ['Power BI', 'Tableau', 'DAX', 'Power Query', 'Data Modeling'],
    images: [
      {
        url: '/samples/dashboard-ecommerce.png',
        caption: 'E-Commerce KPI Dashboard (₱2.47M Revenue, 5K Orders) analyzing product ratings, delivery status, and return drivers.'
      },
      {
        url: '/samples/dashboard-brazil.png',
        caption: 'Marketplace Operations Analytics (98K Orders, 13.5M Profits) evaluating customer locations, repeat buyer ratios, and top revenue categories.'
      },
      {
        url: '/samples/dashboard-bini.png',
        caption: 'BINI Spotify Streams Analysis Dashboard (1.3B Total Streams) tracking album performance trends and track popularity metrics.'
      },
      {
        url: '/samples/dashboard-superstore.png',
        caption: 'Global Superstore Sales Performance Dashboard analyzing monthly margins (11.61%), top customer segments, and regional profitability.'
      }
    ],
    details: 'Engineered relational star-schema data models and calculated DAX/KPI fields across multi-table datasets, transforming millions of raw rows into executive-ready dashboards.'
  },
  'data-cleaning': {
    id: 'data-cleaning',
    title: 'SQL Data Cleaning & Pipeline Prep',
    category: 'Data Analytics & BI',
    description: 'Data standardization, duplicate removal, and relational schema validation using SQL and Power Query.',
    tools: ['SQL (MySQL)', 'Power Query', 'Excel', 'Pandas'],
    images: [
      {
        url: '/samples/dashboard-ecommerce.png',
        caption: 'Standardized and modeled multi-table customer orders dataset prior to visualization.'
      }
    ],
    details: 'Cleaned, standardized, and validated customer order records using SQL JOINs, CTEs, CASE statements, and null handling to produce analysis-ready database schemas.'
  },

  // --- TECH & WEB SUPPORT SAMPLES ---
  'job-tracker': {
    id: 'job-tracker',
    title: 'Job Application Tracker System',
    category: 'Tech & Web Support',
    description: 'Full-stack application featuring interview logging, custom status filters, search capabilities, and tabular data management.',
    tools: ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'Shadcn/UI'],
    liveUrl: 'https://trackjob.infinityfree.io/login',
    images: [
      {
        url: '/samples/job-tracker-1.png',
        caption: 'Full-stack job tracking dashboard displaying status filters, search bars, and application lifecycle records.'
      },
      {
        url: '/samples/job-tracker-2.png',
        caption: 'Job Tracker dashboard showing the total applications logged, interviews, and hired roles.'
      },
      {
        url: '/samples/job-tracker-3.png',
        caption: 'Various graphs from the dashboard for data visualization.'
      }
    ],
    details: 'Built a responsive web app to track job interviews, manage application progress, and structure job hunting metrics using Laravel and React.'
  },
  'spendwise': {
    id: 'spendwise',
    title: 'SpendWise — Financial Tracking Web App',
    category: 'Tech & Web Support',
    description: 'Full-stack web application for expense tracking, petty cash management, and financial summaries built with secure session controls and dynamic analytics.',
    tools: ['Vue 3', 'Inertia.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
    liveUrl: 'http://spendwise.infinityfree.io',
    images: [
      {
        url: '/samples/spendwise.png',
        caption: 'SpendWise dashboard featuring real-time expense breakdowns, category summaries, and transactional logs.'
      },
      {
        url: '/samples/spendwise-2.png',
        caption: 'SpendWise dashboard featuring real-time expense breakdowns, category summaries, and transactional logs.'
      },
      {
        url: '/samples/spendwise-3.png',
        caption: 'SpendWise dashboard featuring real-time expense breakdowns, category summaries, and transactional logs.'
      },
      {
        url: '/samples/spendwise-4.png',
        caption: 'SpendWise dashboard featuring real-time expense breakdowns, category summaries, and transactional logs.'
      }
    ],
    details: 'Engineered a full-stack expense and petty cash management system featuring authentication, category filtering, transactional tracking, and secure session management.'
  },
  'weeekly-website': {
    id: 'weeekly-website',
    title: 'Weeekly Fan & Discography Web App',
    category: 'Tech & Web Support',
    description: 'Interactive web platform featuring embedded music video players, discography listings, and customized brand aesthetic styling.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    liveUrl: 'https://jyantikumar.github.io/Wkly/',
    images: [
      {
        url: '/samples/weeekly.png',
        caption: 'Custom styled K-Pop fan website featuring responsive video embeds and interactive album showcases.'
      },
      {
        url: '/samples/weeekly2.png',
        caption: 'MV Display.'
      },
      {
        url: '/samples/weeekly3.png',
        caption: 'MV Display.'
      },
      {
        url: '/samples/weeekly4.png',
        caption: 'MV Display.'
      },
    ],
    details: 'Designed and deployed an interactive media website with custom layouts, video integrations, and responsive components.'
  },
  'va-portfolio': {
    id: 'va-portfolio',
    title: 'Virtual Assistant Portfolio Site',
    category: 'Tech & Web Support',
    description: 'Single-page Virtual Assistant portfolio website engineered with modern UI components, smooth navigation, and dark/light mode accents.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Shadcn/UI'],
    liveUrl: 'https://jyantikumar.github.io/VA/',
    images: [
      {
        url: '/samples/va-portfolio.png',
        caption: 'Virtual Assistant portfolio layout featuring service breakdowns, bento grids, and contact booking integrations.'
      }
    ],
    details: 'Developed a high-performance portfolio website styled with responsive web standards to showcase administrative and analytics services.'
  }
};

export default function ServicesSection() {
  const [selectedSample, setSelectedSample] = useState(null);

  const handleCardClick = (sampleId) => {
    if (serviceSamplesData[sampleId]) {
      setSelectedSample(serviceSamplesData[sampleId]);
    }
  };

  return (
    <section id="services" className="py-12 lg:py-16 bg-background border-b border-border">
      {/* Full-width outer container matching HeroSection sidebar layout */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Core Service Offerings
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Click on any card below to view real sample work, screenshots, and live application links.
          </p>
        </div>

        {/* Tabs Container */}
        <Tabs defaultValue="admin" className="w-full flex flex-col items-center">
          
          {/* Top Tabs Bar */}
          <div className="w-full flex justify-center mb-8">
            <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground shadow-sm">
              <TabsTrigger value="admin" className="px-5 py-2 text-xs sm:text-sm font-medium">
                Executive & Admin
              </TabsTrigger>
              <TabsTrigger value="data" className="px-5 py-2 text-xs sm:text-sm font-medium">
                Data Analytics & BI
              </TabsTrigger>
              <TabsTrigger value="tech" className="px-5 py-2 text-xs sm:text-sm font-medium">
                Tech & Web Support
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: EXECUTIVE & ADMIN */}
          <TabsContent value="admin" className="w-full mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <Card 
                onClick={() => handleCardClick('calendar-management')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Calendar & Schedule Management</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Schedule Optimization & Communication</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Organizing executive schedules, handling priority emails, and coordinating smooth cross-team communications.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1 text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Calendar Samples</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card 
                onClick={() => handleCardClick('task-systems')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <FolderKanban className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Workflow & Task Systems</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Project Architecture & Tracking</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Designing custom Notion, Asana, or Trello boards to track team deliverables, assign tasks, and meet strict deadlines.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1 text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Notion Systems</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card 
                onClick={() => handleCardClick('file-management')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Document & Record Management</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Systematic Archiving & Summaries</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Maintaining structured digital archives, preparing meeting summaries, and drafting formal operational reports.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1 text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View File Archiving System</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* TAB 2: DATA ANALYTICS & BI */}
          <TabsContent value="data" className="w-full mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <Card 
                onClick={() => handleCardClick('interactive-dashboards')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Interactive Dashboards</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Power BI, Tableau, & KPI Reports</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Building executive-ready dashboards analyzing revenue, customer retention, and operational trends across multi-table sources.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1 text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Live Dashboard Samples</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card 
                onClick={() => handleCardClick('data-cleaning')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Data Cleaning & Modeling</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">SQL, Power Query, & Validation</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Standardizing messy transaction logs, performing duplicate cleanup, and building relational schemas using SQL CTEs and JOINs.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1 text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Data Cleaning Process</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* TAB 3: TECH & WEB SUPPORT (LIVE PROJECTS) */}
          <TabsContent value="tech" className="w-full mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              
              {/* Job Tracker */}
              <Card 
                onClick={() => handleCardClick('job-tracker')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Job Application Tracker</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Laravel, Inertia.js & React App</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Full-stack tracking application with status filters, search bar, and application logs.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Screenshots & Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </CardContent>
              </Card>

              {/* SpendWise Financial Tracking */}
              <Card 
                onClick={() => handleCardClick('spendwise')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">SpendWise Financial App</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Vue 3, Inertia.js & Laravel App</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Expense tracking and petty cash management system with dynamic reporting and session controls.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Screenshots & Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </CardContent>
              </Card>

              {/* Weeekly Web App */}
              <Card 
                onClick={() => handleCardClick('weeekly-website')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Weeekly Fan & Media Web App</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">Interactive Front-End Web Page</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Dynamic discography and music video showcase built with responsive web components.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Screenshots & Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </CardContent>
              </Card>

              {/* Virtual Assistant Portfolio */}
              <Card 
                onClick={() => handleCardClick('va-portfolio')}
                className="border-border bg-card hover:border-cyan-accent/80 hover:shadow-md cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-5 pb-3">
                  <div className="p-2.5 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-sage shrink-0 group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold text-foreground">Virtual Assistant Portfolio</CardTitle>
                      <Eye className="w-4 h-4 text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <CardDescription className="text-xs mt-0.5">React, Vite & Tailwind CSS Site</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed flex-1 flex flex-col justify-between">
                  <span>Component-driven portfolio website engineered for administrative and data services.</span>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-teal-brand dark:text-cyan-accent">
                    <span>View Screenshots & Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

        </Tabs>

        {/* EXPANDED ULTRA-WIDE DIALOG MODAL */}
        <Dialog open={Boolean(selectedSample)} onOpenChange={() => setSelectedSample(null)}>
          <DialogContent className="max-w-[95vw] lg:max-w-7xl w-[95vw] max-h-[94vh] overflow-y-auto bg-card border-border p-5 sm:p-8">
            {selectedSample && (
              <>
                <DialogHeader className="text-left space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-cyan-accent text-cyan-accent font-medium">
                      {selectedSample.category}
                    </Badge>

                    {/* Direct Live Demo Link Button */}
                    {selectedSample.liveUrl && (
                      <a 
                        href={selectedSample.liveUrl.startsWith('http') ? selectedSample.liveUrl : `https://${selectedSample.liveUrl}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-brand hover:bg-teal-brand-hover text-white shadow-sm transition-all"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {selectedSample.title}
                  </DialogTitle>
                  
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-semibold text-muted-foreground">Tools & Tech:</span>
                    {selectedSample.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-muted text-foreground px-2.5 py-0.5">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <DialogDescription className="text-sm sm:text-base text-muted-foreground">
                    {selectedSample.description}
                  </DialogDescription>

                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {selectedSample.details}
                  </p>
                </DialogHeader>

                {/* HIGH-RES EXPANDED CAROUSEL CONTAINER */}
                <div className="my-6 relative px-1 sm:px-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedSample.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-1">
                            {/* High-resolution preview window */}
                            <div className="overflow-hidden rounded-xl border border-border bg-navy-dark/40 min-h-[400px] sm:min-h-[580px] max-h-[70vh] relative w-full flex items-center justify-center">
                              <img 
                                src={img.url} 
                                alt={img.caption} 
                                className="w-full h-full object-contain object-center rounded-lg"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-center text-muted-foreground mt-3 font-medium">
                              {img.caption}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Navigation Controls */}
                    <CarouselPrevious className="left-2 sm:left-4 h-11 w-11 bg-background/80 backdrop-blur-md border-border hover:bg-card text-foreground shadow-lg" />
                    <CarouselNext className="right-2 sm:right-4 h-11 w-11 bg-background/80 backdrop-blur-md border-border hover:bg-card text-foreground shadow-lg" />
                  </Carousel>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}