import { motion } from "framer-motion";
import ProjectsPage from '../components/projectspage/ProjectsPage';
import AndroidApps from '../components/projectspage/AndroidApps';
import { MyContext } from '../Context/Context';
import { useContext } from 'react';
import ShopifyApps from '../components/projectspage/ShopifyApps';

export default function Projects() {
    const { theme } = useContext(MyContext);

    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className={theme === 'dark' ? 'bg-gray-800' : 'bg-soft-white'}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={sectionVariants}>
                <AndroidApps />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <ShopifyApps />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <ProjectsPage />
            </motion.div>
        </motion.div>
    );
}