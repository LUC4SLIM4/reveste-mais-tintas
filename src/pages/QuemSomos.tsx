export function QuemSomos() {
  const values = [
    {
      icon: "🛡️",
      title: "Qualidade e Inovação",
      description: "Buscamos a excelência em nossos produtos e serviços, sempre atentos às novidades do mercado.",
    },
    {
      icon: "🎯",
      title: "Ética e Transparência",
      description:
        "Conduzimos nossos negócios com integridade, honestidade e respeito aos nossos clientes e parceiros.",
    },
    {
      icon: "❤️",
      title: "Atendimento Humano",
      description:
        "Priorizamos o relacionamento e a satisfação de nossos clientes, oferecendo um atendimento personalizado e atencioso.",
    },
    {
      icon: "🎯",
      title: "Comprometimento com Resultados",
      description:
        "Trabalhamos com foco em alcançar os objetivos de nossos clientes, buscando sempre as melhores soluções.",
    },
    {
      icon: "👥",
      title: "Valorização das Pessoas",
      description:
        "Acreditamos no potencial de nossos colaboradores e investimos em seu desenvolvimento profissional e pessoal.",
    },
    {
      icon: "🌱",
      title: "Responsabilidade Ambiental",
      description:
        "Adotamos práticas sustentáveis em nossos processos, minimizando o impacto ambiental de nossas atividades.",
    },
  ]

  const timeline = [
    { year: "2013", event: "Fundação da Reveste Mais Tintas em Patos de Minas/MG" },
    { year: "2015", event: "Consolidação no mercado regional" },
    { year: "2017", event: "Expansão da linha de produtos" },
    { year: "2019", event: "Implementação de práticas sustentáveis" },
    { year: "2021", event: "Modernização e digitalização" },
    { year: "2024", event: "Mais de uma década de excelência" },
  ]

  return (
    <div style={{ paddingTop: "8rem" }}>
      {/* Hero Section */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(to right, #003AAA, #0056D6)", color: "white" }}
      >
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Mais de 11 anos transformando ambientes com qualidade, confiança e atendimento especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Reveste Mais nasceu de um sonho</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#6b7280" }}>
                <p>
                  Fundada em 2013 em Patos de Minas/MG, a Reveste Mais Tintas iniciou sua trajetória com o compromisso
                  de oferecer soluções completas em tintas e revestimentos.
                </p>
                <p>
                  Nossa história é marcada pela inovação e excelência, buscando sempre atender às necessidades de
                  profissionais e consumidores finais.
                </p>
                <p>
                  Nos tornamos referência regional no setor, oferecendo produtos de alta qualidade e um atendimento
                  personalizado.
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="História da Reveste Mais"
                className="rounded-2xl shadow-xl"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Trajetória</h2>
            <p className="text-xl text-gray-600">Marcos importantes da nossa história</p>
          </div>

          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      backgroundColor: "#003AAA",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.year}
                  </div>
                  <div className="card p-6" style={{ flex: 1 }}>
                    <p style={{ color: "#374151" }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Os pilares que guiam nossa empresa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div
                  style={{
                    width: "5rem",
                    height: "5rem",
                    backgroundColor: "rgba(0, 58, 170, 0.1)",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "2.5rem",
                  }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding" style={{ backgroundColor: "#003AAA", color: "white" }}>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Oferecer soluções completas em tintas e revestimentos, com qualidade, inovação e atendimento
                personalizado, superando as expectativas de nossos clientes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Ser a empresa líder e referência no mercado de tintas e revestimentos, reconhecida pela excelência,
                inovação e compromisso com a sustentabilidade.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Qualidade e inovação, ética e transparência, atendimento humano, comprometimento com resultados,
                valorização das pessoas e responsabilidade ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
