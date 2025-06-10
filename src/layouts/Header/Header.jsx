"use client"

import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import styles from "./Header.module.css"
import REVESTEMAIS from "/REVESTEMAIS.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Scroll to top quando a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
    // Scroll suave para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isHomePage && !isScrolled ? styles.transparent : ""}`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logoContainer} onClick={handleNavClick}>
          <img src={REVESTEMAIS || "/placeholder.svg"} alt="Reveste Mais Tintas" className={styles.logo} />
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Ínicio
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/nossas-tintas"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Nossas Tintas
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/catalogo-de-cores"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Catálogo de Cores
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/dicas-de-pintura"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Dicas de Pintura
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/sobre"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Sobre
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/contato"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={handleNavClick}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
