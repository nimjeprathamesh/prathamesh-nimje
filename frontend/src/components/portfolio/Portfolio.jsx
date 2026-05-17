import { useContext } from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { MyContext } from "../../Context/Context";
import { projectData } from "../../utils/constants";

const Portfolio = () => {
  const { theme } = useContext(MyContext);

  // Stagger configurations for parent section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  return (
    <motion.section
      className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Cinematic Aura Light Maps */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#9929fb]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#ff9f1c]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Header Info Block */}
      <motion.div 
        className="text-center max-w-2xl mx-auto mb-16"
        variants={headerVariants}
      >
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
          theme === 'light' ? 'text-slate-900' : 'text-white'
        }`}>
          Featured <span className="bg-gradient-to-r from-[#9929fb] via-[#cc59ff] to-[#ff9f1c] bg-clip-text text-transparent">Creations</span>
        </h2>
        <p className={`text-base md:text-lg mt-4 font-normal leading-relaxed ${
          theme === 'light' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Here's a selection of my recent work, showcasing my skills in
          creating user-centric and visually appealing interfaces.
        </p>
      </motion.div>

      {/* Projects Grid Container with Isometric 3D Space */}
      <motion.div 
        className="w-full flex justify-center perspective-[1200px]"
        variants={gridVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 w-full" style={{ transformStyle: "preserve-3d" }}>
          {projectData.slice(0, 3).map((data, index) => (
            <Projects key={data.id || index} data={data} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Footer "More Projects" Action Trigger Button */}
      <motion.div 
        className="text-center mt-16"
        variants={headerVariants}
      >
        <motion.a
          href="/projects"
          target="_blank"
          className="btn btn-premium btn-md sm:btn-lg rounded-xl px-8 shadow-lg text-white font-bold tracking-wide inline-flex items-center justify-center decoration-none"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Full Archive
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;