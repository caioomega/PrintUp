"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, MessageCircle } from "lucide-react"

const products = [
  {
    category: "Copos de Plástico Personalizados",
    items: [
      {
        name: "Copos de Plástico Transparente",
        description: "Estampa em papel impresso na máquina Silksmaq",
        image: "/copos-de-pl-stico-transparente-personalizados-com-.jpg",
        popular: true,
      },
      {
        name: "Copos Long Drink Plástico",
        description: "Impressão de alta qualidade em papel",
        image: "/copos-long-drink-de-pl-stico-com-estampas-personal.jpg",
        popular: false,
      },
      {
        name: "Copos Plástico Coloridos",
        description: "Diversos modelos com estampas exclusivas",
        image: "/copos-de-pl-stico-coloridos-com-estampas-personali.jpg",
        popular: false,
      },
    ],
  },
  {
    category: "Taças de Plástico Premium",
    items: [
      {
        name: "Taças de Gin Plástico",
        description: "Estampas elegantes em papel de alta qualidade",
        image: "/ta-as-de-gin-de-pl-stico-com-estampas-personalizad.jpg",
        popular: true,
      },
      {
        name: "Taças de Vinho Plástico",
        description: "Design sofisticado com impressão Silksmaq",
        image: "/ta-as-de-vinho-de-pl-stico-com-estampas-personaliz.jpg",
        popular: false,
      },
      {
        name: "Taças Champagne Plástico",
        description: "Acabamento premium com estampas douradas",
        image: "/ta-as-de-champagne-de-pl-stico-com-estampas-dourad.jpg",
        popular: false,
      },
    ],
  },
  {
    category: "Baldes & Kits para Festa",
    items: [
      {
        name: "Baldes de Gelo Plástico",
        description: "Resistentes com estampas personalizadas",
        image: "/baldes-de-gelo-de-pl-stico-personalizados-com-esta.jpg",
        popular: true,
      },
      {
        name: "Kit Festa Completo",
        description: "Copos, taças e baldes coordenados",
        image: "/kit-festa-completo-com-copos-ta-as-e-baldes-de-pl-.jpg",
        popular: true,
      },
    ],
  },
]

const handleWhatsAppContact = () => {
  const phoneNumber = "5519997137010"
  const message = "Olá! Gostaria de realizar um orçamento para produtos personalizados."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

export function Products() {
  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            Nossos Produtos
            <span className="text-primary"> Personalizados</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Copos e taças de plástico com estampas de alta qualidade impressas em papel na máquina Silksmaq
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {category.items.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="group glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.popular && (
                        <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground font-semibold shadow-lg text-xs sm:text-sm">
                          Mais Popular
                        </Badge>
                      )}

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4">
                        <Button size="sm" variant="secondary" className="glass p-2 sm:p-3">
                          <Eye size={16} className="sm:w-4 sm:h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="glass p-2 sm:p-3">
                          <Heart size={16} className="sm:w-4 sm:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 p-2 sm:p-3"
                          onClick={handleWhatsAppContact}
                        >
                          <MessageCircle size={16} className="sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 leading-tight">{product.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <span className="text-base sm:text-lg font-bold text-primary">Realizar Orçamento</span>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[40px] font-medium"
                          onClick={handleWhatsAppContact}
                        >
                          Solicitar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-sm font-semibold"
            onClick={handleWhatsAppContact}
          >
            Solicitar Orçamento Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
