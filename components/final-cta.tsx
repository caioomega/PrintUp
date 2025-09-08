"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, Zap } from "lucide-react"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipoEvento: "",
    quantidade: "",
    prazo: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "5519997137010"
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Tipo de evento: ${formData.tipoEvento}
Quantidade: ${formData.quantidade}
Prazo: ${formData.prazo}
Mensagem: ${formData.mensagem}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-2">
            <Clock className="mr-2" size={16} />
            Orçamento Personalizado
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Transforme Sua Festa em
            <span className="text-primary"> Algo Único</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Orçamento grátis em 5 minutos. Produtos de plástico personalizados com impressão Silksmaq
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Solicite Seu Orçamento Grátis</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="WhatsApp"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                  />
                </div>

                <Select onValueChange={(value) => setFormData({ ...formData, tipoEvento: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casamento">Casamento</SelectItem>
                    <SelectItem value="aniversario">Aniversário</SelectItem>
                    <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="formatura">Formatura</SelectItem>
                    <SelectItem value="cha-bebe">Chá de Bebê</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Quantidade de itens"
                    value={formData.quantidade}
                    onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Prazo desejado"
                    value={formData.prazo}
                    onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                    required
                  />
                </div>

                <Textarea
                  placeholder="Conte mais sobre sua festa e suas ideias..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Zap className="mr-2" size={20} />
                  Solicitar Orçamento via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-6">Por Que Escolher a Print UP?</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Entrega Rápida</h4>
                  <p className="text-muted-foreground">Produção em até 24h e entrega em todo o Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Qualidade Premium</h4>
                  <p className="text-muted-foreground">Produtos de plástico com impressão Silksmaq de alta qualidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Atendimento Personalizado</h4>
                  <p className="text-muted-foreground">Suporte completo do pedido até a entrega</p>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <Card className="glass-card border-primary/50">
              <CardContent className="p-6 text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">Kits Personalizados</Badge>
                <h4 className="text-2xl font-bold text-primary mb-2">Kit Festa Completo</h4>
                <div className="text-2xl font-bold text-foreground mb-2">
                  <span className="text-primary">Solicite Orçamento</span>
                </div>
                <p className="text-muted-foreground">Copos + taças + baldes de plástico personalizados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
