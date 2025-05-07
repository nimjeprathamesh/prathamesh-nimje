import { cn } from "@/lib/utils";
import Button from "../Button";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Content({ theme, words, span, info }) {
    return (
        <div
            className={cn(
                "flex flex-col items-center w-full 2xl:py-16 2xl:px-72 xl:py-40 xl:px-40 lg:px-16 md:p-12",
                theme === "dark" ? "py-40" : null
            )}
        >
            <TextGenerateEffect
                words={words}
                className="text-[#FF7921] font-bold text-lg leading-snug pb-2 2xl:mt-32 xl:mt-0 lg:mt-32 md:mt-32"
            />
            <TextGenerateEffect
                words={span}
                className={cn(
                    "mt-3 text-center leading-snug font-bold mb-0 text-3xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <TextGenerateEffect
                words={info}
                className={cn(
                    "pt-8 mb-8 font-normal text-base text-center 2xl:w-[35rem] xl:w-[35rem] lg:w-[35rem] md:w-[35rem]",
                    theme === "dark" ? "text-white" : "text-black"
                )}
            />
            <Button
                title="Mail Me"
                className={cn(
                    "text-center py-[0.6rem] px-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 2xl:px-8 xl:px-8 lg:px-8 md:px-8 rounded-xl",
                    theme === "dark" ? null : "xl:mb-4 lg:mb-9 md:mb-40"
                )}
                redirectUrl="mailto:nimjeprathamesh1@gmail.com"
            />
        </div>
    );
}