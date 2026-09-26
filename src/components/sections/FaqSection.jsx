import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
  q: "What is your availability?",
  a: "I'm available weekdays and weekends, and can flex to overlap with US time zones. I commit to a consistent schedule built around your team's needs.",
},
  {
    q: "How do we communicate?",
    a: "Email, Slack, or Discord for async updates. Weekly or bi-weekly check-ins on Zoom or Google Meet. I adapt to whatever your team already uses.",
  },
  {
    q: "What are your rates?",
    a: "I offer hourly and monthly retainer options. Book a discovery call and I'll send a quote within 24 hours based on what you actually need.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. I'm happy to sign an NDA before we start any sensitive work.",
  },
  {
  q: "What's your technical background?",
  a: "I have a BS in Information Technology from Manila Central University. That means I can not only handle admin work but also troubleshoot the tools, set up accounts, and pick up unfamiliar platforms quickly — no need to loop in a separate IT person.",
},
  {
    q: "How soon can you start?",
    a: "I can start immediately!",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="px-6 py-20 max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked</h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}