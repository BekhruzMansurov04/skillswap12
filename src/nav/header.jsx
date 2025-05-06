import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../context/AuthContext";
import { Bell } from "lucide-react"; 


const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <header className="w-full border-b shadow-sm bg-white px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-md">
         <Link to="/" className="text-white font-bold text-lg md:text-xl">SkillSwap</Link>
        </div>
        <span className="text-sm font-semibold text-blue-600">BETA</span>
      </div>

      <div className="flex items-center space-x-4 text-sm md:text-base">
        <span className="text-gray-800 font-medium hidden sm:inline">Hi, {user?.name || "User"}</span>
        <Bell className="w-5 h-5 cursor-pointer" />

        <Link to="/main" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>

        <button
          onClick={handleLogout}
          className="text-gray-800 hover:underline focus:outline-none"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
