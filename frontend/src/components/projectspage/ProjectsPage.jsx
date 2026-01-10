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
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
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
                staggerChildren: 0.12,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="content mt-10 md:mt-15 xl:mt-25 pb-10 md:pb-25 max-xxl:p-2"
            id="portfolio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="xl:mb-17.5 mb-5">
                <motion.div className="max-sm:px-2 text-center mx-auto">
                    <motion.p
                        className={`section-title ${
                            theme === 'light' ? 'text-black' : 'text-white'
                        }`}
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Projects I have developed
                    </motion.p>

                    <motion.p
                        className={`font-normal text-[18px] max-sm:text-[14px] pt-6 ${
                            theme === 'light' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                        variants={descriptionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Here's a selection of my recent work, showcasing my skills in
                        creating user-centric and visually appealing interfaces.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div className="mx-auto flex justify-center">
                <motion.div
                    className="grid xl:grid-cols-3 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projectData.map((data, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            custom={index}
                        >
                            <Projects data={data} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;