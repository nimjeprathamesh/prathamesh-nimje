"use client"

import { useContext, useState } from "react";
import { FaCode, FaLayerGroup, FaDatabase, FaTools } from "react-icons/fa";
import { MyContext } from "../../Context/Context";
import { skillCategories } from "../../utils/constants";

export default function Skills() {
    const { theme } = useContext(MyContext);
    const [activeTab, setActiveTab] = useState("Languages");
    const tabNames = Object.keys(skillCategories);

    // Map tab names to their icons
    const tabIcons = {
        Languages: <FaCode />,
        Frameworks: <FaLayerGroup />,
        Databases: <FaDatabase />,
        Tools: <FaTools />
    };

    return (
        <section id="skills" className={`py-20 mt-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto px-5">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-gray-100" : "text-gray-600"}`}>
                    My <span className="text-blue-500">Skills</span>
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-8 gap-2">
                    {tabNames.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2 rounded-t-lg font-semibold text-sm sm:text-base transition-colors duration-200 cursor-pointer
                                ${activeTab === tab
                                    ? theme === "dark"
                                        ? "bg-blue-600 text-white"
                                        : "bg-blue-100 text-blue-700"
                                    : theme === "dark"
                                        ? "bg-gray-700 text-gray-300"
                                        : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            <span className="text-lg">{tabIcons[tab]}</span>
                            <span>{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skillCategories[activeTab].map((skill, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center p-5 border rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <p className={`font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}