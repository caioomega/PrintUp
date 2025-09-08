"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/copos-plastico-personalizados-festa-colorida.jpg"
          alt="Festa colorida com copos de plástico personalizados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
              Personalize Seus
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                {" "}
                Momentos Especiais
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Especialistas em copos e taças de plástico personalizados com estampas de alta qualidade impressas na
              máquina Silksmaq
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto min-h-[48px] font-semibold"
                onClick={() =>
                  window.open(
                    "https://wa.me/5519997137010?text=Olá! Gostaria de fazer um orçamento para produtos personalizados.",
                    "_blank",
                  )
                }
              >
                Personalizar Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent w-full sm:w-auto min-h-[48px] font-semibold"
                onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Galeria
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8">
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/50 min-w-[140px] justify-center">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-white font-medium text-sm sm:text-base">Entrega Rápida</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/50 min-w-[140px] justify-center">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-white font-medium text-sm sm:text-base">Qualidade Premium</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-full border border-white/50 min-w-[140px] justify-center">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-white font-medium text-sm sm:text-base">Orçamento Grátis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
