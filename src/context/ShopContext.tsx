import { createContext, ReactNode, useEffect, useState } from "react";
import { products } from "../assets/assets";
import axios from "axios";

export const ShopContext = createContext<any>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
  backgroundImage: string;
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    if (!user) {
      axios
        .get("/auth/profile") 
        .then((res) => {
          setUser(res.data); 
        })
       
    }
  }, []);

  const currency = "$";
  const delivery_fee = 10;

  const cartCount = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const addToCart = (itemId: string) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      delete updatedCart[itemId]; // Remove the item from the cart
      setCartItems(updatedCart);
    }
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]; // Remove item if quantity is 0
      } else {
        updatedCart[itemId] -= 1; // Decrease quantity
      }
      setCartItems(updatedCart);
    }
  };
  const logout = () => {
   
    setUser("");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    localStorage.removeItem("token");
    window.location.reload() 
  };

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart: () => setCartItems({}),
    cartCount,
    user,
    setUser,
    logout
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
