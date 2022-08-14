import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { decrement, increment } from "../Features/Counter/counterSlice";
const CounterComponent = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatcher = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <input
        type="Number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>CurrentValue {counter}</p>
      <p>Changeing Value By {inputValue}</p>
      <button onClick={() => dispatcher(increment(Number(inputValue) || 0))}>
        INCREMENT +
      </button>
      <button onClick={() => dispatcher(decrement(Number(inputValue) || 0))}>
        DECREMENT -
      </button>
    </div>
  );
};

export default CounterComponent;
