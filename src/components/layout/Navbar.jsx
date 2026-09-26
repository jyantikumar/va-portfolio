import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-semibold tracking-tight">
          Jyanti Kumar
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#work" className="hover:text-foreground transition">Experience</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>

        <Button size="sm" asChild>
          <a href="#contact">Book a Call</a>
        </Button>
      </div>
    </header>
  )
}