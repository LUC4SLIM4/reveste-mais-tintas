import React, { useState } from 'react';
import styles from './ColorCatalog.module.css';
import { colorPalettes } from '../../data/colors';
import ColorSwatch from '../../components/ColorSwatch/ColorSwatch';

const ColorCatalog = () => {
  const [selectedPalette, setSelectedPalette] = useState('neutros');

  const handlePaletteChange = (event) => {
    setSelectedPalette(event.target.value);
  };

  const currentPalette = colorPalettes.find(palette => palette.id === selectedPalette);

  return (
    <div className={styles.colorCatalogPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Catálogo de Cores</h1>
          <p>Explore nossa paleta exclusiva e encontre a cor perfeita para seu projeto.</p>
        </div>
      </section>
      
      <section className={`section ${styles.paletteSection}`}>
        <div className="container">
          <h2>Paletas de Cores</h2>
          <div className={styles.paletteSelector}>
            <label htmlFor="palette">Selecione uma paleta:</label>
            <select id="palette" value={selectedPalette} onChange={handlePaletteChange}>
              {colorPalettes.map(palette => (
                <option key={palette.id} value={palette.id}>{palette.name}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.colorsGrid}>
            {currentPalette && currentPalette.colors.map(color => (
              <ColorSwatch 
                key={color.id}
                color={color.hex}
                name={color.name}
                code={color.code}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorCatalog;