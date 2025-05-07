"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

export const MenuItem = ({ setActive, item, icon, href }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative mt-2 select-none">
      <motion.p
        transition={{ duration: 0.3 }}
        className="flex cursor-pointer hover:text-[#FF7921] dark:text-white"
      >
        <Link href={href}>
          <span className="relative bottom-1 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm">{icon}</span>
          <span>{item}</span>
        </Link>
      </motion.p>
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      onMouseLeave={(active) => setActive(active)}
      className={cn(
        "relative rounded-full top-1 shadow-md justify-center space-x-4 py-4 font-bold 2xl:gap-8 xl:gap-8 lg:gap-4 md:gap-0 md:left-1 hidden sm:flex sm:gap-0",
        theme === "dark" ? "shadow-[#FF7921]" : "shadow-slate-500/80"
      )}
    >
      {children}
    </nav>
  );
};
