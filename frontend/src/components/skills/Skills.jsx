"use client"

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaLayerGroup, FaDatabase, FaTools } from "react-icons/fa";
import { MyContext } from "../../Context/Context";
import { skillCategories } from "../../utils/constants";

export default function Skills() {
    const { theme } = useContext(MyContext);
    const [activeTab, setActiveTab] = useState("Languages");
    const tabNames = Object.keys(skillCategories);

    const tabIcons = {
        Languages: <FaCode />,
        Frameworks: <FaLayerGroup />,
        Databases: <FaDatabase />,
        Tools: <FaTools />
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const tabContainerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.08
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const skillCardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        },
        hover: {
            scale: 1.1,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section 
            id="skills" 
            className={`py-20 mt-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-5">
                <motion.h2 
                    className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-gray-100" : "text-gray-600"}`}
                    variants={headingVariants}
                >
                    My <motion.span 
                        className="text-blue-500"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Skills
                    </motion.span>
                </motion.h2>

                {/* Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center mb-8 gap-2"
                    variants={tabContainerVariants}
                >
                    {tabNames.map(tab => (
                        <motion.button
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
                            variants={tabVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <motion.span 
                                className="text-lg"
                                animate={activeTab === tab ? {
                                    rotate: [0, -15, 15, -15, 0],
                                    scale: [1, 1.2, 1]
                                } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                {tabIcons[tab]}
                            </motion.span>
                            <span>{tab}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {skillCategories[activeTab].map((skill, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                className={`flex flex-col items-center justify-center p-5 border rounded-lg shadow-sm ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                                variants={skillCardVariants}
                                whileHover="hover"
                                whileTap="tap"
                                custom={index}
                            >
                                <motion.div 
                                    className="text-4xl mb-3"
                                    variants={iconVariants}
                                >
                                    {skill.icon}
                                </motion.div>
                                <motion.p 
                                    className={`font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {skill.name}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
}