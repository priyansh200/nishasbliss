import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import BraidsGallery from './pages/BraidsGallery';
import BridalMehndi from './pages/BridalMehndi';
import BridesmaidMakeupGallery from './pages/BridesmaidMakeupGallery';
import BunsGallery from './pages/BunsGallery';
import Hairstyle from './pages/Hairstyle';
import Heena from './pages/Heena';
import Home from './pages/Home';
import LegBloomHenna from './pages/LegBloomHenna';
import Makeup from './pages/Makeup';
import NonBridalMehndi from './pages/NonBridalMehndi';
import OpenHairstyleGallery from './pages/OpenHairstyleGallery';
import PartyMakeupGallery from './pages/PartyMakeupGallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/makeup" element={<Makeup />} />
            <Route path="/hairstyle" element={<Hairstyle />} />
            <Route path="/heena" element={<Heena />} />
            <Route path="/braids-gallery" element={<BraidsGallery />} />
            <Route path="/buns-gallery" element={<BunsGallery />} />
            <Route path="/open-hairstyle-gallery" element={<OpenHairstyleGallery />} />
            <Route path="/bridal-mehndi" element={<BridalMehndi />} />
            <Route path="/non-bridal-mehndi" element={<NonBridalMehndi />} />
            <Route path="/leg-bloom-henna" element={<LegBloomHenna />} />
            <Route path="/makeup/bridesmaid-makeup" element={<BridesmaidMakeupGallery />} />
            <Route path="/makeup/party-makeup" element={<PartyMakeupGallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
