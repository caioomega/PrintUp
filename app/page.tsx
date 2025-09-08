import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Gallery } from "@/components/gallery"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import VirtualAssistant from "@/components/virtual-assistant"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <VirtualAssistant />
    </div>
  )
}
