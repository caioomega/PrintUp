"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Palette, Truck, PartyPopper } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "1. Entre em Contato",
    description: "Fale conosco pelo WhatsApp ou formulário e conte sobre sua festa",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "2. Personalize",
    description: "Escolha os produtos de plástico, cores, textos e designs que combinam com você",
    color: "text-secondary",
  },
  {
    icon: Truck,
    title: "3. Produção & Entrega",
    description: "Produzimos com impressão Silksmaq de alta qualidade e entregamos no prazo combinado",
    color: "text-accent",
  },
  {
    icon: PartyPopper,
    title: "4. Festa Inesquecível",
    description: "Surpreenda seus convidados com produtos únicos e personalizados",
    color: "text-primary",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Como
            <span className="text-primary"> Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Processo simples e rápido para transformar sua festa em algo único com produtos de plástico personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 ${step.color} mb-4`}
                  >
                    <step.icon size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>

                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Connector for Desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
        </div>
      </div>
    </section>
  )
}
