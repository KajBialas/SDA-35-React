import { useState, useEffect } from "react";
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

  // const timeout = setInterval(() => {
  //   // setCounter(counter+1)
  // }, 10000);

  // clearInterval(timeout);


  // montowanie komponentu
  // odswiezanie komponentu
  // odmontowywanie komponentu

  useEffect(() => {
    console.log('montowanie komponentu');

    return () => {
      console.log('odmontowywanie komponentu');
    }
  }, []);

  useEffect(() => {
    console.log('odswiezenie przez counter')
  }, [counter]);

  useEffect(() => {
    console.log('kazde odswiezenie komponentu');
  });

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

