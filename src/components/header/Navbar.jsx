import { cn } from '@/lib/utils.js';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useState } from "react";
import Button from "../Button.jsx";
import { Menu, MenuItem } from "../ui/navbar-menu.jsx";

export default function Navbar({className}) {
    const [active, setActive] = useState(null);

    return (
        <div
            className={cn(
                "fixed top-2 inset-l mx-auto z-50 2xl:max-w-4xl xl:max-w-4xl lg:max-w-3xl md:left-1 md:right-0 md:max-w-[39rem]",
                className
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Home"
                    href="/#home"
                    icon={<HomeOutlinedIcon />}
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="About"
                    href="/#about"
                    icon={<InfoOutlinedIcon />}
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Experience"
                    href="/#experience"
                    icon={<WorkOutlineOutlinedIcon />}
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Projects"
                    href="/#projects"
                    icon={<ArticleOutlinedIcon />}
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Contact"
                    href="/#contact"
                    icon={<CallOutlinedIcon />}
                />
                <Button
                    title="Resume"
                    className='px-4 py-2 rounded-full'
                />
            </Menu>
        </div>
    );
}