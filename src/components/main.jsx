import React from "react";
import { FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";

const fakeSkills = [
  {
    skill: {
      user: {
        userName: "BekhruzDev",
        profileImg: "https://i.pravatar.cc/150?img=3",
        instagram: "https://instagram.com/bekhruzdev",
        github: "https://github.com/bekhruzdev",
        portfolio: "https://bekhruz.dev",
      },
      skillName: "Frontend Development",
      skillDescription: "React, Tailwind CSS, and modern UI/UX practices.",
      skillTechnologies: ["React", "Tailwind", "JavaScript"],
      createdAt: "2024-10-15T12:00:00Z",
    },
  },
  {
    skill: {
      user: {
        userName: "CodeWizard",
        profileImg: "https://i.pravatar.cc/150?img=12",
        instagram: "https://instagram.com/codewizard",
        github: "https://github.com/codewizard",
        portfolio: "https://codewizard.dev",
      },
      skillName: "Backend Development",
      skillDescription: "Building scalable RESTful APIs with Node.js and Express.",
      skillTechnologies: ["Node.js", "Express", "MongoDB"],
      createdAt: "2024-11-05T10:20:00Z",
    },
  },
  {
    skill: {
      user: {
        userName: "UXNinja",
        profileImg: "https://i.pravatar.cc/150?img=25",
        instagram: "",
        github: "https://github.com/uxninja",
        portfolio: "https://uxninja.design",
      },
      skillName: "UI/UX Design",
      skillDescription: "Crafting intuitive and elegant user interfaces.",
      skillTechnologies: ["Figma", "Adobe XD", "User Research"],
      createdAt: "2024-12-01T14:00:00Z",
    },
  },
  {
    skill: {
      user: {
        userName: "AI_Master",
        profileImg: "https://i.pravatar.cc/150?img=15",
        instagram: "https://instagram.com/ai_master",
        github: "https://github.com/aimaster",
        portfolio: "",
      },
      skillName: "Machine Learning",
      skillDescription: "Working with TensorFlow, scikit-learn and real-world AI projects.",
      skillTechnologies: ["Python", "TensorFlow", "scikit-learn"],
      createdAt: "2025-01-10T08:45:00Z",
    },
  },
  {
    skill: {
      user: {
        userName: "DevOpsGuru",
        profileImg: "https://i.pravatar.cc/150?img=33",
        instagram: "",
        github: "https://github.com/devopsguru",
        portfolio: "https://devops.pro",
      },
      skillName: "DevOps Engineering",
      skillDescription: "CI/CD pipelines, Docker, Kubernetes, and AWS.",
      skillTechnologies: ["Docker", "Kubernetes", "AWS"],
      createdAt: "2025-02-20T17:30:00Z",
    },
  },
  {
    skill: {
      user: {
        userName: "nodira_js",
        profileImg: "https://i.pravatar.cc/150?img=5",
        instagram: "https://instagram.com/nodir",
        github: "https://github.com/nodirjs",
        portfolio: "https://nodir.dev",
      },
      skillName: "Backend Development",
      skillDescription: "Creating scalable backend systems with Node.js and Express.",
      skillTechnologies: ["Node.js", "Express", "MongoDB"],
      createdAt: "2025-01-05T14:30:00Z",
    },
  },
];

const MainPage = () => {
  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <div className="max-w-5xl mx-auto space-y-6 backdrop-blur-sm rounded-xl p-6">
        {fakeSkills.map((item, index) => {
          const { skill } = item;
          const { user, skillName, skillDescription, createdAt } = skill;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.profileImg || "/broken-img.png"}
                  alt={user.userName}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-indigo-800">{user.userName}</span>
                  <span className="text-sm text-gray-500">
                    Listed on {moment(createdAt).format("LL")}
                  </span>
                </div>
                <div className="flex gap-3 text-blue-700 text-lg ml-auto">
                  {user.instagram && (
                    <a href={user.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {user.github && (
                    <a href={user.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {user.portfolio && (
                    <a href={user.portfolio} target="_blank" rel="noopener noreferrer">
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800">{skillName}</h2>
              <p className="text-gray-700">{skillDescription}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {skill.skillTechnologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <Link
                  to="/skillDetails"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Open
                </Link>
                <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                  Send Swap Request
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
