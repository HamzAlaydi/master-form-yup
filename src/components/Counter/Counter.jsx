import React, { useContext } from "react";
import { CounterContext } from "../../utils/contexts/CounterContext";
import { EditeNameContext } from "../../utils/contexts/EditeName";
const Counter = () => {
  //state
  const { counter, incressCounter, decressCounter } =
    useContext(CounterContext);
  const { name, deleteName } = useContext(EditeNameContext);
  return (
    <div>
      <h1>{name}</h1>
      <p>{counter}</p>

      <button onClick={incressCounter}> + </button>
      <button onClick={decressCounter}> - </button>
      <button onClick={deleteName}>Delte Name</button>
    </div>
  );
};

export default Counter;
