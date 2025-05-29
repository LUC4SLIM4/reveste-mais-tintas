"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5534998884410?text=Olá! Gostaria de saber mais sobre os produtos da Reveste Mais Tintas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 group"
      style={{
        backgroundColor: "#25D366",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#22c55e"
        e.currentTarget.style.transform = "scale(1.1)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#25D366"
        e.currentTarget.style.transform = "scale(1)"
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
    </a>
  )
}
