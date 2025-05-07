"use client";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({ children, className, onClick }) => {
    return (
        <div onClick={onClick} className={cn( "rounded-full ", className )}>
            {children}
        </div>
    );
};
