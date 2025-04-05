
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Checkout Canceled</h1>
      <p className="text-lg text-gray-700 mb-6">
        It looks like you canceled your checkout. No worries!
      </p>
      <Link
        to="/"
        className="bg-tan text-white px-6 py-2 rounded hover:bg-tan/80 transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default CancelPage;
