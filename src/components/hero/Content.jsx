import { cn } from "@/lib/utils";
import Button from "../Button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Content({ theme, words, span, name, info }) {
    return (
        <div className="p-4 w-full 2xl:py-16 2xl:px-72 xl:py-12 xl:px-40 lg:px-16 md:p-12">
            <TextGenerateEffect
                words={words}
                className={cn(
                    "text-[#FF7921] font-medium text-lg leading-snug pb-2 2xl:mt-32 xl:mt-32 lg:mt-32 md:mt-32",
                    theme === "dark" ? "mt-32" : "mt-12"
                )}
            />
            <TypewriterEffectSmooth
                words={span}
                className={cn(
                    "mt-8 leading-snug font-bold text-3xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <TextGenerateEffect
                words={name}
                className={cn(
                    "mt-3 leading-snug font-bold mb-0 text-3xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <TextGenerateEffect
                words={info}
                className={cn(
                    "pt-8 mb-8 font-normal text-base 2xl:w-custom xl:w-custom lg:w-custom",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <Button
                title="View my projects"
                className={cn(
                    "py-[0.6rem] px-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 2xl:px-8 xl:px-8 lg:px-8 md:px-8 rounded-xl relative",
                    theme === "dark" ? null : "xl:mb-4 lg:mb-9 md:mb-40"
                )}
                redirectUrl="https://github.com/nimjeprathamesh/nimjeprathamesh"
            />
        </div>
    );
}