import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import TextSection from './components/textSection/TextSection';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import { TEXTS } from './utils/translations';


function App() {
  

  return (
    <>
      <Header title={TEXTS.header.title} />
      <TextSection content={TEXTS.textSection.content1} />
      <TextSection content={TEXTS.textSection.content2} />
      <Counter />
      <Form />
      <Footer 
        copyrightInfo={TEXTS.footer.copyrightInfo}
        authorInfo={TEXTS.footer.authorInfo}
      />
    </>
  )
}

export default App
