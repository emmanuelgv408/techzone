import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lastName: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    const { name, lastName, email, password } = formData;

    try {
      await axios.post("techzone-backend-eklh.onrender.com/auth/register", {
        name,
        lastName,
        email,
        password,
      });

      toast.success("Registration successful!");
      navigate('/login');
    } catch (error: any) {
      console.error("Registration failed:", error);

      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Email is already in use");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-3 py-10 rounded-lg flex flex-col gap-3 bg-gray bg-opacity-50 backdrop-blur-lg">
        <h2 className="uppercase tracking-wider text-3xl font-semibold text-center">TechZone</h2>
        <h2 className="text-xl font-semibold">Register</h2>

        <form onSubmit={registerUser} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border px-2 border-black/25 shadow-sm rounded placeholder-black"
          />
           <input
            type="text"
            name="Last name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="border px-2 border-black/25 shadow-sm rounded placeholder-black"
          />
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
            className="bg-tan hover:bg-tan/90 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
