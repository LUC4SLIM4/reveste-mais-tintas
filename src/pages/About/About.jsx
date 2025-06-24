"use client"
import { FiAward, FiUsers, FiTrendingUp, FiHeart, FiShield, FiStar, FiTarget, FiCheckCircle } from "react-icons/fi"
import styles from "./About.module.css"

const About = () => {
  const timelineEvents = [
    {
      year: "2013",
      title: "Fundação da Reveste Mais Tintas",
      description:
        "A Reveste Mais Tintas e Revestimentos Acrílicos Ltda. foi fundada em Patos de Minas (MG) em 14 de junho de 2013 . Desde a abertura já é registrada como microempresa, atuando na fabricação de tintas e revestimentos acrílicos para pintura residencial e comercial.",
    },
    {
      year: "2018",
      title: "Filial em Tiros",
      description:
        "Em 27 de agosto de 2018, a Reveste Mais inaugurou sua primeira filial fora de Patos de Minas, no município de Tiros (MG). Essa expansão física ampliou a atuação da empresa no Triângulo Mineiro.",
    },
    {
      year: "2021",
      title: "Renovação de Licença",
      description:
        "Em 17 de novembro de 2021 a Reveste Mais obteve a renovação de sua Licença Ambiental Simplificada (LAS) para operação industrial. Essa licença concedida pelo órgão ambiental de Minas Gerais renova a autorização para fabricação de produtos químicos (tintas e revestimentos) e é válida por 10 anos, reforçando o compromisso da empresa com normas ambientais.",
    },
    {
      year: "2023",
      title: "Transformação Digital",
      description:
        "Nos últimos anos a empresa ampliou sua presença digital e diversificou seus produtos. Mantém loja oficial no Mercado Livre, com vendas para todo o país. Dentre as inovações em produtos próprios destacam-se linhas de impermeabilizantes e revestimentos decorativos.",
    },
    {
      year: "2025",
      title: "Liderança Regional Consolidada",
      description:
        "Atualmente a Reveste Mais continua atuando como microempresa em Patos de Minas, com matriz e filial em Tiros. A empresa atende clientes residenciais e comerciais da região, mantendo foco em qualidade e inovação.",
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
      description: "Nossa equipe é treinada para oferecer um atendimento próximo, atencioso e personalizado.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Presença Regional Forte",
      description:
        "Com sede em Patos de Minas e filial em Tiros, ampliamos nossa atuação no Alto Paranaíba com agilidade logística.",
    },
    {
      icon: <FiHeart />,
      title: "Compromisso com a Qualidade",
      description: "Selecionamos cuidadosamente nossas matérias-primas e seguimos rigorosos padrões de produção.",
    },
    {
      icon: <FiAward />,
      title: "Soluções Completas",
      description: "Desenvolvemos produtos específicos para diferentes superfícies e ambientes, internos e externos.",
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
        "Formada em Farmácia pelo UNIPAM, Patrícia é uma das fundadoras da Reveste Mais Tintas, criada em 2013. Atua na gestão estratégica e administrativa da empresa, consolidando a marca no mercado regional.",
      image: "/patricia.png",
    },
  ]

  const stats = [
    { number: "10+", label: "Anos de Experiência" },
    { number: "50k+", label: "Clientes Satisfeitos" },
    { number: "200+", label: "Cores Disponíveis" },
    { number: "98%", label: "Satisfação do Cliente" },
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
              nossos valores e o compromisso que nos move todos os dias.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/empresa-fachada.png" alt="Fachada da Reveste Mais Tintas em Patos de Minas" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <h2>Nossa História</h2>

          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p>
                A Reveste Mais Tintas nasceu em 2013 do sonho de duas empreendedoras mineiras, Patrícia Emiliane e
                Roberta Lívia, determinadas a transformar o mercado de tintas com produtos de qualidade e atendimento
                diferenciado. Tudo começou em Patos de Minas, em uma estrutura modesta, mas com um propósito ousado:
                fabricar tintas acrílicas que unissem tecnologia, durabilidade e beleza.
              </p>
              <p>
                Nos primeiros anos, os desafios foram grandes. Enfrentar concorrentes consolidados exigiu resiliência e
                visão estratégica. Apostamos na fabricação própria, no relacionamento próximo com os clientes e no
                compromisso com a excelência em cada produto entregue. Aos poucos, conquistamos a confiança do mercado
                regional.
              </p>
              <p>
                O grande marco veio em 2018, com a abertura da nossa primeira filial na cidade de Tiros-MG. Esse passo
                foi fundamental para expandir nossa presença e reafirmar nosso propósito de levar mais cor e qualidade
                para os lares e obras da região.
              </p>
              <p>
                Hoje, mais de uma década depois, a Reveste Mais é reconhecida como referência na fabricação de tintas e
                revestimentos acrílicos, com uma estrutura sólida, produção local e uma equipe comprometida com o que
                faz. Nossa essência continua a mesma: acreditar que cada parede pintada pode contar uma história de
                dedicação, inovação e paixão pelas cores.
              </p>
            </div>

            <div className={styles.storyImage}>
              <img src="/fabrica-producao.png" alt="Fábrica e produção da Reveste Mais" />
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
                durabilidade e beleza. Valorizamos o atendimento próximo e confiável.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FiStar />
              </div>
              <h3>Visão</h3>
              <p>
                Ser referência em tintas e revestimentos no estado de Minas Gerais até 2030, reconhecida pela fabricação
                própria, atendimento humanizado e compromisso com a inovação.
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
          <h2>Nossos Diferenciais</h2>

          <div className={styles.differentialsContent}>
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
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h2>Nossa Trajetória</h2>

          <div className={styles.timelineContent}>
            <div className={styles.timelineImage}>
              <img src="/timeline-historia.png" alt="Reveste Mais Tintas - nossa trajetória" />
            </div>

            <div className={styles.timelineEvents}>
              {timelineEvents.map((event, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <div className={styles.timelineText}>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2>Fundadoras da Reveste Mais Tintas</h2>

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
    </div>
  )
}

export default About
