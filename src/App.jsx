import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Offer from './pages/offer/Offer';
import About from './pages/about/About';
import Users from './pages/users/Users';
import Counter from './pages/counter/Counter';
import Blog from './pages/blog/Blog';
import BlogPostDetails from './pages/blogPostDetails/BlogPostDetails';
import { TEXTS } from './utils/translations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
          <Route path="/users" element={<Users />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPostDetails />} />
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


// Zadanie 0
// 1. Utwórz podstrone Counter, oraz przenieś tam komponent licznika
// 2. Utwórz podstrone Uzytkownicy oraz przenies tam komponet formularza
// 3. Utwórz w menu linki do wszystkich podstron

