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
      year: "2013",
      title: "Fundação da Reveste Mais Tintas",
      description:
        "A Reveste Mais Tintas e Revestimentos Acrílicos Ltda. foi fundada em Patos de Minas (MG) em 14 de junho de 2013 . Desde a abertura já é registrada como microempresa, atuando na fabricação de tintas e revestimentos acrílicos para pintura residencial e comercial.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2018",
      title: "Filial em Tiros",
      description:
        "Em 27 de agosto de 2018, a Reveste Mais inaugurou sua primeira filial fora de Patos de Minas, no município de Tiros (MG). Essa expansão física ampliou a atuação da empresa no Triângulo Mineiro.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2021",
      title: "Renovação de Licença",
      description:
        "Em 17 de novembro de 2021 a Reveste Mais obteve a renovação de sua Licença Ambiental Simplificada (LAS) para operação industrial. Essa licença concedida pelo órgão ambiental de Minas Gerais renova a autorização para fabricação de produtos químicos (tintas e revestimentos) e é válida por 10 anos, reforçando o compromisso da empresa com normas ambientais.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Transformação Digital",
      description:
        "Nos últimos anos a empresa ampliou sua presença digital e diversificou seus produtos. Mantém loja oficial no Mercado Livre, com vendas para todo o país. Dentre as inovações em produtos próprios destacam-se linhas de impermeabilizantes e revestimentos decorativos. Por exemplo, a Linha Imperflex traz impermeabilizantes elásticos (para piscinas e lajes) que protegem contra infiltraçõe e para paredes externas, eficazes contra fissuras causadas pela chuva. Outro produto é o Impermeabilizante Veda Mais, à base de resina acrílica branca, ideal contra batidas de chuva em telhados e superfícies externas. A empresa também comercializa revestimentos texturizados como o “Pedras Naturais” (revestimento acrílico texturizado com estética de pedras naturais, que confere acabamento sofisticado aos ambientes). Além disso, oferece diversas linhas de tintas látex econômicas e acabamento semibrilho para interiores.",
 image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2025",
      title: "Liderança Regional Consolidada",
      description:
        "Atualmente a Reveste Mais continua atuando como microempresa em Patos de Minas, com matriz e filial em Tiros. A classificação de microempresa indica que possui até 19 funcionários. A empresa atende clientes residenciais e comerciais da região, mantendo foco em qualidade e inovação. Em linha com a sustentabilidade, mantém sua licença ambiental regularizada e segue desenvolvendo produtos cada vez mais modernos para o mercado de tintas e revestimentos.",
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
