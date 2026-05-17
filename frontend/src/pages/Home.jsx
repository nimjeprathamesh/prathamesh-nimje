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
import Profile from "../components/profile/profile";
/* IMPORT HO GAYA CURSOR TRAIL COMPONENT ENGINE HERE 🛠️ */
import CursorTrail from "../components/common/CursorTrail";

const Home = () => {
  const { theme } = useContext(MyContext);

  const pageWrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const sectionSectionVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      }`}
      initial="hidden"
      animate="visible"
      variants={pageWrapperVariants}
    >
      {/* GLOBAL HIGH-FIDELITY DYNAMIC CURSOR TRAIL STREAM ENGINE LAYER */}
      {/* <CursorTrail /> */}

      {/* Background Soft Ambient Mesh Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#9929fb]/3 blur-[160px] rounded-full pointer-events-none select-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#ff9f1c]/3 blur-[140px] rounded-full pointer-events-none select-none" />

      {/* Introduction + Profile Section Layout */}
      <div className="introduction-profile-background w-full">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={sectionSectionVariants}>
            <Introduction />
          </motion.div>
          
          <motion.div variants={sectionSectionVariants}>
            <Profile />
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.div 
        variants={sectionSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Skills />
      </motion.div>

      {/* Work Process Section */}
      <motion.div 
        variants={sectionSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <WorkProcess />
      </motion.div>

      {/* Portfolio Section */}
      <motion.div 
        variants={sectionSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Portfolio />
      </motion.div>

      {/* Profession Section */}
      <motion.div 
        variants={sectionSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Profession />
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        variants={sectionSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Contact />
      </motion.div>

      {/* Toast Notifications */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"} 
      />
    </motion.div>
  );
};

export default Home;