import React, { useState, createContext } from "react";

//create context

export const EditeNameContext = createContext("Hamza");

// create provider

const EditeNameContextProvider = (props) => {
  //states
  const [name, setName] = useState("Hamza");

  //Functions
  const deleteName = (name) => {
    setName("");
  };

  return (
    <EditeNameContext.Provider value={{ name, deleteName }}>
      {props.children}
    </EditeNameContext.Provider>
  );
};

export default EditeNameContextProvider;
