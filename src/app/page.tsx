import HeroSection from "@/components/HeroSection"
import ThaiGHGSection from "./components/ThaiGHGSection"
import DidYouKnowSection from "./components/DidYouKnowSection"
import EffectSection from "./components/EffectSection"
import DidYouKnowBanner from "./components/DidYouKnowBanner"
import CarbonForestSection from "./components/CarbonForestSection"
import CarbonCreditCompanies from "./components/CarbonCreditCompanies"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DidYouKnowSection />
      <ThaiGHGSection />
      <EffectSection />
      <DidYouKnowBanner />
      <CarbonForestSection />
      <CarbonCreditCompanies />
    </main>
  )
}
