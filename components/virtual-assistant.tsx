"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface FAQ {
  question: string
  answer: string
  keywords: string[]
}

const faqs: FAQ[] = [
  {
    question: "Quais produtos vocês personalizam?",
    answer:
      "Personalizamos copos de plástico (diversos tamanhos), taças para gin, vinho e champagne, baldes de gelo e criamos kits completos para festas. Todos nossos produtos são de plástico resistente e duradouro, perfeitos para qualquer ocasião especial! ✨",
    keywords: ["produtos", "copos", "taças", "baldes", "kit", "festa", "personalizar", "o que fazem"],
  },
  {
    question: "Como é feita a personalização?",
    answer:
      "Utilizamos tecnologia avançada de estampagem que garante cores vibrantes e acabamento profissional. O processo é totalmente automatizado e resulta em estampas duráveis que não desbotam. Você só precisa enviar seu design e nós cuidamos de tudo! 🎨",
    keywords: ["processo", "como funciona", "personalização", "estampagem", "design", "como é feito"],
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Nosso prazo padrão é de 3 a 5 dias úteis após aprovação do seu design. Para pedidos urgentes, oferecemos entrega expressa em 24-48h (sujeito à disponibilidade). Trabalhamos com agilidade sem comprometer a qualidade! ⚡",
    keywords: ["prazo", "entrega", "tempo", "urgente", "rápido", "quando fica pronto"],
  },
  {
    question: "Como faço meu orçamento?",
    answer:
      "Super fácil! Clique no botão 'Realizar Orçamento' ou entre em contato pelo WhatsApp (19) 99713-7010. Informe o tipo de produto, quantidade desejada e envie seu design. Respondemos rapidamente com o melhor preço! 💰",
    keywords: ["orçamento", "preço", "valor", "custo", "quanto custa", "solicitar", "pedir"],
  },
  {
    question: "Qual a quantidade mínima?",
    answer:
      "Trabalhamos com pedidos a partir de 30 unidades para garantir a melhor qualidade e preço. Para grandes quantidades, oferecemos descontos especiais. Quanto mais você pede, mais economiza! 📦",
    keywords: ["quantidade", "mínima", "pedido", "unidades", "desconto", "mínimo"],
  },
  {
    question: "Os produtos são resistentes?",
    answer:
      "Absolutamente! Nossos produtos são feitos com plástico de alta qualidade, resistentes a quedas, lavagem e uso intenso. As estampas são super duráveis e mantêm as cores vibrantes por muito tempo. Qualidade garantida! 💪",
    keywords: ["resistente", "qualidade", "durável", "plástico", "lavagem", "desbota", "forte"],
  },
  {
    question: "Posso usar meu próprio design?",
    answer:
      "Claro que sim! Aceitamos seus designs em alta resolução (PNG, JPG, PDF). Nossa equipe também pode criar designs exclusivos para você ou fazer ajustes no seu arquivo. Sua criatividade não tem limites! 🎯",
    keywords: ["design", "próprio", "arquivo", "png", "jpg", "pdf", "criar", "personalizado"],
  },
  {
    question: "Fazem entrega na minha região?",
    answer:
      "Sim! Entregamos em toda a região com frete calculado conforme localização. Para clientes locais, também oferecemos retirada no nosso ponto. Seu pedido chega onde você estiver! 🚚",
    keywords: ["entrega", "frete", "região", "retirada", "local", "envio", "entregar"],
  },
]

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! 👋 Sou a assistente virtual da Print UP! Estou aqui para ajudar você com tudo sobre nossos produtos personalizados. Como posso te ajudar hoje?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const findBestAnswer = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    let bestMatch: FAQ | null = null
    let maxMatches = 0

    faqs.forEach((faq) => {
      const matches = faq.keywords.filter((keyword) => lowerMessage.includes(keyword.toLowerCase())).length

      if (matches > maxMatches) {
        maxMatches = matches
        bestMatch = faq
      }
    })

    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer
    }

    if (
      lowerMessage.includes("oi") ||
      lowerMessage.includes("olá") ||
      lowerMessage.includes("ola") ||
      lowerMessage.includes("bom dia") ||
      lowerMessage.includes("boa tarde")
    ) {
      return "Oi! 😊 Que bom te ver aqui! Como posso ajudar você com nossos produtos personalizados?"
    }

    if (lowerMessage.includes("obrigad") || lowerMessage.includes("valeu")) {
      return "Por nada! 😊 Estou sempre aqui para ajudar. Precisa de mais alguma coisa?"
    }

    return "Hmm, não consegui entender exatamente sua pergunta 🤔 Mas posso te ajudar com informações sobre nossos produtos, prazos, orçamentos ou processo de personalização. Ou clique em uma das opções abaixo, ou fale diretamente conosco no WhatsApp (19) 99713-7010!"
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: findBestAnswer(inputText),
      isBot: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputText("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "Quais produtos vocês fazem?",
    "Como faço meu orçamento?",
    "Qual o prazo de entrega?",
    "Posso usar meu design?",
    "Os produtos são resistentes?",
    "Qual a quantidade mínima?",
  ]

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5519997137010?text=Olá! Vim do site e gostaria de fazer um orçamento.", "_blank")
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          size="icon"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-4 md:p-6">
          <div className="bg-black/30 backdrop-blur-sm absolute inset-0" onClick={() => setIsOpen(false)} />

          <Card className="relative w-full sm:max-w-md h-full sm:h-[650px] max-h-screen flex flex-col shadow-2xl border-0 bg-white/95 backdrop-blur-sm sm:rounded-lg rounded-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-none sm:rounded-t-lg px-4 py-4 sm:px-6">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <CardTitle className="text-base sm:text-lg font-bold">Print UP</CardTitle>
                  <p className="text-xs sm:text-sm opacity-90">Assistente Virtual</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-3 sm:p-4 shadow-sm ${
                        message.isBot
                          ? "bg-white border border-gray-100 text-gray-800"
                          : "bg-gradient-to-r from-primary to-secondary text-white"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && (
                          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                          </div>
                        )}
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        {!message.isBot && (
                          <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 opacity-80" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {messages.length === 1 && (
                <div className="p-3 sm:p-4 border-t bg-gray-50/50">
                  <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-primary" />
                    Perguntas frequentes:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-200 p-3 text-xs text-center rounded-lg border-gray-200 bg-white shadow-sm min-h-[44px] flex items-center justify-center"
                        onClick={() => {
                          setInputText(question)
                          setTimeout(handleSendMessage, 100)
                        }}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-3 sm:p-4 border-t bg-white">
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua pergunta..."
                    className="flex-1 px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-all min-h-[44px]"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    onClick={handleWhatsAppContact}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm border-primary text-primary hover:bg-primary hover:text-white rounded-full px-4 py-2 bg-transparent min-h-[36px] font-medium"
                  >
                    💬 WhatsApp: (19) 99713-7010
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
