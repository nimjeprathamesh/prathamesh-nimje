import { useContext } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../Context/Context";

const Projects = ({ data, index }) => {
  const { theme } = useContext(MyContext);

  // Card Par Click Karne Se Details Page Khulega
  const handleCardClick = () => {
    window.open(`/projectdetails/${data.id}`, '_blank');
  };

  // REDIRECTION BUG FIXED 🛠️
  const handleLinkClick = (e, targetUrl) => {
    e.stopPropagation(); // Card ke parent click event ko trigger hone se rokega
    if (targetUrl) {
      window.open(targetUrl, '_blank'); // Robust native manual redirection
    }
  };

  // Helper mapping script to push selective colored ambient aura blurs based on your project categories
  const getProjectThemeGlow = (title) => {
    if (!title) return "rgba(153, 41, 251, 0.14)";
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("tour") || lowerTitle.includes("management")) return "rgba(59, 130, 246, 0.14)"; // Blue shadow
    if (lowerTitle.includes("event")) return "rgba(249, 115, 22, 0.14)";                                    // Orange-red shadow
    if (lowerTitle.includes("challenge")) return "rgba(168, 85, 247, 0.14)";                                // Purple shadow
    return "rgba(153, 41, 251, 0.14)";                                                                      // Brand default
  };

  const dynamicCardGlow = getProjectThemeGlow(data?.title);

  return (
    /* 1. INVISIBLE PARENT WRAPPER FRAME (GLITCH ROOT FIX) 🛠️ */
    <div 
      className="w-full h-full relative group/master"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className={`w-full h-full rounded-2xl border flex flex-col overflow-hidden select-none cursor-pointer transition-colors duration-500 ${
          theme === 'light' 
            ? 'bg-white border-slate-200/80 shadow-md shadow-slate-100' 
            : 'bg-slate-950/40 border-slate-800/60 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md hover:border-slate-700/80'
        }`}
        onClick={handleCardClick}
        
        /* 2. HOVER DRIVEN BY STATIC MASTER CONTAINER FOR MAXIMUM STABILITY */
        whileHover={{
          y: -10,
          scale: 1.03,
          rotateX: -4,
          rotateY: 4,
          boxShadow: `0 20px 45px ${dynamicCardGlow}`
        }}
        whileTap={{ scale: 0.98 }}
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
      >
        {/* Upper Section Layout: Aspect Image Mock Display Slot */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-inherit">
          {/* Subtle Matte Dark Mask overlay gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover/master:opacity-20 pointer-events-none" />
          
          <motion.img
            src={data?.image}
            alt={`${data?.title} functional showcase visual layer`}
            className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover/master:scale-105"
          />

          {/* Absolute Floating Brand Category Chip Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md bg-slate-900/85 backdrop-blur-md text-slate-300 border border-white/10 shadow-sm">
              {data?.category || "Web Application"}
            </span>
          </div>
        </div>

        {/* Lower Section Layout: Volumetric Text Content Block */}
        <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5" style={{ transformStyle: "preserve-3d" }}>
          <div className="space-y-2">
            {/* 3D Surface Elevation Pop Out Offset */}
            <h3 
              className={`text-xl font-extrabold tracking-tight m-0 transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-900 group-hover/master:text-[#9929fb]' : 'text-white group-hover/master:text-[#cc59ff]'
              }`}
              style={{ transform: "translateZ(25px)" }}
            >
              {data?.title}
            </h3>
            
            <p className={`text-sm leading-relaxed m-0 line-clamp-3 font-normal transition-colors duration-300 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {data?.description}
            </p>
          </div>

          {/* Interactive Double Action Anchors Row Dock */}
          <div className="flex items-center gap-3 pt-2" style={{ transform: "translateZ(15px)", zIndex: 30 }}>
            <motion.button
              onClick={(e) => handleLinkClick(e, data?.source)}
              className={`flex-1 h-10 rounded-xl font-bold text-xs tracking-wide border transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer ${
                theme === 'light' 
                  ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-xs' 
                  : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700 shadow-md'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Repository</span>
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
            </motion.button>

            <motion.button
              onClick={(e) => handleLinkClick(e, data?.link)}
              className="flex-1 h-10 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-[#9929fb] via-[#b64aff] to-[#cc59ff] text-white shadow-md inline-flex items-center justify-center gap-2 relative overflow-hidden group/btn cursor-pointer border-0"
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(153, 41, 251, 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer sweep glass strip on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 transform -translateX-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
              
              <span className="relative z-10">Live Demo</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] relative z-10" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;