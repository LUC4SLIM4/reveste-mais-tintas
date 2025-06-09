import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css'; // <-- ESSENCIAL



const HeroBanner = ({ title, subtitle, ctaText, ctaLink, video }) => {
  return (
    <div className={styles.heroBanner}>
      <video
        className={styles.heroVideo}
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
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

export default HeroBanner