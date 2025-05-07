"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

export default function Content({words, heading}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={cn(
                "p-4 w-full 2xl:pt-16 2xl:pb-32 2xl:px-72 xl:pb-24 xl:px-40 lg:px-8 md:p-12",
                theme === "dark" ? null : "pt-[160rem] 2xl:pt-[60rem] xl:pt-[80rem] lg:pt-[80rem] md:pt-[165rem]"
            )}
        >
            <TextGenerateEffect
                words={words}
                className={cn(
                    "pb-2 text-2xl font-bold 2xl:pb-6 xl:pb-6 lg:pb-6 md:pb-4 leading-snug",
                    theme === "dark" ? "text-white mt-24" : "text-black mt-72 2xl:mt-24 xl:mt-24 lg:mt-24 md:mt-72"
                )}
            />
            <div
                className="w-full flex flex-col justify-between mt-12 gap-12 2xl:flex 2xl:flex-row 2xl:px-96 2xl:gap-12 xl:flex xl:flex-row xl:gap-12 lg:flex lg:flex-row lg:gap-12 md:flex md:flex-col md:gap-32"
            >
                <ImageSection
                    src="/images/tms.png"
                    href="https://tour-management-system-xi.vercel.app/"
                    title="Tour Management System"
                />
                <InfoSection
                    heading={heading}
                    span="Tour Management System"
                    info="I developed an Tour Mnagement System project using Chakra UI, React JS, Node JS, Express JS and MySQL in which customer can contact tour guides and book tours and admin can create, update and delete the packages destinations and many more."
                    languages={[`MERN-Stack`,`Chakra UI`,`React JS`,`Node JS`,`Express JS`,`MySQL`]}
                    gitLink="https://github.com/nimjeprathamesh/tour-management-system"
                    liveLink="https://tour-management-system-xi.vercel.app/"
                />
            </div>
            <div
                className="w-full flex flex-col justify-between mt-24 gap-12 2xl:flex 2xl:flex-row-reverse 2xl:px-96 2xl:gap-12 xl:flex xl:flex-row-reverse xl:gap-12 lg:flex lg:flex-row-reverse lg:gap-12 md:flex md:flex-col md:gap-32"
            >
                <ImageSection
                    src="/images/challenges-app.png"
                    href="https://challenges-app-seven.vercel.app/"
                    title="Challenges App"
                />
                <InfoSection
                    heading={heading}
                    span="Challenges App"
                    info="I developed an Challenges Web App project like a Todo List using React JS, Node JS, Express JS and MySQL in user can add new challenges. By default it display as active and user can mark it as completed or failed."
                    languages={[`MERN-Stack`,`React JS`,`Node JS`,`Express JS`,`MySQL`]}
                    gitLink="https://github.com/nimjeprathamesh/challenges"
                    liveLink="https://challenges-app-seven.vercel.app/"
                />
            </div>
            <div
                className="w-full flex flex-col justify-between mt-12 gap-12 2xl:flex 2xl:flex-row 2xl:px-96 2xl:gap-12 xl:flex xl:flex-row xl:gap-12 lg:flex lg:flex-row lg:gap-12 md:flex md:flex-col md:gap-32"
            >
                <ImageSection
                    src="/images/food-order.png"
                    href="https://food-order-app-eight-xi.vercel.app/"
                    title="Food Order App"
                />
                <InfoSection
                    heading={heading}
                    span="Food Order App"
                    info="I developed an Food Order Web App project using React JS, Node JS, Express JS and MySQL in which customer can add the order into cart. After that customer can place the order."
                    languages={[`MERN-Stack`,`React JS`,`Node JS`,`Express JS`,`MySQL`]}
                    gitLink="https://github.com/nimjeprathamesh/food_order"
                    liveLink="https://food-order-app-eight-xi.vercel.app/"
                />
            </div>
            <div
                className="w-full flex flex-col justify-between mt-24 gap-12 2xl:flex 2xl:flex-row-reverse 2xl:px-96 2xl:gap-12 xl:flex xl:flex-row-reverse xl:gap-12 lg:flex lg:flex-row-reverse lg:gap-12 md:flex md:flex-col md:gap-32"
            >
                <ImageSection
                    src="/images/event-creation.png"
                    href="https://events-creation-app.vercel.app/"
                    title="Events Creation App"
                />
                <InfoSection
                    heading={heading}
                    span="Events Creation App"
                    info="I developed an Event Creation Web App project using React JS, Node JS, Express JS and MySQL. In this project user can create, update and delete the events."
                    languages={[`MERN-Stack`,`React JS`,`Node JS`,`Express JS`,`MySQL`]}
                    gitLink="https://github.com/nimjeprathamesh/events-creation"
                    liveLink="https://events-creation-app.vercel.app/"
                />
            </div>
        </div>
    );
};