import React, { useState } from 'react';
import styles from './PaintingTips.module.css';
import { recentPosts, blogCategories } from '../../data/blog';
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard';

const PaintingTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPosts = selectedCategory === 'todos'
    ? recentPosts
    : recentPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  return (
    <div className={styles.paintingTipsPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Dicas de Pintura</h1>
          <p>Confira nossos artigos e tutoriais para um resultado perfeito.</p>
        </div>
      </section>
      
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <h2>Categorias</h2>
          <div className={styles.categorySelector}>
            <label htmlFor="category">Selecione uma categoria:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              {blogCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.postsSection}`}>
        <div className="container">
          <h2>Artigos Recentes</h2>
          <div className={styles.postsGrid}>
            {filteredPosts.map(post => (
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
        </div>
      </section>
    </div>
  );
};

export default PaintingTips;