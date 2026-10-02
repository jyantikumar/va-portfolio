import React, { useState } from 'react';
import { 
  Briefcase, 
  Layers, 
  Code2, 
  HelpCircle, 
  Phone, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Mail,
  Home,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Inline LinkedIn Icon SVG Component
function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.68 1.68 0 1 0 0 3.36 1.68 1.68 0 0 0 0-3.36Z" />
    </svg>
  );
}

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const profileImageSrc = "/Formal.jpg";
  const emailAddress = "jyantiaustriakumar@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/jyantikumar";

  const navItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "Services", href: "#services", icon: Layers },
    { label: "Experience", href: "#work", icon: Briefcase },
    { label: "Stack", href: "#stack", icon: Code2 },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile Top Header Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/90 backdrop-blur-md border-b border-border z-40 px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img 
            src={profileImageSrc} 
            alt="Jyanti Kumar" 
            className="w-9 h-9 rounded-full object-cover border border-border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-bold tracking-tight text-foreground text-sm">
            Jyanti Kumar
          </span>
        </a>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="border-border hover:bg-accent"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50
        w-72 bg-card border-r border-border
        flex flex-col justify-between p-5 overflow-y-auto
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Top Section: Profile Info & Navigation */}
        <div className="space-y-5">
          
          {/* Mobile Close Button */}
          <div className="flex lg:hidden justify-end">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Profile Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="relative mb-3">
              <img 
                src={profileImageSrc} 
                alt="Jyanti Kumar" 
                className="w-20 h-20 rounded-full object-cover ring-2 ring-teal-brand/30 shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-card" title="Available for work" />
            </div>

            <h2 className="font-bold text-lg text-foreground tracking-tight leading-snug">
              Jyanti Kumar
            </h2>
            <p className="text-xs text-teal-brand dark:text-cyan-accent font-medium mt-0.5">
              General, Tech Ops & Data VA
            </p>

            {/* Direct Contact Details */}
            <div className="mt-3.5 flex flex-col gap-2 w-full text-[11px] text-muted-foreground pt-3 border-t border-border/50">
              <div className="flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
                <span>Metro Manila, PH · Remote</span>
              </div>

              <a 
                href={`mailto:${emailAddress}`} 
                className="flex items-center justify-center gap-1.5 hover:text-cyan-accent transition-colors group"
                title={emailAddress}
              >
                <Mail className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
                <span className="truncate max-w-[180px] group-hover:underline font-medium">
                  {emailAddress}
                </span>
              </a>

              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-1.5 text-teal-brand dark:text-cyan-accent hover:underline font-semibold mt-0.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Availability Status */}
          <Badge 
            variant="outline" 
            className="w-full justify-center py-1.5 border-sage/40 bg-sage/10 text-foreground flex items-center gap-2 rounded-lg text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
            </span>
            Available for Hire
          </Badge>

          {/* Navigation Links */}
          <nav className="space-y-1 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/70 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan-accent transition-colors" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Call to Action */}
        <div className="space-y-3 pt-4 border-t border-border mt-6">
          <Button 
            size="lg" 
            asChild
            className="w-full bg-teal-brand hover:bg-teal-brand-hover text-white shadow-md shadow-teal-brand/20 font-semibold justify-center gap-2"
          >
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
          </Button>
        </div>
      </aside>
    </>
  );
}