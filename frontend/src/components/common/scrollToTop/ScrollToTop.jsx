import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 600,
    smooth: "easeInOutCubic", // Professional fluid scroll timing ease configuration
  });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 200px scroll pass hote hi tracking status toggle lock update ho jayega
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // EXPLICIT STRUCTURAL RESETS: Added clean up listener to prevent runtime memory leaks 🛠️
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // AnimatePresence handles seamless mounting and unmounting layout states beautifully
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-6 sm:right-10 z-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          {/* Continuous Pulsing Ambient Core Glow Halo Backplate */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9929fb] to-[#cc59ff] blur-md opacity-40"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.15, 0.4]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Core Interactive Premium Kinetic Action Trigger Button */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#9929fb] via-[#ba52ff] to-[#ff9f1c] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(153,41,251,0.4)] border border-white/10 relative overflow-hidden cursor-pointer group select-none"
            whileHover={{
              y: -5,
              scale: 1.08,
              boxShadow: "0 15px 30px rgba(153, 41, 251, 0.55)"
            }}
            whileTap={{ scale: 0.94 }}
          >
            {/* Shimmer fluid light reflex layer line sweep on button hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            {/* Kinetic Arrow Icon Vector Shift */}
            <motion.div
              className="relative z-10 text-xl sm:text-2xl"
              variants={{
                rest: { y: 0 },
                hover: { 
                  y: [0, -4, 4, 0],
                  transition: { duration: 0.4, ease: "easeInOut" }
                }
              }}
              initial="rest"
              whileHover="hover"
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;