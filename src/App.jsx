import Header from './components/header/Header';
import TextSection from './components/textSection/TextSection';
import Footer from './components/footer/Footer';
import { TEXTS } from './utils/translations';


function App() {

  return (
    <>
      <Header title={TEXTS.header.title} />
      <TextSection content={TEXTS.textSection.content1} />
      <TextSection content={TEXTS.textSection.content2} />
      <Footer 
        copyrightInfo={TEXTS.footer.copyrightInfo}
        authorInfo={TEXTS.footer.authorInfo}
      />
    </>
  )
}

export default App



