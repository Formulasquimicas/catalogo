import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galeria from "./Galeria";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;