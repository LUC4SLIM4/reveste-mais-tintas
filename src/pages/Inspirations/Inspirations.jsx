import React from 'react';
import styles from './Inspirations.module.css';
import { featuredInspirations, inspirationCategories } from '../../data/inspirations';
import InspirationCard from '../../components/InspirationCard/InspirationCard';

const Inspirations = () => {
  return (
    <div className={styles.inspirationsPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Inspirações</h1>
          <p>Encontre ideias e ambientes transformados com as cores Reveste Mais.</p>
        </div>
      </section>
      
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <h2>Categorias</h2>
          <div className={styles.categoriesGrid}>
            {inspirationCategories.map(category => (
              <div key={category.id} className={styles.categoryCard}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <a href={`#${category.id}`} className="btn btn-outline">Ver mais</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.inspirationsSection}`}>
        <div className="container">
          <h2>Destaques</h2>
          <div className={styles.inspirationsGrid}>
            {featuredInspirations.map(inspiration => (
              <InspirationCard 
                key={inspiration.id}
                image={inspiration.image}
                title={inspiration.title}
                category={inspiration.category}
                link={`/inspiracoes/${inspiration.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspirations;