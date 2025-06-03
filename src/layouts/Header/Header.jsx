import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Reveste Mais Tintas" className={styles.logo} />
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Ínicio
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/nossas-tintas" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Nossas Tintas
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/catalogo-de-cores" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo de Cores
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/inspiracoes" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Inspirações
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/dicas-de-pintura" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Dicas de Pintura
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => isActive ? styles.activeLink : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;