import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const res = await axios.post('http://localhost:5001/auth/login', {
        email,
        password,
      });

      if (res.data.error) {
        toast.error(res.data.error);  
      } else {
        toast.success('Login successful!');
        
        navigate('/');  
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-3 py-10 rounded-lg flex flex-col gap-3 bg-gray bg-opacity-50 backdrop-blur-lg">
        <h2 className='uppercase tracking-wider text-3xl font-semibold text-center'>TechZone</h2>
        <h2 className="text-xl font-semibold">Login</h2>

        <form onSubmit={loginUser} className="flex flex-col gap-3">
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
            className="bg-tan hover:bg-tan/90 text-white py-2 rounded-md "
          >
            Continue
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="/register"
              className="text-blue-500 hover:underline"
            >
              Register
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
