"use client"

import { useState } from "react"
import styles from "./ColorCatalog.module.css"
import { colorPalettes } from "../../data/colors"
import ColorSwatch from "../../components/ColorSwatch/ColorSwatch"

const ColorCatalog = () => {
  const [selectedPalette, setSelectedPalette] = useState("todas")
  const [selectedBrand, setSelectedBrand] = useState("todas")

  const handlePaletteChange = (paletteId) => {
    setSelectedPalette(paletteId)
  }

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId)
  }

  // Função para obter todas as cores
  const getAllColors = () => {
    return colorPalettes.reduce((allColors, palette) => {
      return [...allColors, ...palette.colors]
    }, [])
  }

  // Determinar quais cores mostrar
  const getCurrentColors = () => {
    let colors = getAllColors()

    // Filtrar por marca
    if (selectedBrand !== "todas") {
      colors = colors.filter((color) => color.brand === selectedBrand)
    }

    // Filtrar por paleta
    if (selectedPalette !== "todas") {
      const currentPalette = colorPalettes.find((palette) => palette.id === selectedPalette)
      if (currentPalette) {
        colors = currentPalette.colors
        if (selectedBrand !== "todas") {
          colors = colors.filter((color) => color.brand === selectedBrand)
        }
      }
    }

    return colors
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
          <p>
            Explore nossa paleta completa com cores das principais marcas do mercado e encontre a cor perfeita para seu
            projeto.
          </p>
        </div>
      </section>

      <section className={`section ${styles.paletteSection}`}>
        <div className="container">
          <div className={styles.filterContainer}>       
            <div className={styles.filterGroup}>
              <h3>Paletas de Cores</h3>
              <div className={styles.filterButtons}>
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`${styles.filterButton} ${selectedPalette === option.id ? styles.active : ""}`}
                    onClick={() => handlePaletteChange(option.id)}
                  >
                    <span className={styles.filterName}>{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <p>
              Mostrando <strong>{currentColors.length}</strong> cores
              {(selectedBrand !== "todas" || selectedPalette !== "todas") && (
                <span className={styles.filterStatus}>
                  {selectedBrand !== "todas" && ` da marca ${brandOptions.find((b) => b.id === selectedBrand)?.name}`}
                  {selectedPalette !== "todas" &&
                    ` da paleta ${filterOptions.find((p) => p.id === selectedPalette)?.name}`}
                </span>
              )}
            </p>
          </div>

          <div className={styles.colorsGrid}>
            {currentColors.map((color) => (
              <ColorSwatch
                key={`${color.brand}-${color.id}-${color.code}`}
                color={color.hex}
                name={color.name}
                code={color.code}
                brand={color.brand}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ColorCatalog
