"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Vortex } from "../ui/vortex";
import Content from "./Content.jsx";

export default function HeroSection() {
    const { theme } = useContext(ThemeContext);
    
    const words = `Hi, my name is`;
    const span = [{ text: "Prathamesh Nimje", }];
    const name = `I build apps for the web.`;
    const info = `As a BCCA Computer Application graduate and MCA Computer Application post graduate student, I have a solid foundation in full-stack web development. Skilled in creating user-friendly, responsive web applications with React and its ecosystem, I am passionate about delivering seamless, dynamic user experiences.`;

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
                            name={name}
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
                                name={name}
                                info={info}
                            />
                        </motion.div>
                    </AuroraBackground>
                )}
            </div>
        </section>
    );
}