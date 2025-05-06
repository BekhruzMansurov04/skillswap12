import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const { token, logout } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("https://skillswap.up.railway.app/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
        logout(); 
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token, logout]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        You are not logged in.
      </div>
    );
  }

  const {
    name,
    email,
    userName,
    country,
    state,
    city,
    mobile,
  } = profileData;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          👤 User Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div>
            <label className="font-semibold">Full Name:</label>
            <p>{name || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">Username:</label>
            <p>{userName || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">Email:</label>
            <p>{email || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">Mobile:</label>
            <p>{mobile || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">Country:</label>
            <p>{country || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">State:</label>
            <p>{state || "N/A"}</p>
          </div>

          <div>
            <label className="font-semibold">City:</label>
            <p>{city || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
