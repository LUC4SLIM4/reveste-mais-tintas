import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5511123456789" 
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;