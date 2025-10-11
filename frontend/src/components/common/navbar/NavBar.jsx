"use client"

import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { MyContext } from "@/Context/Context";
import { navItems } from "@/utils/constants.jsx";
import logo from "@/assets/logo.png";
import Image from "next/image";

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const pathname = usePathname();
  const { theme, toggleTheme } = useContext(MyContext);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      {item.url.startsWith("/") ? (
        <Link
          href={item.url}
          className={`px-5 py-3 mx-1 ${theme === 'light'
              ? 'hover:text-picto-primary text-black'
              : 'hover:text-picto-primary text-white hover:bg-[#1E2939] hover:rounded-md'
            } ${pathname === item.url ? "bg-[#9929fb] text-white rounded-md" : ""}`}
          onClick={handleMenuClick}
        >
          {item.icon}
          {item.name}
        </Link>
      ) : (
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
          className={`px-5 py-3 mx-1 ${theme === 'light'
              ? 'hover:text-picto-primary text-black'
              : 'hover:text-picto-primary text-white hover:bg-[#1E2939] hover:rounded-md'
            }`}
        >
          {item.icon}
          {item.name}
        </ScrollLink>
      )}
    </li>
  ));

  const resumeMobile = (
    <li className="p-2">
      <a
        href="/Prathamesh_Nimje_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-start p-2 rounded-md transition-colors ${theme === 'light'
            ? 'hover:bg-gray-100 text-black'
            : 'hover:bg-gray-700 text-white'
          }`}
      >
        <span className="font-medium">Resume</span>
      </a>
    </li>
  );

  const themeToggleMobile = (
    <li className="p-2">
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-start p-2 rounded-md transition-colors ${theme === 'light'
            ? 'hover:bg-gray-100'
            : 'hover:bg-gray-700'
          }`}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <TiWeatherSunny className="text-2xl mr-3 text-gray-800" />
        ) : (
          <IoMoonOutline className="text-2xl mr-3 text-soft-white" />
        )}
        <span className="font-medium">Toggle Theme</span>
      </button>
    </li>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-1000 ${theme === 'light'
          ? position > 50
            ? "bg-soft-white border-b border-gray-300"
            : "bg-white border-white"
          : position > 50
            ? "bg-gray-800 border-b border-gray-700"
            : "bg-gray-900 border-gray-900"
        }`}
    >
      <div className="navbar flex justify-between mx-auto content">
        {/* Left Section (Logo + Dropdown) */}
        <div className="flex items-center justify-between">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost lg:hidden ${theme === 'dark' ? 'text-white bg-gray-800 border-none shadow-gray-600 mr-3' : ''}`}
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
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap ${theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white'
                }`}
            >
              {menu}
              {resumeMobile}
              {themeToggleMobile}
            </ul>
          </div>

          {/* Logo */}
          <ScrollLink
            href="#introduction"
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5 cursor-pointer"
          >
            <Image
              src={logo}
              alt="logo"
              width={56}  // Adjust based on your needs (h-14 = 56px)
              height={56}
              className="h-8 sm:h-14 rounded-2xl"
            />
            <p className={`text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold ${theme === 'light' ? 'text-black' : 'text-white'
              }`}>
              Prathamesh
            </p>
          </ScrollLink>
        </div>

        {/* Right Section (Menu + Resume Button + Theme Toggle) */}
        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="hidden lg:block">
            <a
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="/Prathamesh_Nimje_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
          {/* Theme Toggle Button - hidden on mobile */}
          <button
            onClick={toggleTheme}
            className={`hidden lg:block ml-2 p-2 rounded-lg transition-colors ${theme === 'light'
                ? 'hover:bg-gray-200'
                : 'hover:bg-gray-700'
              }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <TiWeatherSunny className="text-3xl text-gray-800" />
            ) : (
              <IoMoonOutline className="text-3xl text-soft-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;