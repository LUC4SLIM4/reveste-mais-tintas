import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { WhatsAppButton } from "./components/WhatsAppButton"
import { Home } from "./pages/Home"
import { QuemSomos } from "./pages/QuemSomos"
import { Produtos } from "./pages/Produtos"
import { Sustentabilidade } from "./pages/Sustentabilidade"
import { Contato } from "./pages/Contato"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sustentabilidade" element={<Sustentabilidade />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
