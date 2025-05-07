import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useContext } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function ImageSection() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className='w-full 2xl:2/5 xl:w-auto lg:w-3/4 md:w-full'>
            <CardContainer>
                <CardBody
                    className={cn(
                        "relative group/card w-full h-auto rounded-xl p-6 border-2",
                        theme === "dark" ? "bg-transparent border-[#FF7921]" : "bg-gray-200 border-black/[0.2]"
                    )}
                >
                    <CardItem translateZ="100" className="w-full h-full">
                        <Image
                            src="/images/pratham.jpeg"
                            height="200"
                            width="100"
                            className="rounded-xl group-hover/card:shadow-xl h-72 w-full 2xl:w-[30rem] 2xl:h-[30rem] xl:w-80 xl:h-80 lg:w-72 lg:h-80 md:w-[26rem] md:h-96"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    );
};