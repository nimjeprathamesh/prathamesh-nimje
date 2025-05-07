"use client";
import { ThemeContext } from "@/context/ThemeContext.jsx";
import { cn } from "@/lib/utils";
import Image from "next/image.js";
import { useContext } from "react";
import MobileMenu from "./MobileMenu.jsx";
import Navbar from "./Navbar.jsx";
import CustomizedSwitches from "./ThemeToggle.jsx";

export default function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={cn(
                "header z-[9999] fixed w-full h-16 shadow-[#FF7921] flex items-center justify-between px-4 2xl:h-24 xl:h-24 lg:px-4 lg:h-24 md:h-24 sm:px-8",
                theme === "dark" ? "bg-black" : "bg-white"
            )}
        >
            <div className="flex items-center">
                <Image
                    src={theme === "light" ? "/images/light-logo.png" : "/images/dark-logo.png"}
                    width={64}
                    height={64}
                    alt="logo"
                    className="fixed w-12 h-12 2xl:left-auto xl:left-auto lg:left-auto md:left-1 sm:w-16 sm:h-16"
                />
            </div>
            <div className="hidden md:flex">
                <Navbar />
            </div>
            <div className="md:hidden flex items-center w-14">
                <MobileMenu />
            </div>
            <div
                className="hidden sm:fixed sm:right-0 sm:top-7 sm:ml-auto md:flex md:top-8 md:right-0 lg:right-8 xl:right-8 2xl:right-8"
            >
                <CustomizedSwitches />
            </div>
        </div>
    );
}