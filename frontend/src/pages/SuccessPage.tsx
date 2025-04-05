
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-green-50">
      <h1 className="text-3xl font-bold text-tan mb-4">Thank you for your purchase!</h1>
      <p className="text-lg text-gray-700 mb-6">
        We appreciate your order and hope you enjoy your new tech!
      </p>
      <Link
        to="/"
        className="bg-tan text-white px-6 py-2 rounded hover:bg-tan/80 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessPage;
