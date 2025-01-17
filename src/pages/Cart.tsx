import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const { addToCart, removeFromCart, decreaseQuantity, cartItems, products } =
    useContext(ShopContext);
  const Navigate = useNavigate();

  const cartArray = Object.entries(cartItems) as [string, number][];
  const [total, setTotal] = useState<number>(0);

  const addTotal = () => {
    let totalAmount = 0;

    cartArray.forEach(([itemId, quantity]) => {
      const product = products.find((p: Product) => p.id.toString() === itemId);
      if (product) {
        totalAmount += Number(product.price) * quantity;
      }
    });
    const formattedTotal = totalAmount.toFixed(2);
    setTotal(parseFloat(formattedTotal));
  };

  useEffect(() => {
    addTotal();
  }, [cartItems, products]);

  return (
    <div className="h-screen w-screen">
      {cartArray.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[50%] gap-2">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-sm">Your cart is currently empty.</p>
          <button onClick={() => Navigate("/")} className="text-sm underline ">
            Continue shopping
          </button>
        </div>
      ) : (
        <div className="w-full px-6 py-4 flex flex-col">
          <h1 className="text-3xl font-bold my-4 text-center">Cart</h1>
          <button onClick={() => Navigate("/")} className="text-sm underline ">
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

                        <span className="text-sm text-gray-800">{quantity}</span>

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
                      <p className="text-sm">${(Number(product.price) * quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtotal and Checkout */}
            <div className="md:w-[40%] md:px-6 md:py-3 mt-6 md:mt-0 md:bg-slate-50 md:rounded-md md:shadow-md">
              <div className="flex justify-between items-center text-sm mt-3">
                <p>Subtotal: </p>
                <p className="font-semibold">${total}</p>
              </div>

              <button className="mt-3 border rounded bg-tan py-2 text-sm tracking-widest uppercase text-white w-full">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
