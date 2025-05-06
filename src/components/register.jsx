import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    userName: "",
    password: "",
    rePassword: "",
    country: "",
    state: "",
    city: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      email: formData.email,
      name: formData.name,
      userName: formData.userName,
      password: formData.password,
      rePassword: formData.rePassword,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      mobile: formData.mobile,
    };

    console.log("📦 Payload being sent:", payload);

    try {
      const res = await axios.post("https://skillswap.up.railway.app/user/register", payload);
      login(res.data.token);
      navigate("/main");
    } catch (err) {
      console.error("❌ Registration error:", err.response?.data); 
      setError(JSON.stringify(err.response?.data) || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(background.jpg)` }}
    >
      <div className="w-full max-w-6xl bg-opacity-95 rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
            Welcome to SkillSwap - Learn, Connect, and Grow!
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Unlock boundless knowledge with SkillSwap - Your gateway to skill exchange and personal growth. 
            Let's build a brighter future together, one skill at a time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Register</h2>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => navigate("/main")}
              >
                <span className="text-lg md:text-xl font-semibold text-purple-700">
                  Skill Swap
                </span>
              </div>
            </div>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="input mb-4"
              required
            />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="input mb-4"
              required
            />
            <input
              name="userName"
              type="text"
              placeholder="Choose a username"
              value={formData.userName}
              onChange={handleChange}
              className="input mb-4"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="input mb-4"
              required
            />
            <input
              name="rePassword"
              type="password"
              placeholder="Confirm password"
              value={formData.rePassword}
              onChange={handleChange}
              className="input mb-4"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                name="country"
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="state"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="mobile"
                type="text"
                placeholder="Mobile no"
                value={formData.mobile}
                onChange={handleChange}
                className="input"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded w-full font-semibold mb-4"
            >
              Register
            </button>

            <p className="text-center mb-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </p>
            <p className="text-xs text-center text-gray-500">
              <a
                href="https://skill-swap.netlify.app/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
