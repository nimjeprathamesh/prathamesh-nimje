"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Vortex } from "../ui/vortex";
import Content from "./Content";

export function Experience() {
  const { theme } = useContext(ThemeContext);
  const words = `Work Experience`;

  return (
    <section
      id="experience"
      className={cn(theme === "dark" ? "mt-0" : "mt-20 2xl:mt-0 xl:mt-24 lg:my-20 md:mt-20")}
    >
      <div
        className={cn(
          "w-screen overflow-hidden",
          theme === "dark" ? "h-full" : "h-[80rem] 2xl:h-[58rem] xl:h-[50rem] lg:h-[45rem] md:h-[60rem]"
        )}
      >
        {theme === "dark" ? (
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center w-full h-full"
            >
              <Content theme={theme} words={words} />
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
              <Content theme={theme} words={words} />
            </motion.div>
          </AuroraBackground>
        )}
      </div>
    </section>
  );
}