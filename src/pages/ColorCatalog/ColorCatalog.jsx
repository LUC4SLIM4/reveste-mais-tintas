"use client"

import { useState } from "react"
import styles from "./ColorCatalog.module.css"
import { colorPalettes } from "../../data/colors"
import ColorSwatch from "../../components/ColorSwatch/ColorSwatch"

const ColorCatalog = () => {
  const [selectedPalette, setSelectedPalette] = useState("todas")

  const handlePaletteChange = (paletteId) => {
    setSelectedPalette(paletteId)
  }

  // Função para obter todas as cores
  const getAllColors = () => {
    return colorPalettes.reduce((allColors, palette) => {
      return [...allColors, ...palette.colors]
    }, [])
  }

  // Determinar quais cores mostrar
  const getCurrentColors = () => {
    if (selectedPalette === "todas") {
      return getAllColors()
    }
    const currentPalette = colorPalettes.find((palette) => palette.id === selectedPalette)
    return currentPalette ? currentPalette.colors : []
  }

  const currentColors = getCurrentColors()

  // Criar array de filtros incluindo "Todas"
  const filterOptions = [
    { id: "todas", name: "Todas as Cores" },
    ...colorPalettes.map((palette) => ({
      id: palette.id,
      name: palette.name,
    })),
  ]

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
          <div className={styles.filterContainer}>
            <h2>Paletas de Cores</h2>
            <div className={styles.filterButtons}>
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  className={`${styles.filterButton} ${selectedPalette === option.id ? styles.active : ""}`}
                  onClick={() => handlePaletteChange(option.id)}
                >
                  <span className={styles.filterName}>{option.name}</span>
                  <span className={styles.filterCount}>{option.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <p>
              Mostrando <strong>{currentColors.length}</strong> cores
            </p>
          </div>

          <div className={styles.colorsGrid}>
            {currentColors.map((color) => (
              <ColorSwatch key={`${color.id}-${color.code}`} color={color.hex} name={color.name} code={color.code} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ColorCatalog
