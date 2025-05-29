"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, MapPin, Clock, MessageCircle, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sustentabilidade", href: "/sustentabilidade" },
    { name: "Contato", href: "/contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar menu quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Fechar menu quando clica fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Fechar menu quando a tela é redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isMenuOpen)
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    console.log("Closing menu")
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
      ref={menuRef}
    >
      {/* Top Bar */}
      <div className="bg-secondary text-white py-3 border-b border-blue-800">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Phone size={16} />
                <span className="font-medium">(34) 3822-4410</span>
              </div>
              <div className="hidden md:flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <MapPin size={16} />
                <span>Av. Deputado Binga, 682 - Patos de Minas, MG</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock size={16} />
              <span>Seg-Qui 7h às 17h | Sex 7h às 16h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="nav-link flex items-center group" onClick={closeMenu}>
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="RevestMais Tintas - Logo"
                style={{
                  height: "48px",
                  width: "auto",
                  maxHeight: "48px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative group ${
                  location.pathname === item.href
                    ? "text-primary bg-orange-50"
                    : "text-gray-700 hover:text-primary hover:bg-orange-50"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 ${
                    location.pathname === item.href ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5534999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden md:inline-flex group"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Fale Conosco</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50 border border-gray-300"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              type="button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link px-4 py-3 rounded-lg font-semibold transition-all ${
                    location.pathname === item.href
                      ? "text-primary bg-orange-50 border-l-4 border-primary"
                      : "text-gray-700 hover:text-primary hover:bg-orange-50"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5534999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4"
                onClick={closeMenu}
              >
                <MessageCircle size={18} className="mr-2" />
                <span>Fale Conosco</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
