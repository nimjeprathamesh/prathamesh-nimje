"use client";
import { ThemeContext } from "@/context/ThemeContext.jsx";
import { cn } from "@/lib/utils";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Image from "next/image";
import { useContext, useState } from "react";
import Button from "../Button.jsx";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar.jsx";
import CustomizedSwitches from "./ThemeToggle.jsx";
import Footer from "./footer/footer.jsx";

export default function MobileMenu() {
  const { theme } = useContext(ThemeContext);

  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <HomeOutlinedIcon
          className={cn(
            "h-5 w-5 flex-shrink-0 group-hover/sidebar:translate-x-1 transition duration-150",
            "group-hover/sidebar:text-[#FF7921]",
            theme === "dark" ? "text-white" : "text-black",
          )}
        />
      ),
    },
    {
      label: "About",
      href: "#",
      icon: (
        <InfoOutlinedIcon
          className={cn(
            "h-5 w-5 flex-shrink-0 group-hover/sidebar:translate-x-1 transition duration-150",
            "group-hover/sidebar:text-[#FF7921]",
            theme === "dark" ? "text-white" : "text-black",
          )}
        />
      ),
    },
    {
      label: "Experience",
      href: "#",
      icon: (
        <WorkOutlineOutlinedIcon
          className={cn(
            "h-5 w-5 flex-shrink-0 group-hover/sidebar:translate-x-1 transition duration-150",
            "group-hover/sidebar:text-[#FF7921]",
            theme === "dark" ? "text-white" : "text-black",
          )}
        />
      ),
    },
    {
      label: "Projects",
      href: "#",
      icon: (
        <ArticleOutlinedIcon
          className={cn(
            "h-5 w-5 flex-shrink-0 group-hover/sidebar:translate-x-1 transition duration-150",
            "group-hover/sidebar:text-[#FF7921]",
            theme === "dark" ? "text-white" : "text-black",
          )}
        />
      ),
    },

    {
      label: "Contact",
      href: "#",
      icon: (
        <CallOutlinedIcon
          className={cn(
            "h-5 w-5 flex-shrink-0 group-hover/sidebar:translate-x-1 transition duration-150",
            "group-hover/sidebar:text-[#FF7921]",
            theme === "dark" ? "text-white" : "text-black",
          )}
        />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={cn("rounded-md w-0")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col flex-1 gap-4 mt-8">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
            <Button
                title="Resume"
                className='px-4 py-2 rounded-full'
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <SidebarLink
              link={{
                label: "Prathamesh Nimje",
                href: "#",
                icon: (
                  <Image
                    src="/images/pratham.jpeg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
            <Footer />
            <CustomizedSwitches />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
