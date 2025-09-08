"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const galleryItems = [
  {
    image: "/casamento-ao-ar-livre-com-ta-as-personalizadas-dos.jpg",
    category: "Casamentos",
    title: "Casamento Romântico",
  },
  {
    image: "/festa-de-empresa-com-copos-branded--ambiente-corpo.jpg",
    category: "Corporativo",
    title: "Evento Corporativo",
  },
  {
    image: "/anivers-rio-infantil-com-copos-coloridos-personali.jpg",
    category: "Aniversários",
    title: "Festa Infantil",
  },
  {
    image: "/confraterniza--o-com-amigos--copos-personalizados-.jpg",
    category: "Confraternizações",
    title: "Encontro de Amigos",
  },
  {
    image: "/festa-de-formatura-com-ta-as-elegantes-personaliza.jpg",
    category: "Formaturas",
    title: "Formatura Especial",
  },
  {
    image: "/ch--de-beb--com-itens-personalizados-em-tons-past-.jpg",
    category: "Chá de Bebê",
    title: "Chá de Bebê Delicado",
  },
]

const categories = [
  "Todos",
  "Casamentos",
  "Aniversários",
  "Corporativo",
  "Formaturas",
  "Confraternizações",
  "Chá de Bebê",
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems =
    activeCategory === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Galeria de
            <span className="text-primary"> Trabalhos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja alguns dos nossos trabalhos realizados e inspire-se para sua próxima festa
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-primary/90 text-primary-foreground">{item.category}</Badge>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            Ver Mais Trabalhos
          </Button>
        </div>
      </div>
    </section>
  )
}
