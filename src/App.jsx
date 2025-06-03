import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ColorCatalog from './pages/ColorCatalog/ColorCatalog';
import Inspirations from './pages/Inspirations/Inspirations';
import PaintingTips from './pages/PaintingTips/PaintingTips';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nossas-tintas" element={<Products />} />
          <Route path="/catalogo-de-cores" element={<ColorCatalog />} />
          <Route path="/inspiracoes" element={<Inspirations />} />
          <Route path="/dicas-de-pintura" element={<PaintingTips />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;