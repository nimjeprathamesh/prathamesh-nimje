import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useContext } from "react";
import { PinContainer } from "../ui/3d-pin";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function ImageSection({src, href, title}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <PinContainer title={title} href=''>
                <div
                    className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[19rem] h-80 2xl:w-[25rem] 2xl:p-4 2xl:h-80 xl:w-[25rem] xl:p-4 xl:h-80 lg:w-96 lg:p-4 lg:h-80 md:w-[30rem] md:p-4 md:h-[25rem]"
                    onClick={() => window.open(href, "_blank")}
                >
                    <div
                        className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                    >
                        <Image
                            src={src}
                            width="200"
                            height="100"
                            alt="project 1"
                            className="w-full h-100 rounded-lg 2xl:h-[17rem] xl:h-[17rem] lg:h-[17rem] md:h-[22rem]"
                        />
                    </div>
                </div>
            </PinContainer>
        </div>
    );
};