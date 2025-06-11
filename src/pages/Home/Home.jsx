import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel"
import ColorSwatch from "../../components/ColorSwatch/ColorSwatch"
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard"
import { allProducts } from "../../data/products"
import { popularColors } from "../../data/colors"
import { blogPosts } from "../../data/blog"
import videoLoja from "/video.mp4"

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroBanner
        title="Transforme seu ambiente com cores que inspiram"
        subtitle="Descubra a qualidade e durabilidade das tintas Reveste Mais"
        ctaText="Conheça nossos produtos"
        ctaLink="/produtos"
        video={videoLoja}
      />

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <img src="/src/assets/about-home.jpg" alt="Sobre a Reveste Mais Tintas" />
            </div>
            <div className={styles.aboutText}>
              <h2>Reveste Mais Tintas</h2>
              <p className={styles.aboutSubtitle}>Qualidade e inovação em cada pincelada</p>
              <p>
                Há mais de 15 anos no mercado, a Reveste Mais Tintas se destaca pela excelência em produtos para pintura
                residencial e comercial. Nosso compromisso é oferecer tintas de alta qualidade, com cores vibrantes e
                duradouras, que transformam ambientes e valorizam seu imóvel.
              </p>
              <p>
                Com uma linha completa de produtos desenvolvidos com tecnologia avançada, garantimos resultados
                superiores em cobertura, rendimento e resistência.
              </p>
              <Link to="/sobre" className="btn btn-primary">
                Conheça nossa história
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.productsSection}`}>
        <div className="container-fluid">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className={styles.sectionDescription}>
            Conheça nossa linha completa de tintas para todas as suas necessidades
          </p>

          {/* Carrossel de produtos substituindo a grade estática */}
          <ProductCarousel products={allProducts} />

          <div className="text-center mt-4">
            <Link to="/nossas-tintas" className="btn btn-outline">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.colorsSection}`}>
        <div className="container">
          <h2 className="section-title">Catálogo de Cores</h2>
          <p className={styles.sectionDescription}>
            Explore nossa paleta exclusiva e encontre a cor perfeita para seu projeto
          </p>

          <div className={styles.colorsGrid}>
            {popularColors.slice(0, 8).map((color) => (
              <ColorSwatch key={color.id} color={color.hex} name={color.name} code={color.code} />
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/catalogo-de-cores" className="btn btn-outline">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.blogSection}`}>
        <div className="container">
          <h2 className="section-title">Dicas de Pintura</h2>
          <p className={styles.sectionDescription}>Confira nossas dicas e tutoriais para um resultado perfeito</p>

          <div className={styles.blogGrid}>
            {blogPosts.slice(0, 3).map((post) => (
              <BlogPostCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                link={`/dicas-de-pintura/${post.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/dicas-de-pintura" className="btn btn-outline">
              Ver todas as dicas
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para transformar seu ambiente?</h2>
            <p>
              Entre em contato conosco e descubra como as tintas Reveste Mais podem fazer a diferença no seu projeto.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
