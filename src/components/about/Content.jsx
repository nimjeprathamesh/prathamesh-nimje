import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ImageSection from "./imageSection.jsx";
import InfoSection from "./infoSection.jsx";

export default function Content({ theme, words, info, heading, techno, logy }) {
    return (
        <div className="p-4 w-full 2xl:py-16 2xl:px-72 xl:py-12 xl:px-40 lg:px-16 md:p-12">
            <TextGenerateEffect
                words={words}
                className={cn(
                    "mt-56 pb-8 text-2xl font-bold 2xl:mt-24 2xl:pb-6 xl:mt-24 xl:pb-6 lg:mt-40 lg:pb-6 md:pb-4 leading-snug",
                    theme === "dark" ? "text-white" : "text-black md:mt-[30rem]"
                )}
            />
            <div
                className="flex gap-12 flex-col 2xl:flex-row 2xl:gap-12 xl:flex-row xl:gap-12 lg:gap-12 lg:flex-row md:gap-8 md:flex-col"
            >
                <ImageSection />
                <InfoSection info={info} heading={heading} techno={techno} logy={logy} />
            </div>
        </div>
    );
}