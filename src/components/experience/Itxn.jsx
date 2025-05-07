import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import Image from 'next/image';
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Itxn() {
    const words = (
        <>
            <span className="text-white">React JS Intern</span>{" "}
            <span className="text-[#FF7921]">@Itxn Platform</span>
        </>
    );
    const date = `Nov 2023 - May 2024`;
    const text1 = `Focusing on building and enhancing React applications using React Js.`;
    const text2 = `I have successfully developed custom components, forms and interfaces, leveraging React for dynamic front-end interfaces.`;
    const text3 = `In this company I developed various things for the platform to create Banking related web application and debugged and resolved issues related to React components.`;

    return (
        <div
            className="flex flex-col-reverse relative right-8 px-0 w-64 2xl:position-unset 2xl:px-16 2xl:w-[60rem] 2xl:flex-row xl:position-unset xl:right-0 xl:w-[60rem] xl:flex-row xl:px-16 lg:right-0 lg:position-unset lg:flex-row lg:w-[60rem] lg:pl-0 lg:pr-36 md:position-unset md:right-0 md:px-0 md:w-[36rem] md:flex-col-reverse"
        >
            <div>
                <TextGenerateEffect
                    words={words}
                    className="mt-4 text-2xl text-white font-bold leading-snug 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-6"
                />
                <TextGenerateEffect
                    words={date}
                    className="pb-2 text-sm text-white font-medium leading-snug"
                />
                <div className="mt-4">
                    <div className="flex items-start mt-1 pb-2">
                        <DoubleArrowOutlinedIcon className="text-[#FF7921] mr-4" />
                        <TextGenerateEffect
                            words={text1}
                            className="text-base text-white leading-snug"
                        />
                    </div>
                    <div className="flex items-start mt-1 pb-2">
                        <DoubleArrowOutlinedIcon className="text-[#FF7921] mr-4" />
                        <TextGenerateEffect
                            words={text2}
                            className="text-base text-white leading-snug"
                        />
                    </div>
                    <div className="flex items-start mt-1 pb-2">
                        <DoubleArrowOutlinedIcon className="text-[#FF7921] mr-4" />
                        <TextGenerateEffect
                            words={text3}
                            className="text-base text-white leading-snug"
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image
                    src="/images/itxn-platform.png"
                    width="100"
                    height="100"
                    alt='Radical Global'
                    className='w-40 h-auto mt-4 ml-8 2xl:mt-16 2xl:w-[40rem] 2xl:ml-8 xl:w-[100vh] xl:mt-16 xl:ml-8 lg:mt-20 lg:ml-2 lg:w-[100vh] md:mt-2 md:w-48'
                />
            </div>
        </div>
    );
}