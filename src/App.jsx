import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import StackSection from "@/components/sections/StackSection"
import FaqSection from "@/components/sections/FaqSection"
import ContactSection from "@/components/sections/ContactSection"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Sidebar Navigation */}
      <Navbar />

      {/* Main Content Area Offset (Padding prevents width overflow math errors) */}
      <div className="lg:pl-72 pt-16 lg:pt-0 flex flex-col min-h-screen">
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ExperienceSection />
          <StackSection />
          <FaqSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
      </div>
    </div>
  )
}

export default App