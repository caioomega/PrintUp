"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero personalizar meus itens de festa 🎉")
    const phoneNumber = "5511999999999"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg animate-pulse-slow"
      size="lg"
    >
      <MessageCircle size={24} className="text-white" />
      <span className="sr-only">Contato via WhatsApp</span>
    </Button>
  )
}
