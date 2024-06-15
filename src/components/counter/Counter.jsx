import { useState } from "react";
import Button from "../button/Button";
import TextSection from "../textSection/TextSection";
import { TEXTS } from "../../utils/translations";

const INITIAL_COUNTER_VALUE = 0;

const Counter = () => {
  const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  }

  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  }

  const handleResetCounter = () => {
    setCounter(INITIAL_COUNTER_VALUE);
  }

  return (
    <>
        <TextSection content={counter} />
        <Button text={TEXTS.counter.button.incrementText} handleClick={handleIncrementCounter} type="positive"/>
        <Button text={TEXTS.counter.button.decrementText} handleClick={handleDecrementCounter} type="negative"/>
        <Button text={TEXTS.counter.button.resetText} handleClick={handleResetCounter} />
    </>
  )
}

export default Counter;


// Zadanie 0
// Utwórz komponent button oraz przekaz mu wszystkie parametry niezbedne do obslugi stanu licznika

// Zadamie 0 dodatkowe
// Utwórz typy przycisku, tak zeby kazdy z rodzaju mial inny kolor