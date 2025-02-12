import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


interface Order {
  _id: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

const Profile: React.FC = () => {
  const { user, logoutUser } = useContext(ShopContext); 
  const navigate = useNavigate(); 

  const [pastOrders, setPastOrders] = useState<Order[]>([]); // State to store past orders

  useEffect(() => {
    const fetchPastOrders = async () => {
      if (user) {
        try {
          const response = await axios.get(`/api/past-orders/${user._id}`);
          setPastOrders(response.data);
        } catch (error) {
          console.error('Error fetching past orders:', error);
          toast.error('Failed to load past orders');
        }
      }
    };

    fetchPastOrders(); 
  }, [user]); 
  const handleLogout = async () => {
    try {
      await logoutUser(); 
      navigate('/'); 
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed!');
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="profile-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center">
        Welcome, {user?.name} {user?.lastName}
      </h2>

      <div className="profile-info mt-4">
        <p className="text-lg">Email: {user?.email}</p>
      </div>

      <div className="orders mt-6">
        <h3 className="text-2xl font-semibold">Your Past Orders:</h3>
        {pastOrders.length > 0 ? (
          <ul>
            {pastOrders.map((order) => (
              <li key={order._id} className="border-b py-2">
                <p className="text-lg">Order ID: {order._id}</p>
                <p>Status: {order.status}</p>
                <p>Total: ${order.totalAmount}</p>
                <p>Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No past orders found.</p>
        )}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleLogout} 
          className="bg-tan text-white py-2 px-6 rounded-full hover:bg-tan/70"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
