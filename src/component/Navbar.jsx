import React from "react";
import { Link } from "react-router-dom"; // Importing Link component

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand name link */}
        <img
  src="/images/saylani.png" // Update with the correct path to your image
  alt="Profile"
  className="w-18 h-12 object-cover rounded-lg mb-4" // Adjusted width and height for a longer image
/>
        <div>
          {/* Navigation links */}
          <Link to="/" className="mx-4 hover:text-gray-200">
            Home
        
          </Link>
          <Link to="/courses" className="mx-4 hover:text-gray-200">
            {/* Courses */}
       Notes
          </Link>
          <Link to="/register" className="mx-4 hover:text-gray-200">
            Register
        
          </Link>
          <Link to="/Login" className="mx-4 hover:text-gray-200">
        Login
          </Link>
          <Link to="/logout" className="mx-4 hover:text-gray-200">
      Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

