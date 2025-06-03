export const featuredProducts = [
  {
    id: 'premium-acrilico',
    name: 'Premium Acrílico',
    shortDescription: 'Tinta premium com acabamento acetinado, alta cobertura e resistência a lavabilidade.',
    fullDescription: 'Nossa tinta Premium Acrílico oferece um acabamento acetinado de alta qualidade, com excelente cobertura e resistência a lavabilidade. Ideal para ambientes internos e externos, proporciona um acabamento sofisticado e duradouro.',
    features: [
      'Alta cobertura',
      'Resistente à lavabilidade',
      'Acabamento acetinado',
      'Baixo odor',
      'Secagem rápida'
    ],
    category: 'Tintas Internas e Externas',
    image: '/src/assets/products/premium-acrilico.jpg'
  },
  {
    id: 'esmalte-sintetico',
    name: 'Esmalte Sintético',
    shortDescription: 'Esmalte de alta qualidade para madeiras e metais, com excelente acabamento e durabilidade.',
    fullDescription: 'O Esmalte Sintético Reveste Mais é ideal para superfícies de madeira e metal, proporcionando um acabamento brilhante, semibrilho ou fosco de alta qualidade. Oferece excelente cobertura, resistência e durabilidade.',
    features: [
      'Alta cobertura',
      'Resistente a intempéries',
      'Acabamento brilhante, semibrilho ou fosco',
      'Fácil aplicação',
      'Secagem rápida'
    ],
    category: 'Esmaltes',
    image: '/src/assets/products/esmalte-sintetico.jpg'
  },
  {
    id: 'textura-premium',
    name: 'Textura Premium',
    shortDescription: 'Revestimento texturizado para fachadas e paredes internas, com alta resistência e durabilidade.',
    fullDescription: 'A Textura Premium Reveste Mais é um revestimento texturizado de alta qualidade para fachadas e paredes internas. Proporciona um acabamento decorativo com excelente resistência a intempéries e durabilidade.',
    features: [
      'Alta resistência',
      'Acabamento decorativo',
      'Disfarça imperfeições',
      'Fácil aplicação',
      'Diversas granulometrias'
    ],
    category: 'Texturas',
    image: '/src/assets/products/textura-premium.jpg'
  },
  {
    id: 'verniz-maritimo',
    name: 'Verniz Marítimo',
    shortDescription: 'Verniz especial para áreas externas e internas, com proteção UV e alta resistência à umidade.',
    fullDescription: 'O Verniz Marítimo Reveste Mais é ideal para áreas externas e internas, oferecendo proteção UV e alta resistência à umidade. Proporciona um acabamento transparente que valoriza a beleza natural da madeira.',
    features: [
      'Proteção UV',
      'Alta resistência à umidade',
      'Acabamento brilhante ou acetinado',
      'Fácil aplicação',
      'Secagem rápida'
    ],
    category: 'Vernizes',
    image: '/src/assets/products/verniz-maritimo.jpg'
  }
];

export const allProducts = [
  ...featuredProducts,
  {
    id: 'tinta-epoxi',
    name: 'Tinta Epóxi',
    shortDescription: 'Tinta de alta resistência para pisos e superfícies de concreto, com excelente durabilidade.',
    fullDescription: 'A Tinta Epóxi Reveste Mais é ideal para pisos e superfícies de concreto, oferecendo alta resistência a produtos químicos, abrasão e impactos. Proporciona um acabamento brilhante de alta durabilidade.',
    features: [
      'Alta resistência química',
      'Resistente à abrasão',
      'Acabamento brilhante',
      'Fácil limpeza',
      'Impermeável'
    ],
    category: 'Tintas Especiais',
    image: '/src/assets/products/tinta-epoxi.jpg'
  },
  {
    id: 'massa-corrida',
    name: 'Massa Corrida',
    shortDescription: 'Massa niveladora para paredes internas, com ótima aderência e fácil lixamento.',
    fullDescription: 'A Massa Corrida Reveste Mais é ideal para nivelar e corrigir imperfeições em paredes internas. Oferece ótima aderência, fácil aplicação e lixamento, proporcionando um acabamento liso e uniforme.',
    features: [
      'Ótima aderência',
      'Fácil aplicação',
      'Fácil lixamento',
      'Acabamento liso',
      'Secagem rápida'
    ],
    category: 'Massas e Texturas',
    image: '/src/assets/products/massa-corrida.jpg'
  },
  {
    id: 'tinta-piso',
    name: 'Tinta para Piso',
    shortDescription: 'Tinta especial para pisos de concreto, com alta resistência à abrasão e durabilidade.',
    fullDescription: 'A Tinta para Piso Reveste Mais é ideal para pisos de concreto, oferecendo alta resistência à abrasão, intempéries e tráfego. Proporciona um acabamento semibrilho de alta durabilidade.',
    features: [
      'Alta resistência à abrasão',
      'Resistente a intempéries',
      'Acabamento semibrilho',
      'Fácil aplicação',
      'Secagem rápida'
    ],
    category: 'Tintas Especiais',
    image: '/src/assets/products/tinta-piso.jpg'
  },
  {
    id: 'selador-acrilico',
    name: 'Selador Acrílico',
    shortDescription: 'Selador para paredes internas e externas, com ótima aderência e rendimento.',
    fullDescription: 'O Selador Acrílico Reveste Mais é ideal para preparar superfícies internas e externas antes da pintura. Oferece ótima aderência, uniformiza a absorção e aumenta o rendimento da tinta de acabamento.',
    features: [
      'Ótima aderência',
      'Uniformiza a absorção',
      'Aumenta o rendimento da tinta',
      'Fácil aplicação',
      'Secagem rápida'
    ],
    category: 'Preparadores',
    image: '/src/assets/products/selador-acrilico.jpg'
  }
];

export const productCategories = [
  {
    id: 'tintas-internas-externas',
    name: 'Tintas Internas e Externas',
    description: 'Linha completa de tintas para ambientes internos e externos, com diversas opções de acabamento e durabilidade.'
  },
  {
    id: 'esmaltes',
    name: 'Esmaltes',
    description: 'Esmaltes de alta qualidade para madeiras e metais, com excelente acabamento e durabilidade.'
  },
  {
    id: 'vernizes',
    name: 'Vernizes',
    description: 'Vernizes para madeiras internas e externas, com proteção UV e alta resistência à umidade.'
  },
  {
    id: 'texturas',
    name: 'Texturas',
    description: 'Revestimentos texturizados para fachadas e paredes internas, com alta resistência e durabilidade.'
  },
  {
    id: 'massas-texturas',
    name: 'Massas e Texturas',
    description: 'Massas niveladoras e texturas decorativas para paredes internas e externas.'
  },
  {
    id: 'preparadores',
    name: 'Preparadores',
    description: 'Produtos para preparação de superfícies antes da pintura, como seladores, fundos e primers.'
  },
  {
    id: 'tintas-especiais',
    name: 'Tintas Especiais',
    description: 'Tintas especiais para aplicações específicas, como pisos, telhados e superfícies metálicas.'
  }
];