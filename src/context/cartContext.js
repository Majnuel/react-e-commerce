import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  const pushItem = (newItem) => {
    item.push(newItem);
  };
  return (
    <CartContext.Provider value={{ item, pushItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
