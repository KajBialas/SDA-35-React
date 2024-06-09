import { useState } from 'react';
import Header from './components/header/Header';
import TextSection from './components/textSection/TextSection';
import Footer from './components/footer/Footer';
import { TEXTS } from './utils/translations';


function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  }

  // let counter = 0;

  // const button = document.querySelector('.button');

  // button.addEventListener('click', () => {
  //   counter = counter + 1;
    
  //   const result = document.querySelector('.result');
  //   result.innerHTML = counter;
  // });

  return (
    <>
      <Header title={TEXTS.header.title} />
      <TextSection content={TEXTS.textSection.content1} />
      <TextSection content={TEXTS.textSection.content2} />

      <div className='result'>{counter}</div>
      <button className='button' onClick={handleIncrementCounter}>ZWIĘKSZ WARTOŚĆ</button>

      <Footer 
        copyrightInfo={TEXTS.footer.copyrightInfo}
        authorInfo={TEXTS.footer.authorInfo}
      />
    </>
  )
}

export default App


// Zadanie 7
// Zmodyfikuj komponent APP, tak zeby: miał moliwość zwiększania, zmniejszania, oraz resetowania stanu licznika

