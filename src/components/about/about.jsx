"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Vortex } from "../ui/vortex";
import Content from "./Content.jsx";

export default function About() {
    const { theme } = useContext(ThemeContext);

    const words = `About Me`;
    const info = `Hello! My name is Prathamesh Nimje and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`;
    const heading = `Here are a few technologies I have been working with recently:`;
    const techno = [`HTML5`,`JavaScript (ES6+)`, `React.js`, `Git/Github`, `Material UI`, `MySQL`];
    const logy = [`CSS3`,`Node.js`, `Next.js`, `Tailwind CSS`, `React Native`, `UI/UX`];

    return (
        <section id="about" className={cn(theme === "dark" ? null : "xl:mt-40 lg:mt-40")}>
            <div className="w-screen h-full overflow-hidden relative">
                {theme === "dark" ? (
                    <Vortex
                        backgroundColor="black"
                        className={cn(
                            "flex items-center flex-col justify-center w-full h-full",
                            theme === "dark" ? null : "md:h-[200rem]"
                        )}
                    >
                        <Content
                            theme={theme}
                            words={words}
                            info={info}
                            heading={heading}
                            techno={techno}
                            logy={logy}
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
                                info={info}
                                heading={heading}
                                techno={techno}
                                logy={logy}
                            />
                        </motion.div>
                    </AuroraBackground>
                )}
            </div>
        </section>
    );
}