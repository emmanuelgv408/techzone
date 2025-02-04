import axios from "axios";
import { FormEvent, ReactEventHandler, useState } from "react";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); 

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      const res = await axios.post("http://localhost:5001/auth/register", {
        name,
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
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
     
        <form onSubmit={registerUser} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}

            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}

            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
