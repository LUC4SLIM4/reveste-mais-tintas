"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FiCalendar, FiUser, FiClock, FiTag, FiArrowLeft, FiShare2, FiBookmark } from "react-icons/fi"
import styles from "./BlogPost.module.css"
import { blogPosts } from "../../data/blog"

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Encontrar o post pelo slug
    const currentPost = blogPosts.find((p) => p.slug === slug)

    if (currentPost) {
      setPost(currentPost)

      // Encontrar posts relacionados (mesma categoria, excluindo o atual)
      const related = blogPosts
        .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3)

      setRelatedPosts(related)
    }

    setLoading(false)

    // Rolar para o topo ao carregar o post
    window.scrollTo(0, 0)
  }, [slug])

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando artigo...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className={styles.errorContainer}>
        <h2>Artigo não encontrado</h2>
        <p>O artigo que você está procurando não existe ou foi removido.</p>
        <Link to="/blog" className={styles.backButton}>
          <FiArrowLeft /> Voltar para o Blog
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.blogPostPage}>
      {/* Hero Section */}
      <section
        className={styles.postHero}
        style={{ backgroundImage: `url(${post.image || "/placeholder.svg?height=600&width=1200"})` }}
      >
        <div className={styles.heroOverlay}>
          <div className="container">
            <div className={styles.postHeroContent}>
              <Link to="/blog" className={styles.backLink}>
                <FiArrowLeft /> Voltar para o Blog
              </Link>
              <div className={styles.postCategory}>{post.category}</div>
              <h1>{post.title}</h1>
              <div className={styles.postMeta}>
                <div className={styles.metaItem}>
                  <FiUser />
                  <span>{post.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <FiCalendar />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <FiClock />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className={styles.postContent}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              <div className={styles.postActions}>
                <button className={styles.actionButton}>
                  <FiBookmark /> Salvar
                </button>
                <button className={styles.actionButton}>
                  <FiShare2 /> Compartilhar
                </button>
              </div>

              <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>

              {post.tags && (
                <div className={styles.postTags}>
                  <h3>Tags:</h3>
                  <div className={styles.tagsList}>
                    {post.tags.map((tag) => (
                      <Link key={tag} to={`/blog?tag=${tag}`} className={styles.tag}>
                        <FiTag /> {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.authorBox}>
                <div className={styles.authorAvatar}>
                  <img src="/placeholder.svg?height=100&width=100" alt={post.author} />
                </div>
                <div className={styles.authorInfo}>
                  <h3>Sobre o Autor</h3>
                  <h4>{post.author}</h4>
                  <p>
                    Especialista em pintura e decoração com mais de 10 anos de experiência no setor. Compartilha
                    conhecimentos práticos e tendências para ajudar pessoas a transformarem seus espaços.
                  </p>
                </div>
              </div>

            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarWidget}>
                <h3>Artigos Relacionados</h3>
                <div className={styles.relatedPosts}>
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className={styles.relatedPost}>
                        <img
                          src={relatedPost.image || "/placeholder.svg?height=80&width=120"}
                          alt={relatedPost.title}
                        />
                        <div className={styles.relatedPostContent}>
                          <h4>{relatedPost.title}</h4>
                          <span className={styles.relatedPostDate}>{relatedPost.date}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className={styles.noRelated}>Nenhum artigo relacionado encontrado.</p>
                  )}
                </div>
              </div>        
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
