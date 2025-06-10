"use client"

import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"
import { MessageCircle, ShoppingCart, ExternalLink } from "lucide-react"

const ProductCard = ({
  image,
  title,
  description,
  link,
  area,
  finish,
  price,
  features = [],
  brand,
  whatsappNumber = "5511999999999", // Número do WhatsApp da fábrica
  mercadoLivreUrl = "", // URL do produto no Mercado Livre
  showWhatsApp = true, // Mostrar botão WhatsApp
  showMercadoLivre = false, // Mostrar botão Mercado Livre
}) => {
  // Função para gerar mensagem do WhatsApp
  const generateWhatsAppMessage = () => {
    const message = `Olá! Tenho interesse no produto: *${title}*
    
Preço: R$ ${price ? price.toFixed(2).replace(".", ",") : "Consultar"}
Área: ${area === "interno" ? "Uso Interno" : "Uso Externo"}
Acabamento: ${finish ? finish.charAt(0).toUpperCase() + finish.slice(1) : ""}

Gostaria de mais informações sobre este produto.`

    return encodeURIComponent(message)
  }

  // Função para abrir WhatsApp
  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  // Função para abrir Mercado Livre
  const handleMercadoLivreClick = (e) => {
    e.preventDefault()
    if (mercadoLivreUrl) {
      window.open(mercadoLivreUrl, "_blank")
    }
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image || "/placeholder.svg?height=200&width=200"} alt={title} />
        {area && <div className={styles.badge}>{area === "interno" ? "Interno" : "Externo"}</div>}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {brand && <span className={styles.brand}>{brand}</span>}
        </div>

        <p className={styles.description}>{description}</p>

        {finish && <div className={styles.finishBadge}>{finish.charAt(0).toUpperCase() + finish.slice(1)}</div>}

        {features.length > 0 && (
          <div className={styles.features}>
            {features.slice(0, 3).map((feature, index) => (
              <span key={index} className={styles.feature}>
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          {price && (
            <div className={styles.price}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>{price.toFixed(2).replace(".", ",")}</span>
            </div>
          )}

          <div className={styles.actions}>
            {/* Botão WhatsApp */}
            {showWhatsApp && (
              <button
                onClick={handleWhatsAppClick}
                className={`${styles.actionButton} ${styles.whatsappButton}`}
                title="Falar no WhatsApp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
            )}

            {/* Botão Mercado Livre */}
            {showMercadoLivre && mercadoLivreUrl && (
              <button
                onClick={handleMercadoLivreClick}
                className={`${styles.actionButton} ${styles.mercadoLivreButton}`}
                title="Ver no Mercado Livre"
              >
                <ShoppingCart size={16} />
                <span>Mercado Livre</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
