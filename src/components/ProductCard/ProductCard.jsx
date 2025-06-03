import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className={styles.productLink}>
          Saiba mais <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;