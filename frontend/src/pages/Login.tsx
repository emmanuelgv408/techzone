import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaSpinner } from "react-icons/fa"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "staysi6@gmail.com",
    password: "1234567",
  });
  const navigate = useNavigate();
  const { loginUser } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await loginUser(formData.email, formData.password);
    if (success) {
      navigate("/"); // Redirect to home page
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-3 py-10 rounded-lg flex flex-col gap-3 bg-gray bg-opacity-50 backdrop-blur-lg">
        <h2 className="uppercase tracking-wider text-3xl font-semibold text-center">
          TechZone
        </h2>
        <h2 className="text-xl font-semibold">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border px-2 border-black/25 shadow-sm rounded placeholder-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border px-2 border-black/25 shadow-sm rounded placeholder-black"
          />
          <button
            type="submit"
            className="bg-tan hover:bg-tan/90 text-white py-2 rounded-md flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Continue"
            )}
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
