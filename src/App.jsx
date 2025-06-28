import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galeria from "./Galeria";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <Router>
      <Navbar />
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
      </Routes>
      <Footer />
  
    </Router>
  );
}

export default App;
