import React, { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (FoodName, FoodPrice, FoodImage) => {
    setItems((items) => [...items, { FoodName, FoodPrice, FoodImage }]);
    console.log(FoodName, FoodPrice, FoodImage);
  };

  return (
    <React.Fragment>
      <CartContext.Provider value={{ items, addToCart }}>
        {children}
      </CartContext.Provider>
    </React.Fragment>
  );
};

export default CartContext;
