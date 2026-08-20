"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Hello! Welcome to Limperial Luxury. How can I help you today?" }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { role: "user", content: input }])
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thank you for your interest! Our team will get back to you shortly. You can also reach us directly on WhatsApp at +855 12 345 678.",
        "We have a wide selection of luxury furniture and lighting. Would you like me to connect you with our sales team?",
        "Our showroom is open Monday-Saturday 9AM-7PM and Sunday 10AM-5PM. We'd love to see you there!",
        "For immediate assistance, please contact us via WhatsApp or Telegram. Our team responds within minutes!"
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { role: "bot", content: randomResponse }])
    }, 1000)
    
    setInput("")
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-primary flex items-center justify-center shadow-lg hover:bg-gold-light transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-lg shadow-2xl transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-primary font-semibold">
              L
            </div>
            <div>
              <h3 className="font-medium">Limperial Support</h3>
              <p className="text-xs text-primary-foreground/70">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary-foreground/10 rounded"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:border-gold"
            />
            <Button type="submit" size="sm" className="bg-gold hover:bg-gold-light text-primary">
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Or contact us via{" "}
            <a href="https://wa.me/85512345678" className="text-gold hover:underline">WhatsApp</a>
          </p>
        </div>
      </div>
    </>
  )
}
