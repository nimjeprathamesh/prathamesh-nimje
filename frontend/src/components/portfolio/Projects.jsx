import { useContext } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../Context/Context";

const Projects = ({ data }) => {
  const { theme } = useContext(MyContext);

  // Handler to stop event propagation
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  // Animation variants
  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.1
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3
      }
    }
  };

  const buttonContainerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className={`max-w-106 rounded-lg duration-300 transition-all cursor-pointer overflow-hidden ${
        theme === 'light' 
          ? 'outline-[#FFFFFF] shadow-gray-300 border border-gray-200 bg-white' 
          : 'shadow-gray-900 border border-gray-700 bg-gray-800'
      }`}
      onClick={() => window.open(`/projectdetails/${data.id}`, '_blank')}
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="overflow-hidden"
        variants={imageVariants}
      >
        <motion.img
          src={data?.image}
          alt={`${data?.title} image`}
          className="rounded-tl-lg rounded-tr-lg w-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <div className="p-4 xs:p-8">
        <motion.p 
          className={`text-xs font-medium ${
            theme === 'light' ? 'text-gray-400' : 'text-gray-400'
          }`}
          variants={categoryVariants}
        >
          {data?.category}
        </motion.p>

        <motion.p 
          className={`text-md xxs:text-lg font-semibold pt-1 mb-3 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
          variants={titleVariants}
        >
          {data?.title}
        </motion.p>

        <motion.p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className={`text-xs xxs:text-[14px] text-wrap ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}
          variants={descriptionVariants}
        >
          {data?.description}
        </motion.p>

        {/* Buttons wrapper */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 mt-5"
          variants={buttonContainerVariants}
        >
          <motion.a
            href={data?.source}
            target="_blank"
            onClick={handleButtonClick}
            className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center flex items-center justify-center gap-1 xs:gap-3 ${
              theme === 'light' 
                ? 'bg-white text-black border-gray-300' 
                : 'bg-gray-700 text-white border-gray-600'
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Source Code</span>
            <motion.span
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.span>
          </motion.a>

          <motion.a
            href={data?.link}
            target="_blank"
            onClick={handleButtonClick}
            className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center flex items-center justify-center gap-1 xs:gap-3 ${
              theme === 'light' 
                ? 'bg-white text-black border-gray-300' 
                : 'bg-gray-700 text-white border-gray-600'
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Live Link</span>
            <motion.span
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;