"use client"

import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { register } from "swiper/element/bundle"
import styles from "./ProductCarousel.module.css"

// Registra os componentes Swiper
register()

const ProductCarousel = ({ products, showNavigation = true, autoplay = true }) => {
  const swiperElRef = useRef(null)

  useEffect(() => {
    // Objeto de configuração do Swiper
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: showNavigation,
      loop: true,
      breakpoints: {
        // Quando a largura da janela é >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // Quando a largura da janela é >= 768px
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        // Quando a largura da janela é >= 1024px
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        // Quando a largura da janela é >= 1200px
        1200: {
          slidesPerView: 8,
          spaceBetween: 10,
        },
      },
    }

    // Adiciona autoplay se necessário
    if (autoplay) {
      swiperParams.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }
    }

    // Atribui os parâmetros ao elemento Swiper
    Object.assign(swiperElRef.current, swiperParams)

    // Inicializa o Swiper
    swiperElRef.current.initialize()
  }, [showNavigation, autoplay])

  return (
    <div className={styles.carouselContainer}>
      <swiper-container ref={swiperElRef} init="false" class={styles.swiperContainer}>
        {products.map((product) => (
          <swiper-slide key={product.id} class={styles.swiperSlide}>
            <Link to="/nossas-tintas" className={styles.productLink}>
              <div className={styles.productImageContainer}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name || product.title}
                  className={styles.productImage}
                />
                <div className={styles.productOverlay}>
                  <span className={styles.productName}>{product.name || product.title}</span>
                </div>
              </div>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default ProductCarousel
