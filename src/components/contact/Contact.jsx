"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Vortex } from "../ui/vortex";
import Content from "./Content.jsx";

export default function Contact() {
    const { theme } = useContext(ThemeContext);
    
    const words = `Contact Me`;
    const span = `Get In Touch`;
    const info = `I’m currently open to new opportunities, and my inbox is always open. Whether you have a question, a potential role, or just want to connect, I’ll do my best to respond!`;

    return (
        <section id="home">
            <div className="w-screen h-full overflow-hidden relative">
                {theme === "dark" ? (
                    <Vortex
                        backgroundColor="black"
                        className="flex items-center flex-col justify-center w-full h-full"
                    >
                        <Content
                            theme={theme}
                            words={words}
                            span={span}
                            info={info}
                        />
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
                            <Content
                                theme={theme}
                                words={words}
                                span={span}
                                info={info}
                            />
                        </motion.div>
                    </AuroraBackground>
                )}
            </div>
        </section>
    );
}