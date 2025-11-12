import { useState } from 'react';
import styles from './copyelasticor.module.css';

const CopyElasticor = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const faqs = [
    {
      pergunta: 'O Elasticor é aprovado pela ANVISA?',
      resposta: 'Elasticor está alinhado com as normas da ABNT para comercialização e sem nenhuma restrição pelo órgão. Por se tratar de um revestimento impermeável seguro para consumo, Elasticor é um produto dispensado da obrigatoriedade de registro.'
    },
    {
      pergunta: 'O Elasticor tem contraindicação?',
      resposta: 'Não há contraindicações para o uso do Elasticor. É um produto seguro e testado para todas as superfícies externas. Recomenda-se apenas seguir as instruções de aplicação para melhores resultados.'
    },
    {
      pergunta: 'Como devo aplicar o Elasticor?',
      resposta: 'Aplique 3 demãos com intervalo de 4 horas entre cada uma. Na primeira demão, dilua até 20% de água. Certifique-se de que a superfície está limpa e seca antes da aplicação.'
    },
    {
      pergunta: 'Quanto tempo leva para ver os resultados?',
      resposta: 'A proteção impermeável é imediata após a secagem completa de 24 horas. A durabilidade e resistência contra sol e chuva podem ser observadas já nas primeiras semanas de uso.'
    },
    {
      pergunta: 'Elasticor tem efeitos colaterais?',
      resposta: 'Não. O Elasticor é uma tinta acrílica formulada com componentes seguros e não tóxicos. Utilize equipamentos de proteção individual durante a aplicação.'
    },
    {
      pergunta: 'Posso aplicar Elasticor com outros produtos?',
      resposta: 'Sim! O Elasticor pode ser aplicado sobre outras tintas e revestimentos, desde que a superfície esteja adequadamente preparada e limpa.'
    }
  ];

  const depoimentos = [
    {
      nome: 'Sergio Wander',
      cidade: 'Patos de Minas, MG',
      foto: '/sergio.png',
      texto: 'Depois que apliquei a Elasticor, acabou a umidade na parede da varanda! Produto excelente!',
      estrelas: 5
    },
    {
      nome: 'Igor Felipe',
      cidade: 'Patos de Minas, MG',
      foto: '/igor.png',
      texto: 'Excelente cobertura, durou o inverno inteiro sem descascar! Super recomendo!',
      estrelas: 5
    },
    {
      nome: 'Marcos Lima',
      cidade: 'Patos de Minas, MG',
      foto: '/marcos.png',
      texto: 'A melhor tinta impermeável que já usei. Protegeu minha casa das chuvas fortes!',
      estrelas: 5
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. APRESENTAÇÃO DO PRODUTO - PROTEJA SUAS PAREDES */}
      <section className={styles.produtoSection}>
        <div className={styles.container}>
          <div className={styles.produtoContent}>
            <div className={styles.produtoTexto}>
              <div className={styles.produtoLogo}>
                <img src="/logomain.png" alt="Reveste Mais" />
              </div>
              
              <h1>
                Proteja suas paredes, ganhe <br />
                confiança e tenha a <br />
                <strong>qualidade que você <br />
                tanto quer e precisa!</strong>
              </h1>
              
              <p>
                <strong>Elasticor</strong> oferece uma fórmula avançada que combina 
                tecnologia emborrachada e impermeabilização, elevando a proteção 
                das suas paredes.
              </p>
              
              <p>
                <strong>Quer proteger sua casa de forma natural e segura, 
                conquistando mais durabilidade e confiança para viver bem?</strong>
              </p>
              
              <button 
                className={styles.ctaButton}
                onClick={() => window.open('https://produto.mercadolivre.com.br/MLB-4013900373-tinta-emborrachada-elasticor-sol-e-chuva-reveste-mais-36l-_JM', '_blank')}
              >
                SIM, QUERO COMEÇAR A PROTEGER!
              </button>
              
              <div className={styles.pagamentoSeguro}>
                <p><strong>PAGUE COM SEGURANÇA</strong></p>
                <div className={styles.paymentIcons}>
                  <span>💳 Cartões</span>
                  <span>🏦 Boleto</span>
                  <span>💰 Pix</span>
                </div>
              </div>
            </div>
            
            <div className={styles.produtoImagem}>
              <img src="/241.png" alt="Elasticor 18L" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO PROBLEMA - BANNER FULL WIDTH COM 2.PNG */}
      <section className={styles.problemaFullSection}>
        <div className={styles.ctaContainer}>
          <button 
            className={styles.ctaButtonWhite}
            onClick={() => window.open('https://produto.mercadolivre.com.br/MLB-4013900373-tinta-emborrachada-elasticor-sol-e-chuva-reveste-mais-36l-_JM', '_blank')}
          >
            SIM, QUERO COMEÇAR A PROTEGER!
          </button>
        </div>
      </section>

      {/* 3. SEÇÃO VÍDEO */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoTexto}>
              <h2 className={styles.videoTitulo}>
                Veja como o <span>Elasticor</span> protege sua casa
              </h2>
              <p className={styles.videoSubtitulo}>
                Assista ao vídeo e descubra toda a tecnologia por trás da proteção impermeável
              </p>
            </div>
            
            <div className={styles.videoBox} onClick={() => setIsVideoModalOpen(true)}>
              <img src="/pinturacopy.png" alt="Clique e Assista - Elasticor" className={styles.videoThumb} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPINIÕES DOS CLIENTES */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>O Que Nossos Clientes Dizem</h2>
          <p className={styles.sectionSubtitle}>
            Milhares de casas protegidas em todo o Brasil
          </p>

          <div className={styles.testimonialsWrapper}>
            <button 
              className={styles.sliderButton + ' ' + styles.sliderButtonPrev}
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? depoimentos.length - 1 : currentTestimonial - 1)}
            >
              ‹
            </button>

            <div className={styles.testimonialsGrid}>
              {depoimentos.map((depoimento, index) => (
                <div 
                  key={index} 
                  className={`${styles.testimonialCard} ${index === currentTestimonial ? styles.active : ''}`}
                >
                  <div className={styles.stars}>
                    {[...Array(depoimento.estrelas)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{depoimento.texto}"</p>
                  <div className={styles.testimonialAuthor}>
                    <img src={depoimento.foto} alt={depoimento.nome} />
                    <div>
                      <strong>{depoimento.nome}</strong>
                      <span>{depoimento.cidade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={styles.sliderButton + ' ' + styles.sliderButtonNext}
              onClick={() => setCurrentTestimonial(currentTestimonial === depoimentos.length - 1 ? 0 : currentTestimonial + 1)}
            >
              ›
            </button>
          </div>

          <div className={styles.sliderDots}>
            {depoimentos.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER 1.PNG FULL WIDTH */}
      <section className={styles.bannerSection}>
        <img src="/1.png" alt="Elasticor - Aplicações" className={styles.bannerFull} />
      </section>

      {/* 6. CONHEÇA A TECNOLOGIA */}
      <section className={styles.tecnologiaSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Conheça a tecnologia do <span className={styles.destaque}>Elasticor!</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Tenha em suas mãos a eficácia de um revestimento <strong>100% impermeável</strong>, 
            feito para quem busca <strong>proteção duradoura sem complicações</strong>.
          </p>
          
          {/* 7. IMAGEM 242.PNG */}
          <div className={styles.tecnologiaImagem}>
            <img src="/242.png" alt="Elasticor - Tecnologia Impermeável" />
          </div>
        </div>
      </section>

      {/* 8. GARANTIA */}
      <section className={styles.garantiaSection}>
        <div className={styles.container}>
          <div className={styles.garantiaContent}>
            <div className={styles.garantiaImagem}>
              <img src="/243.png" alt="Garantia 30 Dias" />
            </div>
            <div className={styles.garantiaTexto}>
              <h2>Garantia de <span>30 Dias</span></h2>
              <p>
                Você tem <strong>30 dias</strong> para devolver o Elasticor.. 
                Caso não chegue como combinamos, devolvemos 100% do seu dinheiro.
              </p>
              <p>
                <strong>Sem perguntas, sem complicações.</strong> Essa é nossa garantia de qualidade!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA - NUNCA FOI TÃO BARATO */}
      <section className={styles.ctaFinal}>
        <div className={styles.container}>
          <h2>Nunca foi tão barato proteger sua casa!</h2>
          <p>Aproveite nossos super descontos nas compras acima de 2 potes!</p>
          <button 
            className={styles.ctaButtonFinal}
            onClick={() => window.open('https://produto.mercadolivre.com.br/MLB-4013900373-tinta-emborrachada-elasticor-sol-e-chuva-reveste-mais-36l-_JM', '_blank')}
          >
            QUERO PROTEGER MINHA CASA AGORA! 🏠
          </button>
        </div>
      </section>

      {/* 10. DÚVIDAS FREQUENTES (POR ÚLTIMO) */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Dúvidas frequentes</h2>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${openFaq === index ? styles.active : ''}`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  {faq.pergunta}
                  <span className={styles.faqIcon}>{openFaq === index ? '˄' : '˅'}</span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img src="/logomain.png" alt="Reveste Mais" />
              <p>Reveste Mais Tintas e Revestimentos Acrílicos</p>
            </div>
            <div className={styles.footerContato}>
              <p>📞 (34) 3822-4410</p>
              <p>📍 Avenida Deputado Binga, 682 - Cidade Patos De Minas, Minas Gerais</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Reveste Mais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE VÍDEO */}
      {isVideoModalOpen && (
        <div className={styles.videoModal} onClick={() => setIsVideoModalOpen(false)}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setIsVideoModalOpen(false)}>
              ✕
            </button>
            <video controls autoPlay className={styles.video}>
              <source src="/elasticorajustado.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyElasticor;
