import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import REVESTEMAIS from '/REVESTEMAIS.png';
import reliveLogo from '/relive.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link to="/">
              <img src={REVESTEMAIS} alt="Reveste Mais Tintas" />
            </Link>
            <p className={styles.slogan}>Transformando ambientes, colorindo vidas.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3>Navegação</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/nossas-tintas">Nossas Tintas</Link></li>
                <li><Link to="/catalogo-de-cores">Catálogo de Cores</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Institucional</h3>
              <ul>
                <li><Link to="/sobre">Sobre Nós</Link></li>
                <li><Link to="/dicas-de-pintura">Dicas de Pintura</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Contato</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Av. Deputado Binga, 682<br />Bairro Nossa Senhora de Fátima - Patos de Minas/MG</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>(34) 9888-4410</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>revestemaispatos@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerSocial}>
            <h3>Siga-nos</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/revestemaistintas/?locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/revestemaistintas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/553498884410" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Reveste Mais Tintas. Todos os direitos reservados.</p>
          <div className="developer-info">
            Desenvolvido por:&nbsp;
            <a href="https://cropsight.netlify.app/" target="_blank" rel="noopener noreferrer">
              CropSight Solutions
              <img src={reliveLogo} width={20} alt="Developer Company" className="developer-logo" />
            </a>
          </div>
          <div className={styles.footerBottomLinks}>
            <a href="#">Política de Privacidade</a>
            <span>|</span>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;