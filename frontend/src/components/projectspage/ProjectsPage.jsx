import { useContext } from "react";
import { motion } from "framer-motion";
import Projects from "../portfolio/Projects";
import { MyContext } from "../../Context/Context";
import { projectData } from "../../utils/constants";

const ProjectsPage = () => {
  const { theme } = useContext(MyContext);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
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
    <div
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10"
      id="portfolio"
    >
      {/* Dynamic Header Block Layout */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#9929fb] block">
            Web Software Applications
          </span>
          <motion.h2
            className={`text-3xl md:text-5xl font-black tracking-tight m-0 ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}
          >
            React Projects I have <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">Developed</span>
          </motion.h2>
        </motion.div>

        <motion.p
          className={`text-base md:text-lg mt-4 font-normal leading-relaxed m-0 ${
            theme === 'light' ? 'text-slate-500' : 'text-slate-400'
          }`}
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Here's a selection of my recent work, showcasing my skills in
          creating user-centric and visually appealing interfaces.
        </motion.p>
      </div>

      {/* 3D Presentation Stage Grid Frame */}
      <div className="perspective-[1200px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {projectData.map((data, index) => (
            <motion.div
              key={data.id || index}
              // STRICT INTEGRATION FIX: Explicit mapping index is now passed successfully to drive custom delays smoothly 🛠️
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 35, rotateX: 10, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 130, damping: 18 }
                }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Projects data={data} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;