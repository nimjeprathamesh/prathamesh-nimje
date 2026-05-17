import { useParams } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../Context/Context";
import { projectDetailsData } from "../utils/constants";

const splitTitleText = (text) => {
    if (!text) return "";
    return text.split('').map((char, index) => (
        <motion.span
            key={index}
            style={{ display: 'inline-block' }}
            variants={{
                hidden: { opacity: 0, y: 30, rotateX: -60 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
            }}
            transition={{ type: "spring", stiffness: 140, damping: 14, delay: index * 0.02 }}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    ));
};

export default function ProjectDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = projectDetailsData.find((project) => project.id === parseInt(id));

    // Advanced Global Stagger Orchestration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    };

    const imageCardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 12 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: { type: "spring", stiffness: 120, damping: 18 }
        }
    };

    const textBlockVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const bulletNodeVariants = {
        hidden: { opacity: 0, x: -15, filter: "blur(4px)" },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { delay: i * 0.04, duration: 0.4, ease: "easeOut" }
        })
    };

    // Helper mapping script to dynamically assign ambient halos based on project categories
    const getContextAccentColor = (title) => {
        if (!title) return "rgba(153, 41, 251, 0.16)";
        const lower = title.toLowerCase();
        if (lower.includes("tour") || lower.includes("management")) return "rgba(59, 130, 246, 0.16)"; // Cyan Blue
        if (lower.includes("event")) return "rgba(249, 115, 22, 0.16)";                                    // Orange Flare
        if (lower.includes("challenge")) return "rgba(168, 85, 247, 0.16)";                                // Radiant Violet
        return "rgba(153, 41, 251, 0.16)";                                                                  // Global Brand Purple
    };

    const ambientHaloGlow = getContextAccentColor(project?.title);

    if (!project) {
        return (
            <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'}`}>
                <p className="text-lg font-black tracking-wide">Project Showcase Matrix Terminated</p>
            </div>
        );
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`w-full min-h-screen transition-colors duration-500 flex flex-col items-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'
                }`}
        >
            {/* Background Soft Ambient Light Map Cloud */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[450px] rounded-full pointer-events-none opacity-40 blur-[140px] z-0" style={{ backgroundColor: ambientHaloGlow }} />

            <div className="w-full max-w-4xl space-y-12 relative z-10">

                {/* Top Header Section: Split Animation Text */}
                <div className="text-center max-w-2xl mx-auto space-y-2" style={{ perspective: 1000 }}>
                    <span className="text-xs uppercase tracking-[0.3em] font-black text-[#9929fb] block">
                        Technical Case Study
                    </span>
                    <h1 className={`text-3xl sm:text-5xl font-black tracking-tight m-0 leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'
                        }`}>
                        {splitTitleText(project.title)}
                    </h1>
                </div>

                {/* 1. Immersive 3D Parallax Image Deck Stage */}
                <div className="perspective-[1200px] w-full flex justify-center">
                    <motion.div
                        variants={imageCardVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            rotateX: -3,
                            rotateY: 3,
                            boxShadow: `0 35px 70px ${ambientHaloGlow}`
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                        className={`w-full max-w-3xl aspect-[16/10] overflow-hidden rounded-3xl border shadow-2xl relative bg-slate-950/20`}
                    >
                        {/* Dark Mask Shield Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10 pointer-events-none" />

                        <img
                            src={project?.image}
                            alt={`${project?.title} architectural overview mockup`}
                            className="w-full h-full object-cover select-none origin-center"
                        />
                    </motion.div>
                </div>

                {/* 2. Description Content Bento Box Plate */}
                <motion.div
                    className={`p-6 sm:p-8 rounded-3xl border text-base sm:text-lg leading-relaxed text-justify font-normal ${theme === 'light'
                            ? 'bg-white border-slate-200 shadow-md text-slate-700'
                            : 'bg-slate-950/40 border-slate-800/60 text-slate-300 backdrop-blur-md shadow-2xl'
                        }`}
                    variants={textBlockVariants}
                >
                    {project?.description}
                </motion.div>

                {/* 3. Deep Analysis Key Details Bullet Nodes Container */}
                <motion.div className="space-y-4 w-full" variants={textBlockVariants}>
                    <h3 className={`text-lg sm:text-xl font-black tracking-tight border-l-4 border-[#9929fb] pl-3 m-0 ${theme === 'light' ? 'text-slate-900' : 'text-white'
                        }`}>
                        Core Structural Architecture
                    </h3>

                    <div className={`grid grid-cols-1 gap-3.5 p-5 sm:p-7 rounded-3xl border ${theme === 'light'
                            ? 'bg-slate-100/60 border-slate-200/80'
                            : 'bg-slate-950/30 border-slate-800/50 backdrop-blur-lg'
                        }`}>
                        {project?.details.map((point, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={bulletNodeVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                whileHover={{ x: 4 }}
                                className="flex items-start gap-3.5 text-sm sm:text-base leading-relaxed cursor-default"
                            >
                                <span className="text-[#9929fb] text-xs sm:text-sm mt-1.5 flex-shrink-0 select-none">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                                <p className="m-0 flex-1 font-medium">
                                    {point.startsWith('»') || point.startsWith('-') ? point.substring(1).trim() : point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. Functional High-Contrast Direct Control Anchors Dock Row */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 w-full max-w-md mx-auto"
                    variants={textBlockVariants}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                    <motion.a
                        href={project?.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 h-12 w-full rounded-xl font-bold text-sm tracking-wide border transition-all duration-300 inline-flex items-center justify-center gap-2 decoration-none ${theme === 'light'
                                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                                : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700 shadow-md'
                            }`}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ transform: "translateZ(15px)" }}
                    >
                        <span>Repository Archive</span>
                        <FontAwesomeIcon icon={faGithub} className="text-base" />
                    </motion.a>

                    <motion.a
                        href={project?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-12 w-full rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-[#9929fb] via-[#ba52ff] to-[#cc59ff] text-white shadow-md inline-flex items-center justify-center gap-2 decoration-none relative overflow-hidden group/btn"
                        whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 25px rgba(153, 41, 251, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{ transform: "translateZ(15px)" }}
                    >
                        {/* Shine Swipe Accent Transition lines effect on hover */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translateX-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />

                        <span className="relative z-10">Deployment Live</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs relative z-10" />
                    </motion.a>
                </motion.div>

            </div>
        </motion.div>
    );
}