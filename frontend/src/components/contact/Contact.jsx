import { useContext } from "react";
import { motion } from "framer-motion";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";
import { addressData } from "../../utils/constants";

const Contact = () => {
  const { theme } = useContext(MyContext);

  // Parent Stagger Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Elastic Reveal for Left Sidebar Elements
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  // Futuristic Slide-in for Headers
  const titleVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="relative -bottom-10 -mt-10 z-10 px-4 w-full max-w-[1320px] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 3D Parallax Main Box */}
      <motion.div
        id="contact"
        className={`w-full p-6 md:p-12 lg:p-16 rounded-3xl border transition-all duration-700 ${
          theme === 'light' 
            ? 'bg-white/90 border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)]' 
            : 'bg-slate-950/40 border-slate-800/60 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-md'
        }`}
        whileHover={{
          rotateX: 2,
          rotateY: -2,
          boxShadow: theme === 'dark' 
            ? '0 30px 70px rgba(153, 41, 251, 0.15)' 
            : '0 30px 70px rgba(0, 0, 0, 0.08)'
        }}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Left Column: Copywriting & Address Blocks */}
          <motion.div
            className="w-full lg:w-5/12 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
              <motion.div variants={fadeInUpVariants} className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#9929fb] block max-lg:text-center">
                  Get In Touch
                </span>
                <motion.h2
                  className={`text-3xl md:text-4xl font-black tracking-tight max-lg:text-center m-0 ${
                    theme === 'light' ? 'text-slate-900' : 'text-white'
                  }`}
                  variants={titleVariants}
                >
                  Contact <span className="bg-gradient-to-r from-[#9929fb] to-[#cc59ff] bg-clip-text text-transparent">Me</span>
                </motion.h2>
              </motion.div>
              
              <motion.p
                className={`text-base leading-relaxed max-lg:text-center font-normal ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}
                variants={fadeInUpVariants}
              >
                I'd love to hear from you. Whether it's about my work, potential collaborations, or simply connecting, don't hesitate to get in touch.
              </motion.p>
            </div>

            {/* Address Cards Cascade Stagger */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 my-8"
              variants={containerVariants}
              style={{ transform: "translateZ(15px)" }}
            >
              {addressData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Address item={item} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {/* Magnetic Floating Social Media Dock */}
            <motion.div 
              className={`w-fit px-5 py-3 rounded-xl border max-lg:mx-auto ${
                theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`} 
              variants={fadeInUpVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(153, 41, 251, 0.2)" 
              }}
              style={{ transform: "translateZ(25px)" }}
            >
              <SocialMedia position={theme === 'light' ? "left" : "center"} />
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Form Presentation */}
          <motion.div
            className="w-full lg:w-7/12"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transform: "translateZ(10px)" }}
          >
            <Form />
          </motion.div>
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;