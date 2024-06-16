import { useState, useEffect } from "react";
import Button from "../button/Button";
import TextSection from "../textSection/TextSection";
import { TEXTS } from "../../utils/translations";

const INITIAL_COUNTER_VALUE = 0;

const Counter = () => {
  const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE);
  const [intervalTime, setIntervalTime] = useState(5);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  }

  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  }

  const handleResetCounter = () => {
    setCounter(INITIAL_COUNTER_VALUE);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentState) => currentState + 1);
    }, intervalTime * 1000);

    return () => {
      clearInterval(interval);
    }
  }, [intervalTime]);



  return (
    <>
        <TextSection content={counter} />
        <Button text={TEXTS.counter.button.incrementText} handleClick={handleIncrementCounter} type="positive"/>
        <Button text={TEXTS.counter.button.decrementText} handleClick={handleDecrementCounter} type="negative"/>
        <Button text={TEXTS.counter.button.resetText} handleClick={handleResetCounter} />

        <h2>Wybierz czas zwiększania</h2>
        <button onClick={() => setIntervalTime(1)}>1</button>
        <button onClick={() => setIntervalTime(5)}>5</button>
        <button onClick={() => setIntervalTime(10)}>10</button>
        <button onClick={() => setIntervalTime(15)}>15</button>
    </>
  )
}

export default Counter;


// Zadanie 1
// Utwórz funkcjonalność automatycznego zwięszkania się stanu licznika co 5s

// Zadanie 1 Dodatkowe
// Utwórz przyciski, ktore pozwola wybrac co ile sekund ma automatycznie zwiekszac się licznik 5, 10 ,15