import Header from './components/header/Header';
import TextSection from './components/textSection/TextSection';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <TextSection content="During development, Vite sets esnext as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code." />
      <TextSection content="For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official @vitejs/plugin-legacy. See the Building for Production section for more details." />
      <Footer />
    </>
  )
}

export default App



// Zadanie 7
// Zmodyfikuj komponenty Header, footer oraz textSection - tak zeby wyświetlały dane dostarczone
// w mechanizmie props