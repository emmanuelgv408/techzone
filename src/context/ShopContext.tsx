import { createContext, ReactNode, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext<any>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

  const currency = "$";
  const delivery_fee = 10;

  // Function to add an item to the cart
  const addToCart = (itemId: string) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId: string) => {
    setCartItems((prevCart) => {
      if (!prevCart[itemId]) return prevCart;

      const updatedCart = { ...prevCart };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems({});
  };

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
