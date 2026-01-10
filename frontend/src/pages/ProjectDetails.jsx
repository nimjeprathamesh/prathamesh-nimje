import { useParams } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../Context/Context";
import { projectDetailsData } from "../utils/constants";

export default function ProjectDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = projectDetailsData.find((project) => project.id === parseInt(id));

    // Different animation variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.5,
            rotate: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            opacity: 0,
            rotateY: 90,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const descriptionVariants = {
        hidden: { 
            opacity: 0,
            x: -100,
            skewX: -10
        },
        visible: {
            opacity: 1,
            x: 0,
            skewX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const listItemVariants = {
        hidden: { 
            opacity: 0, 
            x: 100,
            rotate: 5
        },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const buttonVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        })
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col justify-center items-center gap-6 sm:gap-10 py-6 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-32 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}
        >
            <motion.p
                variants={titleVariants}
                className={`section-title text-center text-2xl sm:text-3xl md:text-4xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
                {project.title}
            </motion.p>

            <motion.img
                variants={imageVariants}
                whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                }}
                src={project?.image}
                alt={`${project?.title} image`}
                className={`w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-4xl border shadow-lg ${theme === 'light' ? 'border-black shadow-gray-900' : 'border-gray-800 shadow-gray-800'}`}
            />

            <motion.p
                variants={descriptionVariants}
                style={{ lineHeight: "25px", letterSpacing: "0%" }}
                className={`text-sm sm:text-base md:text-lg text-wrap px-4 sm:px-8 md:px-16 lg:px-32 text-center sm:text-left ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
                {project?.description}
            </motion.p>

            <motion.ul
                className={`space-y-2 sm:space-y-4 px-4 sm:px-8 md:px-16 lg:px-32 w-full max-w-4xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
                {project?.details.map((point, i) => (
                    <motion.li
                        key={i}
                        custom={i}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            x: 10,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        className="flex gap-2 text-sm sm:text-base md:text-lg cursor-default"
                    >
                        <motion.span 
                            className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} text-base sm:text-lg flex-shrink-0`}
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                delay: i * 0.5
                            }}
                        >
                            »
                        </motion.span>
                        <span className="flex-1">{point}</span>
                    </motion.li>
                ))}
            </motion.ul>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-4 sm:gap-8 w-full max-w-md sm:max-w-lg mt-5">
                <motion.a
                    custom={0}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ 
                        scale: 0.9,
                        rotate: -5
                    }}
                    href={project?.source}
                    target="_blank"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Source Code
                    <motion.span
                        className="ms-1 xs:ms-3 inline-block"
                        whileHover={{ 
                            rotate: [0, 360],
                            scale: [1, 1.3, 1],
                            transition: { duration: 0.6 }
                        }}
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </motion.span>
                </motion.a>

                <motion.a
                    custom={1}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ 
                        scale: 0.9,
                        rotate: 5
                    }}
                    href={project?.link}
                    target="_blank"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-6 w-full sm:w-auto text-center ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                    Live Link
                    <motion.span
                        className="ms-1 xs:ms-3 inline-block"
                        animate={{
                            x: [0, 5, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </motion.span>
                </motion.a>
            </div>
        </motion.div>
    );
}