"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FiCalendar, FiUser, FiClock } from "react-icons/fi"
import styles from "./PaintingTips.module.css"
import { blogPosts} from "../../data/blog"

const PaintingTips = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  // Filtrar posts por categoria
  const filteredPosts =
    selectedCategory === "todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === selectedCategory.toLowerCase())

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className={styles.paintingTipsPage}>
      {/* Hero Section */}

      {/* Main Content */}
      <section className={styles.mainContent}>
          <div className={styles.resultsHeader}>
            <h2>Artigos sobre Pintura</h2>
              <p>
                Mostrando artigos da categoria{" "}
              </p>
          </div>
        <div className="container">

          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={post.image || "/placeholder.svg?height=200&width=350"} alt={post.title} />
                  <div className={styles.postCategory}>{post.category}</div>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <FiCalendar /> {post.date}
                    </span>
                    <span className={styles.postReadTime}>
                      <FiClock /> {post.readTime}
                    </span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.postAuthor}>
                      <FiUser />
                      <span>{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                      Ler Mais
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaintingTips
