import { useContext } from "react";
import { motion } from "framer-motion";
import Roles from "./Roles";
import { MyContext } from "../../Context/Context";
import { rolesData } from "../../utils/constants";

const Profession = () => {
  const { theme } = useContext(MyContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <motion.p
          className={`section-title max-md:text-center ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          What I do?
        </motion.p>

        <motion.div className="mt-6 text-[14px]" variants={itemVariants}>
          <p
            className={`text-xs sm:text-lg font-normal mb-4 ${
              theme === 'light' ? 'text-gray-400' : 'text-gray-300'
            }`}
          >
            I specialize in full-stack web development with MERN (using MySQL),
            building modern mobile apps with React Native, and deploying
            applications on cloud platforms.
          </p>
          <p
            className={`text-xs sm:text-lg font-normal ${
              theme === 'light' ? 'text-gray-400' : 'text-gray-300'
            }`}
          >
            My work combines technical expertise and creativity to deliver
            scalable, user-friendly, and production-ready solutions across web
            and mobile platforms.
          </p>
        </motion.div>

        <motion.a
          href="mailto:nimjeprathamesh1@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello!
        </motion.a>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Profession;