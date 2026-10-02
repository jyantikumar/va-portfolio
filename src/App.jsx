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
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      {/* Fixed Sidebar */}
      <Navbar />
      {/* Main Content Area Offset */}
      <div className="flex-1 w-full lg:ml-72 pt-16 lg:pt-0 flex flex-col min-h-screen">
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ExperienceSection />
          <StackSection />
          <FaqSection />
          <ContactSection />
        </main>
        
        {/* Footer positioned inside the content offset */}
        <Footer />
      </div>
    </div>
  )
}

export default App