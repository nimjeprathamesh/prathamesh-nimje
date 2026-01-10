import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../Context/Context";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const { theme } = useContext(MyContext);

  const roleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      boxShadow:
        theme === 'light'
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: { width: "5px" },
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className={`p-4 xs:p-8 h-auto ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden ${
        theme === 'light'
          ? 'bg-white shadow-gray-300'
          : 'bg-gray-700 shadow-gray-900'
      }`}
      variants={roleVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="bg-picto-primary absolute start-0 h-full mt-[-16px] xs:mt-[-32px]"
        animate={mouseHover ? { width: "5px" } : { width: "0px" }}
        transition={{ duration: 0.2 }}
      />

      <div>
        <motion.p
          className={`text-xl sm:text-2xl font-semibold pb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {role?.title}
        </motion.p>

        <motion.p
          className={`text-[13px] sm:text-[16px] font-normal ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {role?.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Roles;