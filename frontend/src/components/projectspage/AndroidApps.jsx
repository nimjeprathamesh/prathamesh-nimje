import { useContext } from "react";
import { motion } from "framer-motion";
import Apps from "./Apps";
import { MyContext } from "../../Context/Context";
import { androidData } from "../../utils/constants";

const AndroidApps = () => {
    const { theme } = useContext(MyContext);

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15,
            },
        },
    };

    return (
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

            {/* Top Heading Group */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div variants={titleVariants} className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-cyan-500 block">
                        Production Software
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${theme === "light" ? "text-slate-900" : "text-white"
                        }`}>
                        Android Applications <span className="bg-gradient-to-r from-cyan-500 to-[#9929fb] bg-clip-text text-transparent">Published</span>
                    </h2>
                </motion.div>
            </div>

            {/* Isometric 3D Deck Module Presentation Stage */}
            <div className="perspective-[1200px]">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 w-full"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {androidData.map((data, index) => (
                        <motion.div
                            key={data.id || index}
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, y: 35, rotateX: 10, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 130, damping: 18 }
                                }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Apps data={data} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default AndroidApps;