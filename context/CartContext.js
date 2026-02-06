"use client";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const found = state.find(i => i.id === action.item.id);
      if (found) {
        return state.map(i =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.item, qty: 1 }];

    case "REMOVE":
      return state.filter(i => i.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
