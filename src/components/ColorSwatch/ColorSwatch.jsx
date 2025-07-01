"use client"

import { useState } from "react"
import styles from "./ColorSwatch.module.css"

const ColorSwatch = ({ color, name, code, brand }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyHex = () => {
    navigator.clipboard.writeText(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.colorSwatch}>
      <div
        className={styles.colorBox}
        style={{ backgroundColor: color }}
        onClick={handleCopyHex}
        title="Clique para copiar código HEX"
      >
        <div className={styles.colorOverlay}>
          <span className={styles.copyText}>{copied ? "Copiado!" : "Copiar HEX"}</span>
        </div>
      </div>

      <div className={styles.colorInfo}>
        <h3 className={styles.colorName}>{name}</h3>
        <p className={styles.colorCode}>{code}</p>
        <p className={styles.colorHex}>{color}</p>
        <div className={styles.brandInfo}>
        </div>
      </div>
    </div>
  )
}

export default ColorSwatch
