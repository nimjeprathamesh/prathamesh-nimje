"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Vortex } from "../ui/vortex";
import Content from "./Content.jsx";

export default function Project() {
    const { theme } = useContext(ThemeContext);
    const words = `Projects I have developed`;
    const heading = `Featured Project`;

    return (
        <section id="project">
            <div className={cn(
                "w-screen overflow-hidden relative",
                theme === "dark" ? "h-full" : "h-[120rem] 2xl:h-[120rem] xl:h-[150rem] lg:h-[200rem] md:h-[500rem]"
            )}>
                {theme === "dark" ? (
                    <Vortex
                        backgroundColor="black"
                        className="flex items-center flex-col justify-center w-full h-full"
                    >
                        <Content words={words} heading={heading} />
                    </Vortex>
                ) : (
                    <AuroraBackground>
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex items-center flex-col justify-center w-full h-full"
                        >
                            <Content words={words} heading={heading} />
                        </motion.div>
                    </AuroraBackground>
                )}
            </div>
        </section>
    );
};