import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";
import { useContext } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function InfoSection({liveLink, gitLink, heading, span, info, languages}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="ml-auto text-right mt-8 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
            <TextGenerateEffect
                words={heading}
                className="text-sm text-[#FF7921] leading-snug"
            />
            <TextGenerateEffect
                words={span}
                className={cn(
                    "pb-2 text-2xl font-bold 2xl:pb-6 xl:pb-6 lg:pb-6 md:pb-4 leading-snug w-full",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <div className={cn(
                "p-6 rounded-md shadow-xl 2xl:p-6 xl:p-6 lg:p-6 md:p-4",
                theme === "dark" ? "text-white bg-[#112240]" : "text-black bg-[#ccc]"
            )}>
                <TextGenerateEffect
                    words={info}
                    className={cn(
                        "text-base font-normal font-serif",
                        theme === "dark" ? "text-white" : "text-black"
                    )}
                />
            </div>
            <div className="flex justify-end gap-2rem w-full lg:justify-start">
                <TextGenerateEffect
                    words={languages.map((tech, index) => (
                        <span key={index} className="w-full">
                            {tech}
                        </span>
                    ))}
                    className={cn(
                        "text-sm font-normal text-right w-full ml-2 px-2 py-8 2xl:ml-2 2xl:px-2 xl:ml-2 xl:px-2 lg:ml-3 lg:px-1",
                        theme === "dark" ? "text-white" : "text-black"
                    )}
                />
            </div>
            <Link href={gitLink} target="_blank" className="hover:text-[#FF7921]">
                <GitHubIcon />
            </Link>
            <Link href={liveLink} target="_blank" className="ml-8 hover:text-[#FF7921]">
                <OpenInNewIcon />
            </Link>
        </div>
    );
};