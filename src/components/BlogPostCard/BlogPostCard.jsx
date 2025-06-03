import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostCard.module.css';

const BlogPostCard = ({ image, title, excerpt, date, link }) => {
  return (
    <div className={styles.blogPostCard}>
      <Link to={link} className={styles.blogPostLink}>
        <div className={styles.blogPostImage}>
          <img src={image} alt={title} />
          <div className={styles.blogPostDate}>{date}</div>
        </div>
        <div className={styles.blogPostContent}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <span className={styles.readMore}>
            Ler mais <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;