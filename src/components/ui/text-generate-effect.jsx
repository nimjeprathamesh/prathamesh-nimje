"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { isValidElement, useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  const wordsArray = Array.isArray(words)
    ? words
    : isValidElement(words)
    ? [words]
    : words?.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray?.map((word, idx) => (
          <motion.span
            key={idx}
            className={cn("opacity-0 leading-0", className)}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="dark:text-white text-black text-2x tracking-wide w-full">
        {renderWords()}
      </div>
    </div>
  );
};
