import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {setUserToken} = useContext(ShopContext);
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
        setUserToken(res.data.token);
        navigate('/');  
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={loginUser} className="space-y-4">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
