import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import StarIcon from '@mui/icons-material/Star';
import { useContext } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function InfoSection({info, heading, techno, logy}) {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="w-full 2xl:w-3/5 xl:w-3/5 xl:mt-4 md:w-full">
            <TextGenerateEffect
                words={info}
                className={cn(
                    'pb-2 text-base font-medium leading-snug mt-2 2xl:mt-4 lg:mt-0',
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <TextGenerateEffect
                words={heading}
                className={cn(
                    'pb-2 text-base font-medium leading-snug mt-4 2xl:mt-12 xl:mt-8',
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <div className="flex gap-12 text-sm mt-4">
                <TextGenerateEffect
                    words={techno.map((tech, index) => (
                        <span key={index} className="flex items-center gap-2 mt-2 2xl:mt-4">
                            <StarIcon className="text-[#FF7921]" />
                            {tech}
                        </span>
                    ))}
                    className={cn(theme === "dark" ? "text-white" : "text-black")}
                />
                <TextGenerateEffect
                    words={logy.map((tech, index) => (
                        <span key={index} className="flex items-center gap-2 mt-2 2xl:mt-4">
                            <StarIcon className="text-[#FF7921]" />
                            {tech}
                        </span>
                    ))}
                    className={cn(theme === "dark" ? "text-white" : "text-black")}
                />
            </div>
        </div>
    );
};