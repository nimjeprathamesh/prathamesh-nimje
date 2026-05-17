import { useContext } from "react";
import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../Context/Context";

const Shopify = ({ data, index }) => {
    const { theme } = useContext(MyContext);

    // Card Par Click Karne Se Details Page Khulega
    const handleCardClick = () => {
        window.open(`/shopifydetails/${data.id}`, '_blank');
    };

    // Dynamic Redirection Event Fix
    const handleButtonClick = (e) => {
        e.stopPropagation(); // Parent card click event trigger hone se rokega
        if (data?.link) {
            window.open(data.link, '_blank');
        }
    };

    const shadowGlowColor = "rgba(16, 185, 129, 0.12)";

    return (
        /* 1. INVISIBLE MASTER WRAPPER FRAME (GLITCH ROOT FIX) 🛠️ */
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

                /* 2. HOVER RE-LINKED VIA MASTER WRAPPER FOR ABSOLUTE STABILITY */
                whileHover={{
                    y: -8,
                    scale: 1.03,
                    rotateX: -3,
                    rotateY: 4,
                    boxShadow: `0 20px 40px ${shadowGlowColor}`
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
                {/* Upper Section: Vector Logo Mock Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/20 border-b border-inherit flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent z-10 pointer-events-none" />

                    <motion.img
                        src={data.image}
                        alt={`${data.title} storefront framework`}
                        className="w-full h-full object-cover origin-center transition-transform duration-500 group-hover/master:scale-105"
                    />

                    {/* Store Type Badge Overlay */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/20 shadow-md">
                            Shopify App
                        </span>
                    </div>
                </div>

                {/* Lower Section: Typography Metadata Blocks */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4" style={{ transformStyle: "preserve-3d" }}>
                    <div className="space-y-2">
                        <h3
                            className={`text-xl font-extrabold tracking-tight m-0 transition-colors duration-300 ${theme === "light"
                                    ? "text-slate-900 group-hover/master:text-emerald-600"
                                    : "text-white group-hover/master:text-emerald-400"
                                }`}
                            style={{ transform: "translateZ(25px)" }}
                        >
                            {data.title}
                        </h3>

                        <p className={`text-sm leading-relaxed font-normal m-0 line-clamp-4 transition-colors duration-300 ${theme === "light" ? "text-slate-600" : "text-slate-300"
                            }`}>
                            {data.description}
                        </p>
                    </div>

                    {/* Primary Action Redirect Call Button */}
                    <div className="pt-2" style={{ transform: "translateZ(15px)", zIndex: 30 }}>
                        {/* Swapped anchor to motion.button for bulletproof clicks execution context */}
                        <motion.button
                            onClick={handleButtonClick}
                            className="w-full h-11 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md inline-flex items-center justify-center gap-2 decoration-none relative overflow-hidden group/btn cursor-pointer border-0"
                            whileHover={{ y: -2, boxShadow: "0 6px 15px rgba(16, 185, 129, 0.35)" }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translateX-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                            <span className="relative z-10">Live Storefront App</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] relative z-10" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Shopify;