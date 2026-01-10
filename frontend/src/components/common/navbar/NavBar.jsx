import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
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
  const [position, setPosition] = useState(0);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(MyContext);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants - NO POSITION CHANGES
  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      backgroundColor: "rgba(155, 89, 182, 0.15)",
      borderRadius: "0.5rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      backgroundColor: "rgba(155, 89, 182, 0.25)",
      transition: { duration: 0.1 },
    },
  };

  const logoImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      filter: "brightness(1.15) drop-shadow(0 0 12px rgba(155, 89, 182, 0.6))",
      transition: { duration: 0.3 },
    },
  };

  const logoTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      color: "#9B59B6",
      textShadow: "0 0 10px rgba(155, 89, 182, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const themeToggleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
    hover: {
      filter: "drop-shadow(0 0 8px rgba(155, 89, 182, 0.6))",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      rotate: 90,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      rotate: 180,
      transition: { duration: 0.4 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuButtonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      backgroundColor: "rgba(155, 89, 182, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: {
      backgroundColor: "rgba(155, 89, 182, 0.3)",
    },
  };

  const resumeButtonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
    hover: {
      backgroundColor: "#ff7f1c",
      boxShadow: "0 0 20px rgba(255, 159, 28, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: (i) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.08 + 0.5,
        duration: 0.6,
        ease: "easeOut",
        originX: 0,
      },
    }),
  };

  const menu = navItems.map((item, index) => (
    <motion.li
      key={item.id}
      onMouseDown={(e) => e.preventDefault()}
      custom={index}
      variants={menuItemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      {item.url.startsWith("/") ? (
        <div className="relative">
          <RouterLink
            to={item.url}
            target="_blank"
            className={`px-5 py-3 mx-1 transition-all duration-200 relative z-10 ${
              theme === "light"
                ? "text-black"
                : "text-white"
            } ${
              location.pathname === item.url
                ? "bg-[#9929fb] text-white rounded-md"
                : ""
            }`}
            onClick={handleMenuClick}
          >
            {item.name}
          </RouterLink>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-picto-primary to-transparent"
            custom={index}
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
      ) : (
        <div className="relative">
          <ScrollLink
            onClick={handleMenuClick}
            to={item.url.toLowerCase()}
            smooth={true}
            duration={1000}
            spy={true}
            offset={-140}
            activeStyle={{
              backgroundColor: "#9929fb",
              color: "white",
              borderRadius: "0.375rem",
            }}
            className={`px-6 py-3 mx-1 transition-all duration-200 relative z-10 cursor-pointer ${
              theme === "light"
                ? "text-black"
                : "text-white"
            }`}
          >
            {item.name}
          </ScrollLink>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-picto-primary to-transparent"
            custom={index}
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
      )}
    </motion.li>
  ));

  const resumeMobile = (
    <motion.li
      className="p-2"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: navItems.length * 0.08 + 0.2 }}
    >
      <motion.a
        href="/Prathamesh_Nimje_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-start p-2 rounded-md transition-colors bg-[#ff9f1c] text-[#fff] border-0 font-semibold ml-4 relative overflow-hidden"
        whileHover={{ backgroundColor: "#ff7f1c" }}
        whileTap={{ opacity: 0.8 }}
      >
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.4 }}
        />
        <span className="font-medium relative z-10">Resume</span>
      </motion.a>
    </motion.li>
  );

  const themeToggleMobile = (
    <motion.li
      className="p-2"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: (navItems.length + 1) * 0.08 + 0.2 }}
    >
      <motion.button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-start p-2 rounded-md transition-colors ${
          theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
        }`}
        aria-label="Toggle theme"
        whileHover={{ backgroundColor: theme === "light" ? "rgba(0,0,0,0.05)" : "rgba(155,89,182,0.2)" }}
        whileTap={{ opacity: 0.8 }}
      >
        <motion.div
          key={theme}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {theme === "light" ? (
            <TiWeatherSunny className="text-2xl mr-3 text-gray-800" />
          ) : (
            <IoMoonOutline className="text-2xl mr-3 text-soft-white" />
          )}
        </motion.div>
        <span className="font-medium">Toggle Theme</span>
      </motion.button>
    </motion.li>
  );

  return (
    <motion.div
      className={`sticky top-0 z-50 transition-all duration-1000 ${
        theme === "light"
          ? position > 50
            ? "bg-soft-white border-b border-gray-300"
            : "bg-white border-white"
          : position > 50
          ? "bg-gray-800 border-b border-gray-700"
          : "bg-gray-900 border-gray-900"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar flex justify-between mx-auto content p-0">
        {/* Left Section (Logo + Dropdown) */}
        <div className="flex items-center justify-between">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <motion.div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost lg:hidden ${
                theme === "dark"
                  ? "text-white bg-gray-800 border-none shadow-gray-600 mr-3"
                  : ""
              }`}
              variants={mobileMenuButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </motion.div>
            <motion.ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
            >
              {menu}
              {resumeMobile}
              {themeToggleMobile}
            </motion.ul>
          </div>

          {/* Logo */}
          <motion.div
            whileHover="hover"
            className="flex items-center cursor-pointer"
          >
            <ScrollLink
              href="#introduction"
              to="introduction"
              smooth={true}
              duration={900}
              className="flex items-center border-0 lg:max-xxl:ps-5"
            >
              <motion.img
                src={logo}
                className="h-8 sm:h-14 rounded-2xl"
                alt="logo"
                variants={logoImageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              />
              <motion.p
                className={`text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
                variants={logoTextVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Prathamesh
              </motion.p>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Right Section (Menu + Resume Button + Theme Toggle) */}
        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>

          <motion.a
            href="/Prathamesh_Nimje_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block btn btn-sm xs:btn-md sm:btn-lg bg-[#ff9f1c] text-[#fff] border-0 font-semibold ml-4 py-3"
            variants={resumeButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Resume
          </motion.a>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`hidden lg:block ml-2 p-2 rounded-lg transition-colors ${
              theme === "light"
                ? "hover:bg-gray-200"
                : "hover:bg-gray-700"
            }`}
            aria-label="Toggle theme"
            variants={themeToggleVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div
              key={theme}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {theme === "light" ? (
                <TiWeatherSunny className="text-3xl text-gray-800" />
              ) : (
                <IoMoonOutline className="text-3xl text-soft-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;