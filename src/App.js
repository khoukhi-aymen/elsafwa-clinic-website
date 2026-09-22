import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserInterface from './layout/UserInterface';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Terroir from "./pages/services/Terroir";
import MatierePremiere from "./pages/services/MatierePremiere";
import Agricole from "./pages/services/Agricole";
import Huile from './pages/services/Huile';
import Manufactures from './pages/services/Manufactures';

function App() {
  return (
    <div>
      <Routes>
        {/* Interface utilisateur publique */}
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="produits/matieres" element={<MatierePremiere />} />
          <Route path="produits/terroir" element={<Terroir />} />
          <Route path="produits/manufactures" element={<Manufactures />} />
          <Route path="produits/agricoles" element={<Agricole />} />
          <Route path="produits/huiles" element={<Huile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;