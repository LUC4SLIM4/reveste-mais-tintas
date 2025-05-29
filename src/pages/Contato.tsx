"use client"

import type React from "react"
import { useState } from "react"

export function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Componente do carrossel de mapas
  const MapCarousel = () => {
    const [activeView, setActiveView] = useState<"map" | "streetview">("map")

    const views = [
      {
        id: "map",
        title: "Localização no Mapa",
        description: "Veja nossa localização e como chegar",
        icon: "🗺️",
        iframe: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3214295284015!2d-46.53629031492402!3d-18.55954205206912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef4bc1af4ce37%3A0xd1b33c94c1827753!2sAv.%20Dep.%20Binga%2C%20682%20-%20Nossa%20Sra.%20de%20F%C3%A1tima%2C%20Patos%20de%20Minas%20-%20MG%2C%2038701-628!5e0!3m2!1spt-BR!2sbr!4v1748463449775!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Reveste Mais Tintas"
          />
        ),
      },
      {
        id: "streetview",
        title: "Visualização da Loja",
        description: "Conheça nossa fachada e estrutura",
        icon: "🏪",
        iframe: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1748463247875!6m8!1m7!1s2XaTfBzYMstguHben4CXow!2m2!1d-18.5599185285018!2d-46.53120811636513!3f353.06396536886325!4f-14.434336705749473!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Street View da Reveste Mais Tintas"
          />
        ),
      },
    ]

    const currentView = views.find((view) => view.id === activeView) || views[0]

    return (
      <div
        className="relative w-full"
        style={{
          height: "100%",
          minHeight: "800px",
        }}
      >
        {/* Navigation Tabs */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id as "map" | "streetview")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeView === view.id
                      ? "bg-primary text-white shadow-md transform scale-105"
                      : "text-gray-600 hover:text-primary hover:bg-orange-50"
                  }`}
                >
                  <span className="text-lg">{view.icon}</span>
                  <span className="hidden sm:inline">{view.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full h-full rounded-xl overflow-hidden">{currentView.iframe}</div>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                {currentView.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{currentView.title}</h3>
                <p className="text-sm text-gray-600">{currentView.description}</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => setActiveView(activeView === "map" ? "streetview" : "map")}
                  className="btn btn-outline btn-sm group"
                >
                  <span className="mr-1">🔄</span>
                  <span className="hidden sm:inline">Alternar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex gap-2">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as "map" | "streetview")}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeView === view.id ? "bg-primary scale-125" : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="hero-section">
      {/* Hero Section */}
      <section className="orange-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Estamos aqui para ajudar
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Entre em Contato</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Nossa equipe está pronta para atender você e oferecer as melhores soluções para seu projeto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Nome Completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full group">
                    <span className="mr-2">📧</span>
                    <span>Enviar Mensagem</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      Endereço
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Avenida Deputado Binga, nº 682
                      <br />
                      Bairro Nossa Senhora de Fátima, Patos de Minas/MG
                      <br />
                      CEP: 38701-628
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      Telefone
                    </h3>
                    <p className="text-gray-600">(34) 3822-4410</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      E-mail
                    </h3>
                    <p className="text-gray-600">revestemais@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600">
                      Segunda a Quinta: 07:00 às 17:00
                      <br />
                      Sexta: 07:00 às 16:00
                      <br />
                      <span className="text-gray-400">Sábados e Domingos: Fechado</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="mt-12 p-8 rounded-2xl shadow-lg border border-green-100"
                style={{ background: "linear-gradient(to right bottom, #e6f7ec, #f0fdf4)" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-2xl text-white">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento Rápido</h3>
                    <p className="text-gray-600 mb-6">Precisa de uma resposta imediata? Fale conosco pelo WhatsApp!</p>
                    <a
                      href="https://wa.me/5534998884410?text=Olá! Gostaria de mais informações sobre os produtos da Reveste Mais Tintas."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn inline-flex"
                      style={{ backgroundColor: "#25D366", color: "white" }}
                    >
                      <span className="mr-2">💬</span>
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Responsáveis */}
              <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Responsáveis</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-semibold text-primary">Roberta Livia Lima de Souza</p>
                    <p className="text-sm text-gray-500">Sócia-administradora</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-semibold text-primary">Patricia Emiliane da Silva Lima</p>
                    <p className="text-sm text-gray-500">Sócia-administradora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Nossa Localização
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Venha nos visitar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos estrategicamente localizados em Patos de Minas para melhor atender você
            </p>
          </div>

          {/* Map Carousel */}
          <div
            className="card overflow-hidden shadow-2xl border-0"
            style={{
              height: "800px",
              minHeight: "800px",
            }}
          >
            <MapCarousel />
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl">
                📱
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Precisa de ajuda para chegar?</h3>
                <p className="text-gray-600 mb-3">
                  Entre em contato pelo telefone <span className="font-semibold">(34) 3822-4410</span> e teremos prazer
                  em orientá-lo.
                </p>
                <a href="tel:+553438224410" className="text-primary font-medium flex items-center hover:underline">
                  <span>Ligar agora</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
