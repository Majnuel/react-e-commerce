import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const pushItem = (newItem) => {
    items.push(newItem);
  };

  // let itemToAdd = getItem(state, payload.item.id);
  // while (itemToAdd === undefined) {
  // state.items = [ ...state.items, {
  // ...payload.item,
  // quantity: 0
  // }]
  // itemToAdd = getItem(state, payload.item.id);
  // }
  // itemToAdd.quantity += payload.quantity;

  return (
    <CartContext.Provider value={{ items, pushItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
