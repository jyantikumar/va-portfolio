import { Home, Briefcase, Wrench, HelpCircle, Mail } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Services", url: "#services", icon: Briefcase },
  { title: "Experience", url: "#work", icon: Briefcase },
  { title: "Stack", url: "#stack", icon: Wrench },
  { title: "FAQ", url: "#faq", icon: HelpCircle },
  { title: "Contact", url: "#contact", icon: Mail },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className={`flex items-center gap-2 px-2 py-3 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
            JK
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">Jyanti Kumar</span>
              <span className="text-[11px] text-muted-foreground leading-tight">Virtual Assistant</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className={`flex items-center gap-2 px-2 py-2 ${collapsed ? "justify-center" : ""}`}>
          <Avatar className="h-7 w-7 shrink-0">
            <AvatarFallback className="text-[10px] bg-secondary">JK</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium truncate">jyantiaustriakumar@gmail.com</span>
              <span className="text-[10px] text-muted-foreground">Available</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}