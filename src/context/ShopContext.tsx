import { createContext, ReactNode } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext<any>(null);

const currency = "$";
const delivery_fee = 10;

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
