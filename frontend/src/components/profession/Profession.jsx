import { useContext } from "react";
import { motion } from "framer-motion";
import Roles from "./Roles";
import { MyContext } from "../../Context/Context";
import { rolesData } from "../../utils/constants";

const Profession = () => {
  const { theme } = useContext(MyContext);

  // High-End Staggered Cinematic Orchestrations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textBlockVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const rightGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative overflow-hidden"
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Immersive Ambient Soft-Glow Nebula */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9929fb]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Left Column: Typography Layout & High-End Action Hub */}
      <div className="flex flex-col justify-center space-y-6 lg:pr-8 max-md:text-center">
        <motion.div variants={textBlockVariants} className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-black text-[#9929fb] block">
            Expertise Matrix
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            What <br />
            <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">
              I Focus On?
            </span>
          </h2>
        </motion.div>

        <motion.div 
          className={`space-y-4 text-base md:text-lg leading-relaxed font-normal ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}
          variants={textBlockVariants}
        >
          <p className="m-0">
            I specialize in full-stack web development with MERN (using MySQL),
            building modern mobile apps with React Native, and deploying
            applications on cloud platforms.
          </p>
          <p className="m-0">
            My work combines technical expertise and creativity to deliver
            scalable, user-friendly, and production-ready solutions across web
            and mobile platforms.
          </p>
        </motion.div>

        <motion.div variants={textBlockVariants} className="pt-4">
          <motion.a
            href="mailto:nimjeprathamesh1@gmail.com"
            className="btn btn-premium btn-md sm:btn-lg rounded-xl px-8 shadow-xl text-white font-extrabold tracking-wide inline-flex items-center justify-center max-md:mx-auto decoration-none"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk Business
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column: Premium Staggered Glass Bento Deck */}
      <motion.div
        className="space-y-5 sm:space-y-6 w-full"
        variants={rightGridVariants}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      >
        {rolesData.map((role, index) => (
          // Fixed structural bug by passing specific mapping index references explicitly
          <Roles role={role} key={role.id || index} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Profession;