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
  FiArrowRight,
} from "react-icons/fi"
import styles from "./About.module.css"

const About = () => {
  const timelineEvents = [
    {
      year: "2008",
      title: "Fundação da Reveste Mais Tintas",
      description:
        "Iniciamos nossa jornada com uma pequena loja e o sonho de transformar ambientes através das cores. Com apenas 3 funcionários e uma linha básica de tintas, começamos a construir nossa reputação baseada na qualidade e atendimento personalizado.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2012",
      title: "Expansão da Linha de Produtos",
      description:
        "Lançamos nossa primeira linha de tintas para uso externo e industrial, atendendo à crescente demanda do mercado. Investimos em tecnologia e ampliamos nossa equipe para 15 colaboradores, consolidando nossa presença no mercado regional.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2015",
      title: "Certificação ISO 9001",
      description:
        "Conquistamos a certificação ISO 9001, reconhecendo nosso compromisso com a gestão da qualidade. Este marco representou um salto em nossos processos produtivos e controle de qualidade, garantindo ainda mais confiança aos nossos clientes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2018",
      title: "Linha Sustentável EcoTintas",
      description:
        "Pioneiros na região, lançamos a primeira linha de tintas ecológicas com baixo VOC e componentes naturais. Esta iniciativa refletiu nosso compromisso com o meio ambiente e a saúde dos nossos clientes, estabelecendo novos padrões no mercado.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description:
        "Implementamos tecnologias digitais avançadas, incluindo nosso e-commerce e sistema de gestão integrado. Durante a pandemia, conseguimos manter o atendimento aos clientes através de canais digitais, demonstrando nossa capacidade de adaptação.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2024",
      title: "Liderança Regional Consolidada",
      description:
        "Hoje somos reconhecidos como líderes regionais em tintas premium, com mais de 50.000 clientes satisfeitos e uma equipe de 80 colaboradores. Continuamos investindo em inovação e sustentabilidade para o futuro.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const differentials = [
    {
      icon: <FiShield />,
      title: "Fabricação Própria",
      description:
        "Desde o início, optamos por produzir nossos próprios produtos, garantindo controle total sobre a qualidade, os processos e os prazos. Isso nos permite oferecer tintas e revestimentos com alto padrão técnico, adaptados às necessidades do nosso público.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: <FiUsers />,
      title: "Atendimento Humanizado",
      description:
        "Nossa equipe é treinada para oferecer um atendimento próximo, atencioso e personalizado. Valorizamos cada cliente e buscamos entender seu projeto para oferecer as melhores soluções com empatia, clareza e comprometimento.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: <FiTrendingUp />,
      title: "Presença Regional Forte",
      description:
        "Com sede em Patos de Minas e filial em Tiros, ampliamos nossa atuação no Alto Paranaíba com agilidade logística e profundo conhecimento do mercado local. Atendemos com eficiência tanto consumidores finais quanto empresas da construção civil.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: <FiHeart />,
      title: "Compromisso com a Qualidade",
      description:
        "Selecionamos cuidadosamente nossas matérias-primas e seguimos rigorosos padrões de produção. Cada lote passa por controle interno de qualidade para garantir desempenho, aderência, cobertura e durabilidade superiores.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: <FiAward />,
      title: "Soluções para Ambientes Internos e Externos",
      description:
        "Desenvolvemos produtos específicos para diferentes superfícies e ambientes. Nossas tintas e revestimentos são indicados tanto para áreas internas quanto externas, oferecendo proteção, acabamento impecável e estética de alto impacto.",
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  const sustainabilityActions = [
    {
      title: "Produtos Eco-friendly",
      description:
        "Nossa linha EcoTintas representa 40% de nossa produção, utilizando pigmentos naturais e resinas de base vegetal. Reduzimos em 60% os compostos orgânicos voláteis (VOC) em comparação com tintas convencionais, melhorando a qualidade do ar interno dos ambientes.",
      impact: "Redução de 40% nas emissões tóxicas",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Programa de Reciclagem",
      description:
        "Mantemos pontos de coleta em toda a região para reciclagem de latas e embalagens usadas. Nosso programa 'Lata Limpa' já coletou mais de 100.000 embalagens, que são transformadas em novos produtos ou destinadas corretamente.",
      impact: "95% das embalagens são recicladas",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Energia 100% Renovável",
      description:
        "Desde 2022, nossa fábrica opera exclusivamente com energia solar. Instalamos 500 painéis fotovoltaicos que geram toda a energia necessária para nossa produção, tornando-nos carbono neutro em nossas operações industriais.",
      impact: "Redução de 60% na pegada de carbono",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Projeto Mais Verde",
      description:
        "Para cada 10 latas de tinta vendidas, plantamos uma árvore nativa em parceria com ONGs ambientais. Já contribuímos para o plantio de mais de 50.000 mudas em áreas de preservação e recuperação ambiental da região.",
      impact: "Mais de 50.000 árvores plantadas",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const teamMembers = [
    {
      name: "João Silva",
      position: "CEO & Fundador",
      description:
        "Formado em Engenharia Química pela UFRJ, João é o visionário por trás da Reveste Mais Tintas. Com mais de 20 anos de experiência no setor químico, ele fundou a empresa com o objetivo de democratizar o acesso a tintas de alta qualidade. Sua paixão por inovação e sustentabilidade guia a estratégia da empresa.",
      image: "/placeholder.svg?height=400&width=300",
      achievements: [
        "Prêmio Empreendedor do Ano 2020",
        "Especialista em Química de Polímeros",
        "Palestrante em eventos do setor",
      ],
    },
    {
      name: "Maria Santos",
      position: "Diretora de P&D",
      description:
        "Doutora em Química pela USP, Maria lidera nossa equipe de pesquisa e desenvolvimento. Responsável pela criação da linha EcoTintas, ela tem 15 anos de experiência em desenvolvimento de produtos sustentáveis. Sua expertise em nanotecnologia revolucionou nossa linha premium.",
      image: "/placeholder.svg?height=400&width=300",
      achievements: ["PhD em Química Aplicada", "12 patentes registradas", "Autora de 25 artigos científicos"],
    },
    {
      name: "Carlos Oliveira",
      position: "Diretor Comercial",
      description:
        "MBA em Marketing pela FGV, Carlos é responsável pela estratégia comercial e relacionamento com clientes. Com 18 anos no mercado de tintas, ele desenvolveu nossa rede de distribuição e programas de fidelidade. Sua visão de mercado é fundamental para nosso crescimento.",
      image: "/placeholder.svg?height=400&width=300",
      achievements: ["Crescimento de 300% nas vendas", "Rede de 200+ revendedores", "Especialista em Varejo"],
    },
    {
      name: "Ana Costa",
      position: "Gerente de Qualidade",
      description:
        "Engenheira de Produção pela UFMG, Ana garante que todos os nossos produtos atendam aos mais altos padrões de qualidade. Responsável pela implementação da ISO 9001, ela supervisiona todos os processos produtivos e controle de qualidade, assegurando a excelência em cada produto.",
      image: "/placeholder.svg?height=400&width=300",
      achievements: ["Certificação ISO 9001", "Zero defeitos em 2023", "Auditora Líder Certificada"],
    },
  ]

  const stats = [
    { number: "15+", label: "Anos de Experiência", description: "Mais de uma década transformando ambientes" },
    { number: "50k+", label: "Clientes Satisfeitos", description: "Famílias e empresas que confiam em nós" },
    { number: "200+", label: "Cores Disponíveis", description: "Paleta completa para todos os gostos" },
    { number: "98%", label: "Satisfação do Cliente", description: "Índice de satisfação comprovado" },
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Sobre a Reveste Mais Tintas</h1>
            <p>
              Há mais de 15 anos transformando ambientes e realizando sonhos através das cores. Conheça nossa história,
              nossos valores e o compromisso que nos move todos os dias: oferecer produtos de excelência que inspiram e
              transformam espaços.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/placeholder.svg?height=500&width=600" alt="Reveste Mais Tintas" />
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

      {/* Company Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Nossa História</h2>
              <p>
                A Reveste Mais Tintas nasceu em 2013 do sonho de duas empreendedoras mineiras,
                Patrícia Emiliane e Roberta Lívia, determinadas a transformar o mercado de tintas com produtos
                de qualidade e atendimento diferenciado. Tudo começou em Patos de Minas, em uma estrutura
                modesta, mas com um propósito ousado: fabricar tintas acrílicas que unissem tecnologia,
                durabilidade e beleza.
              </p>
              <p>
                Nos primeiros anos, os desafios foram grandes. Enfrentar concorrentes consolidados exigiu
                resiliência e visão estratégica. Apostamos na fabricação própria, no relacionamento próximo
                com os clientes e no compromisso com a excelência em cada produto entregue. Aos poucos,
                conquistamos a confiança do mercado regional.
              </p>
              <p>
                O grande marco veio em 2018, com a abertura da nossa primeira filial na cidade de Tiros-MG.
                Esse passo foi fundamental para expandir nossa presença e reafirmar nosso propósito de levar
                mais cor e qualidade para os lares e obras da região.
              </p>
              <p>
                Hoje, mais de uma década depois, a Reveste Mais é reconhecida como referência na fabricação
                de tintas e revestimentos acrílicos, com uma estrutura sólida, produção local e uma equipe
                comprometida com o que faz. Mas nossa essência continua a mesma: acreditar que cada parede
                pintada pode contar uma história — e a nossa é feita de dedicação, inovação e paixão pelas
                cores.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img src="/placeholder.svg?height=600&width=500" alt="Nossa primeira loja em 2008" />
              <div className={styles.imageCaption}>Nossa primeira loja em 2008 - onde tudo começou</div>
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
                Produzir e comercializar tintas e revestimentos com excelência, oferecendo soluções
                que unem qualidade, durabilidade e beleza. Valorizamos o atendimento próximo e confiável,
                buscando sempre superar as expectativas dos nossos clientes e contribuir para a
                transformação de ambientes com cor, segurança e tecnologia.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiStar />
              </div>
              <h3>Visão</h3>
              <p>
                Ser referência em tintas e revestimentos no estado de Minas Gerais até 2030, 
                reconhecida pela fabricação própria, atendimento humanizado e compromisso com a 
                inovação. Expandir nossa atuação no interior mineiro com responsabilidade e qualidade,
                fortalecendo parcerias duradouras e sustentáveis.
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
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Ética e integridade</span>
                </div>
                <div className={styles.valueItem}>
                  <FiCheckCircle />
                  <span>Valorização da comunidade</span>
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
              Descubra o que torna a Reveste Mais única e por que somos referência em tintas e 
              revestimentos acrílicos no interior de Minas Gerais.
            </p>
          </div>

          <div className={styles.differentialsContainer}>
            {differentials.map((differential, index) => (
              <div key={index} className={styles.differentialItem}>
                <div className={styles.differentialImage}>
                  <img src={differential.image || "/placeholder.svg"} alt={differential.title} />
                  <div className={styles.differentialIcon}>{differential.icon}</div>
                </div>
                <div className={styles.differentialContent}>
                  <h3>{differential.title}</h3>
                  <p>{differential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Fabricação Própria</h2>
            <p>
              Desde o início, optamos por produzir nossos próprios produtos, garantindo controle 
              total sobre a qualidade, os processos e os prazos. Isso nos permite oferecer tintas 
              e revestimentos com alto padrão técnico, adaptados às necessidades do nosso público.
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

      {/* Sustainability Section */}
      <section className={styles.sustainabilitySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Atendimento Humanizado</h2>
            <p>
              Nossa equipe é treinada para oferecer um atendimento próximo, atencioso e personalizado.
              Valorizamos cada cliente e buscamos entender seu projeto para oferecer as melhores 
              soluções com empatia, clareza e comprometimento.
            </p>
          </div>

          <div className={styles.sustainabilityGrid}>
            {sustainabilityActions.map((action, index) => (
              <div key={index} className={styles.sustainabilityCard}>
                <div className={styles.sustainabilityImage}>
                  <img src={action.image || "/placeholder.svg"} alt={action.title} />
                  <div className={styles.impactBadge}>
                    <FiHeart />
                    <span>{action.impact}</span>
                  </div>
                </div>
                <div className={styles.sustainabilityContent}>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
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
            <h2>Nossa Equipe</h2>
            <p>Conheça as pessoas apaixonadas e talentosas que fazem a Reveste Mais Tintas acontecer todos os dias</p>
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
                  <div className={styles.achievements}>
                    <h4>Principais Conquistas:</h4>
                    <ul>
                      {member.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
