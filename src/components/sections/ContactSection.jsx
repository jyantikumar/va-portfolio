import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

export default function ContactSection() {
  const calendlyUrl = "https://calendly.com/jyantiaustriakumar";
  const email = "jyantiaustriakumar@gmail.com";

  return (
    <section id="contact" className="py-16 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
          Let's Work Together
        </h2>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Ready to streamline your technical operations or build custom dashboards? Pick a time on Calendly or send me a message directly.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            asChild 
            className="w-full sm:w-auto bg-teal-brand hover:bg-teal-brand-hover text-white font-semibold px-6 gap-2 shadow-sm"
          >
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Schedule a Call on Calendly
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="w-full sm:w-auto border-border hover:border-cyan-accent text-foreground px-6 gap-2 font-medium"
          >
            <a href={`mailto:${email}`}>
              <Mail className="w-4 h-4 text-cyan-accent" />
              Send an Email
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Direct email: <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>
    </section>
  );
}