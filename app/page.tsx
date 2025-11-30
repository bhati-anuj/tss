import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import VisionSection from "@/components/vision-section"
import OpportunitiesSection from "@/components/opportunities-section"
import LeadershipSection from "@/components/leadership-section"
import FacilitiesSection from "@/components/facilities-section"
import ProgramsSection from "@/components/programs-section"
import RegisterSection from "@/components/register-section"
import ArticlesSection from "@/components/articles-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection/>
      <VisionSection />
      <OpportunitiesSection />
      <LeadershipSection />
      <FacilitiesSection />
      <ProgramsSection />
      <RegisterSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
