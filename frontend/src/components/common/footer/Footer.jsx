import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { navItems } from "../../../utils/constants.jsx";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Infinite Soft Radial Pulsing Glow Variant
  const pulseAura = {
    animate: {
      scale: [1, 1.04, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.footer
      className="w-full pt-32 pb-12 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/40 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Soft Aura Blob */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#9929fb]/3 blur-[100px] rounded-full pointer-events-none"
        variants={pulseAura}
        animate="animate"
      />

      {/* Upper Grid Layout Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-slate-800/30 w-full relative z-10">
        
        {/* Brand Logo Identity Anchor */}
        <motion.div variants={fadeInUpVariants}>
          <ScrollLink
            to="introduction"
            smooth={true}
            duration={800}
            offset={-100}
            className="flex items-center gap-3 border-0 cursor-pointer group"
          >
            <motion.img
              src={logo}
              className="h-10 w-10 rounded-xl object-cover shadow-md"
              alt="Brand Identity Asset Logo"
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            />
          </ScrollLink>
        </motion.div>

        {/* Horizontal Navigation List Map */}
        <motion.ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 m-0 p-0 list-none">
          {navItems.map((item, index) => {
            const isRouter = item.url.startsWith("/");
            return (
              <motion.li key={item.id} custom={index} variants={fadeInUpVariants} className="block list-none">
                {isRouter ? (
                  <RouterLink
                    target="_blank"
                    to={item.url.toLowerCase()}
                    className="px-3 py-1.5 text-sm font-bold text-slate-400 hover:text-white transition-colors duration-300 rounded-lg block relative group decoration-none"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </RouterLink>
                ) : (
                  <ScrollLink
                    onClick={handleMenuClick}
                    to={item.url.toLowerCase()}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-90}
                    className="px-3 py-1.5 text-sm font-bold text-slate-400 hover:text-white transition-colors duration-300 rounded-lg block cursor-pointer relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#9929fb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </ScrollLink>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Bottom Rights Metadata Column */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 w-full text-slate-500 font-bold text-xs sm:text-sm relative z-10">
        
        <motion.p variants={fadeInUpVariants} className="m-0 tracking-wide">
          Copyright &copy; {copyrightYear} Prathamesh Nimje. All rights reserved.
        </motion.p>

        {/* Pulse Heart Indicator Action Link */}
        <motion.p variants={fadeInUpVariants} className="m-0 flex items-center gap-1.5 font-semibold">
          <span>Architected with</span>
          <motion.span
            className="inline-block text-rose-500 cursor-pointer select-none"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.4 }}
          >
            ❤️
          </motion.span>
          <span>by me</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;