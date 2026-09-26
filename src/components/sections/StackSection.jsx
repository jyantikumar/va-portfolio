import { Badge } from "@/components/ui/badge"

const tools = [
  { category: "Scheduling", items: ["Google Calendar", "Calendly"] },
  { category: "Productivity", items: ["Google Workspace", "Microsoft 365", "Notion", "Trello", "Asana"] },
  { category: "Communication", items: ["Slack", "Zoom", "Google Meet", "MS Teams", "Discord"] },
  { category: "AI & Design", items: ["ChatGPT", "Claude", "Gemini", "Canva", "CapCut", "Photoshop"] },
  { category: "Technical", items: ["Basic IT troubleshooting", "Account setup", "Connectivity issues"] },
  { category: "Languages", items: ["English (Fluent)", "Filipino (Native)", "Hindi (Fluent)", "Korean (Conversational)"] },
]

export default function StackSection() {
  return (
    <section id="stack" className="px-6 py-20 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Tools & Skills</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            The platforms I use daily, plus the languages I can work in.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((group) => (
            <div key={group.category} className="bg-card rounded-lg border p-5">
              <h3 className="text-sm font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}