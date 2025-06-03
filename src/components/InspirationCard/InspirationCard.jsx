import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InspirationCard.module.css';

const InspirationCard = ({ image, title, category, link }) => {
  return (
    <div className={styles.inspirationCard}>
      <Link to={link} className={styles.inspirationLink}>
        <div className={styles.inspirationImage}>
          <img src={image} alt={title} />
          <div className={styles.inspirationCategory}>{category}</div>
        </div>
        <div className={styles.inspirationContent}>
          <h3>{title}</h3>
          <span className={styles.viewMore}>
            Ver mais <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default InspirationCard;