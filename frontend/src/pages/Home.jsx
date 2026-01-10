import { useContext } from "react";
import { motion } from "framer-motion";
import Introduction from "../components/introduction/Introduction";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";
import "../../index.css";
import { MyContext } from "../Context/Context";
import { ToastContainer } from "react-toastify";
import Profile from "../components/profile/Profile.jsx";

const Home = () => {
  const { theme } = useContext(MyContext);

  // Fade-in animation for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`relative ${
        theme === "dark" ? "bg-gray-800" : "bg-soft-white"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero + Profile section */}
      <motion.div
        className="introduction-profile-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={sectionVariants}>
            <Introduction />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Profile />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Skills />
      </motion.div>

      {/* Work Process section */}
      <motion.div
        className="pt-30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WorkProcess />
      </motion.div>

      {/* Portfolio section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Portfolio />
      </motion.div>

      {/* Profession section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Profession />
      </motion.div>

      {/* Contact section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.div>

      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
    </motion.div>
  );
};

export default Home;