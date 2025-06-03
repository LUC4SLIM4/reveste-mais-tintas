import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css';

const HeroBanner = ({ title, subtitle, ctaText, ctaLink, image }) => {
  return (
    <div className={styles.heroBanner}>
      <video className={styles.heroVideo} src="/src/assets/video-loja.mp4" autoPlay loop muted playsInline />
      <div className="container">
        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link to={ctaLink} className="btn btn-primary">{ctaText}</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;