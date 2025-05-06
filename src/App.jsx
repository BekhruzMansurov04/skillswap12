import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/login"; 
import Register from "./components/register";
import Home from "./components/home";
import Header from "./nav/header";
import MainPage from "./components/main";
import Profile from "./components/profile";
import SkillDetails from "./components/skillDetails";


function App() {
  return (
    <Router>
          <AuthProvider>
            <Header />
                  <Routes>
                  <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/skillDetails" element={<SkillDetails />} />
                  </Routes>
          </AuthProvider>
    </Router>
  );
}

export default App;
