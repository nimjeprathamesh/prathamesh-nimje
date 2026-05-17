import { useContext } from "react";
import { motion } from "framer-motion";
import AndroidApps from "../components/projectspage/AndroidApps";
import ShopifyApps from "../components/projectspage/ShopifyApps";
import ProjectsPage from "../components/projectspage/ProjectsPage";
import { MyContext } from "../Context/Context";

export default function Projects() {
    const { theme } = useContext(MyContext);

    const pageLayerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const cascadeSectionVariants = {
        hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <motion.div
            className={`w-full min-h-screen transition-colors duration-500 relative overflow-hidden pb-24 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"
                }`}
            variants={pageLayerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Deep Cosmic Accent Vectors */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#9929fb]/4 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/3 blur-[140px] rounded-full pointer-events-none" />

            {/* Render Steps Cascade Sections */}
            <motion.div variants={cascadeSectionVariants}>
                <AndroidApps />
            </motion.div>

            <motion.div variants={cascadeSectionVariants}>
                <ShopifyApps />
            </motion.div>

            <motion.div variants={cascadeSectionVariants}>
                <ProjectsPage />
            </motion.div>
        </motion.div>
    );
}