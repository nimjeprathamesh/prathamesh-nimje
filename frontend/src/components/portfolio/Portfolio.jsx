import { useContext } from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { MyContext } from "../../Context/Context";
import { projectData } from "../../utils/constants";

const Portfolio = () => {
  const { theme } = useContext(MyContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="xl:mb-17.5 mb-5"
        variants={headerVariants}
      >
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <motion.p 
            className={`section-title ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.p>
          <motion.p 
            className={`font-normal text-[18px] max-sm:text-[14px] pt-6 ${
              theme === 'light' ? 'text-gray-400' : 'text-gray-300'
            }`}
            variants={descriptionVariants}
          >
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="mx-auto flex justify-center"
        variants={gridVariants}
      >
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.slice(0, 3).map((data, index) => (
            <motion.div
              key={index}
              variants={projectCardVariants}
            >
              <Projects data={data} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="text-center"
        variants={buttonVariants}
      >
        <motion.a
          href="/projects"
          target="_blank"
          className="btn btn-primary py-2 px-6 mt-12.5 text-center text-[16px] font-semibold inline-block"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          More Projects
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;