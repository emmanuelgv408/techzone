import { createContext, ReactNode, useEffect, useState } from "react";
import { products } from "../assets/assets";
import axios from "axios";
import { toast } from "react-hot-toast";


export const ShopContext = createContext<any>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}


const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [user, setUser] = useState<string>("");


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/auth/profile", { withCredentials: true });
        setUser(res.data); // Store full user object
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        setUser(''); // Ensure state resets if request fails
      }
    };

    fetchUserProfile();
  }, []);

  const logoutUser = async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      setUser("");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };
 
  const loginUser = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        "https://techzone-backend-eklh.onrender.com/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.error) {
        toast.error(res.data.error);
        return false;
      } else {
        setUser(res.data.user);
        toast.success("Login successful!");
        return true;
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
      return false;
    }
  };
  
  

 
  

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
    logoutUser,
    loginUser,


  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
