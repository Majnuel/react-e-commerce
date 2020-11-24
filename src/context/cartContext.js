import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
  const [item, setItem] = useState("Nombre de Item(data en CartContext)");
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
