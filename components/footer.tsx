"use client"

import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5519997137010"
    const message = "Olá! Gostaria de realizar um orçamento para produtos personalizados."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-white">Print UP</span>
            </div>
            <p className="text-background/80 mb-6 text-pretty">
              Especialistas em copos e taças de plástico personalizados com impressão Silksmaq para tornar suas festas
              inesquecíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-background/80 hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/80 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#processo" className="text-background/80 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-background/80">Copos de Plástico Personalizados</span>
              </li>
              <li>
                <span className="text-background/80">Taças de Plástico Premium</span>
              </li>
              <li>
                <span className="text-background/80">Baldes & Acessórios</span>
              </li>
              <li>
                <span className="text-background/80">Kit Festa Completo</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <button
                    onClick={handleWhatsAppContact}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    +55 19 99713-7010
                  </button>
                  <p className="text-sm text-background/60">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <p className="text-background/80">orcamento@printup.com.br</p>
                  <p className="text-sm text-background/60">Email</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <p className="text-background/80">São Paulo, SP</p>
                  <p className="text-sm text-background/60">Entregamos em todo Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Print UP. Todos os direitos reservados. | Política de Privacidade | Termos de Uso
          </p>
        </div>
      </div>
    </footer>
  )
}
