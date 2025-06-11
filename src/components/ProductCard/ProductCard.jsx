import styles from "./ProductCard.module.css"

const ProductCard = ({
  image,
  title,
  description,
  link,
  area,
  finish,
  price,
  features,
  brand,
  whatsappNumber,
  mercadoLivreUrl,
  showWhatsApp = true,
  showMercadoLivre = true,
}) => {
  // Função para formatar preço em reais
  const formatPrice = (value) => {
    return (
      value?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) || ""
    )
  }

  // Função para criar mensagem do WhatsApp
  const createWhatsAppLink = () => {
    if (!whatsappNumber) return "#"
    const message = encodeURIComponent(`Olá! Estou interessado no produto: ${title}. Poderia me dar mais informações?`)
    return `https://wa.me/${whatsappNumber}?text=${message}`
  }

  return (
    <div className={`${styles.productCard} productCard`}>
      <div className={styles.productHeader}>
        <div className={`${styles.productImageContainer} productImageContainer`}>
          <img src={image || "/placeholder.svg"} alt={title} className={styles.productImage} />
        </div>
        <h3 className={styles.productTitle}>{title}</h3>
      </div>

      <div className={styles.productMeta}>
        {brand && <span className={styles.productBrand}>{brand}</span>}
        <div className={styles.productTags}>
          {area && <span className={styles.productTag}>{area === "interno" ? "Uso Interno" : "Uso Externo"}</span>}
          {finish && <span className={styles.productTag}>{finish.charAt(0).toUpperCase() + finish.slice(1)}</span>}
        </div>
      </div>

      <p className={styles.productDescription}>{description}</p>

      {features && features.length > 0 && (
        <ul className={styles.productFeatures}>
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className={styles.productFeature}>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {price && (
        <div className={styles.productPrice}>
          <span>{formatPrice(price)}</span>
        </div>
      )}

      <div className={styles.productActions}>
        <div className={styles.actionButtons}>
          {showWhatsApp && whatsappNumber && (
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
              aria-label="Contato via WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          )}

          {showMercadoLivre && mercadoLivreUrl && (
            <a
              href={mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mercadoLivreButton}
              aria-label="Comprar no Mercado Livre"
            >
              <i className="fas fa-shopping-cart"></i>
              <span>Mercado Livre</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
