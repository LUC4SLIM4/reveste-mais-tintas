// Alternativa: Criar um arquivo separado para gerenciar todas as importações de imagens
// Isso deixa o código mais organizado

// Importar todas as imagens
import acrilica from "/acrilica.svg"
import latex from "/latex.svg"
import decorativa from "/decorativa.svg"
import economica from "/economica.svg"
import bambu from "/bambu.svg"
import pedra from "/pedra.svg"
import logo from "/logo.svg"
import renda from "/renda.svg"
import semi from "/semi.svg"
import selador from "/SELADORACRIL.svg"
import superEconom from "/superEconom.svg"
import video from "/video.mp4"

// Exportar como objeto organizado
export const productImages = {
  acrilica,
  latex,
  decorativa,
  economica,
  bambu,
  pedra,
  logo,
  renda,
  semi,
  selador,
  superEconom,
  video,
}

// Função helper para buscar imagem por categoria
export const getImageByCategory = (categoryId) => {
  const imageMap = {
    acrilica: productImages.acrilica,
    latex: productImages.latex,
    esmalte: productImages.decorativa,
    texturizada: productImages.renda,
    primer: productImages.selador,
    verniz: productImages.bambu,
  }

  return imageMap[categoryId] || productImages.logo
}

// Função para buscar imagem por nome do produto
export const getImageByProductName = (productName) => {
  const name = productName.toLowerCase()

  if (name.includes("acrílica") || name.includes("acrilica")) {
    return productImages.acrilica
  }
  if (name.includes("látex") || name.includes("latex")) {
    return productImages.latex
  }
  if (name.includes("esmalte")) {
    return productImages.decorativa
  }
  if (name.includes("textura")) {
    return productImages.renda
  }
  if (name.includes("primer") || name.includes("selador")) {
    return productImages.selador
  }
  if (name.includes("verniz") || name.includes("stain")) {
    return productImages.bambu
  }

  return productImages.logo // imagem padrão
}
