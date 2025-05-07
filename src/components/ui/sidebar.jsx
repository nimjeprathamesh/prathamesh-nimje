"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  // Render only MobileSidebar
  return <MobileSidebar {...props} />;
};

export const MobileSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn("px-4 py-4 flex flex-row items-center justify-between")}
      {...props}
    >
      <div className="flex justify-end z-20">
        <MenuOutlinedIcon
          className={cn(theme === "dark" ? "text-white" : "text-black")}
          onClick={() => setOpen(!open)}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full overflow-scroll 740-640:w-96 inset-0 p-10 z-[100] flex flex-col justify-between shadow-md",
              className,
              theme === "dark"
                ? "bg-[#000] text-white shadow-white"
                : "bg-white text-black shadow-black"
            )}
          >
            {/* Close Icon */}
            <div className={cn(
                "absolute right-6 top-7 z-50 text-neutral-800 dark:text-neutral-200 hover:text-red-700",
                theme === "dark" ? "text-white" : "text-black"
              )}
            >
              <CloseOutlinedIcon onClick={() => setOpen(!open)} />
            </div>

            {/* Sidebar Content */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link, className, ...props }) => {
  const { open, animate } = useSidebar();
  const { theme } = useContext(ThemeContext);
  
  return (
    <Link
      href={link.href}
      className={cn("flex items-center justify-start gap-2 group/sidebar py-2 hover:text-[#FF7921]", className)}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn(
          "text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",
          "group-hover/sidebar:text-[#FF7921]",
          theme === "dark" ? "text-white" : "text-black"
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
