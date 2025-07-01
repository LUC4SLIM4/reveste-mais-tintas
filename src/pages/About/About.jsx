"use client"
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiShield,
  FiStar,
  FiTarget,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
} from "react-icons/fi"
import styles from "./About.module.css"

const About = () => {
  const timelineEvents = [
    {
      year: "2013",
      title: "Fundação da Reveste Mais Tintas",
      description:
        "A Reveste Mais Tintas e Revestimentos Acrílicos Ltda. foi fundada em Patos de Minas (MG) em 14 de junho de 2013. Desde a abertura já é registrada como microempresa, atuando na fabricação de tintas e revestimentos acrílicos para pintura residencial e comercial.",
      image: "/storefront-1.png",
    },
    {
      year: "2018",
      title: "Filial em Tiros",
      description:
        "Em 27 de agosto de 2018, a Reveste Mais inaugurou sua primeira filial fora de Patos de Minas, no município de Tiros (MG). Essa expansão física ampliou a atuação da empresa no Triângulo Mineiro.",
      image: "/storefront-2.png",
    },
    {
      year: "2021",
      title: "Renovação de Licença",
      description:
        "Em 17 de novembro de 2021 a Reveste Mais obteve a renovação de sua Licença Ambiental Simplificada (LAS) para operação industrial. Essa licença concedida pelo órgão ambiental de Minas Gerais renova a autorização para fabricação de produtos químicos (tintas e revestimentos) e é válida por 10 anos.",
      image: "/products-standard.png",
    },
    {
      year: "2023",
      title: "Transformação Digital",
      description:
        "Nos últimos anos a empresa ampliou sua presença digital e diversificou seus produtos. Mantém loja oficial no Mercado Livre, com vendas para todo o país. Dentre as inovações em produtos próprios destacam-se linhas de impermeabilizantes e revestimentos decorativos.",
      image: "/color-samples.png",
    },
    {
      year: "2025",
      title: "Liderança Regional Consolidada",
      description:
        "Atualmente a Reveste Mais continua atuando como microempresa em Patos de Minas, com matriz e filial em Tiros. A empresa atende clientes residenciais e comerciais da região, mantendo foco em qualidade e inovação.",
      image: "/products-economica.png",
    },
  ]

  const productLines = [
    {
      title: "Linha Standard",
      description:
        "Nossa linha premium com alta qualidade e durabilidade para projetos que exigem o melhor acabamento.",
      image: "/products-standard.png",
      features: ["Alta cobertura", "Resistência superior", "Acabamento profissional"],
    },
    {
      title: "Linha Econômica",
      description: "Qualidade acessível sem abrir mão da performance, ideal para grandes áreas e projetos econômicos.",
      image: "/products-economica.png",
      features: ["Ótimo custo-benefício", "Fácil aplicação", "Variedade de cores"],
    },
  ]

  const differentials = [
    {
      icon: <FiShield />,
      title: "Fabricação Própria",
      description:
        "Desde o início, optamos por produzir nossos próprios produtos, garantindo controle total sobre a qualidade, os processos e os prazos.",
    },
    {
      icon: <FiUsers />,
      title: "Atendimento Humanizado",
      description:
        "Nossa equipe é treinada para oferecer um atendimento próximo, atencioso e personalizado. Valorizamos cada cliente e buscamos entender seu projeto.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Presença Regional Forte",
      description:
        "Com sede em Patos de Minas e filial em Tiros, ampliamos nossa atuação no Alto Paranaíba com agilidade logística e profundo conhecimento do mercado local.",
    },
    {
      icon: <FiAward />,
      title: "Soluções Completas",
      description:
        "Desenvolvemos produtos específicos para diferentes superfícies e ambientes, oferecendo proteção, acabamento impecável e estética de alto impacto.",
    },
  ]

  const teamMembers = [
    {
      name: "Roberta Lívia Lima de Souza",
      position: "Sócia-Fundadora e Administradora",
      description:
        "Graduada em Farmácia pelo UNIPAM, Roberta traz sua expertise técnica para garantir o rigor no controle de qualidade e na produção das tintas e revestimentos. Atua diretamente na gestão comercial e na supervisão das operações.",
      image: "/roberta.jpg",
    },
    {
      name: "Patrícia Emiliane da Silva Lima",
      position: "Sócia-Fundadora e Administradora",
      description:
        "Formada em Farmácia pelo UNIPAM, Patrícia é uma das fundadoras da Reveste Mais Tintas. Com ampla experiência no setor químico, atua na gestão estratégica e administrativa da empresa, consolidando a marca no mercado regional.",
      image: "/patricia.png",
    },
  ]

  const stats = [
    { number: "12+", label: "Anos de Experiência", description: "Mais de uma década transformando ambientes" },
    { number: "10k+", label: "Clientes Satisfeitos", description: "Famílias e empresas que confiam em nós" },
    { number: "200+", label: "Cores Disponíveis", description: "Paleta completa para todos os gostos" },
    { number: "2", label: "Unidades", description: "Patos de Minas e Tiros" },
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section with Storefront */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Reveste Mais Tintas</h1>
              <p>
                Há mais de 12 anos transformando ambientes e realizando sonhos através das cores. Fabricação própria,
                qualidade garantida e atendimento personalizado no coração de Minas Gerais.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <FiMapPin />
                  <span>Patos de Minas & Tiros - MG</span>
                </div>
                <div className={styles.heroStat}>
                  <FiPhone />
                  <span>(34) 3822-4410</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="/storefront-1.png" alt="Fachada da Reveste Mais Tintas" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDescription}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      
      {/* Color Selection Section */}
      <section className={styles.colorSection}>
        <div className={styles.container}>
          <div className={styles.colorContent}>
            <div className={styles.colorText}>
              <h2>Mais de 200 Cores Disponíveis</h2>
              <p>
                Nossa ampla cartela de cores oferece opções para todos os gostos e projetos. Utilizamos tecnologia
                avançada para garantir precisão na mistura e consistência nas cores, proporcionando o resultado perfeito
                para seu ambiente.
              </p>
              <div className={styles.colorFeatures}>
                <div className={styles.colorFeature}>
                  <FiStar />
                  <span>Cores personalizadas</span>
                </div>
                <div className={styles.colorFeature}>
                  <FiShield />
                  <span>Consistência garantida</span>
                </div>
                <div className={styles.colorFeature}>
                  <FiHeart />
                  <span>Consultoria especializada</span>
                </div>
              </div>
            </div>
            <div className={styles.colorImages}>
              <img src="/color-samples.png" alt="Amostras de cores" />
              <img src="/catalog.png" alt="Catálogo de cores" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiTarget />
              </div>
              <h3>Missão</h3>
              <p>
                Produzir e comercializar tintas e revestimentos com excelência, oferecendo soluções que unem qualidade,
                durabilidade e beleza. Valorizamos o atendimento próximo e confiável, buscando sempre superar as
                expectativas dos nossos clientes.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiStar />
              </div>
              <h3>Visão</h3>
              <p>
                Ser referência em tintas e revestimentos no estado de Minas Gerais até 2030, reconhecida pela fabricação
                própria, atendimento humanizado e compromisso com a inovação. Expandir nossa atuação no interior mineiro
                com responsabilidade e qualidade.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiHeart />
              </div>
              <h3>Valores</h3>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Qualidade em cada detalhe</span>
                </div>
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Inovação com propósito</span>
                </div>
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Compromisso com o cliente</span>
                </div>
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Responsabilidade ambiental</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className={styles.differentialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nossos Diferenciais</h2>
            <p>
              Descubra o que torna a Reveste Mais única e por que somos referência em tintas e revestimentos acrílicos
              no interior de Minas Gerais.
            </p>
          </div>

          <div className={styles.differentialsGrid}>
            {differentials.map((differential, index) => (
              <div key={index} className={styles.differentialCard}>
                <div className={styles.differentialIcon}>{differential.icon}</div>
                <h3>{differential.title}</h3>
                <p>{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nossa Trajetória</h2>
            <p>
              Conheça os principais marcos da nossa história e como chegamos até aqui com dedicação, qualidade e
              inovação constante.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <div className={styles.timelineImage}>
                  <img src={event.image || "/placeholder.svg"} alt={event.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Fundadoras da Reveste Mais Tintas</h2>
            <p>Conheça as empreendedoras que transformaram um sonho em realidade</p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.position}>{member.position}</span>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nossas Unidades</h2>
            <p>Visite nossas lojas em Patos de Minas e Tiros para conhecer nossos produtos de perto</p>
          </div>

          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <img src="/storefront-2.png" alt="Loja Patos de Minas" />
              <div className={styles.locationInfo}>
                <h3>Matriz - Patos de Minas</h3>
                <p>Nossa unidade principal com showroom completo e fábrica</p>
                <div className={styles.locationContact}>
                  <FiPhone />
                  <span>(34) 3822-4410</span>
                </div>
              </div>
            </div>
            <div className={styles.locationCard}>
              <img src="/storefront-3.png" alt="Loja Tiros" />
              <div className={styles.locationInfo}>
                <h3>Filial - Tiros</h3>
                <p>Nossa segunda unidade atendendo a região com agilidade</p>
                <div className={styles.locationContact}>
                  <FiMapPin />
                  <span>Tiros - MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
