import React from 'react';
import styles from './ColorSwatch.module.css';

const ColorSwatch = ({ color, name, code }) => {
  return (
    <div className={styles.colorSwatch}>
      <div 
        className={styles.colorBox} 
        style={{ backgroundColor: color }}
      ></div>
      <div className={styles.colorInfo}>
        <span className={styles.colorName}>{name}</span>
        <span className={styles.colorCode}>{code}</span>
      </div>
    </div>
  );
};

export default ColorSwatch;