import { useContext } from "react";
import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../Context/Context";

const Apps = ({ data, index }) => {
    const { theme } = useContext(MyContext);

    const handleCardClick = () => {
        window.open(`/appdetails/${data.id}`, '_blank');
    };

    const handleLiveLinkClick = (e) => {
        e.stopPropagation();
        if (data?.link) {
            window.open(data.link, '_blank');
        }
    };

    const getAppThemeGlow = (title) => {
        if (!title) return "rgba(153, 41, 251, 0.14)";
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("debt")) return "rgba(34, 197, 94, 0.14)";
        if (lowerTitle.includes("mechanic")) return "rgba(239, 68, 68, 0.14)";
        if (lowerTitle.includes("dance")) return "rgba(168, 85, 247, 0.14)";
        return "rgba(6, 182, 212, 0.14)";
    };

    const ambientGlow = getAppThemeGlow(data?.title);

    return (
        /* 1. INVISIBLE PARENT WRAPPER (GLITCH ROOT FIX) 🛠️ */
        <div
            className="w-full h-full relative group/master"
            style={{ perspective: 1200 }}
        >
            <motion.div
                className={`w-full h-full rounded-2xl border flex flex-col overflow-hidden select-none cursor-pointer transition-colors duration-500 ${theme === "light"
                        ? "bg-white border-slate-200/80 shadow-md shadow-slate-100"
                        : "bg-slate-950/40 border-slate-800/60 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md hover:border-slate-700/80"
                    }`}
                onClick={handleCardClick}

                /* 2. HOVER DETECTED VIA PARENT CLASS FOR MAXIMUM STABILITY */
                whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateX: -4,
                    rotateY: 4,
                    boxShadow: `0 20px 45px ${ambientGlow}`
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
                {/* Top Aspect Layer */}
                <div className="relative aspect-[16/11] w-full flex items-center justify-center p-6 bg-slate-950/10 dark:bg-slate-950/20 border-b border-inherit overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10 pointer-events-none" />

                    <motion.img
                        src={data?.image}
                        alt={`${data?.title} mock display asset`}
                        className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover/master:scale-105"
                    />

                    <div className="absolute top-4 left-4 z-20">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md bg-slate-900/85 backdrop-blur-md text-slate-300 border border-white/10 shadow-md">
                            Android Native
                        </span>
                    </div>
                </div>

                {/* Bottom Aspect Layer */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5" style={{ transformStyle: "preserve-3d" }}>
                    <div className="space-y-2">
                        <h3
                            className={`text-xl font-extrabold tracking-tight m-0 transition-colors duration-300 ${theme === "light" ? "text-slate-900 group-hover/master:text-cyan-600" : "text-white group-hover/master:text-cyan-400"
                                }`}
                            style={{ transform: "translateZ(25px)" }}
                        >
                            {data?.title}
                        </h3>

                        <p className={`text-sm leading-relaxed font-normal m-0 line-clamp-4 transition-colors duration-300 ${theme === "light" ? "text-slate-600" : "text-slate-300"
                            }`}>
                            {data?.description}
                        </p>
                    </div>

                    {/* Button Container */}
                    <div className="pt-2" style={{ transform: "translateZ(15px)", zIndex: 30 }}>
                        <motion.button
                            onClick={handleLiveLinkClick}
                            className="w-full h-11 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-md inline-flex items-center justify-center gap-2 decoration-none relative overflow-hidden group/btn cursor-pointer border-0"
                            whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(6, 182, 212, 0.35)" }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translateX-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                            <span className="relative z-10">Google Play Store</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] relative z-10" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Apps;