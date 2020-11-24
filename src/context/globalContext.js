import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [prueba, setPrueba] = useState(
    "Data en globalContext, desde globalContext"
  );
  console.log(prueba);
  return (
    <GlobalContext.Provider
      value={{
        prueba,
        setPrueba,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
