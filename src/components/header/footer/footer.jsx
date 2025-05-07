"use client";
import { ThemeContext } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { useContext } from 'react';

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div
                className={cn(
                    "relative flex gap-8 bottom-[3rem] w-24 right-36 justify-start",
                    theme === "dark" ? "bg-black" : "bg-white"
                )}
            >
                <IconButton className="text-black bg-slate-300 hover:bg-slate-500">
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    className="text-[#08409E] bg-slate-300 hover:bg-slate-500"
                    onClick={() => window.open("https://www.linkedin.com/in/prathamesh-nimje-94b43821a/", "_blank")}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    className="text-[#08409E] bg-slate-300 hover:bg-slate-500"
                    onClick={() => window.open("https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage", "_blank")}
                >
                    <Image
                        src="/images/indeed.png"
                        width={25}
                        height={25}
                        alt='indeed'
                        className='rounded-full hover:bg-slate-400'
                    />
                </IconButton>
            </div>
            <div
                className={cn(
                    "relative flex gap-6 bottom-[6.6rem] mt-4 w-20 left-[4.5rem]",
                    theme === "dark" ? "bg-black" : "bg-white"
                )}
            >
                <IconButton
                    className="text-[#08409E] bg-slate-300 hover:bg-slate-400"
                    onClick={() => window.open("https://www.naukri.com/mnjuser/profile?id=&altresid", "_blank")}
                >
                    <Image
                        src="/images/naukri.png"
                        width={25}
                        height={25}
                        alt='indeed'
                        className='rounded-full hover:bg-slate-400'
                    />
                </IconButton>
            </div>
        </div>
    );
}