import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
<div
  className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12 space-y-8"
  style={{ backgroundImage: `url('/background.jpg')` }}
>
  <div className="flex gap-6 px-8 py-4 backdrop-blur-sm">
    <Link
      to="/register"
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold"
    >
      🚀 Register
    </Link>
    <Link
      to="/login"
      className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition font-semibold"
    >
      🔐 Login
    </Link>
  </div>

  <div className="text-center max-w-2xl p-6  backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-purple-700 mb-4">
      Welcome to SkillSwap 👋
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed">
      SkillSwap is your gateway to mastering new skills and sharing your talents with others.
      Whether you're diving into IT or perfecting your English, we've built a community where growth is mutual.  
      <br /> <br />
      ✨ Join daily presentations, follow your teachers, track your progress, and get updated on upcoming courses!
      <br />
      Let’s grow together — one skill at a time. 💡
    </p>
  </div>
</div>

    </>
   
  )
}

export default Home;