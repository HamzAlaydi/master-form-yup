import React, { useState, createContext } from "react";

//state

//constanse
export const CounterContext = createContext(0);

//Create Provider that provid data i want to share

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const incressCounter = (_) => setCounter(counter + 1);
  const decressCounter = (_) => setCounter(counter - 1);

  const values = {
    counter,
    incressCounter,
    decressCounter,
  };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
