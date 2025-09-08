"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Zap, Shield, Clock } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Por Que Escolher a<span className="text-primary"> Print UP?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Qualidade premium em produtos de plástico personalizados com tecnologia Silksmaq
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Design Personalizado</h3>
              <p className="text-muted-foreground text-pretty">
                Criamos estampas únicas para cada cliente com qualidade profissional
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tecnologia Silksmaq</h3>
              <p className="text-muted-foreground text-pretty">
                Impressão de alta qualidade em papel com acabamento perfeito
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Produtos Duráveis</h3>
              <p className="text-muted-foreground text-pretty">
                Copos e taças de plástico resistentes, ideais para qualquer evento
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Entrega Rápida</h3>
              <p className="text-muted-foreground text-pretty">
                Produção ágil para atender seus prazos sem comprometer a qualidade
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
