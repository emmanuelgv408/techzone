import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ShopContext } from "../context/ShopContext";
import { loadStripe } from "@stripe/stripe-js";
import Related from "../components/Related";
import { FaSpinner } from "react-icons/fa"; // Import FaSpinner

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

const stripePromise = loadStripe(
  "pk_test_51QmILUB7AOLTKU93Je2qFMk3N1ZSawDFXE9sPsmbB7lIwy9akO11Ong7gK4KJCdXkMhwGhBLeLWermo4XcmiMJdB00JSKKRCXK"
);

const Product = () => {
  const { products, addToCart, user } = useContext(ShopContext);
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p: Product) => p.id.toString() === productId);
  const navigate = useNavigate();

  // State for loading spinners
  const [loadingAddToCart, setLoadingAddToCart] = useState(false);
  const [loadingBuyNow, setLoadingBuyNow] = useState(false);

  if (!product) return <div>Product not found</div>;

  const makePayment = async () => {
    if (!user) {
      toast.error("Please log in to proceed with checkout.");
      navigate("/login");
      return;
    }

    setLoadingBuyNow(true); // Set loading spinner for Buy Now button

    const stripe = await loadStripe(
      "pk_test_51QmILUB7AOLTKU93Je2qFMk3N1ZSawDFXE9sPsmbB7lIwy9akO11Ong7gK4KJCdXkMhwGhBLeLWermo4XcmiMJdB00JSKKRCXK"
    );

    const body = {
      products: [
        {
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ],
    };

    try {
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
      setLoadingBuyNow(false); // Set loading to false after payment process
    }
  };

  const handleAddToCart = () => {
    setLoadingAddToCart(true); // Set loading spinner for Add to Cart button
    addToCart(product.id);
    setLoadingAddToCart(false); // Set loading to false after adding to cart
  };

  return (
    <div className="w-screen flex flex-col items-center px-4 md:px-0">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row md:h-screen md:items-center md:justify-center">
        <div className="md:w-1/2 h-auto flex justify-center items-center px-5 my-4 md:my-0">
          <img
            src={product.image}
            alt={product.name || "Product image"}
            className="w-full max-w-[500px] h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 px-6 py-6 flex flex-col items-center justify-around bg-[#fafafa] shadow-md rounded-md max-w-[550px] md:max-w-[500px] h-auto">
          <p className="text-xs">{product.brand}</p>
          <h1 className="text-2xl">{product.name}</h1>
          <p className="text-sm mt-3 text-tan">${parseFloat(product.price).toFixed(2)}</p>
          <hr className="my-4 w-full border-gray-300" />
          <p className="text-center">{product.description}</p>
          <Link
            to="/cart"
            className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black text-center"
            onClick={handleAddToCart}
          >
            {loadingAddToCart ? (
              <FaSpinner className="animate-spin text-white" size={20} />
            ) : (
              "Add To Cart"
            )}
          </Link>
          <button
            type="button"
            className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black text-center"
            onClick={makePayment}
          >
            {loadingBuyNow ? (
              <FaSpinner className="animate-spin text-white" size={20} />
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto mt-10 px-4">
        <Related category={product.category} product={product} />
      </div>
    </div>
  );
};

export default Product;
