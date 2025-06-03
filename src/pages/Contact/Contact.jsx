import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos prontos para atender você. Encontre nossos contatos e localização.</p>
        </div>
      </section>
      
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            <p>
              <strong>Endereço:</strong> Av. das Tintas, 1234 - Bairro Colorido, Cidade/UF
            </p>
            <p>
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
            <p>
              <strong>Email:</strong> contato@revestemais.com.br
            </p>
            
            <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h2>Envie uma Mensagem</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Seu nome" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Seu email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows="5" placeholder="Sua mensagem" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.mapSection}`}>
        <div className="container">
          <h2>Localização</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.797974543484!2d-46.65879458507176!3d-23.54009708468772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5843deade6e3%3A0x874459ff6a942bc5!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1627913465991!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;