import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  GraduationCap, 
  Zap, 
  Sparkles 
} from "lucide-react";

const faqs = [
  {
    q: "What is your availability?",
    a: "I'm available weekdays and weekends, and can flex to overlap with US and global time zones. I commit to a consistent schedule built around your team's operational needs.",
    icon: Clock,
  },
  {
    q: "How do we communicate?",
    a: "Email, Slack, or Discord for async updates. Weekly or bi-weekly check-ins on Zoom or Google Meet. I adapt seamlessly to whatever communication stack your team already uses.",
    icon: MessageSquare,
  },
  {
    q: "What are your rates?",
    a: "I offer hourly rates and flexible monthly retainer packages. Book a discovery call and I will send a custom proposal within 24 hours tailored specifically to your project requirements.",
    icon: Zap,
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. I am happy to sign non-disclosure agreements (NDAs) and data protection contracts before reviewing sensitive business operations or proprietary databases.",
    icon: ShieldCheck,
  },
  {
    q: "What is your technical background?",
    a: "I graduated with a BS in Information Technology from Manila Central University. That background allows me to handle both administrative workflows and IT troubleshooting, account configurations, and platform setups without needing to escalate to external technical teams.",
    icon: GraduationCap,
  },
  {
    q: "How soon can you start?",
    a: "I am ready for immediate onboarding and project kickoff!",
    icon: Sparkles,
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background border-b border-border">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge 
            variant="outline" 
            className="px-3.5 py-1 border-sage/40 bg-sage/10 text-foreground text-xs font-medium mb-3 inline-flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Got Questions?</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Everything you need to know about working together, communication, rates, and onboarding.
          </p>
        </div>

        {/* Completely Borderless Floating Cards */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 !border-none">
            {faqs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <AccordionItem 
                    value={`item-${i}`}
                    className="!border-0 !border-b-0 rounded-xl px-4 py-1 bg-card hover:bg-muted/50 transition-colors duration-200 outline-none"
                  >
                    <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-foreground hover:no-underline py-4 gap-3 !border-none">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-navy/10 dark:bg-sage/10 text-teal-brand dark:text-cyan-accent shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-11 pr-2 pb-4 pt-1">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>

      </div>
    </section>
  );
}