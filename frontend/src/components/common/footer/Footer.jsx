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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.3 },
    },
  };

  const heartVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="pt-25 md:pt-40 content max-2xl:px-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Main Footer Content */}
      <motion.div
        className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo Section */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <ScrollLink
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center border-0 cursor-pointer"
          >
            <motion.img
              src={logo}
              className="h-8 sm:h-14 rounded-2xl"
              alt="logo"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prathamesh
            </motion.p>
          </ScrollLink>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex mx-7 max-md:my-7 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {navItems.map((item, index) =>
            item.url.startsWith("/") ? (
              <motion.div
                key={item.id}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <RouterLink
                  target="_blank"
                  to={item.url.toLowerCase()}
                  smooth={true}
                  duration={1000}
                  offset={-140}
                  className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer"
                >
                  <motion.span
                    initial={{ color: "#E5E7EB" }}
                    whileHover={{ color: "#FFFFFF" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-white"
                    variants={underlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </RouterLink>
              </motion.div>
            ) : (
              <motion.div
                key={item.id}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ScrollLink
                  onClick={handleMenuClick}
                  to={item.url.toLowerCase()}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={-140}
                  activeStyle={{ color: "#FFF", fontWeight: "bold" }}
                  className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer"
                >
                  <motion.span
                    initial={{ color: "#E5E7EB" }}
                    whileHover={{ color: "#FFFFFF" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-white"
                    variants={underlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                </ScrollLink>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          className="text-[12px] sm:text-[16px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Copyright &copy; {copyrightYear}.
        </motion.p>
      </motion.div>

      {/* Footer Credit */}
      <motion.p
        className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Developed{" "}
        <motion.span
          display="inline-block"
          whileHover="hover"
          variants={heartVariants}
        >
          ❤️
        </motion.span>{" "}
        by{" "}
        <motion.a
          className="font-bold cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, color: "#9B59B6" }}
          transition={{ duration: 0.2 }}
        >
          me
        </motion.a>
      </motion.p>
    </motion.div>
  );
};

export default Footer;