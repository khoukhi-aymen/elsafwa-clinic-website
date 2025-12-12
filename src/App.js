import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserInterface from './layout/UserInterface';
import Home from './pages/Home';
import About from './pages/About';
import Emballage from "./pages/services/Emballage";
import Construction from "./pages/services/Construction";
import Agricole from "./pages/services/Agricole";
import Huile from './pages/services/Huile';
import Dattes from './pages/services/Dattes';
import Agroalimentaire from './pages/services/Argoalimentaire';

function App() {
  return (
    <div>
      <Routes>
        {/* Interface utilisateur publique */}
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="produits/Construction" element={<Construction />} />
          <Route path="produits/Emballage" element={<Emballage />} />
          <Route path="produits/Agroalimentaire" element={<Agroalimentaire />} />
          <Route path="produits/Agricole" element={<Agricole />} />
          <Route path="produits/Huile" element={<Huile />} />
          <Route path="produits/Dattes" element={<Dattes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
