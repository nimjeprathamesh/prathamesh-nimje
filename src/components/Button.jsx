"use client";
import { cn } from "@/lib/utils.js";
import { ButtonsCard } from "./ui/tailwindcss-buttons.jsx";

export default function Button({title, className, redirectUrl}) {
    const buttons = [
        {
            name: "Shimmer",
            description: "Shimmer button for your website",
            showDot: false,
            component: (
            <button
                className={cn(
                    "animate-shimmer cursor-pointer active:translate-y-[2px] bg-[linear-gradient(110deg,#FF7921,45%,#FFA351,55%,#FF7921)] bg-[length:200%_100%] font-bold text-white transition-colors focus:outline-none hover:bg-[linear-gradient(110deg,#e65c00,45%,#ff944d,55%,#e65c00)] z-100",
                    className
                )}
                onClick={() => window.open(redirectUrl, "_blank")}
            >
                {title}
            </button>
            ),
        },
    ];

    return (
        <>
            {buttons.map((button, idx) => (
            <ButtonsCard key={idx}>
                {button.component}
            </ButtonsCard>
            ))}
        </>
    );
}