import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { MyContext } from "../../../Context/Context";
import { navItems } from "../../../utils/constants.jsx";
import { Browser } from '@capacitor/browser';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(MyContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Desktop nav link
  const renderDesktopNavLink = (item) => {
    const isRouterLink = item.url.startsWith("/");

    const commonClasses = `text-sm font-bold tracking-wide transition-all duration-300 rounded-xl relative group no-underline px-4 py-2 ${theme === "light"
      ? "text-slate-700 hover:text-black hover:bg-slate-100/50"
      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
      }`;

    if (isRouterLink) {
      return (
        <RouterLink
          to={item.url}
          target="_blank"
          className={`${commonClasses} ${location.pathname === item.url ? "bg-[#9929fb]/10 text-[#9929fb]" : ""
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
          <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={item.url.toLowerCase()}
        smooth={true}
        duration={800}
        spy={true}
        offset={-90}
        activeClass="active-nav-pill-active"
        className={commonClasses}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.name}
        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </ScrollLink>
    );
  };

  // Mobile nav link — completely separate, no flex/inline-block confusion
  const renderMobileNavLink = (item) => {
    const isRouterLink = item.url.startsWith("/");

    const commonClasses = `text-sm font-bold tracking-wide transition-all duration-300 rounded-xl no-underline py-3 px-5 ${theme === "light"
      ? "text-slate-700 hover:text-black hover:bg-slate-100/50"
      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
      }`;

    if (isRouterLink) {
      return (
        <RouterLink
          to={item.url}
          target="_blank"
          className={`${commonClasses} ${location.pathname === item.url ? "bg-[#9929fb]/10 text-[#9929fb]" : ""
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ display: "block", width: "100%", textAlign: "left" }}
        >
          {item.name}
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={item.url.toLowerCase()}
        smooth={true}
        duration={800}
        spy={true}
        offset={-90}
        activeClass="active-nav-pill-active"
        className={commonClasses}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ display: "block", width: "100%", textAlign: "left", cursor: "pointer" }}
      >
        {item.name}
      </ScrollLink>
    );
  };

  const handleResumeOpen = async (e) => {
    e.preventDefault();

    const pdfUrl = `${window.location.origin}/Prathamesh_Nimje_Resume.pdf`;
    console.log("window.location.origin", window.location.origin);
    try {
      await Browser.open({ url: pdfUrl });
    } catch (error) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${theme === "light"
        ? isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-white/10 backdrop-blur-xs py-3.5"
        : isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2"
          : "bg-transparent py-3.5"
        }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left Branding Logo Section */}
        <ScrollLink
          to="introduction"
          smooth={true}
          duration={800}
          offset={-100}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <motion.img
            src={logo}
            className="h-9 w-9 sm:h-10 sm:w-10"
            alt="Logo"
            whileHover={{ scale: 1.05 }}
          />
        </ScrollLink>

        {/* Desktop View Menu Section */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex flex-row items-center gap-1 m-0 p-0 list-none">
            {navItems.map((item) => (
              <li key={item.id} style={{ display: "inline-block", listStyle: "none" }}>
                {renderDesktopNavLink(item)}
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-800" />

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${theme === "light"
                ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
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
                  {theme === "light" ? (
                    <IoMoonOutline size={18} />
                  ) : (
                    <TiWeatherSunny size={18} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="/Prathamesh_Nimje_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#ff9f1c] to-[#ff7f1c] border-0 text-white font-bold text-sm tracking-wide shadow-md h-10 px-5 rounded-xl no-underline"
              whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(255, 159, 28, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </div>
        </div>

        {/* Mobile Navbar Hamburger Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all ${theme === "light"
              ? "bg-slate-50 border-slate-200 text-slate-700"
              : "bg-slate-900 border-slate-800 text-slate-300"
              }`}
          >
            {theme === "light" ? (
              <IoMoonOutline size={18} />
            ) : (
              <TiWeatherSunny size={18} />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-all border ${theme === "dark"
              ? "text-white border-slate-800 bg-slate-900/60"
              : "text-slate-800 border-slate-200 bg-slate-50/60"
              }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Vertical Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full overflow-hidden border-t lg:hidden relative z-50 shadow-inner ${theme === "light"
              ? "bg-white border-slate-200"
              : "bg-slate-950 border-slate-800/80"
              }`}
          >
            <div className="px-4 py-6">

              {/* KEY FIX: nav items as a plain div column, no ul/li flex confusion */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  width: "100%",
                }}
              >
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    style={{ display: "block", width: "100%" }}
                  >
                    {renderMobileNavLink(item)}
                  </div>
                ))}
              </div>

              <div
                style={{
                  height: "1px",
                  background: "rgba(100,100,100,0.1)",
                  margin: "16px 0",
                  width: "100%",
                }}
              />

              <motion.a
                onClick={handleResumeOpen}
                href="/Prathamesh_Nimje_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  background: "linear-gradient(to right, #ff9f1c, #ff7f1c)",
                  color: "#fff",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(255,159,28,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;