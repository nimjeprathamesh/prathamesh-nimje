import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../Context/Context';
import { shopifyDetailsData } from '../utils/constants';

export default function ShopifyDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = shopifyDetailsData.find((project) => project.id === parseInt(id));

    // Animation variants (same as ProjectDetails)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
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

    const infoCardVariants = {
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

    const bulletVariants = {
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
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const renderDescription = (description) => {
        if (!description) return null;

        const lines = description.split('\n').filter(line => line.trim());
        const elements = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i].trim();
            
            if (line.endsWith(':')) {
                elements.push(
                    <motion.p
                        key={`header-${i}`}
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`font-semibold text-base sm:text-lg mt-4 mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    >
                        {line}
                    </motion.p>
                );
                i++;
                
                const bulletPoints = [];
                while (i < lines.length && !lines[i].trim().endsWith(':') && !lines[i].includes('?')) {
                    if (lines[i].trim()) {
                        bulletPoints.push(lines[i].trim());
                    }
                    i++;
                }
                
                if (bulletPoints.length > 0) {
                    elements.push(
                        <motion.div
                            key={`bullets-${i}`}
                            className='flex flex-col gap-2 mb-4'
                        >
                            {bulletPoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    custom={idx}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{
                                        x: 10,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    className='flex gap-3 cursor-default'
                                >
                                    <motion.span 
                                        className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} font-bold text-lg sm:text-xl flex-shrink-0`}
                                        animate={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            delay: idx * 0.5
                                        }}
                                    >
                                        »
                                    </motion.span>
                                    <p className={`flex-1 text-sm sm:text-base ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>{point}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    );
                }
            } else {
                elements.push(
                    <motion.p
                        key={`para-${i}`}
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`text-justify mb-4 text-sm sm:text-base ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
                    >
                        {line}
                    </motion.p>
                );
                i++;
            }
        }

        return elements;
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col items-center gap-6 sm:gap-10 py-6 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-32 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
        >
            <motion.img
                variants={imageVariants}
                whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                }}
                src={project?.image}
                alt={`${project?.image} image`}
                className={`w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl`}
            />
            
            <motion.div
                variants={infoCardVariants}
                className='flex flex-col sm:flex-row justify-evenly items-center py-4 sm:py-5 w-full gap-4 sm:gap-0'
            >
                <motion.img
                    whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, 360],
                        transition: { duration: 0.6 }
                    }}
                    src={project?.logo}
                    alt={`${project?.image} image`}
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl flex-shrink-0`}
                />
                
                <div className='flex flex-col justify-center items-start text-center sm:text-left'>
                    <motion.h1
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className={`font-bold text-2xl sm:text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`text-base sm:text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                    >
                        {project.short_desc}
                    </motion.p>
                </div>
                
                <motion.a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ 
                        scale: 0.9,
                        rotate: 5
                    }}
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-2 px-6 w-full sm:w-auto text-center mt-2 sm:mt-5 inline-block ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
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
            </motion.div>
            
            <motion.div
                variants={containerVariants}
                className="w-full max-w-4xl"
            >
                {renderDescription(project?.description)}
            </motion.div>
        </motion.div>
    );
}