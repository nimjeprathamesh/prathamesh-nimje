import { useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../Context/Context";

const Roles = ({ role, index }) => {
  const { theme } = useContext(MyContext);

  // Dynamic 3D Cascade Perspective Variants Setup
  const roleCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.9,
      rotateY: -15,
      rotateX: 5
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
        delay: index * 0.08 // Seamless incremental execution link
      }
    }
  };

  const getAccentGradient = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("full stack")) return "from-[#9929fb] to-[#cc59ff]"; 
    if (lowerTitle.includes("native")) return "from-cyan-500 to-blue-600"; 
    return "from-[#ff9f1c] to-[#ff7f1c]"; 
  };

  const currentGradient = getAccentGradient(role.title);

  return (
    <motion.div
      variants={roleCardVariants}
      className={`group w-full rounded-2xl border p-6 sm:p-8 relative overflow-hidden flex transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-white border-slate-200/80 shadow-md shadow-slate-100/80' 
          : 'bg-slate-950/40 border-slate-800/60 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-md hover:border-slate-700/80'
      }`}
      whileHover={{
        y: -6,
        scale: 1.02,
        rotateX: -4,
        rotateY: 4,
        boxShadow: theme === 'dark' 
          ? '0 20px 40px rgba(153, 41, 251, 0.12)' 
          : '0 20px 40px rgba(0, 0, 0, 0.08)'
      }}
      whileTap={{ scale: 0.99 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Left Dynamic Color Beam Accent Strip */}
      <div className={`absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-b ${currentGradient} transform origin-left transition-all duration-300 group-hover:w-[7px]`} />

      {/* Internal Glass Corner Ray Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Volumetric Layer Container */}
      <div className="flex flex-col space-y-2.5 w-full pl-3" style={{ transformStyle: "preserve-3d" }}>
        <h3 
          className={`text-xl font-black m-0 tracking-tight transition-colors duration-300 ${
            theme === 'light' ? 'text-slate-900 group-hover:text-[#9929fb]' : 'text-white group-hover:text-[#cc59ff]'
          }`}
          style={{ transform: "translateZ(25px)" }} // Pushes text outwards in 3D parallax zone
        >
          {role.title}
        </h3>
        
        <p className={`text-sm sm:text-base leading-relaxed m-0 font-normal transition-colors duration-300 ${
          theme === 'light' ? 'text-slate-600' : 'text-slate-300'
        }`}
        style={{ transform: "translateZ(15px)" }}
        >
          {role.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Roles;