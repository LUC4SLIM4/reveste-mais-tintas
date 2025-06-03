import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import { allProducts, productCategories } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  return (
    <div className={styles.productsPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Nossos Produtos</h1>
          <p>Conheça nossa linha completa de tintas para todas as suas necessidades.</p>
        </div>
      </section>
      
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <h2>Categorias</h2>
          <div className={styles.categoriesGrid}>
            {productCategories.map(category => (
              <div key={category.id} className={styles.categoryCard}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to={`/produtos?category=${category.id}`} className="btn btn-outline">Ver produtos</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <h2>Todos os Produtos</h2>
          <div className={styles.productsGrid}>
            {allProducts.map(product => (
              <ProductCard 
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.shortDescription}
                link={`/produto/${product.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;