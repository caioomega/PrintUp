"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppContact = () => {
    const phoneNumber = "5519997137010"
    const message = "Olá! Gostaria de realizar um orçamento para produtos personalizados."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Print UP - Sublimação"
              width={180}
              height={60}
              className="h-8 sm:h-10 md:h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Início
            </a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Produtos
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Galeria
            </a>
            <a href="#processo" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Como Funciona
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Contato
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs xl:text-sm px-3 xl:px-4"
            >
              Orçamento Grátis
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsAppContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs xl:text-sm px-3 xl:px-4"
            >
              Personalizar Agora
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#produtos"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#galeria"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </a>
              <a
                href="#processo"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-primary/5 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    handleWhatsAppContact()
                    setIsMenuOpen(false)
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-12 text-base font-medium"
                >
                  Orçamento Grátis
                </Button>
                <Button
                  onClick={() => {
                    handleWhatsAppContact()
                    setIsMenuOpen(false)
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
                >
                  Personalizar Agora
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
