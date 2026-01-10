import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../Context/Context';
import { androidDetailsData } from '../utils/constants';

export default function AppsDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = androidDetailsData.find((project) => project.id === parseInt(id));

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        },
    };

    const headerSectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100,
            },
        },
        hover: {
            scale: 1.1,
            filter: "drop-shadow(0 0 12px rgba(155, 89, 182, 0.6))",
            transition: { duration: 0.3 },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(155, 89, 182, 0.3)",
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.95,
        },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const sectionHeaderVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const bulletPointVariants = {
        hidden: { opacity: 0, x: -15 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    };

    const paragraphVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const renderDescription = (description) => {
        if (!description) return null;

        const lines = description.split('\n').filter(line => line.trim());
        const elements = [];
        let i = 0;
        let bulletIndex = 0;

        while (i < lines.length) {
            const line = lines[i].trim();

            if (line.endsWith(':')) {
                elements.push(
                    <motion.p
                        key={`header-${i}`}
                        className={`font-semibold text-base sm:text-lg mt-4 mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                        variants={sectionHeaderVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
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
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}
                        >
                            {bulletPoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    className='flex gap-3'
                                    custom={idx}
                                    variants={bulletPointVariants}
                                >
                                    <span className={`${theme === 'light' ? 'text-blue-600' : 'text-blue-400'} font-bold text-lg sm:text-xl flex-shrink-0`}>»</span>
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
                        className={`text-justify mb-4 text-sm sm:text-base ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
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
            className={`flex flex-col items-center gap-6 sm:gap-10 py-6 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-32 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Main Image */}
            <motion.img
                src={project?.image}
                alt={`${project?.image} image`}
                className={`w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl`}
                variants={imageVariants}
                whileHover="hover"
            />

            {/* Header Section with Logo, Title, Description, and Button */}
            <motion.div
                className='flex flex-col sm:flex-row justify-evenly items-center py-4 sm:py-5 w-full gap-4 sm:gap-0'
                variants={headerSectionVariants}
            >
                {/* Logo */}
                <motion.img
                    src={project?.logo}
                    alt={`${project?.image} image`}
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shadow-xl ${theme === 'light' ? 'shadow-[#aaa]' : 'shadow-gray-800'} rounded-xl flex-shrink-0`}
                    variants={logoVariants}
                    whileHover="hover"
                />

                {/* Title and Description */}
                <motion.div className='flex flex-col justify-center items-start text-center sm:text-left'>
                    <motion.h1
                        className={`font-bold text-2xl sm:text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
                        variants={titleVariants}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        className={`text-base sm:text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                        variants={descriptionVariants}
                    >
                        {project.short_desc}
                    </motion.p>
                </motion.div>

                {/* Live Link Button */}
                <motion.a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn hover:border-picto-primary hover:text-picto-primary text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-2 px-6 w-full sm:w-auto text-center mt-2 sm:mt-5 inline-block ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Live Link
                    <motion.span
                        className="ms-1 xs:ms-3"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </motion.span>
                </motion.a>
            </motion.div>

            {/* Description Content */}
            <motion.div
                className="w-full max-w-4xl"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {renderDescription(project?.description)}
            </motion.div>
        </motion.div>
    );
}