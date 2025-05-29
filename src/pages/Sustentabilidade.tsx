export function Sustentabilidade() {
  const initiatives = [
    {
      icon: "♻️",
      title: "Gestão de Resíduos",
      description:
        "Programa de coleta e descarte adequado de resíduos, promovendo a reciclagem e a redução do impacto ambiental.",
    },
    {
      icon: "🌱",
      title: "Produtos Sustentáveis",
      description:
        "Tintas com baixa emissão de poluentes e produtos eco-friendly, minimizando o impacto na saúde e no meio ambiente.",
    },
    {
      icon: "💧",
      title: "Uso Racional de Recursos",
      description: "Implementação de práticas para o uso consciente de água e energia em todas as etapas do processo.",
    },
    {
      icon: "🏆",
      title: "Apoio à Comunidade",
      description:
        "Incentivo e apoio a ações ecológicas na comunidade, promovendo a conscientização e o engajamento em causas ambientais.",
    },
  ]

  return (
    <div style={{ paddingTop: "8rem" }}>
      {/* Hero Section */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(to right, #16a34a, #15803d)", color: "white" }}
      >
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustentabilidade</h1>
            <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: "1rem" }}>
              Colorir o mundo sem prejudicar o planeta
            </p>
            <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Pintar com responsabilidade também faz parte da nossa missão
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nosso Compromisso Ambiental</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#6b7280" }}>
                <p>
                  Na Reveste Mais, acreditamos que é possível transformar ambientes de forma responsável e sustentável.
                  Por isso, implementamos práticas que minimizam o impacto ambiental.
                </p>
                <p>
                  Trabalhamos com fornecedores comprometidos com a sustentabilidade e orientamos nossos clientes sobre
                  as melhores práticas para um consumo consciente.
                </p>
                <p>
                  Nosso objetivo é contribuir para um futuro mais verde, onde a beleza dos ambientes não comprometa a
                  saúde do planeta.
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Sustentabilidade"
                className="rounded-2xl shadow-xl"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossas Iniciativas</h2>
            <p className="text-xl text-gray-600">Ações concretas para um futuro sustentável</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card p-8 text-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "2rem",
                  }}
                >
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding" style={{ backgroundColor: "#16a34a", color: "white" }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Impacto</h2>
            <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Resultados das nossas ações sustentáveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Litros de tinta reciclados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Embalagens coletadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Produtos eco-friendly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
