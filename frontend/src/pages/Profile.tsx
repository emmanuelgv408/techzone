import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { toast } from 'react-toastify'; 

const Profile = () => {

  const { user, logoutUser } = useContext(ShopContext); // Getting user data and logout function from context
  const navigate = useNavigate(); // Initialize navigate function for redirection

  const handleLogout = async () => {
    try {
      await logoutUser(); // Call the logoutUser function
      navigate('/'); // Redirect to homepage after logout
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed!');
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="profile-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg ">
      <h2 className="text-3xl font-semibold text-center">Welcome, {user?.name} {user?.lastName}</h2>

      <div className="profile-info mt-4">
        <p className="text-lg">Email: {user?.email}</p>
      </div>

      <div className="orders mt-6">
        <h3 className="text-2xl font-semibold">Your Past Orders:</h3>
        {/* Display past orders if needed */}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleLogout} // Call handleLogout to logout and redirect
          className="bg-tan text-white py-2 px-6 rounded-full hover:bg-tan/70"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
