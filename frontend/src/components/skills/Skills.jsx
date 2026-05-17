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

    // 1. Kinetic Staggering for the Section Frame
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15
            }
        }
    };

    // Elastic Character Reveal for Heading
    const headingVariants = {
        hidden: { opacity: 0, y: -40, rotateX: -45 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    // 2. Cinematic 3D Deck Cascade for Cards
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.02
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.25,
                staggerChildren: 0.04,
                staggerDirection: -1
            }
        }
    };

    // 3. Fluid Physics for Cards (Springy Elastic Flip Entry)
    const skillCardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.85,
            rotateY: 25,
            rotateX: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 140,
                damping: 16
            }
        },
        hover: {
            y: -10,
            scale: 1.05,
            rotateX: -5,
            rotateY: 5,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        },
        tap: { scale: 0.97, rotateX: 0, rotateY: 0 }
    };

    // Interactive Vector Micro-Wiggle
    const iconMotionVariants = {
        rest: { scale: 1, rotate: 0, y: 0 },
        hover: {
            scale: 1.12,
            rotate: [0, -8, 8, -4, 4, 0],
            y: -2,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }
        }
    };

    // Dynamic Halo Ambient Colors matching brand assets
    const getSkillGlowColor = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes("react")) return "rgba(6, 182, 212, 0.18)";
        if (lowerName.includes("node") || lowerName.includes("next")) return "rgba(34, 197, 94, 0.18)";
        if (lowerName.includes("javascript") || lowerName.includes("vite")) return "rgba(234, 179, 8, 0.18)";
        if (lowerName.includes("html") || lowerName.includes("postman")) return "rgba(249, 115, 22, 0.18)";
        if (lowerName.includes("css") || lowerName.includes("mysql") || lowerName.includes("digitalocean")) return "rgba(59, 130, 246, 0.18)";
        return "rgba(153, 41, 251, 0.18)";
    };

    return (
        <motion.section
            id="skills"
            className={`py-24 relative overflow-hidden transition-colors duration-700 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"
                }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            {/* Soft Glowing Ambient Background Nebulae */}
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Title with Split Up Reveal */}
                <motion.h2
                    className={`text-4xl md:text-5xl font-black text-center tracking-tight mb-16 ${theme === "dark" ? "text-white" : "text-slate-900"
                        }`}
                    variants={headingVariants}
                    style={{ perspective: 1000 }}
                >
                    Technical <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">Ecosystem</span>
                </motion.h2>

                {/* Tab Navigation Center */}
                <div className="flex justify-center mb-16">
                    <motion.div
                        className={`flex flex-wrap p-1.5 rounded-2xl border items-center justify-center gap-1 sm:gap-2 ${theme === "dark"
                                ? "bg-slate-950/60 border-slate-800/80 backdrop-blur-md shadow-2xl"
                                : "bg-white border-slate-200/80 shadow-md"
                            }`}
                        variants={headingVariants}
                    >
                        {tabNames.map(tab => {
                            const isActive = activeTab === tab;
                            return (
                                <motion.button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer select-none border border-transparent z-10 ${isActive
                                            ? "text-white"
                                            : theme === "dark"
                                                ? "text-slate-400 hover:text-white"
                                                : "text-slate-600 hover:text-slate-900"
                                        }`}
                                    whileHover={{ y: isActive ? 0 : -1 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    {/* LayoutMorphing Slider Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-gradient-to-r from-[#9929fb] to-[#cc59ff] rounded-xl z-[-1] shadow-[0_8px_25px_rgba(153,41,251,0.4)]"
                                            transition={{ type: "spring", stiffness: 260, damping: 26 }}
                                        />
                                    )}

                                    <span className={`text-base transition-transform duration-300 ${isActive ? "scale-115" : "opacity-75"}`}>
                                        {tabIcons[tab]}
                                    </span>
                                    <span>{tab}</span>
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </div>

                {/* 3D Grid Stage Module */}
                <div style={{ perspective: 1200 }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 w-full"
                            variants={gridVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {skillCategories[activeTab].map((skill, index) => {
                                const shadowGlow = getSkillGlowColor(skill.name);

                                return (
                                    <motion.div
                                        key={`${activeTab}-${index}`}
                                        custom={index}
                                        variants={skillCardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileTap="tap"
                                        className={`group flex flex-col items-center justify-center p-6 rounded-2xl border text-center relative overflow-hidden transition-all duration-300 ${theme === "dark"
                                                ? "bg-slate-950/40 border-slate-800/50 hover:border-slate-700/80 backdrop-blur-md"
                                                : "bg-white border-slate-200/60 hover:border-slate-300/80 shadow-sm"
                                            }`}
                                        style={{ transformStyle: "preserve-3d" }}
                                        // MERGED BOTH WHILEHOVER PROPERTIES HERE 🛠️
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            rotateX: -5,
                                            rotateY: 5,
                                            boxShadow: `0 20px 40px ${shadowGlow}`,
                                            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                        }}
                                    >
                                        {/* Dynamic Corner Flare effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        {/* Vector Logo Container with Internal Glow Halo */}
                                        <motion.div
                                            className="text-4xl sm:text-5xl mb-4 text-slate-800 dark:text-slate-100 flex items-center justify-center h-16 w-16 relative"
                                            variants={iconMotionVariants}
                                            initial="rest"
                                            whileHover="hover"
                                        >
                                            {/* Glow Radial Map Behind SVG */}
                                            <div
                                                className="absolute inset-0 rounded-full scale-90 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                                                style={{ backgroundColor: shadowGlow }}
                                            />
                                            <span className="relative z-10 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                                                {skill.icon}
                                            </span>
                                        </motion.div>

                                        {/* Skill Label */}
                                        <motion.p
                                            className={`font-extrabold text-sm sm:text-base tracking-wide m-0 transition-colors duration-300 ${theme === "dark" ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
                                                }`}
                                            style={{ transform: "translateZ(20px)" }} // Push text outward in 3D Space
                                        >
                                            {skill.name}
                                        </motion.p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </motion.section>
    );
}