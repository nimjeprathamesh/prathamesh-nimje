import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../Context/Context';
import { shopifyDetailsData } from '../utils/constants'; 

export default function ShopifyAppDetails() {
    const { id } = useParams();
    const { theme } = useContext(MyContext);
    const project = shopifyDetailsData.find((proj) => proj.id === parseInt(id));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const headerSectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.6, rotate: -45 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { type: "spring", stiffness: 140, damping: 14 },
        },
        hover: {
            scale: 1.08,
            rotate: 4,
            transition: { duration: 0.3 },
        },
    };

    const bulletPointVariants = {
        hidden: { opacity: 0, x: -15, filter: "blur(4px)" },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.04,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const shopifyGlow = "rgba(16, 185, 129, 0.16)";

    const renderDescription = (description) => {
        if (!description) return null;

        const lines = description.split('\n').filter(line => line.trim());
        const elements = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i].trim();

            if (line.endsWith(':')) {
                elements.push(
                    <motion.h3
                        key={`header-${i}`}
                        className={`text-lg sm:text-xl font-black mt-8 mb-4 tracking-tight border-l-4 border-emerald-500 pl-3 ${
                            theme === 'light' ? 'text-slate-900' : 'text-white'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                    >
                        {line.slice(0, -1)}
                    </motion.h3>
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
                            className={`grid grid-cols-1 gap-3 p-5 rounded-2xl border ${
                                theme === 'light' 
                                    ? 'bg-slate-50/60 border-slate-200/80' 
                                    : 'bg-slate-950/30 border-slate-800/50 backdrop-blur-md'
                            }`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.05 } }
                            }}
                        >
                            {bulletPoints.map((point, idx) => (
                                <motion.div
                                    className="flex items-start gap-3"
                                    key={idx}
                                    custom={idx}
                                    variants={bulletPointVariants}
                                    whileHover={{ x: 3 }}
                                >
                                    <span className="text-emerald-500 text-xs sm:text-sm mt-1 flex-shrink-0">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                    <p className={`m-0 text-sm sm:text-base leading-relaxed ${
                                        theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                                    }`}>
                                        {point.startsWith('-') || point.startsWith('»') ? point.substring(1).trim() : point}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    );
                }
            } else {
                elements.push(
                    <motion.p
                        key={`para-${i}`}
                        className={`text-justify mb-5 text-sm sm:text-base leading-relaxed ${
                            theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        {line}
                    </motion.p>
                );
                i++;
            }
        }

        return elements;
    };

    if (!project) {
        return (
            <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'}`}>
                <p className="text-lg font-bold">Project Details Not Found</p>
            </div>
        );
    }

    return (
        <motion.div
            className={`w-full min-h-screen transition-colors duration-500 flex flex-col items-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
                theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] rounded-full pointer-events-none opacity-40 blur-[130px] z-0" style={{ backgroundColor: shopifyGlow }} />

            <div className="w-full max-w-4xl space-y-12 relative z-10">
                {/* 1. App Cover Stage */}
                <div className="perspective-[1200px] w-full flex justify-center">
                    <motion.div
                        className={`w-full max-w-2xl aspect-[16/10] overflow-hidden rounded-3xl border shadow-2xl relative ${
                            theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
                        }`}
                        whileHover={{ y: -6, scale: 1.02, rotateX: -2, rotateY: 2, boxShadow: `0 30px 60px ${shopifyGlow}` }}
                        style={{ transformStyle: "preserve-3d" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <img src={project?.image} alt="mockup" className="w-full h-full object-cover select-none" />
                    </motion.div>
                </div>

                {/* 2. Bento Control Block */}
                <motion.div
                    className={`w-full p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
                        theme === 'light' ? 'bg-white border-slate-200 shadow-lg shadow-slate-100' : 'bg-slate-950/40 border-slate-800/80 backdrop-blur-md shadow-2xl'
                    }`}
                    variants={headerSectionVariants}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left" style={{ transform: "translateZ(20px)" }}>
                        {/* LINKED INITIAL STATE PROPERLY HERE TO FIX VISIBILITY 🛠️ */}
                        <motion.img
                            src={project?.logo}
                            alt="logo"
                            className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl shadow-md p-2 bg-slate-900 border ${theme === 'light' ? 'border-slate-200 bg-white' : 'border-slate-800 bg-slate-950'}`}
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        />
                        <div className="space-y-1">
                            <h1 className={`font-black text-2xl sm:text-3xl tracking-tight m-0 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{project?.title}</h1>
                            <p className={`text-sm sm:text-base font-medium m-0 ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>{project?.short_desc || "Shopify App Store Solution"}</p>
                        </div>
                    </div>

                    <motion.a
                        href={project?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-11 px-6 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md inline-flex items-center justify-center gap-2 decoration-none flex-shrink-0 relative overflow-hidden group/btn"
                        whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(16, 185, 129, 0.4)" }}
                        whileTap={{ scale: 0.96 }}
                        style={{ transform: "translateZ(15px)" }}
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translateX-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                        <span className="relative z-10">Live Storefront App</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] relative z-10" />
                    </motion.a>
                </motion.div>

                {/* 3. Description Content */}
                <div className="w-full relative z-10">
                    {renderDescription(project?.description)}
                </div>
            </div>
        </motion.div>
    );
}