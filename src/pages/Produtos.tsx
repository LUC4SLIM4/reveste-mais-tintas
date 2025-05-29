"use client"

import { useState } from "react"

export function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "tintas-residenciais", name: "Tintas Residenciais" },
    { id: "tintas-industriais", name: "Tintas Industriais" },
    { id: "revestimentos-acrilicos", name: "Revestimentos Acrílicos" },
    { id: "texturas", name: "Texturas" },
    { id: "impermeabilizantes", name: "Impermeabilizantes" },
    { id: "solventes", name: "Solventes" },
    { id: "acessorios", name: "Acessórios" },
  ]

  const products = [
    {
      id: 1,
      name: "Tinta Acrílica Premium Branco Residencial",
      category: "tintas-residenciais",
      brand: "Suvinil",
      description: "Tinta acrílica de alta qualidade para ambientes residenciais",
      image: "/pedra.svg",
    },
    {
      id: 2,
      name: "Tinta Epóxi Industrial Cinza",
      category: "tintas-industriais",
      brand: "Coral",
      description: "Tinta epóxi de alta resistência para pisos industriais",
      image: "/acetinado.svg",
    },
    {
      id: 3,
      name: "Revestimento Acrílico Texturatto",
      category: "revestimentos-acrilicos",
      brand: "Eucatex",
      description: "Revestimento acrílico com efeito texturatto",
      image: "/balde.svg",
    },
    {
      id: 4,
      name: "Textura Rústica Decorativa",
      category: "texturas",
      brand: "Atlas",
      description: "Revestimento com efeito texturizado rústico",
      image: "/barrica.svg",
    },
    {
      id: 5,
      name: "Impermeabilizante Vedatop",
      category: "impermeabilizantes",
      brand: "Vedacit",
      description: "Impermeabilizante para lajes e paredes",
      image: "/decoraMais.svg",
    },
    {
      id: 6,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/economica.svg",
    },
    {
      id: 7,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/elasticor.svg",
    },
    {
      id: 8,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/impermeabilizante.svg",
    },
    {
      id: 9,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/pedra.svg",
    },
    {
      id: 10,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/piso.svg",
    },
    {
      id: 11,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/rendeMais.svg",
    },
    {
      id: 12,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/saco.svg",
    },
    {
      id: 13,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/semibrilho.svg",
    },
    {
      id: 14,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/standardGalao.svg",
    },
    {
      id: 15,
      name: "Solvente Aguarrás",
      category: "solventes",
      brand: "Thinnerbras",
      description: "Solvente para diluição de tintas e limpeza",
      image: "/superEconomica.svg",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getWhatsAppMessage = (productName: string) => {
    return `Olá! Gostaria de saber mais sobre o produto: ${productName}`
  }

  return (
    <div style={{ paddingTop: "8rem" }}>
      {/* Hero Section */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(to right, #003AAA, #0056D6)", color: "white" }}
      >
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Produtos</h1>
            <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Encontre tudo que você precisa para seu projeto de pintura
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: "2rem 0", backgroundColor: "#F8F9FA" }}>
        <div className="container-custom">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
            {/* Search */}
            <div style={{ position: "relative", width: "100%", maxWidth: "24rem" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              >
                🔍
              </span>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 0.75rem 0.75rem 2.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                }}
              />
            </div>

            {/* Category Filter */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "btn btn-primary" : "btn btn-outline"}
                  style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden">
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.transform = "scale(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.transform = "scale(1)"
                    }}
                  />
                </div>
                <div className="p-6">
                  <div style={{ fontSize: "0.875rem", color: "#003AAA", fontWeight: "600", marginBottom: "0.5rem" }}>
                    {product.brand}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <a
                      href="https://mercadolivre.com.br/revestemais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      🛒 Comprar no ML
                    </a>
                    <a
                      href={`https://wa.me/5534998884410?text=${encodeURIComponent(getWhatsAppMessage(product.name))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      💬 Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center" style={{ padding: "4rem 0" }}>
              <div style={{ color: "#9ca3af", fontSize: "1.25rem", marginBottom: "1rem" }}>
                Nenhum produto encontrado
              </div>
              <p style={{ color: "#6b7280" }}>Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
