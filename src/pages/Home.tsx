"use client"

import { Link } from "react-router-dom"
import {
  Users,
  Palette,
  Truck,
  Shield,
  Zap,
  Trophy,
  Star,
  ArrowRight,
  MessageCircle,
  ShoppingCart,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react"
import { useState, useRef } from "react"

export function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const features = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Equipe especializada para orientar na escolha ideal de produtos para seu projeto com consultoria técnica completa.",
    },
    {
      icon: Palette,
      title: "Produtos Premium",
      description:
        "Trabalhamos exclusivamente com as melhores marcas do mercado: Suvinil, Coral, Sherwin-Williams e muito mais.",
    },
    {
      icon: Truck,
      title: "Entrega Expressa",
      description:
        "Logística otimizada para entregar seus produtos no prazo combinado, com rastreamento em tempo real.",
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description:
        "Suporte técnico completo e garantia em todos os produtos, com orientação sobre aplicação e manutenção.",
    },
  ]

  const categories = [
    {
      title: "Tintas Residenciais Premium",
      description: "Tintas de alta qualidade para ambientes internos e externos com acabamento profissional",
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      title: "Tintas Industriais",
      description: "Soluções robustas para ambientes industriais com máxima durabilidade e resistência",
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Revestimentos Acrílicos",
      description: "Texturas e efeitos decorativos únicos para projetos arquitetônicos diferenciados",
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Ferramentas Profissionais",
      description: "Kit completo de ferramentas e acessórios para uma aplicação perfeita",
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-green-400 to-green-600",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Arquiteta Sênior",
      company: "Silva Arquitetura",
      content:
        "Parceria excepcional! A Reveste Mais sempre entrega produtos de qualidade superior e o atendimento técnico é impecável. Recomendo para todos os meus projetos.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "João Santos",
      role: "Engenheiro Civil",
      company: "Construtora Santos",
      content:
        "Trabalho com a Reveste Mais há mais de 5 anos. A qualidade dos produtos e a pontualidade nas entregas fazem toda a diferença nos nossos projetos.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Ana Costa",
      role: "Designer de Interiores",
      company: "Costa Design",
      content:
        "Encontro sempre as cores e texturas que preciso. A variedade de produtos e o conhecimento técnico da equipe são incomparáveis na região.",
      rating: 5,
      avatar: "👩‍🎨",
    },
  ]

  const stats = [
    { icon: Users, number: "5.000+", label: "Clientes Satisfeitos", description: "Profissionais e pessoas físicas" },
    { icon: Trophy, number: "11+", label: "Anos de Experiência", description: "Consolidados no mercado" },
    { icon: Star, number: "15+", label: "Marcas Parceiras", description: "Principais fabricantes" },
    { icon: Shield, number: "100%", label: "Cobertura Regional", description: "Patos de Minas e região" },
  ]

  const brands = [
    { name: "Suvinil", category: "Premium" },
    { name: "Coral", category: "Tradicional" },
    { name: "Sherwin-Williams", category: "Internacional" },
    { name: "Eucatex", category: "Revestimentos" },
    { name: "Anjo Tintas", category: "Especializada" },
    { name: "Vedacit", category: "Impermeabilizantes" },
  ]

  return (
    <div className="hero-section">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Desde 2013 transformando ambientes
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Qualidade que{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  transforma
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
                Especialistas em tintas premium, revestimentos acrílicos e materiais de construção. Atendimento
                personalizado, produtos de alta qualidade e entrega expressa em Patos de Minas e região.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link to="/produtos" className="btn btn-primary btn-lg group">
                  <span>Explorar Produtos</span>
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/5534998884410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white btn-lg group"
                >
                  <MessageCircle size={20} className="mr-2" />
                  <span>Consultoria Gratuita</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Shield size={32} />
                  </div>
                  <p className="text-sm font-medium">Garantia Total</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Zap size={32} />
                  </div>
                  <p className="text-sm font-medium">Entrega Expressa</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Trophy size={32} />
                  </div>
                  <p className="text-sm font-medium">Atendimento Premium</p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative animate-slide-up">
              <div className="aspect-ratio-16-9 rounded-3xl overflow-hidden shadow-2xl relative group">
                {/* Video Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-600/20 z-10"></div>

                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg?height=700&width=900"
                >
                  <source src="/video-loja.mp4" type="video/mp4" />
                  <source src="/video-loja.webm" type="video/webm" />
                  {/* Fallback para navegadores que não suportam vídeo */}
                  <img
                    src="/placeholder.svg?height=700&width=900"
                    alt="Loja Reveste Mais Tintas - Fachada moderna"
                    className="w-full h-full object-cover"
                  />
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={toggleVideo}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={isVideoPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  >
                    {isVideoPlaying ? <Pause size={32} /> : <Play size={32} />}
                  </button>
                </div>

                {/* Video Quality Indicator */}
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  HD
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="floating-card animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    11+
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Anos de Experiência</p>
                    <p className="text-sm text-gray-600">Liderança no mercado regional</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-orange-600 shadow-lg flex items-center gap-2 z-30">
                <Star size={16} className="fill-current" />
                5.000+ Clientes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              Por que somos a escolha certa?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Diferenciais que fazem a <span className="text-primary">diferença</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa experiência e compromisso com a excelência garantem o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-feature p-8 text-center group">
                <div className="feature-icon group-hover:animate-pulse">
                  <feature.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Nosso Portfólio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Categorias <span className="text-secondary">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções completas para todos os tipos de projetos, do residencial ao industrial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="aspect-ratio-4-3 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`}></div>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <Link
                    to="/produtos"
                    className="inline-flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors"
                  >
                    <span>Explorar categoria</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding blue-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Números que comprovam nossa <span className="text-yellow-300">excelência</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Mais de uma década construindo relacionamentos sólidos e entregando resultados excepcionais
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={48} />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-yellow-300">{stat.number}</div>
                <div className="font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Partner Brands */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-12">Marcas Parceiras Premium</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brands.map((brand, index) => (
                <div key={index} className="brand-badge group">
                  <div className="font-bold text-lg mb-1 group-hover:text-yellow-300 transition-colors">
                    {brand.name}
                  </div>
                  <div className="text-xs text-blue-200">{brand.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-6">
              Depoimentos Reais
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              O que nossos <span className="text-primary">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Histórias de sucesso de profissionais que confiam na Reveste Mais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card group">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 mx-1 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed font-medium">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding orange-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Pronto para transformar seu <span className="text-yellow-300">ambiente?</span>
            </h2>
            <p className="text-xl mb-12 text-orange-100 leading-relaxed">
              Entre em contato conosco e descubra como podemos tornar seu projeto realidade com qualidade excepcional
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/5534998884410"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg group"
              >
                <MessageCircle size={20} className="mr-2" />
                <span>Falar via WhatsApp</span>
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://mercadolivre.com.br/revestemais"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg group"
              >
                <ShoppingCart size={20} className="mr-2" />
                <span>Comprar Online</span>
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-orange-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Consultoria Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Entrega Expressa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Garantia Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
