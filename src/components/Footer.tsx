import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sustentabilidade", href: "/sustentabilidade" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black mb-6">
              <span className="text-primary">RevestMais</span>
              <span className="text-secondary">Tintas</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Especialistas em tintas premium e revestimentos em Patos de Minas. Mais de 11 anos transformando ambientes
              com qualidade excepcional.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/revestemaistintas"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                aria-label="Instagram RevestMais Tintas"
              >
                <Instagram size={20} />
                <span className="font-semibold">@revestemaistintas</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Úteis</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="footer-link text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Av. Deputado Binga, 682
                    <br />
                    Nossa Senhora de Fátima
                    <br />
                    Patos de Minas/MG
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <p className="text-gray-300">(34) 3822-4410</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <p className="text-gray-300">revestemais@outlook.com</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Seg-Qui: 07:00 às 17:00
                    <br />
                    Sex: 07:00 às 16:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsáveis */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Responsáveis</h4>
            <p className="text-gray-300">
              <span className="text-primary font-medium">Roberta Livia Lima de Souza</span> e{" "}
              <span className="text-primary font-medium">Patricia Emiliane da Silva Lima</span>
              <br />
              <span className="text-sm text-gray-400">Sócias-administradoras</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-800/50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} RevestMais Tintas. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Desenvolvido com</span>
              <span className="text-red-400">❤️</span>
              <span>para transformar ambientes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
