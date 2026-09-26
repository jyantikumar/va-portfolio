import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 bg-muted/50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground mt-2">
            Tell me what you need help with and I'll reply within 24 hours.
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
          className="space-y-5 bg-card p-6 rounded-lg border"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">What do you need help with?</Label>
            <Textarea id="message" name="message" rows={5} placeholder="I run a small business and need help with..." required />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Or email me directly at{" "}
            <a href="mailto:jyantiaustriakumar@gmail.com" className="underline">
              jyantiaustriakumar@gmail.com
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}