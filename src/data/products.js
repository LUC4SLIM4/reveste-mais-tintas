// Importando as imagens da pasta assets
import acetinado from "/acetinado18L.jpg"
import baldeGeral from "/baldeGeral.jpg"
import barrica from "/barrica.jpg"
import decoraMais from "/decoraMais.jpg"
import economica3L from "/economica3L.jpg"
import economica18L from "/economica18L.jpg"
import elasticor18L from "/elasticor18L.jpg"
import galaoGeral from "/galaoGeral.jpg"
import impermeabilizante from "/impermeabilizante.jpg"
import litroGeral from "/litroGeral.jpg"
import pedrasNaturais from "/pedrasNaturais.jpg"
import rendeMais3L from "/rendeMais3L.jpg"
import rendeMais16L from "/rendeMais16L.jpg"
import rendeMais18L from "/rendeMais18L.jpg"
import semiBrilho18L from "/semiBrilho18L.jpg"
import standard3L from "/standard3L.jpg"
import standard18L from "/standard18L.jpg"
import superEconomica from "/superEconomica.jpg"

// Categorias de produtos expandidas
export const productCategories = [
  {
    id: "acrilica",
    name: "Tinta Acrílica",
    description: "Tintas à base de água, ideais para paredes internas e externas",
    image: acetinado,
  },
  {
    id: "latex",
    name: "Tinta Látex",
    description: "Tintas econômicas com boa cobertura para ambientes internos",
    image: baldeGeral,
  },
  {
    id: "esmalte",
    name: "Esmalte Sintético",
    description: "Tintas resistentes para madeira, metal e superfícies que exigem durabilidade",
    image: barrica,
  },
  {
    id: "texturizada",
    name: "Tinta Texturizada",
    description: "Tintas decorativas que criam efeitos e texturas especiais",
    image: decoraMais,
  },
  {
    id: "primer",
    name: "Primer e Selador",
    description: "Produtos preparatórios para melhor aderência e acabamento",
    image: economica3L,
  },
  {
    id: "verniz",
    name: "Verniz e Stain",
    description: "Produtos para proteção e realce da madeira natural",
    image: economica18L,
  },
  {
    id: "impermeabilizante",
    name: "Impermeabilizantes",
    description: "Produtos para vedação e proteção contra umidade",
    image: impermeabilizante,
  },
  {
    id: "massa",
    name: "Massas e Fundos",
    description: "Produtos para preparação e correção de superfícies",
    image: galaoGeral,
  },
]

// Tipos de acabamento expandidos
export const finishes = [
  { id: "fosco", name: "Fosco" },
  { id: "acetinado", name: "Acetinado" },
  { id: "semibrilho", name: "Semi-brilho" },
  { id: "brilhante", name: "Brilhante" },
  { id: "texturizado", name: "Texturizado" },
  { id: "cristal", name: "Cristal" },
]

// Capacidades em litros e quilos expandidas
export const liters = [
  { id: "25KG", name: "25 Kg" },
  { id: "18L", name: "18 Litros" },
  { id: "16L", name: "16 Litros" },
  { id: "12L", name: "12 Litros" },
  { id: "5.4KG", name: "5,4 Kg" },
  { id: "3.6L", name: "3,6 Litros" },
  { id: "1L", name: "1 Litro" },
]

// Cores disponíveis
export const colors = [
  { id: "branco", name: "Branco" },
  { id: "off-white", name: "Off-White" },
  { id: "bege", name: "Bege" },
  { id: "cinza", name: "Cinza" },
  { id: "azul", name: "Azul" },
  { id: "verde", name: "Verde" },
  { id: "vermelho", name: "Vermelho" },
  { id: "amarelo", name: "Amarelo" },
  { id: "transparente", name: "Transparente" },
]

// Marcas/Linhas de produtos
export const brands = [
  { id: "premium", name: "Premium" },
  { id: "standard", name: "Standard" },
  { id: "economica", name: "Econômica" },
  { id: "super-economica", name: "Super Econômica" },
  { id: "rende-mais", name: "Rende Mais" },
  { id: "elasticor", name: "Elasticor" },
  { id: "imperflex", name: "Imperflex" },
  { id: "veda-mais", name: "Veda Mais" },
]

// Todos os produtos expandidos baseados nos documentos Word
export const allProducts = [
  // Linha Premium
  {
    id: 1,
    name: "Tinta Acrílica Premium 18L",
    shortDescription: "Tinta acrílica premium de alta qualidade com excelente cobertura e durabilidade",
    image: acetinado,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 189.9,
    features: ["Lavável", "Sem cheiro", "Secagem rápida", "Anti-mofo", "Alta cobertura"],
    coverage: "12m²/L",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-premium-1",
    description:
      "Tinta acrílica premium desenvolvida com tecnologia avançada para proporcionar máxima durabilidade e beleza às suas paredes. Ideal para ambientes internos que exigem acabamento superior.",
  },
  {
    id: 2,
    name: "Tinta Acrílica Premium 3,6L",
    shortDescription: "Tinta acrílica premium em embalagem econômica",
    image: galaoGeral,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 45.9,
    features: ["Lavável", "Sem cheiro", "Secagem rápida", "Anti-mofo"],
    coverage: "12m²/L",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-premium-2",
    description:
      "Tinta acrílica premium em embalagem de 3,6L, perfeita para pequenos projetos e retoques com qualidade superior.",
  },
  {
    id: 3,
    name: "Tinta Acrílica Premium 1L",
    shortDescription: "Tinta acrílica premium para pequenos projetos",
    image: litroGeral,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 15.9,
    features: ["Lavável", "Sem cheiro", "Secagem rápida"],
    coverage: "12m²/L",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-premium-3",
    description:
      "Tinta acrílica premium em embalagem de 1L, ideal para retoques e pequenos reparos com qualidade profissional.",
  },

  // Linha Standard
  {
    id: 4,
    name: "Tinta Standard 18L",
    shortDescription: "Tinta acrílica com ótimo custo-benefício para grandes áreas",
    image: standard18L,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 149.9,
    features: ["Boa cobertura", "Fácil aplicação", "Secagem rápida", "Durável"],
    coverage: "10m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-standard-1",
    description:
      "Tinta acrílica Standard com excelente relação custo-benefício, ideal para grandes projetos residenciais e comerciais.",
  },
  {
    id: 5,
    name: "Tinta Standard 3,6L",
    shortDescription: "Tinta acrílica Standard em embalagem média",
    image: standard3L,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 35.9,
    features: ["Boa cobertura", "Fácil aplicação", "Secagem rápida"],
    coverage: "10m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-standard-2",
    description:
      "Tinta acrílica Standard em embalagem de 3,6L, perfeita para projetos de médio porte com qualidade garantida.",
  },
  {
    id: 6,
    name: "Tinta Standard 1L",
    shortDescription: "Tinta acrílica Standard para pequenos projetos",
    image: litroGeral,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 12.9,
    features: ["Boa cobertura", "Fácil aplicação"],
    coverage: "10m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-standard-3",
    description:
      "Tinta acrílica Standard em embalagem de 1L, ideal para retoques e pequenos reparos com qualidade confiável.",
  },

  // Linha Econômica
  {
    id: 7,
    name: "Tinta Econômica 18L",
    shortDescription: "Tinta látex econômica para grandes projetos",
    image: economica18L,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 119.9,
    features: ["Econômica", "Grande rendimento", "Boa cobertura"],
    coverage: "8m²/L",
    brand: "economica",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-economica-1",
    description: "Tinta látex econômica em embalagem de 18L para grandes projetos com excelente custo-benefício.",
  },
  {
    id: 8,
    name: "Tinta Econômica 3,6L",
    shortDescription: "Tinta látex econômica para projetos médios",
    image: economica3L,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 28.9,
    features: ["Econômica", "Boa cobertura", "Fácil aplicação"],
    coverage: "8m²/L",
    brand: "economica",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-economica-2",
    description:
      "Tinta látex econômica em embalagem de 3,6L, ideal para projetos de médio porte com economia garantida.",
  },
  {
    id: 9,
    name: "Tinta Econômica 1L",
    shortDescription: "Tinta látex econômica para pequenos projetos",
    image: litroGeral,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 9.9,
    features: ["Econômica", "Fácil aplicação"],
    coverage: "8m²/L",
    brand: "economica",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-economica-3",
    description: "Tinta látex econômica em embalagem de 1L, perfeita para retoques e pequenos reparos econômicos.",
  },

  // Linha Super Econômica
  {
    id: 10,
    name: "Tinta Super Econômica 18L",
    shortDescription: "Tinta látex super econômica para grandes volumes",
    image: superEconomica,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 99.9,
    features: ["Super econômica", "Grande volume", "Cobertura básica"],
    coverage: "7m²/L",
    brand: "super-economica",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-super-economica-1",
    description:
      "Tinta látex super econômica para grandes projetos onde o custo é prioridade, mantendo qualidade básica.",
  },
  {
    id: 11,
    name: "Tinta Super Econômica 3,6L",
    shortDescription: "Tinta látex super econômica em embalagem média",
    image: galaoGeral,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 24.9,
    features: ["Super econômica", "Cobertura básica"],
    coverage: "7m²/L",
    brand: "super-economica",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-super-economica-2",
    description: "Tinta látex super econômica em embalagem de 3,6L, ideal para projetos com orçamento limitado.",
  },

  // Linha Rende Mais
  {
    id: 12,
    name: "Rende Mais 18L",
    shortDescription: "Tinta com alto rendimento e cobertura superior",
    image: rendeMais18L,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 169.9,
    features: ["Alto rendimento", "Cobertura superior", "Lavável", "Durável"],
    coverage: "14m²/L",
    brand: "rende-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-rende-mais-1",
    description:
      "Tinta acrílica Rende Mais com tecnologia de alto rendimento, proporcionando maior cobertura por litro.",
  },
  {
    id: 13,
    name: "Rende Mais 16L",
    shortDescription: "Tinta com alto rendimento em embalagem de 16L",
    image: rendeMais16L,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "16L",
    color: "branco",
    price: 149.9,
    features: ["Alto rendimento", "Cobertura superior", "Lavável"],
    coverage: "14m²/L",
    brand: "rende-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-rende-mais-2",
    description: "Tinta acrílica Rende Mais em embalagem de 16L, ideal para projetos que exigem máximo rendimento.",
  },
  {
    id: 14,
    name: "Rende Mais 3,6L",
    shortDescription: "Tinta com alto rendimento em embalagem econômica",
    image: rendeMais3L,
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 39.9,
    features: ["Alto rendimento", "Cobertura superior"],
    coverage: "14m²/L",
    brand: "rende-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-rende-mais-3",
    description:
      "Tinta acrílica Rende Mais em embalagem de 3,6L, perfeita para projetos médios com máximo aproveitamento.",
  },

  // Linha Elasticor
  {
    id: 15,
    name: "Elasticor 18L",
    shortDescription: "Tinta elástica para proteção contra fissuras",
    image: elasticor18L,
    categoryId: "acrilica",
    area: "externo",
    finish: "fosco",
    liters: "18L",
    color: "branco",
    price: 219.9,
    features: ["Elástica", "Anti-fissuras", "Proteção UV", "Impermeável", "Durabilidade superior"],
    coverage: "10m²/L",
    brand: "elasticor",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-elasticor-1",
    description:
      "Tinta acrílica elástica Elasticor, especialmente desenvolvida para cobrir e prevenir fissuras em fachadas.",
  },
  {
    id: 16,
    name: "Elasticor 3,6L",
    shortDescription: "Tinta elástica em embalagem média",
    image: galaoGeral,
    categoryId: "acrilica",
    area: "externo",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 54.9,
    features: ["Elástica", "Anti-fissuras", "Proteção UV"],
    coverage: "10m²/L",
    brand: "elasticor",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-elasticor-2",
    description:
      "Tinta acrílica elástica Elasticor em embalagem de 3,6L, ideal para reparos e pequenas áreas externas.",
  },
  {
    id: 17,
    name: "Elasticor 1L",
    shortDescription: "Tinta elástica para pequenos reparos",
    image: litroGeral,
    categoryId: "acrilica",
    area: "externo",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 18.9,
    features: ["Elástica", "Anti-fissuras"],
    coverage: "10m²/L",
    brand: "elasticor",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-elasticor-3",
    description:
      "Tinta acrílica elástica Elasticor em embalagem de 1L, perfeita para retoques e pequenos reparos em fissuras.",
  },

  // Linha Acetinado
  {
    id: 18,
    name: "Acetinado 18L",
    shortDescription: "Tinta acrílica com acabamento acetinado lavável",
    image: acetinado,
    categoryId: "acrilica",
    area: "interno",
    finish: "acetinado",
    liters: "18L",
    color: "branco",
    price: 199.9,
    features: ["Acabamento acetinado", "Super lavável", "Resistente a manchas", "Durável"],
    coverage: "12m²/L",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-acetinado-1",
    description:
      "Tinta acrílica com acabamento acetinado, ideal para ambientes que exigem limpeza frequente e resistência.",
  },

  // Linha Semi-brilho
  {
    id: 19,
    name: "Semi-brilho 18L",
    shortDescription: "Tinta acrílica com acabamento semi-brilho",
    image: semiBrilho18L,
    categoryId: "acrilica",
    area: "interno",
    finish: "semibrilho",
    liters: "18L",
    color: "branco",
    price: 209.9,
    features: ["Acabamento semi-brilho", "Super lavável", "Resistente", "Elegante"],
    coverage: "11m²/L",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-semibrilho-1",
    description: "Tinta acrílica com acabamento semi-brilho, proporcionando elegância e facilidade de limpeza.",
  },

  // Impermeabilizantes - Linha Imperflex
  {
    id: 20,
    name: "Imperflex 12L",
    shortDescription: "Impermeabilizante acrílico flexível",
    image: impermeabilizante,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "12L",
    color: "branco",
    price: 159.9,
    features: ["Impermeável", "Flexível", "Resistente a intempéries", "Proteção UV"],
    coverage: "4m²/L",
    brand: "imperflex",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-imperflex-1",
    description:
      "Impermeabilizante acrílico flexível Imperflex, ideal para lajes, terraços e superfícies expostas à chuva.",
  },
  {
    id: 21,
    name: "Imperflex 3,6L",
    shortDescription: "Impermeabilizante acrílico em embalagem média",
    image: galaoGeral,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 54.9,
    features: ["Impermeável", "Flexível", "Resistente a intempéries"],
    coverage: "4m²/L",
    brand: "imperflex",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-imperflex-2",
    description: "Impermeabilizante acrílico flexível Imperflex em embalagem de 3,6L para pequenas áreas.",
  },
  {
    id: 22,
    name: "Imperflex 1L",
    shortDescription: "Impermeabilizante acrílico para pequenos reparos",
    image: litroGeral,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 18.9,
    features: ["Impermeável", "Flexível"],
    coverage: "4m²/L",
    brand: "imperflex",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-imperflex-3",
    description: "Impermeabilizante acrílico flexível Imperflex em embalagem de 1L para reparos pontuais.",
  },

  // Linha Veda Mais
  {
    id: 23,
    name: "Veda Mais 12L",
    shortDescription: "Impermeabilizante de alta performance",
    image: baldeGeral,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "12L",
    color: "branco",
    price: 179.9,
    features: ["Alta impermeabilização", "Resistente", "Durável", "Proteção máxima"],
    coverage: "3m²/L",
    brand: "veda-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-veda-mais-1",
    description: "Impermeabilizante Veda Mais de alta performance para máxima proteção contra infiltrações.",
  },
  {
    id: 24,
    name: "Veda Mais 3,6L",
    shortDescription: "Impermeabilizante de alta performance em embalagem média",
    image: galaoGeral,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "3.6L",
    color: "branco",
    price: 59.9,
    features: ["Alta impermeabilização", "Resistente", "Durável"],
    coverage: "3m²/L",
    brand: "veda-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-veda-mais-2",
    description: "Impermeabilizante Veda Mais em embalagem de 3,6L para projetos de médio porte.",
  },
  {
    id: 25,
    name: "Veda Mais 1L",
    shortDescription: "Impermeabilizante de alta performance para pequenos reparos",
    image: litroGeral,
    categoryId: "impermeabilizante",
    area: "externo",
    finish: "fosco",
    liters: "1L",
    color: "branco",
    price: 21.9,
    features: ["Alta impermeabilização", "Resistente"],
    coverage: "3m²/L",
    brand: "veda-mais",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-veda-mais-3",
    description: "Impermeabilizante Veda Mais em embalagem de 1L para reparos e pequenas áreas.",
  },

  // Seladores Acrílicos
  {
    id: 26,
    name: "Selador Acrílico 18L - Balde",
    shortDescription: "Selador acrílico para preparação de superfícies",
    image: baldeGeral,
    categoryId: "primer",
    area: "interno",
    finish: "fosco",
    liters: "18L",
    color: "transparente",
    price: 89.9,
    features: ["Alta penetração", "Fixa o pó", "Uniformiza absorção", "Base universal"],
    coverage: "20m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-selador-1",
    description: "Selador acrílico em balde de 18L para preparação de grandes superfícies antes da pintura.",
  },
  {
    id: 27,
    name: "Selador Acrílico 16L - Barrica",
    shortDescription: "Selador acrílico em embalagem barrica",
    image: barrica,
    categoryId: "primer",
    area: "interno",
    finish: "fosco",
    liters: "16L",
    color: "transparente",
    price: 79.9,
    features: ["Alta penetração", "Fixa o pó", "Uniformiza absorção"],
    coverage: "20m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-selador-2",
    description: "Selador acrílico em barrica de 16L, ideal para obras e projetos profissionais.",
  },
  {
    id: 28,
    name: "Selador Acrílico 3,6L - Galão",
    shortDescription: "Selador acrílico em galão",
    image: galaoGeral,
    categoryId: "primer",
    area: "interno",
    finish: "fosco",
    liters: "3.6L",
    color: "transparente",
    price: 24.9,
    features: ["Alta penetração", "Fixa o pó"],
    coverage: "20m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-selador-3",
    description: "Selador acrílico em galão de 3,6L para projetos de médio porte e preparação de superfícies.",
  },

  // Fundos para Pedras
  {
    id: 29,
    name: "Fundo para Pedras 12L",
    shortDescription: "Fundo especial para aplicação em pedras naturais",
    image: pedrasNaturais,
    categoryId: "primer",
    area: "externo",
    finish: "fosco",
    liters: "12L",
    color: "transparente",
    price: 119.9,
    features: ["Aderência em pedras", "Resistente a intempéries", "Base especial"],
    coverage: "15m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-fundo-pedras-1",
    description: "Fundo especialmente desenvolvido para preparação de pedras naturais antes da aplicação de tintas.",
  },
  {
    id: 30,
    name: "Fundo para Pedras 3,6L",
    shortDescription: "Fundo para pedras em embalagem média",
    image: galaoGeral,
    categoryId: "primer",
    area: "externo",
    finish: "fosco",
    liters: "3.6L",
    color: "transparente",
    price: 39.9,
    features: ["Aderência em pedras", "Resistente a intempéries"],
    coverage: "15m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-fundo-pedras-2",
    description: "Fundo para pedras em galão de 3,6L, ideal para pequenos projetos com pedras naturais.",
  },
  {
    id: 31,
    name: "Fundo para Pedras 1L",
    shortDescription: "Fundo para pedras em embalagem pequena",
    image: litroGeral,
    categoryId: "primer",
    area: "externo",
    finish: "fosco",
    liters: "1L",
    color: "transparente",
    price: 14.9,
    features: ["Aderência em pedras"],
    coverage: "15m²/L",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-fundo-pedras-3",
    description: "Fundo para pedras em embalagem de 1L para pequenos reparos e retoques em pedras naturais.",
  },

  // Massas Corridas
  {
    id: 32,
    name: "Massa Corrida 25Kg",
    shortDescription: "Massa corrida para correção de imperfeições em paredes",
    image: baldeGeral,
    categoryId: "massa",
    area: "interno",
    finish: "fosco",
    liters: "25KG",
    color: "branco",
    price: 45.9,
    features: ["Correção de imperfeições", "Fácil aplicação", "Boa aderência", "Secagem rápida"],
    coverage: "3m²/Kg",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-massa-corrida-1",
    description: "Massa corrida em saco de 25Kg para correção de imperfeições e preparação de paredes internas.",
  },
  {
    id: 33,
    name: "Massa Corrida 5,4Kg - Galão",
    shortDescription: "Massa corrida pronta para uso em galão",
    image: galaoGeral,
    categoryId: "massa",
    area: "interno",
    finish: "fosco",
    liters: "5.4KG",
    color: "branco",
    price: 18.9,
    features: ["Pronta para uso", "Correção de imperfeições", "Fácil aplicação"],
    coverage: "3m²/Kg",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-massa-corrida-2",
    description: "Massa corrida pronta para uso em galão de 5,4Kg, ideal para pequenos reparos e correções.",
  },

  // Texturas - Grafiato
  {
    id: 34,
    name: "Grafiato 25Kg",
    shortDescription: "Textura decorativa Grafiato para efeitos especiais",
    image: decoraMais,
    categoryId: "texturizada",
    area: "externo",
    finish: "texturizado",
    liters: "25KG",
    color: "branco",
    price: 89.9,
    features: ["Efeito grafiato", "Resistente a intempéries", "Decorativo", "Durável"],
    coverage: "2m²/Kg",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-grafiato-1",
    description: "Textura decorativa Grafiato em saco de 25Kg para criar efeitos únicos em fachadas e paredes.",
  },
  {
    id: 35,
    name: "Grafiato 5,4Kg",
    shortDescription: "Textura Grafiato em embalagem menor",
    image: galaoGeral,
    categoryId: "texturizada",
    area: "externo",
    finish: "texturizado",
    liters: "5.4KG",
    color: "branco",
    price: 24.9,
    features: ["Efeito grafiato", "Resistente a intempéries", "Decorativo"],
    coverage: "2m²/Kg",
    brand: "standard",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-grafiato-2",
    description: "Textura decorativa Grafiato em embalagem de 5,4Kg para pequenos projetos decorativos.",
  },

  // Texturas - Arenato Crystal Brilho
  {
    id: 36,
    name: "Arenato Crystal Brilho 25Kg",
    shortDescription: "Textura decorativa com efeito cristal brilhante",
    image: decoraMais,
    categoryId: "texturizada",
    area: "externo",
    finish: "cristal",
    liters: "25KG",
    color: "branco",
    price: 119.9,
    features: ["Efeito cristal", "Brilho especial", "Resistente", "Decorativo premium"],
    coverage: "2.5m²/Kg",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-arenato-crystal-1",
    description: "Textura decorativa Arenato Crystal com efeito brilhante especial para acabamentos sofisticados.",
  },
  {
    id: 37,
    name: "Arenato Crystal Brilho 5,4Kg",
    shortDescription: "Textura Crystal em embalagem menor",
    image: galaoGeral,
    categoryId: "texturizada",
    area: "externo",
    finish: "cristal",
    liters: "5.4KG",
    color: "branco",
    price: 34.9,
    features: ["Efeito cristal", "Brilho especial", "Decorativo premium"],
    coverage: "2.5m²/Kg",
    brand: "premium",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-arenato-crystal-2",
    description: "Textura decorativa Arenato Crystal em embalagem de 5,4Kg para projetos especiais.",
  },
]

// Função para normalizar texto (remover acentos e converter para minúsculas)
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
}

// Função para calcular a similaridade entre duas strings
const calculateSimilarity = (str1, str2) => {
  if (str1.length <= 3 || str2.length <= 3) {
    return str1 === str2
  }

  if (str1.includes(str2) || str2.includes(str1)) {
    return true
  }

  const words1 = str1.split(" ")
  const words2 = str2.split(" ")

  for (const word1 of words1) {
    if (word1.length <= 2) continue
    for (const word2 of words2) {
      if (word2.length <= 2) continue
      if (word1.includes(word2) || word2.includes(word1)) {
        return true
      }
    }
  }

  return false
}

// Função para buscar produtos por categoria
export const getProductsByCategory = (categoryId) => {
  return allProducts.filter((product) => product.categoryId === categoryId)
}

// Função para buscar produto por ID
export const getProductById = (id) => {
  return allProducts.find((product) => product.id === Number.parseInt(id))
}

// Função para buscar produtos por filtros com busca melhorada
export const getFilteredProducts = (filters) => {
  return allProducts.filter((product) => {
    const matchesCategory = !filters.category || product.categoryId === filters.category
    const matchesArea = !filters.area || product.area === filters.area
    const matchesFinish = !filters.finish || product.finish === filters.finish
    const matchesLiters = !filters.liters || product.liters === filters.liters
    const matchesColor = !filters.color || product.color === filters.color
    const matchesBrand = !filters.brand || product.brand === filters.brand

    let matchesSearch = true
    if (filters.search && filters.search.trim()) {
      const searchNormalized = normalizeText(filters.search)
      const nameNormalized = normalizeText(product.name)
      const descNormalized = normalizeText(product.shortDescription || "")
      const brandNormalized = normalizeText(brands.find((b) => b.id === product.brand)?.name || "")
      const categoryName = productCategories.find((c) => c.id === product.categoryId)?.name || ""
      const categoryNormalized = normalizeText(categoryName)

      matchesSearch =
        calculateSimilarity(nameNormalized, searchNormalized) ||
        calculateSimilarity(descNormalized, searchNormalized) ||
        calculateSimilarity(brandNormalized, searchNormalized) ||
        calculateSimilarity(categoryNormalized, searchNormalized)
    }

    return (
      matchesCategory && matchesArea && matchesFinish && matchesLiters && matchesColor && matchesBrand && matchesSearch
    )
  })
}

// Função para obter produtos em destaque
export const getFeaturedProducts = () => {
  return allProducts
    .filter((product) => product.brand === "premium" || product.brand === "elasticor" || product.brand === "rende-mais")
    .slice(0, 6)
}

// Função para obter produtos por faixa de preço
export const getProductsByPriceRange = (minPrice, maxPrice) => {
  return allProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
}
