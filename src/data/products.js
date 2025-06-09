// Importando as imagens da pasta assets
import acrilicaImg from "/acrilica.svg"
import latexImg from "/latex.svg"
import decorativaImg from "/decorativa.svg"
import bambuImg from "/bambu.svg"
import rendaImg from "/renda.svg"



// Categorias de produtos
export const productCategories = [
  {
    id: "acrilica",
    name: "Tinta Acrílica",
    description: "Tintas à base de água, ideais para paredes internas e externas",
    image: acrilicaImg, // ou images.acrilica
  },
  {
    id: "latex",
    name: "Tinta Látex",
    description: "Tintas econômicas com boa cobertura para ambientes internos",
    image: latexImg, // ou images.latex
  },
  {
    id: "esmalte",
    name: "Esmalte Sintético",
    description: "Tintas resistentes para madeira, metal e superfícies que exigem durabilidade",
    image: decorativaImg, // ou images.decorativa
  },
  {
    id: "texturizada",
    name: "Tinta Texturizada",
    description: "Tintas decorativas que criam efeitos e texturas especiais",
    image: rendaImg, // ou images.renda
  },
  {
    id: "primer",
    name: "Primer e Selador",
    description: "Produtos preparatórios para melhor aderência e acabamento",
    image: seladorImg, // ou images.selador
  },
  {
    id: "verniz",
    name: "Verniz e Stain",
    description: "Produtos para proteção e realce da madeira natural",
    image: bambuImg, // ou images.bambu
  },
]

// Todos os produtos
export const allProducts = [
  // Tintas Acrílicas
  {
    id: 1,
    name: "Tinta Acrílica Premium Branca",
    shortDescription: "Tinta acrílica de alta qualidade com excelente cobertura",
    image: acrilicaImg, // Usando a imagem importada
    categoryId: "acrilica",
    area: "interno",
    finish: "fosco",
    color: "branco",
    price: 89.9,
    features: ["Lavável", "Sem cheiro", "Secagem rápida", "Anti-mofo"],
    coverage: "12m²/L",
    brand: "Premium Paint",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123456",
    description:
      "Tinta acrílica premium desenvolvida com tecnologia avançada para proporcionar máxima durabilidade e beleza às suas paredes.",
  },
  {
    id: 2,
    name: "Acrílica Exterior Resistente",
    shortDescription: "Proteção máxima contra intempéries",
    image: acrilicaImg,
    categoryId: "acrilica",
    area: "externo",
    finish: "acetinado",
    color: "branco",
    price: 125.5,
    features: ["Proteção UV", "Resistente à chuva", "Anti-desbotamento", "Durabilidade 8 anos"],
    coverage: "10m²/L",
    brand: "Exterior Pro",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123457",
    description: "Tinta acrílica especialmente formulada para resistir às condições climáticas mais severas.",
  },
  {
    id: 3,
    name: "Acrílica Colorida Azul Oceano",
    shortDescription: "Cor vibrante e duradoura",
    image: acrilicaImg,
    categoryId: "acrilica",
    area: "interno",
    finish: "semibrilho",
    color: "azul",
    price: 95.8,
    features: ["Cor intensa", "Lavável", "Resistente ao desbotamento"],
    coverage: "11m²/L",
    brand: "Color Plus",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123458",
    description: "Tinta acrílica com pigmentação especial que garante cores vivas e duradouras.",
  },

  // Tintas Látex
  {
    id: 4,
    name: "Látex Econômico Branco",
    shortDescription: "Ótimo custo-benefício para grandes áreas",
    image: latexImg,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    color: "branco",
    price: 45.9,
    features: ["Boa cobertura", "Fácil aplicação", "Secagem rápida"],
    coverage: "8m²/L",
    brand: "Econom",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123459",
    description: "Tinta látex com excelente relação custo-benefício, ideal para renovações econômicas.",
  },
  {
    id: 5,
    name: "Látex Lavável Premium",
    shortDescription: "Resistência superior para áreas de alto tráfego",
    image: latexImg,
    categoryId: "latex",
    area: "interno",
    finish: "acetinado",
    color: "off-white",
    price: 67.4,
    features: ["Super lavável", "Resistente a riscos", "Anti-manchas"],
    coverage: "10m²/L",
    brand: "Resist",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123460",
    description: "Tinta látex com tecnologia anti-manchas, perfeita para corredores e áreas de grande circulação.",
  },
  {
    id: 6,
    name: "Látex Colorido Verde Menta",
    shortDescription: "Cor suave e relaxante",
    image: latexImg,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    color: "verde",
    price: 52.3,
    features: ["Cor suave", "Boa cobertura", "Fácil retoque"],
    coverage: "9m²/L",
    brand: "Soft Colors",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123461",
    description: "Tinta látex em tons suaves, ideal para criar ambientes aconchegantes e relaxantes.",
  },

  // Esmaltes Sintéticos
  {
    id: 7,
    name: "Esmalte Sintético Branco Brilhante",
    shortDescription: "Acabamento brilhante e resistente",
    image: decorativaImg,
    categoryId: "esmalte",
    area: "externo",
    finish: "brilhante",
    color: "branco",
    price: 78.6,
    features: ["Alto brilho", "Anti-ferrugem", "Resistente a intempéries"],
    coverage: "12m²/L",
    brand: "Brilho Max",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123462",
    description: "Esmalte sintético de alta qualidade com acabamento brilhante duradouro.",
  },
  {
    id: 8,
    name: "Esmalte Azul Marinho Acetinado",
    shortDescription: "Elegância e proteção em um só produto",
    image: decorativaImg,
    categoryId: "esmalte",
    area: "externo",
    finish: "acetinado",
    color: "azul",
    price: 85.2,
    features: ["Proteção anticorrosiva", "Resistente a riscos", "Acabamento elegante"],
    coverage: "10m²/L",
    brand: "Marine Pro",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123463",
    description: "Esmalte sintético com proteção superior contra corrosão e desgaste.",
  },
  {
    id: 9,
    name: "Esmalte Vermelho Ferrari",
    shortDescription: "Cor vibrante para projetos especiais",
    image: decorativaImg,
    categoryId: "esmalte",
    area: "interno",
    finish: "brilhante",
    color: "vermelho",
    price: 92.8,
    features: ["Cor intensa", "Alto brilho", "Resistente ao desbotamento"],
    coverage: "11m²/L",
    brand: "Intense Color",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123464",
    description: "Esmalte sintético com pigmentação especial para cores vibrantes e impactantes.",
  },

  // Tintas Texturizadas
  {
    id: 10,
    name: "Textura Rústica Areia",
    shortDescription: "Efeito rústico natural",
    image: rendaImg,
    categoryId: "texturizada",
    area: "interno",
    finish: "texturizado",
    color: "bege",
    price: 145.0,
    features: ["Efeito rústico", "Disfarça imperfeições", "Fácil aplicação"],
    coverage: "4m²/L",
    brand: "Rustic Art",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123465",
    description: "Tinta texturizada que cria efeitos rústicos únicos, perfeita para decoração diferenciada.",
  },
  {
    id: 11,
    name: "Textura Moderna Cimento Queimado",
    shortDescription: "Visual industrial moderno",
    image: rendaImg,
    categoryId: "texturizada",
    area: "interno",
    finish: "texturizado",
    color: "cinza",
    price: 168.9,
    features: ["Efeito cimento queimado", "Resistente", "Moderno"],
    coverage: "3m²/L",
    brand: "Urban Style",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123466",
    description: "Textura que reproduz o efeito cimento queimado, ideal para ambientes modernos e industriais.",
  },
  {
    id: 12,
    name: "Textura Decorativa Mármore",
    shortDescription: "Elegância do mármore sem o peso",
    image: rendaImg,
    categoryId: "texturizada",
    area: "interno",
    finish: "texturizado",
    color: "branco",
    price: 195.5,
    features: ["Efeito mármore", "Luxuoso", "Durável"],
    coverage: "2.5m²/L",
    brand: "Marble Effect",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123467",
    description: "Textura decorativa que simula mármore natural com acabamento sofisticado.",
  },

  // Primers e Seladores
  {
    id: 13,
    name: "Primer Preparador Universal",
    shortDescription: "Base perfeita para qualquer tinta",
    image: seladorImg,
    categoryId: "primer",
    area: "interno",
    finish: "fosco",
    color: "branco",
    price: 55.8,
    features: ["Aderência superior", "Uniformiza absorção", "Base universal"],
    coverage: "15m²/L",
    brand: "Base Pro",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123468",
    description: "Primer de alta qualidade que prepara a superfície para receber qualquer tipo de tinta.",
  },
  {
    id: 14,
    name: "Selador Acrílico Concentrado",
    shortDescription: "Máxima penetração e fixação",
    image: seladorImg,
    categoryId: "primer",
    area: "externo",
    finish: "fosco",
    color: "transparente",
    price: 48.9,
    features: ["Alta penetração", "Fixa o pó", "Econômico"],
    coverage: "20m²/L",
    brand: "Seal Max",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123469",
    description: "Selador concentrado que penetra profundamente, fixando partículas soltas.",
  },
  {
    id: 15,
    name: "Primer Anti-Mofo",
    shortDescription: "Proteção contra fungos e bactérias",
    image: seladorImg,
    categoryId: "primer",
    area: "interno",
    finish: "fosco",
    color: "branco",
    price: 72.4,
    features: ["Anti-mofo", "Anti-bactérias", "Proteção duradoura"],
    coverage: "12m²/L",
    brand: "Bio Shield",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123470",
    description: "Primer com aditivos especiais que previnem o crescimento de fungos e bactérias.",
  },

  // Vernizes e Stains
  {
    id: 16,
    name: "Verniz Marítimo Transparente",
    shortDescription: "Proteção máxima para madeiras externas",
    image: bambuImg,
    categoryId: "verniz",
    area: "externo",
    finish: "brilhante",
    color: "transparente",
    price: 118.7,
    features: ["Proteção UV", "Resistente à água", "Flexível"],
    coverage: "14m²/L",
    brand: "Marine Coat",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123471",
    description: "Verniz especial para madeiras expostas ao tempo, com proteção UV superior.",
  },
  {
    id: 17,
    name: "Stain Imbuia Acetinado",
    shortDescription: "Realça a beleza natural da madeira",
    image: bambuImg,
    categoryId: "verniz",
    area: "interno",
    finish: "acetinado",
    color: "marrom",
    price: 89.3,
    features: ["Realça veios", "Proteção natural", "Fácil aplicação"],
    coverage: "16m²/L",
    brand: "Wood Beauty",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123472",
    description: "Stain que penetra na madeira realçando sua beleza natural com proteção duradoura.",
  },
  {
    id: 18,
    name: "Verniz Poliuretano Incolor",
    shortDescription: "Resistência extrema para pisos",
    image: bambuImg,
    categoryId: "verniz",
    area: "interno",
    finish: "semibrilho",
    color: "transparente",
    price: 156.9,
    features: ["Ultra resistente", "Anti-risco", "Para alto tráfego"],
    coverage: "12m²/L",
    brand: "Floor Pro",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123473",
    description: "Verniz poliuretano de alta resistência, ideal para pisos de madeira com grande circulação.",
  },

  // Produtos adicionais para demonstrar filtros
  {
    id: 19,
    name: "Acrílica Amarelo Girassol",
    shortDescription: "Cor alegre e vibrante",
    image: acrilicaImg,
    categoryId: "acrilica",
    area: "interno",
    finish: "acetinado",
    color: "amarelo",
    price: 98.5,
    features: ["Cor vibrante", "Lavável", "Boa cobertura"],
    coverage: "11m²/L",
    brand: "Sunny Colors",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123474",
    description: "Tinta acrílica em tom amarelo vibrante, perfeita para ambientes alegres e acolhedores.",
  },
  {
    id: 20,
    name: "Látex Rosa Suave",
    shortDescription: "Delicadeza em cada pincelada",
    image: latexImg,
    categoryId: "latex",
    area: "interno",
    finish: "fosco",
    color: "rosa",
    price: 58.9,
    features: ["Tom suave", "Ideal para quartos", "Boa cobertura"],
    coverage: "9m²/L",
    brand: "Sweet Home",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-123475",
    description: "Tinta látex em tom rosa delicado, ideal para criar ambientes aconchegantes e femininos.",
  },
]

// Função para buscar produtos por categoria
export const getProductsByCategory = (categoryId) => {
  return allProducts.filter((product) => product.categoryId === categoryId)
}

// Função para buscar produto por ID
export const getProductById = (id) => {
  return allProducts.find((product) => product.id === Number.parseInt(id))
}

// Função para buscar produtos por filtros
export const getFilteredProducts = (filters) => {
  return allProducts.filter((product) => {
    const matchesCategory = !filters.category || product.categoryId === filters.category
    const matchesArea = !filters.area || product.area === filters.area
    const matchesFinish = !filters.finish || product.finish === filters.finish
    const matchesColor = !filters.color || product.color === filters.color
    const matchesSearch =
      !filters.search ||
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(filters.search.toLowerCase())

    return matchesCategory && matchesArea && matchesFinish && matchesColor && matchesSearch
  })
}
