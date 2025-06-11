import { Link } from "react-router-dom"
import styles from "./HeroBanner.module.css"

const HeroBanner = ({ title, subtitle, ctaText, ctaLink, video }) => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <div className={styles.heroActions}>
              <Link to={ctaLink} className={styles.ctaButton}>
                {ctaText}
              </Link>
              <Link to="/contato" className={styles.secondaryButton}>
                Fale Conosco
              </Link>
            </div>
          </div>

          <div className={styles.videoContent}>
            <div className={styles.videoWrapper}>
              <video className={styles.heroVideo} autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className={styles.videoOverlay}></div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
          <span>Role para baixo</span>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
