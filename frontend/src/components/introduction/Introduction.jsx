import { useContext } from "react";
import { motion } from "framer-motion";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { MyContext } from "../../Context/Context";
import { informationSummaryData } from "../../utils/constants";

const Introduction = () => {
  const { theme } = useContext(MyContext);

  // Smooth Entry Orchestration Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Continuous Loops: Cinematic Breathing Space Configs 🚀
  const continuousOrbitAnimation = {
    animate: {
      y: [0, -12, 4, -8, 0],
      rotateX: [0, 3, -2, 4, 0],
      rotateY: [0, -4, 3, -3, 0],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const continuousGlowAnimation = {
    animate: {
      scale: [1, 1.06, 0.95, 1.03, 1],
      opacity: [0.2, 0.35, 0.15, 0.3, 0.2],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative flex flex-col-reverse lg:flex-row items-center justify-between pt-4 md:pt-6 pb-12 lg:pb-24 gap-12 z-10 w-full ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}
      id="introduction"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    > 
      {/* Left Typography Column */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6 max-lg:text-center">
        <div>
          <motion.span 
            className="text-xs uppercase tracking-widest font-bold text-[#9929fb] mb-2 block"
            variants={textRevealVariants}
          >
            Available for Freelance & Full-time Roles
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            variants={textRevealVariants}
          >
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">
              Prathamesh Nimje
            </span>
          </motion.h1>
        </div>

        <motion.p 
          className={`text-base md:text-lg max-w-xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}
          variants={textRevealVariants}
        >
          I design and architect pixel-perfect apps for the web ecosystem. Backed by solid full-stack structures and built using dynamic React micro-architectures, I build fluid digital environments focused purely on high performance.
        </motion.p>

        {/* Dynamic CTA Row */}
        <motion.div 
          className="flex flex-wrap items-center gap-4 max-lg:justify-center pt-2"
          variants={textRevealVariants}
        >
          <motion.a
            className="btn btn-premium btn-md sm:btn-lg rounded-xl px-8 shadow-lg text-white font-semibold decoration-none"
            href="mailto:nimjeprathamesh1@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Collaborate
          </motion.a>
          
          <motion.a
            className={`btn btn-md sm:btn-lg rounded-xl px-8 font-semibold border bg-transparent transition-all decoration-none ${
              theme === 'dark' 
                ? 'border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600' 
                : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
            }`}
            href="/projects"
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Minimalist Stats Panel */}
        <motion.div 
          className="w-full pt-4"
          variants={textRevealVariants}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md max-lg:mx-auto">
            {informationSummaryData.map((item, index) => (
              <InformationSummary key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Premium High-End Continuous Animation Image Stage */}
      <motion.div
        className="w-full lg:w-5/12 max-w-[420px] aspect-[4/5] relative group"
        variants={imageRevealVariants}
        style={{ perspective: 1200 }}
      >
        {/* Infinite Breathing Pulse Cosmic Soft Glow Map */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-tr from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] blur-3xl rounded-3xl"
          variants={continuousGlowAnimation}
          animate="animate"
        />

        {/* Continuous Multi-Axis Kinetic Orbit Platform Container */}
        <motion.div 
          className={`w-full h-full relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-colors duration-500`}
          style={{ transformStyle: "preserve-3d" }}
          variants={continuousOrbitAnimation}
          animate="animate"
          whileHover={{
            scale: 1.02,
            boxShadow: theme === 'dark' 
              ? '0 25px 50px rgba(153, 41, 251, 0.25)' 
              : '0 25px 50px rgba(0, 0, 0, 0.12)'
          }}
        >
          {/* Main Visual Image Asset */}
          <motion.img
            className={`w-full h-full object-cover transition-all duration-700 select-none ${
              theme === 'light' ? 'bg-white' : 'bg-slate-950'
            }`}
            src="./pratham.png"
            alt="Prathamesh Nimje Kinetic Core Mesh Asset"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          {/* Liquid Shimmer Lighting Sweep Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Bottom Floating Dynamic Label */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end items-center text-center z-10">
            <span className="text-white font-extrabold text-lg tracking-wider uppercase drop-shadow-md">
              Full Stack Engineer
            </span>
            <span className="text-xs text-slate-400 font-medium mt-1 tracking-wide">
              Based in Nagpur, India
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;