import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import StackSection from "@/components/sections/StackSection"
import FaqSection from "@/components/sections/FaqSection"
import ContactSection from "@/components/sections/ContactSection"
import SamplesSection from "@/components/sections/SamplesSection"
function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>
            <HeroSection />
            <ServicesSection />
            <ExperienceSection />
            <StackSection />
            <FaqSection />
            <ContactSection />
          </main>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App