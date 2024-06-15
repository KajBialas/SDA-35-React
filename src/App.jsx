import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Offer from './pages/offer/Offer';
import About from './pages/about/About';
import { TEXTS } from './utils/translations';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Router>
        <Header title={TEXTS.header.title} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </Router>

      <Footer 
        copyrightInfo={TEXTS.footer.copyrightInfo}
        authorInfo={TEXTS.footer.authorInfo}
      />
    </>
  )
}

export default App


// Zadanie 4
// Dodaj routing w aplikacji
// Utworz przełączanie między stronami: Home, About, Offer oraz Contact - /, /about, /offer, /contact