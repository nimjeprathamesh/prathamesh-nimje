import { cn } from "@/lib/utils";
import { Tabs } from "../ui/tabs";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { tabs } from "./Tabs.jsx";

export default function Content({ theme, words}) {
    return (
        <div className="p-4 w-full 2xl:py-16 2xl:px-72 xl:py-12 xl:px-40 lg:px-16 md:p-12">
            <TextGenerateEffect
                words={words}
                className={cn(
                    "text-2xl font-bold leading-snug 2xl:mt-24 xl:mt-40 lg:mt-72 md:mt-96",
                    theme === "dark" ? "text-white mt-40" : "text-black mt-96"
                )}
            />
            <div
                className={cn(
                    "h-[68rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-12",
                    theme === "dark" ?
                    "2xl:h-[33rem] xl:h-[32rem] lg:h-[33rem] md:h-[41rem]" :
                    "2xl:h-[33rem] xl:h-[32rem] lg:h-[30rem] md:h-[45rem]"
                )}
            >
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}