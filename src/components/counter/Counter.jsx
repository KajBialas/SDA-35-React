import { useState } from "react";
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
        <div>{counter}</div>
        <button onClick={handleIncrementCounter}>{TEXTS.counter.button.incrementText}</button>
        <button onClick={handleDecrementCounter}>{TEXTS.counter.button.decrementText}</button>
        <button onClick={handleResetCounter}>{TEXTS.counter.button.resetText}</button>
    </>
  )
}

export default Counter;