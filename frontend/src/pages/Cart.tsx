import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Product from "./Product";
import { loadStripe } from "@stripe/stripe-js";
import { FaSpinner } from "react-icons/fa";

const Cart = () => {
  const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    cartItems,
    products,
    user,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartArray = Object.entries(cartItems) as [string, number][];
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const addTotal = () => {
    let totalAmount = 0;

    cartArray.forEach(([itemId, quantity]) => {
      const product = products.find((p: Product) => p.id.toString() === itemId);
      if (product) {
        totalAmount += parseFloat(product.price) * quantity;
      }
    });
    const formattedTotal = totalAmount.toFixed(2);
    setTotal(parseFloat(formattedTotal));
  };

  useEffect(() => {
    addTotal();
  }, [cartItems, products]);

  const makePayment = async () => {
    if (!user) {
      toast.error("Please log in to proceed with checkout.");
      navigate("/login");
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51QmILUB7AOLTKU93Je2qFMk3N1ZSawDFXE9sPsmbB7lIwy9akO11Ong7gK4KJCdXkMhwGhBLeLWermo4XcmiMJdB00JSKKRCXK"
    );

    const body = {
      products: cartArray.map(([itemId, quantity]) => {
        const product = products.find(
          (p: Product) => p.id.toString() === itemId.toString()
        );
        return {
          name: product?.name,
          price: product?.price,
          image: product?.image,
          quantity,
        };
      }),
    };

    try {
      setIsLoading(true);

      const token = localStorage.getItem("authToken");

      if (!token) {
        toast.error("Authentication token missing. Please log in again.");
        navigate("/login");
        return;
      }

      const response = await fetch(
        "https://techzone-backend-eklh.onrender.com/api/payments/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      const { sessionId } = await response.json();

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Stripe error:", error.message);
        }
      }
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen">
      {cartArray.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[50%] gap-2">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-sm">Your cart is currently empty.</p>
          <button onClick={() => navigate("/")} className="text-sm underline">
            Continue shopping
          </button>
        </div>
      ) : (
        <div className="w-full px-6 py-4 flex flex-col">
          <h1 className="text-3xl font-bold my-4 text-center">Cart</h1>
          <button onClick={() => navigate("/")} className="text-sm underline">
            Continue shopping
          </button>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 mt-5">
            <div className="flex-1">
              {cartArray.map(([itemId, quantity]) => {
                const product = products.find(
                  (p: Product) => p.id.toString() === itemId
                );

                if (!product) return null;

                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border-b border-gray-200"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                    />

                    <div className="flex-1 px-4">
                      <h2 className="text-lg">{product.name}</h2>
                      <div className="flex items-center justify-between w-[90px] border border-gray-300">
                        <button
                          className="text-lg font-bold text-gray-700 hover:bg-gray-200 px-2"
                          onClick={() => decreaseQuantity(itemId)}
                        >
                          -
                        </button>

                        <span className="text-sm text-gray-800">
                          {quantity}
                        </span>

                        <button
                          className="text-lg font-bold text-gray-700 hover:bg-gray-200 px-2"
                          onClick={() => addToCart(itemId)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-[0.75rem] hover:underline mt-2"
                        onClick={() => removeFromCart(itemId)}
                      >
                        Remove
                      </button>
                    </div>

                    <div>
                      <p className="text-sm">
                        ${(Number(product.price) * quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="md:w-[40%] md:px-6 md:py-3 mt-6 md:mt-0 md:bg-slate-50 md:rounded-md md:shadow-md">
              <div className="flex justify-between items-center text-sm mt-3">
                <p>Subtotal: </p>
                <p className="font-semibold">${total}</p>
              </div>

              <button
                type="button"
                onClick={makePayment}
                className="mt-3 border rounded bg-tan py-2 text-sm tracking-widest uppercase text-white w-full flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "Checkout"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
