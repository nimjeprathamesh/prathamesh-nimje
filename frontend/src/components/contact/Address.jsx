import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../Context/Context";

const Address = ({ item, index }) => {
  const [hover, setHover] = useState(false);
  const { theme } = useContext(MyContext);

  const addressVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    initial: {
      backgroundColor: theme === 'light' ? "#EDD8FF80" : "#4a1a6e",
    },
    hover: {
      backgroundColor: "#9B59B6",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] max-sm:mx-auto ${
        theme === 'light'
          ? 'bg-white shadow-gray-200'
          : 'bg-gray-700 shadow-gray-900'
      }`}
      variants={addressVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className={`h-10 md:h-12 aspect-square center rounded-[4px] flex items-center justify-center`}
        animate={hover ? { backgroundColor: "#9B59B6" } : { backgroundColor: theme === 'light' ? "#EDD8FF80" : "#4a1a6e" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={hover ? { scale: 1.1, color: "#fff" } : { scale: 1, color: "#9B59B6" }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon
            icon={item?.icon}
            className="text-lg md:text-xl"
          />
        </motion.div>
      </motion.div>

      <motion.div className="ms-3.25">
        <motion.p
          className={`text-[12px] md:text-[14px] font-normal ${
            theme === 'light' ? 'text-[#424E60]' : 'text-gray-400'
          }`}
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {item?.title}:
        </motion.p>

        <motion.p
          className={`text-[14px] md:text-[16px] font-medium ${
            theme === 'light' ? 'text-[#132238]' : 'text-white'
          }`}
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {item?.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Address;