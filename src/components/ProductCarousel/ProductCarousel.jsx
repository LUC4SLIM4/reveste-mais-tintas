"use client"

import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { register } from "swiper/element/bundle"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./ProductCarousel.module.css"

// Registra os componentes Swiper
register()

const ProductCarousel = ({ products, showNavigation = true, autoplay = true }) => {
  const swiperElRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Objeto de configuração do Swiper
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      speed: 600,
      initialSlide: 1,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
        },
        480: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3,
        },
      },
    }

    // Adiciona autoplay se necessário
    if (autoplay) {
      swiperParams.autoplay = {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }
    }

    // Atribui os parâmetros ao elemento Swiper
    Object.assign(swiperElRef.current, swiperParams)

    // Inicializa o Swiper
    swiperElRef.current.initialize()

    // Adiciona evento para rastrear o slide ativo
    swiperElRef.current.addEventListener("slidechange", (event) => {
      if (event.detail[0].activeIndex !== undefined) {
        setActiveIndex(event.detail[0].realIndex)
      }
    })
  }, [showNavigation, autoplay])

  const handlePrev = () => {
    if (swiperElRef.current) {
      swiperElRef.current.swiper.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperElRef.current) {
      swiperElRef.current.swiper.slideNext()
    }
  }

  // Formatar preço em reais
  const formatPrice = (price) => {
    return (
      price?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) || ""
    )
  }

  return (
    <div className={styles.carouselContainer}>
      <swiper-container ref={swiperElRef} init="false" class={styles.swiperContainer}>
        {products.map((product, index) => (
          <swiper-slide key={product.id} class={styles.swiperSlide}>
            <Link to="/nossas-tintas" className={styles.productLink}>
              <div className={styles.productCard}>
                <div className={styles.productImageContainer}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name || product.title}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.name || product.title}</h3>

                  {product.price && (
                    <div className={styles.productPrice}>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
                      )}
                      <span className={styles.currentPrice}>{formatPrice(product.price)}</span>
                    </div>
                  )}

                  {product.brand && <div className={styles.productBrand}>{product.brand}</div>}

                  <div className={styles.productActions}>
                    <button className={styles.addToCartButton}>Ver detalhes</button>
                  </div>
                </div>
              </div>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>

      {showNavigation && (
        <div className={styles.navigationButtons}>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductCarousel
