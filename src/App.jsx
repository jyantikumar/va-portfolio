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
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <StackSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App