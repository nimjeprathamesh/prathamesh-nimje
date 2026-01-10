import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MyContext } from "../../Context/Context";
import { tabs } from "../../utils/constants";

const WorkProcess = () => {
  const [activeTab, setActiveTab] = useState(1);
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

  const titleVariants = {
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

  const tabContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const experienceContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const experienceCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const bulletVariants = {
    hover: {
      x: 5,
      color: "#2563eb",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className={`flex flex-col px-4 py-8 md:py-12 lg:py-20 xl:py-28 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`} 
      id="work-process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.div 
        className="text-center mb-6 sm:mb-10 lg:mb-14"
        variants={titleVariants}
      >
        <motion.p 
          className={`section-title text-2xl sm:text-3xl md:text-4xl font-bold ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
          className={`flex flex-wrap justify-center border-b ${
            theme === 'light' ? 'border-gray-300' : 'border-gray-600'
          }`}
          variants={tabContainerVariants}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer relative
                ${activeTab === tab.id
                  ? "text-blue-600"
                  : theme === 'light' 
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              onClick={() => setActiveTab(tab.id)}
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {tab.title}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  layoutId="activeTab"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Experiences */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="mt-8 space-y-8"
            variants={experienceContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.experiences.map((exp, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  className={`flex flex-col md:flex-row items-center md:items-start rounded-2xl p-6 shadow-lg ${
                    theme === 'light' 
                      ? 'bg-white' 
                      : 'bg-gray-700 shadow-gray-900'
                  }`}
                  variants={experienceCardVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {/* Left content */}
                  <div className="flex-1">
                    <motion.h3 
                      className={`text-2xl font-bold ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {exp.company}
                    </motion.h3>
                    
                    <motion.p 
                      className={`mt-2 text-lg font-semibold ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-200'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {exp.role}{" "}
                      <span className="text-blue-600">@{exp.company}</span>
                    </motion.p>
                    
                    <motion.p 
                      className={`text-sm mb-4 ${
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      {exp.date}
                    </motion.p>
                    
                    <ul className={`space-y-2 text-sm sm:text-base ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {exp.details.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="flex gap-2"
                          custom={i}
                          variants={detailVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                        >
                          <motion.span 
                            className="text-blue-600"
                            variants={bulletVariants}
                          >
                            »
                          </motion.span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Logo */}
                  <motion.div 
                    className="mt-6 md:mt-0 md:ml-6 flex-shrink-0"
                    variants={logoVariants}
                    whileHover="hover"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className={`w-28 h-28 object-contain rounded-lg ${
                        theme === 'dark' ? 'bg-gray-600 p-2' : ''
                      }`}
                    />
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WorkProcess;