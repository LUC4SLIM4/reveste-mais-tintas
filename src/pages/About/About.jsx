import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Sobre Nós</h1>
          <p>Conheça a Reveste Mais Tintas: nossa história, missão, valores e equipe.</p>
        </div>
      </section>
      
      <section className={`section ${styles.companySection}`}>
        <div className="container">
          <div className={styles.companyContent}>
            <div className={styles.companyText}>
              <h2>Nossa História</h2>
              <p>
                Fundada em 2008, a Reveste Mais Tintas nasceu da paixão por cores e da vontade de transformar ambientes.
                Desde o início, buscamos oferecer produtos de alta qualidade, que inspirassem e valorizassem cada espaço.
              </p>
              <p>
                Com muito trabalho e dedicação, construímos uma marca sólida, reconhecida pela excelência de nossos produtos,
                pelo atendimento personalizado e pelo compromisso com a satisfação de nossos clientes.
              </p>
              
              <h2>Missão</h2>
              <p>
                Inspirar e transformar ambientes através de cores e soluções inovadoras, oferecendo produtos de alta qualidade
                e um atendimento diferenciado, que supere as expectativas de nossos clientes.
              </p>
              
              <h2>Visão</h2>
              <p>
                Ser a marca de tintas e revestimentos preferida pelos clientes, reconhecida pela excelência, inovação e
                compromisso com a sustentabilidade.
              </p>
              
              <h2>Valores</h2>
              <ul>
                <li>Qualidade</li>
                <li>Inovação</li>
                <li>Compromisso com o cliente</li>
                <li>Sustentabilidade</li>
                <li>Ética e transparência</li>
              </ul>
            </div>
            
            <div className={styles.companyImage}>
              <img src="/src/assets/about/company-history.jpg" alt="Nossa História" />
            </div>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <h2>Nossa Equipe</h2>
          <p className={styles.teamDescription}>
            Conheça as pessoas que fazem a Reveste Mais Tintas acontecer todos os dias.
          </p>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img src="/src/assets/about/team-member-1.jpg" alt="João Silva" />
              <h3>João Silva</h3>
              <p>Diretor Executivo</p>
            </div>
            
            <div className={styles.teamMember}>
              <img src="/src/assets/about/team-member-2.jpg" alt="Maria Souza" />
              <h3>Maria Souza</h3>
              <p>Gerente de Marketing</p>
            </div>
            
            <div className={styles.teamMember}>
              <img src="/src/assets/about/team-member-3.jpg" alt="Carlos Oliveira" />
              <h3>Carlos Oliveira</h3>
              <p>Gerente de Vendas</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <h2>Galeria de Fotos</h2>
          <p className={styles.galleryDescription}>
            Confira alguns momentos da Reveste Mais Tintas.
          </p>
          
          <div className={styles.galleryGrid}>
            <img src="/src/assets/about/gallery-1.jpg" alt="Foto 1" />
            <img src="/src/assets/about/gallery-2.jpg" alt="Foto 2" />
            <img src="/src/assets/about/gallery-3.jpg" alt="Foto 3" />
            <img src="/src/assets/about/gallery-4.jpg" alt="Foto 4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;