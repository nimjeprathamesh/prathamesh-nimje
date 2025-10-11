"use client"

import { useState, useContext } from "react";
import { MyContext } from "../../Context/Context";
import { tabs } from "../../utils/constants";

const WorkProcess = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { theme } = useContext(MyContext);

  return (
    <div className={`flex flex-col px-4 py-8 md:py-12 lg:py-20 xl:py-28 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`} id="work-process">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-10 lg:mb-14">
        <p className={`section-title text-2xl sm:text-3xl md:text-4xl font-bold ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>
          Work Experience
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-5xl mx-auto">
        <div className={`flex flex-wrap justify-center border-b ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-600'
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer
                ${activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : theme === 'light' 
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Experiences */}
        <div className="mt-8 space-y-8">
          {tabs
            .find((tab) => tab.id === activeTab)
            ?.experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  theme === 'light' 
                    ? 'bg-white' 
                    : 'bg-gray-700 shadow-gray-900'
                }`}
              >
                {/* Left content */}
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {exp.company}
                  </h3>
                  <p className={`mt-2 text-lg font-semibold ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-200'
                  }`}>
                    {exp.role}{" "}
                    <span className="text-blue-600">@{exp.company}</span>
                  </p>
                  <p className={`text-sm mb-4 ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {exp.date}
                  </p>
                  <ul className={`space-y-2 text-sm sm:text-base ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {exp.details.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600">»</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Logo */}
                <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={`w-28 h-28 object-contain rounded-lg ${
                      theme === 'dark' ? 'bg-gray-600 p-2' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;