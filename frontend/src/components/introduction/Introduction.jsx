import { useContext } from "react";
import { motion } from "framer-motion";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { MyContext } from "../../Context/Context";
import { informationSummaryData } from "../../utils/constants";

const Introduction = () => {
  const { theme } = useContext(MyContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
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
      className={`flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
      id="introduction"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="w-full flex flex-col justify-between max-lg:text-center"
        variants={textVariants}
      >
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <motion.p 
            className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full"
            variants={textVariants}
          >
            Hello, I'm
            <motion.span 
              className="text-nowrap shrink-0 inline-block w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Prathamesh Nimje
            </motion.span>
          </motion.p>

          <motion.p 
            className={`text-xs xxs:text-lg lg:text-[18px] my-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={textVariants}
          >
            I build apps for the web. As a BCCA Computer Application graduate and MCA Computer Application post graduate student, I have a solid foundation in full-stack web development. Skilled in creating user-friendly, responsive web applications with React and its ecosystem, I am passionate about delivering seamless, dynamic user experiences.
          </motion.p>

          <motion.p 
            className="text-center lg:text-start"
            variants={buttonVariants}
          >
            <motion.a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:nimjeprathamesh1@gmail.com"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Say Hello!
            </motion.a>
          </motion.p>
        </div>

        <motion.div 
          className="mx-auto lg:mx-0 relative"
          variants={statsVariants}
        >
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.5
                }}
              >
                <InformationSummary item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative group`}
        variants={imageVariants}
      >
        <motion.img
          className={`w-full h-full absolute bottom-0 object-cover rounded-3xl ${
            theme === 'light' 
              ? 'shadow-2xl shadow-gray-200 bg-white' 
              : 'shadow-2xl shadow-gray-800 bg-gray-800'
          }`}
          src="./pratham.png"
          alt="person"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl p-5 text-center opacity-0 group-hover:opacity-50 transition-all duration-1000 ease-out rounded-b-3xl"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          Full Stack Developer
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;