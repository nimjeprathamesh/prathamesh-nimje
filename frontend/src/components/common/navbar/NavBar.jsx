import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { MyContext } from "../../../Context/Context";
import { navItems } from "../../../utils/constants.jsx";

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(MyContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const menuItemsList = navItems.map((item, index) => {
    const isRouterLink = item.url.startsWith("/");
    
    return (
      <li key={item.id} className="block list-none m-0 p-0">
        {isRouterLink ? (
          <RouterLink
            to={item.url}
            target="_blank"
            className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg block relative group ${
              theme === "light" ? "text-slate-700 hover:text-black" : "text-slate-300 hover:text-white"
            } ${location.pathname === item.url ? "bg-[#9929fb]/10 text-[#9929fb]" : ""}`}
            onClick={handleMenuClick}
          >
            {item.name}
            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </RouterLink>
        ) : (
          <ScrollLink
            onClick={handleMenuClick}
            to={item.url.toLowerCase()}
            smooth={true}
            duration={800}
            spy={true}
            offset={-90}
            activeClass="active-nav-pill"
            className={`px-4 py-2 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 rounded-lg block relative group ${
              theme === "light" ? "text-slate-700 hover:text-black" : "text-slate-300 hover:text-white"
            }`}
          >
            {item.name}
            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </ScrollLink>
        )}
      </li>
    );
  });

  return (
    <motion.nav
    className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      theme === "light"
        ? isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-white/10 backdrop-blur-xs py-3 lg:py-4"
        : isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2"
          : "bg-transparent py-3 lg:py-4"
    }`}
    variants={navbarVariants}
    initial="hidden"
    animate="visible"
  >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Branding Group */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Mobile Collapse Toggle */}
          <div className="dropdown lg:hidden relative">
            <div
              tabIndex={0}
              role="button"
              className={`p-2 rounded-xl transition-all ${
                theme === "dark" ? "text-white hover:bg-slate-800" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content absolute left-0 mt-2 w-56 p-2 rounded-2xl shadow-xl border flex flex-col gap-1 list-none ${
                theme === "light" ? "bg-white border-slate-100 text-slate-800" : "bg-slate-900 border-slate-800 text-slate-100"
              }`}
            >
              {menuItemsList}
              <div className="h-px bg-slate-500/10 my-1" />
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium opacity-70">Theme</span>
                <button onClick={toggleTheme} className="p-1.5 rounded-lg bg-slate-500/10">
                  {theme === "light" ? <IoMoonOutline size={16} /> : <TiWeatherSunny size={16} />}
                </button>
              </div>
            </ul>
          </div>

          {/* Logo Branding Icon Block */}
          <ScrollLink
            to="introduction"
            smooth={true}
            duration={800}
            offset={-100}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.img
              src={logo}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shadow-sm object-cover"
              alt="Brand logo"
              whileHover={{ scale: 1.05 }}
            />
          </ScrollLink>
        </div>

        {/* Center/Right Dynamic Desktop Menu Controls */}
        <div className="flex items-center justify-end gap-6 w-full">
          {/* Desktop Horizontal Navigation Row */}
          <ul className="hidden lg:flex items-center gap-2 m-0 p-0 list-none">
            {menuItemsList}
          </ul>

          <div className="hidden lg:block h-5 w-px bg-slate-300 dark:bg-slate-700/60" />

          {/* Core Interactive Functional Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`hidden lg:flex p-2 rounded-xl border transition-all ${
                theme === "light"
                  ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  {theme === "light" ? <IoMoonOutline size={18} /> : <TiWeatherSunny size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/Prathamesh_Nimje_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#ff9f1c] to-[#ff7f1c] border-0 text-white font-bold text-sm tracking-wide shadow-md h-10 px-5 rounded-xl decoration-none"
              whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(255, 159, 28, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </div>
        </div>

      </div>
    </motion.nav>
  );
};

export default NavBar;